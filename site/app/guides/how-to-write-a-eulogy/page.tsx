import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'How to Write a Eulogy: A Step-by-Step Guide With a Template',
  description:
    'How to write a eulogy in five parts: a short introduction, who they were, two stories, what they taught you, and a farewell. Aim for 3 to 7 minutes, about 400 to 900 words, with a fill-in template and delivery tips.',
  alternates: { canonical: SITE_URL + '/guides/how-to-write-a-eulogy/' },
  openGraph: {
    title: 'How to Write a Eulogy: A Step-by-Step Guide With a Template',
    description:
      'A calm, practical way to write a eulogy: gather stories, follow a five-part structure, use the template, and deliver it without trying to be perfect.',
    url: SITE_URL + '/guides/how-to-write-a-eulogy/',
  },
};

export default function HowToWriteAEulogy() {
  const faqs = [
    {
      q: 'How to write a eulogy if you only have a day to prepare?',
      a: 'Start with the template below and fill it in order: one sentence introducing yourself and your relationship, three traits that describe the person, two short stories that show those traits, one lesson they taught you, and a farewell line. Do not try to write a full life history. A 400 to 600 word draft written in an hour, then read aloud twice, will serve the room better than a polished essay you never finish.',
    },
    {
      q: 'How long should a eulogy be?',
      a: 'Aim for 3 to 7 minutes, which is about 400 to 900 spoken words. Funeral homes and celebrants commonly give that range, and it matches how long a room can listen closely to one speaker. A graveside eulogy should sit at the short end, around 3 to 5 minutes, since the service itself is brief and outdoors. If several people are speaking, agree on a time limit with the officiant before the service so the program does not run over.',
    },
    {
      q: 'Can you use humor in a eulogy?',
      a: 'Yes, when the humor fits the person. A funny story that shows who they were is often the moment guests remember most, and it gives the room permission to smile. Keep it kind: humor about the person, told with affection, lands well, while jokes at someone’s expense, or stories that embarrass the family, do not. If you are unsure whether a story will land, test it on one family member first.',
    },
    {
      q: 'What should you not say in a eulogy?',
      a: 'Leave out family disputes, debts, and grievances, however true they feel in the moment. A eulogy is not the place to settle scores, correct the record, or air private matters the person never shared publicly. Also avoid claiming details you are unsure about, such as dates or achievements, since guests who knew the person well will notice. When a fact is uncertain, either check it with family or leave it out.',
    },
    {
      q: 'What if you cry while delivering the eulogy?',
      a: 'Pause, breathe, drink some water, and continue when you are ready. Rooms expect emotion at a funeral, and no one judges a speaker for crying. Two practical safeguards help: print the eulogy in large type so you can find your place after a pause, and ask a trusted person in advance to step in and finish reading if you cannot continue. Telling that person beforehand removes the hardest decision from the hardest moment.',
    },
    {
      q: 'Can more than one person give a eulogy?',
      a: 'Yes, and it often works better than one long speech. Two or three short eulogies, each from a different part of the person’s life, such as a sibling, a friend, and a colleague, give a fuller picture and spread the emotional load. Agree on the order, the time each speaker gets, and who goes first, and tell the officiant so the program flows. If you are also planning the service itself, our memorial service guide covers how speakers fit into the program.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'How to write a eulogy', url: SITE_URL + '/guides/how-to-write-a-eulogy/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › How to write a eulogy</nav>
      <JsonLd data={articleJsonLd({
        title: 'How to Write a Eulogy: A Step-by-Step Guide With a Template',
        description: 'How to write a eulogy in five parts: a short introduction, who they were, two stories, what they taught you, and a farewell. Aim for 3 to 7 minutes, about 400 to 900 words, with a fill-in template and delivery tips.',
        url: SITE_URL + '/guides/how-to-write-a-eulogy/',
        datePublished: '2026-10-27',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="how-to-write-a-eulogy" imageAlt="How to write a eulogy"><h1>How to write a eulogy</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> a good eulogy is 3 to 7 minutes long, about{' '}
          <strong>400 to 900 words</strong>, and follows five parts: introduce yourself
          and your relationship, say who the person was in a few traits, tell two short
          stories that show those traits, name what they taught you, and close with a
          farewell. You do not need to cover a whole life, and you do not need to be
          a polished speaker. One honest story, told plainly, is worth more than a
          perfect speech. If you are also arranging the service, start with our{' '}
          <Link href="/guides/how-to-plan-a-funeral/">step-by-step funeral planning guide</Link>,
          which puts speakers and readings in order with everything else.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>What a eulogy is, and what it is not</h2>
        <p>
          A eulogy is a short speech given at a funeral, memorial, or graveside service
          that celebrates a person’s life and character. It is personal, not official:
          it is told from your relationship with the person, in your voice, about what
          you saw and remember. That is what separates it from the three things it is
          often confused with.
        </p>
        <ul>
          <li><strong>An obituary</strong> is a published life summary: dates, family, career, and service details. Our <Link href="/guides/obituary-costs/">obituary costs guide</Link> covers where obituaries run and what they cost. A eulogy does not need to repeat it.</li>
          <li><strong>A sermon or homily</strong> is given by clergy and speaks to faith and meaning in general terms. A eulogy speaks to one specific life.</li>
          <li><strong>A toast</strong> is short and celebratory. A eulogy can include a toast-like moment, but it also makes room for grief and gratitude, not just celebration.</li>
        </ul>
        <p>
          The officiant and the eulogist are also not always the same person. The
          officiant leads the service, while the eulogy is usually given by a family
          member or close friend. Our{' '}
          <Link href="/guides/funeral-officiant-cost/">funeral officiant guide</Link>{' '}
          explains the two roles and what each costs when hired. If you have been asked
          to give the eulogy, you were asked because you knew the person, not because
          you are a speaker. The room is on your side.
        </p>

        <h2>Step 1: gather your material before you write</h2>
        <p>
          Do not start with a blank page and a life story. Start with notes. Spend 30
          minutes on these prompts, and the structure will almost write itself:
        </p>
        <ul>
          <li><strong>Three traits.</strong> If you had to describe the person in three words, which three? Generous, stubborn, funny, steady, curious: pick the ones that feel true, not impressive.</li>
          <li><strong>Two or three stories.</strong> For each trait, find one moment that shows it. A specific scene beats a general claim every time: not “she was kind,” but the afternoon she drove across town with soup for a neighbor she barely knew.</li>
          <li><strong>Ask other people.</strong> Call one or two family members or friends and ask for their favorite memory. Their stories often supply the detail you forgot, and they keep the eulogy from being only your version of the person.</li>
          <li><strong>Look at photos and keepsakes.</strong> Photos, letters, and old messages jog specific memories faster than trying to recall a life in order.</li>
          <li><strong>Note the facts you need.</strong> Full name, key dates, and the names of close family members, so you can thank people by name in the closing. Check any fact you are unsure about with family.</li>
        </ul>
        <p>
          If you are writing about someone you did not know well, such as a colleague
          or an in-law, be honest about the angle: speak about what you observed, the
          work they did, or the way they treated people around you, rather than
          inventing closeness. A short, honest eulogy from a colleague is respected far
          more than a long one full of borrowed memories.
        </p>

        <h2>Step 2: follow the five-part structure</h2>
        <p>
          Almost every strong eulogy follows the same shape, and deviating from it is
          where speakers get lost. Use these five parts in order, and keep each one
          short:
        </p>
        <ol>
          <li><strong>Introduction (30 seconds).</strong> Your name, your relationship, and thanks for being there. Example: “Good morning. My name is Anna, and I am Maya’s daughter. Thank you for being here to remember her.”</li>
          <li><strong>Who they were (1 minute).</strong> A brief life sketch in a few sentences, plus the three traits from step 1. Born where, built a life around what, known for what. Do not list a resume.</li>
          <li><strong>Two stories (2 to 3 minutes).</strong> One story per trait, or two stories that together show the person. Keep each story to about a minute: set the scene in one sentence, tell what happened, and say what it showed about them.</li>
          <li><strong>What they taught you (1 minute).</strong> The lesson, value, or habit you carry from them. This is the part guests take home: show up for family, laugh often, work hard, forgive quickly.</li>
          <li><strong>Farewell (30 seconds).</strong> A direct goodbye, a thank you, and a final line. “Thank you, Dad, for everything. We love you, and we will miss you.” Then stop. A short ending lands harder than a long one.</li>
        </ol>

        <h2>Fill-in eulogy template</h2>
        <p>
          Copy this template, replace the brackets, and you have a first draft. Aim
          for about 500 to 700 words when filled in, which reads in about 4 to 5
          minutes.
        </p>
        <ul>
          <li><strong>Opening:</strong> “Good [morning/afternoon]. My name is [your name], and I am [relationship] of [loved one name]. Thank you for being here to remember [him/her/them].”</li>
          <li><strong>Who they were:</strong> “If you knew [name], you knew [trait one, trait two, trait three]. [He/She/They] was born in [place], grew up in [place], and built a life around [work, family, passion].”</li>
          <li><strong>First story:</strong> “One story that captures [name] is [a specific memory, told in three to five sentences]. That was [name]: [what the story shows].”</li>
          <li><strong>Second story:</strong> “Another memory I love is [a second specific memory]. I think about that day whenever [a trigger, a place, a habit].”</li>
          <li><strong>What they taught us:</strong> “From [name], we learned [a value or lesson]. [One sentence about how you carry it now].”</li>
          <li><strong>Farewell:</strong> “Thank you, [name], for [a specific gift]. We will carry your [love, humor, faith, lessons] with us. We love you, and we will miss you.”</li>
          <li><strong>Thanks:</strong> “On behalf of our family, thank you for your kindness, your prayers, and your presence today.”</li>
        </ul>
        <p>
          Read the filled-in draft aloud and cut anything that does not earn its
          place. If a sentence sounds like it belongs in an obituary, cut it. If a
          story runs longer than a minute, trim it to the scene that matters. Then
          read it aloud a second time and mark where to pause: after the introduction,
          between stories, and before the farewell. Pauses are what make a eulogy
          feel calm rather than rushed.
        </p>

        <h2>Delivery: a checklist for the day</h2>
        <ul>
          <li><strong>Print it large.</strong> Print in 14 to 16 point type, number the pages, and bring a second copy. Phones are hard to read through tears and glare.</li>
          <li><strong>Practice aloud three times.</strong> Once to find the awkward sentences, once to time it, and once the morning of the service. Reading silently does not count.</li>
          <li><strong>Speak slowly and look up.</strong> Grief speeds people up. Pause at the marked pauses, look at the room between sections, and keep water nearby.</li>
          <li><strong>Name a backup reader.</strong> Ask someone in advance to finish the eulogy if you cannot. Hand them a copy before the service starts.</li>
          <li><strong>Tell the officiant your timing.</strong> Confirm how long you have, where you stand, and whether a microphone is provided, especially at a graveside service, where wind carries voices away. Our <Link href="/guides/graveside-service-cost/">graveside service guide</Link> covers outdoor sound and seating.</li>
          <li><strong>Keep the original.</strong> After the service, keep the printed eulogy with the other funeral papers. Families often want it later for the memorial, the obituary page, or a keepsake book.</li>
        </ul>
        <p>
          One last reassurance: no one in the room is grading your speech. They are
          listening for the person they lost, in the voice of someone who loved them.
          Say their name, tell one true story, and say goodbye. That is a eulogy.
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
          <Link href="/guides/how-to-plan-a-funeral/">How to plan a funeral →</Link>
          {' · '}
          <Link href="/guides/funeral-officiant-cost/">Funeral officiant costs →</Link>
          {' · '}
          <Link href="/guides/memorial-service-cost/">Memorial service costs →</Link>
          {' · '}
          <Link href="/guides/graveside-service-cost/">Graveside service costs →</Link>
        </p>
      <RelatedGuides currentSlug="how-to-write-a-eulogy" />
      </div>
    </>
  );
}
