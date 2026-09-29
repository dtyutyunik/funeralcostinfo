import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'How Much Does a Mausoleum Cost? 2026 Price Guide (Crypts, Niches & Lawn Crypts)',
  description:
    'How much does a mausoleum cost in 2026? Community crypts, columbarium niches, lawn crypts, and private mausoleums — real 2025–2026 cemetery price lists, fee by fee.',
  alternates: { canonical: SITE_URL + '/guides/mausoleum-cost/' },
  openGraph: {
    title: 'How Much Does a Mausoleum Cost? 2026 Price Guide (Crypts, Niches & Lawn Crypts)',
    description:
      'Mausoleum costs in 2026: community crypts, cremation niches, lawn crypts, and private mausoleums — built on published cemetery price lists, with every add-on fee explained.',
    url: SITE_URL + '/guides/mausoleum-cost/',
  },
};

export default function MausoleumCost() {
  const faqs = [
    {
      q: 'How much does a mausoleum crypt cost?',
      a: 'A single crypt in a community mausoleum typically runs $4,000–$8,000 (Dignity Memorial’s 2026 figures: $4,000–$5,000 outdoor, $7,000–$8,000 indoor at the low end), with real 2025–2026 cemetery price lists ranging from about $5,400 in small markets to $10,000–$40,000 in major metros. A double crypt runs roughly $10,000–$16,000+. Entombment (opening/closing) and inscription fees are extra.',
    },
    {
      q: 'Is a mausoleum cheaper than a traditional burial?',
      a: 'Usually not. A community crypt ($4,000–$8,000+) typically costs more than a burial plot ($1,000–$4,000 in most markets), but a lawn crypt — an underground vault that bundles grave space and vault in one purchase — can be the value option at $1,900–$12,000+. The real comparison is crypt vs. plot + vault + opening/closing combined.',
    },
    {
      q: 'What is the difference between a crypt and a niche?',
      a: 'A crypt holds a casket (or two — a double/tandem crypt); a niche holds cremated remains in urns (usually one or two). Crypts are above-ground in a mausoleum building; niches are smaller compartments, often in the same building or in a columbarium. Niches cost far less: $750–$2,800 typical, up to $3,700–$8,200 at high-end mausoleums.',
    },
    {
      q: 'What is a lawn crypt?',
      a: 'An underground mausoleum: a concrete chamber installed below ground that holds one to six caskets. It bundles the grave space and the burial vault in a single purchase — you do not buy a separate vault. Typical range: $1,900–$12,000+, with municipal examples like single $1,600 + delivery/setting in California and double $2,550 at a Kentucky cemetery (2025 price lists).',
    },
    {
      q: 'How much is a niche in a columbarium?',
      a: 'Typical: $750–$2,800 for a standard niche (Dignity Memorial), with 2026 cemetery price lists showing single marble niches $1,300–$5,000 and doubles $3,495–$7,195 at metro Catholic cemeteries. Church columbaria (members-only) can run about $4,500 including inurnment and engraving. Inurnment (opening/closing) and inscription are usually separate fees.',
    },
    {
      q: 'Can you sell or transfer a mausoleum crypt?',
      a: 'Sometimes, but rules are strict and vary by state: you are buying interment rights, not real estate. New York requires offering the space back to the cemetery first; Virginia caps resale transactions; New Jersey prohibits resale of interment spaces. Cemetery transfer/quitclaim fees apply. Check the contract before you buy — resale markets are thin.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'How much does a mausoleum cost?', url: SITE_URL + '/guides/mausoleum-cost/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › How much does a mausoleum cost?</nav>
        <JsonLd data={articleJsonLd({
          title: 'How Much Does a Mausoleum Cost? 2026 Price Guide (Crypts, Niches & Lawn Crypts)',
          description: 'How much does a mausoleum cost in 2026? Community crypts, columbarium niches, lawn crypts, and private mausoleums — real 2025–2026 cemetery price lists, fee by fee.',
          url: SITE_URL + '/guides/mausoleum-cost/',
          datePublished: '2026-09-29',
          dateModified: LAST_UPDATED,
          siteUrl: SITE_URL,
        })} />
        <GuideHero slug="mausoleum-cost" imageAlt="How much does a mausoleum cost? 2026 price guide"><h1>How much does a mausoleum cost? 2026 price guide (crypts, niches & lawn crypts)</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> a single crypt in a community mausoleum typically costs{' '}
          <strong>$4,000–$8,000</strong>, a cremation niche <strong>$750–$2,800</strong>, a lawn crypt{' '}
          <strong>$1,900–$12,000+</strong>, and a private family mausoleum <strong>$25,000+</strong> (2026
          published cemetery price lists). Those are the space alone — entombment fees ($850–$2,050),
          inscription ($18/character at many cemeteries), and endowment care are almost always extra. This
          guide is built on actual 2025–2026 cemetery price lists, not vague national averages.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>Community mausoleum crypts: $4,000–$8,000+</h2>
        <p>
          A community mausoleum is a building with rows of crypts — above-ground compartments, each holding
          one casket (a <strong>double or tandem crypt</strong> holds two). Dignity Memorial's 2026 cost
          guide puts a single outdoor/garden crypt at $4,000–$5,000 and an indoor single crypt at
          $7,000–$8,000 at the low end. Real 2025–2026 cemetery price lists show the spread:
        </p>
        <ul>
          <li>Madonna Cemetery (NJ-area, June 2026 disclosure): crypt for two — interior $10,690–$24,190; exterior $9,690–$16,190.</li>
          <li>Gate of Heaven Mausoleum (June 2026): interior single $11,000–$40,000; crypt for two $16,000–$76,000; exterior single $14,800–$17,800.</li>
          <li>Lakewood Cemetery, Minneapolis (Aug 2025): single crypts $9,995–$29,995; doubles $19,995–$52,995.</li>
          <li>Oak Ridge Cemetery, Springfield IL (2025): tandem (2-casket) crypts $10,000–$12,600; couch crypts $15,000–$16,000.</li>
        </ul>
        <p>
          <strong>Level matters:</strong> eye- and heart-level crypts cost more than top or bottom rows
          (a small-market price list shows inside singles $5,400–$5,900 and doubles $10,700–$11,600 by row).
          Major-metro private cemeteries charge several times what municipal or rural ones do — the FCA's
          executive director puts urban mausoleum space at $5,000–$10,000 while rural grave + interment can be
          as little as $800.
        </p>

        <h2>Columbarium niches: $750–$8,200</h2>
        <p>
          A niche is a small compartment for cremated remains — usually one or two urns — often inside the
          same mausoleum building, in a dedicated columbarium, or in an outdoor garden wall.
        </p>
        <ul>
          <li>Standard niche: <strong>$750–$2,800</strong> (Dignity Memorial); $250–$3,000 in Ever Loved's survey of published figures.</li>
          <li>Higher-end mausoleum niches: <strong>$3,700–$8,200</strong> (Dignity's columbarium page).</li>
          <li>2026 metro price lists: Madonna Cemetery — single marble niche $1,300–$5,000, double $3,495–$7,195; single glass-front $2,000–$5,500, double $4,000–$9,000. Gate of Heaven — interior single marble $1,600–$4,000, double $3,400–$7,800; exterior single marble $1,000–$2,300.</li>
          <li>Value plays: Oak Ridge IL columbarium single $2,000 <em>including</em> opening/closing and nameplate; Elmwood Cemetery, Memphis — niches from $2,500, holding two urns.</li>
          <li>Church columbaria (members-only): ~$4,500 per niche including inurnment, two urns, and engraving at surveyed churches.</li>
        </ul>
        <p>
          A niche plus a <Link href="/guides/cremation-cost-2026/">direct cremation</Link> is often the lowest-cost
          above-ground option of all — worth knowing if the mausoleum look appeals but the crypt price doesn't.
        </p>

        <h2>Lawn crypts: the value option, $1,900–$12,000+</h2>
        <p>
          A lawn crypt is an underground mausoleum: a concrete chamber installed below the lawn, holding one to
          six caskets. The value proposition is structural — it bundles the grave space and the burial vault
          into one purchase, so there is no separate vault to buy. Typical range: <strong>$1,900–$12,000+</strong>{' '}
          (CostHelper) depending on capacity and market.
        </p>
        <ul>
          <li>Ivy Lawn (2025 price list): single lawn crypt $1,600 + $300 delivery + $900 setting; double $2,800 + $400 + $1,000.</li>
          <li>Highland Cemetery, Fort Mitchell KY: single $1,850, double $2,550.</li>
          <li>Suisun-Fairfield CA public cemetery district: single-layer crypt $504, companion $886 (crypt only — plot extra).</li>
          <li>Oak Ridge IL war-memorial veteran package: single $2,000 / double $3,000 all-inclusive (crypt + opening/closing + endowed care).</li>
        </ul>

        <h2>Private family mausoleums: $17,000–$250,000+</h2>
        <p>
          A standalone building for your family, built on cemetery grounds. Rome Monument's 2026 pricing:
          from <strong>$17,000</strong> for a 1-crypt unit, $29,000 (2-crypt), $38,000 (3-crypt), $42,000
          (4-crypt), $55,000 (6-crypt), and <strong>$99,000+</strong> for a walk-in. Industry surveys put a
          standalone 2-person outdoor mausoleum at $50,000–$125,000 and large walk-ins at $250,000 to
          several million. The cemetery plot underneath is usually a separate purchase.
        </p>

        <h2>The add-on fees (where the bill grows)</h2>
        <p>
          The crypt price is the space. Almost everything else is a separate line item — ask for the full
          fee schedule in writing before you commit:
        </p>
        <ul>
          <li><strong>Entombment (opening/closing a crypt):</strong> Gate of Heaven (2026) — $1,550 weekdays, $2,050 Saturday/holiday. Trinity Church Cemetery, Manhattan (2025) — $1,622 / $1,970.</li>
          <li><strong>Inurnment (opening/closing a niche):</strong> Gate of Heaven — $850 / $1,300; Trinity NYC — $648 / $877; Elmwood Memphis — $800–$1,000.</li>
          <li><strong>Inscription/nameplate:</strong> $18 per character at Madonna and Gate of Heaven (2026); $533 flat at Trinity NYC.</li>
          <li><strong>Endowment/perpetual care:</strong> sometimes baked in, sometimes a line item — $800–$950 per tandem crypt at a Texas chapel mausoleum; state law varies on what percentage must fund the care trust.</li>
          <li><strong>Crypt liner:</strong> some cemeteries require a specific liner inside the crypt (e.g. Gate of Heaven's required "Mauso-Guard") — an extra cost to flag before signing.</li>
        </ul>

        <h2>Resale and transfer: you buy rights, not real estate</h2>
        <p>
          A critical fact most buyers learn too late: you are purchasing <strong>interment rights</strong>,
          not the land. Resale rules are strict and state-specific:
        </p>
        <ul>
          <li><strong>New York:</strong> you must first offer the space back to the cemetery in writing; if the cemetery offers at least the original price plus 4% simple annual interest, you cannot sell to anyone else. No broker sales, no sales to funeral directors.</li>
          <li><strong>Virginia:</strong> resale heavily restricted — generally max four resale transactions per year per seller, with cemetery approval and a transfer fee required (Va. Code § 54.1-2312.1).</li>
          <li><strong>New Jersey:</strong> buying 17+ spaces triggers an affidavit that the purchase is not for resale; resale of interment spaces is prohibited (N.J.S.A. 45:27-32).</li>
        </ul>
        <p>
          A thin resale market exists (a companion crypt at Mount Hope Cemetery, St. Louis, was listed at
          $15,000), but expect standard cemetery transfer/quitclaim fees. Read the resale clause in the
          contract before you buy.
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
          <Link href="/guides/burial-plot-costs/">How much does a burial plot cost? →</Link>
          {' · '}
          <Link href="/guides/urn-costs-guide/">Urns: types, costs & where to buy →</Link>
          {' · '}
          <Link href="/guides/funeral-cost-2026-breakdown/">2026 funeral cost breakdown →</Link>
          {' · '}
          <Link href="/guides/compare-funeral-homes/">How to compare funeral homes →</Link>
        </p>
      <RelatedGuides currentSlug="mausoleum-cost" />
      </div>
    </>
  );
}
