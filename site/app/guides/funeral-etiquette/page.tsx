import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Funeral Etiquette: What to Wear, What to Say & How to Behave',
  description:
    'Funeral etiquette in plain English: what to wear to a funeral, visitation, or graveside service, what to say to a grieving family, what not to say, and how to behave at the service.',
  alternates: { canonical: SITE_URL + '/guides/funeral-etiquette/' },
  openGraph: {
    title: 'Funeral Etiquette: What to Wear, What to Say & How to Behave',
    description:
      'What to wear, what to say, and what to avoid at a funeral, visitation, or memorial service, plus children, flowers, and condolence notes.',
    url: SITE_URL + '/guides/funeral-etiquette/',
  },
};

export default function FuneralEtiquette() {
  const faqs = [
    {
      q: 'What should I wear to a funeral?',
      a: 'Dress conservatively in dark, subdued colors such as black, navy, gray, or dark brown, unless the family has asked for something different. A suit with a conservative tie, or a dress or suit in a muted color, is a safe choice for a funeral service. For a visitation, business casual in muted tones is usually fine. Skip bright colors, bold patterns, jeans, and sneakers unless the invitation specifically requests casual or themed dress, such as a favorite color or a sports jersey to celebrate the person who died.',
    },
    {
      q: 'What do you say to someone at a funeral?',
      a: 'Keep it short and sincere. "I am so sorry for your loss" is always appropriate, and a brief memory of the person who died is often the most comforting thing a family hears. "I will be thinking of you, not just today but in the weeks ahead" is another good line, because grief does not end after the service. If you do not know what to say, saying so honestly ("I do not have the right words, but I wanted you to know I care") beats staying away or staying silent.',
    },
    {
      q: 'What should you not say at a funeral?',
      a: 'Avoid anything that minimizes the loss: "They are in a better place," "Everything happens for a reason," or "I know exactly how you feel." Do not ask about the cause of death; let the family bring it up if they want to discuss it. Do not offer unsolicited advice about grieving, and do not compare losses. At a visitation, keep your time with the family brief if a line is forming behind you, then step aside to continue the conversation.',
    },
    {
      q: 'Can I bring children to a funeral?',
      a: 'Yes, in most cases, and attending can help a child say goodbye. Do not force a child who is frightened, but do prepare them beforehand: explain what they are likely to see, including whether there will be an open casket, and agree on a plan for stepping out quietly if they need a break. Sit near an aisle so you can leave without disruption, and bring something quiet for very young children.',
    },
    {
      q: 'Should I send flowers to a funeral?',
      a: 'Flowers are a welcome gesture in most cases, and they can be sent to the funeral home for the service or directly to the family home. Some families ask for donations to a charity instead of flowers; the obituary usually says so, and in that case honor the request. Food is another kindness families genuinely appreciate, since cooking is often the last thing on their minds. Our funeral flowers guide covers what to send by arrangement and relationship.',
    },
    {
      q: 'Can I take photos or use my phone at a funeral?',
      a: 'Silence your phone completely before the service begins; checking it during a service is noticeable and distracting. Do not take photos during the service unless the family has explicitly invited it, and never photograph an open casket or grieving family members without permission. Some families now livestream services for relatives who cannot attend, and that stream belongs to the family to share, not to you to record or post.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Funeral etiquette', url: SITE_URL + '/guides/funeral-etiquette/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Funeral etiquette</nav>
      <JsonLd data={articleJsonLd({
        title: 'Funeral Etiquette: What to Wear, What to Say & How to Behave',
        description: 'Funeral etiquette in plain English: what to wear to a funeral, visitation, or graveside service, what to say to a grieving family, what not to say, and how to behave at the service.',
        url: SITE_URL + '/guides/funeral-etiquette/',
        datePublished: '2026-11-03',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="funeral-etiquette" imageAlt="Funeral etiquette"><h1>Funeral etiquette: what to wear, what to say, and how to behave</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> funeral etiquette comes down to three things: show up,
          dress conservatively, and keep your words short and sincere. Arrive on time, wear dark
          and subdued clothing unless the family asked for something else, silence your phone
          completely, sit behind the front rows reserved for immediate family, and say something
          simple like "I am so sorry for your loss." You do not need the perfect words. Showing
          up is itself one of the most meaningful things you can do, and families remember who
          was there long after they forget what anyone said.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>What to wear to a funeral</h2>
        <p>
          When in doubt, dress conservatively in dark, subdued colors: black, navy, gray, or
          dark brown. That rule covers most services, but the right outfit depends on the
          type of gathering, and families increasingly set their own tone.
        </p>
        <table>
          <thead>
            <tr><th>Gathering</th><th>What to wear</th><th>Notes</th></tr>
          </thead>
          <tbody>
            <tr><td>Visitation or calling hours</td><td>Business casual in muted tones</td><td>A jacket and tie, or a dress or neat separates, is appropriate; one step less formal than the funeral itself</td></tr>
            <tr><td>Funeral service</td><td>A suit, dress, or neat suit in dark or neutral tones</td><td>Conservative and understated; keep jewelry subtle and traditional</td></tr>
            <tr><td>Graveside service</td><td>As for a funeral service, plus practical footwear</td><td>Grass and soft ground are hard to walk on in dress shoes or heels; check the weather and bring a coat if needed</td></tr>
            <tr><td>Celebration of life</td><td>Follow the family's lead</td><td>These are often less formal, and families may request a favorite color, casual dress, or themed clothing to reflect the person who died</td></tr>
          </tbody>
        </table>
        <p>
          The one rule that overrides everything above: if the family requested specific
          attire, wear it. A request for bright colors, a sports jersey, or a Hawaiian shirt
          is a deliberate choice to celebrate the person, and honoring it matters more than
          any traditional dress code. If you are unsure whether a special request exists,
          check the obituary or call the funeral home before you go.
        </p>

        <h2>What to say, and what to leave unsaid</h2>
        <p>
          Most people worry about saying the wrong thing. The good news is that the right
          thing is short, and the wrong thing is usually an attempt to explain or fix the
          loss rather than acknowledge it.
        </p>
        <ul>
          <li><strong>Say this:</strong> "I am so sorry for your loss." "She was so important to me; I will never forget the time..." "I am here for you, not just today but in the weeks ahead." A specific memory of the person who died is often the greatest gift you can give a grieving family.</li>
          <li><strong>Or say this:</strong> "I do not have the right words, but I wanted you to know I care." Honesty beats silence, and it beats avoidance.</li>
          <li><strong>Do not say this:</strong> "They are in a better place," "Everything happens for a reason," or "I have been in your shoes." However well meant, these phrases minimize the family's pain or make their grief about you.</li>
          <li><strong>Do not ask:</strong> about the cause of death. If the family wants to discuss it, they will bring it up. Let them set that boundary.</li>
          <li><strong>Do not advise:</strong> on how to grieve, how long it should take, or what the family should do next. Grief has no schedule, and unsolicited advice lands as judgment.</li>
        </ul>
        <p>
          At a visitation, if there is a line to speak with the family, keep your greeting
          brief and step to the side afterward to continue any conversation. The family
          may be greeting hundreds of people, and a short, warm exchange respects their
          stamina as well as everyone waiting behind you.
        </p>

        <h2>At the service: arrival, seating, and phones</h2>
        <ul>
          <li><strong>Arrive on time and enter quietly.</strong> Aim to be seated a few minutes before the service starts. If you arrive late, slip into a seat near the back rather than walking forward.</li>
          <li><strong>Leave the front rows for family.</strong> If there are no ushers, remember that the first few rows are usually reserved for immediate family and close friends. Seat yourself toward the middle or the back.</li>
          <li><strong>Sign the register book.</strong> Use your full name, and add how you knew the person who died (through work, school, a club), so the family can place you later.</li>
          <li><strong>Silence your phone completely.</strong> Not vibrate: silent. Checking a phone during a service is more noticeable than people think, and if you must take a call, step out quietly.</li>
          <li><strong>At an open casket, viewing is optional.</strong> It is customary to show respect by viewing the deceased and spending a few moments in silent prayer, but it is not mandatory. Do what feels comfortable, and do not photograph the casket.</li>
          <li><strong>Follow the family's lead on rituals.</strong> Standing, kneeling, singing, or remaining seated: watch what others around you do, and follow along or sit respectfully quiet if a ritual is not part of your own tradition.</li>
        </ul>

        <h2>Children at a funeral</h2>
        <p>
          Bringing a child to a service can help them say goodbye, and most families welcome
          children. Do not force a frightened child to attend or to view an open casket, but
          do prepare them beforehand: explain in simple terms what will happen, what they
          are likely to see, and that people will be sad and crying. Sit near an aisle so
          you can step out quietly if they need a break, and agree on that plan with them
          in advance so leaving feels normal, not like a punishment.
        </p>

        <h2>Flowers, food, and donations</h2>
        <p>
          Sending flowers, making a donation, or bringing food are all meaningful ways to
          show sympathy. Flowers can go to the funeral home for the service or directly to
          the family's home, and our{' '}
          <Link href="/guides/funeral-flowers-cost/">funeral flowers guide</Link> covers
          what to send by arrangement and relationship. If the obituary asks for donations
          to a charity in place of flowers, honor that request. Food is often the most
          practical gift of all: families in the first days after a death are rarely
          cooking, and a delivered meal or a simple reception dish is genuinely appreciated.
          If there is a reception after the service, our{' '}
          <Link href="/guides/funeral-reception-cost/">funeral reception cost guide</Link>{' '}
          explains what those gatherings usually involve.
        </p>

        <h2>Different traditions, different expectations</h2>
        <p>
          Customs vary widely by faith and culture: some traditions hold a viewing the
          evening before, others bury within 24 hours; some expect all black, others
          expect white; some services are quiet and formal, others are loud with music
          and testimony. If you are attending a service in a tradition you do not know,
          a quick call to the funeral home or a look at our{' '}
          <Link href="/guides/religious-funeral-costs/">religious funeral costs guide</Link>{' '}
          will tell you what to expect. When in doubt at the service itself, watch the
          family and follow their lead. Respectful attention covers most unfamiliar
          customs.
        </p>

        <h2>After the service: the part most people skip</h2>
        <p>
          The service is the easy part of showing up; the weeks after are when support
          thins out. A condolence note sent a week or two later, a phone call a month
          later, or a meal dropped off when the casseroles stop arriving will be remembered
          far longer than anything said at the funeral home. If you spoke at the service,
          our <Link href="/guides/how-to-write-a-eulogy/">eulogy guide</Link> covers the
          writing side; if you are helping organize rather than attend, start with{' '}
          <Link href="/guides/how-to-plan-a-funeral/">how to plan a funeral</Link> and{' '}
          <Link href="/guides/when-someone-dies-checklist/">what to do in the first 48 hours</Link>.
        </p>

        <h2>Before you go: a quick checklist</h2>
        <ul>
          <li>Check the obituary for the dress code, flower or donation request, and service time and location.</li>
          <li>Dress conservatively in dark, subdued colors unless the family asked for something else.</li>
          <li>Silence your phone completely before you walk in.</li>
          <li>Plan one short, sincere thing to say, and one memory to share if the moment allows it.</li>
          <li>Sign the register book with your full name and how you knew the person who died.</li>
          <li>Send a note or a meal in the weeks after, when most other support has faded.</li>
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
          <Link href="/guides/funeral-flowers-cost/">Funeral flowers: what to send →</Link>
          {' · '}
          <Link href="/guides/how-to-write-a-eulogy/">How to write a eulogy →</Link>
          {' · '}
          <Link href="/guides/how-to-plan-a-funeral/">How to plan a funeral →</Link>
          {' · '}
          <Link href="/guides/memorial-service-cost/">Memorial service costs →</Link>
        </p>
      <RelatedGuides currentSlug="funeral-etiquette" />
      </div>
    </>
  );
}
