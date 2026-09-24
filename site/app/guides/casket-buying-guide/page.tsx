import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL, dataset, fmt } from '../../../lib/data';
import Link from 'next/link';

const A = dataset.anchors;

export const metadata: Metadata = {
  title: 'Caskets: What They Cost and Your Right to Buy Elsewhere',
  description:
    'A plain-English guide to casket types, what caskets cost (NFDA 2023 median $2,500), and your FTC Funeral Rule right to buy a casket from any seller.',
  alternates: { canonical: SITE_URL + '/guides/casket-buying-guide/' },
  openGraph: {
    title: 'Caskets: What They Cost and Your Right to Buy Elsewhere',
    description:
      'Casket types explained, what they cost, and the Funeral Rule right most families never hear: the funeral home must accept a casket bought anywhere.',
    url: SITE_URL + '/guides/casket-buying-guide/',
  },
};

const CASKET_TYPES = [
  {
    name: 'Steel caskets (20-gauge vs. 18-gauge)',
    body: 'The most common type sold in the United States. "Gauge" measures the thickness of the steel — and it runs backward: a lower gauge number means thicker metal, so an 18-gauge steel casket is thicker than a 20-gauge one. Both are single-piece shell construction with a gasket (rubber seal) around the lid. No casket is airtight or waterproof, whatever the sales language suggests — this is an established industry fact, and no burial container prevents natural decomposition.',
  },
  {
    name: 'Stainless steel, copper, and bronze',
    body: 'Step-up metal options. Stainless steel resists rust better than regular steel; solid copper and bronze caskets are the premium metal tier and are prized for their corrosion resistance. They cost more than steel — how much more depends on the material and the seller, so compare like with like rather than assuming a name means a fixed price band.',
  },
  {
    name: 'Wood caskets (hardwood vs. softwood)',
    body: 'Wood is the traditional alternative to metal. Hardwoods — oak, cherry, maple, mahogany — are denser, take a finer finish, and typically sell above softwoods. Softwoods — pine, poplar, and willow — are lighter and simpler. A plain pine box is also the traditional casket for green burial, where biodegradable materials are the point.',
  },
  {
    name: 'Cloth-covered and composite caskets',
    body: 'A wood or fiberboard core covered in cloth, velvet, or crepe. These sit at the simpler end of the display room and are a straightforward choice when the ceremony is the focus rather than the container. Prices vary by construction, but they are generally among the less expensive options a funeral home shows.',
  },
  {
    name: 'Cremation caskets and alternative containers',
    body: 'A "cremation casket" is simply a combustible casket designed for the retort. But you do not need one: the Funeral Rule gives you the explicit right to use a simple unfinished-wood or cardboard alternative container for cremation instead of buying any casket at all. For direct cremation, this container is usually included in the package price.',
  },
  {
    name: 'Rental caskets',
    body: 'A sturdy outer shell with a removable interior insert. Your loved one is displayed in the rental casket for the viewing, and afterward the insert — not the shell — is removed for burial or cremation. Renting is a real cost saver when cremation follows the service, because you get the ceremony look of a full casket without buying one.',
  },
];

