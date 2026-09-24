import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL, dataset, fmt } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

const A = dataset.anchors;

export const metadata: Metadata = {
  title: "Aquamation: Costs & Where It's Legal",
  description:
    "What aquamation (alkaline hydrolysis) is, how much it costs, the states where it's legal as of 2026, and how it compares with cremation.",
  alternates: { canonical: SITE_URL + '/guides/aquamation-guide/' },
  openGraph: {
    title: "Aquamation: Costs & Where It's Legal",
    description:
      'Plain-English guide to aquamation (water cremation): the process, sourced provider prices, where it is legal, and how it compares with cremation.',
    url: SITE_URL + '/guides/aquamation-guide/',
  },
};

export default function AquamationGuide() {
  const faqs = [
    {
      q: 'Is aquamation the same as cremation?',
      a: 'The word is used both ways. Legally, several states define alkaline hydrolysis as a form of cremation or final disposition; technically, it uses warm water and alkali instead of flame. In practice, if a state statute says "cremation," read the definition — some states mean only flame-based cremation, while others explicitly include alkaline hydrolysis.',
    },
    {
      q: 'What do the family receive after aquamation?',
      a: 'Sterile, processed bone remains — similar to cremated ashes, though often a slightly larger amount (the Cremation Association of North America notes roughly a third more bone fragments survive than in flame cremation, per a 2025 industry report). The family can bury them, keep them in an urn, or scatter them under the same rules that apply to cremated ashes in that state.',
    },
    {
      q: 'Is aquamation legal where I live?',
      a: 'Possibly — and possibly not. As of 2026, reputable trackers put the number of states where alkaline hydrolysis is explicitly legal at 26–28, and the list keeps changing as legislatures act. Even where it is legal, there may be no provider near you. Always confirm with your state funeral regulator and the provider itself before planning.',
    },
    {
      q: 'Can I use aquamation if it is not legal in my state?',
      a: 'Often, yes, through transport. Providers such as Cremstar advertise aquamation to families in states like New Jersey and Pennsylvania (where legislation is pending) by performing the process at facilities in states where it is already approved, such as Connecticut, Maryland, or North Carolina (Cremstar press release, late 2025). Ask exactly what transport, permits, and out-of-state paperwork add to the quoted price.',
    },
    {
      q: 'Is aquamation more environmentally friendly than cremation?',
      a: 'That is how providers present it: no flame, so no natural gas burners or direct combustion emissions, and a lower reported energy demand. Note the caveat — published head-to-head comparisons usually come from providers or equipment makers, not independent studies. If environmental impact is your deciding factor, ask the provider for specifics about its process and facility rather than taking marketing claims at face value.',
    },
    {
      q: 'Do religious traditions accept aquamation?',
      a: 'It depends on the tradition, and aquamation is too new for settled rulings in most faiths. A rough guide: Catholic teaching permits cremation but prefers burial of the ashes rather than scattering; Islam and Orthodox Judaism prohibit cremation in any form; Hindu tradition favors flame cremation, usually within about a day. If faith guides your decision, ask your religious authority before planning.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: "Aquamation: costs & where it's legal", url: SITE_URL + '/guides/aquamation-guide/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Aquamation: costs &amp; where it&rsquo;s legal</nav>
      <JsonLd data={articleJsonLd({
        title: "Aquamation: Costs & Where It's Legal",
        description: "What aquamation (alkaline hydrolysis) is, how much it costs, the states where it's legal as of 2026, and how it compares with cremation.",
        url: SITE_URL + '/guides/aquamation-guide/',
        datePublished: '2026-09-24',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="aquamation-guide" imageAlt="Aquamation: Costs & Where It's Legal"><h1>Aquamation: what it is, what it costs, and where it&rsquo;s legal</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> Aquamation — alkaline hydrolysis, sometimes called water
          cremation — breaks down a body in warm water and alkali instead of flame. The family
          receives sterile processed remains much like cremated ashes. There is no reliable national
          average price; published 2026 provider prices run roughly <strong>$1,900–$4,400</strong>
          depending on the provider and package, which sits at or above our modeled direct-cremation
          figure of <strong>{fmt(A.direct_cremation.value)}</strong> (a modeled estimate in August
          2026 dollars, not a quote). It is explicitly legal in about half the states, the list is
          still changing, and availability is limited even where it is legal — most families will
          need to travel or arrange transport.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>What aquamation is, in plain English</h2>
        <p>
          Aquamation speeds up what nature would do anyway. The body is placed in a stainless-steel
          chamber filled with a solution of water and alkali (usually potassium hydroxide). Gentle
          heat and circulation are applied for several hours, and the solution breaks down soft
          tissue into a sterile liquid that is released to the municipal wastewater system, where
          it is treated like other wastewater. What remains is the skeleton — bone fragments that
          are dried, processed into a fine powder, and returned to the family in an urn or container.
        </p>
        <p>
          There is no flame, no natural gas burners, and no smokestack. That is the basis for the
          environmental claims you will see in provider marketing: less energy used and no direct
          combustion emissions. The remains the family takes home are treated like cremated ashes —
          they can be buried, kept in an urn, or scattered under whatever rules apply to ashes in
          that state.
        </p>
        <p>
          One honest caveat: published head-to-head comparisons of aquamation&rsquo;s footprint
          versus flame cremation generally come from equipment makers or providers, not independent
          research. Treat marketing claims as marketing, and ask the provider for process specifics
          if environmental impact is your reason for choosing it.
        </p>

        <h2>Where aquamation is legal</h2>
        <p>
          Disposition law is state-by-state, and the states do not agree on terminology — some call
          it alkaline hydrolysis, others water cremation, dissolution, or chemical disposition. That
          is why published lists disagree, and why every list below should be read as a dated
          snapshot. As of 2026, the reputable trackers we reviewed put the count at <strong>26–28
          states</strong> where alkaline hydrolysis is explicitly legal:
        </p>
        <ul>
          <li><strong>26 states (CANA&rsquo;s March 2026 status list,</strong> reported by Occasional Sage and checked August 7, 2026): Alabama, Arizona, California, Colorado, Connecticut, Florida, Georgia, Hawaii, Idaho, Illinois, Kansas, Maine, Maryland, Minnesota, Missouri, Nevada, North Carolina, Oklahoma, Oregon, South Carolina, Tennessee, Utah, Vermont, Washington, West Virginia, and Wyoming.</li>
          <li><strong>28 states (Mueller Memorial / Interra, as of May 2026):</strong> the same list plus Michigan, North Dakota, and Virginia.</li>
        </ul>
        <p>
          Both sources agree on the direction of travel: the list keeps growing. Bills were active
          in 2025–2026 in Pennsylvania (passed the PA House, pending in the Senate, per a Cremstar
          press release from late 2025) and Rhode Island (passed the House a second year in a row in
          May 2025, pending in the Senate, per the Providence Journal). In some states the opposite
          is on record: New Hampshire now explicitly prohibits alkaline hydrolysis (N.H. Rev. Stat.
          § 325-A:30, 2026), and an Ohio Department of Health ruling from 2011 still treats it as
          not an acceptable form of disposition (per Nolo&rsquo;s state-by-state table, 2026).
          Several large states — New York and New Jersey among them — have no law addressing it at
          all, which is not the same as approval.
        </p>
        <p>
          Legal does not mean available. CANA specifically warns that legalization does not guarantee
          an operating provider nearby (Occasional Sage, August 2026). If no one local offers
          aquamation, funeral homes can often coordinate with an out-of-state facility, or the
          facility may work with you directly — but service areas, transport rules, and paperwork
          differ by state, so confirm before you plan.
        </p>

        <h2>What aquamation costs</h2>
        <p>
          There is no reliable national average — we did not find one from any neutral source, and
          neither did the most careful price survey we reviewed. A convenience sample of advertised
          provider prices collected July 28, 2026 by Occasional Sage found adult aquamation packages
          ranging from <strong>$3,500 to $4,395</strong>: Endswell Funeral Home in North Carolina at
          $3,500, City Cremation in California at $3,773.50, and Washburn-McReavy in Minnesota at
          $3,980 (the fourth provider in the sample was not named). What a package includes varies —
          transfer distance, permits, and the urn are common add-ons — so compare the General Price
          List line items, not the headline numbers.
        </p>
        <p>
          Other published provider figures give a sense of the spread: Caring Cremations in Chicago
          advertises aquamation starting at <strong>$1,897</strong> (current listing), including
          transportation, paperwork, and return of the remains. Cremstar, a provider that arranges
          aquamation across several states using out-of-state facilities, quotes packages starting
          at <strong>$3,995</strong> all-in (press release, late 2025). An older General Price List
          from Elemental NW in Seattle priced aquamation at <strong>$1,395</strong> — but that figure
          is from April 2023, not current.
        </p>
        <p>
          For context, our modeled national estimate for direct cremation is{' '}
          <strong>{fmt(A.direct_cremation.value)}</strong>, and for a funeral with viewing followed
          by cremation it is <strong>{fmt(A.cremation_with_service.value)}</strong> — modeled
          estimates in August 2026 dollars built from NFDA 2023 national medians, not quotes. Published
          aquamation prices typically land at or above the direct-cremation figure, which makes sense:
          the equipment is more expensive than a retort, the process takes longer, and providers are
          still few — though at least one Minnesota provider, Interra Green Burial, deliberately
          prices aquamation close to flame cremation to encourage the option (May 2026). As always,
          get an itemized quote from the actual provider you would use.
        </p>

        <h2>Why most families will need to travel or ship</h2>
        <p>
          Aquamation equipment is expensive, demand is new, and most of the country&rsquo;s
          crematory capacity is flame-based. Even in states where it has been legal for years —
          Oregon legalized it in 2009, Florida and Illinois not long after — providers are
          concentrated in a few metro areas. Rural families in legal states often face the same
          logistics as families in no-law states: a funeral home coordinates transfer to the nearest
          licensed facility, sometimes across state lines.
        </p>
        <p>
          If you are drawn to aquamation for environmental reasons, it is worth comparing it with
          the other lower-impact options before committing to transport logistics. <Link href="/guides/green-burial-composting/">Green burial and human composting</Link> are available more widely in some regions, and a simple <Link href="/guides/cremation-cost-2026/">direct cremation</Link> is offered nearly everywhere. Our <Link href="/guides/funeral-cost-2026-breakdown/">funeral cost breakdown</Link> explains how the national figures are modeled and what typically drives quotes up or down.
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
          <Link href="/guides/cremation-cost-2026/">How much does cremation cost in 2026? →</Link>
          {' · '}
          <Link href="/guides/green-burial-composting/">Green burial &amp; human composting →</Link>
          {' · '}
          <Link href="/guides/funeral-cost-2026-breakdown/">Funeral cost breakdown →</Link>
        </p>
      <RelatedGuides currentSlug="aquamation-guide" />
      </div>
    </>
  );
}
