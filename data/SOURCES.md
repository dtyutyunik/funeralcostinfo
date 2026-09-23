# Data sources — FuneralCostInfo model v1

Dataset built 2026-09-23. All values documented below; state estimates are MODELED.

## NFDA 2023 Member General Price List Study (via 2024 NFDA Cremation & Burial Report, p.11)
- URL: https://content.nfda.org/Portals/0/2024_NFDA_Cremation%20and%20Burial%20Report.pdf
- Retrieved: 2026-09-23
- Provides: National medians: $8,300 burial w/ viewing; $6,280 cremation w/ viewing; $3,720 immediate burial; $2,750 direct cremation (funeral-home container); $2,500 metal casket; $295 urn. $9,995 w/ vault from NFDA release coverage.

## BEA Regional Price Parities by State, December 2024 release (2023 data)
- URL: https://www.bea.gov/data/prices-inflation/regional-price-parities-state-and-metro-area
- Data file: https://www.bea.gov/sites/default/files/2024-12/rpp1224.xlsx
- Retrieved: 2026-09-23
- Provides: State all-items, goods, and services-component (housing/utilities/other) RPP indexes.

## BLS CPI-U: Funeral expenses, 12-month change +3.0% (August 2026)
- URL: https://www.bls.gov/news.release/cpi.t02.htm
- Retrieved: 2026-09-23
- Provides: Inflation context. Index base December 1986=100; released Sept 11, 2026 (2026 M08).

## FTC Funeral Rule — consumer advice
- URL: https://consumer.ftc.gov/articles/ftc-funeral-rule
- Retrieved: 2026-09-23
- Provides: Official consumer rights under the FTC Funeral Rule for the rights guide.

## Funeral Consumers Alliance of MD/DC comparative costs (July 2026)
- URL: https://mdfunerals.org/wp-content/uploads/2026/07/Comparative-Costs-7.15.26.pdf
- Retrieved: 2026-09-23
- Provides: Cemetery plot $1,000-$5,000+, opening/closing $1,500-$3,000, marker $1,000-$3,000 ranges.

## Fallbacks / gaps
- BEA 2024-vintage RPP spreadsheet (Dec 2025 / Feb 2026 release): not available in spreadsheet form at fetch time (news-release PDF has no state tables; xlsx URL pattern changed). Used the December 2024 release (2023 RPP data, rpp1224.xlsx Table 2) instead. Clearly labeled as 2023 vintage; annual refresh will upgrade.
- NFDA $9,995 burial-with-vault median: confirmed via multiple 2023 GPL Study press reports; the 2024 Cremation & Burial Report table prints only the vault-not-included median ($8,300).
- Green burial: no NFDA median published; modeled as 0.60 x traditional burial, labeled as assumption.
- Flowers / obituary add-on ranges: typical market ranges, labeled as such (not surveyed).
- NY state funeral-board deep link not machine-verified (403 from bot requests); NY page links to FTC + names the NYS Dept. of Health Bureau of Funeral Directing.
