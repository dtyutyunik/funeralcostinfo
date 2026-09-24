import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL, dataset, fmt } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

const A = dataset.anchors;

export const metadata: Metadata = {
  title: 'How Much Does a Funeral Cost in 2026? The Full Breakdown',
  description:
    'The full 2026 funeral cost breakdown: modeled national prices for all six service types, what the figures include and exclude, and what actually moves your total.',
  alternates: { canonical: SITE_URL + '/guides/funeral-cost-2026-breakdown/' },
  openGraph: {
    title: 'How Much Does a Funeral Cost in 2026? The Full Breakdown',
    description:
      'What a funeral really costs in 2026 — six service types with modeled national estimates, what is and is not included, and why quotes vary so much.',
    url: SITE_URL + '/guides/funeral-cost-2026-breakdown/',
  },
};

const ROWS = [
  { key: 'traditional_burial', name: 'Traditional funeral with burial', blurb: 'Viewing, ceremony, burial — the full-service option.', anchor: 'traditional_burial' },
  { key: 'burial_vault', name: 'Funeral with burial vault', blurb: 'Traditional funeral plus an outer burial container.', anchor: 'burial_with_vault' },
  { key: 'cremation_service', name: 'Cremation with memorial service', blurb: 'Cremation plus a ceremony, with or without the body present.', anchor: 'cremation_with_service' },
  { key: 'direct_cremation', name: 'Direct cremation', blurb: 'No viewing, no ceremony — the simplest and usually cheapest option.', anchor: 'direct_cremation' },
  { key: 'direct_burial', name: 'Direct burial', blurb: 'Burial without a viewing or funeral-home ceremony.', anchor: 'direct_burial' },
  { key: 'green', name: 'Green (natural) burial', blurb: 'No embalming, biodegradable materials, no vault.', anchor: 'green_burial', assumption: true },
];

const STATES = [
  { slug: 'california', name: 'California' },
  { slug: 'texas', name: 'Texas' },
  { slug: 'florida', name: 'Florida' },
  { slug: 'new-york', name: 'New York' },
  { slug: 'mississippi', name: 'Mississippi' },
];

