import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { PAGE_DATES } from '../../../lib/page-dates';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL, dataset, fmt } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

const A = dataset.anchors;

export const metadata: Metadata = {
  title: 'How Much Does a Funeral Reception Cost? Catering, Venue & Per Guest Prices',
  description:
    'A funeral reception typically costs $300 to $2,000 for a small gathering and $1,250 to $2,500 in food alone for 50 guests at $25 to $50 a head. Catering formats, venue costs, and per-guest math, line by line.',
  alternates: { canonical: SITE_URL + '/guides/funeral-reception-cost/' },
  openGraph: {
    title: 'How Much Does a Funeral Reception Cost? Catering, Venue & Per Guest Prices',
    description:
      'Funeral reception catering by format and per-guest price, venue and rental costs, and how to host one for under $500.',
    url: SITE_URL + '/guides/funeral-reception-cost/',
  },
};

export default function FuneralReceptionCost() {
  const faqs = [
    {
      q: 'How much does a funeral reception cost?',
      a: 'A funeral reception typically costs $300 to $2,000 for a small gathering, according to published funeral cost guides, and more for a large catered lunch. The food is the main variable: at $25 to $50 per guest, food alone for 50 guests runs $1,250 to $2,500, before venue rental, rentals, and staff. A simple coffee and cake gathering at home or at a place of worship can come in under $500.',
    },
    {
      q: 'How much is funeral catering per person?',
      a: 'Published funeral catering prices run roughly $10 to $50 per person depending on format. A deli-style menu from one caterer is listed at $14.50 per person plus beverages at $2 per person; a basic comfort-food buffet in a 2026 city guide runs $25 to $35 per person, an upgraded buffet $35 to $50, and plated service $45 to $60. Drop-off catering, where food arrives and the family serves it, is the cheapest format; full service with staff is the most expensive.',
    },
    {
      q: 'Is a funeral reception included in the funeral package?',
      a: 'Usually not. The funeral home package covers the service, not the gathering afterward, and catering is normally a cash advance item or a separate contract with a caterer or restaurant. Some funeral homes offer their own chapel room for a reception, sometimes with a room fee for meals or for cake and coffee, so ask whether the room, the food, and the staff are three separate charges or one.',
    },
    {
      q: 'Who pays for a funeral reception?',
      a: 'The same person or estate that pays for the funeral usually pays for the reception, and it is not a separate claim on life insurance or benefits. If money is tight, it is the easiest part of the day to scale back: a shorter gathering, simpler food, or a potluck where friends and family bring dishes all cut the cost without changing the service itself. Our guide to paying for a funeral covers the benefits and aid that can help with the overall bill.',
    },
    {
      q: 'Can you hold a funeral reception at home or at church?',
      a: 'Yes, and those are the two cheapest venues. A reception at home costs only the food and any rentals, and many places of worship offer a hall to members for little or nothing. A restaurant private room is the next step up, often with a per-person minimum, while a rented hall adds a room fee plus catering and rentals. Check venue rules early: some halls require an approved caterer and do not allow outside food.',
    },
    {
      q: 'How long should a funeral reception last?',
      a: 'Most funeral receptions last 1 to 2 hours. That window is long enough for guests to eat, share stories, and greet the family, and short enough to keep catering staff time and rental hours in check. A longer reception mainly adds staff hours and, at a rented venue, room time, so if the budget is tight, set a clear end time on the invitation and the venue booking.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'How much does a funeral reception cost?', url: SITE_URL + '/guides/funeral-reception-cost/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › How much does a funeral reception cost?</nav>
      <JsonLd data={articleJsonLd({
        title: 'How Much Does a Funeral Reception Cost? Catering, Venue & Per Guest Prices',
        description: 'A funeral reception typically costs $300 to $2,000 for a small gathering and $1,250 to $2,500 in food alone for 50 guests at $25 to $50 a head. Catering formats, venue costs, and per-guest math, line by line.',
        url: SITE_URL + '/guides/funeral-reception-cost/',
        datePublished: '2026-10-28',
        dateModified: PAGE_DATES['/guides/funeral-reception-cost/']?.updated ?? LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="funeral-reception-cost" imageAlt="How much does a funeral reception cost?"><h1>How much does a funeral reception cost?</h1></GuideHero>
        <Byline published={PAGE_DATES['/guides/funeral-reception-cost/']?.published} updated={PAGE_DATES['/guides/funeral-reception-cost/']?.updated} />

        <p className="answer-first">
          <strong>Quick answer:</strong> a funeral reception typically costs{' '}
          <strong>$300 to $2,000</strong> for a small gathering, according to published funeral
          cost guides, and more for a large catered lunch. The reason the range is so wide is
          guest count: at <strong>$25 to $50 per guest</strong> for catered food, 50 guests
          cost <strong>$1,250 to $2,500</strong> in food alone, before venue rental, table
          rentals, and staff. A coffee and cake gathering at home or at a place of worship can
          come in under <strong>$500</strong>. The reception is separate from the service
          itself: for context, our modeled national estimate for a traditional funeral with
          viewing and burial is <strong>{fmt(A.traditional_burial.value)}</strong>, and that
          figure does not include a reception. All modeled figures are in August 2026 dollars,
          built from NFDA 2023 medians adjusted for inflation, not quotes. For a line-item
          estimate in your state, use our <Link href="/calculator/">cost calculator</Link>.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>What a funeral reception is</h2>
        <p>
          A funeral reception, also called a repast, is the gathering after the service where
          guests eat, talk, and spend time with the family. It is not part of the ceremony,
          and no rule requires one: some families go straight home, some stop for coffee, and
          some host a full lunch. The ceremony itself is priced separately, so if you are
          budgeting the service too, start with our{' '}
          <Link href="/guides/memorial-service-cost/">memorial service cost guide</Link>, which
          covers the ceremony lines, and use this guide for the gathering afterward.
        </p>
        <p>
          The reception has its own budget because it is priced like a small catered event:
          food per guest, a room, tables and chairs if the room does not provide them, and
          staff to serve and clean up. Each of those lines can be cut independently, which is
          why two receptions for the same number of guests can cost very different amounts.
        </p>

        <h2>Catering formats, by price</h2>
        <table>
          <thead>
            <tr><th>Format</th><th>Typical per-person price</th><th>Best for</th></tr>
          </thead>
          <tbody>
            <tr><td>Coffee, cake, and finger food</td><td>$5 to $15</td><td>A short gathering after the service; the under-$500 option for a small group</td></tr>
            <tr><td>Drop-off deli catering</td><td>$14.50 plus $2 for beverages, in one published caterer menu</td><td>Families who serve the food themselves at home, church, or a hall</td></tr>
            <tr><td>Basic buffet (comfort food)</td><td>$25 to $35</td><td>The standard repast: hot dishes, salad, and dessert, served buffet style</td></tr>
            <tr><td>Upgraded buffet (premium proteins)</td><td>$35 to $50</td><td>A larger lunch where the menu is part of the occasion</td></tr>
            <tr><td>Plated lunch or dinner</td><td>$45 to $60</td><td>A restaurant private room or a formal seated lunch</td></tr>
            <tr><td>Potluck or family-prepared food</td><td>Groceries only</td><td>The lowest-cost option; guests bring dishes, and the family provides drinks and paper goods</td></tr>
          </tbody>
        </table>
        <p>
          Service style moves the price as much as the menu. Drop-off catering is cheapest
          because the family handles setup and serving. A buffet with staff sits in the
          middle. Full service with passed food, plated courses, and dedicated servers is the
          premium tier, and the staff hours are billed on top of the food.
        </p>

        <h2>Per-guest math: what the total looks like</h2>
        <p>
          Multiply the per-person price by a realistic guest count, not the invitation list:
          typically about two thirds of invited guests attend a reception, and the count that
          matters is the guaranteed number you give the caterer. At a mid-range $30 per guest
          for food, the food bill alone is:
        </p>
        <table>
          <thead>
            <tr><th>Guests</th><th>At $15 per guest</th><th>At $30 per guest</th><th>At $50 per guest</th></tr>
          </thead>
          <tbody>
            <tr><td>25</td><td>$375</td><td>$750</td><td>$1,250</td></tr>
            <tr><td>50</td><td>$750</td><td>$1,500</td><td>$2,500</td></tr>
            <tr><td>100</td><td>$1,500</td><td>$3,000</td><td>$5,000</td></tr>
          </tbody>
        </table>
        <p>
          Then add the non-food lines: a rented hall or restaurant room fee, table and chair
          rentals if the venue does not provide them, beverages beyond what the menu
          includes, and any staff or cleanup charge. Alcohol is the line that most often
          surprises families: a cash bar costs the family nothing, while an open bar is
          billed per guest or per drink and can rival the food bill.
        </p>

        <h2>Venue options, cheapest first</h2>
        <ul>
          <li><strong>At home.</strong> No room fee; the cost is food, drinks, and any rentals. Best for smaller groups, and the family controls the timing.</li>
          <li><strong>Place of worship hall.</strong> Often little or no charge for members, and many churches have a kitchen and a volunteer team used to hosting repasts.</li>
          <li><strong>Funeral home room.</strong> Convenient because guests are already there, but ask about the room fee: one published funeral home price sheet lists a chapel fee for meals and a separate fee for cake and coffee, with paper goods for up to 80 guests included.</li>
          <li><strong>Restaurant private room.</strong> A per-person minimum usually applies, often in the $27 to $28 range for a lunch package in published menus, with the room itself included. Confirm the minimum guest count and whether the price includes tax and gratuity.</li>
          <li><strong>Rented hall.</strong> The most flexible and the most expensive: a room fee plus catering plus rentals, and sometimes a requirement to use an approved caterer.</li>
        </ul>

        <h2>How to host a reception for under $500</h2>
        <ul>
          <li><strong>Keep it short and simple.</strong> Coffee, cake, and finger food for 30 guests is often under $300 in groceries or drop-off catering.</li>
          <li><strong>Use a free room.</strong> Home, a place of worship hall, or a community room removes the largest fixed cost.</li>
          <li><strong>Ask friends and family to bring food.</strong> A potluck is a normal, welcome tradition after a funeral, not a shortcut: guests often want a concrete way to help.</li>
          <li><strong>Skip alcohol or offer a cash bar.</strong> This single choice can save more than the entire food budget.</li>
          <li><strong>Confirm the guaranteed count late.</strong> Give the caterer the final number as late as the contract allows, so you do not pay for guests who will not attend.</li>
        </ul>
        <p>
          If the overall funeral bill is the worry, not just the reception, our{' '}
          <Link href="/guides/paying-for-a-funeral/">guide to paying for a funeral</Link>{' '}
          covers benefits and aid, and our{' '}
          <Link href="/guides/how-to-plan-a-funeral/">step-by-step planning guide</Link> puts
          the reception in order with every other decision.
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
          <Link href="/guides/memorial-service-cost/">Memorial service costs →</Link>
          {' · '}
          <Link href="/guides/paying-for-a-funeral/">How to pay for a funeral →</Link>
          {' · '}
          <Link href="/guides/how-to-plan-a-funeral/">How to plan a funeral →</Link>
        </p>
      <RelatedGuides currentSlug="funeral-reception-cost" />
      </div>
    </>
  );
}
