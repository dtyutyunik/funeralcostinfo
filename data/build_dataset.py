#!/usr/bin/env python3
"""Build the funeral-cost transparency dataset (model v1).

Inputs:
  - data/raw_bea_rpp1224.xlsx : BEA Regional Price Parities, Dec 2024 release (2023 data), Table 2
Outputs:
  - data/methodology.json     : anchors, RPP table, model spec, sources, limitations
  - data/state_estimates.csv  : 50-state modeled estimates for all service types
  - data/SOURCES.md           : source log with URLs + retrieval dates
  - site/data/estimates.json  : site-ready dataset (copied by this script)
"""
import csv, json, math, os
from datetime import date
import openpyxl

HERE = os.path.dirname(os.path.abspath(__file__))
SITE_DATA = os.path.join(os.path.dirname(HERE), "site", "data")
TODAY = "2026-09-23"

# ---------------------------------------------------------------- NFDA anchors
# NFDA 2023 Member General Price List Study medians, as published in the
# 2024 NFDA Cremation & Burial Report, p.11 ("NFDA 2023 General Price List
# Burial- and Cremation-Related Charges", 2023 Median Charges).
# Retrieved 2026-09-23 from:
# https://content.nfda.org/Portals/0/2024_NFDA_Cremation%20and%20Burial%20Report.pdf
ANCHORS = {
    "traditional_burial": {
        "value": 8300,
        "label": "Funeral with viewing and burial (vault not included)",
        "nfda_item": "Adult casketed funeral with viewing and ceremony followed by burial (vault not included)",
        "source": "nfda_2023_gpl",
    },
    "burial_with_vault": {
        "value": 9995,
        "label": "Funeral with viewing, burial and vault",
        "nfda_item": "NFDA 2023 GPL Study headline figure with vault (widely reported from NFDA release; "
                     "report table lists the vault-not-included median of $8,300)",
        "source": "nfda_2023_gpl_press",
    },
    "cremation_with_service": {
        "value": 6280,
        "label": "Funeral with viewing and cremation",
        "nfda_item": "Adult casketed funeral with viewing and ceremony followed by cremation",
        "source": "nfda_2023_gpl",
    },
    "direct_cremation": {
        "value": 2750,
        "label": "Direct cremation (container provided by funeral home)",
        "nfda_item": "Direct cremation (container provided by funeral home)",
        "source": "nfda_2023_gpl",
    },
    "direct_burial": {
        "value": 3720,
        "label": "Immediate burial (container provided by funeral home)",
        "nfda_item": "Immediate burial (container provided by funeral home)",
        "source": "nfda_2023_gpl",
    },
    # No NFDA median is published for green burial. Modeled as a stated assumption:
    # green burial drops embalming (~$845 median), a metal casket (~$2,500 median) in
    # favor of a simple biodegradable container, the vault, and typically the viewing.
    # 0.60 x traditional burial is a conservative, documented planning factor.
    "green_burial": {
        "value": round(8300 * 0.60),
        "label": "Green burial (stated assumption, no NFDA median published)",
        "nfda_item": None,
        "source": "modeled_assumption",
        "assumption": "0.60 x traditional_burial anchor; drops embalming, metal casket, vault, viewing",
    },
}

# ------------------------------------------------------------------ add-ons
# Calculator add-ons: national midpoints with typical ranges. Cemetery figures
# from Funeral Consumers Alliance of Maryland/DC 2026 comparative costs survey
# (mdfunerals.org). Flowers/obituary labeled as typical market ranges.
ADDONS = {
    "flowers":            {"mid": 275,  "low": 150,  "high": 400,  "label": "Flowers", "note": "typical market range"},
    "obituary":           {"mid": 350,  "low": 200,  "high": 500,  "label": "Newspaper obituary notice", "note": "typical market range"},
    "cemetery_plot":      {"mid": 2500, "low": 1000, "high": 5000, "label": "Cemetery plot", "note": "FCAME 2023 survey via mdfunerals.org"},
    "opening_closing":    {"mid": 2250, "low": 1500, "high": 3000, "label": "Cemetery opening & closing", "note": "FCAME 2023 survey via mdfunerals.org"},
    "grave_marker":       {"mid": 2000, "low": 1000, "high": 3000, "label": "Headstone / grave marker", "note": "FCAME 2023 survey via mdfunerals.org"},
    "vault_addon":        {"mid": 1695, "low": 1200, "high": 2500, "label": "Burial vault (if not included)", "note": "derived: $9,995 - $8,300 NFDA medians"},
}

