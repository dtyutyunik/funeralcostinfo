import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'How Much Does a Death Certificate Cost? (2026) State Fees + How Many Copies You Need',
  description:
    'How much a death certificate costs by state ($5–$30+ per certified copy), how many copies a family needs (typically 5–10), who can order them, and how long they take.',
  alternates: { canonical: SITE_URL + '/guides/death-certificates-cost/' },
  openGraph: {
    title: 'How Much Does a Death Certificate Cost? (2026) State Fees + How Many Copies You Need',
    description:
      'Certified death certificate fees by state, how many copies estates typically need, who is allowed to order, and realistic turnaround times.',
    url: SITE_URL + '/guides/death-certificates-cost/',
  },
};

export default function DeathCertificatesCost() {
  const faqs = [
    {
      q: 'How much does a death certificate cost?',
      a: 'A certified copy costs roughly $5\u2013$30 for the first copy depending on the state, with most states charging $10\u2013$25. Examples: California $26 per copy (as of January 2026), New York $30 through the state office, Texas $20 for the first copy and $3 for additional copies ordered at the same time, Louisiana $7. Additional copies ordered together usually cost less than the first.',
    },
    {
      q: 'How many copies of a death certificate do I need?',
      a: 'Most estates need 5\u201310 certified copies; probate attorneys commonly advise ordering 8\u201312 upfront for anything involving property, multiple accounts, or several insurers. You need one for each life-insurance policy, each bank or brokerage (many keep the original), Social Security, the probate court, real-estate and vehicle transfers, and employer or pension claims. Ordering extras at once is cheaper than re-ordering later, when you may pay the full first-copy fee again.',
    },
    {
      q: 'Who can get a certified copy of a death certificate?',
      a: 'Certified copies \u2014 the kind with the registrar\u2019s seal used for legal and financial claims \u2014 are generally restricted to the spouse or domestic partner, parents, children, siblings, grandparents and grandchildren, the executor or administrator of the estate, and attorneys or agencies acting for them. You will normally be asked to state your relationship and show ID.',
    },
    {
      q: 'How long does it take to get a death certificate?',
      a: 'Many vital-records offices estimate two to four weeks for delivery. It varies widely: Texas reports 20\u201325 days for online orders and 25\u201330 days by mail, while walk-in offices like Austin\u2019s print certificates in about 30 minutes. Deaths requiring a coroner or medical examiner investigation take longer, and some institutions let you start paperwork while certificates are pending.',
    },
    {
      q: 'Can I order death certificates online?',
      a: 'Yes \u2014 through your state vital-records office, your county office, or third-party services such as VitalChek, which add their own processing and shipping fees on top of the state fee. The funeral home can also order copies for you and passes the state fee through at cost, which is the simplest option for the first batch.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Death certificate costs', url: SITE_URL + '/guides/death-certificates-cost/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Death certificate costs</nav>
        <JsonLd data={articleJsonLd({
          title: 'How Much Does a Death Certificate Cost? (2026) State Fees + How Many Copies You Need',
          description: 'How much a death certificate costs by state ($5\u2013$30+ per certified copy), how many copies a family needs (typically 5\u201310), who can order them, and how long they take.',
          url: SITE_URL + '/guides/death-certificates-cost/',
          datePublished: '2026-09-30',
          dateModified: LAST_UPDATED,
          siteUrl: SITE_URL,
        })} />
        <GuideHero slug="death-certificates-cost" imageAlt="How much does a death certificate cost? State fees and how many copies you need"><h1>How much does a death certificate cost? (2026) state fees + how many copies you need</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> a certified death certificate costs about
          <strong> $5–$30 for the first copy</strong>, with most states charging $10–$25,
          and additional copies ordered at the same time usually cost less. Most families
          need <strong>5–10 certified copies</strong>; estates with property, multiple
          accounts, or several insurers should order <strong>8–12</strong>. Order through
          the funeral home or your state vital-records office — and order extra copies up
          front, because re-ordering later can mean paying the full first-copy fee again.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>How much does a death certificate cost by state?</h2>
        <p>
          Fees are set by each state (and sometimes by the county), so there is no single
          national price. The CDC's "Where to Write for Vital Records" directory is the
          official starting point — it lists the current fee and ordering address for
          every state, and notes that fees are subject to change. Verified examples from
          state vital-records offices and funeral-industry surveys:
        </p>
        <table className="data">
          <caption>Certified death certificate fees, selected states (verify current fees with your state's vital-records office — fees change).</caption>
          <thead>
            <tr>
              <th>State</th>
              <th>First certified copy</th>
              <th>Additional copies (same order)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>California</td><td>$26</td><td>$26 per copy</td></tr>
            <tr><td>Florida</td><td>$5 (state office)</td><td>$4 (county offices may charge more)</td></tr>
            <tr><td>Louisiana</td><td>$7 (+$0.50 mail-in)</td><td>—</td></tr>
            <tr><td>Massachusetts</td><td>$20 in person / $32 by mail</td><td>—</td></tr>
            <tr><td>Minnesota</td><td>$13</td><td>$6</td></tr>
            <tr><td>New Hampshire</td><td>$15</td><td>$10</td></tr>
            <tr><td>New York (state office, excl. NYC)</td><td>$30</td><td>—</td></tr>
            <tr><td>North Carolina</td><td>$10</td><td>$10</td></tr>
            <tr><td>South Carolina</td><td>$12</td><td>$3</td></tr>
            <tr><td>Texas (state office)</td><td>$20</td><td>$3</td></tr>
            <tr><td>Utah</td><td>$30 (rising to $35 from July 2026)</td><td>$10</td></tr>
          </tbody>
        </table>
        <p>
          Sources: CDC "Where to Write for Vital Records" pages for FL, LA, MA, NH, NY,
          TX, and UT; Titan Casket's 2026 funeral-director survey for CA; National
          Cremation's funeral-director Q&amp;A for MN, NC, and SC. New York City keeps its
          own vital records separate from the rest of the state, so check the city office
          if the death occurred in the five boroughs. Fees vary — a few dollars more or
          less than the table by the time you order is normal; what matters is the order
          of magnitude.
        </p>
        <p>
          Two pricing traps to avoid: <strong>online ordering surcharges</strong> —
          third-party services like VitalChek add processing and shipping fees on top of
          the state fee — and <strong>county markups</strong>, since some county offices
          charge more than the state office for the same certificate. The funeral home
          passes the state fee through at cost, so there is no savings in ordering the
          first batch yourself; the difference is convenience. See state-level costs in
          our <Link href="/funeral-costs/texas/">Texas funeral costs page</Link> or
          {' '}<Link href="/funeral-costs/california/">California funeral costs page</Link>.
        </p>

        <h2>How many copies of a death certificate do you need?</h2>
        <p>
          This is the question families get wrong most often — and running short stalls
          everything downstream. Estate and probate guidance converges on a clear rule:
        </p>
        <ul>
          <li><strong>5–10 certified copies</strong> for most estates — enough to handle probate, banks, insurers, and government agencies in parallel.</li>
          <li><strong>8–12 copies</strong> when the estate involves real estate, multiple bank or brokerage accounts, several life-insurance policies, or business interests — the range probate attorneys in New Jersey and North Carolina advise clients to order.</li>
          <li><strong>Fewer</strong> only if the estate is very simple: no property, one bank account, one insurer, no probate.</li>
        </ul>
        <p>
          Where the copies go — one certified copy per stop, because many institutions
          keep the original:
        </p>
        <ul>
          <li>Each <strong>life-insurance or annuity policy</strong> (one per policy)</li>
          <li>Each <strong>bank, brokerage, or credit-card account</strong> in the deceased's name</li>
          <li><strong>Social Security</strong> (survivor benefits), pensions, and retirement plans</li>
          <li><strong>Probate court</strong>, if the estate goes through probate (1–2 copies)</li>
          <li><strong>Real-estate transfers, vehicle titles, and transfer-on-death deeds</strong></li>
          <li><strong>VA benefits</strong>, including burial in a national cemetery — see our <Link href="/guides/veterans-burial-benefits/">veterans burial benefits guide</Link></li>
          <li>Employer HR, unions, and professional associations</li>
        </ul>
        <p>
          Ask each institution <strong>before</strong> handing over a certified copy:
          some accept a photocopy, and some will return the original after review.
          Keep a simple log of where every copy went — when an unexpected request
          arrives months later, you'll know whether you have spares left.
        </p>

        <h2>Who files it, and who is allowed to order copies</h2>
        <p>
          In most states the <strong>funeral director files the death certificate</strong>
          with the state or county vital-records office as part of the arrangements —
          the physician or coroner certifies the cause of death, the funeral home
          completes the filing. That is also why ordering your first batch through the
          funeral home is simplest: they are already in the paperwork flow.
        </p>
        <p>
          <strong>Certified copies</strong> — the ones with the registrar's seal that
          banks, insurers, and courts accept — are restricted in most states to people
          with a direct interest: the spouse or domestic partner, parents, children,
          siblings, grandparents and grandchildren, the executor or administrator of the
          estate, and attorneys or agencies acting for them. Expect to state your
          relationship and show ID. <strong>Informational copies</strong> (stamped "not
          valid for legal purposes") are available to anyone in many states and work
          for genealogy and personal records — but a few states, including New York, do
          not issue informational copies at all and apply the same restrictions to every
          request.
        </p>

        <h2>How long does it take to get a death certificate?</h2>
        <p>
          Expect <strong>two to four weeks</strong> for delivery in most states — that is
          the estimate many vital-records offices give. Reality varies widely:
        </p>
        <ul>
          <li><strong>Texas:</strong> 20–25 days for online orders, 25–30 days by mail, per the Department of State Health Services.</li>
          <li><strong>Walk-in offices</strong> are fastest: Austin's vital-records office prints certificates in about 30 minutes for in-person requests.</li>
          <li><strong>Coroner or medical-examiner cases</strong> take longer — the cause-of-death determination has to be complete before the certificate is final.</li>
        </ul>
        <p>
          Good news: you usually don't have to wait. Many institutions let you
          <strong>start claims while certificates are pending</strong>, and services like
          funerals and cremations can often proceed once the required permits and
          authorizations are in place. Ask your funeral director about typical timelines
          in your state — and see our <Link href="/guides/when-someone-dies-checklist/">when someone
          dies checklist</Link> for what to do in the first days.
        </p>

        <h2>Save money: order smart the first time</h2>
        <ul>
          <li><strong>Over-order, don't under-order.</strong> Additional copies bought with the first order are usually cheaper (Texas: $3 vs. $20; New Hampshire: $10 vs. $15). A new order months later can cost you the full first-copy fee again.</li>
          <li><strong>Ask "will you return it?"</strong> before surrendering a certified copy — some banks and agencies review the original and hand it back, or accept a plain photocopy.</li>
          <li><strong>Skip the middleman markup when it matters.</strong> Ordering through the funeral home costs the same state fee; ordering through a third-party site adds processing and shipping.</li>
          <li><strong>Keep the receipt and a copy log.</strong> If an insurer or agency claims it never received one, you'll want proof of exactly what you ordered and where it went.</li>
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
          <Link href="/guides/when-someone-dies-checklist/">When someone dies: the checklist →</Link>
          {' · '}
          <Link href="/guides/paying-for-a-funeral/">Paying for a funeral →</Link>
          {' · '}
          <Link href="/guides/shipping-remains/">Shipping remains across state lines →</Link>
          {' · '}
          <Link href="/guides/veterans-burial-benefits/">Veterans burial benefits →</Link>
          {' · '}
          <Link href="/guides/funeral-rule-rights/">Your Funeral Rule rights →</Link>
        </p>
      <RelatedGuides currentSlug="death-certificates-cost" />
      </div>
    </>
  );
}
