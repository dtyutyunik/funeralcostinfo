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
  title: 'How Much Do Funeral Flowers Cost? Arrangement Prices & What to Send',
  description:
    'Most people spend $75 to $150 on funeral flowers. A simple basket starts around $60 to $85, a standing spray runs about $135 to $350, and a casket spray usually costs $250 to $700 or more, by arrangement type and relationship.',
  alternates: { canonical: SITE_URL + '/guides/funeral-flowers-cost/' },
  openGraph: {
    title: 'How Much Do Funeral Flowers Cost? Arrangement Prices & What to Send',
    description:
      'Funeral flower prices by arrangement type, what to send by relationship, what moves the price, and how to order without overspending.',
    url: SITE_URL + '/guides/funeral-flowers-cost/',
  },
};

export default function FuneralFlowersCost() {
  const faqs = [
    {
      q: 'How much do funeral flowers cost?',
      a: 'Most people spend $75 to $150 on funeral flowers, according to published 2026 funeral flower guides. A simple vase arrangement or sympathy basket starts around $60 to $85 with delivery, a standing spray runs about $135 to $350, and a casket spray usually costs $250 to $700 or more depending on size and flowers. Families buying a full set of service flowers typically spend $500 to $700 in total across all the pieces.',
    },
    {
      q: 'How much should I spend on funeral flowers?',
      a: 'Spend what fits your relationship and your budget, not a set amount. A coworker, neighbor, or acquaintance typically spends $50 to $100, a friend $75 to $150, a group or office collection $100 to $250, and immediate family $250 to $700 or more for a casket spray or large standing piece. A well chosen $75 basket carries just as much meaning as a $300 spray.',
    },
    {
      q: 'What is the difference between funeral flowers and sympathy flowers?',
      a: 'Funeral flowers go to the funeral home, church, or service venue and are displayed at the service: standing sprays, wreaths, and casket sprays. Sympathy flowers go to the family home and are smaller and personal: a vase arrangement, a basket, or a living plant. Send funeral flowers for the service and sympathy flowers to the home in the days and weeks after, when visits and calls slow down.',
    },
    {
      q: 'Who sends the casket spray?',
      a: 'The casket spray is usually sent by immediate family, and it is the one piece the family normally chooses itself. Friends, coworkers, and extended family usually send standing sprays, wreaths, baskets, vase arrangements, or plants instead. If you are not immediate family, check with the funeral home or the family before ordering a casket piece, so you do not duplicate the main spray.',
    },
    {
      q: 'Are funeral flowers included in the funeral package?',
      a: 'Usually not. Flowers are normally a separate purchase from a florist, or a cash advance item the funeral home orders on your behalf and bills through. Check the quote line by line: for context, our modeled national estimate for a traditional funeral with viewing and burial is $9,140, and that figure is for the funeral home services, not for flowers, a reception, or a burial plot. Use our cost calculator to build your own line item estimate.',
    },
    {
      q: 'What does in lieu of flowers mean?',
      a: 'It means the family prefers a donation to a named charity or cause instead of flowers. Always check the obituary for those words before ordering. If the notice says in lieu of flowers, send the donation and, if you wish, a simple card or a small home arrangement later. Our obituary costs guide explains how those notices are worded and what they usually cost to place.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'How much do funeral flowers cost?', url: SITE_URL + '/guides/funeral-flowers-cost/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › How much do funeral flowers cost?</nav>
      <JsonLd data={articleJsonLd({
        title: 'How Much Do Funeral Flowers Cost? Arrangement Prices & What to Send',
        description: 'Most people spend $75 to $150 on funeral flowers. A simple basket starts around $60 to $85, a standing spray runs about $135 to $350, and a casket spray usually costs $250 to $700 or more, by arrangement type and relationship.',
        url: SITE_URL + '/guides/funeral-flowers-cost/',
        datePublished: '2026-10-30',
        dateModified: PAGE_DATES['/guides/funeral-flowers-cost/']?.updated ?? LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="funeral-flowers-cost" imageAlt="How much do funeral flowers cost?"><h1>How much do funeral flowers cost?</h1></GuideHero>
        <Byline published={PAGE_DATES['/guides/funeral-flowers-cost/']?.published} updated={PAGE_DATES['/guides/funeral-flowers-cost/']?.updated} />

        <p className="answer-first">
          <strong>Quick answer:</strong> most people spend{' '}
          <strong>$75 to $150</strong> on funeral flowers, according to published 2026 funeral
          flower guides. A simple vase arrangement or sympathy basket starts around{' '}
          <strong>$60 to $85</strong> with delivery, a standing spray runs about{' '}
          <strong>$135 to $350</strong>, and a casket spray usually costs{' '}
          <strong>$250 to $700 or more</strong>, depending on size and flowers. Families buying
          a full set of service flowers typically spend <strong>$500 to $700</strong> in total
          across all the pieces. Flowers are normally separate from the service itself: our
          modeled national estimate for a traditional funeral with viewing and burial is{' '}
          <strong>{fmt(A.traditional_burial.value)}</strong>, and that figure does not include
          flowers. All modeled figures are in August 2026 dollars, built from NFDA 2023 medians
          adjusted for inflation, not quotes. For a line item estimate in your state, use our{' '}
          <Link href="/calculator/">cost calculator</Link>.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>Funeral flower prices by arrangement type</h2>
        <p>
          Price follows size and stem count. A basket uses a handful of stems and no easel. A
          standing spray uses many more stems, a frame, and an easel, and a casket spray must
          cover a large surface. Published 2026 guides agree on these bands, even where the
          exact top end differs by florist and flower choice:
        </p>
        <table>
          <thead>
            <tr><th>Arrangement</th><th>Typical price</th><th>Best for</th></tr>
          </thead>
          <tbody>
            <tr><td>Sympathy basket or vase arrangement</td><td>$60 to $175</td><td>Home delivery, or a table near the guest book</td></tr>
            <tr><td>Potted plant</td><td>$30 to $90 or more</td><td>A lasting gift the family can keep at home</td></tr>
            <tr><td>Wreath</td><td>$100 to $350</td><td>Traditional sympathy display at the service</td></tr>
            <tr><td>Standing spray</td><td>$135 to $350 or more</td><td>The visible service tribute, displayed on an easel</td></tr>
            <tr><td>Heart or cross tribute</td><td>$175 to $400</td><td>Close family or a group tribute in a set shape</td></tr>
            <tr><td>Casket spray, half couch</td><td>$200 to $500</td><td>Immediate family, covering half the casket lid</td></tr>
            <tr><td>Casket spray, full couch</td><td>$250 to $700 or more</td><td>Immediate family, covering the full casket lid</td></tr>
            <tr><td>Casket corner pieces</td><td>$50 to $150 each</td><td>Accent pieces at the corners of the casket</td></tr>
          </tbody>
        </table>
        <p>
          Premium versions with roses or orchids can pass $400 for a standing spray and $800
          for a large casket spray. Delivery is not always included in the quoted price, so ask
          whether the figure covers delivery, tax, and any ribbon message before you compare
          two florists.
        </p>

        <h2>What to send, by relationship</h2>
        <p>
          The safest rule is to match the size of the piece to how close you were, and to send
          it to the right place. Funeral flowers go to the service. Sympathy flowers go to the
          home. Sending a large standing spray to a home, or a small basket to a funeral home
          chapel, both miss the mark:
        </p>
        <table>
          <thead>
            <tr><th>Your relationship</th><th>Typical spend</th><th>Common choices</th></tr>
          </thead>
          <tbody>
            <tr><td>Coworker, neighbor, or acquaintance</td><td>$50 to $100</td><td>Vase arrangement, basket, or plant to the home</td></tr>
            <tr><td>Friend</td><td>$75 to $150</td><td>Basket, vase arrangement, or small standing spray</td></tr>
            <tr><td>Group or office collection</td><td>$100 to $250</td><td>One shared standing spray, wreath, or floor basket</td></tr>
            <tr><td>Close friend or extended family</td><td>$100 to $250</td><td>Standing spray, wreath, or cross</td></tr>
            <tr><td>Immediate family</td><td>$250 to $700 or more</td><td>Casket spray, name tribute, or large standing piece</td></tr>
          </tbody>
        </table>
        <p>
          A group order is the best value in this table: one $200 standing spray from an office
          looks and reads better than ten small baskets, and it costs each contributor far
          less. If you are pooling money, put one name on the card, such as the team or the
          department, and let the organizer keep a list of contributors for the thank you notes.
        </p>

        <h2>What moves the price</h2>
        <ul>
          <li><strong>Flower type.</strong> Carnations and chrysanthemums are the workhorses of funeral work: long lasting and affordable. Roses, lilies, and orchids cost more per stem and push a piece into the premium band.</li>
          <li><strong>Size and shape.</strong> A full couch casket spray needs far more stems than a half couch spray, and a shaped tribute such as a heart or cross needs more labor than a loose spray.</li>
          <li><strong>Season.</strong> In season, local flowers cost less and last longer. Out of season or imported flowers add cost and sometimes a shorter vase life.</li>
          <li><strong>Delivery and timing.</strong> Same day delivery, delivery to a rural cemetery, and delivery outside business hours can each add a fee. Order at least 24 hours ahead, and 48 hours ahead for a casket spray or a custom piece, and ask for delivery two or more hours before the service begins.</li>
          <li><strong>Where you buy.</strong> A local florist who delivers to that funeral home regularly usually knows the chapel layout and the delivery entrance. A national online florist routes the order to a local florist in any case, so compare the delivered total, not just the headline price.</li>
        </ul>

        <h2>Ordering checklist</h2>
        <ul>
          <li><strong>Check the obituary first.</strong> Look for in lieu of flowers, and for any named charity, before you order anything.</li>
          <li><strong>Confirm the venue and time.</strong> Give the florist the funeral home name and address, the service date and time, and the name of the deceased exactly as it appears in the notice.</li>
          <li><strong>Write the card message carefully.</strong> Keep it short: a name, a relationship, and one line of condolence. The florist can add a ribbon message for a small extra charge, often around $10.</li>
          <li><strong>Ask what happens after the service.</strong> Families usually take the flowers home, pass them to a place of worship, or leave them at the gravesite. If the family cannot take a large piece, a basket or plant is easier to carry home than a standing spray.</li>
          <li><strong>Do not send flowers to a cremation service by default.</strong> For a memorial service after cremation, flowers still work, but check whether the family has already chosen a display, and see our{' '}
          <Link href="/guides/memorial-service-cost/">memorial service cost guide</Link> for how the ceremony itself is priced.</li>
        </ul>
        <p>
          If the overall bill is the worry, flowers are one of the easiest lines to scale back
          without changing the service: a simpler spray, in season flowers, and one shared
          group piece instead of several small ones. The gathering after the service has its
          own budget too, covered in our{' '}
          <Link href="/guides/funeral-reception-cost/">funeral reception cost guide</Link>, and
          our <Link href="/guides/how-to-plan-a-funeral/">step by step planning guide</Link>{' '}
          puts flowers in order with every other decision. For state level service costs, start
          with our <Link href="/guides/funeral-costs-by-state-2026/">funeral costs by state guide</Link>.
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
          <Link href="/calculator/">Build your line item estimate →</Link>
          {' · '}
          <Link href="/guides/memorial-service-cost/">Memorial service costs →</Link>
          {' · '}
          <Link href="/guides/funeral-reception-cost/">Funeral reception costs →</Link>
          {' · '}
          <Link href="/guides/how-to-plan-a-funeral/">How to plan a funeral →</Link>
        </p>
      <RelatedGuides currentSlug="funeral-flowers-cost" />
      </div>
    </>
  );
}
