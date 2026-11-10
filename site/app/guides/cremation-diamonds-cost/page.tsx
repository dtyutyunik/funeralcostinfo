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
  title: 'How Much Does a Cremation Diamond Cost? Prices, Process & Timeline',
  description:
    'Turning ashes into a diamond costs from about $995 for a small stone to $25,000 or more for a large one. How the lab process works, how long it takes, how much ash you need, and what to check before you order.',
  alternates: { canonical: SITE_URL + '/guides/cremation-diamonds-cost/' },
  openGraph: {
    title: 'How Much Does a Cremation Diamond Cost? Prices, Process & Timeline',
    description:
      'Cremation diamond prices by size and color, the HPHT lab process, timelines, and the questions to ask before ordering.',
    url: SITE_URL + '/guides/cremation-diamonds-cost/',
  },
};

export default function CremationDiamondsCost() {
  const faqs = [
    {
      q: 'How much does it cost to turn ashes into a diamond?',
      a: 'Published provider prices start at about $995 to $999 for a small stone of roughly 0.10 to 0.19 carats. Most families choose a stone under 0.5 carats, which typically runs $995 to $3,600 before any setting. A stone of 0.25 to 0.5 carats commonly costs $2,000 to $6,000, and stones over one carat range from about $6,000 to $25,000 or more, with some providers pricing their largest stones up to $75,000. Size and color drive almost all of the price difference.',
    },
    {
      q: 'Are cremation diamonds real diamonds?',
      a: 'Yes. A cremation diamond is a real, lab-grown diamond, chemically and physically identical to a mined diamond. The only difference is the source of the carbon: ashes or hair from your loved one instead of carbon mined from the earth. It is not cubic zirconia, moissanite, or any other simulant. Larger stones are usually graded by an independent lab such as IGI or GIA; smaller stones typically ship with the provider certificate only, so ask what certification is included at your size.',
    },
    {
      q: 'How long does it take to turn ashes into a diamond?',
      a: 'It depends on the provider and the size, and published timelines range from about two months to about a year. Some providers quote four to six months for a typical order, others seven to twelve months, with larger and colorless stones taking longest because growth is the slowest stage. If you need the stone by a specific date, such as an anniversary, confirm the timeline in writing before you send the ashes.',
    },
    {
      q: 'How much ash do you need to make a cremation diamond?',
      a: 'Most providers ask for about half a cup of ashes, roughly 100 to 200 grams, though some need only about 50 grams (around two tablespoons) for a small stone. A typical cremation produces far more ashes than that, so most of the ashes remain for an urn, a niche, or scattering. Hair can also work: providers generally ask for about a cup of loosely packed hair, and some will combine a small amount of hair with ashes if you are short on either.',
    },
    {
      q: 'Can you make a cremation diamond from hair instead of ashes?',
      a: 'Yes. Labs extract carbon from hair the same way they do from ashes, and providers generally charge the same price for a hair diamond as for an ash diamond. This matters when ashes were already scattered or buried, or when a family member wants a diamond made while the person is still living, from a lock of hair kept for that purpose.',
    },
    {
      q: 'Is a cremation diamond worth the cost?',
      a: 'That depends on what you are buying it for. As a keepsake, a diamond is permanent, wearable, and passable to the next generation, which is the point for most buyers. As an investment, it is not: memorial diamonds are custom-grown from a specific person carbon source, and resale value is far below the purchase price. If the budget is tight, a simple keepsake that holds a small amount of ashes costs far less and serves the same emotional purpose for many families.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'How much does a cremation diamond cost?', url: SITE_URL + '/guides/cremation-diamonds-cost/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › How much does a cremation diamond cost?</nav>
      <JsonLd data={articleJsonLd({
        title: 'How Much Does a Cremation Diamond Cost? Prices, Process & Timeline',
        description: 'Turning ashes into a diamond costs from about $995 for a small stone to $25,000 or more for a large one. How the lab process works, how long it takes, how much ash you need, and what to check before you order.',
        url: SITE_URL + '/guides/cremation-diamonds-cost/',
        datePublished: '2026-10-24',
        dateModified: PAGE_DATES['/guides/cremation-diamonds-cost/']?.updated ?? LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="cremation-diamonds-cost" imageAlt="How Much Does a Cremation Diamond Cost? Prices, Process & Timeline"><h1>How much does a cremation diamond cost?</h1></GuideHero>
        <Byline published={PAGE_DATES['/guides/cremation-diamonds-cost/']?.published} updated={PAGE_DATES['/guides/cremation-diamonds-cost/']?.updated} />

        <p className="answer-first">
          <strong>Quick answer:</strong> turning ashes into a diamond costs from about{' '}
          <strong>$995 to $999</strong> for a small stone of roughly 0.10 to 0.19 carats, and most
          families choosing a stone under 0.5 carats pay{' '}
          <strong>$995 to $3,600</strong> before any jewelry setting. Stones over one carat
          run about $6,000 to $25,000 or more, with some providers pricing their largest
          stones up to $75,000. The diamond itself is an addition to, not a replacement for,
          the cremation: our modeled national estimate for direct cremation is{' '}
          <strong>{fmt(A.direct_cremation.value)}</strong>, and for cremation with a service
          it is <strong>{fmt(A.cremation_with_service.value)}</strong>, both modeled estimates
          in August 2026 dollars from NFDA 2023 medians adjusted for inflation, not quotes. For
          a line-item estimate in your state, use our{' '}
          <Link href="/calculator/">cost calculator</Link>.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>What a cremation diamond actually is</h2>
        <p>
          A cremation diamond, sometimes called a memorial diamond or an ashes-to-diamond, is a
          real lab-grown diamond made from carbon extracted from a loved one&apos;s cremated remains
          or hair. It is chemically and physically identical to a mined diamond. The difference
          is only where the carbon comes from. It is not a simulant, and it is not a stone with
          ashes mixed into it: the carbon itself is crystallized into diamond.
        </p>
        <p>
          That distinction matters because cremation keepsakes come in two very different
          kinds. One kind <em>holds</em> ashes: lockets, pendants, and glass pieces that contain
          a small amount of remains. A cremation diamond <em>is made from</em> the remains, by
          converting their carbon. This guide covers diamonds only; the holding kind of
          keepsake is a different purchase, covered in our{' '}
          <Link href="/guides/urn-costs-guide/">guide to urns and keepsakes</Link>.
        </p>

        <h2>What it costs, by size</h2>
        <p>
          Published prices from the main providers line up closely at the small end and spread
          out at the large end. Two factors drive nearly all of the price: carat size and color.
          Colorless stones cost the most at any size because they are hardest to grow without
          impurities; yellow stones are typically the least expensive, with blue, green, red,
          pink, and black in between depending on the provider.
        </p>
        <table>
          <thead>
            <tr><th>Stone size</th><th>Typical published price (diamond only)</th><th>Notes</th></tr>
          </thead>
          <tbody>
            <tr><td>0.10 to 0.19 carats</td><td>From $995 to $999</td><td>Smallest stones; yellow is usually the entry price</td></tr>
            <tr><td>0.25 to 0.29 carats</td><td>$1,200 to $2,200</td><td>Colorless at the higher end of this band</td></tr>
            <tr><td>0.50 to 0.69 carats</td><td>$2,800 to $4,000</td><td>A common choice for a ring or pendant</td></tr>
            <tr><td>1.00 to 1.29 carats</td><td>$5,700 to $9,000</td><td>Classic setting often included at this size</td></tr>
            <tr><td>Over 2 carats</td><td>$25,000 to $75,000</td><td>Provider range varies widely; longest timelines</td></tr>
          </tbody>
        </table>
        <p>
          Three costs sit outside the diamond price and are easy to miss. First, the{' '}
          <strong>setting</strong>: a pendant setting typically adds from about $520 and a ring
          setting from about $620 at the small end, though many providers include a classic
          setting once the stone reaches about 0.75 carats. Second,{' '}
          <strong>independent certification</strong>: IGI certification is often included for
          stones of one carat and up and a paid option below that, with GIA grading available on
          request. Third, <strong>shipping and insurance</strong>: most providers include
          insured shipping in the published price, but confirm it, since a lost package
          containing ashes is a different problem from a lost parcel.
        </p>

        <h2>How ashes become a diamond</h2>
        <p>
          The process has four stages, and understanding them explains both the price and the
          wait:
        </p>
        <ol>
          <li><strong>Carbon extraction.</strong> The lab isolates carbon from the ashes or hair and purifies it. Cremated remains are mostly calcium phosphate, so only a fraction of the material is usable carbon, which is why providers ask for more ashes than the stone itself contains.</li>
          <li><strong>Graphitization.</strong> The purified carbon is converted into graphite, the same soft material used in pencil lead.</li>
          <li><strong>Growth (HPHT).</strong> The graphite goes into a high pressure, high temperature press that recreates the conditions deep in the earth. Over weeks to months, the carbon crystallizes into a rough diamond. This is the longest stage, and bigger, clearer stones take longer.</li>
          <li><strong>Cutting, polishing, and grading.</strong> The rough stone is cut and polished like any diamond, then graded for carat, color, clarity, and cut, and certified.</li>
        </ol>
        <p>
          Total published timelines run from about two months to about a year: some providers
          quote four to six months for a typical order, others seven to twelve months, with the
          largest sizes and select colors taking the most time. Ask for the timeline in writing
          before you send anything, and ask what happens if growth fails. Reputable providers
          keep reserve carbon so a failed growth can be retried without asking you for more
          ashes.
        </p>

        <h2>How much ash you need, and what happens to the rest</h2>
        <p>
          Most providers ask for about half a cup of ashes, roughly 100 to 200 grams, while some
          need only about 50 grams (around two tablespoons) for a small stone. Hair orders
          generally need about a cup of loosely packed hair. Either way, a typical cremation
          produces far more ashes than one diamond uses, so the remainder stays available for
          an urn, a columbarium niche, or scattering, covered in our{' '}
          <Link href="/guides/scattering-ashes-laws-costs/">scattering ashes guide</Link>.
        </p>
        <p>
          Practical points before you send ashes:
        </p>
        <ul>
          <li><strong>Decide the split first.</strong> Set aside the portion for the diamond before scattering or dividing the rest, because ashes cannot be recovered once scattered.</li>
          <li><strong>Ask about unused material.</strong> Good providers return unused ashes on request and store reserve carbon in case the stone is ever lost or stolen.</li>
          <li><strong>Check the insurance.</strong> Ask whether the shipment and the finished stone are insured, and for how much, before the ashes leave your hands.</li>
          <li><strong>Multiple stones.</strong> Several diamonds can be grown from one person&apos;s ashes, and some providers discount sets of two or more stones by 5 to 15 percent, which matters when siblings each want one.</li>
        </ul>

        <h2>Questions to ask before you order</h2>
        <ul>
          <li>Is the published price for the diamond only, or does it include a setting and certification?</li>
          <li>What independent grading (IGI or GIA) is included at my stone size, and what does it cost if it is not?</li>
          <li>What is the timeline in writing, and what happens if growth fails or the stone does not meet the promised grade?</li>
          <li>How much ash or hair do you need, is unused material returned, and is reserve carbon kept?</li>
          <li>Is shipping insured both ways, and is the finished stone insured against loss or theft?</li>
          <li>Can I see the stone and approve it before it is set, and what is the return or remake policy?</li>
        </ul>
        <p>
          One caution applies to every provider: a memorial diamond is a keepsake purchase, not
          an investment. Custom-grown stones do not hold their purchase price on resale, so
          choose the size for what it means to you, not for what it might be worth later. If
          the budget is the constraint, a smaller stone, or a simple keepsake that holds ashes,
          serves the same purpose for far less.
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
          <Link href="/guides/cremation-cost-2026/">Cremation costs in 2026 →</Link>
          {' · '}
          <Link href="/guides/urn-costs-guide/">Urns: types, costs & where to buy →</Link>
          {' · '}
          <Link href="/guides/how-to-plan-a-funeral/">How to plan a funeral →</Link>
        </p>
      <RelatedGuides currentSlug="cremation-diamonds-cost" />
      </div>
    </>
  );
}
