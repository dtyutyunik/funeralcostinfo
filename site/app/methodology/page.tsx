import type { Metadata } from 'next';
import JsonLd, { breadcrumbJsonLd } from '../../components/JsonLd';
import { dataset, fmt, SITE_URL, LAST_UPDATED } from '../../lib/data';

export const metadata: Metadata = {
  title: 'Methodology — How We Model Funeral Costs',
  description:
    'Full methodology for FuneralCostInfo model v1: NFDA 2023 national medians adjusted by BEA regional price parities. Formula, sources, inclusions, exclusions, and limitations — published openly.',
  alternates: { canonical: SITE_URL + '/methodology/' },
  openGraph: {
    title: 'Methodology — How We Model Funeral Costs',
    description:
      'The complete, open formula behind our state estimates: NFDA 2023 medians × BEA regional price parity. Sources, inclusions, exclusions, limitations.',
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
    name: 'Bureau of Economic Analysis — Regional Price Parities by State (December 2024 release, 2023 data)',
    url: 'https://www.bea.gov/data/prices-inflation/regional-price-parities-state-and-metro-area',
    provides:
      'State all-items, goods, and services-component (housing/utilities/other) RPP indexes. 2023 vintage — the December 2025 / February 2026 release spreadsheet was not available at fetch time.',
  },
  {
    name: 'Bureau of Labor Statistics — CPI: Funeral expenses (+3.0% 12-month, August 2026)',
    url: 'https://www.bls.gov/news.release/cpi.t02.htm',
    provides: 'Inflation context for funeral costs; index base December 1986 = 100.',
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

export default function MethodologyPage() {
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
          name: 'FuneralCostInfo state funeral-cost estimates, model v1',
          description:
            'Modeled state-level funeral-cost estimates for 50 states + D.C.: NFDA 2023 national medians adjusted by BEA 2023 regional price parities. Values are modeled, not surveyed.',
          url: SITE_URL + '/methodology/',
          creator: { '@type': 'Organization', name: 'FuneralCostInfo', url: SITE_URL + '/' },
          datePublished: LAST_UPDATED,
          variableMeasured: 'Modeled median funeral cost by service type and state (USD)',
        }}
      />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> › Methodology</nav>
        <h1>Methodology — model v1</h1>
        <p className="answer-first">
          <strong>Quick answer:</strong> every state figure on this site is a modeled estimate
          computed as <em>NFDA 2023 national median × (state BEA regional price parity ÷ 100)</em>,
          rounded to the nearest $10, with an illustrative ±15% range. The NFDA publishes national
          medians only — no state-level funeral price survey exists — so modeling from official
          sources is the most transparent way to answer &ldquo;what does it cost near me?&rdquo;
        </p>

        <h2>The formula</h2>
        <p><code>state_estimate = national_median × (state_RPP_all_items / 100)</code></p>
        <p>
          Example — California traditional burial: $8,300 × (112.6 / 100) = $9,345.80 →{' '}
          <strong>{fmt(dataset.states.find((s) => s.abbr === 'CA')!.estimates.traditional_burial.point)}</strong>{' '}
          (rounded to the nearest $10). The ±15% range is illustrative, to communicate
          within-state variation; it is not a statistical confidence interval.
        </p>

        <h2>National anchors (NFDA 2023 medians)</h2>
        <table className="data">
          <thead><tr><th>Service</th><th className="num">National anchor</th><th>Basis</th></tr></thead>
          <tbody>
            {Object.entries(dataset.anchors).map(([k, a]) => (
              <tr key={k}>
                <td>{a.label}</td>
                <td className="num">{fmt(a.value)}</td>
                <td>
                  {a.assumption ? `Stated assumption: ${a.assumption}` : 'NFDA 2023 Member GPL Study median'}
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

        <h2>Sources</h2>
        {SOURCES.map((s) => (
          <div key={s.url} style={{ marginBottom: 18 }}>
            <strong>{s.name}</strong>
            <br /><a href={s.url} rel="noopener noreferrer">{s.url}</a>
            <br /><span style={{ color: 'var(--muted)' }}>{s.provides}</span>
            <br /><span className="updated">Retrieved {LAST_UPDATED}</span>
          </div>
        ))}

        <h2>Limitations</h2>
        <ul>
          <li>State values are <strong>modeled from national medians</strong>; actual local prices vary widely.</li>
          <li>NFDA medians come from member funeral homes and exclude cemetery and cash-advance costs.</li>
          <li>RPP vintage is 2023; the dataset will refresh annually as new BEA releases arrive.</li>
          <li>Green burial has no published NFDA median; it is a stated assumption (0.60× traditional burial), labeled as such everywhere it appears.</li>
          <li>Calculator add-on ranges (flowers, obituary) are typical market ranges, not surveyed prices.</li>
          <li>This site is educational content, not financial, legal, or funeral-planning advice.</li>
        </ul>
        <p className="updated">Model v1 · built {LAST_UPDATED} · refresh cadence: annual.</p>
      </div>
    </>
  );
}
