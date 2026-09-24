import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Who Has the Legal Right to Make Funeral Arrangements?',
  description:
    'Most states follow a priority order for who decides funeral arrangements: a person the deceased designated in writing, then spouse, adult children, parents, and siblings. Learn how it works and why a written designation matters.',
  alternates: { canonical: SITE_URL + '/guides/who-can-arrange-funeral/' },
  openGraph: {
    title: 'Who Has the Legal Right to Make Funeral Arrangements?',
    description:
      'The typical priority order for funeral decision-making, why a written designation beats the default hierarchy, and what happens when family members disagree.',
    url: SITE_URL + '/guides/who-can-arrange-funeral/',
  },
};

export default function WhoCanArrangeFuneral() {
  const faqs = [
    {
      q: 'Does the executor named in the will control the funeral?',
      a: 'Not necessarily. Being named executor of an estate is a separate role from being the person with legal authority over funeral arrangements. In most states, the written designation for body disposition — or the default priority hierarchy (spouse, adult children, parents, siblings) — controls the funeral. The executor manages the estate\'s money and property, which is a different job. This is also why a will alone is unreliable: wills are often first read days or weeks after the funeral, long after the body had to be buried or cremated.',
    },
    {
      q: 'Can an unmarried partner make funeral arrangements?',
      a: 'In most states, an unmarried partner has no automatic place in the default priority order — which means a legal spouse or the deceased\'s relatives could outrank them. The fix is a written designation: most states let anyone appoint, in writing, the person who will control their funeral arrangements. If you are unmarried, naming your partner in a written disposition-of-remains document is the single most important step you can take. Without it, your partner may have to watch someone else make the decisions.',
    },
    {
      q: 'What if the surviving spouse and the adult children disagree?',
      a: 'Funeral homes generally follow the highest-priority person in the order — usually the surviving spouse — and they may refuse to proceed until a dispute is resolved. Courts can intervene, but litigation takes weeks or months, and funeral decisions cannot wait. In practice, disagreements are usually settled by negotiation in the first days, often with a funeral director or mediator helping. The cheapest insurance against this is a clear written designation naming one decision-maker.',
    },
    {
      q: 'Do I need a specific form to designate who handles my funeral?',
      a: 'It depends on your state. Many states have a specific statutory form — often called an appointment of agent for disposition of remains, or a funeral-planning declaration — and using it gives the clearest protection. Others accept any clear written and signed statement. A few states fold this authority into a health-care advance directive. Check your state\'s current law or ask an estate-planning attorney what format holds up locally; the exact form matters.',
    },
    {
      q: 'Who decides for a minor child?',
      a: 'Typically the child\'s parents or legal guardians make funeral arrangements for a minor, usually by agreement between them. If the parents are divorced, either parent with legal custody generally has authority, and the custody order may control. Courts resolve disagreements the same way they resolve other custody disputes — quickly when necessary, since burial cannot wait.',
    },
    {
      q: 'Is this article legal advice?',
      a: 'No. This is general information about how funeral-decision authority commonly works in the United States. Funeral law is state-by-state, the details change, and every family situation is different. If you face an actual dispute, or you want documents that will hold up in your state, talk to a licensed attorney in your state — ideally one who practices estate planning.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Who can arrange a funeral', url: SITE_URL + '/guides/who-can-arrange-funeral/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Who can arrange a funeral</nav>
      <JsonLd data={articleJsonLd({
        title: 'Who Has the Legal Right to Make Funeral Arrangements?',
        description:
          'Most states follow a priority order for who decides funeral arrangements: a person the deceased designated in writing, then spouse, adult children, parents, and siblings. Learn how it works and why a written designation matters.',
        url: SITE_URL + '/guides/who-can-arrange-funeral/',
        datePublished: '2026-09-24',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="who-can-arrange-funeral" imageAlt="Who has the legal right to make funeral arrangements?"><h1>Who has the legal right to make funeral arrangements?</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> in most states, funeral decisions follow a priority order.
          First, anyone the deceased designated in writing. Then the surviving spouse, then adult
          children, then parents, then siblings, then more distant relatives. A written designation
          usually overrides the default hierarchy — which is why putting your choice in writing is
          the most important thing you can do. The exact order, the required paperwork, and the
          legal terminology differ by state, and this article is general information, not legal advice.
        </p>
        <p className="updated">General information only — not legal advice. Last updated {LAST_UPDATED}.</p>

        <h2>The typical priority order</h2>
        <p>
          Funeral law is state law, so there is no single national rule. But most states use a
          version of the same priority list to decide who controls the disposition of a body —
          that is, who signs the authorizations, chooses burial or cremation, and hires the
          funeral home. From highest to lowest priority, the list commonly runs:
        </p>
        <ol>
          <li><strong>A person the deceased designated in writing.</strong> Most states honor a written appointment — sometimes called a disposition-of-remains agent or funeral-planning agent — ahead of everyone else, including the spouse.</li>
          <li><strong>The surviving spouse.</strong> Usually first in the default order when there is no written designation.</li>
          <li><strong>Adult children.</strong> Generally by majority agreement among them.</li>
          <li><strong>Parents</strong> of the deceased.</li>
          <li><strong>Siblings</strong>, then more distant kin — grandparents, grandchildren, aunts and uncles — in an order each state defines for itself.</li>
        </ol>
        <p>
          Treat this as the common pattern, not a guarantee. States differ on details that
          matter: whether a domestic partner counts as a spouse, how ties among adult children
          are broken, and what paperwork proves your authority. If authority is genuinely
          contested, read your state&apos;s statute rather than relying on this list.
        </p>

        <h2>Why the written designation matters most</h2>
        <p>
          The written designation sits at the top of the list for a reason: it is the one part
          of the hierarchy the deceased person controls. In most states, a clear written
          appointment overrides the default order entirely. That means a person can name their
          unmarried partner, a close friend, or one specific adult child — and that choice beats
          the spouse-first default in most states, as long as the document meets the state&apos;s
          requirements.
        </p>
        <p>
          How you make one depends on where you live. Many states provide a specific statutory
          form, often titled something like &ldquo;appointment of agent for disposition of
          remains.&rdquo; In some states a clear signed statement is enough; in others the
          authority is part of a health-care advance directive. The safest approach: use your
          state&apos;s form if one exists, sign and date it, and — critically — make sure the
          person you named actually knows, and knows where the document is. A designation that
          nobody can find in the first 48 hours is almost as useless as none at all.
        </p>

        <h2>What happens when family members disagree</h2>
        <p>
          Disagreements usually surface at the worst possible moment, days after a death, when
          a funeral home is asking for signed authorizations. Funeral homes handle this the way
          the law expects them to: they follow the highest-priority person and may refuse to
          proceed while a dispute is unresolved. A funeral director is not a judge and will not
          referee a fight between a spouse and adult children — most will simply wait.
        </p>
        <p>
          Courts can intervene and order who has authority, but litigation moves in weeks and
          months while funerals must happen in days. In practice, then, disputes are almost
          always settled by negotiation in the first few days — sometimes with the funeral
          director, a clergy member, or a mediator helping the family land somewhere everyone
          can live with. That negotiation goes far better when the deceased left a clear
          written designation naming one decision-maker. Without one, every party at the table
          can plausibly claim they speak for the deceased.
        </p>

        <h2>Practical steps to take now</h2>
        <ol>
          <li><strong>Put your wishes and your decision-maker in writing.</strong> Name the person you want in charge using your state&apos;s form or a clear signed statement, and write down your preferences for burial or cremation, service type, and any religious requirements. Our <Link href="/guides/funeral-service-types/">service-types guide</Link> walks through the six main options.</li>
          <li><strong>Tell your family.</strong> The document matters, but so does the conversation. Tell the person you named, and tell the people who might otherwise expect to decide. Surprises cause disputes.</li>
          <li><strong>Keep the documents findable.</strong> Give copies to your designated person and, if you have one, your attorney. A safe-deposit box that only you can open is a poor choice — it may be sealed at death. A file at home that your family knows about works.</li>
          <li><strong>Don&apos;t rely on your will.</strong> Wills are often first read days or weeks after the funeral, after the body has already been buried or cremated. A will can express your wishes, but it cannot control decisions made before anyone reads it.</li>
          <li><strong>Revisit after life changes.</strong> Divorce, remarriage, a falling-out, or a move to another state are all reasons to redo the paperwork — an old designation naming an ex-spouse may still be legally effective in some states.</li>
        </ol>
        <p>
          If someone has just died and you are sorting out what to do first, our
          <Link href="/guides/when-someone-dies-checklist/"> when-someone-dies checklist</Link> covers
          the practical order of operations in the first days.
        </p>

        <h2>Special situations</h2>
        <p><strong>Divorced spouses.</strong> A former spouse generally loses the spousal priority
          a current spouse would have. But watch for stale paperwork: a written designation made
          during the marriage may still be valid after divorce in some states, so update your
          documents.</p>
        <p><strong>Estranged relatives.</strong> The priority order does not have exceptions for
          bad relationships. An estranged parent or adult child still holds their place in the
          default hierarchy — which is exactly why a written designation naming someone you
          trust is so valuable when family relationships are strained.</p>
        <p><strong>Unmarried partners.</strong> In most states, an unmarried partner has no
          automatic priority, no matter how long the relationship. The written designation is
          the entire answer here: name your partner in a disposition-of-remains document, and
          tell them where it is.</p>
        <p><strong>Minor children.</strong> Parents or legal guardians decide for a minor child,
          usually by agreement. When parents are divorced, the custody order typically controls
          who has authority; courts resolve disagreements quickly when burial cannot wait.</p>

        <h2>Not legal advice</h2>
        <p>
          This guide is general information about how funeral-decision authority commonly works.
          It is not legal advice, and it is not a substitute for it. Funeral law varies
          state by state, the details change over time, and real disputes turn on facts this
          article cannot cover. If family members are contesting authority, or you want
          documents that will hold up where you live, consult a licensed attorney in your
          state — ideally one who practices estate planning. You can also learn the terms
          you&apos;ll encounter in our <Link href="/guides/funeral-glossary/">funeral
          glossary</Link>, your rights as a consumer under the
          <Link href="/guides/funeral-rule-rights/"> FTC Funeral Rule</Link>, and
          <Link href="/methodology/"> how we build our cost estimates</Link>.
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
          <Link href="/guides/when-someone-dies-checklist/">When someone dies: first-steps checklist →</Link>
          {' · '}
          <Link href="/guides/funeral-rule-rights/">Your rights under the FTC Funeral Rule →</Link>
          {' · '}
          <Link href="/guides/funeral-glossary/">Funeral terms glossary →</Link>
        </p>
      <RelatedGuides currentSlug="who-can-arrange-funeral" />
      </div>
    </>
  );
}
