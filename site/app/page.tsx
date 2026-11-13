import type { Metadata } from 'next';
import Calculator from '../components/Calculator';
import NationalStats from '../components/NationalStats';
import StateTable from '../components/StateTable';
import UsMap from '../components/UsMap';
import JsonLd, { breadcrumbJsonLd, faqJsonLd } from '../components/JsonLd';
import Byline from '../components/Byline';
import { PAGE_DATES } from '../lib/page-dates';
import { SITE_URL, LAST_UPDATED, dataset, fmt, VINTAGE_LABEL } from '../lib/data';
import Link from 'next/link';

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
  const homeFaqs = [
    {
      q: 'How much does a funeral cost in 2026?',
      a: `The national median for a funeral with viewing and burial is ${fmt(a.traditional_burial.value)} (NFDA 2023 median restated in August 2026 dollars), or ${fmt(a.burial_with_vault.value)} with a burial vault. That covers funeral-home services and a metal casket; the cemetery plot, opening and closing, and a headstone are extra. State medians in our model run from about ${fmt(dataset.states.reduce((m, s) => Math.min(m, s.estimates.traditional_burial.point), Infinity))} to ${fmt(dataset.states.reduce((m, s) => Math.max(m, s.estimates.traditional_burial.point), 0))}. Pick your state above for its figure.`,
    },
    {
      q: 'How much does cremation cost?',
      a: `A funeral with viewing and cremation is ${fmt(a.cremation_with_service.value)} nationally. Direct cremation, with no viewing or ceremony, is ${fmt(a.direct_cremation.value)} and is normally the cheapest disposition a funeral home offers. Cemetery or niche costs, an upgraded urn, permits, and certified death certificates are extra.`,
    },
    {
      q: 'What is the cheapest way to handle a funeral?',
      a: `Direct cremation (${fmt(a.direct_cremation.value)} national median) is the cheapest funeral-home route, followed by direct burial at ${fmt(a.direct_burial.value)} before cemetery charges. Whole-body donation to a medical program is free when accepted, and every county must arrange disposition for people whose families genuinely cannot pay. Our guide to the cheapest funeral options compares each route honestly, including the trade-offs.`,
    },
    {
      q: 'Who legally gets the ashes after a cremation?',
      a: `The person who holds the legal right to control disposition under state law: usually a designated agent the deceased named in writing, then a spouse, then adult children, though the order and the details differ by state, and the funeral home releases the remains to that person or their designee. When family members disagree, the funeral home will typically wait until the dispute is resolved. Our guide to who gets the ashes explains how the priority order works, and every state page on this site carries that state's order and statute. This is general information, not legal advice.`,
    },
    {
      q: 'Can a funeral home hold ashes or a body until the bill is paid?',
      a: `It depends on the state and the contract, and it is one of the most stressful questions families ask. Some states restrict withholding human remains over a debt; elsewhere the signed contract governs, and the person who signed is usually personally liable for the bill. Our guide on funeral homes holding ashes or a body explains what the law and the FTC Funeral Rule do and do not say, and the practical steps to take first if it happens to you.`,
    },
    {
      q: 'What if I cannot afford a funeral at all?',
      a: `Start with direct cremation and an itemized price comparison, then ask the county coroner or social-services office about indigent burial or cremation programs, check the Social Security $255 lump-sum death payment and VA burial benefits for veterans, and consider whole-body donation. Our guide to indigent burial assistance walks through each option. Avoid signing a contract you cannot pay under time pressure: the signer is usually personally liable.`,
    },
  ];
  const ca = dataset.states.find((s) => s.abbr === 'CA')!;
  const ar = dataset.states.find((s) => s.abbr === 'AR')!;
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', url: SITE_URL + '/' }])} />
      <JsonLd data={faqJsonLd(homeFaqs)} />
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
                The national anchor is <strong>{fmt(a.traditional_burial.value)}</strong> for a
                funeral with viewing and burial — the NFDA 2023 median of {fmt(a.traditional_burial.value_2023)}{' '}
                restated in August 2026 dollars. But prices swing widely by state —
                our modeled estimates put California near{' '}
                <strong>{fmt(ca.estimates.traditional_burial.point)}</strong> and Arkansas near{' '}
                <strong>{fmt(ar.estimates.traditional_burial.point)}</strong>. Build a line-item
                estimate, explore the map, or browse every state below.
              </p>
              <Byline updated={PAGE_DATES['/']?.updated} />
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
              parity. Hover any state for its estimate; every state has a full cost guide — select any state.
            </p>
          </div>
          <UsMap />
        </div>
      </section>

      <section className="section" aria-labelledby="national-heading" style={{ paddingTop: 8 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">The national anchors</p>
            <h2 id="national-heading">The national numbers</h2>
            <p>
              Every state figure on this site starts from the same six national anchors: NFDA 2023
              medians restated in August 2026 dollars. A traditional funeral with viewing and burial
              is <strong>{fmt(a.traditional_burial.value)}</strong> nationally.
            </p>
          </div>
          <NationalStats />
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
        </div>
      </section>

      <section className="section" aria-labelledby="faq-heading" style={{ paddingTop: 8 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Answers first</p>
            <h2 id="faq-heading">The questions families actually ask</h2>
          </div>
          <div className="faq">
            {homeFaqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <p>
            <Link href="/guides/who-gets-the-ashes/">Who gets the ashes: the full guide →</Link>
            {' · '}
            <Link href="/guides/indigent-burial-assistance/">If you cannot afford a funeral →</Link>
            {' · '}
            <Link href="/guides/cheapest-funeral-options/">Cheapest funeral options →</Link>
          </p>
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
            <Link href="/methodology/">Read the full open methodology →</Link>
            {' · '}
            <Link href="/guides/funeral-service-types/">Funeral service types explained →</Link>
            {' · '}
            <Link href="/guides/funeral-rule-rights/">Your rights under the FTC Funeral Rule →</Link>
          </p>
          <p className="updated">
            {VINTAGE_LABEL} · Updated {LAST_UPDATED} · Model v3 · Next refresh: monthly CPI adjustment, annual BEA rebuild.
          </p>
        </div>
      </section>
    </>
  );
}