# NFDA projected 2035 cremation rates for the 5 Phase-0 states
# (2024 NFDA Cremation & Burial Report, p.8 map "Percent Cremations, 2035").
CREMATION_2035 = {"CA": 81.5, "TX": 70.2, "FL": 79.8, "NY": 70.7, "MS": 54.5}

STATE_NAMES = {
    "AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas", "CA": "California",
    "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware", "FL": "Florida", "GA": "Georgia",
    "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa",
    "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MD": "Maryland",
    "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi", "MO": "Missouri",
    "MT": "Montana", "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey",
    "NM": "New Mexico", "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio",
    "OK": "Oklahoma", "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island", "SC": "South Carolina",
    "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VT": "Vermont",
    "VA": "Virginia", "WA": "Washington", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming",
    "DC": "District of Columbia",
}

def r10(x):
    return int(round(x / 10.0) * 10)

def main():
    wb = openpyxl.load_workbook(os.path.join(HERE, "raw_bea_rpp1224.xlsx"), data_only=True)
    ws = wb["Table 2"]
    # Table 2 cols: A=state, B=all items, C=goods, D=services(housing), E=services(utilities),
    # F=services(other), G=IRPD, H=% change. Data rows 5..~61.
    rpp = {}
    for row in range(5, 70):
        name = ws.cell(row, 1).value
        if not name or not isinstance(name, str):
            continue
        name = name.strip()
        if name.startswith("United States"):
            continue
        vals = {k: ws.cell(row, c).value for k, c in
                [("all_items", 2), ("goods", 3), ("services_housing", 4),
                 ("services_utilities", 5), ("services_other", 6)]}
        if vals["all_items"] is None:
            continue
        rpp[name] = vals

    # Build state list (50 states + DC)
    states = []
    for abbr, name in STATE_NAMES.items():
        if name not in rpp:
            raise SystemExit(f"RPP row missing for {name}")
        v = rpp[name]
        st = {
            "abbr": abbr, "name": name,
            "rpp_all_items": v["all_items"],
            "rpp_goods": v["goods"],
            "rpp_services_housing": v["services_housing"],
            "rpp_services_utilities": v["services_utilities"],
            "rpp_services_other": v["services_other"],
            "estimates": {},
        }
        mult = v["all_items"] / 100.0
        for key, a in ANCHORS.items():
            est = r10(a["value"] * mult)
            st["estimates"][key] = {
                "point": est,
                "low": r10(est * 0.85),
                "high": r10(est * 1.15),
            }
        if abbr in CREMATION_2035:
            st["nfda_projected_cremation_rate_2035"] = CREMATION_2035[abbr]
        states.append(st)

    methodology = {
        "model_name": "FuneralCostInfo state estimate model",
        "model_version": "v1",
        "built": TODAY,
        "is_modeled": True,
        "model_statement": (
            "State values are MODELED estimates, not surveyed facts. "
            "state_estimate = NFDA_2023_national_median x (state_BEA_RPP_all_items / 100). "
            "The NFDA publishes national medians only; no state-by-state funeral cost survey exists. "
            "Ranges are illustrative (+/-15%) to communicate within-state variation."
        ),
        "formula": "state_estimate = national_median * (state_rpp_all_items / 100), rounded to nearest $10",
        "why_all_items_rpp": (
            "All-items RPP is the headline BEA index and matches how third-party cost models adjust "
            "national medians. A services-component refinement (services_other) is stored per state "
            "for future model versions; v1 keeps the simpler, more comparable all-items multiplier."
        ),
        "national_anchors": ANCHORS,
        "calculator_addons": ADDONS,
        "bea_release": {
            "vintage": "2023 RPP data",
            "release": "BEA Regional Price Parities, December 2024 release (rpp1224.xlsx, Table 2)",
            "note": ("The December 2025 / February 2026 releases (2024 RPP data) were not available "
                     "in spreadsheet form at fetch time; the news-release PDF contained no state tables. "
                     "Annual refresh will upgrade to the latest spreadsheet release."),
        },
        "inclusions_nfda_medians": [
            "Non-declinable basic services fee", "Removal/transfer of remains to funeral home",
            "Embalming and other preparation of the body", "Use of facilities and staff for viewing",
            "Use of facilities and staff for funeral ceremony", "Hearse",
            "Service car or van / utility vehicle", "Basic memorial printed package",
            "Casket (burial medians) / cremation casket and urn (cremation-with-service median)",
        ],
        "exclusions_nfda_medians": [
            "Cemetery plot / interment rights", "Cemetery opening and closing fees",
            "Monument, headstone or grave marker", "Burial vault (except the burial_with_vault estimate)",
            "Flowers", "Obituary / newspaper notices",
            "Cash-advance items (clergy honoraria, death certificates, etc.)",
        ],
        "states": states,
        "sources": [
            {"id": "nfda_2023_gpl",
             "name": "NFDA 2023 Member General Price List Study (via 2024 NFDA Cremation & Burial Report, p.11)",
             "url": "https://content.nfda.org/Portals/0/2024_NFDA_Cremation%20and%20Burial%20Report.pdf",
             "retrieved": TODAY,
             "provides": "National medians: $8,300 burial w/ viewing; $6,280 cremation w/ viewing; "
                         "$3,720 immediate burial; $2,750 direct cremation (funeral-home container); "
                         "$2,500 metal casket; $295 urn. $9,995 w/ vault from NFDA release coverage."},
            {"id": "bea_rpp",
             "name": "BEA Regional Price Parities by State, December 2024 release (2023 data)",
             "url": "https://www.bea.gov/data/prices-inflation/regional-price-parities-state-and-metro-area",
             "file": "https://www.bea.gov/sites/default/files/2024-12/rpp1224.xlsx",
             "retrieved": TODAY,
             "provides": "State all-items, goods, and services-component (housing/utilities/other) RPP indexes."},
            {"id": "bls_cpi_funeral",
             "name": "BLS CPI-U: Funeral expenses, 12-month change +3.0% (August 2026)",
             "url": "https://www.bls.gov/news.release/cpi.t02.htm",
             "retrieved": TODAY,
             "provides": "Inflation context. Index base December 1986=100; released Sept 11, 2026 (2026 M08)."},
            {"id": "ftc_funeral_rule",
             "name": "FTC Funeral Rule — consumer advice",
             "url": "https://consumer.ftc.gov/articles/ftc-funeral-rule",
             "retrieved": TODAY,
             "provides": "Official consumer rights under the FTC Funeral Rule for the rights guide."},
            {"id": "fcame_costs",
             "name": "Funeral Consumers Alliance of MD/DC comparative costs (July 2026)",
             "url": "https://mdfunerals.org/wp-content/uploads/2026/07/Comparative-Costs-7.15.26.pdf",
             "retrieved": TODAY,
             "provides": "Cemetery plot $1,000-$5,000+, opening/closing $1,500-$3,000, marker $1,000-$3,000 ranges."},
        ],
        "limitations": [
            "State values are modeled from national medians; actual local prices vary widely.",
            "NFDA medians come from member funeral homes and exclude cemetery and cash-advance costs.",
            "RPP vintage is 2023; refresh annually.",
            "Green burial has no published NFDA median; it is a stated assumption (0.60x traditional).",
            "Add-on ranges are typical market ranges, not surveyed prices.",
            "This is educational content, not financial or legal advice.",
        ],
        "refresh_cadence": "Annual scripted refresh of BEA RPP, NFDA GPL study (biennial), and BLS CPI inputs.",
    }

    # Write methodology.json
    with open(os.path.join(HERE, "methodology.json"), "w") as f:
        json.dump(methodology, f, indent=2)

    # Write CSV
    svc_keys = list(ANCHORS.keys())
    with open(os.path.join(HERE, "state_estimates.csv"), "w", newline="") as f:
        w = csv.writer(f)
        header = ["state_abbr", "state_name", "rpp_all_items", "rpp_goods",
                  "rpp_services_housing", "rpp_services_utilities", "rpp_services_other"]
        for k in svc_keys:
            header += [f"{k}_point", f"{k}_low", f"{k}_high"]
        w.writerow(header)
        for st in states:
            row = [st["abbr"], st["name"], st["rpp_all_items"], st["rpp_goods"],
                   st["rpp_services_housing"], st["rpp_services_utilities"], st["rpp_services_other"]]
            for k in svc_keys:
                e = st["estimates"][k]
                row += [e["point"], e["low"], e["high"]]
            w.writerow(row)

    # Site-ready JSON (slim)
    os.makedirs(SITE_DATA, exist_ok=True)
    site_payload = {
        "model_version": "v1",
        "built": TODAY,
        "is_modeled": True,
        "anchors": {k: {"value": v["value"], "label": v["label"],
                        "assumption": v.get("assumption")} for k, v in ANCHORS.items()},
        "addons": ADDONS,
        "states": states,
    }
    with open(os.path.join(SITE_DATA, "estimates.json"), "w") as f:
        json.dump(site_payload, f, indent=2)

    # SOURCES.md
    lines = ["# Data sources — FuneralCostInfo model v1", "",
             f"Dataset built {TODAY}. All values documented below; state estimates are MODELED.", ""]
    for s in methodology["sources"]:
        lines += [f"## {s['name']}", f"- URL: {s['url']}"]
        if "file" in s:
            lines.append(f"- Data file: {s['file']}")
        lines += [f"- Retrieved: {s['retrieved']}", f"- Provides: {s['provides']}", ""]
    lines += ["## Fallbacks / gaps",
              "- BEA 2024-vintage RPP spreadsheet (Dec 2025 / Feb 2026 release): not available in "
              "spreadsheet form at fetch time (news-release PDF has no state tables; xlsx URL pattern "
              "changed). Used the December 2024 release (2023 RPP data, rpp1224.xlsx Table 2) instead. "
              "Clearly labeled as 2023 vintage; annual refresh will upgrade.",
              "- NFDA $9,995 burial-with-vault median: confirmed via multiple 2023 GPL Study press reports; "
              "the 2024 Cremation & Burial Report table prints only the vault-not-included median ($8,300).",
              "- Green burial: no NFDA median published; modeled as 0.60 x traditional burial, labeled as assumption.",
              "- Flowers / obituary add-on ranges: typical market ranges, labeled as such (not surveyed).",
              "- NY state funeral-board deep link not machine-verified (403 from bot requests); "
              "NY page links to FTC + names the NYS Dept. of Health Bureau of Funeral Directing.",
              ""]
    with open(os.path.join(HERE, "SOURCES.md"), "w") as f:
        f.write("\n".join(lines))

    # Spot check
    for abbr in ["CA", "TX", "FL", "NY", "MS"]:
        st = next(s for s in states if s["abbr"] == abbr)
        print(abbr, "RPP", st["rpp_all_items"], "trad_burial", st["estimates"]["traditional_burial"]["point"],
              "direct_crem", st["estimates"]["direct_cremation"]["point"])
    print(f"Wrote {len(states)} states.")

if __name__ == "__main__":
    main()
