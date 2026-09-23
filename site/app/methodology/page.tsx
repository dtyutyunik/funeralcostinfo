import type { Metadata } from 'next';
import JsonLd, { breadcrumbJsonLd } from '../../components/JsonLd';
import { dataset, fmt, SITE_URL, LAST_UPDATED, VINTAGE_LABEL } from '../../lib/data';

export const metadata: Metadata = {
  title: 'Methodology — How We Model Funeral Costs',
  description:
    'Full methodology for FuneralCostInfo model v3: 2023 NFDA national medians adjusted to August 2026 dollars via BLS funeral-expenses CPI, then scaled by 2024 BEA regional price parities. Formula, sources, inclusions, exclusions, limitations, and data-freshness policy — published openly.',
  alternates: { canonical: SITE_URL + '/methodology/' },
  openGraph: {
    title: 'Methodology — How We Model Funeral Costs',
    description:
      'The complete, open formula behind our state estimates: NFDA 2023 medians, adjusted to August 2026 dollars via BLS funeral-expenses CPI, × BEA 2024 regional price parity. Sources, inclusions, exclusions, limitations, freshness.',
    url: SITE_URL + '/methodology/',
  },
};

const SOURCES = [
  {
    name: 'NFDA 2023 Member General Price List Study (via the 2024 NFDA Cremation & Burial Report, p. 11)',
    url: 'https://content.nfda.org/Portals/0/2024_NFDA_Cremation%20and%20Burial%20Report.pdf',
    provides:
      'National medians: $8,300 funeral with viewing and burial (vault not included); $6,280 funeral with viewing and cremation; $3,720 immediate burial; $2,750 direct cremation (funeral-home container); $2,500 metal casket; $295 urn. The $9,995 burial-with-vault median is widely reported from the 2023 GPL Study press release.',
  },
  {
    name: 'Bureau of Economic Analysis — Regional Price Parities by State, 2024 (released February 19, 2026)',
    url: 'https://www.bea.gov/data/prices-inflation/regional-price-parities-state-and-metro-area',
    provides:
      '2024 state all-items, goods, and services-component (housing/utilities/other) RPP indexes, pulled from the BEA Interactive Data Application (Table SARPP) and cross-checked against the official February 19, 2026 news release. Next BEA release: December 10, 2026.',
  },
  {
    name: 'Bureau of Labor Statistics — CPI: Funeral expenses, U.S. city average (series CUUR0000SEGD02, not seasonally adjusted; December 1986 = 100)',
    url: 'https://www.bls.gov/news.release/cpi.t02.htm',
    provides:
      'Monthly index values (Jan 2023–Aug 2026, via the BLS public API) used to bring 2023 NFDA medians into August 2026 dollars: factor = 417.820 ÷ 379.301 = 1.1016. August 2026 release Table 2: +3.0% unadjusted 12-month change. October 2025 is missing from the series (2025 lapse in appropriations); the factor uses only the 2023 average and the latest month, so the gap has no effect.',
  },
  {
    name: 'FTC — The FTC Funeral Rule (consumer guide)',
    url: 'https://consumer.ftc.gov/articles/ftc-funeral-rule',
    provides: 'Official consumer rights used in our Funeral Rule rights guide.',
  },
  {
    name: 'Funeral Consumers Alliance of Maryland/DC — Comparative costs survey (July 2026)',
    url: 'https://mdfunerals.org/wp-content/uploads/2026/07/Comparative-Costs-7.15.26.pdf',
    provides: 'Cemetery plot ($1,000–$5,000+), opening/closing ($1,500–$3,000), and marker ($1,000–$3,000) typical ranges used as calculator add-ons.',
  },
];

const LEDGER: [string, React.ReactNode][] = [
  ['Model', <>v3 — every figure on this site is a <strong>modeled estimate</strong>, never a surveyed price or a quote.</>],
  ['Formula', <><code>state_estimate = adjusted_national_median × (state_bea_2024_rpp_all_items ÷ 100)</code>, where <code>adjusted_national_median = nfda_2023_median × 1.1016</code> (BLS funeral-expenses CPI, August 2026 dollars).</>],
  ['Rounding', <>Nearest $10.</>],
  ['Range', <>Illustrative ±15% band around each point estimate — it communicates typical within-state variation, not a statistical confidence interval.</>],
  ['Coverage', <>50 states + District of Columbia.</>],
  ['Price anchors', <>NFDA 2023 national medians, adjusted to <strong>August 2026 dollars</strong> with the BLS CPI for funeral expenses (×1.1016) — the latest <em>published</em> NFDA price study (see “Data freshness” below).</>],
  ['Geography factor', <>BEA 2024 Regional Price Parities, all-items index (official February 19, 2026 release).</>],
  ['Refresh cadence', <>Monthly: anchors re-adjust to the newest BLS funeral-expenses index. Annual: rebuild from the newest BEA RPP release and adopt any newly published NFDA study.</>],
];

