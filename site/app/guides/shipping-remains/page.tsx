import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL, dataset, fmt } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

const A = dataset.anchors;

export const metadata: Metadata = {
  title: 'Transporting Remains Across State Lines: Rules & Costs',
  description:
    'Moving remains across state lines: the two-funeral-home process, transit permits, airline cargo rules, international repatriation, and what transport typically costs.',
  alternates: { canonical: SITE_URL + '/guides/shipping-remains/' },
  openGraph: {
    title: 'Transporting Remains Across State Lines: Rules & Costs',
    description:
      'Plain-English guide to shipping remains across state lines: permits, preparation, airline rules, international repatriation, and typical costs.',
    url: SITE_URL + '/guides/shipping-remains/',
  },
};

export default function ShippingRemainsGuide() {
  const faqs = [
    {
      q: 'Do I need a separate transit permit for every state the remains pass through?',
      a: 'It depends on the states involved. The state where death occurred issues the burial transit permit, and some states require one for entry or passage as well. Because the rules differ, ask the shipping funeral home which permits are needed for your specific route — they handle this paperwork routinely.',
    },
    {
      q: 'Does the body have to be embalmed to fly?',
      a: 'Usually, but not universally. Many airlines require embalming, refrigeration, or a sealed container for human remains; a few carriers accept unembalmed remains under specialized handling with advance arrangements. Because policies differ by carrier, confirm the requirement with the airline before booking through your funeral home.',
    },
    {
      q: 'Can I transport the body myself by car?',
      a: 'Some states allow family transport of a body, but the rules vary — a burial transit permit and compliance with the destination state\u2019s preparation requirements still apply. Long-distance drives carry real practical and health risks. Most families find that two funeral homes handling it is worth the cost.',
    },
    {
      q: 'How do cremated ashes travel by plane?',
      a: 'Much more simply. Cremated remains can go as carry-on (most airlines require the urn to be X-ray-scannable — wood, plastic, or ceramic, not heavy metal) with a copy of the death certificate and cremation certificate. They can also be mailed: USPS is the only carrier that accepts cremated remains, via Priority Mail Express with the special Cremated Remains label.',
    },
    {
      q: 'How far in advance do I need to arrange the shipment?',
      a: 'As early as possible. Air shipments need a funeral home booked as the shipper, permits filed, preparation done, and a flight slot arranged — same-day shipping is often possible but never guaranteed. International repatriation takes much longer: consular paperwork, translations, and apostilles can add days to weeks.',
    },
    {
      q: 'Do your modeled cost estimates include shipping the body?',
      a: 'No. Our modeled national estimates — for example, ' + fmt(A.traditional_burial.value) + ' for a traditional burial, modeled in August 2026 dollars from NFDA 2023 medians — cover local funeral-home and cemetery charges. Transport across state lines is a separate line item you arrange with the shipping and receiving funeral homes.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Shipping remains across state lines', url: SITE_URL + '/guides/shipping-remains/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Shipping remains across state lines</nav>
      <JsonLd data={articleJsonLd({
        title: 'Transporting Remains Across State Lines: Rules & Costs',
        description: 'Moving remains across state lines: the two-funeral-home process, transit permits, airline cargo rules, international repatriation, and what transport typically costs.',
        url: SITE_URL + '/guides/shipping-remains/',
        datePublished: '2026-09-24',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="shipping-remains" imageAlt="Transporting remains across state lines: rules & costs"><h1>Transporting remains across state lines: rules &amp; costs</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> moving a body across state lines typically requires two
          funeral homes — one at the origin to prepare and ship, one at the destination to
          receive — plus a burial transit permit, death certificate copies, and embalming or
          refrigeration. Remains travel as airline cargo, not checked baggage, and only the
          funeral home can book the flight. Costs vary widely, so get itemized quotes from both
          funeral homes; typical total bills run from a few hundred into the low thousands of
          dollars domestically.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>The two-funeral-home system</h2>
        <p>
          When someone dies far from where they will be buried, the standard process runs
          through two businesses. The funeral home near the place of death handles removal,
          preparation, paperwork, and the shipment. The funeral home near the burial location
          picks up the remains on arrival and carries out the funeral, burial, or cremation.
          Families typically need both, and each bills separately — &ldquo;forwarding remains&rdquo;
          and &ldquo;receiving remains&rdquo; are separate line items on each home&rsquo;s price list.
        </p>
        <p>
          You are not locked into one company for both ends. Under the FTC Funeral Rule, you
          can compare providers and choose a shipping funeral home and a receiving funeral
          home independently — get the General Price List from each and match line items
          before deciding. <Link href="/guides/funeral-rule-rights/">Read the full list of your rights →</Link>
        </p>
        <p>
          The origin funeral home usually coordinates the whole journey: it books the flight,
          files the permits, and confirms with the receiving home. You can also hire a
          specialized shipping coordinator (such as a funeral freight broker) to manage the
          route between the two homes.
        </p>

        <h2>Paperwork and preparation</h2>
        <p>
          The key document is the <strong>burial transit permit</strong>. Every state issues
          its own, generally through a local registrar or vital-records office, and a body
          typically cannot be shipped or received without one. Some states also require a
          permit for entry or passage, so the funeral home checks the rules for each state on
          the route — do not assume one permit covers the whole trip.
        </p>
        <p>Alongside the permit, you will need:</p>
        <ul>
          <li><strong>Certified copies of the death certificate.</strong> Order several — you will need them for banks, insurers, and paperwork at both ends.</li>
          <li><strong>Embalming or refrigeration.</strong> State laws and airline policies commonly require the body to be embalmed or kept refrigerated for transport; some states set time limits on unembalmed transport (typically 24&ndash;72 hours). Airlines commonly require embalming or a sealed container — confirm with the carrier.</li>
          <li><strong>An approved shipping container.</strong> Bodies are not shipped in a casket alone. Airlines require an approved outer container — usually an <strong>air tray</strong> (a wooden shipping tray, sometimes holding the casket) or a <strong>combination unit</strong> (a single-purpose shipping container used without a casket). These protect the casket and meet airline cargo rules.</li>
        </ul>
        <p>
          Note that embalming is driven by the shipping need, not by the service. Even families
          skipping a viewing — direct burial or direct cremation at the destination — often
          need embalming (or at minimum refrigeration) simply to move the body legally.
        </p>

        <h2>Flying with remains: airline cargo rules</h2>
        <p>
          Human remains travel as <strong>airline cargo</strong>, never as checked baggage.
          Only the funeral home can tender the shipment — federal security rules require the
          shipper to be registered with the airline&rsquo;s cargo system, so individuals cannot
          book a body onto a flight themselves. The funeral home works with the airline&rsquo;s
          mortuary cargo desk to reserve space, usually on a passenger aircraft&rsquo;s cargo
          hold.
        </p>
        <p>Practical points that surprise families:</p>
        <ul>
          <li><strong>Book early in the day, on nonstops when possible.</strong> Connections and late arrivals risk overnight holds; confirm the destination station&rsquo;s receiving hours in advance, especially for unembalmed remains where refrigeration at the airport may be limited.</li>
          <li><strong>Nothing extra in the container.</strong> Airlines prohibit personal effects inside the casket or shipping container for security reasons — ship belongings separately.</li>
          <li><strong>Timing is tight but doable.</strong> With permits filed and preparation done, domestic air shipments can often go the same day or next day — but holidays, weather, and flight availability can delay things.</li>
          <li><strong>Cremated ashes are different.</strong> Ashes travel far more simply: as carry-on in an X-ray-scannable urn with the death and cremation certificates, or by mail — USPS Priority Mail Express is the only postal service that accepts cremated remains, with its Cremated Remains label.</li>
        </ul>

        <h2>International repatriation</h2>
        <p>
          Moving remains across a border is a different order of complexity. Beyond everything
          above, international shipments typically require the destination country&rsquo;s
          consulate to authorize the import, apostilled or legalized death documents
          (translations included), an embalming certificate, and a receiving funeral home
          abroad to take custody and clear the body through customs. Some countries require
          hermetically sealed caskets or specific container standards beyond what U.S.
          airlines use domestically.
        </p>
        <p>
          Start early — consular paperwork and apostilles alone can take days to weeks — and
          get an itemized written quote before committing, because international quotes vary
          enormously. The shipping funeral home should be able to document every fee: its
          preparation charges, airline cargo fees, consular and document fees, and the
          receiving home&rsquo;s charges abroad.
        </p>

        <h2>What it typically costs</h2>
        <p>
          Transport is a separate bill from the funeral itself, and the pieces add up at both
          ends. Real price-list examples show the range: Gehret Funeral Home&rsquo;s GPL
          (2022) lists &ldquo;forwarding of remains&rdquo; at $2,025 and &ldquo;receiving remains&rdquo;
          at $1,055 — while Preciado Funeral Home&rsquo;s current shipping page lists an
          airline combo shipping container at $375 and an air tray at $175. One freight-focused
          guide puts domestic air shipments broadly at $1,500&ndash;$5,000 all-in (Medium, Dec
          2025). International repatriation commonly runs into the several-thousands and up,
          driven by consular fees, document legalization, and longer cargo routes.
        </p>
        <p>
          What drives the final number: the preparation needed (embalming vs. refrigeration),
          the container, the distance and routing (nonstop vs. connections), and the airline
          cargo fee, which is priced by weight and route. Airfare is often charged separately
          from the funeral homes&rsquo; service fees.
        </p>
        <p>
          Two rules for shopping. First, get itemized quotes from <em>both</em> funeral homes
          — shipping and receiving are separate businesses with separate price lists, and
          the FTC Funeral Rule requires each to give you prices by phone and a written
          General Price List in person before you discuss options. Second, compare
          &ldquo;forwarding remains&rdquo; line items against each other, not against full
          funeral packages — they cover different things.
        </p>
        <p>
          Our modeled national estimates do not include transport. For example, our modeled
          traditional-burial estimate of {fmt(A.traditional_burial.value)} (modeled in August
          2026 dollars from the NFDA 2023 median, adjusted for inflation) covers local
          funeral-home and cemetery charges — shipping across state lines would be added on
          top. <Link href="/guides/funeral-cost-2026-breakdown/">See the full 2026 cost breakdown →</Link>
        </p>
        <p>
          <Link href="/guides/compare-funeral-homes/">How to compare funeral homes before you commit →</Link>
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
          <Link href="/guides/funeral-rule-rights/">Your rights under the FTC Funeral Rule →</Link>
          {' · '}
          <Link href="/guides/compare-funeral-homes/">How to compare funeral homes →</Link>
        </p>
      <RelatedGuides currentSlug="shipping-remains" />
      </div>
    </>
  );
}
