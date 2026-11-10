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
  title: 'Funeral Loans: How to Borrow for a Funeral, Rates & Alternatives',
  description:
    'There is no special funeral loan: it is usually a personal loan at 6 to 36 percent APR, funeral home financing, or a credit card. How each option works, what it costs on a typical funeral bill, and the cheaper alternatives to check first.',
  alternates: { canonical: SITE_URL + '/guides/funeral-loans/' },
  openGraph: {
    title: 'Funeral Loans: How to Borrow for a Funeral, Rates & Alternatives',
    description:
      'Personal loans, funeral home financing, credit cards, and insurance assignment compared, with real APR ranges and a worked monthly payment example.',
    url: SITE_URL + '/guides/funeral-loans/',
  },
};

export default function FuneralLoans() {
  const faqs = [
    {
      q: 'Can you get a loan for a funeral?',
      a: 'Yes. There is no government funeral loan program, but you can borrow in several ways: a personal loan from a bank, credit union, or online lender; financing arranged through the funeral home with a third-party lender; or a credit card. Funeral-specific lenders typically offer $2,500 to $25,000 over 36 or 60 months at fixed rates, while general personal loans range from about $1,000 to $15,000 for this purpose and can go higher. Approval and funding for a personal loan usually takes one to seven days, and some online lenders fund within one to two business days.',
    },
    {
      q: 'What credit score do you need for a funeral loan?',
      a: 'Most personal loan lenders want fair credit or better: fair credit is a FICO score of 580 to 669 and good credit is 670 to 739. Some lenders serve borrowers with lower scores, but expect smaller loan amounts and higher interest rates. Applying with a co-signer or joint applicant with good credit can improve the offer and may earn a rate discount. A funeral home financing application follows the same credit check, so the score requirement is similar.',
    },
    {
      q: 'How long does it take to get a funeral loan?',
      a: 'A personal loan usually takes one to seven days from application to funding, and some online lenders fund within one to two business days. Funeral home financing can be arranged on site during the arrangement meeting, with the lender paying the funeral home directly. That speed matters because funeral homes generally expect payment before or shortly after the service, so apply as soon as the service plan and price are set, not after.',
    },
    {
      q: 'Do funeral homes offer financing?',
      a: 'Most do not lend their own money, but most can connect you with a third-party lender that specializes in funeral expenses. The typical arrangement is a loan of $2,500 to $25,000, repaid over 36 or 60 months at a fixed rate, with no prepayment penalty, and the lender pays the funeral home directly while you repay the lender. A smaller number of funeral homes still offer in-house payment plans, where you pay the home directly over an agreed period. Ask which arrangement you are being offered, because the interest rate, fees, and who you owe are different.',
    },
    {
      q: 'Is a credit card or a personal loan better for funeral costs?',
      a: 'For a full funeral bill, a personal loan is usually cheaper: personal loan APRs run about 6 to 36 percent depending on credit, while credit card APRs run about 15 to 29 percent. The exception is a card with a 0 percent introductory APR, which beats any loan if you can repay the full balance before the introductory period ends. After that period, the card rate jumps to the regular APR, often the highest rate of any option here, so a 0 percent card only works with a realistic repayment plan.',
    },
    {
      q: 'Who is responsible for repaying a funeral loan?',
      a: 'The person who signs the loan agreement, not the estate and not the other family members, unless they co-sign. That is an important distinction: a loan taken out to pay for a funeral is your personal debt even if you expect the estate or a life insurance payout to reimburse you later. If that reimbursement is delayed or falls through, you still owe the monthly payments. Borrow only the amount you can repay from your own income, not from money you hope to receive.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Funeral loans: how to borrow for a funeral', url: SITE_URL + '/guides/funeral-loans/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Funeral loans: how to borrow for a funeral</nav>
      <JsonLd data={articleJsonLd({
        title: 'Funeral Loans: How to Borrow for a Funeral, Rates & Alternatives',
        description: 'There is no special funeral loan: it is usually a personal loan at 6 to 36 percent APR, funeral home financing, or a credit card. How each option works, what it costs on a typical funeral bill, and the cheaper alternatives to check first.',
        url: SITE_URL + '/guides/funeral-loans/',
        datePublished: '2026-10-24',
        dateModified: PAGE_DATES['/guides/funeral-loans/']?.updated ?? LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="funeral-loans" imageAlt="Funeral Loans: How to Borrow for a Funeral, Rates & Alternatives"><h1>Funeral loans: how to borrow for a funeral</h1></GuideHero>
        <Byline published={PAGE_DATES['/guides/funeral-loans/']?.published} updated={PAGE_DATES['/guides/funeral-loans/']?.updated} />

        <p className="answer-first">
          <strong>Quick answer:</strong> there is no special government funeral loan. A funeral
          loan is usually a <strong>personal loan at about 6 to 36 percent APR</strong>,{' '}
          <strong>funeral home financing of $2,500 to $25,000 over 36 or 60 months</strong>, or a{' '}
          <strong>credit card at about 15 to 29 percent APR</strong>. Before borrowing, check
          the cheaper routes in our{' '}
          <Link href="/guides/paying-for-a-funeral/">guide to paying for a funeral</Link>:
          a life insurance assignment costs no interest, and VA benefits, the $255 Social
          Security payment, and county aid cost nothing to receive. The amount you need to
          borrow depends on the service: our modeled national estimate for a funeral with
          viewing and burial is <strong>{fmt(A.traditional_burial.value)}</strong>, while
          direct cremation is modeled at <strong>{fmt(A.direct_cremation.value)}</strong>,
          both in August 2026 dollars from NFDA 2023 medians adjusted for inflation, not
          quotes. For a line-item estimate in your state, use our{' '}
          <Link href="/calculator/">cost calculator</Link>.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>What a funeral loan actually is</h2>
        <p>
          Lenders do not sell a product called a funeral loan with its own rules. The phrase
          covers three different ways of borrowing, and the terms depend on which one you use:
        </p>
        <ul>
          <li><strong>A personal loan.</strong> An unsecured loan from a bank, credit union, or online lender, usable for any purpose including funeral costs. Typical funeral-sized amounts run $1,000 to $15,000, with some lenders going up to $50,000. Terms run six months to five years.</li>
          <li><strong>Funeral home financing.</strong> The funeral home connects you with a third-party lender that specializes in funeral expenses. Typical terms are $2,500 to $25,000, fixed rates, 36 or 60 month terms, no prepayment penalty, and up to three applicants per case. The lender pays the funeral home directly and you repay the lender.</li>
          <li><strong>A credit card.</strong> Immediate, but the most expensive regular option at 15 to 29 percent APR, unless you use a 0 percent introductory offer and repay it in full before that period ends.</li>
        </ul>
        <p>
          Because funeral homes generally expect payment before or shortly after the service,
          speed is part of the decision. A personal loan funds in one to seven days, and some
          online lenders fund within one to two business days. Funeral home financing can be
          arranged during the arrangement meeting itself.
        </p>

        <h2>Funeral borrowing options compared</h2>
        <table>
          <thead>
            <tr><th>Option</th><th>Speed</th><th>Typical cost</th><th>Best for</th></tr>
          </thead>
          <tbody>
            <tr><td>Life insurance assignment</td><td>3 to 10 days</td><td>No interest</td><td>Families with an existing policy; the funeral home is paid from the payout</td></tr>
            <tr><td>Funeral home financing</td><td>Same day</td><td>Fixed rate; terms 36 or 60 months</td><td>Families who need to arrange and finance in one visit</td></tr>
            <tr><td>Personal loan</td><td>1 to 7 days</td><td>6 to 36 percent APR</td><td>Borrowers with fair to good credit who want a lump sum</td></tr>
            <tr><td>Credit card</td><td>Immediate</td><td>15 to 29 percent APR; 0 percent intro offers exist</td><td>Smaller balances you can repay quickly</td></tr>
            <tr><td>Home equity loan or line of credit</td><td>Weeks</td><td>Usually lower than a personal loan</td><td>Homeowners with equity and time; your home secures the debt</td></tr>
            <tr><td>Family loan or contributions</td><td>Immediate</td><td>Usually no interest</td><td>Families who can share the cost; put the terms in writing</td></tr>
          </tbody>
        </table>
        <p>
          Two cheaper routes deserve a check before any of these. First, a{' '}
          <strong>life insurance assignment</strong>: you assign part of the policy payout to
          the funeral home, which is paid directly when the claim settles, with no interest
          charged in the meantime. Second, public help: VA burial benefits for veterans, the
          $255 Social Security lump-sum death payment for a surviving spouse or child, and
          county indigent burial programs for low-income families, covered in our{' '}
          <Link href="/guides/indigent-burial-assistance/">indigent burial assistance guide</Link>.
          If you already hold a final expense or burial insurance policy, its payout is the
          cheapest money available; see our{' '}
          <Link href="/guides/final-expense-burial-insurance/">burial insurance cost guide</Link>{' '}
          for how those policies work.
        </p>

        <h2>What borrowing actually costs: a worked example</h2>
        <p>
          APR ranges are abstract until you see the monthly payment. Take our modeled national
          estimate for a funeral with viewing and burial,{' '}
          <strong>{fmt(A.traditional_burial.value)}</strong>, borrowed in full as an
          illustration. At 12 percent APR over 36 months, the payment is about{' '}
          <strong>$304 a month</strong>, and the total repaid is about $10,930, meaning about{' '}
          <strong>$1,790 in interest</strong> on top of the funeral bill. At 24 percent APR over
          the same term, the payment rises to about $359 a month and the interest to about
          $3,780. At 36 percent APR, the payment is about $419 a month and the interest about
          $5,930. These are illustrations at stated rates, not quotes; your rate depends on
          your credit score, income, and lender.
        </p>
        <p>
          Three levers lower that cost more than shopping for a slightly better rate. First,{' '}
          <strong>borrow less</strong>: choosing direct cremation, modeled at{' '}
          <strong>{fmt(A.direct_cremation.value)}</strong>, instead of a full burial service
          cuts the amount borrowed by roughly two thirds. Second, <strong>shorten the
          term</strong> if the monthly payment is affordable: a shorter term means less total
          interest even at the same rate. Third, <strong>check for an assignment first</strong>:
          every dollar paid from a life insurance payout or a benefit is a dollar you do not
          pay interest on.
        </p>

        <h2>Before you sign: a checklist</h2>
        <ul>
          <li><strong>APR, not just the interest rate.</strong> The APR includes fees, so it is the number to compare across lenders. Ask for it in writing.</li>
          <li><strong>Origination fees.</strong> Some personal loans charge a fee
          deducted from the amount you receive. As an example, a $9,000 loan with a 5 percent fee puts only $8,550 in your hands.</li>
          <li><strong>Prepayment penalty.</strong> Funeral-specific financing typically has none, but some personal loans do. Confirm you can repay early without a fee, since an insurance payout may arrive months after the funeral.</li>
          <li><strong>Who gets paid.</strong> With funeral home financing, the lender pays the funeral home directly. With a personal loan, the money goes to you and you pay the provider. Make sure the timing lines up with when the funeral home expects payment.</li>
          <li><strong>Who owes the debt.</strong> Only the signer (and any co-signer) owes it. Do not sign for an amount you cannot repay from your own income if an expected reimbursement falls through.</li>
          <li><strong>Credit score band.</strong> Fair credit is a FICO score of 580 to 669 and good credit is 670 to 739. If your score is below fair, a co-signer or a secured option may be the only route, and the rate will be high, so weigh a simpler service first.</li>
          <li><strong>The General Price List.</strong> Before discussing financing, the funeral home must give you an itemized price list under the FTC Funeral Rule. Borrow against the itemized total you actually need, not a package quote you have not checked line by line; see our{' '}
          <Link href="/guides/compare-funeral-homes/">guide to comparing funeral homes</Link>.</li>
        </ul>

        <h2>When borrowing is the wrong move</h2>
        <p>
          Borrowing makes sense when the service is already chosen, the amount is modest, and
          repayment from your own income is realistic. It is the wrong move in three cases.
          First, when a simpler service would remove the need to borrow at all: a direct
          cremation or a memorial service without burial costs far less than a full
          traditional funeral, and no lender can make an unaffordable service affordable.
          Second, when repayment depends on money that has not arrived, such as an estate
          settlement or a disputed insurance claim, because the loan payments start on
          schedule regardless. Third, when the rate is at the top of the range and the term is
          long: borrowing $9,140 at 36 percent over five years costs more in interest than
          many families expect, and a{' '}
          <Link href="/guides/prepaid-funeral-plans/">prepaid plan</Link> or a county program
          may have been the cheaper path for a future need. If you are planning ahead rather
          than reacting to a death, our{' '}
          <Link href="/guides/how-to-plan-a-funeral/">step-by-step planning guide</Link>{' '}
          walks through the decisions in order.
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
          <Link href="/guides/paying-for-a-funeral/">How to pay for a funeral →</Link>
          {' · '}
          <Link href="/guides/indigent-burial-assistance/">Indigent burial assistance →</Link>
          {' · '}
          <Link href="/guides/compare-funeral-homes/">How to compare funeral homes →</Link>
        </p>
      <RelatedGuides currentSlug="funeral-loans" />
      </div>
    </>
  );
}
