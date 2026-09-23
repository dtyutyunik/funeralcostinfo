import type { Metadata } from 'next';
import Calculator from '../components/Calculator';
import StateTable from '../components/StateTable';
import JsonLd, { breadcrumbJsonLd } from '../components/JsonLd';
import { SITE_URL, LAST_UPDATED, dataset, fmt } from '../lib/data';

export const metadata: Metadata = {
  title: 'FuneralCostInfo — What funerals really cost, by state',
  description:
    'Modeled funeral-cost estimates for all 50 states, built from NFDA 2023 national medians and BEA regional price data. National median: $8,300 for a funeral with viewing and burial. We take no money from funeral homes.',
  alternates: { canonical: SITE_URL + '/' },
  openGraph: {
    title: 'FuneralCostInfo — What funerals really cost, by state',
    description:
      'Independent, modeled funeral-cost estimates for every U.S. state. National median $8,300 (burial with viewing, NFDA 2023).',
    url: SITE_URL + '/',
  },
};

export default function Home() {
  const a = dataset.anchors;
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
          <h1>What does a funeral actually cost in your state?</h1>
          <p className="lede">
            The national median is <strong>{fmt(a.traditional_burial.value)}</strong> for a funeral
            with viewing and burial (NFDA, 2023). But prices vary enormously by state — our modeled
            estimates put California near <strong>{fmt(dataset.states.find(s=>s.abbr==='CA')!.estimates.traditional_burial.point)}</strong> and
            Mississippi near <strong>{fmt(dataset.states.find(s=>s.abbr==='MS')!.estimates.traditional_burial.point)}</strong>.
            Build a line-item estimate below, or browse the full state table.
          </p>
          <div className="trust-badges" aria-label="Our commitments">
            <span className="badge">We take no money from funeral homes</span>
            <span className="badge">Methodology published openly</span>
            <span className="badge">Modeled estimates — never presented as quotes</span>
          </div>
          <Calculator defaultState="CA" compact />
        </div>
      </section>

      <div className="wrap prose">
        <h2 id="state-table">Funeral cost estimates by state</h2>
        <p>
          Every figure below is a <strong>modeled estimate</strong>: the NFDA 2023 national median
          multiplied by the state&apos;s BEA regional price parity. No state-level funeral price
          survey exists, so this is the most transparent way to answer &ldquo;what does it cost
          near me?&rdquo; — with the method shown, not hidden.
        </p>
        <StateTable />

        <div className="ad-slot no-print" role="complementary" aria-label="Advertisement placeholder">
          Advertisement — placeholder slot. No ad network code is installed on this site.
        </div>

        <h2>Why trust these numbers?</h2>
        <ul>
          <li><strong>Named sources, dated.</strong> Every input is cited with its publisher and retrieval date on our <a href="/methodology/">methodology page</a>.</li>
          <li><strong>Modeled, labeled as modeled.</strong> We never present an estimate as a surveyed price or a quote.</li>
          <li><strong>No funeral-industry money.</strong> No funeral home pays us, and none can pay to change a number. See our <a href="/affiliate-disclosure/">affiliate disclosure</a>.</li>
          <li><strong>Know your rights.</strong> Under the FTC Funeral Rule you can get an itemized price list from any funeral home — <a href="/guides/funeral-rule-rights/">learn your rights</a>.</li>
        </ul>
        <p className="updated">Dataset: model v1 · built {LAST_UPDATED} · next refresh scheduled annually.</p>
      </div>
    </>
  );
}
