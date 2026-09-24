#!/usr/bin/env python3
"""Build the FuneralCostInfo dataset (model v3).

Pipeline (all free sources, all verifiable):
  NFDA 2023 national medians (latest published GPL study; the NFDA's next GPL
  study was fielded in 2025 but its price results had not been published as of
  2026-09-23)
    x  BLS CPI-U "Funeral expenses" inflation factor (series CUUR0000SEGD02,
       not seasonally adjusted, Dec 1986 = 100):
       factor = latest monthly index / 2023 annual-average index
    =  national anchors expressed in latest-month dollars
    x  BEA 2024 Regional Price Parities by state (official Feb 19, 2026 release,
       pulled 2026-09-23 from the BEA Interactive Data Application, Table SARPP)
  =  state-level modeled estimates for 50 states + D.C.

Formula:
  adjusted_anchor = round_to_$10(nfda_2023_median * cpi_factor)
  state_estimate  = round_to_$10(adjusted_anchor * (state_RPP_all_items / 100))
  illustrative range = point * 0.85 .. point * 1.15

The CPI adjustment is standard inflation-adjustment practice: the funeral-
expenses component of the CPI is the closest official price index to what
funeral homes charge, and it is published monthly, so anchors stay current
between the infrequent NFDA studies. It assumes funeral-price inflation
tracked the national index; it does not capture state-level differences.

Refresh: re-pull the BLS series monthly and re-adjust anchors (new vintage
month + factor); rebuild from the newest BEA RPP release each spring; adopt a
newer NFDA GPL study the moment one is published.

Outputs:
  methodology.json        full ledger (formula, anchors, add-ons, states, sources, limitations)
  state_estimates.csv     flat CSV of point estimates per state/service
  ../site/data/estimates.json  slim JSON consumed by the Next.js site
  SOURCES.md              human-readable source ledger
"""
import csv
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
SITE_DATA = HERE / "../site/data/estimates.json"

TODAY = "2026-09-23"
MODEL = "v3"

# ---- NFDA 2023 national medians (latest PUBLISHED GPL study results, verified 2026-09-23)
# Sources: NFDA 2023 Member General Price List Study; 2024 NFDA Cremation & Burial
# Report (p. 11); 2023 GPL Study press release. The NFDA said it would conduct
# the next GPL study in 2025; as of 2026-09-23 no price results from a 2025
# study had been publicly released, so 2023 remains the latest citable data.
# These are adjusted to current dollars with the BLS funeral-expenses CPI below.
NFDA_2023 = {
    "traditional_burial":  {"value": 8300, "label": "Funeral with viewing + burial",
                            "basis": "NFDA 2023 Member GPL Study median; vault not included"},
    "burial_with_vault":   {"value": 9995, "label": "Funeral with viewing + burial + vault",
                            "basis": "NFDA 2023 GPL Study median, via 2023 press release"},
    "cremation_with_service": {"value": 6280, "label": "Funeral with viewing + cremation",
                            "basis": "NFDA 2023 Member GPL Study median"},
    "direct_cremation":    {"value": 2750, "label": "Direct cremation",
                            "basis": "NFDA 2023 Member GPL Study median (funeral-home container)"},
    "direct_burial":       {"value": 3720, "label": "Immediate burial",
                            "basis": "NFDA 2023 Member GPL Study median"},
}

ADDONS = {
    "cemetery_plot":      {"mid": 2500, "low": 1000, "high": 5000,
                           "label": "Cemetery plot / interment rights",
                           "note": "FCA Maryland/DC survey, July 2026"},
    "opening_closing":    {"mid": 2000, "low": 1500, "high": 3000,
                           "label": "Cemetery opening & closing",
                           "note": "FCA Maryland/DC survey, July 2026"},
    "headstone":          {"mid": 1500, "low": 1000, "high": 3000,
                           "label": "Headstone / marker",
                           "note": "FCA Maryland/DC survey, July 2026"},
    "flowers":            {"mid": 500,  "low": 300,  "high": 800,
                           "label": "Flowers",
                           "note": "Typical market range, not a surveyed price"},
    "obituary":           {"mid": 400,  "low": 150,  "high": 700,
                           "label": "Obituary notices",
                           "note": "Typical market range, not a surveyed price"},
}

