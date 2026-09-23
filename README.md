# FuneralCostInfo — Phase 0 MVP (local build)

Status: built locally 2026-09-23. **Not deployed. Domain not purchased. No external accounts.**

## Preview

```bash
python3 -m http.server 4173 --directory ~/workspace/goals/funeral-costs-niche-site/site/out
# then open http://localhost:4173/
```

## Layout

- `data/` — dataset pipeline and outputs
  - `build_dataset.py` — reproducible build (BEA XLSX → JSON/CSV)
  - `raw_bea_rpp1224.xlsx` — BEA Dec 2024 release (2023 RPP data, Table 2)
  - `methodology.json`, `state_estimates.csv`, `SOURCES.md`
- `site/` — Next.js 15 static export (`output: "export"`, `trailingSlash: true`)
  - `npm run build` → `site/out/` (19 pages, all pre-rendered)
  - `site/data/estimates.json` — site-ready dataset (copied by the pipeline)

## Pages

`/`, `/calculator/`, `/methodology/`, `/guides/funeral-rule-rights/`,
`/funeral-costs/{california,texas,florida,new-york,mississippi}/`,
`/about/`, `/editorial-policy/`, `/affiliate-disclosure/`, `/privacy/`, `/contact/`,
plus `/sitemap.xml`, `/robots.txt` (AI bots explicitly allowed), `/llms.txt`.

## Data model (v1)

`state_estimate = NFDA_2023_national_median × (state BEA RPP / 100)`, rounded to $10,
illustrative ±15% range. All state values are MODELED, never surveyed.

- Anchors: $8,300 burial w/ viewing · $6,280 cremation w/ viewing · $9,995 burial w/ vault
  · $2,750 direct cremation · $3,720 direct burial (NFDA 2023 GPL Study) ·
  green burial = stated 0.60× assumption ($4,980, no NFDA median)
- RPP vintage: 2023 (BEA Dec 2024 release; Feb 2026 release spreadsheet unavailable at fetch)
- 51 jurisdictions modeled (50 states + D.C.); 5 state pages published in Phase 0

## Open owner decisions (post-build)

1. Purchase funeralcostinfo.com? (domain not purchased)
2. Proceed to launch/deployment?
3. Final-expense affiliate monetization — acceptable, and which approach?
4. Accept the 120-day SEO validation window?
