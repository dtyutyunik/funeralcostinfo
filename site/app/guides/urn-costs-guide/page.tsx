import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL, dataset, fmt } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

const A = dataset.anchors;

export const metadata: Metadata = {
  title: 'Urns: Types, Costs & Where to Buy',
  description:
    'A plain-English guide to cremation urns: the main types, how to size one, your right to buy it anywhere, and what it means for the total cremation cost.',
  alternates: { canonical: SITE_URL + '/guides/urn-costs-guide/' },
  openGraph: {
    title: 'Urns: Types, Costs & Where to Buy',
    description:
      'Urn types explained, how to pick the right size, where to buy one, and the Funeral Rule right that saves you money.',
    url: SITE_URL + '/guides/urn-costs-guide/',
  },
};

export default function UrnCostsGuide() {
  const faqs = [
    {
      q: 'Is an urn included in the price of a direct cremation?',
      a: 'Usually not. Direct cremation returns the ashes in a basic container — typically a simple plastic or cardboard box. An urn is a separate purchase, and you are not required to buy it from the crematory. Cremation-with-service packages, by contrast, often include a mid-range urn in the package price, so check the line items before paying for one twice.',
    },
    {
      q: 'Can a funeral home refuse an urn I bought online?',
      a: 'No. Under the FTC Funeral Rule, the funeral home must accept an urn you buy from any seller — online, from an artisan, from another funeral home — and it may not charge a handling, receiving, or inspection fee. If a provider quotes you such a fee, that is a violation of federal law.',
    },
    {
      q: 'What size urn do I need?',
      a: 'The standard rule of thumb used across the industry is about one cubic inch of capacity for every pound of body weight: a person who weighed 180 pounds generally needs an urn of at least 180 cubic inches, and most full-size adult urns hold roughly 200 cubic inches. When in doubt, size up — a little extra room makes the transfer easier.',
    },
    {
      q: 'Can I fly with cremated remains?',
      a: 'Yes, on U.S. domestic flights you can carry ashes in carry-on luggage, but TSA guidance is to use a temporary container that can pass through an x-ray machine. Thick-walled metal urns may not screen properly and can be denied, so many families travel with a wood or plastic temporary container and transfer the ashes into the decorative urn after landing.',
    },
    {
      q: 'Does the type of urn affect where I can place the ashes?',
      a: 'Yes. Biodegradable urns are designed for ground or water burial and break down naturally; sealed metal urns hold up best for long-term display at home; a columbarium niche may set its own size limits, so measure the niche before buying. Our companion guide covers the legal side — <a href="/guides/scattering-ashes-laws-costs/">scattering ashes: laws and costs</a>.',
    },
    {
      q: 'Do I have to spend a lot on an urn for it to be "dignified"?',
      a: 'No. The dignity comes from what the urn means to your family, not the price tag. A simple wood or ceramic urn holds ashes exactly as well as an expensive one, and keepsake urns let each family member have a personal portion without multiplying the cost.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Urns: types, costs & where to buy', url: SITE_URL + '/guides/urn-costs-guide/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Urns: types, costs & where to buy</nav>
      <JsonLd data={articleJsonLd({
        title: 'Urns: Types, Costs & Where to Buy',
        description: 'A plain-English guide to cremation urns: the main types, how to size one, your right to buy it anywhere, and what it means for the total cremation cost.',
        url: SITE_URL + '/guides/urn-costs-guide/',
        datePublished: '2026-09-24',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="urn-costs-guide" imageAlt="Urns: Types, Costs & Where to Buy"><h1>Urns: types, costs & where to buy</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> an urn is a separate purchase from the cremation itself.
          Our modeled national estimate for direct cremation is{' '}
          <strong>{fmt(A.direct_cremation.value)}</strong> — and that price does <em>not</em>{' '}
          include an urn, only a basic container for the ashes. Our modeled estimate for
          cremation with a service is <strong>{fmt(A.cremation_with_service.value)}</strong>, and
          that package price often <em>does</em> include a mid-range urn. Both figures are modeled
          estimates in August 2026 dollars, built from NFDA 2023 national medians ($2,750 for
          direct cremation; $6,280 for a funeral with viewing and cremation) adjusted for
          inflation — not quotes. The one thing almost every family should know: you do not have
          to buy the urn from the funeral home, and you will usually pay less buying it on your
          own. For a line-item estimate in your state, use our{' '}
          <Link href="/calculator/">cost calculator</Link>.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>Urn types, in plain English</h2>
        <p>
          An urn is simply a container for cremated remains — but the options can feel endless
          when you are shopping under pressure. Here is what the main types are and what each is
          best suited for:
        </p>
        <ul>
          <li><strong>Metal urns</strong> (brass, bronze, stainless steel, aluminum). Durable, seal tightly, and hold up well for long-term display at home or in a columbarium niche. They are typically one of the more expensive categories.</li>
          <li><strong>Wood urns</strong> (oak, cherry, mahogany, bamboo). A classic look for home display; can be engraved. Generally sit in the middle of the price range.</li>
          <li><strong>Ceramic and stone urns</strong> (porcelain, marble, slate). Heavier and more decorative; well suited to display at home. Ceramic tends to be more affordable than stone, though both vary widely by design.</li>
          <li><strong>Biodegradable urns</strong> (paper, salt, cornstarch, untreated wood, sand-and-gelatin blends). Made to break down naturally in soil or water. These are the right choice for ground burial or water burial — and usually among the least expensive options, which makes them a good fit for a ceremony whose whole point is returning to nature.</li>
          <li><strong>Keepsake and mini urns.</strong> Small urns that hold a portion of the ashes, so several family members can each keep some. Typically the least expensive full-urn category.</li>
          <li><strong>Cremation jewelry.</strong> Pendants, bracelets, and similar pieces that hold a tiny amount of ashes. A complement to a full-size urn rather than a replacement for one.</li>
        </ul>
        <p>
          One design detail matters more than price: the <strong>seal</strong>. A threaded or
          screwed closure keeps the ashes secure for years of handling and transport. Ask how the
          urn closes before you buy — a decorative lid with no real seal is fine for a shelf,
          less fine for a cross-country move.
        </p>

        <h2>Getting the size right</h2>
        <p>
          The sizing rule nearly every retailer and funeral director uses is simple: plan for
          about <strong>one cubic inch of urn capacity for every pound of body weight</strong>.
          A person who weighed 180 pounds generally needs an urn of at least 180 cubic inches
          (funeral.com and memorials.com both publish this as the standard guidance). That is
          why most full-size adult urns are built around roughly 200 cubic inches of capacity —
          it comfortably fits most adults.
        </p>
        <p>
          Three practical tips from that rule:
        </p>
        <ul>
          <li><strong>Compare capacity, not looks.</strong> Capacity is the interior volume in cubic inches, listed on the product page. Two urns that look the same size on a shelf can hold different amounts because of thick walls or tapered interiors.</li>
          <li><strong>Size up when unsure.</strong> A little extra room makes transferring the ashes calmer and leaves space for a small memento. An oversized urn costs about the same as a standard one.</li>
          <li><strong>Divide only what you mean to keep.</strong> If the ashes will be shared among family members or keepsakes, size the main urn for the portion it will hold — not the full amount.</li>
        </ul>
        <p>
          If the ashes will live in a columbarium niche, measure the niche first: niche
          openings are standardized by the cemetery, and an urn that is too tall simply will not
          fit. Ask the cemetery for the exact interior dimensions before you shop.
        </p>

        <h2>Your Funeral Rule rights</h2>
        <p>
          This is the section that saves people real money. Under the FTC Funeral Rule — the same
          federal rule that protects casket shoppers — you have two specific rights for urns:
        </p>
        <ul>
          <li><strong>Buy anywhere.</strong> The funeral home must accept an urn you bought from any seller — an online retailer, an artisan, another funeral home — and you cannot be required to buy the urn from them.</li>
          <li><strong>No handling fees.</strong> The provider may not charge you a fee for receiving, handling, or inspecting an urn bought elsewhere. Any such fee is illegal.</li>
        </ul>
        <p>
          The rule works the same way for caskets, which is why funeral homes routinely accept
          third-party caskets without argument. If an urn provider quotes you a handling fee,{' '}
          <Link href="/guides/funeral-rule-rights/">see the full list of your rights</Link> — and
          treat the quote as a sign to shop elsewhere.
        </p>

        <h2>Where to buy an urn</h2>
        <p>
          You have three main sources, and shopping around is the entire point of the rule
          above:
        </p>
        <ul>
          <li><strong>Funeral homes and crematories.</strong> Convenient, but typically the most expensive shelf. Ask for the urn price list separately from the funeral package.</li>
          <li><strong>Online retailers.</strong> Usually the widest selection and the lowest prices. Check the return policy and the stated capacity in cubic inches before ordering.</li>
          <li><strong>Artisans and craft shops.</strong> Handmade wood, ceramic, and stone urns can be engraved or personalized in ways mass-produced urns are not — though personalization takes time, so order early.</li>
        </ul>
        <p>
          Whatever the source, check three things: <strong>capacity</strong> (matches the sizing
          rule above), <strong>closure</strong> (a real seal, not just a decorative lid), and{' '}
          <strong>travel-friendliness</strong> if the ashes will fly. On U.S. domestic flights,
          TSA guidance is to carry ashes in a container that can pass through an x-ray machine —
          thick-walled metal urns may not screen properly and can be denied, so many families
          travel with a wood or plastic temporary container and move the ashes into the
          decorative urn after landing.
        </p>

        <h2>What this means for the total cost</h2>
        <p>
          Where the urn shows up on the bill depends on the service you choose:
        </p>
        <ul>
          <li><strong>Direct cremation</strong> (modeled national estimate{' '}
            {fmt(A.direct_cremation.value)}): the urn is separate. You will be given a basic
            container — usually simple plastic or cardboard — and anything nicer is your purchase
            to make elsewhere.</li>
          <li><strong>Cremation with a service</strong> (modeled national estimate{' '}
            {fmt(A.cremation_with_service.value)}): the package often includes a mid-range urn.
            Before upgrading through the funeral home, price the same style online — upgrades are
            a high-margin item, and your Funeral Rule right to bring your own applies here too.</li>
        </ul>
        <p>
          And the urn is only one decision among several that follow a cremation. Where the
          ashes ultimately rest — a niche, a burial plot, a scattering at a meaningful place —
          has its own rules and costs. Our companion guide walks through them:{' '}
          <Link href="/guides/scattering-ashes-laws-costs/">scattering ashes: laws and costs →</Link>
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
          <Link href="/guides/casket-buying-guide/">Casket buying guide →</Link>
          {' · '}
          <Link href="/guides/funeral-rule-rights/">Your rights under the FTC Funeral Rule →</Link>
        </p>
      <RelatedGuides currentSlug="urn-costs-guide" />
      </div>
    </>
  );
}
