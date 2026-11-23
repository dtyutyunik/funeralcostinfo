import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { PAGE_DATES } from '../../../lib/page-dates';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL, getState, fmt, fmtRange } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

const NV = getState('nevada')!;
const DC = NV.estimates.direct_cremation;
const CS = NV.estimates.cremation_with_service;

export const metadata: Metadata = {
  title: 'Average Cost of Cremation in Nevada (2026): Direct Cremation $3,030',
  description:
    'The average cost of cremation in Nevada in 2026: direct cremation is modeled at $3,030 and cremation with a service at $6,920. What each includes, the Nevada rules that move the price, and how to compare Las Vegas and Reno providers.',
  alternates: { canonical: SITE_URL + '/guides/nevada-cremation-cost/' },
  openGraph: {
    title: 'Average Cost of Cremation in Nevada (2026): Direct Cremation $3,030',
    description:
      'Nevada cremation costs in 2026: direct cremation vs. cremation with a service, what each includes, state rules, and how to get an exact price from a General Price List.',
    url: SITE_URL + '/guides/nevada-cremation-cost/',
  },
};

export default function NevadaCremationCostGuide() {
  const faqs = [
    {
      q: 'What is the average cost for cremation in Nevada?',
      a: `It depends on which product you mean. Direct cremation in Nevada, with no viewing or ceremony, is modeled at ${fmt(DC.point)} in 2026 (illustrative range ${fmtRange(DC)}). Cremation with a viewing and service is modeled at ${fmt(CS.point)} (range ${fmtRange(CS)}). Nevada sits at the national price level (BEA 2024 regional price parity ${NV.rpp_all_items.toFixed(1)}), so both figures match the national anchors. Individual providers, especially cremation specialists in Las Vegas and Reno, can price well below the modeled midpoint.`,
    },
    {
      q: 'How much is direct cremation in Nevada?',
      a: `Our modeled 2026 estimate for direct cremation in Nevada is ${fmt(DC.point)} (illustrative range ${fmtRange(DC)}). That covers transfer of the body, the funeral home's basic services fee, refrigeration, a basic cremation container, and the cremation itself. It does not include an upgraded urn, a cemetery niche, or certified copies of the death certificate.`,
    },
    {
      q: 'How much does cremation with a service cost in Nevada?',
      a: `Cremation with a viewing and service is modeled at ${fmt(CS.point)} in Nevada in 2026 (illustrative range ${fmtRange(CS)}). It follows the same arrangement as a traditional funeral, with viewing and ceremony, except that cremation replaces burial at the end. Cemetery charges for the ashes, such as a niche, are separate.`,
    },
    {
      q: 'Is embalming required before cremation in Nevada?',
      a: 'No. Nevada rules bar any crematory, funeral home, or cemetery from requiring the remains to be embalmed before cremation, interment, or other disposition, unless the State Board of Health orders it. Providers instead refrigerate the body: Nevada facilities must keep remains embalmed or refrigerated at 42°F or less within 24 hours of receiving them, and refrigeration normally costs far less than embalming.',
    },
    {
      q: 'What is the cheapest cremation option in Nevada?',
      a: `Direct cremation, with no viewing or ceremony, modeled at ${fmt(DC.point)}. Most Nevada providers cluster around Las Vegas, Henderson, and Reno, so families in those metros usually have several General Price Lists to compare, and that comparison is where most of the savings are. Whole-body donation to a medical program can cost nothing when a program accepts the donation.`,
    },
    {
      q: 'Do I have to buy a casket for a cremation in Nevada?',
      a: 'No. Under the FTC Funeral Rule, you have the right to use a simple alternative container, such as unfinished wood or cardboard, instead of buying a casket, and no provider may require you to buy a casket from them. If you want a viewing before the cremation, many providers offer a rental casket.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Average cost of cremation in Nevada', url: SITE_URL + '/guides/nevada-cremation-cost/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Average cost of cremation in Nevada</nav>
      <JsonLd data={articleJsonLd({
        title: 'Average Cost of Cremation in Nevada (2026): Direct Cremation $3,030',
        description: 'The average cost of cremation in Nevada in 2026: direct cremation is modeled at $3,030 and cremation with a service at $6,920. What each includes, the Nevada rules that move the price, and how to compare Las Vegas and Reno providers.',
        url: SITE_URL + '/guides/nevada-cremation-cost/',
        datePublished: '2026-11-23',
        dateModified: PAGE_DATES['/guides/nevada-cremation-cost/']?.updated ?? LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="nevada-cremation-cost" imageAlt="Average cost of cremation in Nevada in 2026"><h1>Average cost of cremation in Nevada (2026)</h1></GuideHero>
        <Byline published={PAGE_DATES['/guides/nevada-cremation-cost/']?.published} updated={PAGE_DATES['/guides/nevada-cremation-cost/']?.updated} />

        <p className="answer-first">
          <strong>Quick answer:</strong> the average cost of cremation in Nevada in 2026 is{' '}
          <strong>{fmt(DC.point)}</strong> for direct cremation with no service, and{' '}
          <strong>{fmt(CS.point)}</strong> for cremation with a viewing and service. These are
          modeled estimates in August 2026 dollars, not quotes: Nevada sits at the national price
          level (BEA 2024 regional price parity {NV.rpp_all_items.toFixed(1)}), so the state
          figures match the national anchors built from the NFDA 2023 medians. For the full state
          picture, including burial, see <Link href="/funeral-costs/nevada/">funeral costs in Nevada</Link>.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>The two numbers behind the Nevada average</h2>
        <p>
          "Cremation cost" searches mix two very different products, and the Nevada average only
          makes sense split that way:
        </p>
        <ul>
          <li>
            <strong>Direct cremation: {fmt(DC.point)}</strong> (illustrative range {fmtRange(DC)}).
            No viewing, no ceremony. The provider transfers the body, handles the paperwork and
            permits, refrigerates, and cremates in a basic container, then returns the ashes in a
            simple container.
          </li>
          <li>
            <strong>Cremation with a viewing and service: {fmt(CS.point)}</strong> (illustrative
            range {fmtRange(CS)}). A funeral in everything but the ending: embalming and
            preparation, viewing, ceremony, and staff, followed by cremation instead of burial.
            The ceremony can also come after the cremation, centered on the urn.
          </li>
        </ul>
        <p>
          Neither figure includes an upgraded urn, a cemetery niche or plot for the ashes, or
          certified copies of the death certificate. Cremation is also where Nevada is heading:
          the NFDA projects 83.1% of Nevada dispositions will be cremations by 2035, among the
          highest projected cremation shares in the country, so cremation pricing is the
          comparison most Nevada families end up making.
        </p>

        <h2>Nevada rules that move the price</h2>
        <ul>
          <li>
            <strong>Embalming cannot be required.</strong> No Nevada crematory, funeral home, or
            cemetery may require the remains to be embalmed before cremation, interment, or other
            disposition, unless the State Board of Health orders it. If a quote includes embalming
            for a direct cremation, ask why.
          </li>
          <li>
            <strong>Refrigeration is the default.</strong> A Nevada crematory, funeral
            establishment, or direct-cremation facility must ensure each body is embalmed or
            refrigerated at 42°F or less within 24 hours of receiving the remains. Refrigeration
            is a normal, usually modest, line item.
          </li>
          <li>
            <strong>Prepaid contracts are regulated separately.</strong> Prepaid funeral contracts
            in Nevada are regulated by the Division of Insurance under NRS chapter 689: money in
            trust is exempt from attachment, and the seller must provide the preneed sales
            agreement to the person entitled to custody of the remains.
          </li>
          <li>
            <strong>Licensing.</strong> Funeral establishments and crematories answer to the
            Nevada Funeral and Cemetery Services Board, which is also where complaints go.
          </li>
        </ul>

        <h2>Why Nevada quotes spread out</h2>
        <p>
          Nevada's price level matches the nation's, but provider-to-provider variation inside
          Nevada is typically larger than the difference between Nevada and its neighboring
          states. Most providers cluster around Las Vegas, Henderson, and Reno, and the same
          direct cremation can be priced hundreds of dollars apart across town. Full-service
          funeral homes carry buildings, chapels, and staff, and their prices track the NFDA
          median this model is built on. Direct-only cremation providers run leaner and often
          advertise lower starting prices, which may exclude third-party crematory fees, permits,
          or after-hours transfer. Compare all-in totals from the General Price List, not
          headlines. Our national guide explains{' '}
          <Link href="/guides/why-funeral-cost-figures-disagree/">why published funeral cost figures disagree</Link>.
        </p>

        <h2>How to get an exact Nevada price</h2>
        <p>
          Under the FTC Funeral Rule, every Nevada provider must give you price information by
          phone without asking your name, and a written, itemized General Price List in person
          before you discuss options. Get GPLs from at least three providers, including one
          cremation specialist, and match line items. You may buy the urn or container from any
          seller. To build a line-item estimate with an urn, death certificates, and other
          add-ons, use our <Link href="/calculator/">funeral cost calculator</Link>, and compare
          against the <Link href="/guides/cremation-cost-2026/">national cremation cost guide</Link>{' '}
          for what each option includes nationally.
        </p>
        <p>
          Once the cremation is done, the{' '}
          <Link href="/guides/what-to-do-with-ashes/">guide to what to do with ashes</Link> covers
          the options and their costs, from keeping an urn at home to scattering.
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
          <Link href="/funeral-costs/nevada/">Funeral costs in Nevada →</Link>
          {' · '}
          <Link href="/guides/cremation-cost-2026/">How much does cremation cost in 2026? →</Link>
          {' · '}
          <Link href="/calculator/">Build your line-item estimate →</Link>
          {' · '}
          <Link href="/guides/funeral-rule-rights/">Your rights under the FTC Funeral Rule →</Link>
        </p>
      <RelatedGuides currentSlug="nevada-cremation-cost" />
      </div>
    </>
  );
}
