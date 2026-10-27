import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL, dataset, fmt } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

const A = dataset.anchors;

export const metadata: Metadata = {
  title: 'How to Plan a Funeral: A Step-by-Step Guide',
  description:
    'The ten steps of planning a funeral in order, from the first phone calls to the paperwork after the service, with modeled 2026 costs at each decision point.',
  alternates: { canonical: SITE_URL + '/guides/how-to-plan-a-funeral/' },
  openGraph: {
    title: 'How to Plan a Funeral: A Step-by-Step Guide',
    description:
      'The ten steps of planning a funeral in order, from the first phone calls to the paperwork after the service, with modeled 2026 costs at each decision point.',
    url: SITE_URL + '/guides/how-to-plan-a-funeral/',
  },
};

export default function HowToPlanAFuneral() {
  const faqs = [
    {
      q: 'What is the very first thing to do when someone dies?',
      a: 'Get a legal pronouncement of death. If the death happens in a hospital or hospice, staff usually handle this. If it happens at home, call 911 or the local non-emergency line so a professional can make the pronouncement. After that, arrange transport of the body and check for a pre-plan, written wishes, or a prepaid plan before you make any other decisions. Our when-someone-dies checklist covers the first 48 hours in detail.',
    },
    {
      q: 'Who has the legal right to plan the funeral?',
      a: 'State law sets an order of priority, usually starting with a person the deceased designated in writing, then the spouse or partner, then adult children, then parents, then siblings. If the wrong person signs the funeral contract, the funeral home can refuse to proceed, so confirm who holds the right before the arrangement conference. Our who-can-arrange-a-funeral guide walks through the order and the exceptions.',
    },
    {
      q: 'How much does a funeral cost in 2026?',
      a: 'Our modeled national estimates, built from NFDA 2023 medians and expressed in August 2026 dollars, are: $9,140 for a traditional burial, $11,010 for a burial with a vault, $6,920 for cremation with a service, $3,030 for direct cremation, $4,100 for direct burial, and $5,480 for a green burial (that last figure is assumption-based). These are modeled estimates, not quotes, and your local prices will differ. The funeral cost calculator on this site builds a line-item estimate for your state.',
    },
    {
      q: 'How many death certificates should I order?',
      a: 'Most families order 5 to 10 certified copies. Banks, insurers, pension plans, and government agencies often each want their own certified copy, and ordering extras with the first batch is usually cheaper and faster than going back later. Our death certificates guide explains what each copy is used for.',
    },
    {
      q: 'What help is available to pay for a funeral?',
      a: 'Eligible veterans can receive VA burial benefits, which can include a burial allowance, a plot allowance, and burial in a national cemetery. A surviving spouse or child may also qualify for the Social Security lump-sum death payment of $255. Beyond that, families use savings, life insurance, final expense policies, or payment plans. Our paying-for-a-funeral and veterans burial benefits guides cover each source.',
    },
    {
      q: 'Should I prepay for my own funeral?',
      a: 'Pre-planning and prepaying are two different things. Writing your wishes down costs nothing and helps your family a great deal. Prepaying locks money into a contract that may not move with you if you relocate or the funeral home changes hands, so read the contract terms carefully first. Our prepaid funeral plans guide explains what to check before you sign.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'How to plan a funeral, step by step', url: SITE_URL + '/guides/how-to-plan-a-funeral/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › How to plan a funeral, step by step</nav>
      <JsonLd data={articleJsonLd({
        title: 'How to Plan a Funeral: A Step-by-Step Guide',
        description: 'The ten steps of planning a funeral in order, from the first phone calls to the paperwork after the service, with modeled 2026 costs at each decision point.',
        url: SITE_URL + '/guides/how-to-plan-a-funeral/',
        datePublished: '2026-10-23',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="how-to-plan-a-funeral" imageAlt="How to Plan a Funeral: A Step-by-Step Guide"><h1>How to plan a funeral, step by step</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> planning a funeral comes down to ten steps, in order:
          the first calls, confirming who can legally arrange, choosing a provider and comparing
          prices, choosing the disposition and service, choosing the cemetery and merchandise,
          planning the service, the obituary, death certificates, payment and benefits, and the
          paperwork after the service. The biggest cost decision is step 4. Our modeled national
          estimates, in August 2026 dollars and built from NFDA 2023 medians, run from{' '}
          <strong>{fmt(A.direct_cremation.value)}</strong> for direct cremation to{' '}
          <strong>{fmt(A.burial_with_vault.value)}</strong> for a burial with a vault. These are
          modeled estimates, not quotes. If you are in the first 48 hours after a death, start
          with our{' '}
          <Link href="/guides/when-someone-dies-checklist/">when someone dies checklist</Link>,
          then come back here for the full walk-through. For a line-item estimate in your state,
          use our <Link href="/calculator/">cost calculator</Link>.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>The ten steps, in order</h2>
        <p>
          The steps below follow the order most families actually work through them. A few can
          overlap, but skipping ahead, especially signing a contract before steps 2 and 3, is
          where expensive mistakes happen.
        </p>
        <ol>
          <li><strong>Make the first calls.</strong> A death must be legally pronounced, by medical staff, a hospice nurse, or a responder if the death happens at home. Arrange transport of the body, then check for a pre-plan, a prepaid contract, or written wishes before deciding anything else. The first 48 hours have their own sequence: see the <Link href="/guides/when-someone-dies-checklist/">when someone dies checklist</Link>.</li>
          <li><strong>Confirm who has the legal right to arrange, and gather vital statistics.</strong> State law sets who may make funeral decisions, in a set order of kin. Confirm that person before the arrangement conference, and gather the details the death certificate will need: full legal name, date and place of birth, Social Security number, parents names, occupation, and marital status. See <Link href="/guides/who-can-arrange-funeral/">who can arrange a funeral</Link>.</li>
          <li><strong>Choose a funeral provider and get the General Price List.</strong> Every funeral home must give you its General Price List, with itemized prices, under the FTC Funeral Rule. Get the list from at least two or three providers and compare line by line before you sign. See <Link href="/guides/compare-funeral-homes/">how to compare funeral homes</Link> and <Link href="/guides/funeral-rule-rights/">your rights under the Funeral Rule</Link>.</li>
          <li><strong>Choose the disposition and the service type.</strong> This is the decision that sets the total. Burial, cremation, and simpler options like direct cremation and direct burial each pair with different levels of service. The modeled costs for each are in the next section, and <Link href="/guides/funeral-service-types/">funeral service types</Link> explains what each one includes.</li>
          <li><strong>Choose the cemetery and the merchandise.</strong> For a burial, price the plot, the opening and closing of the grave, and a vault or grave liner if the cemetery requires one. Then the casket for a burial, or the urn for a cremation. You may buy merchandise from any seller, and the funeral home must accept it without a handling fee. See <Link href="/guides/burial-plot-costs/">burial plot costs</Link>, the <Link href="/guides/casket-buying-guide/">casket buying guide</Link>, and the <Link href="/guides/urn-costs-guide/">urn costs guide</Link>.</li>
          <li><strong>Plan the service itself.</strong> Choose the officiant, music, readings, speakers, and photo displays, and decide on flowers. None of this has to come from the funeral home: family members can lead a service, and a favorite playlist costs nothing. If the service will be held at the cemetery, see our <Link href="/guides/graveside-service-cost/">graveside service costs guide</Link> for what that ceremony includes and costs.</li>
          <li><strong>Write the obituary and notify people.</strong> Draft the obituary, decide where it will run, and notify family, friends, and the employer of the person who died. Paid obituaries are priced by length in many newspapers, so length is a cost decision too. See <Link href="/guides/obituary-costs/">obituary costs</Link>.</li>
          <li><strong>Order death certificates.</strong> Order certified copies through the funeral home or the county or state vital records office. Most families need 5 to 10 copies, one for each bank, insurer, pension, and agency that will ask. See <Link href="/guides/death-certificates-cost/">death certificate costs</Link>.</li>
          <li><strong>Line up payment and benefits.</strong> Ask about every benefit before paying out of pocket. Veterans may qualify for VA burial benefits, and a surviving spouse or child may qualify for the Social Security lump-sum death payment of $255. Life insurance, savings, and final expense policies cover the rest for most families. See <Link href="/guides/paying-for-a-funeral/">paying for a funeral</Link> and <Link href="/guides/veterans-burial-benefits/">veterans burial benefits</Link>.</li>
          <li><strong>After the service, finish the paperwork.</strong> Keep copies of the funeral contract, the price lists, receipts, and every death certificate in one place. Over the following weeks, close or transfer bank accounts, subscriptions, and utilities, and file insurance claims. This step takes longer than families expect, and an organized folder from step 1 makes it far easier.</li>
        </ol>

        <h2>What step 4 costs: the main choices</h2>
        <p>
          Every figure below is a modeled national estimate in August 2026 dollars, built from
          NFDA 2023 national medians adjusted for inflation. They are planning figures, not
          quotes, and the <Link href="/guides/funeral-cost-2026-breakdown/">2026 funeral cost breakdown</Link>{' '}
          shows the line items behind them.
        </p>
        <ul>
          <li><strong>Traditional burial:</strong> {fmt(A.traditional_burial.value)}. A funeral service with viewing, followed by burial.</li>
          <li><strong>Burial with a vault:</strong> {fmt(A.burial_with_vault.value)}. The same service, with the burial vault many cemeteries require.</li>
          <li><strong>Cremation with a service:</strong> {fmt(A.cremation_with_service.value)}. A funeral service with viewing, followed by cremation instead of burial.</li>
          <li><strong>Direct cremation:</strong> {fmt(A.direct_cremation.value)}. Cremation without a formal service beforehand. Families often hold a memorial later, on their own terms.</li>
          <li><strong>Direct burial:</strong> {fmt(A.direct_burial.value)}. Burial without a viewing or a formal service beforehand.</li>
          <li><strong>Green burial:</strong> {fmt(A.green_burial.value)}. Burial without embalming, a vault, or a non-biodegradable casket. This figure is assumption-based rather than built from an NFDA median, so treat it as a rougher guide than the others.</li>
        </ul>
        <p>
          Cemetery costs, merchandise, and add-ons sit on top of these figures, which is why the
          same service type can total very different amounts in different towns. Run your own
          combination through the <Link href="/calculator/">cost calculator</Link> to see a
          line-item estimate for your state.
        </p>

        <h2>Pre-planning your own funeral</h2>
        <p>
          Everything above is easier on the family when the person who died left instructions.
          If you are planning ahead for yourself, the most useful step is also the cheapest: put
          your wishes in writing, in a standalone document that covers the disposition, the
          service, and where your important papers are.
        </p>
        <ul>
          <li><strong>Use a standalone document, not only a will.</strong> A will may not be read until weeks after the death, long past the funeral. A separate wishes document can be found and used on day one.</li>
          <li><strong>Tell your family where it is.</strong> A document nobody can find does not help. Give a copy to the person most likely to arrange things, and say where the original lives.</li>
          <li><strong>Read up before prepaying.</strong> Pre-planning is free; prepaying is a financial contract, with rules about refunds, transfers, and what happens if the funeral home closes. Read the <Link href="/guides/prepaid-funeral-plans/">prepaid funeral plans guide</Link> before signing one.</li>
        </ul>

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
          <Link href="/guides/when-someone-dies-checklist/">The first 48 hours checklist →</Link>
          {' · '}
          <Link href="/guides/funeral-service-types/">Funeral service types →</Link>
          {' · '}
          <Link href="/guides/funeral-cost-2026-breakdown/">Funeral costs in 2026, broken down →</Link>
        </p>
      <RelatedGuides currentSlug="how-to-plan-a-funeral" />
      </div>
    </>
  );
}
