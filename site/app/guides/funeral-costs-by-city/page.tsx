import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL, dataset, fmt } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

const A = dataset.anchors;

export const metadata: Metadata = {
  title: 'Funeral Costs by City: Average Prices in the 25 Largest US Metros (2026)',
  description:
    'Funeral costs by city: published direct-cremation prices in the 25 largest US metros (2026), why metro prices differ, and where to find real local figures.',
  alternates: { canonical: SITE_URL + '/guides/funeral-costs-by-city/' },
  openGraph: {
    title: 'Funeral Costs by City: Average Prices in the 25 Largest US Metros (2026)',
    description:
      'What funerals actually cost by city: 2026 published price data for the 25 largest US metros, why prices vary, and how to shop locally.',
    url: SITE_URL + '/guides/funeral-costs-by-city/',
  },
};

type MetroRow = {
  rank: number;
  metro: string;
  states: string;
  best: string;
  highest: string;
  source: string;
  stateLink?: string;
};

const METROS: MetroRow[] = [
  { rank: 1, metro: 'New York–Newark–Jersey City', states: 'NY · NJ', best: '$495', highest: '$6,750', source: 'DFS Memorials 2026' },
  { rank: 2, metro: 'Los Angeles–Long Beach–Anaheim', states: 'CA', best: '$1,045', highest: '$2,900', source: 'DFS Memorials 2026' },
  { rank: 3, metro: 'Chicago–Naperville–Elgin', states: 'IL · IN', best: '$1,295', highest: '$4,600', source: 'DFS Memorials 2026' },
  { rank: 4, metro: 'Dallas–Fort Worth–Arlington', states: 'TX', best: '$845', highest: '$6,300', source: 'DFS Memorials 2026' },
  { rank: 5, metro: 'Houston–The Woodlands–Sugar Land', states: 'TX', best: '$895', highest: '$6,800', source: 'DFS Memorials 2026' },
  { rank: 6, metro: 'Atlanta–Sandy Springs–Roswell', states: 'GA', best: '$795', highest: '$3,740', source: 'DFS Memorials 2026' },
  { rank: 7, metro: 'Washington–Arlington–Alexandria', states: 'DC · VA · MD', best: '$1,395', highest: '$6,455', source: 'DFS Memorials 2026' },
  { rank: 8, metro: 'Miami–Fort Lauderdale–West Palm Beach', states: 'FL', best: '$765', highest: '$4,311', source: 'DFS Memorials 2026' },
  { rank: 9, metro: 'Philadelphia–Camden–Wilmington', states: 'PA · NJ · DE', best: '—', highest: '—', source: 'No published metro figure', stateLink: '/funeral-costs/pennsylvania/' },
  { rank: 10, metro: 'Phoenix–Mesa–Chandler', states: 'AZ', best: '$950', highest: '$2,370', source: 'DFS Memorials 2026' },
  { rank: 11, metro: 'Boston–Cambridge–Newton', states: 'MA · NH', best: '$1,195', highest: '$3,200', source: 'DFS Memorials 2026' },
  { rank: 12, metro: 'Riverside–San Bernardino–Ontario', states: 'CA', best: '$1,415', highest: '—', source: 'After.com / Funeralocity 2026' },
  { rank: 13, metro: 'San Francisco–Oakland–Berkeley', states: 'CA', best: '$1,985', highest: '—', source: 'After.com / Funeralocity 2026' },
  { rank: 14, metro: 'Detroit–Warren–Dearborn', states: 'MI', best: '—', highest: '—', source: 'No published metro figure', stateLink: '/funeral-costs/michigan/' },
  { rank: 15, metro: 'Seattle–Tacoma–Bellevue', states: 'WA', best: '$995', highest: '$3,225', source: 'DFS Memorials 2026' },
  { rank: 16, metro: 'Minneapolis–Saint Paul', states: 'MN', best: '—', highest: '—', source: 'No published metro figure', stateLink: '/funeral-costs/minnesota/' },
  { rank: 17, metro: 'Tampa–St. Petersburg', states: 'FL', best: '—', highest: '—', source: 'No published metro figure', stateLink: '/funeral-costs/florida/' },
  { rank: 18, metro: 'San Diego', states: 'CA', best: '$1,526', highest: '—', source: 'After.com / Funeralocity 2026' },
  { rank: 19, metro: 'Denver–Aurora', states: 'CO', best: '$995', highest: '$3,125', source: 'DFS Memorials 2026' },
  { rank: 20, metro: 'Orlando–Kissimmee–Sanford', states: 'FL', best: '—', highest: '—', source: 'No published metro figure', stateLink: '/funeral-costs/florida/' },
  { rank: 21, metro: 'Baltimore–Columbia–Towson', states: 'MD', best: '$1,395', highest: '$5,978', source: 'DFS Memorials 2026' },
  { rank: 22, metro: 'Charlotte–Concord–Gastonia', states: 'NC · SC', best: '$995', highest: '$4,235', source: 'DFS Memorials 2026' },
  { rank: 23, metro: 'San Antonio–New Braunfels', states: 'TX', best: '$995', highest: '$2,476', source: 'DFS Memorials 2026' },
  { rank: 24, metro: 'Portland–Vancouver–Hillsboro', states: 'OR · WA', best: '—', highest: '—', source: 'No published metro figure', stateLink: '/funeral-costs/oregon/' },
  { rank: 25, metro: 'Sacramento–Roseville–Folsom', states: 'CA', best: '$1,875', highest: '—', source: 'After.com / Funeralocity 2026' },
];

