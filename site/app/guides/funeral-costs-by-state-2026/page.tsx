import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { PAGE_DATES } from '../../../lib/page-dates';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL, dataset, fmt, stateSlug, ALL_STATE_SLUGS, SERVICE_ORDER } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Funeral Cost Index 2026: Average Funeral Costs by State',
  description:
    'The Funeral Cost Index 2026: national averages for all six funeral service types in August 2026 dollars, plus modeled estimates for all 50 states and D.C., ranked most to least expensive.',
  alternates: { canonical: SITE_URL + '/guides/funeral-costs-by-state-2026/' },
  openGraph: {
    title: 'Funeral Cost Index 2026: Average Funeral Costs by State',
    description:
      'National funeral cost averages for all six service types, and every state ranked most to least expensive, in August 2026 dollars.',
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
  const maxAnchor = Math.max(...SERVICE_ORDER.map((k) => national[k].value));

  const faqs = [
    {
      q: 'Are these real quotes from funeral homes in my state?',
      a: 'No. These are modeled estimates, not surveyed quotes. We start from the NFDA 2023 national medians ($8,300 for a funeral with viewing and burial; $2,750 for direct cremation), adjust them to August 2026 dollars using the BLS Consumer Price Index for funeral expenses, then scale each state by its 2024 BEA regional price parity. Your local quotes can differ, so always get at least two itemized price lists (the GPL every funeral home must provide under the FTC Funeral Rule).',
    },
    {
      q: 'Why is my state more or less expensive than the national average?',
      a: 'Almost entirely because of local cost of living. The BEA\'s regional price parity measures how much more or less the same basket of goods and services costs in each state versus the national average. Funeral homes pay local rent, wages, and overhead, so states with a high cost of living, California (110.72), Hawaii (109.95), and New Jersey, run above the national anchor, while lower-cost states, Mississippi (86.95), Arkansas (86.94), and Iowa, run below it.',
    },
    {
      q: 'Is direct cremation cheaper than traditional burial in every state?',
      a: 'Yes, by a wide margin, everywhere. In the most expensive state (California), direct cremation is modeled at $3,350 versus $10,120 for traditional burial. In the least expensive (Mississippi), it is $2,630 versus $7,950. The gap holds in all 51 jurisdictions because the cost drivers differ: cremation skips embalming, the viewing, the casket, the plot, and the grave opening/closing.',
    },
    {
      q: 'Can the state figure be wrong for my city?',
      a: 'Yes. A state estimate is a midpoint, not a promise. Prices vary a lot within a state: metro areas typically run above the state figure, rural areas below it, and individual funeral homes can differ by thousands on the same package. Treat the state number as your starting anchor, then get local general price lists. The range between the low and high columns shows how much real variation exists.',
    },
    {
      q: 'How exactly are the state numbers built?',
      a: 'Two steps. First, the national anchors: NFDA 2023 medians multiplied by 1.1016, the ratio of the August 2026 BLS funeral-expenses CPI (417.820) to the 2023 average (379.301), giving $9,140 for traditional burial and $3,030 for direct cremation. Second, each state\'s figure is the anchor multiplied by that state\'s 2024 BEA regional price parity divided by 100. Example: California\'s parity of 110.72 means roughly 10.7% above the national average, so $9,140 × 1.1072 ≈ $10,120.',
    },
    {
      q: 'When will the index be updated?',
      a: 'When the underlying official releases change. The national anchors come from the NFDA 2023 General Price List Study, the most recent edition; they move when NFDA publishes a new study. The inflation step uses the BLS Consumer Price Index for funeral expenses, which is published monthly, and the state scaling uses BEA regional price parities, which are published annually. Until a new release arrives, the figures stay in August 2026 dollars and the as-of date at the top of the page stays put. The full tables live on this page; we do not offer a downloadable file.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Funeral Cost Index 2026', url: SITE_URL + '/guides/funeral-costs-by-state-2026/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Funeral Cost Index 2026</nav>
      <JsonLd data={articleJsonLd({
        title: 'Funeral Cost Index 2026: Average Funeral Costs by State',
        description: 'National funeral cost averages for all six service types, and every state ranked most to least expensive, in August 2026 dollars.',
        url: SITE_URL + '/guides/funeral-costs-by-state-2026/',
        datePublished: '2026-09-24',
        dateModified: PAGE_DATES['/guides/funeral-costs-by-state-2026/']?.updated ?? LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="funeral-costs-by-state-2026" imageAlt="Funeral Cost Index 2026"><h1>Funeral Cost Index 2026</h1></GuideHero>
        <Byline published={PAGE_DATES['/guides/funeral-costs-by-state-2026/']?.published} updated={PAGE_DATES['/guides/funeral-costs-by-state-2026/']?.updated} />

        <p className="answer-first">
          <strong>Quick answer:</strong> funeral costs vary enormously by state. For a traditional
          funeral with burial, <strong>{most.name}</strong> is the most expensive jurisdiction at{' '}
          <strong>{fmt(most.estimates.traditional_burial.point)}</strong>, while <strong>{least.name}</strong> is
          the least expensive at <strong>{fmt(least.estimates.traditional_burial.point)}</strong>, a gap of
          about {fmt(most.estimates.traditional_burial.point - least.estimates.traditional_burial.point)} on the
          same service. Direct cremation runs from {fmt(most.estimates.direct_cremation.point)} in{' '}
          {most.name} to {fmt(least.estimates.direct_cremation.point)} in {least.name}. Every figure below
          is a <strong>modeled estimate in August 2026 dollars</strong>, not a surveyed quote,{' '}
          <Link href="/methodology/">see how we built them</Link>.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>The national index</h2>
        <p>
          The national index is the starting point for every state figure on this page: the NFDA
          2023 national medians, adjusted to August 2026 dollars. A traditional funeral with
          viewing and burial is <strong>{fmt(national.traditional_burial.value)}</strong> nationally,
          and direct cremation is <strong>{fmt(national.direct_cremation.value)}</strong>. The chart
          shows all six service types side by side; the table shows where each number comes from.
        </p>
        <div className="est-grid">
          {SERVICE_ORDER.map((k, i) => {
            const a = national[k];
            return (
              <div className={`est-card${i === 0 ? ' featured' : ''}`} key={k}>
                <div className="svc">
                  {a.label}
                  {a.assumption && <small>Stated assumption: no NFDA median exists</small>}
                </div>
                <div className="val">{fmt(a.value)}</div>
                <div className="rng">NFDA 2023 median {a.assumption ? 'n/a' : fmt(a.value_2023)} × 1.1016</div>
                <div className="bar-track" aria-hidden="true">
                  <div className="bar-fill" style={{ width: `${(a.value / maxAnchor) * 100}%` }} />
                </div>
                {a.assumption && (
                  <div className="assumption">Assumption: {a.assumption}</div>
                )}
              </div>
            );
          })}
        </div>
        <div className="table-scroll">
          <table className="data">
            <caption>National funeral cost index, August 2026 dollars. Green burial is an assumption, not an NFDA median.</caption>
            <thead>
              <tr>
                <th>Service type</th>
                <th>NFDA 2023 median</th>
                <th>August 2026 estimate</th>
              </tr>
            </thead>
            <tbody>
              {SERVICE_ORDER.map((k) => {
                const a = national[k];
                return (
                  <tr key={k}>
                    <td>{a.label}{a.assumption ? ' *' : ''}</td>
                    <td>{a.assumption ? 'No NFDA median' : fmt(a.value_2023)}</td>
                    <td><strong>{fmt(a.value)}</strong></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p>
          * Green burial has no published NFDA median. Our figure is a stated assumption: 60% of
          the adjusted traditional burial figure ({fmt(national.traditional_burial.value)}), because
          green burial skips embalming, the vault, and the conventional casket. Cemetery fees
          (plot, opening and closing, marker) are not included in any figure above; they are billed
          separately by the cemetery.
        </p>

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
          BLS series that tracks funeral expenses specifically, not headline inflation, which is
          why we use it rather than a generic price index.
        </p>
        <p>
          The result is our national anchors: {fmt(national.traditional_burial.value)} for traditional
          burial and {fmt(national.direct_cremation.value)} for direct cremation, and the
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
          ÷ 100)</strong>. California's 2024 RPP is 110.72, the highest in the country, so
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
          is roughly 3-to-1, far larger than the gap between the cheapest and most expensive
          states for the <em>same</em> service. You cannot choose your state, but you can choose
          the service type.</li>
          <li><strong>Get two or three general price lists.</strong> The FTC Funeral Rule requires
          every funeral home to give you an itemized GPL, and price dispersion between providers
          in the same town is often wider than the state-to-state gap in this table. The state
          estimate tells you what "normal" looks like; the GPLs tell you who is actually charging
          it.</li>
          <li><strong>Separate the cemetery from the funeral home.</strong> For burial, the plot,
          opening/closing, and any required vault or liner are cemetery charges, and cemeteries
          are not covered by the Funeral Rule's price-disclosure requirements. Compare them on
          their own, because cemetery pricing varies just as much as funeral-home pricing.</li>
        </ol>
        <p>
          One caution on shopping across state lines: it can be done. Nothing stops you from
          comparing funeral homes in a neighboring state, but transport costs eat into the
          savings fast, and state laws on permits, timing, and required licenses differ. Run the
          transport math before assuming a cheaper state means a cheaper funeral.
        </p>

        <h2>All 51 jurisdictions, ranked</h2>
        <p>
          Sorted from most to least expensive by traditional burial. Every jurisdiction links to its
          full state page with service-by-service estimates, local caveats, and official resources.
        </p>
        <div className="table-scroll">
          <table className="data">
            <caption>Modeled estimates in August 2026 dollars (NFDA 2023 medians via our model, BEA 2024 RPP-adjusted).</caption>
            <thead>
              <tr>
                <th>Jurisdiction</th>
                <th>Traditional burial</th>
                <th>Cremation with service</th>
                <th>Direct cremation</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((s) => {
                const slug = stateSlug(s.name);
                const linked = ALL_STATE_SLUGS.includes(slug);
                return (
                  <tr key={s.abbr}>
                    <td>{linked ? <Link href={'/funeral-costs/' + slug + '/'}>{s.name}</Link> : s.name}</td>
                    <td><strong>{fmt(s.estimates.traditional_burial.point)}</strong></td>
                    <td>{fmt(s.estimates.cremation_with_service.point)}</td>
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
          band is wide, roughly 30% on either side, because the underlying NFDA medians are
          national figures with real dispersion. If your state says $8,700, a funeral at $7,000 and
          one at $10,500 are both perfectly plausible outcomes. Our <Link href="/calculator/">calculator</Link> uses
          the full range to build line-item estimates.
        </p>
        <p>
          <strong>Metro areas run hotter than the state number; rural areas run cooler.</strong> A
          single state can contain a 20–30% spread between its biggest city and its small towns.
          The state figure is a weighted midpoint. If you live in Manhattan, budget above New
          York's figure; if you live in rural Mississippi, expect to come in below it.
        </p>
        <p>
          <strong>Direct cremation is the floor everywhere.</strong> In every jurisdiction it costs
          roughly a third of traditional burial. The single biggest lever on any funeral bill is the
          service type you choose, more than the state you live in. Choosing direct cremation in
          California ({fmt(most.estimates.direct_cremation.point)}) costs less than half of a
          traditional burial in Mississippi ({fmt(least.estimates.traditional_burial.point)}).
        </p>
        <p>
          <strong>Figures need no inflation adjustment</strong>: they are already in August 2026
          dollars. Cemetery fees (plot, opening/closing) are not included in the traditional burial
          figure, so compare cemeteries on their own price list too.
        </p>

        <h2>Methodology and sources</h2>
        <p>
          <strong>Sources.</strong> National anchors: National Funeral Directors Association 2023
          Member General Price List Study medians. Inflation: Bureau of Labor Statistics Consumer
          Price Index for funeral expenses (series CUUR0000SEGD02), August 2026 value 417.820
          against the 2023 average of 379.301, a factor of 1.1016. State scaling: Bureau of
          Economic Analysis 2024 regional price parities, all-items index, released February 2026.
        </p>
        <p>
          <strong>Formula.</strong> State estimate = (NFDA 2023 median × 1.1016) × (state RPP ÷
          100), rounded to the nearest $10. The full methodology, including inclusions, exclusions,
          and limitations, is published at <Link href="/methodology/">funeralcostinfo.com/methodology/</Link>.
        </p>
        <p>
          <strong>What is not included.</strong> Cemetery charges (plot, opening and closing,
          marker) and cash-advance items (death certificates, obituary, flowers, clergy honorarium)
          are billed separately and are not in these figures. The figures are modeled estimates,
          not surveyed prices or quotes, and local quotes can differ by thousands on the same
          service.
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
