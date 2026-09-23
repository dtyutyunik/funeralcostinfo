# FuneralCostInfo — source ledger (model v3, built 2026-09-23)

## Formula

`adjusted_anchor = NFDA 2023 national median × BLS funeral-expenses CPI factor`  (factor = 417.820 ÷ 379.301 = 1.1016, August 2026)

`state_estimate = adjusted_anchor × (state BEA 2024 RPP all-items ÷ 100)`

Rounded to the nearest $10; illustrative range ±15%. All figures are modeled estimates.

## Why this vintage (checked 2026-09-23)

- **BEA RPP: 2024.** The BEA released 2024 Regional Price Parities on February 19, 2026 (news release; product page says next release December 10, 2026). Values were pulled the same day from the BEA Interactive Data Application (Table SARPP: AppID 70, TableID 101; statistics All items, Goods, Services: Housing/Utilities/Other; year 2024) and cross-checked against the official release highlights (CA 110.720, HI 109.951, NJ 108.805, DC 109.901, AR 86.937, MS 86.953).
- **NFDA medians: 2023, expressed in August 2026 dollars.** The 2023 Member General Price List Study remains the latest *published* NFDA price study. The NFDA said it would field the next GPL study in 2025, but as of 2026-09-23 no price results from a 2025 study had been published — and 2026 press coverage still cites the 2023 medians as current. Rather than show stale 2023 dollars, we bring the medians forward with the BLS CPI-U *Funeral expenses* index (series CUUR0000SEGD02, not seasonally adjusted, December 1986 = 100): the August 2026 index (417.820) divided by the 2023 annual average (379.301) = ×1.1016. This is standard inflation adjustment; the funeral-expenses component is the closest official index to funeral-home charges. The October 2025 index is missing from the BLS series ('Data unavailable due to the 2025 lapse in appropriations'); the factor uses only the 2023 average and the latest month, so the gap has no effect.

## Sources

- **NFDA 2023 Member General Price List Study (via 2024 NFDA Cremation & Burial Report, p. 11)** (retrieved 2026-09-23)
  - https://content.nfda.org/Portals/0/2024_NFDA_Cremation%20and%20Burial%20Report.pdf
  - Provides: National medians: $8,300 viewing+burial; $6,280 viewing+cremation; $3,720 immediate burial; $2,750 direct cremation
- **NFDA 2023 GPL Study press release** (retrieved 2026-09-23)
  - https://content.nfda.org/Portals/0/12-8-2023--2023%20GPL%20Survey.pdf
  - Provides: Burial-with-vault median $9,995; confirms 2023 as the study year
- **BLS CPI-U: Funeral expenses (series CUUR0000SEGD02, not seasonally adjusted; December 1986 = 100)** (retrieved 2026-09-23)
  - https://www.bls.gov/news.release/cpi.t02.htm
  - Provides: Monthly index values Jan 2023–August 2026 (via BLS public API) used to adjust NFDA 2023 medians to August 2026 dollars: factor = 417.820 ÷ 379.301 = 1.1016. August 2026 release Table 2: +3.0% unadjusted 12-month change. October 2025 missing (2025 lapse in appropriations).
- **BEA Regional Price Parities by State — 2024 release (February 19, 2026)** (retrieved 2026-09-23)
  - https://www.bea.gov/data/prices-inflation/regional-price-parities-state-and-metro-area
  - Provides: 2024 state RPP indexes (all items, goods, services components), via BEA Interactive Data Application Table SARPP
- **BEA news release: Real Personal Consumption Expenditures and Real Personal Income by State, 2024** (retrieved 2026-09-23)
  - https://www.bea.gov/sites/default/files/2026-02/rpp0226.pdf
  - Provides: Official release confirming 2024 RPPs for all 50 states + D.C.; used to cross-check API values
- **FTC Funeral Rule consumer guide** (retrieved 2026-09-23)
  - https://consumer.ftc.gov/articles/ftc-funeral-rule
  - Provides: Official consumer rights used in the Funeral Rule rights guide
- **Funeral Consumers Alliance of Maryland/DC comparative costs survey (July 2026)** (retrieved 2026-09-23)
  - https://mdfunerals.org/wp-content/uploads/2026/07/Comparative-Costs-7.15.26.pdf
  - Provides: Cemetery plot ($1,000-$5,000+), opening/closing ($1,500-$3,000), marker ($1,000-$3,000) ranges used as calculator add-ons

## Raw inputs archived in this folder

- `raw_bls_cpi_funeral.json` — BLS CPI-U funeral-expenses monthly index, Jan 2023–Aug 2026, as returned by the BLS public API 2026-09-23 (official data; cross-checked against the Aug 2026 CPI news release Table 2: +3.0% unadjusted 12-month change)
- `raw_bea_rpp2024.json` — 2024 RPP values as returned by the BEA Interactive Data Application, 2026-09-23 (official data for the Feb 19, 2026 release)
- `raw_bea_rpp1224.xlsx` — superseded; the December 2024 spreadsheet carrying 2023 RPPs, kept for provenance (model v1)

## Outputs

- `methodology.json` — full ledger
- `state_estimates.csv` — flat estimates
- `../site/data/estimates.json` — slim site payload
