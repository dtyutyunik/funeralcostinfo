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
  title: 'How to Crowdfund a Funeral: GoFundMe Costs, Goals & What to Write',
  description:
    'Crowdfunding a funeral starts with an itemized bill, not a guess: set the goal from the real total, expect GoFundMe transaction fees of 2.9% plus $0.30 per donation, and write a short, specific story. Steps, fee math, and scam safety.',
  alternates: { canonical: SITE_URL + '/guides/crowdfunding-a-funeral/' },
  openGraph: {
    title: 'How to Crowdfund a Funeral: GoFundMe Costs, Goals & What to Write',
    description:
      'How to set a funeral fundraiser goal from the real bill, what GoFundMe fees take, what to write, and how donors can check a campaign is genuine.',
    url: SITE_URL + '/guides/crowdfunding-a-funeral/',
  },
};

export default function CrowdfundingAFuneral() {
  const faqs = [
    {
      q: 'Can you use GoFundMe for funeral expenses?',
      a: 'Yes. Funeral and memorial expenses are one of the most common fundraiser categories on GoFundMe, and there are no eligibility requirements to start one. You can raise money for the funeral home bill, the burial or cremation, a memorial service, and related costs such as travel for family. Funds can be transferred to your bank even before the goal is reached, so you do not have to hit the target to use what has been donated.',
    },
    {
      q: 'How much does GoFundMe take from funeral donations?',
      a: 'GoFundMe is free to start: there is no platform fee for the organizer. Each donation carries a transaction fee of 2.9% plus $0.30, which covers card processing. On a $100 donation, about $96.80 reaches the fundraiser after that fee. That is why the goal should be set slightly above the funeral bill: to net $9,140, roughly the modeled cost of a traditional funeral with viewing and burial, you need to raise about $9,415. Other platforms keep different percentages, often around 5% to 7%, so check the fee page before choosing one.',
    },
    {
      q: 'How do I set a funeral fundraiser goal?',
      a: 'Start from the itemized bill, not a round number. Get the funeral home General Price List total and the cemetery charges, subtract what the family can already pay and any benefits coming in, such as the Social Security $255 lump-sum death payment or a VA burial allowance, then add a small buffer for transaction fees. Publish the breakdown on the page: donors give more, and trust the campaign more, when they can see exactly what the money pays for.',
    },
    {
      q: 'Are GoFundMe donations for a funeral tax deductible?',
      a: 'No, not for a personal fundraiser. Donations to a personal campaign are treated as personal gifts and are not tax deductible for the donor. The exception is a fundraiser set up for a registered charity or nonprofit in honor of the deceased: donations to that charity fundraiser may be tax deductible. Do not promise donors a tax deduction on a personal funeral page.',
    },
    {
      q: 'How long does it take to get GoFundMe money?',
      a: 'You can set up bank transfers once the fundraiser is live and start withdrawing donations as they arrive; you do not wait until the campaign ends or the goal is met. The first transfer takes a few days while the bank account is verified, and later transfers are faster. Because funeral homes usually want payment before or soon after the service, start the fundraiser as early as possible and ask the funeral home about timing: many will accept a deposit and a payment plan while donations come in.',
    },
    {
      q: 'What should I write on a funeral fundraiser page?',
      a: 'Keep it short and specific: the full name of the person, what happened, what the money will pay for with a cost breakdown, and the deadline if the funeral date sets one. A photo helps, and updates help more: post when the service is scheduled, thank donors by name where appropriate, and post a final update saying what the donations covered. If the goal is not reached, say so plainly and explain how the remaining bill will be handled, rather than leaving donors guessing.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Crowdfunding a funeral', url: SITE_URL + '/guides/crowdfunding-a-funeral/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Crowdfunding a funeral</nav>
      <JsonLd data={articleJsonLd({
        title: 'How to Crowdfund a Funeral: GoFundMe Costs, Goals & What to Write',
        description: 'Crowdfunding a funeral starts with an itemized bill, not a guess: set the goal from the real total, expect GoFundMe transaction fees of 2.9% plus $0.30 per donation, and write a short, specific story. Steps, fee math, and scam safety.',
        url: SITE_URL + '/guides/crowdfunding-a-funeral/',
        datePublished: '2026-10-31',
        dateModified: PAGE_DATES['/guides/crowdfunding-a-funeral/']?.updated ?? LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="crowdfunding-a-funeral" imageAlt="Crowdfunding a funeral"><h1>How to crowdfund a funeral</h1></GuideHero>
        <Byline published={PAGE_DATES['/guides/crowdfunding-a-funeral/']?.published} updated={PAGE_DATES['/guides/crowdfunding-a-funeral/']?.updated} />

        <p className="answer-first">
          <strong>Quick answer:</strong> crowdfunding a funeral works best when the goal
          comes from the real bill, not a round guess. Get the itemized funeral home total
          first, subtract what the family can already pay and any benefits coming in, add a
          small buffer for platform fees, and publish the breakdown on the page. GoFundMe is
          free to start and takes a transaction fee of <strong>2.9% plus $0.30 per
          donation</strong>. For scale, our modeled national estimate for a traditional
          funeral with viewing and burial is <strong>{fmt(A.traditional_burial.value)}</strong>{' '}
          and for direct cremation it is <strong>{fmt(A.direct_cremation.value)}</strong>,
          both in August 2026 dollars. If you need to net the full traditional figure
          through GoFundMe, set the goal around <strong>$9,415</strong> to cover the fees.
          For a line item estimate in your state, use our{' '}
          <Link href="/calculator/">cost calculator</Link>.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>Step 1: get the real number before you publish</h2>
        <p>
          A fundraiser with a vague goal raises less and invites suspicion. Before the page
          goes live, collect:
        </p>
        <ul>
          <li>The funeral home itemized total from its General Price List, which the FTC Funeral Rule requires the home to give you.</li>
          <li>Cemetery charges, if burial is planned: plot, opening and closing, and marker setting.</li>
          <li>Extras: flowers, obituary, officiant, reception, and transport.</li>
          <li>What the family can already pay, and benefits in progress: the Social Security $255 lump-sum death payment, a VA burial allowance for veterans, life insurance, or a prepaid plan.</li>
        </ul>
        <p>
          Goal equals the total bill, minus what is already covered, plus a fee buffer. Our{' '}
          <Link href="/guides/paying-for-a-funeral/">guide to paying for a funeral</Link>{' '}
          walks through every benefit to check before you ask anyone for money, and our{' '}
          <Link href="/guides/cheapest-funeral-options/">cheapest funeral options guide</Link>{' '}
          can lower the bill itself: direct cremation instead of a full service cuts the
          goal by thousands before a single donation arrives.
        </p>

        <h2>Step 2: pick a platform</h2>
        <p>
          Most funeral fundraisers run on a general platform, because that is where donors
          already have accounts. Funeral-specific platforms exist too, but reach matters
          more than specialization: donors give when the link arrives from someone they
          trust, not because of the logo on the page.
        </p>
        <table>
          <thead>
            <tr><th>What to compare</th><th>What to check before choosing</th></tr>
          </thead>
          <tbody>
            <tr><td>Cost to start</td><td>GoFundMe is free to start; check whether any platform you consider charges a setup fee</td></tr>
            <tr><td>Fee per donation</td><td>GoFundMe: 2.9% plus $0.30 per donation. Other platforms often keep around 5% to 7%; read the fee page</td></tr>
            <tr><td>When you get the money</td><td>GoFundMe lets you transfer funds at any time, even before the goal is met; some platforms hold funds until the goal is reached</td></tr>
            <tr><td>Donor trust</td><td>A platform donors recognize, a verified organizer, and a linked obituary or funeral home name</td></tr>
          </tbody>
        </table>

        <h2>Step 3: write a short, specific page</h2>
        <p>
          Donors decide in under a minute. Put the essentials first:
        </p>
        <ul>
          <li><strong>Title with the full name:</strong> "Help with [name] funeral expenses" beats a vague title every time.</li>
          <li><strong>What happened, in two or three sentences.</strong> No medical detail beyond what the family is comfortable sharing.</li>
          <li><strong>The cost breakdown.</strong> Funeral home total, cemetery charges, and what is already covered. Specific numbers build trust.</li>
          <li><strong>The deadline.</strong> If the funeral is on a set date, say when the money is needed by.</li>
          <li><strong>A photo.</strong> One warm photo of the person, with the family permission.</li>
        </ul>
        <p>
          Keep the tone plain and direct. You are not selling anything; you are telling
          people what happened, what it costs, and how they can help. If writing feels
          impossible right now, ask a close friend to draft it from your notes: many
          families have someone else run the page while they handle arrangements.
        </p>

        <h2>Step 4: launch to close circle first, then share widely</h2>
        <ul>
          <li><strong>First donations from family and close friends.</strong> A page with early donations looks credible; a page at $0 looks uncertain. Ask the inner circle first.</li>
          <li><strong>Then share everywhere the person was known:</strong> social media, group chats, workplace channels, faith communities, and the obituary page.</li>
          <li><strong>Post updates.</strong> Service date set, goal progress, thanks to donors, and a final update on what the money covered. Updates re-share the page to people who missed it.</li>
          <li><strong>Thank every donor.</strong> A short message on the page or privately. People who feel thanked give again, and tell others.</li>
          <li><strong>Transfer funds early.</strong> Do not wait for the goal: withdraw as donations arrive so the funeral home can be paid on time, and ask the home about a deposit plus payment plan while the campaign runs.</li>
        </ul>

        <h2>If the goal is not reached</h2>
        <p>
          Say so on the page, and explain the plan: a simpler arrangement, a payment plan
          with the funeral home, county assistance, or a second round of sharing. Options
          that lower the bill rather than raise more money are often faster: our{' '}
          <Link href="/guides/indigent-burial-assistance/">indigent burial assistance guide</Link>{' '}
          explains county programs that cover a basic cremation or burial for qualifying
          families, and our{' '}
          <Link href="/guides/cheapest-funeral-options/">cheapest options guide</Link> ranks
          the lowest cost arrangements. Whatever happens, post a final update: donors
          deserve to know what their money paid for.
        </p>

        <h2>How donors can check a campaign is genuine</h2>
        <p>
          Fraud in funeral fundraising is rare: GoFundMe reports less than one tenth of 1%
          of campaigns as fraudulent, but donors are right to be careful. Before donating,
          check for a verified obituary or news report, a named funeral home, a named
          organizer with a visible connection to the family, and a specific cost breakdown.
          Be wary of duplicate campaigns for the same person, or a page that refuses to
          name the funeral home. If you run a campaign, make all of this easy to find: it
          protects your donors and raises more money.
        </p>
        <p>
          One more caution: donations to a personal fundraiser are personal gifts, not tax
          deductible. Only a fundraiser for a registered charity in honor of the deceased
          can offer a deduction, so do not promise one on a personal page.
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
          <Link href="/calculator/">Build your line item estimate →</Link>
          {' · '}
          <Link href="/guides/paying-for-a-funeral/">How to pay for a funeral →</Link>
          {' · '}
          <Link href="/guides/cheapest-funeral-options/">Cheapest funeral options →</Link>
          {' · '}
          <Link href="/guides/indigent-burial-assistance/">Indigent burial assistance →</Link>
        </p>
      <RelatedGuides currentSlug="crowdfunding-a-funeral" />
      </div>
    </>
  );
}
