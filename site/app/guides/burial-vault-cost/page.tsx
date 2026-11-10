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
  title: 'How Much Does a Burial Vault Cost? Liners, Vaults & Your Rights',
  description:
    'A plain-English guide to burial vault and grave liner prices, the difference between them, why cemeteries require an outer burial container, and your Funeral Rule rights.',
  alternates: { canonical: SITE_URL + '/guides/burial-vault-cost/' },
  openGraph: {
    title: 'How Much Does a Burial Vault Cost? Liners, Vaults & Your Rights',
    description:
      'Burial vault and grave liner prices explained, why cemeteries require an outer burial container, and the Funeral Rule rights that protect you.',
    url: SITE_URL + '/guides/burial-vault-cost/',
  },
};

export default function BurialVaultCost() {
  const faqs = [
    {
      q: 'Does the law require a burial vault or grave liner?',
      a: 'No. No state or federal law requires a burial vault or a grave liner. Many cemeteries require an outer burial container as their own rule, because it keeps the ground from sinking as the casket deteriorates and lets heavy mowing and maintenance equipment pass over the grave. If a funeral provider tells you the law requires one, ask which law; what they usually mean is the cemetery policy.',
    },
    {
      q: 'What is the difference between a grave liner and a burial vault?',
      a: 'A grave liner is a partial container: it covers the top and sides of the casket but has no sealed bottom. A burial vault fully encloses the casket and is usually sealed and lined. Liners are the cheaper option, typically $700 to $1,000, while vaults range from about $900 to $13,000 and premium metal-clad models can exceed $15,000.',
    },
    {
      q: 'Can I buy a burial vault from a third-party seller?',
      a: 'Yes. Under the FTC Funeral Rule, you may buy a vault or liner from any seller, and the funeral home must accept it and may not charge a handling fee for it. The same right applies to caskets and urns. Before showing you outer burial containers, the provider must also give you a price list with descriptions of each model.',
    },
    {
      q: 'Will a burial vault preserve the body?',
      a: 'No. A vault slows the intrusion of water and soil, but it does not stop decomposition, and it is illegal for a funeral provider to claim a vault will preserve a body forever or guarantee that it keeps water, dirt, or other debris out. Any salesperson who promises permanent preservation is making a claim federal law prohibits.',
    },
    {
      q: 'Is a burial vault included in the cost of a funeral with burial?',
      a: 'Often not, which surprises many families. Our modeled national estimate for a funeral with viewing and burial is $9,140, and that figure does not include a vault. The modeled estimate for the same funeral with a vault is $11,010. Both are NFDA 2023 medians adjusted to August 2026 dollars. Always ask whether the vault or liner is a separate line item on your statement.',
    },
    {
      q: 'Are there extra fees for placing the vault in the grave?',
      a: 'There can be. Cemeteries may add a setting or installation fee for placing the container in the grave and lowering the casket into it. Ask the cemetery directly whether that fee is included in the container price or billed separately, and get the answer in writing before you sign anything.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'How much does a burial vault cost?', url: SITE_URL + '/guides/burial-vault-cost/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › How much does a burial vault cost?</nav>
      <JsonLd data={articleJsonLd({
        title: 'How Much Does a Burial Vault Cost? Liners, Vaults & Your Rights',
        description: 'A plain-English guide to burial vault and grave liner prices, the difference between them, why cemeteries require an outer burial container, and your Funeral Rule rights.',
        url: SITE_URL + '/guides/burial-vault-cost/',
        datePublished: '2026-10-23',
        dateModified: PAGE_DATES['/guides/burial-vault-cost/']?.updated ?? LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="burial-vault-cost" imageAlt="How Much Does a Burial Vault Cost? Liners, Vaults & Your Rights"><h1>How much does a burial vault cost?</h1></GuideHero>
        <Byline published={PAGE_DATES['/guides/burial-vault-cost/']?.published} updated={PAGE_DATES['/guides/burial-vault-cost/']?.updated} />

        <p className="answer-first">
          <strong>Quick answer:</strong> a grave liner typically costs{' '}
          <strong>$700 to $1,000</strong>, and a burial vault ranges from about{' '}
          <strong>$900 to $13,000</strong>, with premium metal-clad vaults exceeding $15,000
          (Funeral Consumers Alliance). No law requires either one; most cemeteries require an
          outer burial container as their own rule. The container is also easy to overlook in
          the total bill: our modeled national estimate for a funeral with viewing and burial
          is <strong>{fmt(A.traditional_burial.value)}</strong>, and that figure does{' '}
          <em>not</em> include a vault. Our modeled estimate for the same funeral with a vault
          is <strong>{fmt(A.burial_with_vault.value)}</strong>. Both figures are modeled
          estimates in August 2026 dollars, built from NFDA 2023 national medians adjusted for
          inflation, not quotes. For a line-item estimate in your state, use our{' '}
          <Link href="/calculator/">cost calculator</Link>.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>Burial vault vs grave liner: the difference</h2>
        <p>
          Both products are outer burial containers: boxes that go into the grave first, with
          the casket lowered inside them. The difference is how much of the casket they cover
          and whether they seal:
        </p>
        <ul>
          <li><strong>Grave liner.</strong> A partial container that covers the top and sides of the casket, with no sealed bottom. It does the basic job a cemetery cares about, supporting the soil above the grave, at the lowest price.</li>
          <li><strong>Burial vault.</strong> A container that fully encloses the casket, and is usually sealed and lined. Vaults add a layer of protection against water and soil intrusion, and they are priced well above liners because of the materials and construction involved.</li>
        </ul>
        <p>
          If a cemetery requires an outer burial container and cost is the priority, a basic
          grave liner usually satisfies the requirement. A vault is an upgrade you choose, not
          a legal necessity, a distinction the next sections explain.
        </p>

        <h2>What each type costs</h2>
        <p>
          Prices vary by material and construction. The main tiers, from least to most
          expensive:
        </p>
        <ul>
          <li><strong>Unlined concrete grave liner:</strong> typically $700 to $1,000 (Funeral Consumers Alliance of Georgia). Basic concrete liners from industry suppliers start around $895.</li>
          <li><strong>Lined and sealed concrete vault:</strong> concrete vaults with a plastic or polymer lining and a seal generally run $1,200 to $4,500 or more (industry supplier pricing).</li>
          <li><strong>Metal-lined vault:</strong> vaults lined with stainless steel, copper, or bronze sit at the higher end of the overall $900 to $13,000 range for burial vaults (Funeral Consumers Alliance).</li>
          <li><strong>Premium double-wall vault:</strong> top-tier double-wall construction, including metal-clad models, can exceed $15,000.</li>
        </ul>
        <p>
          One cost is easy to miss: the cemetery may add a <strong>setting or installation
          fee</strong> for placing the container in the grave. Ask whether that fee is included
          in the price you are quoted or billed separately, before you commit.
        </p>
        <p>
          There is also a much smaller cousin of the burial vault: the <strong>urn vault</strong>,
          a small container used when cremated ashes are buried in a cemetery plot. If you are
          comparing containers for ashes rather than a casket, start with our{' '}
          <Link href="/guides/urn-costs-guide/">guide to urn types and costs</Link>.
        </p>

        <h2>Why cemeteries require one (and the law does not)</h2>
        <p>
          Families are often told a vault is "required," and it is worth being precise about
          who requires it. <strong>No state or federal law requires a burial vault or a grave
          liner.</strong> The requirement comes from the cemetery itself, and cemeteries have
          practical reasons for it:
        </p>
        <ul>
          <li><strong>Preventing sunken ground.</strong> As a casket deteriorates over the years, the soil above it settles and sinks. A rigid outer container keeps the grave surface level.</li>
          <li><strong>Supporting heavy equipment.</strong> Cemeteries mow and maintain grounds with heavy machinery that passes over graves; a container keeps that weight from collapsing the grave.</li>
        </ul>
        <p>
          Because it is a cemetery rule rather than a law, the details are set by the cemetery:
          ask for its outer burial container policy in writing, and confirm that a basic liner
          satisfies it before paying vault prices.
        </p>

        <h2>What a burial vault does not do</h2>
        <p>
          Vaults are sometimes sold with promises they cannot keep, so the FTC draws a clear
          line. It is <strong>illegal for a funeral provider to claim that a vault will preserve
          a body forever</strong>, or to guarantee that it keeps water, dirt, or other debris
          out of the casket. The honest version is narrower:
        </p>
        <ul>
          <li>A sealed, lined vault <strong>slows</strong> the intrusion of water and soil compared with an unlined liner.</li>
          <li>No vault or liner <strong>stops decomposition</strong>, and none preserves a body permanently.</li>
        </ul>
        <p>
          If a salesperson leans on preservation claims or on guilt about "protecting" your
          loved one, that is a sales tactic, not a fact, and it is exactly the kind of claim the
          Funeral Rule prohibits. Our guide to{' '}
          <Link href="/guides/funeral-rule-rights/">your Funeral Rule rights</Link> covers the
          other misrepresentations to watch for.
        </p>

        <h2>Your Funeral Rule rights</h2>
        <p>
          The FTC Funeral Rule gives you specific protections when you shop for an outer burial
          container:
        </p>
        <ul>
          <li><strong>Price list first.</strong> Before showing you outer burial containers, the provider must give you a price list with descriptions of the containers it sells.</li>
          <li><strong>Buy anywhere.</strong> You may buy a vault or liner from a third-party seller, such as a vault company or an online retailer, and the funeral home must accept it.</li>
          <li><strong>No handling fees.</strong> The provider may not charge a handling fee for a container you bought elsewhere. The same rule protects third-party caskets and urns.</li>
        </ul>
        <p>
          These rights matter because the funeral home markup on vaults can be substantial. If
          you are also shopping for the casket itself, our{' '}
          <Link href="/guides/casket-buying-guide/">casket buying guide</Link> explains how the
          same buy-anywhere rule applies there.
        </p>

        <h2>How a vault fits into the total bill</h2>
        <p>
          The vault is one of several cemetery-side costs that sit on top of the funeral home
          charges, and it is one of the easiest to overlook when comparing quotes:
        </p>
        <ul>
          <li><strong>Funeral with viewing and burial</strong> (modeled national estimate{' '}
            {fmt(A.traditional_burial.value)}): this figure does <em>not</em> include a vault,
            so a cemetery-required container is an additional cost on top of it.</li>
          <li><strong>The same funeral with a vault</strong> (modeled national estimate{' '}
            {fmt(A.burial_with_vault.value)}): adding the vault raises the modeled total by
            roughly the price of a mid-range container.</li>
        </ul>
        <p>
          The vault is not the only cemetery line item. The plot itself and the marker add
          their own costs, covered in our guides to{' '}
          <Link href="/guides/burial-plot-costs/">burial plot costs</Link> and{' '}
          <Link href="/guides/headstone-costs/">headstone costs</Link>. For the full picture of
          what a funeral bill includes, see our{' '}
          <Link href="/guides/funeral-cost-2026-breakdown/">funeral cost breakdown</Link>, or
          build a line-item estimate for your state in the{' '}
          <Link href="/calculator/">cost calculator</Link>.
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
          <Link href="/guides/burial-plot-costs/">Burial plot costs →</Link>
          {' · '}
          <Link href="/guides/headstone-costs/">Headstone costs →</Link>
          {' · '}
          <Link href="/guides/funeral-rule-rights/">Your rights under the FTC Funeral Rule →</Link>
        </p>
      <RelatedGuides currentSlug="burial-vault-cost" />
      </div>
    </>
  );
}
