import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

export const metadata: Metadata = {
  title: "Indigent Burial Assistance (2026): County Programs & What to Do With No Money for a Funeral",
  description:
    'How county indigent burial programs work: who qualifies, what they cover (usually direct cremation or a simple burial), what they do not, plus the VA\u2019s free national-cemetery burial for veterans and Social Security\u2019s one-time $255 lump-sum death payment.',
  alternates: { canonical: SITE_URL + '/guides/indigent-burial-assistance/' },
  openGraph: {
    title: "Indigent Burial Assistance (2026): County Programs & No-Money Funeral Options",
    description:
      'There is no federal indigent burial program \u2014 the real safety net is run by counties. Who qualifies, what they cover, veterans\u2019 free national-cemetery burial, and the SSA $255 payment.',
    url: SITE_URL + '/guides/indigent-burial-assistance/',
  },
};

export default function IndigentBurialAssistance() {
  const faqs = [
    {
      q: 'Is there a federal program that pays for an indigent burial?',
      a: 'No. There is no federal indigent burial program \u2014 the safety net is run locally: counties pay for the disposition of unclaimed or indigent dead under state law, and a handful of states run their own burial-assistance programs. Medicaid does not pay for funerals or burials at the federal level, though it does let people set aside a small burial fund (often around $1,500) without losing eligibility.',
    },
    {
      q: 'What does a county indigent burial program actually cover?',
      a: 'Usually the most basic disposition possible: direct cremation or a simple burial, with no viewing, no funeral service, and no ceremony. For example, Seminole County, Florida runs an indigent cremation program that explicitly provides no funerals, memorial viewing, or visitation. Details vary by county, but the baseline everywhere is dignified but bare-bones.',
    },
    {
      q: 'Will I get the ashes back after an indigent cremation?',
      a: 'It depends on the county, so ask before you sign anything. In some counties the answer is no: Napa County, California tells families plainly that it will handle final disposition, there are no provisions for services or viewing, and the remains will not be returned to the family \u2014 the burial site is marked with a reference number only. Other counties return ashes on request.',
    },
    {
      q: 'Who qualifies for indigent burial assistance?',
      a: 'Two things almost always have to be true: the deceased was a resident of the county, and the deceased \u2014 and the person legally responsible for the disposition \u2014 cannot afford it. Seminole County, Florida requires the death to have occurred in the county, no life insurance, no property, and household income at or below 100% of the federal poverty guidelines. Napa County requires both the decedent and the next of kin to be legally indigent.',
    },
    {
      q: 'Can a veteran get a free burial if the family cannot pay?',
      a: 'Yes. Any eligible veteran \u2014 generally one who served on active duty and was discharged under conditions other than dishonorable \u2014 is entitled to burial in a VA national cemetery at no cost to the family. The VA provides the gravesite, opening and closing of the grave, a burial liner, a government headstone or marker, perpetual care, a burial flag, a Presidential Memorial Certificate, and military funeral honors. What it does not cover: the funeral home\u2019s services, the casket or urn, cremation itself, and transporting the remains. There are 155 national cemeteries in 42 states and Puerto Rico.',
    },
    {
      q: 'Who gets Social Security\u2019s $255 lump-sum death payment?',
      a: 'The one-time $255 lump-sum death payment goes to the eligible surviving spouse of a worker who was fully or currently insured \u2014 typically a spouse who was living with the worker, or one living separately but entitled to benefits on the worker\u2019s record. If there is no eligible spouse, it goes to the worker\u2019s dependent children. A surviving spouse who was already receiving benefits on the worker\u2019s record may get it automatically; others must apply within 2 years of the death. The amount has been capped at $255 since 1954, and the SSA\u2019s own inspector general notes it has no legal connection to burial expenses \u2014 it is a survivor benefit, not funeral assistance.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Indigent burial assistance', url: SITE_URL + '/guides/indigent-burial-assistance/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Indigent burial assistance</nav>
        <JsonLd data={articleJsonLd({
          title: "Indigent Burial Assistance (2026): County Programs & What to Do With No Money for a Funeral",
          description: 'How county indigent burial programs work: who qualifies, what they cover (usually direct cremation or a simple burial), what they do not, plus the VA\u2019s free national-cemetery burial for veterans and Social Security\u2019s one-time $255 lump-sum death payment.',
          url: SITE_URL + '/guides/indigent-burial-assistance/',
          datePublished: '2026-10-01',
          dateModified: LAST_UPDATED,
          siteUrl: SITE_URL,
        })} />
        <GuideHero slug="indigent-burial-assistance" imageAlt="Indigent burial assistance: a simple granite grave marker in a quiet, muted cemetery"><h1>Indigent burial assistance (2026): county programs and what to do when there's no money for a funeral</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> if there is no money for a funeral, start with the <strong>county coroner,
          public administrator, or social services office</strong> where the person died. <strong>Indigent burial</strong> programs
          exist in counties across the country and will pay for a basic disposition \u2014 usually direct cremation or
          a simple burial \u2014 when the deceased and the family genuinely cannot afford it. Help exists, but it is
          basic: no viewing, no service, and sometimes the ashes are not returned. There is <strong>no federal indigent
          burial program</strong>, Medicaid does not pay for funerals, and the SSA's well-known $255 payment goes only
          to an eligible surviving spouse or dependent children.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>How indigent burial programs work</h2>
        <p>
          In the U.S., disposing of the unclaimed and indigent dead is a <strong>county responsibility</strong> under
          state law. Procedures vary by jurisdiction, but the pattern is consistent: the county pays a funeral provider
          a modest, capped amount for a bare-bones disposition, and a county agency \u2014 the coroner or medical
          examiner, the public administrator or public guardian, or the social services department \u2014 decides who
          qualifies. A few real examples:
        </p>
        <ul>
          <li><strong>Clark County, Nevada</strong> \u2014 Clark County Social Service covers burial or cremation expenses
          for deceased indigent individuals. The deceased must have been a county resident, and the people legally
          responsible for disposition must meet financial requirements based on household size. The county takes
          referrals only from contracted funeral establishments and its Public Administrator/Guardian office.</li>
          <li><strong>Napa County, California</strong> \u2014 the county buries indigents through the Public Guardian.
          If the family qualifies, the county handles final disposition \u2014 and says plainly there are no
          provisions for services or viewing, the remains will not be returned to the family, and the grave is marked
          with a reference number only.</li>
          <li><strong>Bexar County, Texas</strong> \u2014 Texas law requires each county's commissioners court to provide
          for the disposition of a deceased pauper's body. Bexar County runs its pauper burial program through the
          Community Resources department, with strict income and asset requirements for both the deceased and the legal
          next of kin.</li>
          <li><strong>Seminole County, Florida</strong> \u2014 the county provides cremations for indigent individuals
          who die within county borders, and states plainly that it does not provide funerals, memorial viewing,
          visitation, or any other services.</li>
        </ul>
        <p>
          Funeral homes that contract with these programs know the local process \u2014 in Clark County, Nevada, the
          program only takes referrals through contracted providers \u2014 so a local funeral director is often the
          fastest way to find out how your county's version works.
        </p>

        <h2>Who qualifies</h2>
        <p>
          Every county sets its own rules, but the same three tests show up almost everywhere:
        </p>
        <ul>
          <li><strong>Residency:</strong> the deceased must have been a resident of the county (usually the county where
          they died or lived). Clark County, Nevada, requires county residency; Seminole County, Florida, requires the
          death to have occurred within county borders.</li>
          <li><strong>Financial need:</strong> the deceased must have no resources to pay for disposition \u2014 no life
          insurance, no property, no savings. Seminole County, Florida, requires household income at or below 100% of
          the federal poverty guidelines, plus no life insurance and no property ownership.</li>
          <li><strong>The next of kin can't pay either:</strong> most counties means-test the family, not just the
          deceased. Napa County requires <em>both</em> the decedent and the person legally responsible for disposition
          to be legally indigent. Bexar County applies strict income and asset tests to the legal next of kin as well.</li>
        </ul>
        <p>
          A few things that usually disqualify a case: life insurance in any amount, a prepaid funeral plan or burial
          trust, real property, and donations raised for the funeral \u2014 the county is the payor of last resort.
        </p>

        <h2>What indigent burial programs do NOT cover</h2>
        <p>
          This is the part to understand before you apply. Indigent programs buy the minimum dignified disposition:
        </p>
        <ul>
          <li><strong>No viewing or visitation.</strong> Nearly every program excludes it \u2014 Seminole County, Florida,
          and Napa County, California, both say so in writing.</li>
          <li><strong>No funeral or memorial service.</strong> There may be a brief graveside placement, but nothing
          like a traditional service with guests and a program.</li>
          <li><strong>The ashes may not come back.</strong> In Napa County, the county keeps the remains and does not
          return them; the grave is marked with a reference number, not a name. Other counties return ashes on request
          \u2014 always ask.</li>
          <li><strong>Little choice of provider or timing.</strong> The county picks a contracted funeral home or
          crematory, and the schedule is theirs, not yours.</li>
        </ul>
        <p>
          Some counties do provide a modest marker, but programs change their details and budgets over time, so
          confirm what your county currently includes before counting on it.
        </p>

        <h2>How to apply, step by step</h2>
        <ol>
          <li><strong>Don't sign a funeral contract first.</strong> Applying for help generally requires that no
          prepaid or contracted arrangement exists.</li>
          <li><strong>Gather basic documents:</strong> the deceased's photo ID, your own ID and proof of relationship,
          one month of bank statements and income verification for the household, and anything showing there is no life
          insurance, property, or prepaid plan.</li>
          <li><strong>Call the right county office.</strong> Ask for the coroner or medical examiner's office, the
          public administrator or public guardian, or the social services department \u2014 say "I need help with the
          indigent burial or pauper's burial program." A local funeral home can also point you to the right desk.</li>
          <li><strong>Apply and wait for the eligibility decision.</strong> The county verifies residency and financial
          need for both the deceased and the family \u2014 it is the payor of last resort.</li>
        </ol>
        <p>
          A useful rule of thumb from the Funeral Consumers Alliance of Georgia: in Georgia, state law requires each
          county to help with a "decent" burial or cremation when the person who died and their family have no money,
          but each county does things differently.
        </p>

        <h2>Veterans: free burial in a national cemetery</h2>
        <p>
          If the deceased was a veteran, there is a much better option before falling back on an indigent program. Any
          eligible veteran \u2014 generally, one who served on active duty and was discharged under conditions other
          than dishonorable, plus service members who died on active duty \u2014 is entitled to burial in a VA
          national cemetery <strong>at no cost to the family</strong>. The VA provides the gravesite, opening and
          closing of the grave, a burial liner, a government headstone or marker, perpetual care, a burial flag, a
          Presidential Memorial Certificate, and military funeral honors. Spouses and dependent children of eligible
          veterans can also be buried there, and there are 155 national cemeteries in 42 states and Puerto Rico. The
          benefit does not cover the funeral home's services, the casket or urn, cremation itself, or transport \u2014
          see our <Link href="/guides/veterans-burial-benefits/">veterans burial benefits guide</Link> for the full picture.
        </p>

        <h2>The Social Security $255 lump-sum death payment \u2014 explained precisely</h2>
        <p>
          You've probably heard that Social Security pays $255 when someone dies. That's real, but widely
          misunderstood. Per the Congressional Research Service and the SSA's own guidance:
        </p>
        <ul>
          <li>It is a <strong>one-time payment</strong> (the "lump-sum death payment"), capped at <strong>$255 since
          1954</strong> \u2014 its inflation-adjusted value shrinks every year.</li>
          <li>It goes to the <strong>eligible surviving spouse</strong> \u2014 typically one who was living with the
          worker at death, or one living separately but entitled to benefits on the worker's record. A divorced spouse
          does not get it.</li>
          <li>If there is no eligible spouse, it goes to the worker's <strong>dependent children</strong> (generally 17
          or younger, 18\u201319 in school, or disabled before age 22).</li>
          <li>The deceased must have been <strong>fully or currently insured</strong> under Social Security \u2014 not
          everyone qualifies.</li>
          <li>A spouse already receiving benefits on the worker's record may receive it automatically; everyone else
          must <strong>apply within 2 years</strong> of the death.</li>
        </ul>
        <p>
          Crucially, this is <strong>not funeral assistance</strong>: the SSA's own inspector general notes that the
          payment has no legal connection to burial expenses. It is a small survivor benefit, not a funeral fund \u2014
          see our <Link href="/guides/paying-for-a-funeral/">paying-for-a-funeral guide</Link> for real options when
          money is tight.
        </p>

        <h2>Other last-resort options</h2>
        <ul>
          <li><strong>Donate the body to science.</strong> Medical schools and whole-body donation programs typically
          cover cremation costs afterward and return the ashes to the family. See our <Link href="/guides/body-organ-donation-guide/">body and organ
          donation guide</Link>.</li>
          <li><strong>A family-directed home funeral.</strong> Where legal \u2014 and home funerals are legal in every
          state \u2014 families can handle the body themselves for typically under $500, though cremation or cemetery
          fees are still separate. See our <Link href="/guides/home-funeral-cost/">home funeral cost guide</Link>.</li>
          <li><strong>Shop direct cremation hard.</strong> A simple <Link href="/guides/cremation-cost-2026/">direct
          cremation</Link> from an independent provider is often the cheapest private option by a wide margin \u2014
          compare itemized prices before signing anything (the FTC Funeral Rule requires funeral homes to give you a
          written itemized price list; see our <Link href="/guides/funeral-rule-rights/">Funeral Rule rights
          guide</Link>).</li>
        </ul>

        <h2>What NOT to do</h2>
        <ul>
          <li><strong>Don't sign a funeral contract you can't pay for.</strong> Once you sign, the debt is yours \u2014
          the funeral home can send it to collections. If you cannot pay, say so clearly and ask for time before
          deciding anything. The FTC's Funeral Rule gives you the right to buy only what you want, item by item, and
          to get prices in writing.</li>
          <li><strong>Don't put it on a credit card out of guilt.</strong> High-interest debt for a funeral turns
          grief into a financial emergency that lasts years. A basic, dignified disposition now is a better legacy
          than a payment plan you can't afford.</li>
          <li><strong>Don't assume Medicaid or the federal government will step in.</strong> There is no federal
          program and Medicaid does not pay for funerals \u2014 a few states run small separate burial-assistance
          programs, but help starts at the county office, not in Washington.</li>
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
          <Link href="/guides/paying-for-a-funeral/">Paying for a funeral: every option →</Link>
          {' · '}
          <Link href="/guides/veterans-burial-benefits/">Veterans burial benefits →</Link>
          {' · '}
          <Link href="/guides/home-funeral-cost/">Home funeral cost & legality →</Link>
          {' · '}
          <Link href="/guides/body-organ-donation-guide/">Body donation to science →</Link>
        </p>
      <RelatedGuides currentSlug="indigent-burial-assistance" />
      </div>
    </>
  );
}
