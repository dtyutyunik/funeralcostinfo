import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL, dataset, fmt } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

const A = dataset.anchors;

export const metadata: Metadata = {
  title: 'Veterans Burial Benefits: Full 2026 Guide',
  description:
    'VA burial benefits in 2026: burial and plot allowances, free national cemetery burial, headstones and markers, how to claim on VA Form 21P-530, and what the VA does not pay.',
  alternates: { canonical: SITE_URL + '/guides/veterans-burial-benefits/' },
  openGraph: {
    title: 'Veterans Burial Benefits: Full 2026 Guide',
    description:
      'Every VA funeral and burial benefit for eligible veterans: allowance amounts, free national cemetery burial, headstones, and how to claim.',
    url: SITE_URL + '/guides/veterans-burial-benefits/',
  },
};

export default function VeteransBurialBenefitsGuide() {
  const faqs = [
    {
      q: 'Do I have to apply for VA burial benefits, or are they automatic?',
      a: 'You must apply — nothing is automatic. File VA Form 21P-530 (Application for Burial Benefits), in person, by mail, or through a VA regional office. For a non-service-connected death, the claim must reach the VA within 2 years of the veteran\u2019s permanent burial or cremation; there is no time limit for a service-connected burial allowance (VA.gov, current).',
    },
    {
      q: 'How much does the VA pay toward a veteran\u2019s funeral?',
      a: 'Up to $2,000 when the death was service-connected. For non-service-connected deaths on or after October 1, 2025, up to $1,002 toward burial or funeral costs plus up to $1,002 toward the plot or interment, where applicable. Amounts reset every October 1, so confirm the current figures on VA.gov before relying on them.',
    },
    {
      q: 'Who is eligible for burial in a VA national cemetery?',
      a: 'Generally, veterans and service members discharged under conditions other than dishonorable, plus their spouses, minor children, and under certain conditions dependent adult children — even if the spouse or child predeceases the veteran. Cremated remains are eligible too. Call the VA at 1-800-827-1000 or check VA.gov to confirm eligibility before making arrangements elsewhere.',
    },
    {
      q: 'Does the VA provide a headstone if my veteran is buried in a private cemetery?',
      a: 'Yes. The VA furnishes a free government headstone, marker, or medallion for any eligible veteran buried in any cemetery worldwide — private, state, or national. If the VA does not furnish the headstone, it pays a headstone or marker allowance (currently $441). Setting the stone in a private cemetery is your responsibility and may carry a fee.',
    },
    {
      q: 'Does the VA burial allowance cover the funeral home bill?',
      a: 'No — in most cases it does not come close. The allowance offsets funeral and burial costs, but the family still pays for the funeral director\u2019s services (including cremation), transportation of the body, the casket or urn, and a private cemetery if one is chosen. A service-connected $2,000 allowance covers only about a fifth of our modeled national traditional-burial estimate.',
    },
    {
      q: 'Can my state veterans cemetery bury a veteran for free?',
      a: 'Often, yes — many state veterans cemeteries bury eligible veterans free of charge or at low cost, and VA national cemetery benefits are entirely free. Each state sets its own rules, fees, and eligibility (some also bury spouses), so check your state\u2019s veterans cemetery office for the exact terms.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Veterans burial benefits', url: SITE_URL + '/guides/veterans-burial-benefits/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Veterans burial benefits</nav>
      <JsonLd data={articleJsonLd({
        title: 'Veterans Burial Benefits: Full 2026 Guide',
        description: 'VA burial benefits in 2026: burial and plot allowances, free national cemetery burial, headstones and markers, how to claim on VA Form 21P-530, and what the VA does not pay.',
        url: SITE_URL + '/guides/veterans-burial-benefits/',
        datePublished: '2026-09-24',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="veterans-burial-benefits" imageAlt="Veterans burial benefits: full 2026 guide"><h1>Veterans burial benefits: the full 2026 guide</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> if the person who died was an eligible veteran, the VA can
          help in three ways — a burial allowance (up to <strong>$2,000</strong> for a
          service-connected death; <strong>$1,002 + $1,002</strong> for non-service-connected
          deaths), <strong>free burial in a VA national cemetery</strong> including the headstone,
          and a <strong>free government headstone or marker</strong> at any cemetery worldwide.
          None of it is automatic: you must apply on VA Form 21P-530, and for a
          non-service-connected death the claim must be filed within <strong>2 years</strong> of
          the burial or cremation (VA.gov, current figures).
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>The burial allowance: the headline money</h2>
        <p>
          The VA pays a burial allowance toward the funeral and burial costs of eligible
          veterans. The amount depends on the circumstances of the death (VA.gov, current
          figures for deaths on or after October 1, 2025):
        </p>
        <ul>
          <li><strong>Up to $2,000</strong> when the death was service-connected (the result of a service-connected disability). This is the most generous tier.</li>
          <li><strong>Up to $1,002 toward burial or funeral costs, plus up to $1,002 toward the plot or interment</strong> — a combined potential of $2,004 — when the death was not service-connected but the veteran died in a VA facility or was receiving a VA pension or compensation at the time of death. The plot/interment portion applies when the veteran is not buried in a national cemetery.</li>
        </ul>
        <p>
          One critical detail: <strong>allowance amounts reset every October 1</strong>, the
          start of the VA&rsquo;s fiscal year. Deaths before October 1, 2025 were paid at older
          rates ($978 / $978). Always confirm the current figures on VA.gov when you apply —
          the numbers in this guide can go stale every October.
        </p>
        <p>
          The allowance is paid to the person who paid the burial expenses — typically a family
          member — or to the estate. It is reimbursement money: you spend it, then claim it
          back. Keep every receipt.
        </p>

        <h2>Burial in a VA national cemetery is free</h2>
        <p>
          This is the most valuable benefit the VA offers, and it is entirely free. Eligible
          veterans can be buried or inurned in any of the VA&rsquo;s national cemeteries at no
          cost. What the VA covers:
        </p>
        <ul>
          <li>The gravesite itself — plot, inurnment space, or columbarium niche.</li>
          <li>Opening and closing of the grave, and a grave liner.</li>
          <li>A government headstone or marker.</li>
          <li>Perpetual care of the gravesite.</li>
          <li>A burial flag and a Presidential Memorial Certificate for the family.</li>
        </ul>
        <p>
          Eligibility basics: veterans and service members discharged <strong>under conditions
          other than dishonorable</strong> who met minimum active-duty service requirements.
          Spouses, minor children, and in some cases dependent adult children also qualify for
          burial — even if they predecease the veteran. Cremated remains are eligible too:
          a veteran&rsquo;s ashes can be inurned in a national cemetery free, plot and marker
          included (VA.gov, current).
        </p>
        <p>
          What the VA does <em>not</em> cover at the cemetery gate: transportation of the body
          to the cemetery, preparation for burial or cremation, the casket or urn, and any
          ceremony the family holds. For a service-connected death with burial in a national
          cemetery, the VA does reimburse some or all transportation costs — claim it with the
          burial allowance.
        </p>

        <h2>Headstone, marker, or medallion — free, anywhere in the world</h2>
        <p>
          The VA furnishes a <strong>free government headstone, marker, or medallion for any
          eligible veteran</strong>, usable at any cemetery in the world — private, state, or
          national (VA.gov, current). This is separate from the burial allowance and applies
          even if the family arranges everything else privately.
        </p>
        <p>
          When the VA does <em>not</em> furnish the headstone — for example, if the family
          bought a private monument — the VA pays a <strong>headstone or marker allowance,
          currently $441</strong>. One practical catch: in a private cemetery, setting the
          government headstone is the family&rsquo;s responsibility, and the cemetery may
          charge a setting fee. Check with the cemetery before ordering.
          Our <Link href="/guides/headstone-costs/">headstone cost guide</Link> explains how
          that setting fee and other marker costs compare with the free government option.
        </p>

        <h2>State veterans cemeteries: often free or low-cost</h2>
        <p>
          Beyond the federal national cemeteries, nearly every state runs its own veterans
          cemeteries. These are separate programs: each state sets its own eligibility rules,
          fees, and reservation policies. In practice, many bury eligible veterans free of
          charge or for a small fee, and most also bury spouses — sometimes for a modest
          interment charge.
        </p>
        <p>
          Because the terms vary state by state, there is no single figure to quote here. If
          there is a state veterans cemetery near you, call it directly: ask about cost for
          the veteran, cost for a spouse, availability of space, and whether the type of
          burial you want (full casket or cremated remains) is available there.
        </p>

        <h2>What the VA does not pay: the funeral home bill</h2>
        <p>
          This is the gap families feel most. VA burial allowances offset funeral and burial
          costs, but they are not designed to cover a typical funeral home bill. The family
          still pays for:
        </p>
        <ul>
          <li>The funeral director&rsquo;s services — arranging, paperwork, staff.</li>
          <li>Embalming and preparation of the body, or cremation itself.</li>
          <li>Transportation of the body (except the service-connected national-cemetery case above).</li>
          <li>The casket or urn, and any viewing or ceremony.</li>
          <li>A private cemetery&rsquo;s plot, opening/closing, and perpetual care, if chosen.</li>
        </ul>
        <p>
          To see the gap in dollars: our modeled national estimate for a traditional burial is
          {' '}<strong>{fmt(A.traditional_burial.value)}</strong> in August 2026 dollars (built
          from the NFDA 2023 median of $8,300, adjusted for inflation), and a direct cremation
          is <strong>{fmt(A.direct_cremation.value)}</strong> (from the NFDA 2023 median of
          $2,750). A service-connected $2,000 allowance covers roughly a fifth of the
          traditional-burial estimate. The allowances are real money, but they pair with —
          they do not replace — the family&rsquo;s own arrangements.
          See <Link href="/guides/funeral-cost-2026-breakdown/">what a funeral actually costs in 2026</Link>{' '}
          and <Link href="/guides/paying-for-a-funeral/">all the ways families pay for funerals</Link>{' '}
          to plan the rest.
        </p>

        <h2>How to claim: nothing is automatic</h2>
        <p>
          VA burial benefits must be claimed — they are not automatic. The steps:
        </p>
        <ul>
          <li><strong>File VA Form 21P-530</strong> (Application for Burial Benefits) — online at VA.gov, in person at a VA regional office, or by mail. Many funeral directors will help with the paperwork.</li>
          <li><strong>Gather documents:</strong> the veteran&rsquo;s DD Form 214 (or equivalent separation document), the death certificate, and itemized funeral and burial bills or receipts.</li>
          <li><strong>Mind the deadline:</strong> a claim for a non-service-connected burial allowance must be filed <strong>within 2 years</strong> of the veteran&rsquo;s permanent burial or cremation. There is no time limit for a service-connected burial allowance, the plot/interment allowance, or transportation reimbursement (per the instructions for VA Form 21P-530).</li>
          <li><strong>Who can file:</strong> the VA pays the first eligible person to file — generally the surviving spouse, then children, parents, or the executor/administrator of the estate.</li>
        </ul>
        <p>
          You can also start by calling the VA at <strong>1-800-827-1000</strong> to confirm
          eligibility before spending money — especially on a headstone or a private cemetery
          plot, where the free VA alternatives might change your plans.
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
          <Link href="/guides/paying-for-a-funeral/">How families pay for funerals →</Link>
          {' · '}
          <Link href="/guides/funeral-cost-2026-breakdown/">Funeral costs in 2026, line by line →</Link>
          {' · '}
          <Link href="/guides/headstone-costs/">Headstone costs →</Link>
        </p>
      <RelatedGuides currentSlug="veterans-burial-benefits" />
      </div>
    </>
  );
}
