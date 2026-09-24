import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL, dataset, fmt } from '../../../lib/data';
import Link from 'next/link';

const A = dataset.anchors;

export const metadata: Metadata = {
  title: 'How Much Does Cremation Cost in 2026?',
  description:
    'Cremation costs in 2026: what cremation with a service and direct cremation typically include, why quotes vary so much, and modeled national estimates with sources.',
  alternates: { canonical: SITE_URL + '/guides/cremation-cost-2026/' },
  openGraph: {
    title: 'How Much Does Cremation Cost in 2026?',
    description:
      'Plain-English guide to cremation costs: service vs. direct, what is included, and why prices vary — with sourced, modeled national estimates.',
    url: SITE_URL + '/guides/cremation-cost-2026/',
  },
};

export default function CremationCostGuide() {
  const faqs = [
    {
      q: 'Why do direct cremation quotes vary so much?',
      a: 'Because you may be comparing different businesses. The NFDA 2023 median of $2,750 reflects full-service funeral homes; discount and direct-only cremation providers advertise lower "starting at" prices that reflect leaner overhead and fewer included services. Both figures can be honest — they are different services. Always compare the same line items from the GPL.',
    },
    {
      q: 'Is an urn included in the price of a direct cremation?',
      a: 'No. Direct cremation includes only a basic container for the ashes — usually a simple plastic or cardboard box. An urn is sold separately, and prices range widely, so shop for it on your own if you want one; you are not required to buy it from the crematory.',
    },
    {
      q: 'Do I have to buy a casket if I choose cremation?',
      a: 'No. Under the FTC Funeral Rule, you have the right to use a simple alternative container (unfinished wood, cardboard) for cremation instead of buying a casket, and the provider may not require you to buy a casket from them. If you want a viewing before cremation, many providers offer a rental casket.',
    },
    {
      q: 'Can I scatter the ashes wherever I like?',
      a: 'Not everywhere. Scattering rules vary by state and locality — some public land, parks, and waterways require permits, and scattering at sea has federal rules. Check the rules for the specific place before scattering.',
    },
    {
      q: 'Can a veteran\u2019s ashes be buried in a VA national cemetery?',
      a: 'Yes. Eligible veterans\u2019 cremated remains can be interred in a VA national cemetery at no cost — the plot, opening and closing of the grave, and a government headstone or marker are all provided free (VA.gov, current). Veterans may also receive a headstone or marker allowance (currently $441) for burial elsewhere.',
    },
    {
      q: 'Do I still need death certificates with a cremation?',
      a: 'Yes. You will need certified copies of the death certificate for banks, insurers, property transfer, and other paperwork. They typically cost $5\u2013$35 each depending on the state, so order several at once — copies ordered later can cost more per copy.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Cremation costs in 2026', url: SITE_URL + '/guides/cremation-cost-2026/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Cremation costs in 2026</nav>
      <JsonLd data={articleJsonLd({
        title: 'How Much Does Cremation Cost in 2026?',
        description: 'Cremation costs in 2026: what cremation with a service and direct cremation typically include, why quotes vary so much, and modeled national estimates with sources.',
        url: SITE_URL + '/guides/cremation-cost-2026/',
        datePublished: '2026-09-24',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <h1>How much does cremation cost in 2026?</h1>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> a funeral with viewing followed by cremation costs about
          {' '}<strong>{fmt(A.cremation_with_service.value)}</strong> nationally, while direct
          cremation with no service costs about <strong>{fmt(A.direct_cremation.value)}</strong>.
          These are modeled estimates in August 2026 dollars — not quotes — built from NFDA 2023
          national medians ($6,280 for a funeral with viewing and cremation; $2,750 for direct
          cremation) adjusted for inflation. Local prices vary widely. For a line-item estimate in
          your state, use our <Link href="/calculator/">cost calculator</Link>.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>Cremation with a service: what&rsquo;s included</h2>
        <p>
          A cremation with a service is close to a traditional funeral — the difference is what
          happens to the body at the end. The ceremony can happen before cremation with the body
          present (often using a rental casket), or after, centered on the urn — usually called
          a memorial service.
        </p>
        <p>A typical bill breaks down into these line items:</p>
        <ul>
          <li><strong>Basic services fee.</strong> The non-declinable fee for staff time, arrangements, and paperwork — charged on every funeral, no matter what you choose.</li>
          <li><strong>Preparation and ceremony.</strong> Embalming and dressing if there is a viewing with the body present, plus the viewing, funeral or memorial ceremony, and staff.</li>
          <li><strong>Cremation fee.</strong> The charge for the cremation itself. Funeral homes that do not own a crematory pass through a third party&rsquo;s fee.</li>
          <li><strong>Container or casket.</strong> If the body is present before cremation, this is a casket — often rented rather than bought. If cremation comes first, a simple alternative container suffices.</li>
          <li><strong>Urn.</strong> Prices range from modest to expensive, and you can buy one anywhere — not just from the provider.</li>
        </ul>
        <p>
          Our modeled national estimate of {fmt(A.cremation_with_service.value)} starts from the
          NFDA 2023 median of $6,280 for a funeral with viewing and cremation, adjusted to August
          2026 dollars. That figure covers the funeral-home charges; cemetery fees for burying
          or interring the ashes (a niche, a burial plot) are separate.
        </p>
        <p>
          Remember your rights: the FTC Funeral Rule requires the provider to give you prices by
          phone and a written price list (the General Price List) in person before you discuss
          options — and an itemized statement before you pay. You can use a simple alternative
          container instead of buying a casket, and the provider may not require you to buy the
          casket from them. <Link href="/guides/funeral-rule-rights/">Read the full list of your rights →</Link>
        </p>

        <h2>Direct cremation: what&rsquo;s included</h2>
        <p>
          Direct cremation skips everything ceremonial. The provider collects the body, handles
          the paperwork and permits, and cremates within days. There is no embalming, no viewing,
          and no ceremony with the body present. The ashes are returned to the family in a basic
          container. Families often hold their own memorial later, anywhere they choose, at
          little or no cost.
        </p>
        <p>What you typically pay for:</p>
        <ul>
          <li><strong>Transfer of the body</strong> to the funeral home or crematory.</li>
          <li><strong>The cremation itself</strong> in a basic alternative container — unfinished wood or cardboard, never an expensive casket.</li>
          <li><strong>Basic services fee</strong> and required paperwork, permits, and authorizations.</li>
        </ul>
        <p>
          Our modeled national estimate of {fmt(A.direct_cremation.value)} starts from the NFDA
          2023 median of $2,750, adjusted to August 2026 dollars. It does not include an urn, a
          memorial service, or cemetery fees for the ashes — those are separate choices with
          separate costs.
        </p>
        <p>
          One practical note: order extra certified copies of the death certificate while you are
          arranging. They typically cost $5&ndash;$35 each depending on the state, and you will
          need them for banks, insurers, and property transfer.
        </p>

        <h2>Why direct cremation quotes vary so much</h2>
        <p>
          Direct cremation is the funeral price with the widest spread — you might see advertised
          prices from under $1,000 to over $4,000 in the same metro area. Both ends of the range
          can be honest. Here is why:
        </p>
        <ul>
          <li><strong>Different businesses.</strong> The NFDA median reflects full-service funeral homes, which have buildings, staff, and viewings to support. Direct-only cremation providers and cremation societies run lean — no chapel, fewer staff — and advertise lower &ldquo;starting at&rdquo; prices. Same word, different business model.</li>
          <li><strong>&ldquo;Starting at&rdquo; vs. all-in.</strong> An advertised base price may not include the crematory&rsquo;s third-party fee, permits, or the after-hours transfer. Ask for the all-in total before comparing.</li>
          <li><strong>What&rsquo;s in the GPL.</strong> The General Price List is your comparison tool — get it from every provider and match line items, not headlines.</li>
        </ul>
        <p>
          <Link href="/guides/why-funeral-cost-figures-disagree/">Why published funeral-cost figures disagree →</Link>
        </p>

        <h2>Urns and memorials: what to budget beyond the cremation</h2>
        <p>
          The cremation itself is only part of the spending. Two common add-ons:
        </p>
        <ul>
          <li><strong>Urn.</strong> Not included in a direct cremation beyond the basic container. Buy from any source you like — prices vary far more between retailers than quality does.</li>
          <li><strong>Memorial service.</strong> Held days or weeks later, wherever you choose. A gathering at home costs nearly nothing; renting a venue adds up. Ashes can also be buried, placed in a columbarium niche, or scattered where legal — scattering rules vary by state and locality, so check before scattering on public land or at sea.</li>
        </ul>
        <p>
          If the deceased was a veteran, cremation gets cheaper, not more expensive: eligible
          veterans&rsquo; ashes can be interred in a VA national cemetery free of charge — plot,
          opening/closing, and marker included — and veterans buried elsewhere may qualify for a
          $441 headstone or marker allowance (VA.gov, current figures).
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
          <Link href="/guides/funeral-service-types/">Funeral service types explained →</Link>
          {' · '}
          <Link href="/guides/funeral-rule-rights/">Your rights under the FTC Funeral Rule →</Link>
        </p>
      </div>
    </>
  );
}
