import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL, dataset, fmt, stateSlug, PHASE0_STATES } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Funeral Costs by State 2026: All 50 States + D.C.',
  description:
    'Modeled funeral cost estimates for all 50 states and D.C. in August 2026 dollars: traditional burial and direct cremation, ranked most to least expensive.',
  alternates: { canonical: SITE_URL + '/guides/funeral-costs-by-state-2026/' },
  openGraph: {
    title: 'Funeral Costs by State 2026: All 50 States + D.C.',
    description:
      'Compare modeled funeral cost estimates for every state and D.C.: traditional burial vs. direct cremation, ranked most to least expensive.',
    url: SITE_URL + '/guides/funeral-costs-by-state-2026/',
  },
};

export default function FuneralCostsByStateGuide() {
  const sorted = [...dataset.states].sort(
    (a, b) => b.estimates.traditional_burial.point - a.estimates.traditional_burial.point,
  );
  const most = sorted[0];
  const least = sorted[sorted.length - 1];
  const national = dataset.anchors;

  const faqs = [
    {
      q: 'Are these real quotes from funeral homes in my state?',
      a: 'No. These are modeled estimates, not surveyed quotes. We start from the NFDA 2023 national medians ($8,300 for a funeral with viewing and burial; $2,750 for direct cremation), adjust them to August 2026 dollars using the BLS Consumer Price Index for funeral expenses, then scale each state by its 2024 BEA regional price parity. Your local quotes can differ — always get at least two itemized price lists (the GPL every funeral home must provide under the FTC Funeral Rule).',
    },
    {
      q: 'Why is my state more or less expensive than the national average?',
      a: 'Almost entirely because of local cost of living. The BEA\'s regional price parity measures how much more or less the same basket of goods and services costs in each state versus the national average. Funeral homes pay local rent, wages, and overhead, so states with a high cost of living — California (110.72), Hawaii (109.95), New Jersey — run above the national anchor, while lower-cost states — Mississippi (86.95), Arkansas (86.94), Iowa — run below it.',
    },
    {
      q: 'Is direct cremation cheaper than traditional burial in every state?',
      a: 'Yes — by a wide margin, everywhere. In the most expensive state (California), direct cremation is modeled at $3,350 versus $10,120 for traditional burial. In the least expensive (Mississippi), it is $2,630 versus $7,950. The gap holds in all 51 jurisdictions because the cost drivers differ: cremation skips embalming, the viewing, the casket, the plot, and the grave opening/closing.',
    },
    {
      q: 'Can the state figure be wrong for my city?',
      a: 'Yes — a state estimate is a midpoint, not a promise. Prices vary a lot within a state: metro areas typically run above the state figure, rural areas below it, and individual funeral homes can differ by thousands on the same package. Treat the state number as your starting anchor, then get local general price lists. The range between the low and high columns shows how much real variation exists.',
    },
    {
      q: 'How exactly are the state numbers built?',
      a: 'Two steps. First, the national anchors: NFDA 2023 medians multiplied by 1.1016, the ratio of the August 2026 BLS funeral-expenses CPI (417.820) to the 2023 average (379.301) — giving $9,140 for traditional burial and $3,030 for direct cremation. Second, each state\'s figure is the anchor multiplied by that state\'s 2024 BEA regional price parity divided by 100. Example: California\'s parity of 110.72 means roughly 10.7% above the national average, so $9,140 × 1.1072 ≈ $10,120.',
    },
    {
      q: 'Can I download this data?',
      a: 'Yes. The full 51-jurisdiction dataset — all six service types with point, low, and high estimates — is available as a CSV: see the download link below the table. It carries the same data vintage as this page.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Funeral costs by state 2026', url: SITE_URL + '/guides/funeral-costs-by-state-2026/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Funeral costs by state 2026</nav>
      <JsonLd data={articleJsonLd({
        title: 'Funeral Costs by State 2026: All 50 States + D.C.',
        description: 'Modeled funeral cost estimates for all 50 states and D.C. in August 2026 dollars: traditional burial and direct cremation, ranked most to least expensive.',
        url: SITE_URL + '/guides/funeral-costs-by-state-2026/',
        datePublished: '2026-09-24',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="funeral-costs-by-state-2026" imageAlt="Funeral costs by state, 2026"><h1>Funeral costs by state, 2026</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> funeral costs vary enormously by state. For a traditional
          funeral with burial, <strong>{most.name}</strong> is the most expensive jurisdiction at{' '}
          <strong>{fmt(most.estimates.traditional_burial.point)}</strong>, while <strong>{least.name}</strong> is
          the least expensive at <strong>{fmt(least.estimates.traditional_burial.point)}</strong> — a gap of
          about {fmt(most.estimates.traditional_burial.point - least.estimates.traditional_burial.point)} on the
          same service. Direct cremation runs from {fmt(most.estimates.direct_cremation.point)} in{' '}
          {most.name} to {fmt(least.estimates.direct_cremation.point)} in {least.name}. Every figure below
          is a <strong>modeled estimate in August 2026 dollars</strong>, not a surveyed quote —{' '}
          <Link href="/methodology/">see how we built them</Link>.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>What these numbers are</h2>
        <p>
          There is no national survey of actual funeral-home prices state by state, so we built one
          from public sources instead. The starting point is the National Funeral Directors
          Association's 2023 general price list survey: a national median of <strong>$8,300</strong> for
          a funeral with viewing and burial, and <strong>$2,750</strong> for direct cremation (NFDA 2023,
          via our model). Those medians are then adjusted for inflation to August 2026 using the
          Bureau of Labor Statistics' Consumer Price Index for funeral expenses, and adjusted by
          state using the Bureau of Economic Analysis' 2024 regional price parities.
        </p>
        <p>
          The inflation step uses a factor of 1.1016: the August 2026 funeral-expenses CPI
          (417.820) divided by the 2023 average (379.301). In plain terms, the same funeral
          arrangement costs about 10% more today than it did in 2023. That figure comes from the
          BLS series that tracks funeral expenses specifically — not headline inflation — which is
          why we use it rather than a generic price index.
        </p>
        <p>
          The result is our national anchors — {fmt(national.traditional_burial.value)} for traditional
          burial and {fmt(national.direct_cremation.value)} for direct cremation — and the
          state-by-state figures in the table below. They are planning anchors, not quotes. Actual
          prices depend on the funeral home, the merchandise you choose, and the cemetery.
        </p>

        <h2>How regional price parity works</h2>
        <p>
          Regional price parity (RPP) is the BEA's measure of how much more or less the same basket
          of goods and services costs in each state compared with the national average. Think of it
          as a local price tag: a state with an RPP of 110 pays roughly <strong>10% above</strong> the
          national average for the same basket; a state with an RPP of 90 pays roughly <strong>10%
          below</strong> it. Funeral homes pay local rent, local wages, and local utilities, so
          funeral prices track the local cost of living closely.
        </p>
        <p>
          Our model is a simple multiplication: <strong>state estimate = national anchor × (state RPP
          ÷ 100)</strong>. California's 2024 RPP is 110.72 — the highest in the country — so
          traditional burial there is {fmt(national.traditional_burial.value)} × 1.1072 ≈{' '}
          {fmt(most.estimates.traditional_burial.point)}. Mississippi's RPP is 86.95, so its
          traditional burial is {fmt(national.traditional_burial.value)} × 0.8695 ≈{' '}
          {fmt(least.estimates.traditional_burial.point)}. Hawaii and the District of Columbia sit
          right behind California at the expensive end; Arkansas is essentially tied with Mississippi
          at the affordable end.
        </p>
        <p>
          This is a blunt instrument, honestly applied. RPP measures the whole consumer basket, not
          funeral prices specifically, and it cannot capture funeral-home competition, local
          regulations, or the difference between a big city and a small town inside one state. That
          is why the table shows each service with its point estimate, and why we emphasize: use the
          state figure to calibrate your expectations, then get local price lists.
        </p>

        <h2>What to do about the gap</h2>
        <p>
          Living in an expensive state does not mean you have to pay the state figure. Three
          practical moves cut the bill in almost every state:
        </p>
        <ol>
          <li><strong>Choose the service type deliberately.</strong> This is the largest lever by
          far. The gap between direct cremation and traditional burial in the <em>same</em> state
          is roughly 3-to-1 — far larger than the gap between the cheapest and most expensive
          states for the <em>same</em> service. You cannot choose your state, but you can choose
          the service type.</li>
          <li><strong>Get two or three general price lists.</strong> The FTC Funeral Rule requires
          every funeral home to give you an itemized GPL, and price dispersion between providers
          in the same town is often wider than the state-to-state gap in this table. The state
          estimate tells you what "normal" looks like; the GPLs tell you who is actually charging
          it.</li>
          <li><strong>Separate the cemetery from the funeral home.</strong> For burial, the plot,
          opening/closing, and any required vault or liner are cemetery charges — and cemeteries
          are not covered by the Funeral Rule's price-disclosure requirements. Compare them on
          their own, because cemetery pricing varies just as much as funeral-home pricing.</li>
        </ol>
        <p>
          One caution on shopping across state lines: it can be done — nothing stops you from
          comparing funeral homes in a neighboring state — but transport costs eat into the
          savings fast, and state laws on permits, timing, and required licenses differ. Run the
          transport math before assuming a cheaper state means a cheaper funeral.
        </p>

        <h2>All 51 jurisdictions, ranked</h2>
        <p>
          Sorted from most to least expensive by traditional burial. The five states we have covered
          in depth — California, Texas, Florida, New York, and Mississippi — link to their full
          state pages with line-item breakdowns, add-ons, and official resources.
        </p>
        <div className="table-scroll">
          <table className="data">
            <caption>Modeled estimates in August 2026 dollars (NFDA 2023 medians via our model, BEA 2024 RPP-adjusted).</caption>
            <thead>
              <tr>
                <th>Jurisdiction</th>
                <th>Traditional burial</th>
                <th>Direct cremation</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((s) => {
                const slug = stateSlug(s.name);
                const linked = PHASE0_STATES.includes(slug);
                return (
                  <tr key={s.abbr}>
                    <td>{linked ? <Link href={'/funeral-costs/' + slug + '/'}>{s.name}</Link> : s.name}</td>
                    <td><strong>{fmt(s.estimates.traditional_burial.point)}</strong></td>
                    <td>{fmt(s.estimates.direct_cremation.point)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <h2>How to read this table</h2>
        <p>
          <strong>The numbers are point estimates, not ranges.</strong> Each state's full low–high
          band is wide — roughly 30% on either side — because the underlying NFDA medians are
          national figures with real dispersion. If your state says $8,700, a funeral at $7,000 and
          one at $10,500 are both perfectly plausible outcomes. Our <Link href="/calculator/">calculator</Link> uses
          the full range to build line-item estimates.
        </p>
        <p>
          <strong>Metro areas run hotter than the state number; rural areas run cooler.</strong> A
          single state can contain a 20–30% spread between its biggest city and its small towns.
          The state figure is a weighted midpoint — if you live in Manhattan, budget above New
          York's figure; if you live in rural Mississippi, expect to come in below it.
        </p>
        <p>
          <strong>Direct cremation is the floor everywhere.</strong> In every jurisdiction it costs
          roughly a third of traditional burial. The single biggest lever on any funeral bill is the
          service type you choose — more than the state you live in. Choosing direct cremation in
          California ({fmt(most.estimates.direct_cremation.point)}) costs less than half of a
          traditional burial in Mississippi ({fmt(least.estimates.traditional_burial.point)}).
        </p>
        <p>
          <strong>Figures need no inflation adjustment</strong> — they are already in August 2026
          dollars. Cemetery fees (plot, opening/closing) are included in the traditional burial
          figure as modeled from the NFDA median; actual cemetery charges vary separately, so
          compare cemeteries on their own price list too.
        </p>

        <p>
          <a href="/press/funeral-costs-by-state-2026.csv" download>Download the full dataset (CSV)</a>{' '}
          — all six service types for all 51 jurisdictions, with point, low, and high estimates.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>

        <p>
          <Link href="/calculator/">Build your line-item estimate →</Link>
          {' · '}
          <Link href="/methodology/">How we build our estimates →</Link>
          {' · '}
          <Link href="/guides/funeral-service-types/">Funeral service types explained →</Link>
          {' · '}
          <Link href="/guides/funeral-glossary/">Funeral terms glossary →</Link>
        </p>
      <RelatedGuides currentSlug="funeral-costs-by-state-2026" />
      </div>
    </>
  );
}
