import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'What to Do When Someone Dies: The First 48 Hours',
  description:
    'A calm, step-by-step checklist for the first 48 hours after a death: pronouncement, notifying family, choosing a funeral provider, death certificates, and what can wait.',
  alternates: { canonical: SITE_URL + '/guides/when-someone-dies-checklist/' },
  openGraph: {
    title: 'What to Do When Someone Dies: The First 48 Hours',
    description:
      'A calm checklist for the first 48 hours: what must happen now, what you can decide later, and your rights when choosing a funeral provider.',
    url: SITE_URL + '/guides/when-someone-dies-checklist/',
  },
};

export default function WhenSomeoneDiesChecklist() {
  const faqs = [
    {
      q: 'Can I take my time before choosing a funeral provider?',
      a: 'Yes. Nothing requires you to decide in the first hours, and there is no legal obligation to accept the first provider that contacts you. If a hospital or facility is pressing you to arrange a transfer, you can calmly choose a different provider yourself — under the FTC Funeral Rule, every funeral home must give you prices over the phone so you can compare before anyone visits.',
    },
    {
      q: 'Do I have to use the funeral home that first transported the body?',
      a: 'No. If a hospital or care facility arranged a transport with a provider you did not choose, you are free to select a different funeral home or crematory and have the body transferred. Ask for the General Price List before you visit anyone in person — the FTC Funeral Rule requires providers to hand it to you before discussing options.',
    },
    {
      q: 'How many certified death certificates should I order?',
      a: 'Order more than you think you need. You will need certified copies — typically $5–$35 each depending on the state — for banks, insurers, investment accounts, real estate, and sometimes vehicle titles. Getting extra copies now is far easier and faster than ordering more later, when probate or a house sale is already underway.',
    },
    {
      q: 'Do I have to pay the funeral home right away?',
      a: 'No. Under the FTC Funeral Rule, you must receive an itemized written statement showing exactly what you are being charged for before you pay. That means no lump sums demanded on the spot without a breakdown. If money is tight, ask about payment timelines — and read our guide on paying for a funeral before you put anything on a credit card.',
    },
    {
      q: 'What if I do not know what the person wanted?',
      a: 'Check for a will, a letter of instruction, a prepaid funeral arrangement, or notes with a lawyer or financial adviser — many people leave wishes somewhere. If nothing turns up, make the high-level decision (burial or cremation) based on what the family believes they would have wanted, and defer every detail. Laws vary by state on who is authorized to make arrangements, so the provider will tell you whose signature is needed.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'What to do when someone dies: the first 48 hours', url: SITE_URL + '/guides/when-someone-dies-checklist/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › When someone dies: the first 48 hours</nav>
      <JsonLd data={articleJsonLd({
        title: 'What to Do When Someone Dies: The First 48 Hours',
        description: 'A calm, step-by-step checklist for the first 48 hours after a death: pronouncement, notifying family, choosing a funeral provider, death certificates, and what can wait.',
        url: SITE_URL + '/guides/when-someone-dies-checklist/',
        datePublished: '2026-09-24',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="when-someone-dies-checklist" imageAlt="What to do when someone dies: the first 48 hours"><h1>What to do when someone dies: the first 48 hours</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> the first 48 hours are about logistics, not decisions.
          Get the death pronounced, tell the closest people, secure the person&#39;s home,
          and choose a funeral provider calmly — comparing prices by phone first, which is
          your right under the FTC Funeral Rule. Order plenty of certified death certificates
          ($5–$35 each depending on the state). Almost everything else — the ceremony details,
          sorting belongings, closing accounts — can wait until you are thinking clearly.
        </p>

        <p>
          If you are reading this in shock, slow down. The list below is in time order, and
          nothing on it needs to happen in the first hour except the first item. Many of the
          choices that feel urgent are not — and the decisions you make in grief should be as
          few and as reversible as possible. Print this or bookmark it, and work through it
          one step at a time.
        </p>

        <h2>The checklist</h2>
        <ol>
          <li>
            <strong>Get the death pronounced.</strong> A death must be legally pronounced before
            a funeral home can proceed. If the person was under hospice care, call the hospice
            nurse — they handle the pronouncement and know the drill. If the death was
            unexpected and occurred at home, call 911. If it happened in a hospital or care
            facility, the staff will arrange this.
          </li>
          <li>
            <strong>Call the closest people.</strong> Call the person&#39;s spouse or partner,
            children, and anyone listed as an emergency contact. You do not have to call
            everyone yourself — ask one or two relatives to spread the word through the wider
            family. It also helps to ask someone to handle the stream of incoming calls and
            messages for the next few days, so you can focus on the checklist.
          </li>
          <li>
            <strong>Secure the home, pets, and valuables.</strong> Lock the home and make sure
            someone trusted can check on it. Feed and shelter any pets — a neighbor, friend, or
            boarding service will do for now. Collect medications, cash, important documents,
            and valuables into one secure place. This is not the time to sort anything; just
            make it safe.
          </li>
          <li>
            <strong>Call a funeral home or cremation provider — and compare first.</strong>
            If the person left a prepaid arrangement or named a provider, use that one.
            Otherwise, call two or three and <em>compare by phone first</em>: under the FTC
            Funeral Rule, funeral homes must give you prices over the phone. Ask each one for
            their General Price List — the Rule requires them to hand it to you in person
            before discussing options. You do not have to accept the first provider that
            contacts you, and you may not be pressured into buying a casket from them — the
            Rule forbids that. <Link href="/guides/funeral-rule-rights/">Know your rights under the Funeral Rule</Link> and{' '}
            <Link href="/guides/compare-funeral-homes/">how to compare providers</Link>.
          </li>
          <li>
            <strong>Decide burial vs. cremation — at a high level only.</strong> The provider
            only needs to know which direction you are going so they can begin the legal
            paperwork and schedule. Details like the casket, urn, ceremony format, and venue
            can all be chosen later. If you need a refresher on the options, see our{' '}
            <Link href="/guides/funeral-service-types/">service types guide</Link>.
          </li>
          <li>
            <strong>Gather vital information for the death certificate.</strong> The funeral
            director or the person filing the certificate will ask for the deceased&#39;s
            full legal name, date and place of birth, Social Security number, parents&#39;
            full names (including mother&#39;s maiden name), marital status and spouse&#39;s
            name, occupation, military service history, and citizenship. Pull together the
            birth certificate, Social Security card, marriage license, and discharge papers
            if you can find them. If something is missing, do not stall — the certificate
            can be amended later.
          </li>
          <li>
            <strong>Order certified death certificates — more than you think.</strong>
            Copies typically cost $5–$35 each depending on the state, and you will need them
            for banks, insurers, investment accounts, property, and sometimes the
            employer&#39;s benefits office. Photocopies will not do: most institutions
            require a certified copy with a raised seal. A reasonable rule of thumb is ten
            to fifteen copies. Ordering more later is possible, but it is slow and
            expensive when a house sale or benefit claim is already moving.
          </li>
          <li>
            <strong>Notify the employer, Social Security, banks, and insurers.</strong>
            Call the deceased&#39;s employer to ask about any life insurance, pension, or
            unpaid-wages benefits. Notify the Social Security Administration — survivors may
            be eligible for a one-time death benefit or ongoing survivor benefits. Tell the
            banks and insurers, but <em>do not close or move accounts yet</em>; you will
            need the certificates, and some accounts freeze automatically on notification.
            The funeral home or hospice can often give you a list of who to call and when.
          </li>
          <li>
            <strong>If they were a veteran, contact the VA.</strong> Veterans may be
            entitled to burial benefits — including burial in a national cemetery and, in
            some cases, a headstone, burial flag, and partial reimbursement. You will need
            the discharge papers (DD-214) if you can find them; the VA can also help locate
            service records. Ask the funeral provider or the county veterans&#39; office how
            to start the claim.
          </li>
          <li>
            <strong>Take care of yourself.</strong> You do not have to be composed. Eat
            something, drink water, and sleep when you can — decision fatigue in the first
            days is real, and it is exactly why the big financial decisions can wait.
            Funeral homes and hospice programs can usually point you toward grief support
            groups or counselors, and your primary-care doctor or a faith leader are also
            fine places to start. If you are arranging for a child or a sudden, traumatic
            loss, ask specifically about counselors who specialize in that.
          </li>
        </ol>

        <h2>What can wait</h2>
        <p>
          Nothing on this list needs to happen in the first 48 hours. Write it down, then
          put it aside for at least a couple of weeks:
        </p>
        <ul>
          <li>
            <strong>Sorting belongings and the home.</strong> Clothes, furniture, and
            personal items can wait months. The only exception is anything perishable or
            that secures the property — food in the fridge, a leaking pipe, an unlocked
            garage.
          </li>
          <li>
            <strong>Closing accounts and canceling services.</strong> Utilities, phone,
            subscriptions, and insurance can be handled once you have certificates and a
            clearer head. Leave at least one phone line active until the paperwork is done.
          </li>
          <li>
            <strong>Probate and the estate.</strong> Probate — the legal process of
            transferring property and paying debts — runs on a timeline of months, not
            days. If the estate looks complicated (real estate in multiple states,
            significant debts, a business), talk to an estate attorney before signing
            anything.
          </li>
          <li>
            <strong>Claiming every benefit.</strong> Beyond Social Security and the
            employer, pensions, veterans&#39; benefits, and life insurance claims are all
            still available weeks or months later. Get the quick ones started and schedule
            the rest.
          </li>
          <li>
            <strong>Paying for the funeral creatively.</strong> You must receive an
            itemized statement before you pay (FTC Funeral Rule), and payment plans or
            delayed payment are common. Before putting a funeral on a credit card, read our{' '}
            <Link href="/guides/paying-for-a-funeral/">guide to paying for a funeral</Link> —
            families routinely overpay in the first 48 hours and regret it later.
          </li>
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
          <Link href="/guides/funeral-rule-rights/">Your rights under the FTC Funeral Rule →</Link>
          {' · '}
          <Link href="/guides/paying-for-a-funeral/">How to pay for a funeral →</Link>
          {' · '}
          <Link href="/guides/compare-funeral-homes/">Compare funeral homes →</Link>
          {' · '}
          <Link href="/guides/funeral-glossary/">Funeral terms glossary →</Link>
        </p>
        <p className="updated">Data vintage: {VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>
      <RelatedGuides currentSlug="when-someone-dies-checklist" />
      </div>
    </>
  );
}
