import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { PAGE_DATES } from '../../../lib/page-dates';
import { SITE_URL, LAST_UPDATED } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Who Gets the Ashes? Who Legally Owns Cremated Remains',
  description:
    'Cremated remains go to the person who holds the legal right to control disposition under state law: usually a designated agent, then spouse, adult children, parents. How the order works, splitting ashes, disputes, and unclaimed remains.',
  alternates: { canonical: SITE_URL + '/guides/who-gets-the-ashes/' },
  openGraph: {
    title: 'Who Gets the Ashes? Who Legally Owns Cremated Remains',
    description:
      'The state-law priority order that decides who receives cremated remains, why paying for the cremation does not decide it, and what happens when families disagree.',
    url: SITE_URL + '/guides/who-gets-the-ashes/',
  },
};

export default function WhoGetsTheAshes() {
  const faqs = [
    {
      q: 'Does the person who paid for the cremation get the ashes?',
      a: 'Not automatically. Payment and legal authority are separate things. The funeral home releases cremated remains to the person who holds the right to control disposition under state law (or to that person\'s written designee), even if a different family member paid the bill. Paying can matter to an estate accounting later, but it does not outrank the statutory order.',
    },
    {
      q: 'Can ashes be split among family members?',
      a: 'Yes, in practice. Nothing in most state laws prevents dividing cremated remains, and funeral homes and crematories do it routinely when the person with legal authority asks. The catch is authority: the person at the top of the priority order usually has to request or approve the split. If that person refuses, other family members generally cannot force a division without a court order.',
    },
    {
      q: 'Does the executor of the will get the ashes?',
      a: 'Not by virtue of being executor. The executor manages the estate\'s money and property. Control of the body and the ashes follows the state\'s disposition rules: first a person the deceased designated in writing in most states, then the next of kin in the statutory order. The roles often overlap in the same person, which is why the confusion is common, but they are legally different jobs.',
    },
    {
      q: 'What happens if family members cannot agree on the ashes?',
      a: 'In practice, the funeral home waits. Funeral homes and crematories are generally protected when they refuse to act while a good-faith dispute exists among people of equal or higher priority, and they will often hold the remains until the family reaches agreement or a court decides. Courts can and do rule on these disputes, but it takes time and money, which is why most of these fights settle by negotiation in the first days or weeks.',
    },
    {
      q: 'What happens to unclaimed ashes?',
      a: 'Funeral homes hold unclaimed cremated remains for a period set by state law or regulation, commonly a year or more, while making documented attempts to contact the family. After that period, many states allow the funeral home to dispose of the remains in a common grave, ossuary, or scattering garden, and some require notice first. A relative can usually still claim the remains during the holding period with identification and proof of their place in the priority order.',
    },
    {
      q: 'Is this article legal advice?',
      a: 'No. This is general information about how disposition rights commonly work in the United States. The rules are state law, they change, and individual situations (a written designation, a pending divorce, a dispute among siblings) can change the answer. If you are in an active dispute over remains, consult a licensed attorney in your state promptly, because cremation and burial decisions cannot wait.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Who gets the ashes', url: SITE_URL + '/guides/who-gets-the-ashes/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Who gets the ashes</nav>
      <JsonLd data={articleJsonLd({
        title: 'Who Gets the Ashes? Who Legally Owns Cremated Remains',
        description:
          'Cremated remains go to the person who holds the legal right to control disposition under state law. How the priority order works, splitting ashes, disputes, and unclaimed remains.',
        url: SITE_URL + '/guides/who-gets-the-ashes/',
        datePublished: '2026-11-13',
        dateModified: PAGE_DATES['/guides/who-gets-the-ashes/']?.updated ?? LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="who-gets-the-ashes" imageAlt="Who gets the ashes? Who legally owns cremated remains"><h1>Who gets the ashes? Who legally owns cremated remains</h1></GuideHero>
        <Byline published={PAGE_DATES['/guides/who-gets-the-ashes/']?.published} updated={PAGE_DATES['/guides/who-gets-the-ashes/']?.updated} />

        <p className="answer-first">
          <strong>Quick answer:</strong> cremated remains belong, in the eyes of the law, to the
          person who holds the <strong>right to control disposition</strong> under state law. In most
          states that is, in order: a person the deceased designated in writing, then the surviving
          spouse or partner, then adult children, then parents, then siblings. The funeral home
          releases the ashes to that person (or whoever they name in writing). Paying for the
          cremation does not change the order, and neither does being executor. Every state page on
          this site lists that state&apos;s actual order and statute. This article is general
          information, not legal advice.
        </p>

        <h2>The priority order decides, not the funeral home</h2>
        <p>
          Almost every state has a statute, often called a right-of-disposition law, that lists who
          may control what happens to a body: burial, cremation, and who receives the remains
          afterward. Funeral homes do not get to choose a favorite relative. They follow the
          statute, and the cremation authorization form you sign will ask you to state your place
          in that order. Signing a form that claims a priority you do not have can create legal
          liability, which is why funeral homes ask questions when the family story does not add up.
        </p>
        <p>
          A typical order, with the details varying by state, looks like this:
        </p>
        <ol>
          <li>A person the deceased designated in a written document (sometimes called a disposition agent, funeral planning declaration, or appointment form).</li>
          <li>The surviving spouse, and in some states a registered domestic partner.</li>
          <li>Adult children. Many states require a majority of them to agree when there are several.</li>
          <li>The surviving parents.</li>
          <li>Adult siblings, then more distant relatives in a set order.</li>
          <li>In some states, a close friend or the public officer or county, when no family can be found.</li>
        </ol>
        <p>
          Two consequences surprise people. First, an estranged spouse who was never divorced
          usually still outranks adult children, because marital status is a legal fact, not a
          measure of closeness. Second, an unmarried partner usually has no place in the order at
          all unless the deceased named them in writing. Both are reasons the written designation
          below matters so much.
        </p>

        <h2>A written designation beats the order</h2>
        <p>
          Most states let you name, in writing, the person who will control your disposition, and
          that designation overrides the default hierarchy. It is the single most reliable way to
          make sure the right person gets the ashes, especially for unmarried partners, blended
          families, and anyone estranged from their legal next of kin. The required format is
          state-specific: some states have an official form, others accept any signed writing, and
          a few fold the appointment into an advance health-care directive. A will is a weaker tool
          for this than people expect, because wills are often first opened after the funeral. Our
          guide to <Link href="/guides/who-can-arrange-funeral/">who has the legal right to make
          funeral arrangements</Link> covers designations in more depth.
        </p>

        <h2>Splitting ashes: legal to do, controlled by one person</h2>
        <p>
          Dividing remains among siblings, or between a spouse and parents, is common and usually
          permitted. Crematories will portion remains into multiple urns or keepsakes when asked.
          The legal friction is never the splitting itself; it is who gets to decide. The person at
          the top of the order can approve a split, refuse one, or keep the remains whole, and
          other relatives generally cannot override that without going to court. If a split is what
          the family wants, get the authorizing person to put the instruction in writing to the
          funeral home so there is no argument at pickup.
        </p>

        <h2>When the family fights, the ashes wait</h2>
        <p>
          Funeral homes are caught in the middle of these disputes and behave accordingly: when
          people of equal priority disagree, or a higher-priority person objects, most homes will
          pause and hold the remains rather than risk releasing them to the wrong person. State law
          generally protects them for pausing in good faith. That hold can last until the family
          agrees or a judge rules, and storage or legal costs can grow in the meantime. Practically,
          most disputes resolve through negotiation, sometimes with the funeral director, a clergy
          member, or a mediator shuttling between relatives. The cases that end up in court are
          usually the ones where nobody would compromise in the first two weeks.
        </p>

        <h2>Claiming ashes from a funeral home</h2>
        <p>
          To pick up remains, expect to show photo identification and, if you are not the person
          who signed the cremation authorization, written authorization from the person who holds
          the right of disposition. If the authorizing person has died or cannot be reached, bring
          documentation of your place in the priority order (for example, proof that you are the
          only surviving adult child). If a funeral home refuses a release you believe is lawful,
          ask for the refusal reason in writing, then contact your state funeral board and, if
          needed, an attorney. Our guide to <Link href="/guides/file-complaint-funeral-home/">filing
          a complaint against a funeral home</Link> explains the board process.
        </p>

        <h2>Your state&apos;s order, on your state&apos;s page</h2>
        <p>
          Because the priority order, the designation form, and the rules for shared classes like
          adult children are all state law, we publish them state by state rather than pretending
          one national answer exists. Find your state in the <Link href="/">state table on our
          homepage</Link>: each state page has a section titled &quot;Who controls the funeral and
          the ashes&quot; with its order, its statute, and a link to the official text.
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

        <RelatedGuides currentSlug="who-gets-the-ashes" />
      </div>
    </>
  );
}
