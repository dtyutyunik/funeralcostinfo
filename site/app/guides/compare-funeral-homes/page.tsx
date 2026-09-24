import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL, dataset, fmt } from '../../../lib/data';
import Link from 'next/link';

const A = dataset.anchors;

export const metadata: Metadata = {
  title: 'How to Compare Funeral Homes & Read the Price List',
  description:
    'How to use the General Price List (GPL) to compare funeral homes line by line, your rights under the FTC Funeral Rule, red flags, and how to negotiate without awkwardness.',
  alternates: { canonical: SITE_URL + '/guides/compare-funeral-homes/' },
  openGraph: {
    title: 'How to Compare Funeral Homes & Read the Price List',
    description:
      'Call three providers, compare the same line items, and know your rights. A plain-English guide to the GPL and fair comparison.',
    url: SITE_URL + '/guides/compare-funeral-homes/',
  },
};

const TITLE = 'How to Compare Funeral Homes & Read the Price List';
const DESCRIPTION =
  'How to use the General Price List (GPL) to compare funeral homes line by line, your rights under the FTC Funeral Rule, red flags, and how to negotiate without awkwardness.';
const URL = SITE_URL + '/guides/compare-funeral-homes/';

export default function CompareFuneralHomesGuide() {
  const faqs = [
    {
      q: 'Can a funeral home refuse to give me prices over the phone?',
      a: 'No. Under the FTC Funeral Rule, a funeral home must give you price information by phone if you ask. They must also hand you a written General Price List (GPL) in person before discussing your options. A provider that refuses to quote prices over the phone is breaking federal law — treat that as a red flag and call someone else.',
    },
    {
      q: 'Do I have to buy a package, or can I pick individual items?',
      a: 'You can pick individual items. The Funeral Rule gives you the right to choose only the goods and services you want, and providers must itemize every charge on a written statement before you pay. Packages are convenient for some families, but compare the package price against the sum of its itemized parts — and against the same items priced individually at a competitor.',
    },
    {
      q: 'What is the "basic services fee" on the GPL?',
      a: 'The basic services fee is the one charge every funeral home is allowed to add to every arrangement. It covers overhead: staff availability, licenses, planning the service, securing permits, and filing the death certificate. The NFDA 2023 median was $2,459 (before inflation adjustment). It is non-declinable, but the amount varies by provider, so compare it directly across quotes.',
    },
    {
      q: 'Can a funeral home charge me for embalming I did not request?',
      a: 'No. Embalming cannot be billed without your permission, and a provider may only claim embalming is "required" when it is actually true (for example, in the narrow cases some states mandate, such as interstate transport by common carrier). No state requires routine embalming. If a quote includes embalming for a direct cremation or direct burial, question it — refrigeration is the standard alternative.',
    },
    {
      q: 'Is it okay to negotiate with a funeral home?',
      a: 'Yes — and it is more common than people think. Asking "what is your least expensive option for direct cremation?" or "which of these line items can we remove?" is expected, not rude. Funeral homes work with grieving, cost-conscious families every day. The itemized GPL exists precisely so you can question individual lines.',
    },
    {
      q: 'Should I compare cemeteries separately from funeral homes?',
      a: 'Yes. The cemetery bill (plot, opening and closing of the grave, and any required vault or liner) is often a separate transaction from the funeral home, and prices vary widely between cemeteries. Since no state requires a vault by law — that is cemetery policy, not legislation — a cheaper cemetery with a liner requirement can still beat an expensive one with no requirement. Get the cemetery quote in writing too.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Compare funeral homes', url: URL },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Compare funeral homes</nav>
        <JsonLd data={articleJsonLd({
          title: TITLE,
          description: DESCRIPTION,
          url: URL,
          datePublished: '2026-09-24',
          dateModified: LAST_UPDATED,
          siteUrl: SITE_URL,
        })} />
        <h1>How to compare funeral homes & read the price list</h1>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> call at least three providers, get each one's
          General Price List (GPL), and compare the same line items side by side. The GPL —
          a standardized, itemized price list every funeral home must provide by law — is your
          main comparison tool. Never compare one provider's "package" against another's
          itemized quote; rebuild the same arrangement at each provider and compare totals.
        </p>
        <p className="updated">Figures: modeled national estimates in August 2026 dollars. Last updated {LAST_UPDATED}.</p>

        <h2>Your rights under the Funeral Rule</h2>
        <p>
          The FTC Funeral Rule gives you four concrete rights that make comparison shopping
          possible. Knowing them changes the dynamic of every conversation you have with a
          provider:
        </p>
        <ol>
          <li>
            <strong>Prices by phone.</strong> If you ask, a funeral home must give you price
            information over the telephone. You do not have to visit in person to start
            comparing.
          </li>
          <li>
            <strong>A written GPL before the sales talk.</strong> In person, they must hand
            you a written General Price List before discussing your options — not after
            you've been steered toward a package.
          </li>
          <li>
            <strong>An itemized statement before you pay.</strong> Before money changes
            hands, you are entitled to a written statement listing every good and service
            you are buying, with its price. No lump sums you can't inspect.
          </li>
          <li>
            <strong>You choose what to buy.</strong> A funeral home may not require you to
            buy the casket (or any other item) from them, and you have the right to select
            only the goods and services you want rather than a pre-built package.
          </li>
        </ol>
        <p>
          Two more protections worth knowing: embalming may only be described as
          "required" when that is actually true — and no state requires routine embalming —
          and a provider must disclose that itemized prices are available if they present
          package pricing. <Link href="/guides/funeral-rule-rights/">Read the full guide to your Funeral Rule rights →</Link>
        </p>

        <h2>How to read the General Price List</h2>
        <p>
          The GPL lists 16 standardized categories of goods and services: the basic
          services fee, transfer of remains to the funeral home, embalming and other
          preparation, use of facilities and staff for viewings, funeral ceremonies,
          memorial services, and graveside services, hearse and limousine, caskets, outer
          burial containers (vaults and liners), and the simpler arrangements — direct
          cremation, immediate burial, and receiving or forwarding remains to another
          funeral home.
        </p>
        <p>
          Start with the <strong>basic services fee</strong>. Every provider charges one
          version of it, it cannot be declined, and it covers overhead — staff
          availability, planning, permits, and filing paperwork. The NFDA 2023 median was
          $2,459, cited via our model. Because it's unavoidable, it's the single most
          useful line for a first-pass comparison: a provider whose basic fee is hundreds
          higher than a competitor's is likely more expensive across the board.
        </p>
        <p>
          Next, watch for <strong>combined vs. separately-listed charges</strong>. Some
          GPLs roll "use of facilities for viewing" and "staff for viewing" into one line;
          others split supervision, facilities, and staff into separate charges that add
          up to more than a competitor's single line. This is the most common reason two
          quotes look similar until the totals diverge. Rebuild each quote as one column
          of the same spreadsheet and compare the sum, not the line count.
        </p>
        <p>
          Finally, understand <strong>cash advance items</strong>. These are third-party
          costs the funeral home pays on your behalf — cemetery fees, clergy honoraria,
          death certificates, newspaper obituaries, flowers. They are pass-throughs, but
          some providers add a markup or service fee on top. The itemized statement must
          show them, so ask: "Is there a markup on the cash advances, and how much?"
          Unfamiliar with a term on the list? <Link href="/guides/funeral-glossary/">Look it up in our funeral glossary →</Link>
        </p>

        <h2>Comparing apples to apples</h2>
        <p>
          The only fair comparison is the same arrangement, priced at three providers.
          Decide the service type first — our guide to <Link href="/guides/funeral-service-types/">funeral service types</Link> explains
          what each one includes — then ask every provider for the total of exactly those
          line items.
        </p>
        <p>
          A worked example: take <strong>direct cremation</strong>. Our modeled national
          estimate is {fmt(A.direct_cremation.value)}, expressed in August 2026 dollars —
          a planning benchmark, not a quote. Ask each provider: "What is your total for a
          direct cremation, including the basic services fee, transfer, the cremation
          itself, the alternative container, and the container for the ashes — and which
          cash advances are separate?" Then check what's actually bundled: one provider's
          quote may include the crematory fee while another lists it as a cash advance,
          and some include a basic urn while others charge extra.
        </p>
        <p>
          Do the same exercise for a traditional funeral if that's what you're planning —
          the modeled national estimate is {fmt(A.traditional_burial.value)} in August
          2026 dollars — with the casket and cemetery costs broken out separately. And
          remember that independent chapter surveys exist as reality checks: the{' '}
          <a href="https://www.fingerlakesfunerals.org/price-survey" rel="noopener noreferrer">FCA Finger Lakes 2025 price survey</a>{' '}
          is one example of an independent Funeral Consumers Alliance chapter publishing
          real local prices. If your area has a chapter survey, compare provider quotes
          against it.
        </p>

        <h2>Red flags</h2>
        <p>Walk away — or at least get a second quote — when a provider does any of this:</p>
        <ul>
          <li><strong>Won't give prices by phone.</strong> That's not a policy; it's a Funeral Rule violation.</li>
          <li><strong>Pushes packages before showing the GPL.</strong> The law says the written price list comes before the sales discussion.</li>
          <li><strong>Claims embalming or a vault is "required by law."</strong> Neither is. No state requires routine embalming, and vaults are cemetery policy, not legislation.</li>
          <li><strong>Won't itemize.</strong> You are entitled to a written, itemized statement before paying. "It's all in the package" is not an answer.</li>
          <li><strong>Rushes signatures.</strong> Grief makes urgency feel normal; high-pressure timing is a sales tactic, not a legal requirement. Take the GPL home.</li>
        </ul>

        <h2>Negotiating without awkwardness</h2>
        <p>
          Price negotiation at a funeral home feels wrong to many people — but to the
          provider, it's routine. They serve cost-conscious families every day, and the
          itemized GPL exists precisely so individual lines can be questioned. You don't
          need tactics; you need three sentences:
        </p>
        <ul>
          <li>"What is your least expensive option for <em>X</em>?"</li>
          <li>"Which of these line items can we remove?"</li>
          <li>"Can we use our own casket / urn / container?" (The answer must be yes, without a fee.)</li>
        </ul>
        <p>
          Start from the simplest arrangement and add only what matters to you, rather
          than starting from a package and trimming. And put the final numbers through
          our <Link href="/calculator/">calculator</Link> to see how a provider's quote
          compares to the modeled national estimate for your state.
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
          <Link href="/guides/funeral-rule-rights/">Your Funeral Rule rights →</Link>
          {' · '}
          <Link href="/guides/funeral-glossary/">Funeral terms glossary →</Link>
          {' · '}
          <Link href="/guides/funeral-service-types/">Funeral service types →</Link>
        </p>

        <p className="updated">Data vintage: {VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>
      </div>
    </>
  );
}
