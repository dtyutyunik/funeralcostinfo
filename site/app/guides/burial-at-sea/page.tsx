import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'How Much Does Burial at Sea Cost? (2026) — Navy Program, EPA Rules & Charter Prices',
  description:
    'How much does burial at sea cost in 2026: unattended ash scattering ($100–$500), attended charters ($350–$2,900), full-body sea burials ($7,000–$17,000), and the free Navy program. EPA rules and eligibility explained.',
  alternates: { canonical: SITE_URL + '/guides/burial-at-sea/' },
  openGraph: {
    title: 'How Much Does Burial at Sea Cost? (2026)',
    description:
      'Ash scattering at sea runs $100–$500 unattended and $350–$2,900 attended; a full-body sea burial typically costs $7,000–$17,000. The Navy program is free for eligible veterans and families.',
    url: SITE_URL + '/guides/burial-at-sea/',
  },
};

export default function BurialAtSea() {
  const faqs = [
    {
      q: 'Is burial at sea legal in the United States?',
      a: 'Yes. Federal law allows both cremated and intact human remains to be buried at sea, but the EPA sets the rules: everything must happen at least 3 nautical miles (about 3.5 regular miles) from land. The rules are stricter for intact bodies than for ashes — see the EPA rules section below.',
    },
    {
      q: 'How much does burial at sea cost?',
      a: 'Unattended ash scattering typically costs $100–$500, per published 2026 operator pricing. Attended ash-scattering charters run about $350–$2,900 depending on the vessel, group size, and coast. A private full-body burial at sea typically costs $7,000–$17,000. The U.S. Navy\u2019s burial-at-sea program is free of charge for eligible service members, veterans, and their families.',
    },
    {
      q: 'How far from shore does a burial at sea have to be?',
      a: 'At least 3 nautical miles from land, per the EPA. A nautical mile is longer than a regular mile, so that\u2019s about 3.5 regular miles (5.6 km). For intact (non-cremated) remains the water must also be at least 600 feet deep — 1,800 feet in certain Florida waters. Cremated remains have no depth requirement.',
    },
    {
      q: 'Who is eligible for the Navy\u2019s burial-at-sea program?',
      a: 'Per the Navy\u2019s MyNavy HR page: active-duty members of the uniformed services, retired members, former members who were honorably discharged, U.S. civilian marine personnel of the Military Sealift Command, and dependent family members of active-duty personnel, retirees, and veterans. The service is free, but the family gets the remains to the port of embarkation.',
    },
    {
      q: 'Can the family attend the Navy\u2019s burial-at-sea ceremony?',
      a: 'No. The committal ceremony is performed while the ship is deployed, so family members are not allowed to be present. The commanding officer notifies the family afterward with the date, time, and coordinates, and may send photos or video. Families who want to be present use a private charter company instead.',
    },
    {
      q: 'Do I have to report a burial at sea to the EPA?',
      a: 'Yes. Federal regulation 40 CFR 229.1 requires that all burials at sea be reported to the EPA within 30 days of the event. Private charter companies typically file this paperwork for you; if you do it yourself, the EPA provides an online reporting tool. State permits may also apply — California, for example, requires a disposition-of-remains permit.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Burial at sea costs & rules', url: SITE_URL + '/guides/burial-at-sea/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Burial at sea costs &amp; rules</nav>
        <JsonLd data={articleJsonLd({
          title: 'How Much Does Burial at Sea Cost? (2026) — Navy Program, EPA Rules & Charter Prices',
          description: 'How much does burial at sea cost in 2026: unattended ash scattering ($100–$500), attended charters ($350–$2,900), full-body sea burials ($7,000–$17,000), and the free Navy program. EPA rules and eligibility explained.',
          url: SITE_URL + '/guides/burial-at-sea/',
          datePublished: '2026-10-01',
          dateModified: LAST_UPDATED,
          siteUrl: SITE_URL,
        })} />
        <GuideHero slug="burial-at-sea" imageAlt="How much does burial at sea cost? A small charter boat on a calm, muted ocean under an overcast sky"><h1>How much does burial at sea cost? (2026 prices)</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> <strong>how much does burial at sea cost?</strong> Unattended ash
          scattering typically runs <strong>$100–$500</strong>, attended ash-scattering charters about{' '}
          <strong>$350–$2,900</strong>, and a private full-body burial at sea typically{' '}
          <strong>$7,000–$17,000</strong> — all far below our modeled national estimate of{' '}
          <strong>$9,140</strong> for a traditional funeral. The U.S. Navy's burial-at-sea program is free
          of charge for eligible service members, veterans, and their families. Federal EPA rules require
          every sea burial to take place at least 3 nautical miles from land, and to be reported to the EPA
          within 30 days.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>How much does burial at sea cost? The price table</h2>
        <p>
          Prices for burial at sea depend almost entirely on one decision: whether the body is cremated or
          intact, and whether the family is on the boat. Ranges below come from pricing published by U.S.
          coastal operators in 2026:
        </p>
        <ul>
          <li><strong>Unattended ash scattering:</strong> ~$100–$500. You mail or drop off the cremated remains; a licensed captain performs the release at least 3 nautical miles offshore and returns GPS coordinates and a certificate. Video of the release is often a separate charge (around $100).</li>
          <li><strong>Attended ash scattering, small group:</strong> ~$350–$875 for 1.5–3 hours aboard a modest vessel.</li>
          <li><strong>Attended ash scattering, larger group or longer trip:</strong> ~$875–$1,800; premium or extended yacht charters run $1,800–$2,900+. A Florida operator, for example, charges $550 for an attended service for up to 3 people; a San Diego company prices an all-inclusive 2.5-hour memorial aboard a vintage yacht at $2,925.</li>
          <li><strong>Full-body private burial at sea:</strong> typically ~$7,000–$17,000. New England Burials at Sea prices its shroud-based full-body service starting at $8,975; another operator quotes roughly $11,850 for vessel, shroud, and ballast; a New England funeral-home interview pegs the all-in cost around $16,500 including the boat, shroud, weights, crew, admin, and gratuity — with the funeral home's own preparation and transport fees on top.</li>
          <li><strong>U.S. Navy burial-at-sea program:</strong> free of charge for eligible families. The family is responsible for getting the remains to the port of embarkation.</li>
        </ul>
        <p>
          Watch for add-ons that catch families off guard: storage fees if the operator holds the remains
          before the trip (about $50/week is common), charges for additional individuals (~$100 per person),
          and documentation like video. Ask for the total in writing before you book. A biodegradable water
          urn for an attended scattering typically costs $50–$250; see our <Link href="/guides/scattering-ashes-laws-costs/">scattering ashes
          laws & costs guide</Link> for more on urns and state-by-state ash rules.
        </p>

        <h2>The U.S. Navy's burial-at-sea program: who qualifies and what's covered</h2>
        <p>
          The Navy has performed burials at sea from deployed vessels for centuries, and the program is
          still active: Military OneSource reports the Navy performs an average of about 1,500 cremated-remains
          and 15 casketed burials at sea per year. Per the Navy's own MyNavy HR burial-at-sea page, eligibility
          covers: (1) active-duty members of the uniformed services; (2) retired members; (3) former members
          who were honorably discharged; (4) U.S. civilian marine personnel of the Military Sealift Command;
          and (5) dependent family members of active-duty personnel, retirees, and veterans.
        </p>
        <p>
          What's covered: <strong>the ceremony itself is free of charge</strong> to eligible families, per
          Military OneSource. The committal ceremony is performed while the ship is deployed, so <strong>family
          members may not be present</strong> — this is the trade-off. Afterward, the ship's commanding officer
          notifies the family with the date, time, and longitude/latitude, and may send photos or video. The
          Navy says to expect an average of 12–18 months from when the remains arrive at the port of embarkation
          until the committal. To apply, the primary next of kin requests a packet from the Navy/Marine Corps
          Mortuary Affairs office and submits a death certificate, burial-transit permit (or cremation
          certificate), and the DD Form 214 or discharge paperwork.
        </p>
        <p>
          What's not covered: the family pays to get the remains to the port of embarkation — and most
          eligible veterans' funerals still involve standard funeral-home costs for preparation and transport
          before that point. Veterans also have separate burial benefits (headstone, flag, plot) through the
          VA; see our <Link href="/guides/veterans-burial-benefits/">veterans burial benefits guide</Link> for
          the full picture.
        </p>

        <h2>EPA rules for burial at sea: the 3-nautical-mile rule</h2>
        <p>
          Sea burials in the U.S. are governed by the federal Marine Protection, Research, and Sanctuaries
          Act, with the details in EPA regulation <strong>40 CFR 229.1</strong>. The EPA's burial-at-sea
          page lays out a general permit — meaning you don't apply for a permit in advance, but you must
          follow the conditions:
        </p>
        <ul>
          <li><strong>Distance:</strong> every sea burial must take place at least <strong>3 nautical miles
          from land</strong> (about 3.5 regular miles). The EPA measures from the ordinary low-water mark,
          and for bays and river mouths the starting line can be the charted line across the bay entrance —
          so you may have to sail further than the shoreline you see from the dock.</li>
          <li><strong>Cremated remains:</strong> may be buried at <strong>any ocean depth</strong>, scattered
          loose or placed in a biodegradable urn, as long as they're at least 3 nautical miles out.</li>
          <li><strong>Intact (non-cremated) remains:</strong> must be at least 3 nautical miles out <strong>and
          in ocean water at least 600 feet deep</strong> — 1,800 feet in certain Florida waters (east central
          Florida, the Dry Tortugas, and west of Pensacola to the Mississippi River Delta). The EPA also
          requires all necessary measures so the remains sink to the bottom rapidly and permanently:
          biodegradable shrouds, weights (iron chain, not lead), banded biodegradable caskets with holes.</li>
          <li><strong>Flowers and wreaths:</strong> only materials that decompose readily in the marine
          environment — no plastic, synthetic, or fabric wreaths.</li>
          <li><strong>Reporting:</strong> <strong>all burials at sea must be reported to the EPA within 30
          days</strong> of the event, using the EPA's burial-at-sea reporting tool.</li>
        </ul>
        <p>
          State law sits on top of federal law. California, for example, requires a disposition-of-remains
          permit from the county, which a crematorium or charter operator normally obtains. Private charter
          companies typically handle both the EPA filing and state paperwork as part of their fee — ask
          explicitly whether they do.
        </p>

        <h2>Private charter companies: what to ask before you book</h2>
        <p>
          Dozens of licensed operators work U.S. coasts. The vessel, coast, and trip length drive the price —
          a one-hour attended scattering off Florida can run $550, while a half-day vintage yacht in San
          Diego runs $2,925. Before booking, ask:
        </p>
        <ul>
          <li><strong>Is the release guaranteed at least 3 nautical miles out?</strong> Reputable operators sail to GPS-verified points and give you the coordinates in writing.</li>
          <li><strong>Is the operator licensed?</strong> Look for a USCG-licensed captain; many companies also advertise EPA compliance and state cremated-remains-disposer licensing where required.</li>
          <li><strong>What's included in the total?</strong> Coordinates certificate, photos, video, storage, extra guests — get the itemized total in writing, not just a "starting at" price.</li>
          <li><strong>What happens in bad weather?</strong> Most operators reschedule or refund weather cancellations; confirm the policy before you pay a deposit.</li>
          <li><strong>For full-body burials:</strong> confirm the shroud or casket is fully biodegradable, weighted, and EPA-compliant — and budget a longer offshore voyage, which is why full-body services cost several times more than ash scatterings.</li>
        </ul>
        <p>
          A low-cost alternative some families use: major cruise lines (Carnival, Royal Caribbean, and others)
          allow ash scattering from the ship, and several charge no fee beyond the cruise fare and the urn —
          the ceremony is complimentary and the ship files the paperwork. But you're scattering on the ship's
          itinerary, not choosing the location or date, so it's not equivalent to a private charter.
        </p>

        <h2>How burial at sea compares to other options</h2>
        <p>
          On cost alone, sea disposition is one of the cheapest final options. Unattended ash scattering
          ($100–$500, plus cremation — our modeled national estimate for direct cremation is $3,030) lands in
          the same neighborhood as scattering ashes on land. Even a private full-body sea burial at
          $7,000–$17,000 compares favorably with a traditional burial: our modeled national estimate for a
          traditional funeral is <strong>$9,140</strong>, and that's before the plot and grave-opening fees —
          see our <Link href="/guides/funeral-cost-2026-breakdown/">funeral cost breakdown</Link> and{' '}
          <Link href="/guides/cremation-cost-2026/">cremation cost guide</Link>. The one real price competitor
          among traditional options is green burial, which avoids embalming and vaults.
        </p>
        <p>
          The trade-offs aren't financial: there's no grave to visit (the coordinates are the marker), intact
          sea burial requires traveling well offshore to reach the required depth (off New England that's a
          ~45-mile voyage; off much of the West Coast, under 10 miles), and the Navy option means waiting a
          year or more with no family attendance. For many families those are acceptable — for sailors and
          ocean lovers, the sea is the point.
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
          <Link href="/guides/scattering-ashes-laws-costs/">Scattering ashes: laws &amp; costs →</Link>
          {' · '}
          <Link href="/guides/cremation-cost-2026/">Cremation costs →</Link>
          {' · '}
          <Link href="/guides/veterans-burial-benefits/">Veterans burial benefits →</Link>
          {' · '}
          <Link href="/guides/funeral-cost-2026-breakdown/">Funeral cost breakdown →</Link>
        </p>
      <RelatedGuides currentSlug="burial-at-sea" />
      </div>
    </>
  );
}