STATE_NAMES = {
    "AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas",
    "CA": "California", "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware",
    "DC": "District of Columbia", "FL": "Florida", "GA": "Georgia", "HI": "Hawaii",
    "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa", "KS": "Kansas",
    "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MD": "Maryland",
    "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi",
    "MO": "Missouri", "MT": "Montana", "NE": "Nebraska", "NV": "Nevada",
    "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico", "NY": "New York",
    "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio", "OK": "Oklahoma",
    "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island", "SC": "South Carolina",
    "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah",
    "VT": "Vermont", "VA": "Virginia", "WA": "Washington", "WV": "West Virginia",
    "WI": "Wisconsin", "WY": "Wyoming",
}

NFDA_CREMA2025 = {  # NFDA-projected cremation share of dispositions, 2035
    "AL": 59.3, "AK": 72.0, "AZ": 79.1, "AR": 63.4, "CA": 81.5, "CO": 79.6,
    "CT": 72.3, "DE": 66.6, "DC": 66.0, "FL": 79.8, "GA": 69.0, "HI": 86.7,
    "ID": 68.9, "IL": 70.5, "IN": 67.4, "IA": 67.1, "KS": 65.6, "KY": 63.8,
    "LA": 55.9, "ME": 80.4, "MD": 68.2, "MA": 70.9, "MI": 69.8, "MN": 74.9,
    "MS": 54.5, "MO": 69.7, "MT": 76.4, "NE": 68.7, "NV": 83.1, "NH": 80.2,
    "NJ": 69.5, "NM": 76.9, "NY": 70.7, "NC": 71.2, "ND": 66.4, "OH": 68.9,
    "OK": 66.1, "OR": 82.6, "PA": 71.3, "RI": 74.5, "SC": 68.3, "SD": 69.8,
    "TN": 66.9, "TX": 70.2, "UT": 63.1, "VT": 78.4, "VA": 69.6, "WA": 82.9,
    "WV": 72.9, "WI": 72.7, "WY": 71.8,
}


def r10(n):
    return int(round(n / 10.0) * 10)


