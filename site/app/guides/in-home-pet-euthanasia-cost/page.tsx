import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'In-Home Pet Euthanasia Cost: The Visit, the Fees & the Total Bill',
  description:
    'In-home pet euthanasia averages $410 for a dog in CareCredit 2025 data, against $139 in a clinic. With private cremation the home route totals roughly $670 to $1,085: base prices, fee traps, and city examples.',
  alternates: { canonical: SITE_URL + '/guides/in-home-pet-euthanasia-cost/' },
  openGraph: {
    title: 'In-Home Pet Euthanasia Cost: The Visit, the Fees & the Total Bill',
    description:
      'The visit is only part of the bill: aftercare, evening and weekend fees, and travel charges, with Lap of Love and CodaPet city prices.',
    url: SITE_URL + '/guides/in-home-pet-euthanasia-cost/',
  },
};

export default function InHomePetEuthanasiaCost() {
  const faqs = [
    {
      q: 'How much does in-home pet euthanasia cost?',
      a: 'CareCredit 2025 study data averages $410 for a dog at home, within a range of $325 to $747, against $139 in a clinic. Published provider prices line up with that: Lap of Love base prices run $415 to $660 across the areas surveyed in October 2026, with a median of $525, and CodaPet visits start at $275 to $400 depending on the city. Aftercare is extra in both cases.',
    },
    {
      q: 'What is the total cost of in-home euthanasia with cremation?',
      a: 'Add the two bills together. At CareCredit averages, a $410 home visit plus $260 for private cremation gives about $670. With Lap of Love, the surveyed total for the visit plus private cremation for a pet up to 50 pounds runs $765 to $1,085 before extras. Communal cremation is cheaper: Lap of Love communal prices run $230 to $345. Evening, weekend, and extended travel fees can add $100 to $350 on top.',
    },
    {
      q: 'How much cheaper is euthanasia at a clinic?',
      a: 'CareCredit 2025 averages put clinic euthanasia at $139 for a dog and $158 for a cat, so the clinic route with private cremation averages about $399 for a dog. The lowest cost route of all is often a humane society program: the SPCA Serving Erie County bundles euthanasia with general cremation from $120 for the smallest pets, priced by weight, with a private package including an urn at $250 to $445.',
    },
    {
      q: 'What extra fees do in-home euthanasia services charge?',
      a: 'The published ones to ask about are evening appointments after 5 pm, which add $100 to $200 at Lap of Love, weekend and holiday appointments at plus $100, extended travel beyond the standard area at $30 to $150, and higher charges for pets over 99 pounds and some exotic species. CodaPet lists an out-of-hours fee of $100 in Lafayette, Louisiana. Ask for every fee in writing before you book, not on the day.',
    },
    {
      q: 'What is included in an in-home euthanasia visit?',
      a: 'At Lap of Love the base price includes pre-sedation so the pet is asleep before the final injection, a clay paw print, a lock of fur, and standard travel. Keepsakes differ by provider: CodaPet lists keepsakes from $30. What is almost never included is aftercare itself: cremation or burial is arranged by the service but billed separately, which is why the total is higher than the headline visit price.',
    },
    {
      q: 'Is in-home euthanasia worth the extra cost?',
      a: 'That is a values decision, not a pricing one, but the price gap is now clear: roughly $270 more than a clinic visit at CareCredit dog averages, before aftercare. Families who choose it usually cite avoiding a stressful final car ride and clinic visit for a pet that fears the vet, and having the whole family present in a familiar room. If cost decides it, a clinic visit with the same private cremation gives the same ashes back for about $399 in total.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'In-home pet euthanasia cost', url: SITE_URL + '/guides/in-home-pet-euthanasia-cost/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › In-home pet euthanasia cost</nav>
      <JsonLd data={articleJsonLd({
        title: 'In-Home Pet Euthanasia Cost: The Visit, the Fees & the Total Bill',
        description: 'In-home pet euthanasia cost with the total bill worked out: CareCredit 2025 averages, Lap of Love and CodaPet city prices, and the fee stack.',
        url: SITE_URL + '/guides/in-home-pet-euthanasia-cost/',
        datePublished: '2026-11-05',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="in-home-pet-euthanasia-cost" imageAlt="How much does in-home pet euthanasia cost"><h1>How much does in-home pet euthanasia cost?</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> the visit itself averages <strong>$410 for a dog
          at home</strong> in CareCredit 2025 study data, against <strong>$139 in a
          clinic</strong>. But the visit is only the first bill. Add private cremation
          and the home route totals <strong>about $670</strong> at national averages, and{' '}
          <strong>$765 to $1,085</strong> at Lap of Love surveyed prices, before evening,
          weekend, or travel fees. This guide prices the whole decision, not just the
          headline visit. Cremation options and prices are covered in our{' '}
          <Link href="/guides/how-much-does-pet-cremation-cost/">pet cremation cost guide</Link>.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>The two bills, side by side</h2>
        <p>
          Every end-of-life decision produces two separate charges: the euthanasia
          itself, and the aftercare that follows it. Providers quote them separately,
          which is how a $410 visit quietly becomes a $900 day. CareCredit 2025 study
          averages for a dog:
        </p>
        <table>
          <thead>
            <tr><th>Route</th><th>Euthanasia</th><th>Private cremation</th><th>Typical total</th></tr>
          </thead>
          <tbody>
            <tr><td>In a clinic</td><td>$139 average ($110 to $253)</td><td>$260 average ($206 to $473)</td><td>About $399</td></tr>
            <tr><td>At home</td><td>$410 average ($325 to $747)</td><td>$260 average ($206 to $473)</td><td>About $670</td></tr>
          </tbody>
        </table>
        <p>
          For a cat, CareCredit cat study figures average $158 in a clinic and $359 at
          home, with private cremation at $180 and a pet cemetery burial at $566. The
          pattern is the same at lower numbers, because cats sit in the smallest weight
          band for aftercare.
        </p>

        <h2>What the big in-home services actually charge</h2>
        <table>
          <thead>
            <tr><th>Service</th><th>Published base price</th><th>Notes</th></tr>
          </thead>
          <tbody>
            <tr><td>Lap of Love, Austin, TX</td><td>$525</td><td>Includes pre-sedation, clay paw print, lock of fur, and standard travel; aftercare extra</td></tr>
            <tr><td>Lap of Love, 24 areas surveyed Oct 2026</td><td>$415 to $660, median $525</td><td>Private cremation $330 to $460 up to 50 lb, up to $590 in the largest tier; communal $230 to $345; visit plus private cremation totals $765 to $1,085</td></tr>
            <tr><td>CodaPet, Springfield, MO</td><td>From $275</td><td>Per-vet local pricing; starting prices, not typical totals</td></tr>
            <tr><td>CodaPet, Lafayette, LA</td><td>From $285 to $325</td><td>Cremation $150 to $425; keepsakes from $30; out-of-hours fee $100</td></tr>
            <tr><td>CodaPet, Austin, TX</td><td>From $310</td><td>Cremation $165 to $450</td></tr>
            <tr><td>CodaPet, Carlsbad, CA and Las Vegas, NV</td><td>From $400</td><td>The top of the CodaPet starting range in the cities checked</td></tr>
          </tbody>
        </table>
        <p>
          A Pet Price Index survey of 242 in-home providers in October 2026 found a
          median at-home visit of $390, with CodaPet median starting prices at $340 and
          Lap of Love at $500, which brackets the same market from the other side.
          Treat CodaPet starting prices with care: they are floors set by individual
          vets, and the typical total after cremation and fees is higher.
        </p>

        <h2>The fee stack to ask about before you book</h2>
        <ul>
          <li><strong>Evening appointments.</strong> Lap of Love adds $100 to $200 for appointments after 5 pm.</li>
          <li><strong>Weekends and holidays.</strong> Plus $100 at Lap of Love; CodaPet lists a $100 out-of-hours fee in Lafayette.</li>
          <li><strong>Travel.</strong> Standard travel is included at Lap of Love; extended travel beyond the service area runs $30 to $150.</li>
          <li><strong>Size and species.</strong> Lap of Love charges more for pets over 99 pounds and for some exotic species.</li>
          <li><strong>Keepsakes.</strong> A clay paw print and fur clipping are included in the Lap of Love base price; CodaPet keepsakes start at $30. Elsewhere they are per item extras.</li>
          <li><strong>Aftercare itself.</strong> Cremation or burial is arranged for you but billed on top, always. Our <Link href="/guides/pet-burial-cost/">pet burial and cemetery cost guide</Link> prices the burial route, which CareCredit averages at $831 for a dog.</li>
        </ul>

        <h2>The low cost route most people miss</h2>
        <p>
          Humane societies run end-of-life programs at prices far below the commercial
          in-home market. The SPCA Serving Erie County in New York publishes euthanasia
          bundled with general cremation from $120 for a pet up to 5 pounds, rising by
          weight band to $240 over 121 pounds, and a private package with a wood or
          cedar urn from $250 to $445. If money is the deciding factor, ask your local
          shelter or humane society what it offers before assuming the choice is clinic
          or nothing. Our guide to{' '}
          <Link href="/guides/what-to-do-when-a-pet-dies/">what to do when a pet dies</Link>{' '}
          covers the practical steps around the appointment, at home and at the clinic.
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
          <Link href="/guides/cat-cremation-cost/">Cat cremation cost →</Link>
          {' · '}
          <Link href="/guides/what-to-do-when-a-pet-dies/">What to do when a pet dies →</Link>
        </p>
      <RelatedGuides currentSlug="in-home-pet-euthanasia-cost" />
      </div>
    </>
  );
}
