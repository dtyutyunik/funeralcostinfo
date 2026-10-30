import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL, dataset, fmt } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

const A = dataset.anchors;

export const metadata: Metadata = {
  title: 'Military Funeral Honors: Eligibility, Flag, Taps & How to Request Them',
  description:
    'Military funeral honors are free for eligible veterans: at least two uniformed service members, the folding and presentation of the American flag, and the playing of Taps. Who qualifies, what full honors add, and how to request them.',
  alternates: { canonical: SITE_URL + '/guides/military-funeral-honors/' },
  openGraph: {
    title: 'Military Funeral Honors: Eligibility, Flag, Taps & How to Request Them',
    description:
      'The free DoD honors ceremony explained: eligibility, the flag and Taps, standard vs full honors, and the request checklist.',
    url: SITE_URL + '/guides/military-funeral-honors/',
  },
};

export default function MilitaryFuneralHonors() {
  const faqs = [
    {
      q: 'Are military funeral honors free?',
      a: 'Yes. Military funeral honors are provided at no cost to the family by the Department of Defense, when requested for an eligible veteran. The ceremony itself costs the family nothing, but it does not pay for the funeral: the funeral home bill, the casket or urn, transportation, and any private cemetery plot are separate costs. Our veterans burial benefits guide covers the VA allowances that can help with those bills.',
    },
    {
      q: 'Who is eligible for military funeral honors?',
      a: 'Military members who die while on active duty or in the Selected Reserve, former members who served on active duty and left under conditions other than dishonorable, and former Selected Reserve members who completed at least one term of enlistment or period of initial obligated service and left under conditions other than dishonorable. Members of the Commissioned Officer Corps of the Public Health Service and NOAA are also eligible. Anyone separated under dishonorable conditions, or barred from veteran benefits, is not eligible.',
    },
    {
      q: 'How do I request military funeral honors?',
      a: 'Tell the funeral director as early as possible and give them the DD Form 214, Certificate of Release or Discharge from Active Duty, or another discharge document showing honorable service. The funeral director normally requests the honors on the family behalf from the branch honors coordinator. Families can also call the DoD Military Funeral Honors line at 1-877-645-4667, which connects to the right branch coordinator. If the DD Form 214 is missing, request it from the National Personnel Records Center with Standard Form 180.',
    },
    {
      q: 'What happens during the military funeral honors ceremony?',
      a: 'At a minimum, the honor detail folds the American flag and presents it to the next of kin, and Taps is played. Taps is played by a bugler when one is available, or by a ceremonial bugle that plays a recording. The detail has at least two uniformed members of the Armed Forces, and at least one member is from the deceased veteran service branch. Full honors add elements such as a rifle volley, pallbearers, and a color guard, depending on rank and circumstances.',
    },
    {
      q: 'Who receives the folded flag?',
      a: 'The flag is presented to the next of kin, normally the surviving spouse, eldest child, or closest surviving relative in the order the service sets out. If no next of kin is available, it can be presented to a designated friend of the family. Only one burial flag is issued per veteran, so families should decide in advance who will receive and keep it.',
    },
    {
      q: 'Can military funeral honors be held at a cremation or memorial service?',
      a: 'Yes. Honors can be rendered at a burial, at a funeral service, or at a memorial service, and cremated remains are eligible. The detail can perform the flag folding and Taps at the service, at the graveside, or at the national cemetery. Tell the funeral director and the honors coordinator where the ceremony will take place so the detail is scheduled for the right location and time.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Military funeral honors', url: SITE_URL + '/guides/military-funeral-honors/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Military funeral honors</nav>
      <JsonLd data={articleJsonLd({
        title: 'Military Funeral Honors: Eligibility, Flag, Taps & How to Request Them',
        description: 'Military funeral honors are free for eligible veterans: at least two uniformed service members, the folding and presentation of the American flag, and the playing of Taps. Who qualifies, what full honors add, and how to request them.',
        url: SITE_URL + '/guides/military-funeral-honors/',
        datePublished: '2026-10-30',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="military-funeral-honors" imageAlt="Military funeral honors"><h1>Military funeral honors</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> military funeral honors are{' '}
          <strong>free</strong> for an eligible veteran, when the family requests them. By law,
          the honor detail has at least <strong>two uniformed members</strong> of the Armed
          Forces, at least one from the veteran's own service branch, and the ceremony includes
          at a minimum the <strong>folding and presentation of the American flag</strong> to
          the next of kin and the <strong>playing of Taps</strong>. The requirement dates to
          Public Law 106-65, in effect since January 1, 2000. Honors do not pay for the funeral
          itself: for context, our modeled national estimate for a traditional funeral with
          viewing and burial is <strong>{fmt(A.traditional_burial.value)}</strong>, and the VA
          burial allowance is a separate benefit. All modeled figures are in August 2026
          dollars, built from NFDA 2023 medians adjusted for inflation, not quotes. For a line
          item estimate in your state, use our <Link href="/calculator/">cost calculator</Link>.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>What the ceremony includes</h2>
        <p>
          The basic ceremony is short and formal, and it is the same core ceremony for every
          eligible veteran, whatever the branch. The two required elements are:
        </p>
        <ul>
          <li><strong>Folding and presentation of the flag.</strong> The detail folds the burial flag, traditionally in 13 folds, and the representative of the veteran's parent service presents it to the next of kin with a short spoken tribute. Only one burial flag is issued per veteran.</li>
          <li><strong>Taps.</strong> The 24 note bugle call is played at the end of the ceremony. A live bugler plays it when one is available. When no bugler is available, the detail uses a ceremonial bugle that plays a high quality recording, so the call is still heard live at the service.</li>
        </ul>
        <p>
          The detail itself is part of the ceremony: at least two uniformed service members,
          with at least one from the deceased veteran branch. The funeral director usually
          coordinates the timing so the detail arrives before the service, performs the
          ceremony at the agreed point, and leaves without interrupting the rest of the service.
        </p>

        <h2>Standard honors vs full honors</h2>
        <p>
          The Department of Defense provides two levels. Every eligible veteran gets at least
          standard honors. Full honors are reserved for certain ranks, service lengths, and
          circumstances, and they add a larger detail:
        </p>
        <table>
          <thead>
            <tr><th>Level</th><th>Who it is for</th><th>What it includes</th></tr>
          </thead>
          <tbody>
            <tr><td>Standard honors</td><td>Every eligible veteran</td><td>Two person detail, flag folding and presentation, Taps</td></tr>
            <tr><td>Full honors</td><td>Generally: Medal of Honor recipients, service members killed in action or by combat injuries, general and flag officers, senior enlisted members at pay grade E9, and veterans who retired after 20 years of service</td><td>Standard honors plus a rifle volley, pallbearers, and often a color guard, chaplain, and bugler, with 7 to 9 or more personnel in total</td></tr>
          </tbody>
        </table>
        <p>
          The exact full honors detail varies by branch and by availability. The Army, Marine
          Corps, Navy, Air Force, Coast Guard, and Space Force each run their own honors
          program, so the branch coordinator confirms what detail can be provided for a given
          date and location. Full honors are not something a family can buy or upgrade to:
          the level is set by the veteran status, not by payment.
        </p>

        <h2>Who qualifies, and who does not</h2>
        <ul>
          <li><strong>Qualifies:</strong> military members who die while on active duty or in the Selected Reserve.</li>
          <li><strong>Qualifies:</strong> former members who served on active duty and were discharged or released under conditions other than dishonorable.</li>
          <li><strong>Qualifies:</strong> former Selected Reserve members who completed at least one term of enlistment or period of initial obligated service and left under conditions other than dishonorable, or who were discharged for a disability incurred or aggravated in the line of duty.</li>
          <li><strong>Qualifies:</strong> members of the Commissioned Officer Corps of the Public Health Service and the National Oceanic and Atmospheric Administration, as members of a uniformed service.</li>
          <li><strong>Does not qualify:</strong> anyone separated under dishonorable conditions, or whose character of service bars veteran benefits.</li>
          <li><strong>Does not qualify:</strong> anyone convicted of a federal or state capital crime and sentenced to death or life imprisonment, and anyone ordered to report for induction but never actually inducted.</li>
        </ul>
        <p>
          Note the distinction from VA burial benefits: eligibility for honors and eligibility
          for a VA national cemetery burial or a burial allowance overlap but are not identical.
          Our <Link href="/guides/veterans-burial-benefits/">veterans burial benefits guide</Link>{' '}
          covers the VA side, including free national cemetery burial, the burial flag and
          Presidential Memorial Certificate, and how to claim the allowance. Honors cover the
          ceremony. VA benefits cover the burial costs. A veteran can receive both.
        </p>

        <h2>How to request honors: checklist</h2>
        <ul>
          <li><strong>Step 1: tell the funeral director early.</strong> Say you want military funeral honors, and give the veteran branch, service dates, and discharge status. The funeral director normally makes the request to the branch honors coordinator on the family behalf.</li>
          <li><strong>Step 2: provide the DD Form 214.</strong> The Certificate of Release or Discharge from Active Duty is the preferred proof. Any discharge document showing service under conditions other than dishonorable can be used if the DD Form 214 is not available.</li>
          <li><strong>Step 3: if the DD Form 214 is missing, order it.</strong> File Standard Form 180 with the National Personnel Records Center, or use the online order form on the National Archives site. Order as early as possible: records requests take time, and the honors detail needs proof before it can be scheduled.</li>
          <li><strong>Step 4: confirm date, time, and place.</strong> Give the coordinator the service location, whether the ceremony is at the service, the graveside, or a national cemetery, and who will receive the flag. At a VA national cemetery, cemetery staff can also help arrange the honors.</li>
          <li><strong>Step 5: if you are arranging without a funeral director, call the DoD line.</strong> The Military Funeral Honors line at 1-877-645-4667 connects families with the right branch coordinator. Veteran service organizations can also help provide detail elements such as a rifle detail or pallbearers.</li>
        </ul>
        <p>
          Requests are normally handled first come, first served, with priority for Medal of
          Honor recipients and service members killed in action. That is another reason to
          request early: the detail is scheduled around other services that day, and a late
          request may not secure a detail for the time you want. If the veteran died while
          you are still choosing a funeral home, our{' '}
          <Link href="/guides/how-to-plan-a-funeral/">step by step planning guide</Link> puts
          the honors request in order with the other first decisions, and our{' '}
          <Link href="/guides/paying-for-a-funeral/">guide to paying for a funeral</Link>{' '}
          covers the benefits that sit alongside the free ceremony.
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
          <Link href="/guides/veterans-burial-benefits/">Veterans burial benefits →</Link>
          {' · '}
          <Link href="/guides/paying-for-a-funeral/">How to pay for a funeral →</Link>
          {' · '}
          <Link href="/guides/how-to-plan-a-funeral/">How to plan a funeral →</Link>
        </p>
      <RelatedGuides currentSlug="military-funeral-honors" />
      </div>
    </>
  );
}