export default function FuneralCost2026Breakdown() {
  const faqs = [
    {
      q: 'What is the average cost of a funeral in 2026?',
      a: 'A widely quoted industry figure is the NFDA 2023 median of $8,300 for a funeral with viewing and burial. Adjusted for inflation, our model puts the 2026 national estimate at $9,140 in August 2026 dollars. That is a modeled estimate, not a surveyed price — the NFDA has not published a 2026 median. It also excludes cemetery costs like the plot, opening/closing, and headstone, which can add several thousand dollars.',
    },
    {
      q: 'Why do two funeral homes quote such different prices for the same service?',
      a: 'Several reasons. Basic services fees — the non-declinable core fee — vary enormously by provider, even within one city. Casket markups are another big lever: funeral homes typically sell caskets at large markups, and you are never required to buy the casket from them. Geography matters too; prices in high-cost metros run well above rural ones. We explain the full picture in our guide to why funeral cost figures disagree.',
    },
    {
      q: 'What is typically NOT included in a funeral cost figure?',
      a: 'The cemetery plot, opening and closing of the grave, headstone or marker, flowers, obituaries, and clergy honoraria are almost always separate — and they add up. National medians from funeral-industry surveys cover the funeral home\u2019s charges only. Cash advances (things the funeral home pays to third parties on your behalf, like death certificates and newspaper notices) are also extra. A useful rule: the quoted funeral-home price is usually the smaller half of the real bill.',
    },
    {
      q: 'What lowers a funeral bill the most?',
      a: 'Three choices dominate the total. First, the service type: direct cremation ($3,030 modeled) instead of a full funeral with burial ($9,140 modeled) cuts the bill by roughly two-thirds. Second, the casket: the NFDA 2023 median price for a metal casket is $2,500 — buying a simple container or shopping a third-party retailer can save thousands. Third, the cemetery: plot prices and opening/closing fees vary wildly, so compare cemeteries the same way you compare funeral homes.',
    },
    {
      q: 'Can I get financial help with funeral costs?',
      a: 'Options are narrow but real. Veterans may qualify for VA burial benefits — up to $2,000 for service-connected deaths, or $1,002 for burial plus $1,002 for a plot/interment for non-service-connected deaths (per VA.gov, current figures; they must be claimed, not automatic, and amounts reset October 1). Social Security pays a one-time $255 lump-sum death payment to eligible survivors. FEMA funeral assistance applies only to federally declared disasters, and its COVID-19 program has closed. Some cities help: New York City, for example, pays up to $1,700 toward qualifying indigent funerals.',
    },
    {
      q: 'Is green burial really cheaper?',
      a: 'Often, but the number you see quoted most often is a placeholder, not a measured price. No national survey tracks green burial prices, so our $5,480 estimate is a stated assumption — 60% of the traditional burial anchor. Skipping embalming and the vault saves real money, but green cemetery plots, especially at conservation cemeteries, can carry premium pricing. Get local quotes before budgeting around the national figure.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'How much does a funeral cost in 2026?', url: SITE_URL + '/guides/funeral-cost-2026-breakdown/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › How much does a funeral cost in 2026?</nav>
      <JsonLd data={articleJsonLd({
        title: 'How Much Does a Funeral Cost in 2026? The Full Breakdown',
        description: 'The full 2026 funeral cost breakdown: modeled national prices for all six service types, what the figures include and exclude, and what actually moves your total.',
        url: SITE_URL + '/guides/funeral-cost-2026-breakdown/',
        datePublished: '2026-09-24',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="funeral-cost-2026-breakdown" imageAlt="How much does a funeral cost in 2026?"><h1>How much does a funeral cost in 2026?</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> a traditional funeral with burial costs about{' '}
          {fmt(A.traditional_burial.value)} as a modeled national estimate in August 2026 dollars —
          based on the NFDA 2023 median of $8,300, adjusted for inflation via BLS CPI. Direct
          cremation, the cheapest common option, runs about {fmt(A.direct_cremation.value)}.
          The headline figure excludes cemetery costs (plot, opening/closing, headstone), which
          are a separate bill and can add several thousand dollars. Every number on this page is
          a modeled estimate — <Link href="/methodology/">see how we built them</Link>.
        </p>
        <p className="updated">National estimates: NFDA 2023 medians adjusted to August 2026 dollars via BLS CPI. {VINTAGE_LABEL} Last updated {LAST_UPDATED}.</p>

        <h2>The 2026 price of every service type</h2>
        <div className="table-scroll">
          <table className="data">
            <caption>Modeled national funeral cost estimates, August 2026 dollars.</caption>
            <thead>
              <tr>
                <th>Service type</th>
                <th>What it is</th>
                <th>National estimate</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.key}>
                  <td>{r.name}</td>
                  <td>{r.blurb}</td>
                  <td><strong>{fmt(A[r.anchor].value)}</strong>{r.assumption ? ' *' : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 13.5, color: 'var(--muted)' }}>
          * Green burial is a stated assumption (60% of the traditional burial anchor), not a surveyed national price. See the FAQ below.
        </p>

        <h2>What those figures include — and what they leave out</h2>
        <p>
          The modeled estimates above reflect the <strong>funeral home&rsquo;s</strong> charges: the
          non-declinable basic services fee (NFDA 2023 median: $2,459, via our model), transfer of
          the body, preparation and embalming where applicable, use of facilities for viewing and
          ceremony, the hearse, and — for burial options — the casket (NFDA 2023 median metal
          casket price: $2,500, via our model; vault: $1,695, via our model).
        </p>
        <p>
          Here is what is <strong>not</strong> included, and this is where families get surprised:
        </p>
        <ul>
          <li><strong>Cemetery plot.</strong> This is a real-estate purchase, separate from the funeral home entirely. Prices run from a few hundred dollars to many thousands depending on the cemetery and metro area.</li>
          <li><strong>Opening and closing of the grave.</strong> The cemetery&rsquo;s labor charge for digging and closing — commonly $1,000&ndash;$3,000 or more (the FCA Maryland/DC chapter&rsquo;s July 2026 survey shows a typical range of $1,500&ndash;$3,000).</li>
          <li><strong>Headstone or marker.</strong> Often $1,000&ndash;$3,000 for a typical marker, again from the cemetery or a third-party monument company (FCA Maryland/DC, July 2026 survey).</li>
          <li><strong>Flowers, obituaries, clergy honoraria.</strong> Paid directly to third parties; newspapers increasingly charge for obituaries.</li>
          <li><strong>Cash advances.</strong> Items the funeral home pays for on your behalf — death certificates ($5&ndash;$35 each depending on the state), permits, certified copies, newspaper notices. They are billed through to you.</li>
        </ul>
        <p>
          A useful mental model: the funeral-home quote is usually the smaller half of the real
          bill. When a survey says &ldquo;average funeral cost,&rdquo; it almost always means the
          funeral home&rsquo;s charges only.
        </p>
        <p>
          One more thing to watch: funeral homes sell many items as packages, but the FTC Funeral
          Rule requires them to price every item individually too. Package deals look tidy, but they
          often bundle things you do not need &mdash; always ask for the itemized statement before
          paying, and compare the package against buying the same items &agrave; la carte.
        </p>

        <h2>Why quotes vary so much</h2>
        <p>
          If you have ever wondered how two funeral homes in the same town can quote prices that
          differ by thousands of dollars for the same service, the short answer is that most of
          the variation is <em>provider</em> variation, not service variation. The basic services
          fee — which every customer must pay — differs wildly from one provider to the next.
          Casket markups are the other big lever: funeral homes commonly mark up caskets several
          times over wholesale, and under the FTC Funeral Rule you are never required to buy your
          casket from them. Bringing in a third-party casket is a legal right, not a favor.
        </p>
        <p>
          Geography compounds it. High-cost metros routinely run 30&ndash;50% above the national
          model, while rural areas and the South come in below. Different surveys also measure
          different things — which is why published &ldquo;average&rdquo; figures seem to disagree.
          We unpack that fully in <Link href="/guides/why-funeral-cost-figures-disagree/">why funeral cost figures disagree</Link>.
          Independent local price surveys — such as the <a href="https://www.fingerlakesfunerals.org/price-survey" rel="noopener noreferrer">Funeral Consumers Alliance Finger Lakes 2025 price survey</a> — are the best reality check for your area.
        </p>
        <p>
          Comparison shopping is your strongest tool, and it is getting easier. The Funeral
          Consumers Alliance&rsquo;s Maryland/DC chapter published a comparative cost survey in
          July 2026 covering Washington-area funeral homes and cemeteries &mdash; independent
          surveys like these are the closest thing to a real price list the industry has. Your own
          three phone quotes, however, are what matter most.
        </p>

        <h2>What moves the total most</h2>
        <ol>
          <li>
            <strong>Service type.</strong> The single biggest decision. Moving from a traditional
            funeral with burial ({fmt(A.traditional_burial.value)}) to direct cremation ({fmt(A.direct_cremation.value)})
            cuts the modeled bill by roughly two-thirds — no viewing, no embalming, no ceremony
            with the body present.
          </li>
          <li>
            <strong>The casket.</strong> With a median price around $2,500 (NFDA 2023, via our model),
            the casket is often the largest single line item after the basic services fee. A simple
            cloth-covered wood casket or a third-party purchase can save thousands, and for cremation
            a simple alternative container is your legal right.
          </li>
          <li>
            <strong>The vault.</strong> Our model adds roughly $1,870 for burial with a vault ({fmt(A.burial_with_vault.value)})
            versus a traditional burial without one. Remember: no state requires a vault — it is a
            cemetery policy, and you can choose a cemetery that does not require one.
          </li>
          <li>
            <strong>Metro versus rural.</strong> The same service can cost half again as much in an
            expensive metro as in a rural county. Always get at least three quotes — the FTC Funeral
            Rule requires providers to give you prices by phone and a written General Price List
            before you discuss options in person.
          </li>
        </ol>

        <h2>What can help pay for it</h2>
        <p>
          Funeral costs hit during the worst possible week, so it helps to know what assistance
          exists. For veterans, VA burial benefits (per VA.gov, current) pay up to $2,000 for
          service-connected deaths, or $1,002 for burial plus $1,002 for a plot or interment for
          non-service-connected deaths, plus a $441 headstone or marker allowance; burial in a VA
          national cemetery — plot, opening and closing, marker — is free. These benefits must be
          claimed; they are not automatic, and amounts reset each October 1.
        </p>
        <p>
          Social Security pays a one-time $255 lump-sum death payment to eligible surviving spouses
          or children. FEMA funeral assistance exists only for federally declared disasters — its
          COVID-19 program has closed. Some localities help with indigent burials: New York City,
          for example, pays up to $1,700 toward qualifying funerals. Crowdfunding, pre-need savings,
          and final-expense insurance round out the picture — but know the limits of each before
          you need them.
        </p>

        <h2>Get your number</h2>
        <p>
          National estimates are a starting point; your bill depends on your choices and your zip
          code. Build a line-item estimate with our <Link href="/calculator/">funeral cost calculator</Link>,
          or drill into the states we cover in depth:
        </p>
        <ul>
          {STATES.map((s) => (
            <li key={s.slug}>
              <Link href={'/funeral-costs/' + s.slug + '/'}>Funeral costs in {s.name}</Link>
            </li>
          ))}
        </ul>

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
          <Link href="/guides/funeral-service-types/">Funeral service types explained →</Link>
          {' · '}
          <Link href="/guides/why-funeral-cost-figures-disagree/">Why cost figures disagree →</Link>
          {' · '}
          <Link href="/guides/funeral-glossary/">Funeral terms glossary →</Link>
        </p>
        <p className="updated">Figures are modeled estimates in August 2026 dollars ({VINTAGE_LABEL}). Last updated {LAST_UPDATED}.</p>
      <RelatedGuides currentSlug="funeral-cost-2026-breakdown" />
      </div>
    </>
  );
}