export default function MethodologyPage() {
  const ca = dataset.states.find((s) => s.abbr === 'CA')!;
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Methodology', url: SITE_URL + '/methodology/' },
      ])} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Dataset',
          name: 'FuneralCostInfo state funeral-cost estimates, model v3',
          description:
            'Modeled state-level funeral-cost estimates for 50 states + D.C.: NFDA 2023 national medians adjusted to August 2026 dollars via BLS funeral-expenses CPI, scaled by BEA 2024 regional price parities. Values are modeled, not surveyed.',
          url: SITE_URL + '/methodology/',
          creator: { '@type': 'Organization', name: 'FuneralCostInfo', url: SITE_URL + '/' },
          datePublished: LAST_UPDATED,
          variableMeasured: 'Modeled median funeral cost by service type and state (USD)',
        }}
      />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> › Methodology</nav>
        <p className="eyebrow">Open data</p>
        <h1 style={{ marginTop: 0 }}>Methodology — model v3</h1>
        <div className="answer-first">
          <strong>Quick answer:</strong> every state figure on this site is a modeled estimate
          computed as <em>(NFDA 2023 national median × 1.1016 BLS funeral-expenses CPI adjustment
          to August 2026 dollars) × (state BEA 2024 regional price parity ÷ 100)</em>,
          rounded to the nearest $10, with an illustrative ±15% range. The NFDA publishes national
          medians only — no state-level funeral price survey exists — so modeling from official
          sources is the most transparent way to answer &ldquo;what does it cost near me?&rdquo;
        </div>

        <h2>The model at a glance</h2>
        <div className="data-ledger">
          {LEDGER.map(([k, v]) => (
            <div className="ledger-row" key={k}>
              <div className="k">{k}</div>
              <div className="v">{v}</div>
            </div>
          ))}
        </div>

        <h2>The formula</h2>
        <div className="formula-box" role="img" aria-label="Formula: state estimate equals adjusted national median (NFDA 2023 median times 1.1016 BLS funeral-expenses CPI) times state BEA 2024 RPP all-items divided by 100">
          state_estimate <span className="hl">=</span> adjusted_national_median <span className="hl">×</span> (state_RPP_all_items <span className="hl">÷</span> 100)<br />
          <span style={{ opacity: 0.65 }}># Example — California traditional burial:</span><br />
          $9,140 <span className="hl">×</span> (110.72 <span className="hl">÷</span> 100) <span className="hl">=</span> $10,119.81 → <span className="hl">{fmt(ca.estimates.traditional_burial.point)}</span>
        </div>

        <div className="freshness">
          <h3>Data freshness — why 2024 and 2023 are the newest honest vintages</h3>
          <p>
            <strong>BEA regional price parities: 2024.</strong> The Bureau of Economic Analysis
            released 2024 RPPs on <strong>February 19, 2026</strong> — the current release, with the
            next one scheduled for December 10, 2026. We pulled all 50 states plus D.C. from the
            BEA&rsquo;s Interactive Data Application (Table SARPP) on September 23, 2026 and
            cross-checked the values against the official release. Official statistics always lag
            by a year or more; 2024 is the newest RPP data that exists.
          </p>
          <p>
            <strong>NFDA price medians: 2023.</strong> The NFDA&rsquo;s 2023 Member General Price
            List Study remains the latest <em>published</em> NFDA price study. The NFDA said it
            would field the next GPL study in 2025, but as of September 23, 2026 no price results
            from a 2025 study had been publicly released — and 2026 press coverage still cites the
            2023 medians as current. We would rather show a clearly-dated 2023 median than invent
            a newer one — so we bring it forward with the Bureau of Labor Statistics&rsquo; own
            funeral-expenses price index instead of guessing.
          </p>
          <p>
            <strong>BLS funeral-expenses CPI: August 2026.</strong> Adjusting a 2023 price to
            today&rsquo;s dollars is standard practice, and the funeral-expenses component of the
            Consumer Price Index (series CUUR0000SEGD02, not seasonally adjusted, December 1986 =
            100) is the closest official index to what funeral homes actually charge. We take the
            August 2026 index value (417.820), divide by the 2023 annual average (379.301), and
            multiply every NFDA median by the resulting factor of <strong>1.1016</strong> — so the
            $8,300 traditional-burial median becomes $9,140 in August 2026 dollars. This refreshes
            monthly as new BLS releases arrive. One data gap to know about: October 2025 is missing
            from the BLS series (&ldquo;data unavailable due to the 2025 lapse in
            appropriations&rdquo;); because the factor uses only the 2023 average and the latest
            month, the gap has no effect on our numbers. The adjustment assumes funeral prices
            tracked the national index — it does not capture state-level inflation differences.
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Our commitment:</strong> anchors re-adjust <strong>monthly</strong> to the
            newest BLS funeral-expenses index, and the full dataset rebuilds <strong>annually</strong> —
            each spring we pull the newest BEA RPP release and check for a newer published NFDA
            study, then publish a changelog with the new model version. The vintage line at the
            top of every page always tells you exactly what you&rsquo;re looking at.
          </p>
        </div>

        <h2>National anchors (NFDA 2023 medians, in August 2026 dollars)</h2>
        <table className="data">
          <thead><tr><th>Service</th><th className="num">National anchor</th><th>Basis</th></tr></thead>
          <tbody>
            {Object.entries(dataset.anchors).map(([k, a]) => (
              <tr key={k}>
                <td>{a.label}</td>
                <td className="num">{fmt(a.value)}</td>
                <td>
                  {a.assumption ? `Stated assumption: ${a.assumption}` : 'NFDA 2023 median × 1.1016 BLS funeral-expenses CPI (Aug 2026 dollars)'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>What the NFDA medians include — and exclude</h2>
        <h3>Included</h3>
        <ul>
          {['Non-declinable basic services fee', 'Removal/transfer of remains to the funeral home',
            'Embalming and other preparation of the body', 'Use of facilities and staff for viewing',
            'Use of facilities and staff for the funeral ceremony', 'Hearse',
            'Service car or van / utility vehicle', 'Basic memorial printed package',
            'Casket (burial medians) / cremation casket and urn (cremation-with-service median)']
            .map((x) => <li key={x}>{x}</li>)}
        </ul>
        <h3>Excluded</h3>
        <ul>
          {['Cemetery plot / interment rights', 'Cemetery opening and closing fees',
            'Monument, headstone, or grave marker', 'Burial vault (except the burial-with-vault estimate)',
            'Flowers', 'Obituary / newspaper notices',
            'Cash-advance items (clergy honoraria, death certificates, etc.)']
            .map((x) => <li key={x}>{x}</li>)}
        </ul>

        <h2>Source ledger</h2>
        {SOURCES.map((s) => (
          <div className="source-card" key={s.url}>
            <strong>{s.name}</strong>
            <br /><a className="url" href={s.url} rel="noopener noreferrer">{s.url}</a>
            <p>{s.provides}</p>
            <p className="updated">Retrieved {LAST_UPDATED}</p>
          </div>
        ))}

        <h2>Limitations</h2>
        <ul>
          <li>State values are <strong>modeled from national medians</strong>; actual local prices vary widely.</li>
          <li>NFDA medians come from member funeral homes and exclude cemetery and cash-advance costs.</li>
          <li>RPP vintage is 2024 (BEA February 2026 release); the dataset refreshes annually as new releases arrive.</li>
          <li>NFDA price medians are 2023 vintage because no newer official GPL study results have been published; they are adjusted to August 2026 dollars with the BLS CPI for funeral expenses (×1.1016).</li>
          <li>The CPI adjustment assumes funeral-price inflation tracked the national funeral-expenses index; it does not capture state-level inflation differences.</li>
          <li>Green burial has no published NFDA median; it is a stated assumption (0.60× traditional burial), labeled as such everywhere it appears.</li>
          <li>Calculator add-on ranges (flowers, obituary) are typical market ranges, not surveyed prices.</li>
          <li>This site is educational content, not financial, legal, or funeral-planning advice.</li>
        </ul>
        <p className="updated">{VINTAGE_LABEL} · Built {LAST_UPDATED} · Model v3 · Refresh cadence: monthly CPI, annual BEA.</p>
      </div>
    </>
  );
}
