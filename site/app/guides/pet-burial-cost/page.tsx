import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { PAGE_DATES } from '../../../lib/page-dates';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Pet Burial Cost: Pet Cemetery Prices, Plots, Caskets & Care Fees',
  description:
    'A pet cemetery burial averages $831 for a dog in CareCredit 2025 data, but the lot is only part of the bill: container, grave opening, headstone, and annual care fees, with Cedar Bend and Pet Rest price lists compared.',
  alternates: { canonical: SITE_URL + '/guides/pet-burial-cost/' },
  openGraph: {
    title: 'Pet Burial Cost: Pet Cemetery Prices, Plots, Caskets & Care Fees',
    description:
      'How a pet cemetery bill is built: lot, container, opening, marker, and recurring care, with two published price lists and the press-reported top end.',
    url: SITE_URL + '/guides/pet-burial-cost/',
  },
};

export default function PetBurialCost() {
  const faqs = [
    {
      q: 'How much does it cost to bury a pet in a pet cemetery?',
      a: 'CareCredit 2025 study data averages $831 for a dog, within a range of $659 to $1,513, and $566 for a cat. Embrace Pet Insurance puts the all-in range at $400 to $1,500 or more by size, and a veterinarian-authored Pumpkin guide gives $500 to $2,000 or more including plot and fees. Published lists run from $290 at a humane society cemetery in Iowa to lots alone at $750 to $1,100 in California, before the container and opening.',
    },
    {
      q: 'What is included in a pet cemetery burial price?',
      a: 'Usually less than the headline suggests. A complete bill has four parts: the lot or plot, a container (a pine box runs $175 to $285 at Pet Rest in California, a custom casket $400 and up), the grave opening and burial service, and care charges, which can be annual. At Pet Rest the lot itself requires a $50 per year recurring charge. Always price all four parts before comparing two cemeteries.',
    },
    {
      q: 'How much is a pet headstone or marker?',
      a: 'Cedar Bend Humane Society in Iowa lists a granite headstone at $400. Embrace gives a wider range for grave markers of $50 to $500. A marker is optional at most cemeteries, and some include a simple marker in the lot price, so ask before assuming it is extra.',
    },
    {
      q: 'Can I bury cremated ashes in a pet cemetery instead?',
      a: 'Yes, and it is cheaper than a full body burial. Pet Rest lists a cremation plot at $525 against $750 to $1,100 for a full-size lot, and Cedar Bend lists a plot plus private cremation burial at $325 to $380. You pay the cremation first, then the plot, so add the two together: our pet cremation cost guide prices the cremation side by weight.',
    },
    {
      q: 'Is home burial cheaper than a pet cemetery?',
      a: 'Home burial costs nothing in service fees where it is legal, because there is no lot, opening, or care charge. The real costs are optional: a biodegradable casket or pod, and a marker. Legality is the catch: state dead-animal rules, city ordinances, and lease or homeowner association rules all apply, and a euthanised pet must be buried deeply because the drug is toxic to wildlife. Our pet home burial laws guide covers the main rules.',
    },
    {
      q: 'What does the most expensive pet cemetery cost?',
      a: 'Hartsdale Pet Cemetery in New York, founded in 1896 and the oldest in the country, does not publish a price list. Press reports put plots with burial beginning around $2,900 to $3,000, with one family reported by VOA in December 2024 paying about $7,000 in total including a container, tombstone, and grounds care, and perpetual care priced at $3,500 one time or $105 per year. Treat those figures as press-reported, dated, and at the very top of the market.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Pet burial cost', url: SITE_URL + '/guides/pet-burial-cost/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Pet burial cost</nav>
      <JsonLd data={articleJsonLd({
        title: 'Pet Burial Cost: Pet Cemetery Prices, Plots, Caskets & Care Fees',
        description: 'Pet cemetery burial cost broken into lot, container, opening, and care fees, with published Cedar Bend and Pet Rest lists and national averages.',
        url: SITE_URL + '/guides/pet-burial-cost/',
        datePublished: '2026-11-05',
        dateModified: PAGE_DATES['/guides/pet-burial-cost/']?.updated ?? LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="pet-burial-cost" imageAlt="How much does pet burial cost"><h1>How much does pet burial cost?</h1></GuideHero>
        <Byline published={PAGE_DATES['/guides/pet-burial-cost/']?.published} updated={PAGE_DATES['/guides/pet-burial-cost/']?.updated} />

        <p className="answer-first">
          <strong>Quick answer:</strong> a pet cemetery burial averages <strong>$831 for
          a dog</strong> in CareCredit 2025 study data, and roughly <strong>$400 to
          $1,500 or more</strong> all-in across sizes in Embrace Pet Insurance figures.
          The mistake to avoid is pricing the lot alone: a complete bill is lot plus
          container plus grave opening plus care fees, and one of those charges can be
          annual. If you are comparing burial against cremation, our{' '}
          <Link href="/guides/how-much-does-pet-cremation-cost/">pet cremation cost guide</Link>{' '}
          prices the other route by weight.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>How a pet cemetery bill is built</h2>
        <p>
          Pet cemeteries bill the way human cemeteries do, in parts. Our human{' '}
          <Link href="/guides/cemetery-fees-explained/">cemetery fees explained guide</Link>{' '}
          walks through the same anatomy for people; for pets the parts are:
        </p>
        <table>
          <thead>
            <tr><th>Part of the bill</th><th>What it is</th><th>Published examples</th></tr>
          </thead>
          <tbody>
            <tr><td>Lot or plot</td><td>The burial space itself, priced by pet size</td><td>Pet Rest, CA: $750 small, $815 medium, $925 large, $1,100 XL. Embrace size table: $400 to $600 small up to $800 to $1,500 or more XL</td></tr>
            <tr><td>Container</td><td>A box or casket, often required</td><td>Pet Rest: pine box $175 to $285; custom casket $400 to $425 or more</td></tr>
            <tr><td>Opening and burial</td><td>Digging the grave and the burial service</td><td>Sometimes bundled: Cedar Bend, IA prices plot plus burial together at $290 to $565 by size. Pet Rest charges $275 to open a lot for a second pet</td></tr>
            <tr><td>Marker</td><td>Headstone or plaque</td><td>Cedar Bend granite headstone $400; Embrace marker range $50 to $500</td></tr>
            <tr><td>Care</td><td>Grounds upkeep, one-time or annual</td><td>Pet Rest lots require $50 per year. Hartsdale perpetual care is press-reported at $3,500 one time or $105 per year</td></tr>
          </tbody>
        </table>

        <h2>Two published price lists, opposite ends of the market</h2>
        <table>
          <thead>
            <tr><th>Cemetery</th><th>Published prices</th></tr>
          </thead>
          <tbody>
            <tr><td>Cedar Bend Humane Society, Waterloo, IA</td><td>Body burial, plot plus burial: $290 to $565 by size. Plot plus private cremation burial: $325 to $380. Granite headstone: $400</td></tr>
            <tr><td>Pet Rest, Colma, CA</td><td>Lawn burial lot: $750 to $1,100 by size, plus pine box $175 to $285 or casket $400 and up, plus $50 per year care. Cremation plot: $525</td></tr>
          </tbody>
        </table>
        <p>
          A humane society cemetery in Iowa and a dedicated cemetery outside San
          Francisco are selling the same product at roughly three times the price,
          before either adds a marker. That spread is normal in this market and is why
          a single national range, on its own, will mislead you. Get the four-part bill
          from your local cemetery in writing.
        </p>

        <h2>The top of the market, clearly labelled</h2>
        <p>
          Hartsdale Pet Cemetery in New York, established in 1896, is the best known
          pet cemetery in the country and does not publish prices. Everything in print
          about its prices is press-reported: plots with burial beginning around $2,900
          to $3,000, and a VOA report from December 2024 describing a family that paid
          about $7,000 all-in including a container, tombstone, and grounds care. We
          include it so the top of the market is visible, labelled as reported rather
          than published.
        </p>

        <h2>Burial versus the alternatives</h2>
        <ul>
          <li><strong>Cremation first, burial second.</strong> Burying ashes in a cremation plot ($525 at Pet Rest, $325 to $380 with the cremation bundled at Cedar Bend) costs less than a full body lot and keeps a visitable grave.</li>
          <li><strong>Home burial.</strong> No lot, opening, or care fees at all, where legal. The costs are a casket or pod and a marker, if you want them. The rules come first: read our <Link href="/guides/pet-home-burial-laws/">pet home burial laws guide</Link> before digging, and call 811 for underground utilities.</li>
          <li><strong>Cremation without burial.</strong> Private cremation at $100 to $450 by weight, with ashes kept, scattered, or placed in a memorial at home, is the cheapest ashes-back route; prices are in the <Link href="/guides/how-much-does-pet-cremation-cost/">pet cremation cost guide</Link>.</li>
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
          <Link href="/guides/how-much-does-pet-cremation-cost/">Pet cremation cost hub →</Link>
          {' · '}
          <Link href="/guides/pet-home-burial-laws/">Pet home burial laws →</Link>
          {' · '}
          <Link href="/guides/cemetery-fees-explained/">Human cemetery fees explained →</Link>
          {' · '}
          <Link href="/guides/what-to-do-when-a-pet-dies/">What to do when a pet dies →</Link>
        </p>
      <RelatedGuides currentSlug="pet-burial-cost" />
      </div>
    </>
  );
}
