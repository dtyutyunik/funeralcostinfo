import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL, dataset, fmt } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

const A = dataset.anchors;

export const metadata: Metadata = {
  title: 'Body & Organ Donation: How It Works',
  description:
    'How organ, tissue, and whole-body donation work: costs (or lack of them), funeral arrangements afterward, and modeled national funeral-cost estimates.',
  alternates: { canonical: SITE_URL + '/guides/body-organ-donation-guide/' },
  openGraph: {
    title: 'Body & Organ Donation: How It Works',
    description:
      'Organ, tissue, and whole-body donation explained: what it costs your family, whether funerals and viewings are still possible, and how it affects funeral costs.',
    url: SITE_URL + '/guides/body-organ-donation-guide/',
  },
};

export default function BodyOrganDonationGuide() {
  const faqs = [
    {
      q: 'Does organ or tissue donation cost the donor\u2019s family anything?',
      a: 'No. There is no cost to the donor\u2019s family or estate for organ, eye, or tissue donation itself \u2014 the family pays only for medical care before death and for the funeral arrangements they choose (Donate Life FAQs). Mayoclinic.org explains it the same way: the donor\u2019s family is never charged for donation; costs for organ recovery go to the transplant recipient.',
    },
    {
      q: 'Can we still have an open-casket viewing after organ donation?',
      a: 'Usually, yes. Donate Life states that funeral arrangements of your choice are possible after donation, including a viewing, and the body is treated with care and respect throughout. Mayo Clinic notes that the surgical incisions are closed afterward. Talk to the funeral director about any cosmetic concerns for specific tissue recoveries.',
    },
    {
      q: 'Can I donate both my organs and my whole body to science?',
      a: 'Usually not both. Many anatomical programs decline bodies from which organs have been removed \u2014 for example, Weill Cornell Medicine states that bodies that have had organs removed are unsuitable for anatomical study. Cornea (eye) donation is the common exception and can often be combined with whole-body donation. If both interest you, decide your priority and tell your family.',
    },
    {
      q: 'Is whole-body donation to a medical school guaranteed once I register?',
      a: 'No. Registration is an expression of intent, not a promise of acceptance. Programs evaluate medical suitability at the time of death and can decline \u2014 for reasons such as infectious disease, certain traumas, autopsy, or prior embalming. Next-of-kin consent is usually required as well. Always have a backup plan, such as a simple cremation.',
    },
    {
      q: 'How long before ashes are returned after whole-body donation?',
      a: 'Typically months to a few years. Anatomical studies commonly take three months to two years (University of Utah Body Donor Program FAQs), and cremation follows after studies are complete. Programs usually let the donor designate whether ashes are returned to the family or interred in a cemetery plot or memorial garden.',
    },
    {
      q: 'What is the difference between an anatomical gift and body donation?',
      a: 'They are the same thing: an \u201canatomical gift\u201d is the legal term for donating your body, organs, or tissues after death, under the Uniform Anatomical Gift Act adopted by every state. Organ donation sends organs to living patients; whole-body donation sends the body to a medical school or research program.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Body & Organ Donation: How It Works', url: SITE_URL + '/guides/body-organ-donation-guide/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Body &amp; organ donation</nav>
      <JsonLd data={articleJsonLd({
        title: 'Body & Organ Donation: How It Works',
        description: 'How organ, tissue, and whole-body donation work: costs (or lack of them), funeral arrangements afterward, and modeled national funeral-cost estimates.',
        url: SITE_URL + '/guides/body-organ-donation-guide/',
        datePublished: '2026-09-24',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="body-organ-donation-guide" imageAlt="Body & Organ Donation: How It Works"><h1>Body &amp; organ donation: how it works</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> organ and tissue donation is free to the donor&rsquo;s
          family &mdash; Donate Life states there is no cost to the donor&rsquo;s family or
          estate for donation itself &mdash; and an open-casket viewing is usually still possible
          afterward. Whole-body donation to a medical school or research program is also typically
          free to the family: most programs cremate the body at their expense when studies are
          complete and return the ashes. Acceptance is never guaranteed, so have a backup plan.
          Donation doesn&rsquo;t prevent a memorial service; the family still pays for whatever
          funeral arrangements they choose.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>
        <p>
          This guide is general information, not legal or medical advice. Policies vary by
          program and state, so confirm the details with the program or hospital you choose.
        </p>

        <h2>Organ and tissue donation: the basics</h2>
        <p>
          Organ donation helps living patients &mdash; one donor can save up to eight lives, and
          tissue donation can improve many more (Mayo Clinic, 2023). It applies to organs such as
          the heart, kidneys, liver, and lungs, and to tissues such as corneas, skin, bone, and
          heart valves.
        </p>
        <p>Here&rsquo;s how it works in practice:</p>
        <ul>
          <li><strong>Register your decision.</strong> Sign up through your state&rsquo;s donor registry or mark the designation on your driver&rsquo;s license. Telling your family is just as important as the paperwork.</li>
          <li><strong>The hospital team is separate from the transplant team.</strong> Doctors treating you do not know your donor status, and donation is considered only after death has been declared (Donate Life FAQs).</li>
          <li><strong>An organ procurement organization evaluates suitability.</strong> The hospital contacts the local organ procurement organization (OPO), which checks the donor registry, reviews medical history, and determines which organs and tissues are healthy enough to donate.</li>
          <li><strong>The family is asked, if you aren&rsquo;t registered.</strong> If the person isn&rsquo;t a registered donor, the OPO asks the next of kin whether they wish to authorize donation.</li>
        </ul>
        <p>
          <strong>Cost:</strong> the family pays for medical care given before death and for the
          funeral &mdash; never for the donation itself. Mayo Clinic&rsquo;s myth-busting guide
          explains that recovery costs go to the transplant recipient (usually through their
          insurance), not to the donor&rsquo;s family.
        </p>
        <p>
          <strong>Timing:</strong> procurement happens before the body is released to the funeral
          home, which can modestly delay funeral arrangements &mdash; often by a day or so.
          Donate Life states that funeral arrangements of your choice are possible, including a
          viewing, and that the body is treated with care and respect throughout the process.
        </p>

        <h2>Whole-body donation to science: what to expect</h2>
        <p>
          Donating your body to a medical school or research program means the body is used for
          anatomical study and medical training, then cremated. It&rsquo;s a separate path from
          organ donation &mdash; and usually an either/or choice, since many programs decline
          bodies from which organs have been removed (for example, Weill Cornell Medicine lists
          this as an automatic decline). Cornea donation is the common exception that can often
          be combined with whole-body donation.
        </p>
        <p>Arranging it in advance:</p>
        <ul>
          <li><strong>Pre-register with a specific program.</strong> Contact the anatomical gift program at a medical school in your state or a licensed non-transplant research organization. You&rsquo;ll complete consent forms well before the need arises.</li>
          <li><strong>Tell your family &mdash; they&rsquo;re the ones who act.</strong> Programs typically require next-of-kin consent at the time of death, and several will decline if close family members oppose the donation (Emory University Body Donor Program). Your family also has to notify the program promptly when death occurs.</li>
          <li><strong>Don&rsquo;t embalm first.</strong> Most programs must receive the body unembalmed, quickly after death. Weill Cornell notes that bodies embalmed commercially before delivery are declined as unsuitable.</li>
          <li><strong>Have a backup plan.</strong> Acceptance is never guaranteed. Programs can decline for medical reasons &mdash; infectious disease, certain traumas, autopsy, or extreme obesity are common examples &mdash; and if you die far from the program, the family may have to cover transport. If the donation can&rsquo;t happen, the family needs a ready alternative, such as a direct cremation.</li>
        </ul>
        <p>
          <strong>What programs typically cover:</strong> most medical-school programs transport
          the body (often within a set radius &mdash; for example, the University of Utah&rsquo;s
          program picks up within 100 miles of Salt Lake City at no expense to the family),
          handle the study period, and cremate the remains at their expense when studies are
          complete. Studies usually last three months to two years. The ashes are then returned
          to the family or placed in a common repository or cemetery plot, according to the
          donor&rsquo;s wishes &mdash; a pattern confirmed by program FAQs at the University of
          Utah, NYU Grossman School of Medicine, and Emory. Any extra costs, such as transport
          beyond the program&rsquo;s area or registered-mail shipping of ashes, are the typical
          exceptions the family should ask about in writing.
        </p>

        <h2>What donation means for your funeral plans</h2>
        <p>
          Donation changes what happens to the body &mdash; it doesn&rsquo;t prevent you from
          gathering and remembering the person:
        </p>
        <ul>
          <li><strong>Memorial services are always possible.</strong> A service without the body present can happen days or weeks after death, wherever you choose. After organ or tissue donation, a traditional funeral with a viewing is usually possible too.</li>
          <li><strong>With whole-body donation, plan around the timeline.</strong> Ashes may not be returned for months or years, so many families hold a memorial service soon after death and a smaller ceremony when the ashes come home.</li>
          <li><strong>You still pay for funeral arrangements you choose.</strong> Donation covers the donation, not the funeral. If your backup plan is a cremation, our modeled national estimates are {fmt(A.direct_cremation.value)} for direct cremation and {fmt(A.cremation_with_service.value)} for cremation with a service &mdash; modeled estimates in August 2026 dollars built from NFDA 2023 medians, not quotes. Read more in our <Link href="/guides/cremation-cost-2026/">cremation cost guide</Link>.</li>
          <li><strong>Death certificates still matter.</strong> Order several certified copies early for banks, insurers, and property transfer &mdash; typically $5&ndash;$35 each depending on the state. Our <Link href="/guides/when-someone-dies-checklist/">checklist for when someone dies</Link> covers the paperwork order.</li>
        </ul>
        <p>
          For help thinking through which arrangement fits a tight budget, see our guide to <Link href="/guides/paying-for-a-funeral/">paying for a funeral</Link>.
        </p>

        <h2>Documenting your wishes so your family isn&rsquo;t guessing</h2>
        <p>
          The single biggest failure point in donation plans is that the family doesn&rsquo;t
          know what the person wanted &mdash; and they&rsquo;re the ones who have to authorize
          it under time pressure. Make it unmistakable:
        </p>
        <ul>
          <li><strong>Register and designate.</strong> Join your state donor registry and mark your driver&rsquo;s license or ID. For whole-body donation, keep the program&rsquo;s consent forms somewhere your family will find them.</li>
          <li><strong>Tell your family directly.</strong> A conversation removes doubt and reduces conflict when the hospital or the anatomical program asks for authorization.</li>
          <li><strong>Put it in writing.</strong> Include your donation wishes in your will or advance directive, along with the program name and phone number. A will is usually read after the funeral, so make sure someone who acts at the time of death has a copy of the instructions.</li>
          <li><strong>Name a backup.</strong> Write down what should happen if the donation isn&rsquo;t accepted &mdash; for example, a direct cremation with a memorial service.</li>
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
          <Link href="/guides/cremation-cost-2026/">Cremation costs in 2026 →</Link>
          {' · '}
          <Link href="/guides/when-someone-dies-checklist/">When someone dies: the checklist →</Link>
          {' · '}
          <Link href="/guides/paying-for-a-funeral/">Paying for a funeral →</Link>
        </p>
      <RelatedGuides currentSlug="body-organ-donation-guide" />
      </div>
    </>
  );
}
