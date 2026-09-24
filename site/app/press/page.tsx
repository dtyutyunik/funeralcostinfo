import type { Metadata } from 'next';
import JsonLd, { breadcrumbJsonLd } from '../../components/JsonLd';
import { dataset, fmt, SITE_URL, LAST_UPDATED, VINTAGE_LABEL } from '../../lib/data';

export const metadata: Metadata = {
  title: 'Press — Funeral Cost Data for Journalists | FuneralCostInfo',
  description:
    'Copy-paste funeral cost figures for journalists: 51-jurisdiction table in August 2026 dollars, CSV download, one-paragraph methodology, and a contact. The only funeral-cost figures expressed in current dollars with a fully published, reproducible formula.',
  alternates: { canonical: SITE_URL + '/press/' },
  openGraph: {
    title: 'Press — Funeral Cost Data for Journalists',
    description:
      'State-by-state funeral costs in August 2026 dollars. Copy-paste table, CSV download, one-paragraph methodology. Independent: we take no money from funeral homes.',
    url: SITE_URL + '/press/',
  },
};

const NATIONAL = {
  traditional_burial: dataset.anchors.traditional_burial.value,
  burial_with_vault: dataset.anchors.burial_with_vault.value,
  cremation_with_service: dataset.anchors.cremation_with_service.value,
  direct_cremation: dataset.anchors.direct_cremation.value,
};

const STATES = [...dataset.states].sort((a, b) => a.name.localeCompare(b.name));

export default function PressPage() {
  return (
    <div className="wrap prose">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', url: SITE_URL + '/' }, { name: 'Press', url: SITE_URL + '/press/' }])} />
      <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> › Press</nav>
      <p className="eyebrow">For journalists</p>
      <h1>Funeral cost figures, ready to quote</h1>

      <div className="answer-first">
        <p>
          The figures below are the only widely published U.S. funeral-cost estimates expressed in{' '}
          <strong>current (August 2026) dollars</strong> with a fully published, reproducible formula.
          Every number on this site is a <strong>modeled estimate</strong> — never a surveyed price
          or a quote — built from 2023 NFDA national medians, adjusted for funeral-price inflation
          via the BLS CPI (×1.1016), and scaled to each state with 2024 BEA regional price parities.
        </p>
        <p>
          <strong>Independence:</strong> FuneralCostInfo takes no money from funeral homes —
          no referral fees, no paid placements, no lead sales. Many price-comparison sites in this
          space are paid by the industry they compare.
        </p>
      </div>

      <h2>Headline figures (August 2026 dollars)</h2>
      <table className="data">
        <thead><tr><th>Service</th><th className="num">National estimate</th><th>Basis</th></tr></thead>
        <tbody>
          <tr><td>Traditional funeral (viewing + burial, vault not incl.)</td><td className="num">{fmt(NATIONAL.traditional_burial)}</td><td>NFDA 2023 median $8,300 × 1.1016</td></tr>
          <tr><td>Traditional funeral (viewing + burial, with vault)</td><td className="num">{fmt(NATIONAL.burial_with_vault)}</td><td>NFDA 2023 median $9,995 × 1.1016</td></tr>
          <tr><td>Funeral (viewing + cremation)</td><td className="num">{fmt(NATIONAL.cremation_with_service)}</td><td>NFDA 2023 median $6,280 × 1.1016</td></tr>
          <tr><td>Direct cremation</td><td className="num">{fmt(NATIONAL.direct_cremation)}</td><td>NFDA 2023 median $2,750 × 1.1016</td></tr>
        </tbody>
      </table>
      <p>
        <strong>Range:</strong> California is the most expensive state for a traditional funeral ({fmt(STATES.find(s => s.name === 'California')!.estimates.traditional_burial.point)});
        Arkansas and Mississippi are the least expensive ({fmt(STATES.find(s => s.name === 'Arkansas')!.estimates.traditional_burial.point)}).
      </p>

      <h2>All 50 states + D.C. — copy-paste table</h2>
      <p>
        Traditional funeral with viewing and burial (vault not included), in August 2026 dollars.
        Prefer a spreadsheet?{' '}
        <a href="/press/funeral-costs-by-state-2026.csv" download>
          Download the full CSV
        </a>{' '}
        (51 jurisdictions × 5 services, plus BEA 2024 RPP indexes).
      </p>
      <table className="data">
        <thead>
          <tr><th>State</th><th className="num">Traditional burial</th><th className="num">Viewing + cremation</th><th className="num">Direct cremation</th></tr>
        </thead>
        <tbody>
          {STATES.map((s) => (
            <tr key={s.abbr}>
              <td>{s.name}</td>
              <td className="num">{fmt(s.estimates.traditional_burial.point)}</td>
              <td className="num">{fmt(s.estimates.cremation_with_service.point)}</td>
              <td className="num">{fmt(s.estimates.direct_cremation.point)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>One-paragraph methodology</h2>
      <div className="card card-pad">
        <p>
          FuneralCostInfo's figures are modeled estimates, not surveyed prices. National anchors are
          the National Funeral Directors Association's 2023 Member General Price List Study medians
          (published in the 2024 NFDA Cremation &amp; Burial Report), adjusted to August 2026 dollars
          using the Bureau of Labor Statistics Consumer Price Index for funeral expenses (factor
          1.1016). State estimates scale each anchor by the Bureau of Economic Analysis 2024
          Regional Price Parity index for that state (all-items, released February 2026).
          Formula: state estimate = (NFDA 2023 median × 1.1016) × (state RPP ÷ 100), rounded to the
          nearest $10. Full methodology, sources, inclusions, exclusions, and limitations are
          published at funeralcostinfo.com/methodology/ and refreshed as official releases arrive.
        </p>
      </div>

      <h2>How to cite us</h2>
      <div className="card card-pad">
        <p>
          <em>FuneralCostInfo, "Average funeral costs by state," modeled estimates in August 2026
          dollars, funeralcostinfo.com (accessed [date]). Methodology: funeralcostinfo.com/methodology/.</em>
        </p>
        <p>
          Free to cite and republish figures with attribution and a link. Please include the data
          vintage ("August 2026 dollars") — it's the part most other sources omit.
        </p>
      </div>

      <h2>Contact</h2>
      <p>
        <img
          src="/images/founder.jpg"
          alt="Dmitriy Tyutyunik, founder of FuneralCostInfo"
          className="founder-photo-sm"
          width={112}
          height={112}
          loading="lazy"
        />
        For custom cuts of the data, methodology questions, or interviews:{' '}
        <a href="mailto:press@funeralcostinfo.com">press@funeralcostinfo.com</a>
        {' '}— Dmitriy Tyutyunik, founder.
      </p>
      <p className="updated">{VINTAGE_LABEL} · Built {LAST_UPDATED} · Model v3 · Refresh cadence: monthly CPI, annual BEA.</p>
    </div>
  );
}
