import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL, dataset, fmt } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

const A = dataset.anchors;

export const metadata: Metadata = {
  title: 'Scattering Ashes: Laws, Costs & How to Do It',
  description:
    'Scattering ashes legally: EPA sea-burial rules, national park permits, private land, airline rules, and what scattering services cost — sourced and plain-English.',
  alternates: { canonical: SITE_URL + '/guides/scattering-ashes-laws-costs/' },
  openGraph: {
    title: 'Scattering Ashes: Laws, Costs & How to Do It',
    description:
      'Where you can legally scatter ashes, which places need a permit, how to fly with cremated remains, and what scattering costs — with sourced figures.',
    url: SITE_URL + '/guides/scattering-ashes-laws-costs/',
  },
};

export default function ScatteringAshesGuide() {
  const faqs = [
    {
      q: 'Is it legal to scatter ashes at sea?',
      a: 'Yes. The EPA has issued a general permit under the Marine Protection, Research and Sanctuaries Act (MPRSA, 40 C.F.R. 229.1) authorizing burial of cremated remains at sea. Cremated remains must be scattered at least 3 nautical miles from land (any depth), with no plastic or non-decomposable materials, and the EPA must be notified within 30 days after the event — no application and no EPA fee. Pet ashes cannot be mixed in.',
    },
    {
      q: 'Do I need a permit to scatter ashes in a national park?',
      a: 'Usually, yes — but the exact requirement varies by park. Most national parks (e.g., Joshua Tree, Yellowstone, Bryce Canyon) require a Special Use Permit or written permission; fees range from $0 to about $120 depending on the park. A few, like the Blue Ridge Parkway, allow scattering without a permit for small groups that follow the rules (e.g., 100 feet from trails, roads, and waterways). Check the specific park\u2019s page before you go.',
    },
    {
      q: 'Can I scatter ashes on private property?',
      a: 'On your own land, scattering is generally allowed — you are not required to get a permit. On someone else\u2019s private land, you need the landowner\u2019s permission. For lakes and rivers, the federal rules do not apply the way they do at sea, but state and local rules vary — check with your state\u2019s environmental or waterways agency before scattering inland.',
    },
    {
      q: 'Can I take cremated remains on a plane?',
      a: 'Yes. The TSA allows cremated remains in carry-on and checked bags, but the container must pass through the X-ray — and TSA officers will not open the container, even if you ask. Use a wood, plastic, or non-lead-lined container for carry-on; dense metal or lead-lined urns look opaque on X-ray and can be denied. Carry-on is recommended over checked baggage, and bringing the death certificate and cremation certificate can help with airline questions.',
    },
    {
      q: 'How much does it cost to scatter ashes?',
      a: 'Doing it yourself is usually free — on your own land, or at sea as long as you follow the EPA\u2019s rules. Hired services cost extra: unattended boat scatterings run roughly $189\u2013$450 (e.g., Ocean Ashes, Florida, 2026, starting at $189), attended private charters typically $350\u2013$1,800+ depending on vessel and group size (Parting Stone, 2026), and aerial scattering $500\u2013$1,500. Cemetery scattering gardens usually charge a fee — for example, $100 with a permanent record (Mount Hope Cemetery, Bangor, ME), $300 (Rose Hill Cemetery, Bloomington, IN, 2023), or $550 including monument engraving (Glen Forest Cemetery, Yellow Springs, OH). Confirm current prices directly with the provider.',
    },
    {
      q: 'Do the ashes need any special treatment before scattering?',
      a: 'For sea burial the ashes may be scattered loose or in a biodegradable container — anything placed in the water must decompose (no plastic, metal, or stone). National parks typically require the remains to be fully processed and pulverized, completely dispersed rather than piled or buried, with no markers or memorial items left behind.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Scattering ashes: laws, costs & how to do it', url: SITE_URL + '/guides/scattering-ashes-laws-costs/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Scattering ashes: laws, costs & how to do it</nav>
      <JsonLd data={articleJsonLd({
        title: 'Scattering Ashes: Laws, Costs & How to Do It',
        description: 'Scattering ashes legally: EPA sea-burial rules, national park permits, private land, airline rules, and what scattering services cost — sourced and plain-English.',
        url: SITE_URL + '/guides/scattering-ashes-laws-costs/',
        datePublished: '2026-09-24',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="scattering-ashes-laws-costs" imageAlt="Scattering ashes: laws, costs & how to do it"><h1>Scattering ashes: laws, costs &amp; how to do it</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> scattering ashes is legal in most places — but the rules
          change with the location. At sea, the EPA requires you to scatter at least
          {' '}<strong>3 nautical miles from shore</strong> and notify the EPA within 30 days (no
          permit or fee). National parks usually require a <strong>special use permit</strong>.
          On private land you need the <strong>landowner&rsquo;s permission</strong>, and for
          inland lakes and rivers, <strong>state and local rules vary</strong>. The cremation
          itself is the expensive part — our modeled national estimate for a direct cremation is
          {' '}<strong>{fmt(A.direct_cremation.value)}</strong> in August 2026 dollars (from the
          NFDA 2023 median of $2,750). The scattering is usually free if you do it yourself;
          charter-boat services charge roughly $189 to $1,800+ depending on the service.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>The federal rules: scattering at sea</h2>
        <p>
          Sea burial has the clearest rules of any option because it is governed by federal law.
          The EPA has issued a <strong>general permit</strong> under the Marine Protection,
          Research and Sanctuaries Act (MPRSA), published at 40 C.F.R. 229.1, authorizing the
          burial of cremated (and non-cremated) human remains at sea.
        </p>
        <p>The rules for cremated remains are simple:</p>
        <ul>
          <li><strong>At least 3 nautical miles from land</strong> — the same measurement point used on nautical charts, including the openings of bays and rivers.</li>
          <li><strong>Any depth</strong> — unlike full-body burial, there is no depth requirement for cremated remains.</li>
          <li><strong>No non-decomposable materials</strong> — scatter loose, or in a biodegradable container. No plastic, metal, stone, or artificial materials.</li>
          <li><strong>Notify the EPA within 30 days</strong> of the event — you can report online through the EPA&rsquo;s Burial at Sea Reporting Tool. No application is needed beforehand, and the EPA charges no fee.</li>
        </ul>
        <p>
          The general permit covers human remains only — <strong>pet ashes cannot be mixed
          in</strong>, and scattering is not allowed within 3 nautical miles or on public beaches
          (EPA, current). If the deceased was a veteran, note that a free burial at a VA national
          cemetery is also available for ashes — see our <Link href="/guides/cremation-cost-2026/">cremation cost guide</Link>.
        </p>

        <h2>National parks and public land</h2>
        <p>
          National parks generally require <strong>advance permission</strong> to scatter ashes —
          usually a Special Use Permit or a written letter of permission from the park&rsquo;s
          special use office. The details vary park by park:
        </p>
        <ul>
          <li><strong>Joshua Tree National Park</strong> requires a Special Use Permit with a $120 processing fee (NPS, current).</li>
          <li><strong>Bryce Canyon National Park</strong> requires a Special Use Permit ($25), designates a single scattering site (Piracy Point), and prohibits scattering by air and leaving any monument or marker (NPS, current).</li>
          <li><strong>Yellowstone National Park</strong> requires a Special Use Permit with no fee; ashes must be fully processed and dispersed, only in undeveloped non-thermal areas (NPS, current).</li>
          <li><strong>Great Smoky Mountains National Park</strong> requires a letter of permission (no fee); larger gatherings of 25+ people need a Special Use Permit (NPS, updated July 2026).</li>
          <li><strong>Blue Ridge Parkway</strong> allows scattering without a permit for groups of 25 or fewer, but with strict conditions: ashes must be cremated and pulverized, scattered at least 100 feet from any trail, road, developed facility, or body of water, and several overlooks are entirely off-limits because ash buildup changes soil chemistry (NPS superintendent&rsquo;s compendium, current).</li>
        </ul>
        <p>
          The pattern is consistent: keep the group small, scatter discreetly away from
          high-traffic areas, leave nothing behind, and get written permission first. State
          parks vary — each state sets its own rules, so check the specific park before you go.
          National forests and Bureau of Land Management land are generally the most permissive,
          treating scattering as casual use as long as no damage is caused.
        </p>

        <h2>Private land and cemetery scattering gardens</h2>
        <p>
          <strong>On your own land,</strong> scattering ashes is generally permitted — no permit
          required. <strong>On someone else&rsquo;s private land,</strong> you need the
          landowner&rsquo;s permission. This is the simplest option for many families, and it
          is free.
        </p>
        <p>
          If you want a dedicated setting, many cemeteries offer <strong>scattering gardens</strong> —
          landscaped areas where ashes are scattered and often memorialized on a shared
          monument or plaque. Expect a fee; examples include $100 for scattering with a permanent
          record at Mount Hope Cemetery in Bangor, ME, $300 at Rose Hill Cemetery in
          Bloomington, IN (city brochure, 2023), and $550 including monument engraving at Glen
          Forest Cemetery in Yellow Springs, OH. Fees vary widely between cemeteries, so ask for
          the price list and compare — under the FTC Funeral Rule you are entitled to written
          price information before you decide.
        </p>

        <h2>Inland lakes and rivers</h2>
        <p>
          The EPA&rsquo;s sea-burial rules do not cover inland waters the same way — ocean
          waters start at the shore, and rivers, lakes, and reservoirs are governed by
          <strong>state and local rules</strong>, which vary. Some states or local water agencies
          require permits for scattering in inland waterways; others are silent on the practice.
          California, for example, requires scattering only in certain waters and generally
          restricts the scattering of ashes in inland waters — the specifics differ by state, so
          check with your state&rsquo;s environmental or waterways agency before scattering in a
          lake or river. Never scatter where a local rule prohibits it, and as at sea, avoid
          leaving any container or non-biodegradable materials behind.
        </p>

        <h2>Flying with cremated remains</h2>
        <p>
          Scattering far from home usually means a flight — and the TSA has specific rules for
          traveling with ashes:
        </p>
        <ul>
          <li><strong>Carry-on is recommended.</strong> The TSA allows cremated remains in carry-on and checked bags, but keeping them with you avoids the risk of loss or rough handling.</li>
          <li><strong>The container must clear the X-ray.</strong> All urns and containers must pass through the X-ray machine. If the material appears opaque — dense metal or lead-lined urns — the container cannot be carried through the checkpoint.</li>
          <li><strong>TSA will not open the container</strong> — out of respect for the deceased, never, even if you request it. So if it cannot be X-rayed, it does not fly in the cabin.</li>
          <li><strong>Use a screenable container.</strong> The TSA recommends a temporary container of wood, plastic, or non-lead-lined ceramic, which X-rays read clearly. You can transfer the ashes to a permanent urn after arrival.</li>
        </ul>
        <p>
          Bring the death certificate and cremation certificate — the TSA does not require them,
          but airlines often ask. And always check your airline&rsquo;s policy in advance: rules
          for checked transport of cremated remains differ by carrier.
        </p>

        <h2>What scattering costs</h2>
        <p>
          The cremation itself is the big expense: our modeled national estimate for a direct
          cremation is <strong>{fmt(A.direct_cremation.value)}</strong> in August 2026 dollars,
          built from the NFDA 2023 median of $2,750. (For full detail, see <Link href="/guides/cremation-cost-2026/">how much cremation costs</Link>.)
          Once the ashes are in hand, scattering is usually free:
        </p>
        <ul>
          <li><strong>Do it yourself</strong> — on your own land, or at sea following the EPA&rsquo;s rules: free.</li>
          <li><strong>Unattended boat scattering</strong> — a captain performs the release and sends you coordinates, a certificate, and photos or video: roughly $100&ndash;$450 (Parting Stone, 2026); one Florida provider advertises packages starting at $189 (Ocean Ashes, 2026).</li>
          <li><strong>Attended private charter</strong> — family aboard for the ceremony: typically $350&ndash;$875 for a small group, $875&ndash;$1,800+ for larger vessels or longer trips; a San Diego provider lists up to 20 guests at $1,195 (Ashes on the Sea, 2026 flyer).</li>
          <li><strong>Aerial scattering</strong> — release from a small aircraft: roughly $500&ndash;$1,500 (Parting Stone, 2026). The ashes must be removed from any container before release (FAA rules), and the release must not endanger people or property.</li>
          <li><strong>Cemetery scattering garden</strong> — a fee usually applies; examples range from about $100 to $550 including record-keeping or engraving.</li>
          <li><strong>Scattering urn</strong> — a biodegradable or purpose-built scattering urn is sold separately; see our <Link href="/guides/urn-costs-guide/">urn cost guide</Link>.</li>
        </ul>
        <p>
          Watch for add-ons: some services charge extra for storing the ashes before the trip
          (about $50/week is common), scattering for a second person on the same trip, or video
          of the release. Ask for the all-in total in writing before you book — a
          &ldquo;starting at&rdquo; price and a final invoice can be several hundred dollars apart.
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
          <Link href="/guides/cremation-cost-2026/">How much cremation costs →</Link>
          {' · '}
          <Link href="/guides/funeral-glossary/">Funeral glossary →</Link>
        </p>
      <RelatedGuides currentSlug="scattering-ashes-laws-costs" />
      </div>
    </>
  );
}
