import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { PAGE_DATES } from '../../../lib/page-dates';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'How Much Does Cat Cremation Cost? Prices by Type',
  description:
    'Cat cremation cost sits in the smallest weight band: $45 to $75 communal and $100 to $175 private in CareCredit national figures, with a private average of $180 in CareCredit cat study data.',
  alternates: { canonical: SITE_URL + '/guides/cat-cremation-cost/' },
  openGraph: {
    title: 'How Much Does Cat Cremation Cost? Prices by Type',
    description:
      'Cat cremation by type and provider: communal, partitioned, and private prices for the smallest weight band, and what is extra.',
    url: SITE_URL + '/guides/cat-cremation-cost/',
  },
};

export default function CatCremationCost() {
  const faqs = [
    {
      q: 'How much does it cost to cremate a cat?',
      a: 'Cats fall in the smallest weight band in every pricing table. CareCredit national figures list $45 to $75 for communal cremation and $100 to $175 for private cremation for a pet up to 30 pounds. CareCredit cat study data puts the private cremation average at $180. Published provider prices for small pets range from $75 at a rural provider to $300 in Chicago.',
    },
    {
      q: 'Why is cat cremation cheaper than dog cremation?',
      a: 'Price follows weight, not species. Almost all cats weigh between 7 and 15 pounds, so they always land in the cheapest band, while dogs spread across all five bands. A large dog over 90 pounds costs roughly three times as much to cremate privately as a cat in the same provider ladder.',
    },
    {
      q: 'Should I choose private or communal cremation for my cat?',
      a: 'The deciding question is whether you want ashes back. Communal cremation returns no ashes. Private cremation returns your cat ashes alone. Partitioned cremation is the middle option, with cats separated inside a shared chamber run. In the smallest band the price gap between communal and private is the narrowest of any size, roughly $55 to $100 in the CareCredit table, so many cat owners find private cremation affordable.',
    },
    {
      q: 'How much does it cost to put a cat to sleep and cremate the remains?',
      a: 'The two bills are separate. CareCredit cat study figures average $158 for euthanasia in a clinic and $359 for a visit at home, and private cremation averages $180. A clinic visit plus private cremation therefore averages roughly $338 before any urn or keepsake extras.',
    },
    {
      q: 'Can I bury my cat at home instead?',
      a: 'Often, yes, where local rules allow it. There is no federal law on burying a pet at home; state rules and city ordinances decide, along with any lease or homeowner association rules. Washington state, for example, requires burial with at least 3 feet of soil cover and at least 100 feet from wells and surface water. Our pet home burial laws guide covers the main state rules and the safety points, including why a euthanised pet needs deep burial.',
    },
    {
      q: 'How long does cat cremation take, and when do ashes come back?',
      a: 'The cremation itself takes a few hours; the wait is scheduling and transport. Arranging directly with a crematory, ashes are typically ready in 1 to 7 days. Through a vet clinic, PetMD puts the return at 1 to 2 weeks. Some providers offer next-day return for a fee, $50 at Precious Paws in California.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Cat cremation cost', url: SITE_URL + '/guides/cat-cremation-cost/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Cat cremation cost</nav>
      <JsonLd data={articleJsonLd({
        title: 'How Much Does Cat Cremation Cost? Prices by Type',
        description: 'Cat cremation cost in the smallest weight band: CareCredit national figures, provider examples, and the extras that apply to cats.',
        url: SITE_URL + '/guides/cat-cremation-cost/',
        datePublished: '2026-11-05',
        dateModified: PAGE_DATES['/guides/cat-cremation-cost/']?.updated ?? LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="cat-cremation-cost" imageAlt="How much does cat cremation cost"><h1>How much does cat cremation cost?</h1></GuideHero>
        <Byline published={PAGE_DATES['/guides/cat-cremation-cost/']?.published} updated={PAGE_DATES['/guides/cat-cremation-cost/']?.updated} />

        <p className="answer-first">
          <strong>Quick answer:</strong> cats sit in the smallest weight band, so cat
          cremation is the cheapest in pet aftercare: <strong>$45 to $75 for communal</strong>{' '}
          and <strong>$100 to $175 for private</strong> cremation in CareCredit national
          figures, with a private cremation average of <strong>$180</strong> in CareCredit
          cat study data. The choice that matters is not size, it is whether ashes come
          back. Our main{' '}
          <Link href="/guides/how-much-does-pet-cremation-cost/">pet cremation cost guide</Link>{' '}
          explains how the three types differ and why the word individual can mislead.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>Cat cremation prices by type</h2>
        <table>
          <thead>
            <tr><th>Type</th><th>Ashes back?</th><th>Typical cat price</th><th>Source</th></tr>
          </thead>
          <tbody>
            <tr><td>Communal</td><td>No</td><td>$45 to $75</td><td>CareCredit national table, up to 30 lb band</td></tr>
            <tr><td>Partitioned</td><td>Yes, separated in a shared run</td><td>Between communal and private; Embrace lists partitioned at $50 to $250 overall</td><td>Embrace Pet Insurance</td></tr>
            <tr><td>Private</td><td>Yes, your cat alone</td><td>$100 to $175; average $180</td><td>CareCredit national table and cat study</td></tr>
          </tbody>
        </table>
        <p>
          Because nearly every cat weighs under 20 pounds, the cat decision is simpler
          than the dog decision: you are choosing between types, not hunting for the
          right weight band. The communal to private gap in this band is the narrowest
          in the table, which is why private cremation is within reach for most cat
          owners who want ashes back.
        </p>

        <h2>Published provider prices for small pets</h2>
        <table>
          <thead>
            <tr><th>Provider</th><th>Smallest band price</th></tr>
          </thead>
          <tbody>
            <tr><td>Silverbell Pets, rural (private)</td><td>$75 for a pet up to 25 lb; $25 for standard cremation with no ashes returned</td></tr>
            <tr><td>Precious Pets, Florida area (private)</td><td>$75 for a pet under 5 lb; $140 at 5 to 24 lb. Communal $100 up to 49 lb</td></tr>
            <tr><td>Precious Paws and Claws, CA (private, cedar chest included)</td><td>$125 at 0 to 20 lb; communal $30 at 0 to 50 lb</td></tr>
            <tr><td>Pet Rest, Colma, CA (individual, urn included)</td><td>$200 under 20 lb</td></tr>
            <tr><td>Chicago Pet Cremation Services, IL (private)</td><td>$300 at 0 to 5 lb; $350 at 6 to 25 lb</td></tr>
          </tbody>
        </table>
        <p>
          The spread for the same small pet, $75 rural against $300 in a large metro, is
          the widest lesson in cat cremation pricing: where you live matters more than
          anything once the weight band is this small. If your vet quote looks high, a
          direct call to a local crematory is worth making.
        </p>

        <h2>Extras that apply to cats</h2>
        <ul>
          <li><strong>Urn size works in your favour.</strong> A cat needs a small urn, at the bottom of the $40 to $500 urn range one Florida provider publishes. Some private packages include a basic urn, so check before buying one separately.</li>
          <li><strong>Paw prints and fur clippings.</strong> Included by some providers, charged per item by others. Lap of Love includes a clay paw print and a lock of fur in its in-home euthanasia base price; elsewhere, ask.</li>
          <li><strong>Pickup.</strong> A cat is easy to transport yourself, which lets many owners skip the $35 to $100 home pickup fee entirely by dropping off at the vet or crematory.</li>
          <li><strong>Aquamation.</strong> Water cremation is priced in the same small band. Clay-Barnette in North Carolina charges $140 for private aquamation up to 25 pounds, urn included. Our <Link href="/guides/pet-aquamation-cost/">pet aquamation cost guide</Link> compares providers.</li>
        </ul>

        <h2>The alternatives, priced</h2>
        <p>
          Cremation is not the only option. CareCredit cat study data averages a pet
          cemetery burial at $566 for a cat, and our{' '}
          <Link href="/guides/pet-burial-cost/">pet burial and cemetery cost guide</Link>{' '}
          shows how that bill is built. Home burial costs nothing in fees where it is
          legal, and our{' '}
          <Link href="/guides/pet-home-burial-laws/">pet home burial laws guide</Link>{' '}
          covers the state rules. If your cat has just died and you are not sure what to
          do first, start with{' '}
          <Link href="/guides/what-to-do-when-a-pet-dies/">what to do when a pet dies</Link>;
          the cremation decision does not have to be made in the first hour.
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
          <Link href="/guides/how-much-does-pet-cremation-cost/">Pet cremation cost hub →</Link>
          {' · '}
          <Link href="/guides/dog-cremation-cost/">Dog cremation cost →</Link>
          {' · '}
          <Link href="/guides/pet-aquamation-cost/">Pet aquamation cost →</Link>
          {' · '}
          <Link href="/guides/pet-home-burial-laws/">Pet home burial laws →</Link>
        </p>
      <RelatedGuides currentSlug="cat-cremation-cost" />
      </div>
    </>
  );
}