export default function FuneralCostsByCity() {
  const faqs = [
    {
      q: 'Why do funeral costs vary so much by city?',
      a: 'Three drivers: the cost of doing business (real estate, labor, and insurance are far higher in coastal metros), competition (cities with many cremation providers see sharper prices than one-provider towns), and cemetery land scarcity — urban cemetery space can cost multiples of rural land. Provider type matters more than city, though: in the same metro, a full-service funeral home can charge 3–5x what a cremation specialist charges for the same basic service.',
    },
    {
      q: 'Which US city has the cheapest funerals?',
      a: 'There is no single "cheapest city" — it depends on the service and provider. For direct cremation, New York City shows both the lowest best price in the country ($495) and one of the highest top-end prices ($6,750), per DFS Memorials’ 2026 metro table. The lesson: shop providers, not cities.',
    },
    {
      q: 'Do funeral homes have to give prices over the phone?',
      a: 'Yes. Under the FTC Funeral Rule, funeral homes must give accurate price information by phone to anyone who asks, and must hand you a written General Price List in person before any discussion of arrangements. You can comparison-shop from home — no visit required.',
    },
    {
      q: 'Is there an official government table of funeral costs by city?',
      a: 'No. No federal agency publishes funeral prices by city. The FTC requires each funeral home to disclose its own prices (General Price List, Casket Price List), but there is no public registry. The metro figures on this page come from published 2026 provider surveys — the best public data available.',
    },
    {
      q: 'How much does a funeral cost in New York City?',
      a: 'Published direct-cremation prices in NYC run from $495 to $6,750 (DFS Memorials, 2026) — the widest spread of any metro, reflecting extreme provider competition alongside extreme overhead. Traditional funerals with burial vary even more; our New York state page has the modeled estimate, and the FCA of the Finger Lakes publishes an independent 2025 funeral-home price survey.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Funeral costs by city', url: SITE_URL + '/guides/funeral-costs-by-city/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Funeral costs by city</nav>
        <JsonLd data={articleJsonLd({
          title: 'Funeral Costs by City: Average Prices in the 25 Largest US Metros (2026)',
          description: 'Funeral costs by city: published direct-cremation prices in the 25 largest US metros (2026), why metro prices differ, and where to find real local figures.',
          url: SITE_URL + '/guides/funeral-costs-by-city/',
          datePublished: '2026-09-29',
          dateModified: LAST_UPDATED,
          siteUrl: SITE_URL,
        })} />
        <GuideHero slug="funeral-costs-by-city" imageAlt="Funeral costs by city: average prices in the 25 largest US metros"><h1>Funeral costs by city: average prices in the 25 largest US metros (2026)</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> no government agency publishes funeral prices by city, so there is no
          single official "funeral costs by city" table. The best published metro-level data is for direct
          cremation: in the 25 largest US metros it runs from about <strong>$495 in New York City</strong> to
          under <strong>$7,000 at the top end</strong> of the most expensive markets (DFS Memorials 2026
          network survey). For traditional funerals with burial, our national modeled estimate is{' '}
          <strong>{fmt(A.traditional_burial.value)}</strong> in August 2026 dollars — but the city spread is
          what this guide is about: provider type matters more than ZIP code, and within one metro the same
          service can cost five times more at one provider than another.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>Why a city table looks like this</h2>
        <p>
          Here is the honest framing first, because most "average funeral cost by city" pages on the internet
          are guessing. The National Funeral Directors Association publishes national and regional medians —
          its 2023 General Price List study put the median funeral with viewing and burial at <strong>$8,300</strong>{' '}
          ($9,995 with a vault) and with viewing and cremation at <strong>$6,280</strong>, funeral-home charges
          only — but it does <em>not</em> publish metro-level figures. No NFDA table tells you what a funeral
          costs in Dallas vs. Denver.
        </p>
        <p>
          What <em>does</em> exist at the metro level is published price data for direct cremation, the most
          standardized service: DFS Memorials published a 22-city 2026 table (verified August 2026, drawn from
          its network of licensed providers and publicly filed General Price Lists), and us-funerals.com and
          After.com publish city-level cremation figures. The table below uses those sources and names them —
          "best" is the lowest published direct-cremation price in the metro, "highest" is the top end, and
          where no metro-level figure is published we say so and link our state modeled estimate instead.
        </p>

        <h2>Direct cremation prices in the 25 largest metros</h2>
        <p>
          Metro areas below follow the U.S. Census Bureau's July 1, 2025 population estimates. Prices are
          direct cremation — transport, paperwork, cremation, and a basic container — not traditional funerals,
          which cost substantially more everywhere.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Metro area</th>
                <th>Best price</th>
                <th>Highest published</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              {METROS.map((m) => (
                <tr key={m.rank}>
                  <td>{m.rank}</td>
                  <td>
                    {m.metro} <span className="muted">({m.states})</span>
                  </td>
                  <td>{m.best}</td>
                  <td>{m.highest}</td>
                  <td>
                    {m.stateLink ? (
                      <>
                        {m.source} — see our <Link href={m.stateLink}>state estimate</Link>
                      </>
                    ) : (
                      m.source
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="muted">
          Sources: DFS Memorials, "Cremation Costs in 2026: Average Prices by State & City" (22-city table,
          verified August 2026); After.com Los Angeles cremation guide with California city averages (Funeralocity
          2026 data). Texas figures cross-checked against us-funerals.com "Cremation Costs in Texas: 2026 Prices
          by City" (Austin $1,839 avg / $995 best; Dallas $1,994 / $845; Houston $2,094 / $895; Fort Worth
          $1,632 / $845; San Antonio $1,883 / $995). All are provider-published figures, not government data —
          attribute accordingly.
        </p>

        <h2>Why city prices differ so much</h2>
        <ol>
          <li>
            <strong>Cost of doing business.</strong> Commercial rent, wages, and insurance in coastal metros
            run far above the Midwest or South — and those overheads sit inside every price line on the GPL.
          </li>
          <li>
            <strong>Competition.</strong> Markets with many cremation providers (Texas metros, Florida) see
            best prices under $1,000; markets dominated by a few full-service homes skew higher. New York City's
            $495-to-$6,750 spread is competition and overhead colliding.
          </li>
          <li>
            <strong>Cemetery land scarcity.</strong> The cemetery bill is separate from the funeral-home bill,
            and urban burial space is genuinely scarce: an in-city plot can cost many times a rural one.
            See our <Link href="/guides/burial-plot-costs/">burial plot cost guide</Link>.
          </li>
          <li>
            <strong>Provider type, everywhere.</strong> DFS Memorials' 2026 data puts national funeral-brand
            direct cremation at $2,000–$4,600+, local full-service homes at $1,500–$3,500, and affordable
            cremation specialists at $700–$1,800. In <em>any</em> city, the provider you pick moves the price
            more than the city itself.
          </li>
        </ol>
        <p>
          Ownership matters too: corporate-owned homes typically charge more than independents for the same
          service. See our comparison of <Link href="/guides/corporate-vs-independent-funeral-homes/">corporate
          vs. independent funeral home prices</Link>.
        </p>

        <h2>What about traditional funerals by city?</h2>
        <p>
          No one publishes a 25-metro traditional-funeral table with independent survey data — the service is
          too customized for that. What exists: provider-directory listings (Parting.com's Dallas page, for
          example, lists a traditional-funeral average of $7,272 and a lowest of $5,175 — directory listings,
          not a statistical survey) and nonprofit Funeral Consumers Alliance chapter surveys that compare
          GPL prices funeral home by funeral home in their regions. The FCA of Greater Kansas City's 2025
          metro survey of roughly 95 providers, for instance, shows standard funerals from $4,670 to $10,735
          across the metro — nearly a 2.3x spread inside one city. (We link FCA chapter surveys as plain
          resources; they are independent of us.)
        </p>
        <p>
          For a ballpark by state, use our <Link href="/guides/funeral-costs-by-state-2026/">funeral costs by
          state</Link> guide or any of our <Link href="/funeral-costs/new-york/">51 state pages</Link>: the
          modeled traditional-burial estimate is <strong>{fmt(A.traditional_burial.value)}</strong> nationally,
          with burial+vault at <strong>{fmt(A.burial_with_vault.value)}</strong> and cremation with a service
          at <strong>{fmt(A.cremation_with_service.value)}</strong>. Then call three local homes and ask for
          their General Price Lists.
        </p>

        <h2>How to get real prices for your city in 20 minutes</h2>
        <ol>
          <li>
            <strong>Call, don't visit.</strong> The FTC Funeral Rule requires funeral homes to give accurate
            price information by phone to anyone who asks. Ask for three numbers: direct cremation, immediate
            burial, and the "standard funeral" (viewing + service + burial). Full rights in our{' '}
            <Link href="/guides/funeral-rule-rights/">Funeral Rule guide</Link>.
          </li>
          <li>
            <strong>Check your FCA chapter's survey.</strong> Local Funeral Consumers Alliance chapters publish
            GPL-based price comparisons for their regions — the Kansas City 2025 survey, the Austin-area 2024
            survey, and the Finger Lakes 2025 survey are real, independent data. If your metro has one, it is
            the best free comparison tool available.
          </li>
          <li>
            <strong>Compare the same package.</strong> A "standard funeral" excludes casket and cemetery costs,
            which are priced separately — that is where the bill doubles. Always ask what is excluded.
          </li>
          <li>
            <strong>Watch for the cheapest and priciest outliers.</strong> Prices cluster; the bottom of the
            market is usually a cremation specialist and the top a national-brand full-service home. The middle
            is where most independents compete.
          </li>
        </ol>

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
          <Link href="/guides/funeral-cost-2026-breakdown/">2026 funeral cost breakdown →</Link>
          {' · '}
          <Link href="/guides/funeral-costs-by-state-2026/">Funeral costs by state →</Link>
          {' · '}
          <Link href="/guides/cremation-cost-2026/">How much does cremation cost? →</Link>
          {' · '}
          <Link href="/guides/compare-funeral-homes/">How to compare funeral homes →</Link>
        </p>
      <RelatedGuides currentSlug="funeral-costs-by-city" />
      </div>
    </>
  );
}