def main():
    # ---- BLS CPI-U "Funeral expenses" (series CUUR0000SEGD02, NSA, Dec 1986=100).
    # Raw monthly values archived in raw_bls_cpi_funeral.json (official BLS API,
    # retrieved 2026-09-23; cross-checked against the Aug 2026 CPI news release
    # Table 2: funeral expenses +3.0% unadjusted 12-month change).
    # Oct 2025 is null (BLS: "Data unavailable due to the 2025 lapse in
    # appropriations") — it is simply skipped; the factor only needs the 2023
    # average and the latest month.
    bls = json.loads((HERE / "raw_bls_cpi_funeral.json").read_text())
    monthly = {k: v for k, v in bls["monthly_index"].items() if v is not None}
    avg_2023 = sum(v for k, v in monthly.items() if k.startswith("2023-")) / 12
    vintage_month = max(monthly)  # e.g. "2026-08"
    latest_index = monthly[vintage_month]
    cpi_factor = latest_index / avg_2023
    vintage_label_my = {"2026-08": "August 2026"}.get(
        vintage_month, vintage_month)
    print(f"BLS {bls['series_id']}: 2023 avg={avg_2023:.3f}, "
          f"latest {vintage_month}={latest_index:.3f}, factor={cpi_factor:.6f}")

    # ---- Adjusted national anchors: NFDA 2023 median x CPI factor, rounded $10.
    ANCHORS = {}
    for key, a in NFDA_2023.items():
        adj = r10(a["value"] * cpi_factor)
        ANCHORS[key] = {
            "value": adj,
            "label": a["label"],
            "basis": (f"NFDA 2023 Member GPL Study median ${a['value']:,} × "
                      f"{cpi_factor:.4f} (BLS CPI funeral expenses, {vintage_label_my}) "
                      f"= ${adj:,}. {a['basis']}"),
        }
    trad_adj = ANCHORS["traditional_burial"]["value"]
    ANCHORS["green_burial"] = {
        "value": r10(0.60 * trad_adj),
        "label": "Green burial (assumption-based)",
        "basis": (f"Assumption: 0.60 × adjusted traditional burial (${trad_adj:,}). "
                  f"No NFDA median exists; labeled as an assumption everywhere it appears."),
    }
    # value_2023: the unadjusted NFDA 2023 medians, carried through so the site can
    # show "2023 median → current dollars" provenance. Green burial: 0.60 × 8300.
    for key, a in NFDA_2023.items():
        ANCHORS[key]["value_2023"] = a["value"]
    ANCHORS["green_burial"]["value_2023"] = r10(0.60 * NFDA_2023["traditional_burial"]["value"])

    # ---- Load official 2024 BEA RPP data (fetched 2026-09-23 from the BEA
    # Interactive Data Application: AppID 70, TableID 101 "SARPP Regional price
    # parities by state", 2024, statistics = All items / Goods / Services:
    # Housing / Services: Utilities / Services: Other). The BEA stopped
    # embedding RPP tables in its news releases; the interactive app is the
    # official data source for the February 19, 2026 release.
    rpp_raw = json.loads((HERE / "raw_bea_rpp2024.json").read_text())
    name_to_abbr = {v: k for k, v in STATE_NAMES.items()}
    rpp = {}
    for name, comps in rpp_raw.items():
        abbr = name_to_abbr[name]
        rpp[abbr] = {
            "all_items": comps["all_items"],
            "goods": comps["goods"],
            "services_housing": comps["services_housing"],
            "services_utilities": comps["services_utilities"],
            "services_other": comps["services_other"],
        }
    assert set(rpp) == set(STATE_NAMES), "RPP coverage mismatch"

    states = []
    for abbr, name in STATE_NAMES.items():
        mult = rpp[abbr]["all_items"] / 100.0
        estimates = {}
        for key, a in ANCHORS.items():
            point = r10(a["value"] * mult)
            estimates[key] = {
                "point": point,
                "low": r10(point * 0.85),
                "high": r10(point * 1.15),
            }
        states.append({
            "abbr": abbr, "name": name,
            "rpp_all_items": rpp[abbr]["all_items"],
            "rpp_goods": rpp[abbr]["goods"],
            "rpp_services_housing": rpp[abbr]["services_housing"],
            "rpp_services_utilities": rpp[abbr]["services_utilities"],
            "rpp_services_other": rpp[abbr]["services_other"],
            "estimates": estimates,
            "nfda_projected_cremation_rate_2035": NFDA_CREMA2025[abbr],
        })

    vintage_label = (f"NFDA 2023 medians adjusted to {vintage_label_my} dollars via "
                     f"BLS CPI for funeral expenses; 2024 BEA regional price parities")
    methodology = {
        "model_version": MODEL,
        "built": TODAY,
        "is_modeled": True,
        "vintage_label": vintage_label,
        "formula": (f"adjusted_anchor = round_to_$10(nfda_2023_median × {cpi_factor:.6f} "
                    f"[BLS CPI funeral expenses, {vintage_label_my}]); "
                    f"state_estimate = adjusted_anchor × (state_bea_2024_rpp_all_items / 100), "
                    f"rounded to nearest $10; illustrative range = point × 0.85 .. point × 1.15"),
        "bls_adjustment": {
            "bls_series_id": bls["series_id"],
            "bls_vintage_month": vintage_month,
            "bls_vintage_label": vintage_label_my,
            "bls_base_period": bls["base_period"],
            "bls_2023_annual_average": round(avg_2023, 3),
            "bls_latest_index": latest_index,
            "cpi_factor": round(cpi_factor, 6),
            "retrieved": bls["retrieved"],
            "note": ("Standard inflation adjustment: the funeral-expenses component of the CPI "
                     "is the closest official price index to funeral-home charges and is published "
                     "monthly, keeping anchors current between infrequent NFDA studies. Assumes "
                     "funeral-price inflation tracked the national index; does not capture "
                     "state-level inflation differences. October 2025 is missing from the BLS series "
                     "(2025 lapse in appropriations); the factor uses only the 2023 average and the "
                     "latest month, so the gap has no effect."),
        },
        "anchors": {k: {"value": v["value"], "label": v["label"], "assumption": None,
                        "basis": v["basis"], "value_2023": v["value_2023"]} for k, v in ANCHORS.items()},
        "addons": ADDONS,
        "states": states,
        "bea_release": {
            "dataset": "Regional Price Parities by State, 2024",
            "release_date": "2026-02-19",
            "release_note": "Current release per BEA product page (next release Dec 10, 2026)",
            "retrieved": TODAY,
            "via": ("BEA Interactive Data Application, Table SARPP (AppID 70, TableID 101); "
                    "statistics: All items, Goods, Services: Housing, Services: Utilities, "
                    "Services: Other; year 2024. Values cross-checked against the official "
                    "Feb 19, 2026 news release highlights (CA 110.720, HI 109.951, "
                    "NJ 108.805, DC 109.901, AR 86.937, MS 86.953)."),
        },
        "nfda_note": ("NFDA 2023 Member General Price List Study remains the latest "
                      "publicly published NFDA price study. The NFDA said it would conduct "
                      "the next GPL study in 2025; as of 2026-09-23 no price results from a "
                      "2025 study had been published, and NFDA 2023 medians remain the most "
                      "recent citable figures (confirmed against 2026 press coverage). All "
                      f"anchors are expressed in {vintage_label_my} dollars via the BLS "
                      "funeral-expenses CPI adjustment described above."),
        "limitations": [
            "State values are modeled from national medians; actual local prices vary widely.",
            "NFDA medians come from member funeral homes and exclude cemetery and cash-advance costs.",
            "RPP vintage is 2024 (BEA February 2026 release); the dataset refreshes annually as new releases arrive.",
            (f"NFDA price medians are 2023 vintage because no newer official GPL study results have been "
             f"published; they are adjusted to {vintage_label_my} dollars with the BLS CPI for funeral "
             f"expenses (×{cpi_factor:.4f})."),
            "The CPI adjustment assumes funeral-price inflation tracked the national funeral-expenses index; it does not capture state-level inflation differences.",
            "Green burial has no published NFDA median; it is a stated assumption (0.60x adjusted traditional burial), labeled as such everywhere it appears.",
            "Calculator add-on ranges (flowers, obituary) are typical market ranges, not surveyed prices.",
            "This site is educational content, not financial, legal, or funeral-planning advice.",
        ],
        "sources": [
            {"name": "NFDA 2023 Member General Price List Study (via 2024 NFDA Cremation & Burial Report, p. 11)",
             "url": "https://content.nfda.org/Portals/0/2024_NFDA_Cremation%20and%20Burial%20Report.pdf",
             "retrieved": TODAY,
             "provides": "National medians: $8,300 viewing+burial; $6,280 viewing+cremation; $3,720 immediate burial; $2,750 direct cremation"},
            {"name": "NFDA 2023 GPL Study press release",
             "url": "https://content.nfda.org/Portals/0/12-8-2023--2023%20GPL%20Survey.pdf",
             "retrieved": TODAY,
             "provides": "Burial-with-vault median $9,995; confirms 2023 as the study year"},
            {"name": f"BLS CPI-U: Funeral expenses (series {bls['series_id']}, not seasonally adjusted; December 1986 = 100)",
             "url": "https://www.bls.gov/news.release/cpi.t02.htm",
             "retrieved": TODAY,
             "provides": (f"Monthly index values Jan 2023–{vintage_label_my} (via BLS public API) used to adjust "
                          f"NFDA 2023 medians to {vintage_label_my} dollars: factor = {latest_index:.3f} ÷ "
                          f"{avg_2023:.3f} = {cpi_factor:.4f}. August 2026 release Table 2: +3.0% unadjusted "
                          f"12-month change. October 2025 missing (2025 lapse in appropriations).")},
            {"name": "BEA Regional Price Parities by State — 2024 release (February 19, 2026)",
             "url": "https://www.bea.gov/data/prices-inflation/regional-price-parities-state-and-metro-area",
             "retrieved": TODAY,
             "provides": "2024 state RPP indexes (all items, goods, services components), via BEA Interactive Data Application Table SARPP"},
            {"name": "BEA news release: Real Personal Consumption Expenditures and Real Personal Income by State, 2024",
             "url": "https://www.bea.gov/sites/default/files/2026-02/rpp0226.pdf",
             "retrieved": TODAY,
             "provides": "Official release confirming 2024 RPPs for all 50 states + D.C.; used to cross-check API values"},
            {"name": "FTC Funeral Rule consumer guide",
             "url": "https://consumer.ftc.gov/articles/ftc-funeral-rule",
             "retrieved": TODAY,
             "provides": "Official consumer rights used in the Funeral Rule rights guide"},
            {"name": "Funeral Consumers Alliance of Maryland/DC comparative costs survey (July 2026)",
             "url": "https://mdfunerals.org/wp-content/uploads/2026/07/Comparative-Costs-7.15.26.pdf",
             "retrieved": TODAY,
             "provides": "Cemetery plot ($1,000-$5,000+), opening/closing ($1,500-$3,000), marker ($1,000-$3,000) ranges used as calculator add-ons"},
        ],
        "refresh_policy": ("Rebuild monthly: re-pull the BLS funeral-expenses CPI, re-adjust anchors, "
                           "and publish the new vintage month. Rebuild annually from the newest BEA RPP "
                           "release each spring; adopt a newer published NFDA GPL study the moment one "
                           "appears; publish a changelog with each model version."),
        "rounding": "nearest $10",
    }
    methodology["anchors"]["green_burial"]["assumption"] = (
        f"0.60 × adjusted traditional burial (${trad_adj:,}); no published NFDA median exists")

    (HERE / "methodology.json").write_text(json.dumps(methodology, indent=1, ensure_ascii=False) + "\n")

    # ---- CSV
    with open(HERE / "state_estimates.csv", "w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["state_abbr", "state_name", "rpp_2024_all_items", "service",
                    "point", "low", "high"])
        for st in states:
            for key, e in st["estimates"].items():
                w.writerow([st["abbr"], st["name"], st["rpp_all_items"], key,
                            e["point"], e["low"], e["high"]])

    # ---- Slim site JSON
    site_payload = {
        "model_version": MODEL,
        "built": TODAY,
        "is_modeled": True,
        "anchors": methodology["anchors"],
        "addons": ADDONS,
        "states": states,
    }
    SITE_DATA.write_text(json.dumps(site_payload, indent=1, ensure_ascii=False) + "\n")

    # ---- SOURCES.md
    lines = [f"# FuneralCostInfo — source ledger (model {MODEL}, built {TODAY})", ""]
    lines.append("## Formula")
    lines.append("")
    lines.append("`adjusted_anchor = NFDA 2023 national median × BLS funeral-expenses CPI factor`  "
                 f"(factor = {latest_index:.3f} ÷ {avg_2023:.3f} = {cpi_factor:.4f}, {vintage_label_my})")
    lines.append("")
    lines.append("`state_estimate = adjusted_anchor × (state BEA 2024 RPP all-items ÷ 100)`")
    lines.append("")
    lines.append("Rounded to the nearest $10; illustrative range ±15%. All figures are modeled estimates.")
    lines.append("")
    lines.append("## Why this vintage (checked 2026-09-23)")
    lines.append("")
    lines.append("- **BEA RPP: 2024.** The BEA released 2024 Regional Price Parities on "
                 "February 19, 2026 (news release; product page says next release December 10, 2026). "
                 "Values were pulled the same day from the BEA Interactive Data Application "
                 "(Table SARPP: AppID 70, TableID 101; statistics All items, Goods, Services: "
                 "Housing/Utilities/Other; year 2024) and cross-checked against the official "
                 "release highlights (CA 110.720, HI 109.951, NJ 108.805, DC 109.901, AR 86.937, MS 86.953).")
    lines.append("- **NFDA medians: 2023, expressed in August 2026 dollars.** The 2023 Member General "
                 "Price List Study remains the latest *published* NFDA price study. The NFDA said it "
                 "would field the next GPL study in 2025, but as of 2026-09-23 no price results from "
                 "a 2025 study had been published — and 2026 press coverage still cites the 2023 "
                 "medians as current. Rather than show stale 2023 dollars, we bring the medians "
                 "forward with the BLS CPI-U *Funeral expenses* index (series CUUR0000SEGD02, not "
                 "seasonally adjusted, December 1986 = 100): the August 2026 index (417.820) divided "
                 "by the 2023 annual average (379.301) = ×1.1016. This is standard inflation "
                 "adjustment; the funeral-expenses component is the closest official index to "
                 "funeral-home charges. The October 2025 index is missing from the BLS series "
                 "('Data unavailable due to the 2025 lapse in appropriations'); the factor uses "
                 "only the 2023 average and the latest month, so the gap has no effect.")
    lines.append("")
    lines.append("## Sources")
    lines.append("")
    for s in methodology["sources"]:
        lines.append(f"- **{s['name']}** (retrieved {s['retrieved']})")
        lines.append(f"  - {s['url']}")
        lines.append(f"  - Provides: {s['provides']}")
    lines.append("")
    lines.append("## Raw inputs archived in this folder")
    lines.append("")
    lines.append("- `raw_bls_cpi_funeral.json` — BLS CPI-U funeral-expenses monthly index, Jan 2023–Aug 2026, "
                 "as returned by the BLS public API 2026-09-23 (official data; cross-checked against the "
                 "Aug 2026 CPI news release Table 2: +3.0% unadjusted 12-month change)")
    lines.append("- `raw_bea_rpp2024.json` — 2024 RPP values as returned by the BEA Interactive "
                 "Data Application, 2026-09-23 (official data for the Feb 19, 2026 release)")
    lines.append("- `raw_bea_rpp1224.xlsx` — superseded; the December 2024 spreadsheet carrying "
                 "2023 RPPs, kept for provenance (model v1)")
    lines.append("")
    lines.append("## Outputs")
    lines.append("")
    lines.append("- `methodology.json` — full ledger")
    lines.append("- `state_estimates.csv` — flat estimates")
    lines.append("- `../site/data/estimates.json` — slim site payload")
    (HERE / "SOURCES.md").write_text("\n".join(lines) + "\n")

    # ---- Sanity print
    ca = next(s for s in states if s["abbr"] == "CA")
    ms = next(s for s in states if s["abbr"] == "MS")
    ar = next(s for s in states if s["abbr"] == "AR")
    print("model:", MODEL, "| states:", len(states))
    print("adjusted national traditional_burial:", ANCHORS["traditional_burial"]["value"])
    print("CA traditional_burial:", ca["estimates"]["traditional_burial"]["point"],
          "(RPP", ca["rpp_all_items"], ")")
    print("AR traditional_burial:", ar["estimates"]["traditional_burial"]["point"],
          "(RPP", ar["rpp_all_items"], ") — lowest RPP in dataset")
    print("MS traditional_burial:", ms["estimates"]["traditional_burial"]["point"],
          "(RPP", ms["rpp_all_items"], ")")


if __name__ == "__main__":
    main()
