import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { PAGE_DATES } from '../../../lib/page-dates';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Social Security Survivor Benefits: How Much, Who Qualifies & How to Apply',
  description:
    'Social Security survivor benefits pay a surviving spouse 71.5% to 100% of the deceased worker’s benefit, and children 75%. Who qualifies, how the amount is set, and how to apply.',
  alternates: { canonical: SITE_URL + '/guides/social-security-survivor-benefits/' },
  openGraph: {
    title: 'Social Security Survivor Benefits: How Much, Who Qualifies & How to Apply',
    description:
      'Monthly survivor benefits explained: eligibility by age and relationship, the percentage table, the switching strategy, and the application steps.',
    url: SITE_URL + '/guides/social-security-survivor-benefits/',
  },
};

export default function SocialSecuritySurvivorBenefits() {
  const faqs = [
    {
      q: 'How much are Social Security survivor benefits?',
      a: 'A surviving spouse at survivor full retirement age receives 100% of the deceased worker’s benefit. Claiming at age 60 pays 71.5%, rising month by month to 100% at full retirement age. An eligible child, and a surviving spouse caring for a child under 16, each receive 75%. The percentages are set against the worker’s primary insurance amount, which is the benefit the worker would have received at their own full retirement age.',
    },
    {
      q: 'Can a surviving spouse collect both their own Social Security and a survivor benefit?',
      a: 'Not at the same time, and the two are not added together. Social Security pays the higher of the two benefits in any given month. But a survivor can often claim one benefit first and switch to the other later: for example, take a reduced survivor benefit at 60 and switch to your own larger retirement benefit at 70, or take your own reduced benefit at 62 and switch to the survivor benefit at your survivor full retirement age. Ask Social Security to restrict the application to the benefit you want first, or the agency will simply pay the higher one.',
    },
    {
      q: 'How do I apply for Social Security survivor benefits?',
      a: 'You cannot apply for survivor benefits online. Call Social Security at 1-800-772-1213 or contact your local office and say you are a surviving spouse, child, or parent. Have the death certificate, your birth certificate and marriage certificate if applicable, both Social Security numbers, and your bank details ready. Many funeral homes report the death to Social Security for you, but that report does not start your benefit: you still have to apply.',
    },
    {
      q: 'Does remarrying end Social Security survivor benefits?',
      a: 'Remarrying before age 60 generally ends eligibility for a survivor benefit on a former spouse’s record, while remarrying at age 60 or older does not. A disabled widow or widower has a lower remarriage threshold: remarriage at age 50 or older does not end the benefit. If a remarriage ends, eligibility on the earlier spouse’s record can return, so tell Social Security about any change in marital status either way.',
    },
    {
      q: 'What is the difference between the $255 Social Security payment and survivor benefits?',
      a: 'They are two separate things. The $255 lump-sum death payment is a one-time payment to a surviving spouse, or to an eligible child if there is no surviving spouse, and it is the only Social Security money most families hear about at the funeral. Survivor benefits are the ongoing monthly payments described in this guide, paid for as long as you remain eligible. Our <a href="/guides/paying-for-a-funeral/">guide to paying for a funeral</a> covers the $255 payment and the other one-time sources; this guide covers the monthly benefit.',
    },
    {
      q: 'Do survivor benefits stop growing if I wait past full retirement age?',
      a: 'Yes, for the survivor benefit itself. It reaches 100% of the deceased worker’s benefit at your survivor full retirement age and does not grow beyond that: there are no delayed retirement credits on a survivor benefit. Your own retirement benefit is different: it keeps growing until age 70, at 8% of your primary insurance amount per year past your full retirement age. That difference is what makes the switch strategy work: let the benefit that grows keep growing while you draw the other one.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Social Security survivor benefits', url: SITE_URL + '/guides/social-security-survivor-benefits/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Social Security survivor benefits</nav>
      <JsonLd data={articleJsonLd({
        title: 'Social Security Survivor Benefits: How Much, Who Qualifies & How to Apply',
        description: 'Social Security survivor benefits pay a surviving spouse 71.5% to 100% of the deceased worker’s benefit, and children 75%. Who qualifies, how the amount is set, and how to apply.',
        url: SITE_URL + '/guides/social-security-survivor-benefits/',
        datePublished: '2026-10-26',
        dateModified: PAGE_DATES['/guides/social-security-survivor-benefits/']?.updated ?? LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="social-security-survivor-benefits" imageAlt="Social Security survivor benefits: how much, who qualifies and how to apply"><h1>Social Security survivor benefits: how much, who qualifies, and how to apply</h1></GuideHero>
        <Byline published={PAGE_DATES['/guides/social-security-survivor-benefits/']?.published} updated={PAGE_DATES['/guides/social-security-survivor-benefits/']?.updated} />

        <p className="answer-first">
          <strong>Quick answer:</strong> Social Security survivor benefits are monthly
          payments to the family of a deceased worker who earned enough Social Security
          credits. A surviving spouse receives <strong>71.5% to 100%</strong> of the
          deceased worker's benefit, depending on the age at which they claim: 71.5% at
          age 60, rising to 100% at survivor full retirement age. An eligible child
          receives <strong>75%</strong>. These are ongoing monthly payments, not the
          one-time $255 lump-sum death payment, which is a separate and much smaller
          amount covered in our <Link href="/guides/paying-for-a-funeral/">guide to
          paying for a funeral</Link>. If the funeral itself is still unpaid, use our{' '}
          <Link href="/calculator/">cost calculator</Link> to estimate what remains.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>Who qualifies</h2>
        <p>
          Eligibility turns on your relationship to the deceased worker and, for a
          spouse, on age and marriage length. The worker must have earned enough
          Social Security credits, which depends on age at death: younger workers need
          fewer credits, and a worker needs no more than 40 credits (10 years of work)
          in any case. The main categories are:
        </p>
        <ul>
          <li><strong>Surviving spouse, age 60 or older.</strong> Generally the marriage must have lasted at least nine months, with exceptions such as an accidental death. A spouse caring for the worker's child under 16, or a disabled child, can qualify at any age.</li>
          <li><strong>Surviving spouse, age 50 to 59, with a disability.</strong> The disability must have started within seven years of the worker's death, or within seven years of the last month you received benefits as a parent caring for the worker's child.</li>
          <li><strong>Divorced surviving spouse.</strong> Qualifies on the same age rules if the marriage lasted at least 10 years, even if the worker remarried afterward.</li>
          <li><strong>Unmarried child under 18</strong> (or 19 if still in secondary school full time), or a child disabled before age 22. Stepchildren, grandchildren, and adopted children can qualify in some cases.</li>
          <li><strong>Dependent parent, age 62 or older,</strong> who received at least half of their support from the worker. A parent benefit is rarer than a spouse or child benefit, but it exists.</li>
        </ul>
        <p>
          If you are unsure whether you qualify, apply anyway and let Social Security
          decide. An application costs nothing, and a phone call can settle most
          borderline cases: the agency checks the earnings record itself, so you do
          not need to prove the credit count yourself.
        </p>

        <h2>How much you receive: the percentage table</h2>
        <p>
          Every survivor percentage is set against the worker primary insurance
          amount, or PIA: the monthly benefit the worker would have received at their
          own full retirement age. Two adjustments can lower the result. First, if
          the worker had already claimed a reduced benefit before their full
          retirement age, the survivor benefit is capped at the higher of what the
          worker was actually receiving or 82.5% of the PIA. Second, a family maximum
          caps the total paid on one worker's record when several survivors claim at
          once, so each person's share can be reduced.
        </p>
        <table>
          <thead>
            <tr><th>Survivor</th><th>Share of the worker's benefit</th><th>Notes</th></tr>
          </thead>
          <tbody>
            <tr><td>Surviving spouse at survivor full retirement age</td><td>100%</td><td>Full retirement age for survivors is 66 to 67; it is 67 for anyone born in 1962 or later</td></tr>
            <tr><td>Surviving spouse at age 60</td><td>71.5%</td><td>Rises month by month between 60 and full retirement age</td></tr>
            <tr><td>Surviving spouse, age 50 to 59, disabled</td><td>71.5%</td><td>Same starting percentage as claiming at 60</td></tr>
            <tr><td>Surviving spouse caring for a child under 16</td><td>75%</td><td>Payable at any age while caring for the child</td></tr>
            <tr><td>Eligible child</td><td>75%</td><td>Until 18, or 19 if still in secondary school; disabled children longer</td></tr>
            <tr><td>One dependent parent, age 62 or older</td><td>82.5%</td><td>Must have depended on the worker for at least half of support</td></tr>
            <tr><td>Two dependent parents</td><td>75% each</td><td>Each parent receives 75% of the worker's benefit</td></tr>
          </tbody>
        </table>
        <p>
          A worked example makes the table concrete. If the worker primary insurance
          amount was $2,400 a month, a spouse claiming at 60 would receive about
          $1,716 a month (71.5%), a spouse at survivor full retirement age would
          receive $2,400, and an eligible child would receive $1,800 (75%). Your
          actual amount depends on the worker's earnings record and your claiming age,
          so treat the example as arithmetic, not as a promise. As a scale check,
          the Social Security monthly snapshot for September 2026 put the average
          payment for nondisabled widows and widowers at about $1,935 a month.
        </p>

        <h2>The switching strategy: why claiming order matters</h2>
        <p>
          The most valuable rule in this guide is also the least known: you cannot
          collect your own benefit and a survivor benefit at the same time, but you
          can often collect them in sequence. Social Security pays the higher of the
          two in any month, and you can switch from one to the other later. Because
          the two benefits run on different clocks, the order you claim them in can
          be worth tens of thousands of dollars over a retirement.
        </p>
        <ul>
          <li><strong>If your own benefit will end up larger:</strong> claim the survivor benefit first, as early as 60, and let your own benefit grow until 70, then switch. Your own benefit grows 8% of your primary insurance amount per year past your full retirement age, up to 70.</li>
          <li><strong>If the survivor benefit will end up larger:</strong> claim your own reduced benefit as early as 62, then switch to the survivor benefit at your survivor full retirement age, when it reaches 100%.</li>
          <li><strong>Do not delay a survivor benefit past its full retirement age.</strong> Unlike your own benefit, it gains nothing from waiting past that age, so waiting longer only loses months of payments.</li>
          <li><strong>Ask for a restricted application.</strong> When you apply for the first benefit, tell Social Security you are applying for that benefit only. Otherwise the agency may simply pay whichever benefit is higher at that moment, and the sequencing is lost.</li>
        </ul>
        <p>
          The right order depends on both earnings records, both ages, and whether
          you need income now. A reduced benefit claimed at 60 because the household
          needs the money is not a mistake; it is a trade, and the cost of the trade
          is the difference between 71.5% and 100% for the rest of your life. If the
          numbers are close, or the household can wait, get the comparison in writing
          from Social Security before you file, or run it past a benefits adviser.
        </p>

        <h2>Working, remarriage, and other rules that change the amount</h2>
        <ul>
          <li><strong>Working before full retirement age.</strong> If you claim a survivor benefit before your survivor full retirement age and keep working, earnings above the annual limit can temporarily reduce your benefit. The withheld amounts are generally credited back through a higher benefit at full retirement age, so this is a timing effect, not a permanent loss.</li>
          <li><strong>Remarriage.</strong> Remarrying before age 60 generally ends eligibility on the former spouse's record; remarrying at 60 or older does not. For a disabled widow or widower, remarriage at 50 or older does not end the benefit. If a later marriage ends, eligibility on the earlier record can return.</li>
          <li><strong>Children and the family maximum.</strong> When a spouse and several children claim on one record, the family maximum may reduce each share. The maximum is set from the worker's primary insurance amount, and Social Security applies it automatically.</li>
          <li><strong>Taxes.</strong> Survivor benefits can be taxable depending on your total income, under the same combined-income rules as retirement benefits. That is a tax question for your return, not a reason to skip applying.</li>
          <li><strong>The death must be reported, and the benefit applied for.</strong> Benefits do not start on their own. A funeral home often reports the death, which stops the deceased person's payments, but your own benefit starts only when you apply.</li>
        </ul>

        <h2>How to apply: a checklist</h2>
        <ol>
          <li><strong>Call Social Security at 1-800-772-1213</strong> or visit your local office. Survivor benefits cannot be applied for online, so a phone call or visit is required. Say you are applying for survivor benefits and ask about both the monthly benefit and the $255 lump-sum death payment.</li>
          <li><strong>Gather the documents.</strong> The death certificate, your birth certificate, your marriage certificate if you are a spouse, both Social Security numbers, and your bank account details for direct deposit. If you are applying for a child, bring the child birth certificate and Social Security number too.</li>
          <li><strong>Ask about both benefits and the claiming order.</strong> Before you sign, ask Social Security to show you the survivor benefit and your own benefit side by side, and to confirm that the application is restricted to the benefit you want first if you plan to switch later.</li>
          <li><strong>Ask about back payments.</strong> Depending on when you apply, some months may be payable retroactively. Ask explicitly; do not assume the start date is automatic.</li>
          <li><strong>Keep the decision letter.</strong> It states the benefit amount, the start date, and the basis for the calculation. If anything looks wrong, appeal promptly: the letter states the deadline, and the earnings record can be corrected.</li>
        </ol>
        <p>
          If the deceased was a veteran, check veterans benefits separately: a
          surviving spouse may also qualify for a VA burial allowance and burial in a
          national cemetery, covered in our <Link href="/guides/veterans-burial-benefits/">veterans burial benefits guide</Link>. And if money for the funeral itself is
          the urgent problem, our <Link href="/guides/indigent-burial-assistance/">indigent burial assistance guide</Link> covers county programs for families who
          cannot pay.
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
          <Link href="/guides/veterans-burial-benefits/">Veterans burial benefits →</Link>
          {' · '}
          <Link href="/guides/when-someone-dies-checklist/">What to do when someone dies →</Link>
        </p>
      <RelatedGuides currentSlug="social-security-survivor-benefits" />
      </div>
    </>
  );
}
