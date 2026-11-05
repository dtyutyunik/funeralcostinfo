import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Pet Aquamation Cost: Water Cremation Prices by Weight',
  description:
    'Pet aquamation costs about the same as private flame cremation at most providers, but the premium varies: plus $100 a band in Chicago, about $20 in Tacoma, and $140 flat starting in North Carolina. Provider prices compared.',
  alternates: { canonical: SITE_URL + '/guides/pet-aquamation-cost/' },
  openGraph: {
    title: 'Pet Aquamation Cost: Water Cremation Prices by Weight',
    description:
      'Aquamation priced provider by provider against flame cremation at the same business, with weight ladders and the extras that apply.',
    url: SITE_URL + '/guides/pet-aquamation-cost/',
  },
};

export default function PetAquamationCost() {
  const faqs = [
    {
      q: 'How much does pet aquamation cost?',
      a: 'Embrace Pet Insurance gives national estimates of $80 to $200 for a pet under 30 pounds, rising to $350 to $450 or more over 100 pounds, about the same as private flame cremation. Published provider prices are wider: $140 for a small pet at Clay-Barnette in North Carolina, urn included, against $400 for a pet up to 5 pounds at Chicago Pet Cremation. Weight and city decide the price, as with flame cremation.',
    },
    {
      q: 'Is aquamation more expensive than cremation for a pet?',
      a: 'There is no standard premium. Chicago Pet Cremation prices aquamation exactly $100 above its own flame price in every weight band. Gentle Hands in the Tacoma area prices individual aquamation only about $20 to $25 above its own flame prices. Clay-Barnette, a funeral home in North Carolina, offers private aquamation from $140, below many metro flame prices. Compare the pair at your local provider rather than assuming a rule.',
    },
    {
      q: 'What is aquamation for pets?',
      a: 'Aquamation, also called water cremation or alkaline hydrolysis, uses water, alkali, and heat to break down tissue over about 6 to 20 hours, instead of flame. The bones are then processed into ashes the same way as flame cremation, and the ashes are returned if you choose a private service. It is offered in private and communal forms, with the same ashes-back rules as flame cremation.',
    },
    {
      q: 'Do you get more ashes back from aquamation?',
      a: 'Providers and associations commonly state that aquamation returns about 20 percent more remains than flame cremation, and uses about 90 percent less energy. Those figures are industry claims repeated by providers such as Embrace and Clay-Barnette; we could not find an independent measurement behind them, so treat them as the providers case for the process rather than a verified fact.',
    },
    {
      q: 'Is pet aquamation legal in my state?',
      a: 'Embrace, citing the American Animal Hospital Association, reports pet aquamation as legal in all 50 states. Availability is a different question: PetMD notes basic packages are not available everywhere, because far fewer providers own the equipment. Human aquamation law is separate and much more restricted; our human aquamation guide covers that state by state, and the two should not be confused.',
    },
    {
      q: 'What extras apply to pet aquamation?',
      a: 'The same stack as flame cremation. Peaceful Waters in San Diego prices a private service at $220 to $450 by weight and a version with memorial items, a clay paw print and fur clipping, at $270 to $500, so the bundle adds $50. Clay-Barnette charges a $75 after-hours fee. Home pickup, witnessing, and urns are priced the way they are for cremation, so ask for the full list in writing.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Pet aquamation cost', url: SITE_URL + '/guides/pet-aquamation-cost/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Pet aquamation cost</nav>
      <JsonLd data={articleJsonLd({
        title: 'Pet Aquamation Cost: Water Cremation Prices by Weight',
        description: 'Pet aquamation prices compared provider by provider against flame cremation at the same business, with weight ladders from Chicago, Tacoma, North Carolina, and San Diego.',
        url: SITE_URL + '/guides/pet-aquamation-cost/',
        datePublished: '2026-11-05',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="pet-aquamation-cost" imageAlt="How much does pet aquamation cost"><h1>How much does pet aquamation cost?</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> pet aquamation costs <strong>about the same as
          private flame cremation</strong>: Embrace national estimates run $80 to $200
          under 30 pounds and $350 to $450 or more over 100 pounds. The honest catch is
          that the premium over flame is whatever your local provider says it is: plus
          $100 a band at one Chicago provider, about $20 at a Tacoma provider, and
          nothing at all where a funeral home prices water cremation as its standard
          offer. Flame prices for comparison are in our{' '}
          <Link href="/guides/how-much-does-pet-cremation-cost/">pet cremation cost guide</Link>,
          and the human version of the process is covered in our{' '}
          <Link href="/guides/aquamation-guide/">aquamation guide</Link>.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>Flame versus water, at the same businesses</h2>
        <p>
          The only fair comparison is inside one price list, because city and provider
          type move pet prices more than the process does. Three providers publish both:
        </p>
        <table>
          <thead>
            <tr><th>Provider</th><th>Flame</th><th>Aquamation</th><th>The premium</th></tr>
          </thead>
          <tbody>
            <tr><td>Chicago Pet Cremation Services, IL</td><td>Private $300 (0 to 5 lb) to $550 (76 to 100 lb)</td><td>Private $400 to $650 on the same bands</td><td>Exactly plus $100 in every band</td></tr>
            <tr><td>Gentle Hands Cherished Paws, Tacoma, WA area</td><td>Individual $330 (0 to 10 lb) to $525 (150 lb plus)</td><td>Individual $350 to $550 on the same bands</td><td>About $20 to $25</td></tr>
            <tr><td>Clay-Barnette Funeral Home, Shelby, NC</td><td>Not the house specialty</td><td>Private $140 (0 to 25 lb) to $240 (142 to 200 lb), carved wooden urn included</td><td>Priced below most metro flame lists outright</td></tr>
          </tbody>
        </table>

        <h2>More published aquamation ladders</h2>
        <table>
          <thead>
            <tr><th>Provider</th><th>Published aquamation prices</th></tr>
          </thead>
          <tbody>
            <tr><td>Companah, NC (water cremation)</td><td>Individual $195 up to 30 lb, rising by band to $400 over 120 lb. Communal $145 to $275 and up</td></tr>
            <tr><td>Peaceful Waters Aquamation, San Diego, CA</td><td>Private $220 to $450 by weight; private with memorial items $270 to $500. Communal $175 to $400, ashes scattered at sea</td></tr>
            <tr><td>Gentle Hands, WA (communal aquamation)</td><td>$245 at 0 to 10 lb to $410 at 150 lb plus</td></tr>
            <tr><td>Pet Passages (franchise starting prices)</td><td>Aquamation listed at $110 to $200 alongside its flame ladders</td></tr>
          </tbody>
        </table>
        <p>
          Read the ladders together and the pattern is the same one flame cremation
          shows: weight sets the band, the city sets the level, and the process is a
          smaller factor than either. A small pet in North Carolina can be aquamated
          privately for $140 while a small pet in Chicago pays $400.
        </p>

        <h2>How aquamation works, briefly</h2>
        <p>
          The pet is placed in a chamber with water and alkali, and gentle heat over
          about 6 to 20 hours reduces the tissue, leaving bone that is dried and
          processed into ashes, the same end point as flame cremation. Providers state
          that the process uses about 90 percent less energy than flame and returns
          about 20 percent more remains; those are industry claims, repeated widely,
          and we label them as claims because no independent measurement sits behind
          them. Private and communal forms work exactly as they do for flame: private
          returns your pet ashes, communal does not. The definitions are in our{' '}
          <Link href="/guides/how-much-does-pet-cremation-cost/">pet cremation cost guide</Link>.
        </p>

        <h2>Availability, not legality, is the constraint</h2>
        <p>
          Pet aquamation is reported legal in all 50 states (Embrace, citing AAHA), but
          the equipment is far less common than flame crematories, so in many areas the
          nearest provider is a drive away or there is none. Do not confuse the pet
          position with the human one: human aquamation is legal in only some states,
          which our <Link href="/guides/aquamation-guide/">human aquamation guide</Link>{' '}
          tracks state by state.
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
          <Link href="/guides/aquamation-guide/">Human aquamation guide →</Link>
        </p>
      <RelatedGuides currentSlug="pet-aquamation-cost" />
      </div>
    </>
  );
}
