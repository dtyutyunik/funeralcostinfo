import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { PAGE_DATES } from '../../../lib/page-dates';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL, dataset, fmt } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

const A = dataset.anchors;

export const metadata: Metadata = {
  title: 'What to Do With Ashes After Cremation: All Your Options, With Costs',
  description:
    'Keep them, bury them, place them in a niche, scatter them, share them, or turn them into glass, a diamond, a tree, or a reef. No law requires burial, and most options cost far less than a funeral.',
  alternates: { canonical: SITE_URL + '/guides/what-to-do-with-ashes/' },
  openGraph: {
    title: 'What to Do With Ashes After Cremation: All Your Options, With Costs',
    description:
      'Every option for cremated remains, from free to $9,000, with the costs, the rules, and the one decision you cannot undo.',
    url: SITE_URL + '/guides/what-to-do-with-ashes/',
  },
};

export default function WhatToDoWithAshes() {
  const faqs = [
    {
      q: 'What to do with ashes after cremation?',
      a: 'You have more options than most families realize: keep them at home in an urn, bury them in a cemetery, place them in a columbarium niche, scatter them somewhere meaningful, divide them among family members, or turn a portion into keepsakes such as glass art, jewelry, a diamond, a memorial tree, or a reef ball. There is no legal deadline and no law in the United States that requires burial, so you can take your time and even combine options: keep some, scatter some, and share the rest.',
    },
    {
      q: 'Do you have to bury ashes after cremation?',
      a: 'No. No federal law and no state law requires cremated remains to be buried. Once the crematory returns the ashes to the family or authorized representative, the family decides. The only methods with federal rules are specific ones, such as scattering at sea, which the EPA regulates. Everything else is governed by cemetery policy, landowner permission, and local ordinances, not by a burial mandate.',
    },
    {
      q: 'Can you divide cremation ashes between family members?',
      a: 'Yes. Dividing ashes is common and legal: a typical adult cremation produces 3 to 7 pounds of remains, far more than one urn needs. Families use keepsake urns, jewelry pendants, or small containers to share portions. One caution: check the religious tradition involved first. The Catholic Church, for example, directs that ashes be kept together in a sacred place such as a cemetery or columbarium, not divided or kept at home.',
    },
    {
      q: 'Is it legal to keep ashes at home?',
      a: 'Yes, in general. Keeping ashes at home is legal across the United States, and many families do it temporarily while planning a ceremony or permanently as their final choice. Keep the container sealed, stable, and protected from humidity, heat, and accidental knocks, especially with children or pets in the home. If the ashes may later travel, note that flying with them means carry-on luggage in an x-ray friendly container, not a thick-walled metal urn.',
    },
    {
      q: 'What is the cheapest thing to do with ashes?',
      a: 'Keeping them at home costs nothing beyond an urn, and scattering them yourself on your own land is usually free. Cemetery scattering gardens are another low-cost choice, with published fees from about $100 to $550. By contrast, a columbarium niche typically runs $750 to $2,800, and a memorial reef runs $4,000 to $9,000. The cheapest option that still gives the family a place to visit is usually a cemetery scattering garden or a niche.',
    },
    {
      q: 'What happens if family members disagree about what to do with ashes?',
      a: 'The person with legal authority over disposition decides: usually the person named in a written designation, or otherwise the next of kin in the priority order set by state law. Our guide to who can arrange a funeral explains that priority order. When the decision is genuinely shared, dividing the ashes is often the compromise that ends the argument, since each branch of the family can then follow its own plan with its portion.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'What to do with ashes after cremation?', url: SITE_URL + '/guides/what-to-do-with-ashes/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › What to do with ashes after cremation?</nav>
      <JsonLd data={articleJsonLd({
        title: 'What to Do With Ashes After Cremation: All Your Options, With Costs',
        description: 'Keep them, bury them, place them in a niche, scatter them, share them, or turn them into glass, a diamond, a tree, or a reef. No law requires burial, and most options cost far less than a funeral.',
        url: SITE_URL + '/guides/what-to-do-with-ashes/',
        datePublished: '2026-10-25',
        dateModified: PAGE_DATES['/guides/what-to-do-with-ashes/']?.updated ?? LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="what-to-do-with-ashes" imageAlt="What to do with ashes after cremation: all your options, with costs"><h1>What to do with ashes after cremation?</h1></GuideHero>
        <Byline published={PAGE_DATES['/guides/what-to-do-with-ashes/']?.published} updated={PAGE_DATES['/guides/what-to-do-with-ashes/']?.updated} />

        <p className="answer-first">
          <strong>Quick answer:</strong> you do not have to bury ashes, and you do not have
          to decide quickly. The options run from <strong>free</strong> (keeping them at
          home, or scattering them yourself on your own land) to about{' '}
          <strong>$9,000</strong> for a memorial reef, with the most common choices, a
          columbarium niche at <strong>$750 to $2,800</strong> or a cemetery scattering
          garden at about <strong>$100 to $550</strong>, in between. A typical adult
          cremation produces 3 to 7 pounds of remains, so you can also combine options:
          keep some, scatter some, and share the rest. For the cremation itself, our
          modeled national estimate for direct cremation is{' '}
          <strong>{fmt(A.direct_cremation.value)}</strong>, in August 2026 dollars from
          NFDA 2023 medians adjusted for inflation, not a quote. For a line-item estimate
          in your state, use our <Link href="/calculator/">cost calculator</Link>.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>First, the facts that make the choice easier</h2>
        <p>
          Three facts take most of the pressure off. First, <strong>no law requires
          burial</strong>: once the crematory returns the ashes, the family decides, and
          there is no legal deadline for deciding. Second, <strong>ashes are not
          hazardous</strong>: cremation destroys pathogens, and the remains are sterile
          mineral fragments, safe to handle and to keep at home. Third, <strong>you get
          all of the ashes back</strong>: crematories follow strict identification and
          collection procedures, and the goal is to return all recoverable remains.
        </p>
        <p>
          One person holds the legal authority: the person named in a written designation,
          or otherwise the next of kin under state law. See our{' '}
          <Link href="/guides/who-can-arrange-funeral/">guide to who can arrange a funeral</Link>{' '}
          for that priority order. If the family agrees, though, the authority question
          rarely matters, and dividing the ashes often settles disagreements by letting
          each branch follow its own plan.
        </p>

        <h2>Every option, with typical costs</h2>
        <table>
          <thead>
            <tr><th>Option</th><th>Typical cost</th><th>A place to visit?</th></tr>
          </thead>
          <tbody>
            <tr><td>Keep at home in an urn</td><td>$0 plus the urn</td><td>No, but the ashes stay close</td></tr>
            <tr><td>Bury the urn in a cemetery</td><td>Smaller plot plus opening and closing fees; varies by cemetery</td><td>Yes, a gravesite</td></tr>
            <tr><td>Columbarium niche</td><td>$750 to $2,800 typical; up to $8,200 at high-end mausoleums</td><td>Yes, like visiting a grave</td></tr>
            <tr><td>Scattering garden at a cemetery</td><td>About $100 to $550</td><td>Yes, a communal memorial area</td></tr>
            <tr><td>Scatter yourself (land or sea)</td><td>Usually free; park permits $0 to $120</td><td>No fixed place, but a meaningful place</td></tr>
            <tr><td>Hired scattering (boat or aerial)</td><td>Unattended boat $189 to $450; private charter $350 to $1,800; aerial $500 to $1,500</td><td>No, but a ceremony is included</td></tr>
            <tr><td>Divide and share with family</td><td>Keepsake urns and jewelry only</td><td>Each family keeps its portion</td></tr>
            <tr><td>Glass art, jewelry, or keepsakes</td><td>Varies by artist; a diamond starts at about $995</td><td>Worn or displayed at home</td></tr>
            <tr><td>Memorial tree urn</td><td>Biodegradable urn kit plus the tree</td><td>Yes, a living tree</td></tr>
            <tr><td>Memorial reef ball</td><td>$4,000 to $9,000</td><td>Yes, by boat at GPS coordinates</td></tr>
            <tr><td>Space memorial flight</td><td>About $3,495 suborbital; $4,995 Earth orbit; $12,995 or more lunar</td><td>No, but a symbolic journey</td></tr>
          </tbody>
        </table>
        <p>
          The niche figures come from our{' '}
          <Link href="/guides/mausoleum-cost/">mausoleum and niche price guide</Link>, and
          the scattering figures from our{' '}
          <Link href="/guides/scattering-ashes-laws-costs/">scattering ashes guide</Link>,
          which covers the permits and rules in detail. This guide stays at the level of
          choosing between options, so it does not repeat those rules.
        </p>

        <h2>The classic options</h2>
        <p>
          <strong>Keeping ashes at home</strong> is the most common first step, whether it
          becomes permanent or just buys time. Any container works: a decorative urn from
          our <Link href="/guides/urn-costs-guide/">urn guide</Link>, or an everyday object
          with meaning. Under the FTC Funeral Rule, no funeral home can require you to buy
          its urn, and it may not charge a handling fee for one you bought elsewhere.
        </p>
        <p>
          <strong>Burying the urn</strong> suits families who want a gravesite. Cemeteries
          sell smaller plots for cremated remains, usually cheaper than full-size graves,
          and many require an outer container or liner around the urn to stop the ground
          settling. That is cemetery policy, not law, and the fees vary: see our{' '}
          <Link href="/guides/burial-plot-costs/">burial plot cost guide</Link> for the
          cemetery side of the bill.
        </p>
        <p>
          <strong>A columbarium niche</strong> is the middle path: a permanent, visitable
          place without a full burial. Niches usually hold one or two urns, sit indoors or
          outdoors at cemeteries, churches, and memorial parks, and cost far less than a
          burial plot plus opening and closing. Inurnment (opening and closing the niche)
          and inscription are usually separate fees, so ask what the quoted niche price
          includes.
        </p>
        <p>
          <strong>Scattering</strong> is the most popular option of all, and the one with
          the most rules attached. On your own land it is generally free. On someone
          else&apos;s land you need permission. National parks usually require a permit
          ($0 to $120). At sea, the EPA requires scattering at least 3 nautical miles from
          land, with no non-decomposable materials, and notification within 30 days. Our
          scattering guide covers every case; the one rule to remember here is that
          scattering is irreversible, so set aside any portion meant for keepsakes first.
        </p>

        <h2>The creative options</h2>
        <p>
          <strong>Dividing and sharing</strong> is the option that solves the most family
          arguments. Keepsake urns hold a small portion each, and jewelry pendants hold a
          symbolic amount. Because one cremation produces 3 to 7 pounds, there is usually
          plenty to go around, and many families combine this with another option: most
          ashes buried or scattered, a small portion kept by each sibling.
        </p>
        <p>
          <strong>Glass art and jewelry</strong> fold a small amount of ashes into molten
          glass, resin, paint, or ceramic glaze, making paperweights, sculptures,
          pendants, or paintings. <strong>Cremation diamonds</strong> go further: the
          carbon itself is crystallized into a real lab-grown diamond, starting at about
          $995 for a small stone, as covered in our{' '}
          <Link href="/guides/cremation-diamonds-cost/">cremation diamond guide</Link>.
          Both kinds are keepsakes, not investments: resale value is far below purchase
          price.
        </p>
        <p>
          <strong>A memorial tree</strong> plants the ashes with a biodegradable urn and a
          young tree, so the memorial grows. Check two things before ordering: whether the
          tree species suits your climate and soil, and whether the planting site allows
          it long term, since a tree planted on land you later sell may not stay yours.
          Our <Link href="/guides/green-burial-composting/">green burial guide</Link> covers
          the natural-options landscape more broadly.
        </p>
        <p>
          <strong>A memorial reef</strong> mixes ashes into pH-neutral concrete reef balls
          placed on the ocean floor at permitted sites, where they become marine habitat.
          Published provider prices run $4,000 to $9,000 depending on reef size, with the
          family boat trip to the dedication usually extra. Families receive GPS
          coordinates and can visit by boat. <strong>A space memorial</strong> launches a
          symbolic portion of ashes on a suborbital or orbital flight, with published
          2026 prices around $3,495 for suborbital, $4,995 for Earth orbit, and $12,995 or
          more for lunar missions, plus a small processing fee. Both options use only a
          portion of the ashes, so the rest stays available for an urn or scattering.
        </p>

        <h2>A checklist for choosing</h2>
        <ul>
          <li><strong>Do you need a place to visit?</strong> If yes, a niche, a burial plot, a scattering garden, or a tree wins. If no, scattering or a keepsake may fit better.</li>
          <li><strong>Is the decision reversible?</strong> Scattering cannot be undone. If anyone in the family is unsure, keep a portion back in a keepsake urn before scattering the rest.</li>
          <li><strong>Does religion constrain the choice?</strong> The Catholic Church directs that ashes be kept together in a sacred place, a cemetery or columbarium, not scattered or kept at home. Other traditions vary: check before deciding, not after.</li>
          <li><strong>Will the family agree, and stay agreeing?</strong> A niche or plot is a shared decision that lasts decades. Dividing the ashes lets each branch choose separately and avoids a single winner-takes-all vote.</li>
          <li><strong>What does the budget allow?</strong> A niche at $750 to $2,800 or a scattering garden at $100 to $550 gives a permanent place for far less than a reef or space flight. Keeping ashes at home costs nothing until you are ready.</li>
          <li><strong>Will the ashes travel?</strong> For flights, use carry-on luggage in a container that passes through an x-ray machine, not a thick-walled metal urn. For shipping, use the postal service method approved for cremated remains and confirm the labeling with the carrier.</li>
        </ul>
        <p>
          If a ceremony is part of the plan, see our{' '}
          <Link href="/guides/memorial-service-cost/">memorial service cost guide</Link> for
          what the service itself costs, and our{' '}
          <Link href="/guides/how-to-plan-a-funeral/">funeral planning guide</Link> for the
          full sequence of decisions in order.
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
          <Link href="/calculator/">Build your line-item estimate →</Link>
          {' · '}
          <Link href="/guides/scattering-ashes-laws-costs/">Scattering ashes: laws & costs →</Link>
          {' · '}
          <Link href="/guides/urn-costs-guide/">Urns: types, costs & where to buy →</Link>
          {' · '}
          <Link href="/guides/cremation-cost-2026/">Cremation costs in 2026 →</Link>
        </p>
      <RelatedGuides currentSlug="what-to-do-with-ashes" />
      </div>
    </>
  );
}
