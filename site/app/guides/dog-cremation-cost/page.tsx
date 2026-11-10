import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { PAGE_DATES } from '../../../lib/page-dates';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'How Much Does Dog Cremation Cost? Prices by Size and Weight',
  description:
    'Dog cremation cost runs from about $45 for communal cremation of a small dog to $450 or more for private cremation of a dog over 90 pounds: CareCredit weight table, provider ladders, and size examples.',
  alternates: { canonical: SITE_URL + '/guides/dog-cremation-cost/' },
  openGraph: {
    title: 'How Much Does Dog Cremation Cost? Prices by Size and Weight',
    description:
      'Dog cremation priced by weight band: small, medium, large, and giant dog examples with published provider prices.',
    url: SITE_URL + '/guides/dog-cremation-cost/',
  },
};

export default function DogCremationCost() {
  const faqs = [
    {
      q: 'How much does it cost to cremate a dog?',
      a: 'CareCredit national figures put communal dog cremation at $45 to $200 and private dog cremation at $100 to $450, depending on weight. CareCredit 2025 study average for private dog cremation specifically is $260, within a range of $206 to $473. A small dog sits at the bottom of every range and a dog over 90 pounds at the top.',
    },
    {
      q: 'How much does it cost to cremate a large dog?',
      a: 'For a dog over 90 pounds, CareCredit lists $150 to $200 for communal cremation and $350 to $450 for private cremation. Published ladders agree: Chicago Pet Cremation charges $550 for private cremation at 76 to 100 pounds, and Pet Passages lists private cremation from $300 for its widest band, 111 to 225 pounds. Large dogs are also where pickup and urn charges add the most, so get the full total in writing.',
    },
    {
      q: 'How much does it cost to cremate a small dog?',
      a: 'A dog under 30 pounds falls in the cheapest band: $45 to $75 communal and $100 to $175 private in the CareCredit table. Rural and humane society programs can be lower; one rural provider, Silverbell Pets, lists private cremation at $75 for a pet up to 25 pounds. Metro prices run higher, with Chicago Pet Cremation at $300 for private cremation of a pet up to 5 pounds.',
    },
    {
      q: 'Is dog cremation priced by breed?',
      a: 'No. Providers price by weight band, not by breed or species. Breed only matters because it predicts weight: a Chihuahua and a Great Dane are both dogs, but they sit at opposite ends of the ladder. Weigh your dog, or ask your vet for a recent weight, and compare providers using the band your dog actually falls into.',
    },
    {
      q: 'Does the cremation price include euthanasia?',
      a: 'No. Euthanasia is billed separately from cremation. CareCredit 2025 averages for a dog are $139 for euthanasia in a clinic and $410 for a visit at home, and private cremation adds an average of $260. Our in-home pet euthanasia cost guide adds the two bills together so you can see the full total for each route.',
    },
    {
      q: 'How long until I get my dog ashes back?',
      a: 'PetMD puts the return at 1 to 2 weeks when ashes come back through a vet clinic. Arranging directly with a crematory is usually faster, at 1 to 7 days, and some providers offer next-day return for a fee, $50 at Precious Paws in California. Ask about turnaround when you book, especially if a memorial is planned around the return.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Dog cremation cost', url: SITE_URL + '/guides/dog-cremation-cost/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Dog cremation cost</nav>
      <JsonLd data={articleJsonLd({
        title: 'How Much Does Dog Cremation Cost? Prices by Size and Weight',
        description: 'Dog cremation cost by weight band: CareCredit national table, published provider ladders, and size examples from Chihuahua to Great Dane.',
        url: SITE_URL + '/guides/dog-cremation-cost/',
        datePublished: '2026-11-05',
        dateModified: PAGE_DATES['/guides/dog-cremation-cost/']?.updated ?? LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="dog-cremation-cost" imageAlt="How much does dog cremation cost"><h1>How much does dog cremation cost?</h1></GuideHero>
        <Byline published={PAGE_DATES['/guides/dog-cremation-cost/']?.published} updated={PAGE_DATES['/guides/dog-cremation-cost/']?.updated} />

        <p className="answer-first">
          <strong>Quick answer:</strong> dog cremation costs <strong>$45 to $200 for
          communal</strong> cremation and <strong>$100 to $450 for private</strong>{' '}
          cremation in CareCredit national figures, and the deciding factor is your dog
          weight. CareCredit 2025 study average for private dog cremation is{' '}
          <strong>$260</strong>. Dogs span a wider weight range than any other pet, from
          a 4 pound Chihuahua to a 150 pound Great Dane, so the dog range is the widest
          in pet aftercare. Our main{' '}
          <Link href="/guides/how-much-does-pet-cremation-cost/">pet cremation cost guide</Link>{' '}
          explains the three cremation types and how the labels work.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>Dog cremation price by weight</h2>
        <p>
          Providers do not price by breed. They price by weight band, and the bands are
          not standardised between providers. The CareCredit national table below is the
          reference most of the industry works from; the size examples translate the
          bands into dogs you can picture.
        </p>
        <table>
          <thead>
            <tr><th>Dog weight</th><th>Typical size</th><th>Communal</th><th>Private</th></tr>
          </thead>
          <tbody>
            <tr><td>Up to 30 lb</td><td>Chihuahua, Yorkie, most terriers, a young puppy</td><td>$45 to $75</td><td>$100 to $175</td></tr>
            <tr><td>31 to 50 lb</td><td>Beagle, Border Collie, smaller Spaniels</td><td>$50 to $80</td><td>$150 to $250</td></tr>
            <tr><td>51 to 70 lb</td><td>Labrador, Golden Retriever, Boxer</td><td>$50 to $100</td><td>$200 to $300</td></tr>
            <tr><td>71 to 90 lb</td><td>German Shepherd, large Labrador</td><td>$100 to $150</td><td>$250 to $375</td></tr>
            <tr><td>Over 90 lb</td><td>Great Dane, Mastiff, Saint Bernard</td><td>$150 to $200</td><td>$350 to $450</td></tr>
          </tbody>
        </table>
        <p>
          The averages hide how much the top of the market charges. Embrace Pet
          Insurance puts private cremation for a dog over 100 pounds at $300 to $500 or
          more, and the CareCredit private average of $260 carries a range up to $473.
        </p>

        <h2>What published dog ladders actually charge</h2>
        <table>
          <thead>
            <tr><th>Provider</th><th>Private cremation ladder</th></tr>
          </thead>
          <tbody>
            <tr><td>Chicago Pet Cremation Services, IL</td><td>$300 (0 to 5 lb), $350 (6 to 25 lb), $400 (26 to 50 lb), $450 (51 to 75 lb), $550 (76 to 100 lb)</td></tr>
            <tr><td>Pet Rest, Colma, CA</td><td>$200 under 20 lb, up to $385 and over above 90 lb, urn and local pickup included</td></tr>
            <tr><td>Precious Paws and Claws, CA</td><td>$125 (0 to 20 lb) to $200 (100 to 150 lb), cedar chest included; communal $30 to $60</td></tr>
            <tr><td>Pet Passages, franchise starting prices</td><td>$210 (0 to 20 lb) to $300 (111 to 225 lb)</td></tr>
            <tr><td>Silverbell Pets, rural</td><td>$75 up to 25 lb, up to $250 at 101 to 200 lb</td></tr>
          </tbody>
        </table>
        <p>
          Two lessons from the ladders. First, a mid-size dog in the 30 to 50 pound
          range is where prices cluster tightest, because that is the most common band.
          Second, giant breeds are quoted inconsistently: some providers cap their
          published ladder at 100 or 150 pounds, and Chicago quotes dogs over 100
          pounds by phone, so for a very large dog you will need to call rather than
          rely on a web page.
        </p>

        <h2>The extras that hit large dogs hardest</h2>
        <ul>
          <li><strong>Home pickup.</strong> Moving a large dog takes two people and a vehicle call-out. Published home pickup runs from $35 to $100, and distance raises it further.</li>
          <li><strong>After hours.</strong> Dogs often die at night. After-hours fees in published lists run $75 to $100, and an after-hours pickup on a Sunday adds $100 at Precious Paws.</li>
          <li><strong>Urns.</strong> A large dog produces more ashes and needs a larger urn; urn lists run $40 to $500, so size pushes you up that range too.</li>
          <li><strong>Witnessing.</strong> From $85 at Pet Rest, plus $100 at Precious Paws, if your family wants to be present.</li>
        </ul>

        <h2>Before the cremation: the step most people are actually facing</h2>
        <p>
          Most dog cremation decisions are made within a day of a death at home or a
          euthanasia appointment. Our guide to{' '}
          <Link href="/guides/what-to-do-when-a-pet-dies/">what to do when a pet dies</Link>{' '}
          walks through the first hours step by step, including how to care for the body
          and what each step costs. If euthanasia is still ahead of you, the{' '}
          <Link href="/guides/in-home-pet-euthanasia-cost/">in-home pet euthanasia cost guide</Link>{' '}
          covers the visit itself and the combined bill. And if burial is an option you
          are weighing, compare the{' '}
          <Link href="/guides/pet-burial-cost/">pet burial and cemetery costs</Link>{' '}
          before deciding, since a cemetery bill is built very differently from a
          cremation bill.
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
          <Link href="/guides/cat-cremation-cost/">Cat cremation cost →</Link>
          {' · '}
          <Link href="/guides/pet-aquamation-cost/">Pet aquamation cost →</Link>
          {' · '}
          <Link href="/guides/what-to-do-when-a-pet-dies/">What to do when a pet dies →</Link>
        </p>
      <RelatedGuides currentSlug="dog-cremation-cost" />
      </div>
    </>
  );
}
