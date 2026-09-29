import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Are Corporate Funeral Homes More Expensive? SCI/Dignity Memorial vs. Independent Prices (2026 Data)',
  description:
    'Are corporate funeral homes more expensive than independents? The 2017 head-to-head study, current price ranges, and how to check who owns your funeral home.',
  alternates: { canonical: SITE_URL + '/guides/corporate-vs-independent-funeral-homes/' },
  openGraph: {
    title: 'Are Corporate Funeral Homes More Expensive? SCI/Dignity Memorial vs. Independent Prices (2026 Data)',
    description:
      'Corporate funeral chains vs. independent funeral homes: what the price studies show, what SCI/Dignity Memorial charges now, and how to spot corporate ownership.',
    url: SITE_URL + '/guides/corporate-vs-independent-funeral-homes/',
  },
};

export default function CorporateVsIndependentFuneralHomes() {
  const faqs = [
    {
      q: 'Are corporate funeral chains more expensive than independent funeral homes?',
      a: 'Usually, yes — and the gap is large. The only published head-to-head study (Funeral Consumers Alliance / Consumer Federation of America, 2017) found SCI/Dignity Memorial locations charged 47–72% more than independents for the same services across 10 metros. Current published price ranges show the same pattern: national-brand direct cremation $2,000–$4,600+ vs. $700–$1,800 at affordable cremation specialists.',
    },
    {
      q: 'Who owns Dignity Memorial?',
      a: 'Service Corporation International (SCI), headquartered in Houston, Texas. SCI operates 1,485 funeral locations and 500 cemeteries in 44 states, 8 Canadian provinces, D.C., and Puerto Rico (as of Dec 31, 2025), and serves about 700,000 families a year. Dignity Memorial is its consumer brand, launched in 1999–2000; acquired homes keep their local names with "a Dignity Memorial provider" in the fine print.',
    },
    {
      q: 'How can I tell if a funeral home is corporate owned?',
      a: 'Ask directly: "Is this home independently owned?" Check the website fine print for phrases like "a Dignity Memorial provider" or "a Service Corporation International company." Search the address on dignitymemorial.com’s provider directory. Note: the FTC Funeral Rule does not require funeral homes to disclose ownership — you have to ask.',
    },
    {
      q: 'Do corporate funeral homes have to disclose their prices online?',
      a: 'No federal rule requires any funeral home to post prices online — the FTC Funeral Rule requires written price lists in person and price information by phone. In practice, many Dignity Memorial locations now do publish price lists online, a change from the 2017 finding that SCI rarely disclosed prices before an in-person visit.',
    },
    {
      q: 'Is higher price the same as better service?',
      a: 'Not necessarily. The price premium at corporate homes goes to overhead, branding, and shareholder returns — the underlying services (transport, embalming, ceremony) are the same ones an independent performs. Compare General Price Lists line by line rather than assuming price signals quality.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Corporate vs. independent funeral homes', url: SITE_URL + '/guides/corporate-vs-independent-funeral-homes/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Corporate vs. independent funeral homes</nav>
        <JsonLd data={articleJsonLd({
          title: 'Are Corporate Funeral Homes More Expensive? SCI/Dignity Memorial vs. Independent Prices (2026 Data)',
          description: 'Are corporate funeral homes more expensive than independents? The 2017 head-to-head study, current price ranges, and how to check who owns your funeral home.',
          url: SITE_URL + '/guides/corporate-vs-independent-funeral-homes/',
          datePublished: '2026-09-29',
          dateModified: LAST_UPDATED,
          siteUrl: SITE_URL,
        })} />
        <GuideHero slug="corporate-vs-independent-funeral-homes" imageAlt="Are corporate funeral homes more expensive? Comparing SCI/Dignity Memorial vs. independent prices"><h1>Are corporate funeral homes more expensive? SCI/Dignity Memorial vs. independent prices (2026 data)</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> yes — corporate funeral homes are usually more expensive than
          independents for the same services. The only published head-to-head study, by the Funeral Consumers
          Alliance and the Consumer Federation of America (2017), surveyed 103 independents and 35 SCI/Dignity
          Memorial homes in 10 metro regions and found corporate prices <strong>47–72% higher</strong>. Current
          published ranges tell the same story: national-brand direct cremation runs $2,000–$4,600+, while
          cremation specialists charge $700–$1,800. The corporate name is usually hidden behind the original
          local name — so always ask who owns the home before you compare prices.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>The headline numbers: what the only head-to-head study found</h2>
        <p>
          In 2017, the Funeral Consumers Alliance and the Consumer Federation of America published
          "Death with Dignity? A Report on SCI/Dignity Memorial High Prices and Refusal to Disclose These
          Prices," the last study to compare corporate and independent prices directly. It surveyed 103
          independent funeral homes and 35 SCI/Dignity Memorial locations across 10 metro regions (Atlanta,
          Tucson, Orange County, Denver, Washington DC, Indianapolis, Minneapolis, Philadelphia, Princeton,
          and Seattle). Median prices:
        </p>
        <ul>
          <li><strong>Simple cremation:</strong> SCI $2,700 vs. independent $1,562 — <strong>72% higher</strong></li>
          <li><strong>Simple burial:</strong> SCI $2,845 vs. independent $1,893 — <strong>50% higher</strong></li>
          <li><strong>Full-service funeral:</strong> SCI $7,705 vs. independent $5,241 — <strong>47% higher</strong></li>
        </ul>
        <p>
          Treat these as 2017 data, not current quotes — but no newer head-to-head study exists, and the
          direction of the gap shows up in every current published price list. The report's second charge,
          that SCI rarely disclosed prices before an in-person visit, is less true now: many Dignity Memorial
          locations publish General Price Lists online (for example, a San Diego Dignity Memorial package list
          effective January 2026 shows basic services of funeral director/staff at $2,095 and a full package
          at $14,070). Price disclosure has improved; the price premium has not.
        </p>

        <h2>What SCI/Dignity Memorial charges now</h2>
        <p>
          Published 2026 figures (attribute them — they come from provider-published price lists and reviews,
          not an independent survey):
        </p>
        <ul>
          <li><strong>Direct cremation:</strong> national funeral brands such as Dignity Memorial: $2,000–$4,600+; local full-service funeral homes: $1,500–$3,500; affordable cremation specialists: $700–$1,800 (DFS Memorials, verified August 2026).</li>
          <li><strong>Dignity Memorial ranges</strong> (Cremation Institute's 2026 review): simple cremation $700–$5,000; traditional burial $7,000–$12,000+.</li>
        </ul>
        <p>
          Why the premium? Corporate homes carry bigger overheads (facilities, staffing, branding) and answer
          to shareholders: SCI's average revenue per service was $5,823 in FY2025 on $4.31B of revenue. That
          does not mean worse service — it means part of the bill funds the corporate structure. Compare
          General Price Lists line by line (our <Link href="/guides/compare-funeral-homes/">guide to comparing
          funeral homes</Link> shows how) instead of assuming price signals quality.
        </p>

        <h2>Who owns what: the consolidation landscape</h2>
        <ul>
          <li>
            <strong>Service Corporation International (SCI)</strong> — the giant. Founded 1962 in Houston by
            third-generation funeral director Robert L. Waltrip; public since 1969. The Dignity Memorial brand
            launched 1999–2000. Today: 1,485 funeral locations and 500 cemeteries in 44 states, 8 Canadian
            provinces, D.C., and Puerto Rico; ~700,000 families served per year (as of Dec 31, 2025). Acquired
            homes keep their local names — "a Dignity Memorial provider" appears in the fine print.
          </li>
          <li>
            <strong>Neptune Society</strong> — the nation's largest direct-cremation brand, SCI-owned, 60+ US
            locations.
          </li>
          <li>
            <strong>Carriage Services</strong> (NYSE: CSV, Houston) — 155 funeral homes, 28 cemeteries; $417.4M
            FY2025 revenue.
          </li>
          <li>
            <strong>Park Lawn</strong> (Canadian) — ~176 funeral homes, ~76 cemeteries across Canada and the US;
            taken private in September 2024.
          </li>
        </ul>
        <p>
          Context: the NFDA says roughly 75% of the nation's ~15,400 funeral homes are family- or privately
          owned, while the FTC puts corporate/"chain" ownership at about 20–25% of ~19,900 funeral providers
          (counts differ by definition — "funeral homes" vs. "providers"). Consolidation is accelerating:
          private-equity buyers now pay 7–9x annual revenue for funeral homes (vs. 3–5x before PE entered),
          and a 2021 NFDA survey found 27% of owners planned to sell or retire within five years. When chains
          buy, they keep the local name and often the former owner — so ownership is invisible unless you ask.
        </p>

        <h2>The enforcement record you should know</h2>
        <ul>
          <li><strong>FTC, 2000:</strong> challenged SCI's acquisition of a Georgia funeral home (FTC Docket No. C-3959); consent order with divestitures.</li>
          <li><strong>FTC, 1999:</strong> consent agreement on SCI's acquisition of Equity Corporation International, with market-by-market divestitures where SCI would dominate (FTC File No. 981-0353).</li>
          <li><strong>FTC, January 2024:</strong> warning letters to 38 funeral homes after the first undercover phone sweep of Funeral Rule price-disclosure compliance — one was an SCI location in Texas.</li>
          <li><strong>California AG, May 2024:</strong> SCI agreed to a $23 million penalty plus consumer restitution over alleged false advertising and unfair competition in Neptune Society / Trident Society pre-need cremation package marketing.</li>
        </ul>

        <h2>How to tell if a funeral home is corporate owned</h2>
        <p>
          The FTC Funeral Rule does <strong>not</strong> require ownership disclosure — it mandates price
          disclosures (General Price List, Casket Price List, Outer Burial Container Price List) and price
          information by phone, but never required posting prices online or naming the parent company. A 2003
          Senate bill would have required funeral providers to state publicly-traded-company affiliation on
          contracts and advertising; it did not become law. So check yourself:
        </p>
        <ol>
          <li><strong>Ask directly:</strong> "Is this home independently owned?" Get the answer in writing on the quote if you can.</li>
          <li><strong>Read the fine print:</strong> corporate websites end with phrases like "a Dignity Memorial provider" or "a Service Corporation International company."</li>
          <li><strong>Use the brand's own directory:</strong> dignitymemorial.com's provider lookup shows every corporate location.</li>
          <li><strong>Compare GPLs side by side:</strong> ownership matters less than the bottom line. Get three written General Price Lists and compare the same services.</li>
        </ol>

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
          <Link href="/guides/compare-funeral-homes/">How to compare funeral homes →</Link>
          {' · '}
          <Link href="/guides/funeral-rule-rights/">Your Funeral Rule rights →</Link>
          {' · '}
          <Link href="/guides/funeral-cost-2026-breakdown/">2026 funeral cost breakdown →</Link>
          {' · '}
          <Link href="/guides/funeral-costs-by-city/">Funeral costs by city →</Link>
        </p>
      <RelatedGuides currentSlug="corporate-vs-independent-funeral-homes" />
      </div>
    </>
  );
}
