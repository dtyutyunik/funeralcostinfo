import type { Metadata } from 'next';
import Calculator from '../components/Calculator';
import StateTable from '../components/StateTable';
import UsMap from '../components/UsMap';
import JsonLd, { breadcrumbJsonLd } from '../components/JsonLd';
import { SITE_URL, LAST_UPDATED, dataset, fmt, VINTAGE_LABEL } from '../lib/data';

export const metadata: Metadata = {
  title: 'FuneralCostInfo — What funerals really cost, by state',
  description:
    'Modeled funeral-cost estimates for all 50 states, built from 2024 BEA regional price parities and 2023 NFDA national medians adjusted to August 2026 dollars via BLS CPI. National median: $9,140 for a funeral with viewing and burial. We take no money from funeral homes.',
  alternates: { canonical: SITE_URL + '/' },
  openGraph: {
    title: 'FuneralCostInfo — What funerals really cost, by state',
    description:
      'Independent, modeled funeral-cost estimates for every U.S. state. National median $9,140 (burial with viewing, NFDA 2023 in Aug 2026 dollars).',
    url: SITE_URL + '/',
  },
};

const WHY = [
  {
    icon: '◈',
    title: 'Named sources, dated',
    body: 'Every input is cited with its publisher and retrieval date — 2024 BEA price parities, 2023 NFDA medians adjusted to August 2026 dollars via BLS CPI — on our open methodology page.',
  },
  {
    icon: '⬔',
    title: 'Modeled, labeled as modeled',
    body: 'We never present an estimate as a surveyed price or a quote. The formula is published; the ±15% range is illustrative, not hidden.',
  },
  {
    icon: '✦',
    title: 'No funeral-industry money',
    body: 'No funeral home pays us, and none can pay to change a number. See our affiliate disclosure for exactly how we may earn.',
  },
  {
    icon: '⚖',
    title: 'Know your rights',
    body: 'Under the FTC Funeral Rule you can get an itemized price list from any funeral home — learn your rights before you sign anything.',
  },
];

export default function Home() {
  const a = dataset.anchors;
  const ca = dataset.states.find((s) => s.abbr === 'CA')!;
  const ar = dataset.states.find((s) => s.abbr === 'AR')!;
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', url: SITE_URL + '/' }])} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'FuneralCostInfo',
          url: SITE_URL + '/',
          description:
            'Independent, modeled funeral-cost estimates for every U.S. state, from a site that takes no money from funeral homes.',
        }}
      />
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Independent funeral-cost transparency</p>
              <h1>
                What does a funeral <em>actually</em> cost in your state?
              </h1>
              <p className="lede">
                The national median is <strong>{fmt(a.traditional_burial.value)}</strong> for a
                funeral with viewing and burial (NFDA 2023, adjusted to August 2026 dollars). But prices swing widely by state —
                our modeled estimates put California near{' '}
                <strong>{fmt(ca.estimates.traditional_burial.point)}</strong> and Arkansas near{' '}
                <strong>{fmt(ar.estimates.traditional_burial.point)}</strong>. Build a line-item
                estimate, explore the map, or browse every state below.
              </p>
              <div className="hero-facts">
                <div className="hero-fact">
                  <div className="num">{fmt(a.traditional_burial.value)}</div>
                  <div className="lbl"><strong>National median</strong>, funeral with viewing + burial (NFDA 2023, in Aug 2026 dollars)</div>
                </div>
                <div className="hero-fact">
                  <div className="num">{fmt(a.direct_cremation.value)}</div>
                  <div className="lbl"><strong>National median</strong>, direct cremation (NFDA 2023, in Aug 2026 dollars)</div>
                </div>
                <div className="hero-fact">
                  <div className="num">51</div>
                  <div className="lbl"><strong>Jurisdictions modeled</strong> from official 2024 price parities</div>
                </div>
              </div>
            </div>
            <Calculator defaultState="CA" compact />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="map-heading">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">The national picture</p>
            <h2 id="map-heading">One map, fifty-one price levels</h2>
            <p>
              Every state colored by its <strong>modeled cost of a traditional funeral</strong> —
              the NFDA 2023 national median (adjusted to August 2026 dollars with the BLS
              funeral-expenses CPI) scaled by the state&rsquo;s 2024 BEA regional price
              parity. Hover any state for its estimate; the five outlined states have full cost guides.
            </p>
          </div>
          <UsMap />
        </div>
      </section>

      <section className="section" aria-labelledby="table-heading" style={{ paddingTop: 8 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Every state</p>
            <h2 id="table-heading">Funeral cost estimates by state</h2>
            <p>
              Search, sort by cost, and compare. Each figure is a{' '}
              <strong>modeled estimate</strong> — the method is shown, not hidden.
            </p>
          </div>
          <StateTable />

          <div className="ad-slot no-print" role="complementary" aria-label="Advertisement placeholder">
            Advertisement — placeholder slot. No ad network code is installed on this site.
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="why-heading" style={{ paddingTop: 8 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Why trust these numbers</p>
            <h2 id="why-heading">Transparency is the product</h2>
          </div>
          <div className="why-grid">
            {WHY.map((w) => (
              <div className="why-card" key={w.title}>
                <div className="icon" aria-hidden="true" style={{ color: 'var(--bronze)' }}>{w.icon}</div>
                <h3>{w.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: w.body }} />
              </div>
            ))}
          </div>
          <p>
            <a href="/methodology/">Read the full open methodology →</a>
            {' · '}
            <a href="/guides/funeral-rule-rights/">Your rights under the FTC Funeral Rule →</a>
          </p>
          <p className="updated">
            {VINTAGE_LABEL} · Updated {LAST_UPDATED} · Model v3 · Next refresh: monthly CPI adjustment, annual BEA rebuild.
          </p>
        </div>
      </section>
    </>
  );
}
