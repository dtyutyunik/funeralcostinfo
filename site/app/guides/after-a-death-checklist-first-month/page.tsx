import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'After a Death: A Week-by-Week Checklist for the First Month',
  description:
    'What to do in the first month after a death, week by week: notifications, benefits claims, banks and bills, probate first steps, and what can safely wait.',
  alternates: { canonical: SITE_URL + '/guides/after-a-death-checklist-first-month/' },
  openGraph: {
    title: 'After a Death: A Week-by-Week Checklist for the First Month',
    description:
      'The first month after a death, in order: week 1 notifications, week 2 accounts and bills, weeks 3 to 4 benefits, probate, and records.',
    url: SITE_URL + '/guides/after-a-death-checklist-first-month/',
  },
};

export default function AfterADeathChecklistFirstMonth() {
  const faqs = [
    {
      q: 'What do I need to do in the first month after someone dies?',
      a: 'In the first month after someone dies, work through notifications first, then accounts and claims. Notify the employer, Social Security, life insurers, and banks; gather the will, insurance policies, and account list; start survivor benefit and insurance claims; and keep paying essential household bills from available funds. Sorting belongings, selling property, and closing every account can wait until the legal picture is clear.',
    },
    {
      q: 'Who do I notify after a death?',
      a: 'Start with the employer, Social Security, and any life insurer, then banks, credit card companies, utilities, and the three credit bureaus. The funeral home usually reports the death to Social Security, but confirm that it happened rather than assuming it. Keep a log of every call: the date, the person you spoke to, and any reference number.',
    },
    {
      q: 'How soon do I have to notify Social Security after a death?',
      a: 'As soon as possible. The funeral director usually reports the death to Social Security, but if no funeral director is involved, a family member should report it promptly. Prompt reporting matters because benefits paid after the month of death may have to be returned, and survivor benefits cannot start until the claim is filed. See our guide to Social Security survivor benefits for who qualifies and how to apply.',
    },
    {
      q: 'Do I need to close bank accounts after a death?',
      a: 'Do not rush to close accounts. Notify each bank of the death, ask what it needs (usually a certified death certificate and proof of your authority), and keep essential household bills paid from available funds in the meantime. Joint accounts and accounts with a named beneficiary often transfer outside probate, while solely owned accounts may need probate before anyone can move money. Ask the bank and, for larger estates, an attorney before moving large sums.',
    },
    {
      q: 'When should probate start after a death?',
      a: 'In the first month, the probate step is usually a consultation, not a filing deadline. Locate the will, find out whether the estate needs probate at all (small estates and assets with beneficiaries often do not), and talk to the attorney who prepared the will or a local probate attorney. Deadlines and small estate limits vary by state, so get local advice before signing anything or distributing property.',
    },
    {
      q: 'What can wait after a death?',
      a: 'Sorting and giving away belongings, redecorating, selling a house or car, and closing every subscription can wait. So can most decisions about keepsakes: pack things safely and decide later, when grief is less raw. The tasks that cannot wait are the ones with a clock on them: benefit claims, bills that keep a household running, insurance on a home or car, and anything a court or agency has dated.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'After a death: checklist for the first month', url: SITE_URL + '/guides/after-a-death-checklist-first-month/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › After a death: checklist for the first month</nav>
      <JsonLd data={articleJsonLd({
        title: 'After a Death: A Week-by-Week Checklist for the First Month',
        description: 'What to do in the first month after a death, week by week: notifications, benefits claims, banks and bills, probate first steps, and what can safely wait.',
        url: SITE_URL + '/guides/after-a-death-checklist-first-month/',
        datePublished: '2026-11-02',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="after-a-death-checklist-first-month" imageAlt="After a death: checklist for the first month"><h1>After a death: a week-by-week checklist for the first month</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> the first month after a death is for notifications,
          claims, and keeping the household running, not for finishing the estate. Notify the
          employer, Social Security, insurers, and banks in week 1; work through accounts,
          bills, and credit bureaus in week 2; and use weeks 3 and 4 for benefit claims,
          a probate consultation, and an inventory of assets and debts. This guide picks up
          where our <Link href="/guides/when-someone-dies-checklist/">first 48 hours
          checklist</Link> leaves off, so it does not repeat the pronouncement, provider
          choice, and first calls covered there. Keep one folder and one call log for
          everything below, and delegate freely: nobody should carry this list alone.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>The first month at a glance</h2>
        <table>
          <thead>
            <tr><th>When</th><th>Focus</th><th>Main tasks</th></tr>
          </thead>
          <tbody>
            <tr><td>Week 1</td><td>Notifications and benefits</td><td>Employer, Social Security, life insurer, funeral bill, death certificates</td></tr>
            <tr><td>Week 2</td><td>Accounts and the household</td><td>Banks, credit cards, utilities, mail, credit bureaus, subscriptions</td></tr>
            <tr><td>Weeks 3 to 4</td><td>Claims and the legal picture</td><td>Benefit claims, will and probate consult, asset and debt inventory, tax records</td></tr>
            <tr><td>Later</td><td>Everything else</td><td>Belongings, property sales, closing accounts, updating your own estate plan</td></tr>
          </tbody>
        </table>

        <h2>Week 1: notifications and benefits</h2>
        <ul>
          <li><strong>Confirm the Social Security report.</strong> The funeral director usually reports the death to Social Security, but confirm it happened. If no funeral director is involved, report it yourself as soon as possible. Then start the survivor benefits claim: our <Link href="/guides/social-security-survivor-benefits/">Social Security survivor benefits guide</Link> covers who qualifies and how to apply, and the one time $255 lump sum death payment is covered in our <Link href="/guides/paying-for-a-funeral/">how to pay for a funeral guide</Link>.</li>
          <li><strong>Notify the employer.</strong> Ask about a final paycheck, unused vacation pay, group life insurance, pension or retirement accounts, and any death benefit. Get the benefits contact in writing, and keep the name of every person you speak to.</li>
          <li><strong>Start life insurance claims.</strong> Contact each insurer, ask for its claim form and its list of required documents, and file promptly. Insurers typically need a certified death certificate and the policy number; certified copies run $5 to $35 each depending on the state, covered in our <Link href="/guides/death-certificates-cost/">death certificate cost guide</Link>. Order more copies than you think you need now, while ordering is easy.</li>
          <li><strong>Settle the funeral bill.</strong> You should have received an itemized statement before paying, which is your right under the FTC Funeral Rule. Check it line by line, ask about anything you did not authorize, and keep the paid receipt with the estate records. If money is tight, our <Link href="/guides/paying-for-a-funeral/">paying for a funeral guide</Link> covers VA benefits, county aid, and other help.</li>
          <li><strong>Gather the document folder.</strong> One folder, physical or digital, holding the will or trust, insurance policies, marriage certificate, military discharge papers if any, recent tax returns, and a list of accounts you have found so far. Do not sort or discard anything yet; just collect.</li>
          <li><strong>Keep the household running.</strong> Arrange ongoing care for children, pets, and dependents, keep essential bills paid from available funds, and ask someone trusted to collect mail and check on an empty home.</li>
        </ul>

        <h2>Week 2: banks, bills, and identity protection</h2>
        <ul>
          <li><strong>Notify banks and credit unions.</strong> Tell each institution of the death and ask what it needs before releasing information or funds. Do not move large sums or close accounts until you know whether the account is joint, has a named beneficiary, or must go through probate.</li>
          <li><strong>Notify credit card companies.</strong> Close solely owned cards or convert them as the issuer directs, and check for autopay charges that should stop. Dispute any charge made after the date of death that the deceased did not authorize.</li>
          <li><strong>Transfer or maintain utilities and services.</strong> Move household utilities, phone, and internet into the surviving household member name where needed, and keep home and car insurance in force: an uninsured empty house or an uninsured car is a risk the estate cannot afford.</li>
          <li><strong>Forward the mail.</strong> File a mail forwarding request or arrange regular collection, and watch incoming mail for bills, statements, and benefits letters you did not know about. Incoming mail is often how unknown accounts surface.</li>
          <li><strong>Notify the three credit bureaus.</strong> Social Security death records eventually reach Experian, Equifax, and TransUnion, but notifying them directly in the first month helps prevent new credit being opened in the deceased name. Ask each bureau what documentation it needs.</li>
          <li><strong>List subscriptions and digital accounts.</strong> Make a list of streaming, software, and membership charges, cancel what nobody uses, and keep the phone line active for a while if it is needed for two factor codes to reach accounts. Do not delete email or cloud accounts yet: they may hold bills, photos, and account recovery options.</li>
        </ul>

        <h2>Weeks 3 to 4: claims, probate, and records</h2>
        <ul>
          <li><strong>Follow up every claim.</strong> Survivor benefits, life insurance, pensions, and any veterans benefits each move at their own pace. Our <Link href="/guides/veterans-burial-benefits/">veterans burial benefits guide</Link> covers VA burial allowances and plots for eligible veterans. Log every claim, its reference number, and its next step.</li>
          <li><strong>Get a probate consultation.</strong> Take the will to the attorney who prepared it, or to a local probate attorney, and ask three questions: does this estate need probate at all, what is the small estate limit in this state, and what should nobody sign or distribute before that answer is clear. If there is no will, ask the same questions about intestacy rules in that state.</li>
          <li><strong>Start the asset and debt inventory.</strong> List bank and investment accounts, real estate, vehicles, debts, and loans, with balances and account numbers. This inventory is the document a probate attorney, an accountant, and the tax preparer will all ask for, and it usually takes weeks to complete, so start it now.</li>
          <li><strong>Preserve tax records.</strong> A final income tax return for the deceased will be due, and an estate tax return may be needed depending on the size of the estate. Keep the final year tax documents, funeral expense receipts, medical bills, and insurance payment records together; do not file anything in a rush in month one.</li>
          <li><strong>Send thank yous and accept help.</strong> Thank people who helped with the service, meals, or errands, and let offers of help land where they help most: rides, meals, childcare, and sitting with paperwork. Grief support, through a hospice bereavement program, a local group, or a counselor, is a practical step in month one, not a luxury.</li>
        </ul>

        <h2>What can safely wait</h2>
        <p>
          Sorting belongings, giving away keepsakes, redecorating, selling a house or car,
          and closing every last account can wait until the legal picture is clear and
          decisions feel less raw. If family members disagree about belongings, pack and
          label rather than deciding: reversible steps now, permanent decisions later.
          The same patience applies to your own paperwork. Updating your own will,
          beneficiaries, and advance directive is wise after a loss, but it is a month
          two or three task, not a week one task.
        </p>
        <p>
          Costs also continue after the service itself, so keep receipts for everything
          the estate pays: funeral expenses, travel, legal fees, and property upkeep.
          For a line item estimate of the funeral itself in your state, use our{' '}
          <Link href="/calculator/">cost calculator</Link>, and for the service choices
          that shaped that bill, see our <Link href="/guides/how-to-plan-a-funeral/">funeral
          planning guide</Link>.
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
          <Link href="/guides/when-someone-dies-checklist/">The first 48 hours →</Link>
          {' · '}
          <Link href="/guides/social-security-survivor-benefits/">Social Security survivor benefits →</Link>
          {' · '}
          <Link href="/guides/paying-for-a-funeral/">How to pay for a funeral →</Link>
        </p>
      <RelatedGuides currentSlug="after-a-death-checklist-first-month" />
      </div>
    </>
  );
}