export default function CasketBuyingGuide() {
  const faqs = [
    {
      q: 'Can a funeral home charge me a fee for bringing in a casket I bought elsewhere?',
      a: 'No. Under the FTC Funeral Rule, the funeral home must accept a casket you buy from any seller — including online retailers — and it may not charge a handling, receiving, or inspection fee. If a provider quotes you such a fee, that is a violation of federal law.',
    },
    {
      q: 'Does the funeral home have to show me a Casket Price List?',
      a: 'Yes. The Funeral Rule requires funeral homes to give you an itemized Casket Price List before you select a casket — not after, and not only when you ask. Ask to see it before you enter the selection room so you can compare it against outside prices.',
    },
    {
      q: 'What is the difference between 20-gauge and 18-gauge steel?',
      a: 'Gauge measures steel thickness, and it runs backward: lower numbers mean thicker steel. An 18-gauge casket is thicker than a 20-gauge one. Thicker steel resists denting and corrosion better, but the practical difference for burial is modest — and neither gauge makes a casket airtight or able to prevent decomposition.',
    },
    {
      q: 'Is a more expensive casket better at preserving the body?',
      a: 'No casket — at any price — preserves the body indefinitely or keeps out water, air, and soil forever. That is a physical fact, not a warranty the industry can offer. Choose a casket for appearance, ceremony, and budget, not for preservation claims.',
    },
    {
      q: 'Can I use a rental casket?',
      a: 'Yes. Rental caskets have a removable interior: the shell is reused for viewings, and the insert is removed afterward for burial or cremation. They are a sensible option when cremation follows the service and you want a traditional-looking viewing without buying a casket.',
    },
    {
      q: 'Do I need a casket at all for cremation?',
      a: 'No. For cremation you may use a simple alternative container — unfinished wood or cardboard — and the Funeral Rule guarantees that right. For direct cremation, the alternative container is typically included in the package price.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Casket buying guide', url: SITE_URL + '/guides/casket-buying-guide/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Casket buying guide</nav>
        <JsonLd data={articleJsonLd({
          title: 'Caskets: What They Cost and Your Right to Buy Elsewhere',
          description: 'A plain-English guide to casket types, what caskets cost (NFDA 2023 median $2,500), and your FTC Funeral Rule right to buy a casket from any seller.',
          url: SITE_URL + '/guides/casket-buying-guide/',
          datePublished: '2026-09-24',
          dateModified: LAST_UPDATED,
          siteUrl: SITE_URL,
        })} />
        <h1>Caskets: what they cost, and your right to buy elsewhere</h1>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> a metal burial casket had a national median price of <strong>$2,500</strong> in
          2023 (NFDA), and the casket is usually the largest single merchandise line item on a funeral bill. The part
          most families never hear: under the FTC Funeral Rule, you may buy a casket from <em>any</em> seller —
          including online — and the funeral home <strong>must</strong> accept it, with no handling or receiving fee,
          and cannot require you to buy it from them. Set a casket budget before you look, compare like with like,
          and read the Casket Price List before you choose.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>What caskets actually cost</h2>
        <p>
          Start with the one citable number: the National Funeral Directors Association reported a median price of
          $2,500 for a metal burial casket in its 2023 General Price List survey. A median is the middle price — half
          of caskets sold cost more, half cost less — so it is a benchmark, not a quote. On our site, the casket is
          folded into the burial anchors rather than priced separately: a traditional funeral with burial carries a
          modeled national estimate of <strong>{fmt(A.traditional_burial.value)}</strong> in August 2026 dollars,
          which includes the casket alongside the funeral home's services and cemetery costs (
          <Link href="/methodology/">how we built these figures</Link>).
        </p>
        <p>
          Beyond the median, casket prices vary enormously by material, seller, and region — so much that giving
          "typical ranges" here would be guessing. That is exactly why the price-list rights below matter more than
          any number: the defense against overpaying is transparency, not a chart.
        </p>

        <h2>Casket types, in plain English</h2>
        {CASKET_TYPES.map((t) => (
          <section key={t.name} aria-label={t.name}>
            <h3>{t.name}</h3>
            <p>{t.body}</p>
          </section>
        ))}

        <h2>Your rights under the Funeral Rule</h2>
        <p>
          This is the section that saves people real money. The FTC Funeral Rule gives you three specific casket
          rights — see our full <Link href="/guides/funeral-rule-rights/">Funeral Rule rights guide</Link> for the
          complete list:
        </p>
        <ol>
          <li>
            <strong>Buy from anyone.</strong> You may purchase a casket from any seller — an online retailer, a
            warehouse club, a monastery woodshop — and the funeral home must accept it. They cannot refuse it, delay
            the service because of it, or steer you away with scare talk about "quality."
          </li>
          <li>
            <strong>No handling fees.</strong> The funeral home may not charge you a fee for receiving, handling, or
            inspecting a casket bought elsewhere. Any such fee is illegal.
          </li>
          <li>
            <strong>See the Casket Price List first.</strong> Before you select a casket, the funeral home must show
            you an itemized Casket Price List. Ask for it the moment the conversation turns to caskets — before
            entering the selection room, not after you have fallen for one.
          </li>
        </ol>
        <p>
          One more protection worth knowing: funeral homes must also show you the General Price List before discussing
          any goods or services, and they cannot require embalming as a condition of using their facilities unless it
          is actually required by law — which it almost never is.
        </p>

        <h2>How to buy smart</h2>
        <ol>
          <li>
            <strong>Set a casket budget before you look.</strong> The casket is the emotional centerpiece of the
            selection room, and it is usually the largest single merchandise line item. Decide a number at home —
            when you are calm — and treat it as firm. Salespeople earn more when you spend more; the budget is your
            counterweight.
          </li>
          <li>
            <strong>Compare like with like.</strong> An 18-gauge steel casket from the funeral home and an 18-gauge
            steel casket online are the same class of product. "Gasketed," "protective," and "sealer" are marketing
            terms — every metal casket in the showroom is gasketed. Judge materials and construction, not adjectives.
          </li>
          <li>
            <strong>Ignore preservation claims.</strong> No casket, at any price, prevents decomposition or keeps
            out water and soil permanently. If a salesperson implies otherwise, they are selling, not informing.
          </li>
          <li>
            <strong>Consider renting when cremation follows.</strong> If the plan is a viewing followed by cremation,
            a rental casket gives you the traditional ceremony look without a purchase. Pair it with the alternative
            container you are already entitled to use for the cremation itself.
          </li>
          <li>
            <strong>Shop the whole bill, not just the casket.</strong> A cheap casket at an expensive funeral home
            can still be an expensive funeral. Use our <Link href="/guides/compare-funeral-homes/">guide to
            comparing funeral homes</Link> and the <Link href="/guides/funeral-cost-2026-breakdown/">2026 cost
            breakdown</Link> to keep the total in view.
          </li>
        </ol>

        <h2>Terms you'll hear in the selection room</h2>
        <p>
          <strong>Gauge</strong> (steel thickness, lower number = thicker); <strong>gasketed / sealer</strong> (has a
          rubber lid seal — standard on metal caskets, not a premium feature); <strong>half-couch vs. full-couch</strong>
          (lid opens halfway or fully for viewing); <strong>cap panel</strong> (the fabric lining inside the lid);
          <strong>alternative container</strong> (the simple box you may use for cremation instead of a casket). For
          the full vocabulary, see the <Link href="/guides/funeral-glossary/">funeral terms glossary</Link>.
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
          <Link href="/guides/funeral-rule-rights/">Your full Funeral Rule rights →</Link>
          {' · '}
          <Link href="/guides/compare-funeral-homes/">How to compare funeral homes →</Link>
          {' · '}
          <Link href="/guides/funeral-cost-2026-breakdown/">2026 funeral cost breakdown →</Link>
          {' · '}
          <Link href="/guides/funeral-glossary/">Funeral terms glossary →</Link>
        </p>
      </div>
    </>
  );
}
