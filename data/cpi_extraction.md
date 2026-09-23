# BLS CPI "Funeral expenses" — extraction log

Extracted 2026-09-23 from BLS news release archives (HTML). Series: CPI-U, U.S. city average,
"Funeral expenses", not seasonally adjusted, footnote base December 1986=100.
Release dates verified against the official BLS schedule page
(https://www.bls.gov/schedule/news_release/cpi.htm); each archive URL was opened and its
title checked against the expected reference month.

## Values

| Period (reference month) | Archive URL | NSA value | Type | Notes |
|---|---|---|---|---|
| Dec 2024 | https://www.bls.gov/news.release/archives/cpi_01152025.htm | 3.0% | 12-month | Table 2 row: `\| Funeral expenses(1)(6) \| 0.157 \| 3.0 \| 0.3 \| …` |
| Dec 2025 | https://www.bls.gov/news.release/archives/cpi_01132026.htm | 2.6% | 12-month | Table 2 row: `\| Funeral expenses(1)(6) \| 0.139 \| 2.6 \| 0.6 \| …`. **NOT 5.6%** — see discrepancy note below |
| Jan 2026 | https://www.bls.gov/news.release/archives/cpi_02132026.htm | 3.1% | 1-month NSA | Row: `\| 0.166 \| 5.6 \| 3.1 \| - \| 0.6 \| 3.1 \|` (12-mo here = 5.6%) |
| Feb 2026 | https://www.bls.gov/news.release/archives/cpi_03112026.htm | -1.6% | 1-month NSA | Row: `\| 0.170 \| 3.1 \| -1.6 \| 0.6 \| 3.1 \| -1.6 \|` |
| Mar 2026 | https://www.bls.gov/news.release/archives/cpi_04102026.htm | 0.4% | 1-month NSA | Row: `\| 0.167 \| 2.8 \| 0.4 \| 3.1 \| -1.6 \| 0.4 \|` |
| Apr 2026 | https://www.bls.gov/news.release/archives/cpi_05122026.htm | 1.4% | 1-month NSA | Row: `\| 0.165 \| 4.1 \| 1.4 \| -1.6 \| 0.4 \| 1.4 \|` |
| May 2026 | https://www.bls.gov/news.release/archives/cpi_06102026.htm | -1.1% | 1-month NSA | Row: `\| 0.166 \| 3.4 \| -1.1 \| 0.4 \| 1.4 \| -1.1 \|` |
| Jun 2026 | https://www.bls.gov/news.release/archives/cpi_07142026.htm | -0.1% | 1-month NSA | Row: `\| 0.164 \| 3.2 \| -0.1 \| 1.4 \| -1.1 \| -0.1 \|` |
| Jul 2026 | https://www.bls.gov/news.release/archives/cpi_08122026.htm | -0.1% | 1-month NSA | Row: `\| 0.164 \| 3.0 \| -0.1 \| -1.1 \| -0.1 \| -0.1 \|` |
| Aug 2026 | https://www.bls.gov/news.release/archives/cpi_09112026.htm | 0.2% | 1-month NSA | Row: `\| 0.164 \| 3.0 \| 0.2 \| -0.1 \| -0.1 \| 0.2 \|` |

Column order in Table 2 rows: relative importance | NSA 12-month % | **NSA 1-month %** |
SA 1-month % (3 trailing months). The extracted value is always the NSA 1-month column
(the one immediately after the 12-month column), per footnote (1) "Not seasonally adjusted".

## Discrepancy note (important)

The task brief expected Dec 2025 12-month = 5.6% (recalled from a PDF). The HTML archive for
December 2025 data (released Jan 13, 2026, cpi_01132026.htm) reports **2.6%**. The 5.6% figure
is real but belongs to **January 2026** 12-month change (cpi_02132026.htm, confirmed in that
release's Table 2 and cross-confirmed by the April 2026 release's comparison table:
"L-Jan. 2026 | 5.6"). Likewise the brief's "released Feb 13 2026" for December 2025 data was
off by one release: Dec 2025 data → Jan 13, 2026; Feb 13, 2026 → January 2026 data.

## Cross-checks (internal consistency, from later releases' comparison tables)

- Dec 2025 12-mo = 2.6% confirmed by Feb 2026 and Mar 2026 releases ("S-Dec. 2025 | 2.6")
- Jan 2026 12-mo = 5.6% confirmed by Apr 2026 release ("L-Jan. 2026 | 5.6")
- Feb 2026 1-mo = -1.6% confirmed by May 2026 release ("S-Feb. 2026 | -1.6")
- Apr 2026 1-mo = 1.4% confirmed by Jun 2026 and Aug 2026 releases ("L-Apr. 2026 | 1.4")

## Caveats for chaining

- All BLS percent changes are published rounded to one decimal; the chained product
  (1.030 × 1.026 × 1.031 × 0.984 × 1.004 × 1.014 × 0.989 × 0.999 × 0.999 × 1.002 ≈ 1.0795)
  inherits roughly ±0.1–0.2pp rounding error. This is the Dec 2023 → Aug 2026 factor.
- Oct/Nov 2025 seasonally adjusted monthly values are missing in the releases due to the
  2025 lapse in appropriations; irrelevant here since only NSA values are used.
- With the April 2026 release BLS rebased several CPI series to December 2024=100; the
  funeral-expenses row retains its December 1986=100 footnote, and in any case rebasing
  does not affect percent changes, so chaining is unaffected.

No gaps: all 10 values extracted from live archives, nothing guessed or interpolated.
