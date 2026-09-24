import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL } from '../../../lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why Funeral Cost Figures Disagree: 2023 vs 2026 Dollars, Explained',
  description:
    'One site says $8,300, another says $8,600, a third says $7,360. Funeral cost figures disagree for three honest reasons: data vintage, the basket being priced, and whether anyone shows their math. Here is how to compare them fairly.',
  alternates: { canonical: SITE_URL + '/guides/why-funeral-cost-figures-disagree/' },
  openGraph: {
    title: 'Why Funeral Cost Figures Disagree: 2023 vs 2026 Dollars, Explained',
    description:
      'Funeral cost figures disagree because of data vintage, the basket priced, and undisclosed methods. A fair, sourced comparison — including our own.',
    url: SITE_URL + '/guides/why-funeral-cost-figures-disagree/',
  },
};

export default function DisagreePage() {
  return (
    <div className="wrap prose">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', url: SITE_URL + '/' }, { name: 'Guides', url: SITE_URL + '/guides/funeral-service-types/' }, { name: 'Why figures disagree', url: SITE_URL + '/guides/why-funeral-cost-figures-disagree/' }])} />
      <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> › <a href="/guides/funeral-service-types/">Guides</a> › Why figures disagree</nav>
      <p className="eyebrow">Consumer guide</p>
      <JsonLd data={articleJsonLd({
        title: 'Why Funeral Cost Figures Disagree: 2023 vs 2026 Dollars, Explained',
        description: 'One site says $8,300, another says $8,600, a third says $7,360. Funeral cost figures disagree for three honest reasons: data vintage, the basket being priced, and whether anyone shows their math. Here is how to compare them fairly.',
        url: SITE_URL + '/guides/why-funeral-cost-figures-disagree/',
        datePublished: '2026-09-23',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
      <h1>Why funeral cost figures disagree</h1>
      <Byline />


      <div className="answer-first">
        <p>
          Search "average funeral cost" and you will see $8,300, $8,600, $7,360, and our own $9,140 —
          all describing something like a traditional burial. The figures disagree for three honest
          reasons: <strong>(1) data vintage</strong> — most sites quote 2023 dollars as if they were
          today's prices; <strong>(2) the basket</strong> — a traditional burial, an average across
          all dispositions, or an undefined mix; and <strong>(3) undisclosed methods</strong> — some
          sites publish no methodology at all. Here is a fair comparison, including our own numbers.
        </p>
      </div>

      <h2>Reason 1: Data vintage — 2023 dollars are not 2026 dollars</h2>
      <p>
        The most-cited source in the industry is the National Funeral Directors Association's 2023
        Member General Price List Study, which found a median of <strong>$8,300</strong> for an adult
        funeral with viewing and burial (vault not included). That figure is real — but it is a
        2023 median. Funeral prices have risen roughly 10% since, per the Bureau of Labor Statistics
        funeral-expenses CPI (×1.1016 through August 2026), which puts the same basket at{' '}
        <strong>$9,140</strong> in current dollars.
      </p>
      <p>
        Several well-known sites still present the unadjusted $8,300 as a current figure:
      </p>
      <ul>
        <li>
          <strong>Parting.com</strong> describes the "average funeral cost" as "nearing $8,300" — the
          raw 2023 NFDA median, with no inflation adjustment visible.
        </li>
        <li>
          <strong>Funeralocity</strong>, cited by Black Enterprise in September 2026 for a burial
          figure of "nearly $8,600," collects prices by contacting funeral homes — but its own site
          cautions visitors to "check with each funeral home as their prices may be different than
          what they show." A funeral director publicly described his own home's listing there as
          "way off."
        </li>
        <li>
          <strong>Memorial Merits</strong> cites NFDA 2023 anchors in its state guides — again, 2023
          dollars presented in 2026.
        </li>
      </ul>
      <p>
        A ~$840 gap on a traditional burial is not a rounding error; it is three years of funeral-price
        inflation that the reader is never told about. Any figure you see, ask: <em>which year's
        dollars?</em> We print the vintage on every page (<strong>{VINTAGE_LABEL}</strong>).
      </p>

      <h2>Reason 2: The basket — what exactly is being priced?</h2>
      <p>
        "Average funeral cost" is meaningless until the basket is defined. Common baskets:
      </p>
      <table className="data">
        <thead><tr><th>Basket</th><th className="num">Our figure (Aug 2026 $)</th><th>2023 basis</th></tr></thead>
        <tbody>
          <tr><td>Traditional funeral: viewing + burial (vault not incl.)</td><td className="num">$9,140</td><td>NFDA median $8,300</td></tr>
          <tr><td>Traditional funeral: viewing + burial, with vault</td><td className="num">$11,010</td><td>NFDA median $9,995</td></tr>
          <tr><td>Funeral: viewing + cremation</td><td className="num">$6,920</td><td>NFDA median $6,280</td></tr>
          <tr><td>Direct cremation</td><td className="num">$3,030</td><td>NFDA median $2,750</td></tr>
        </tbody>
      </table>
      <p>
        World Population Review, by contrast, publishes a U.S. median of <strong>$7,360</strong> with
        no methodology shown — its Florida figure (~$5,875) sits far below any defined traditional-burial
        basket, which suggests an undefined mix of cremations and burials. Without a defined basket,
        two "averages" cannot be compared at all.
      </p>

      <h2>Reason 3: Undisclosed methods and pay-to-play</h2>
      <p>
        Price-comparison sites in this niche are frequently paid by the industry they compare:
      </p>
      <ul>
        <li>
          <strong>Funeralocity's</strong> "Excellence Program" highlights funeral homes that pay a fee
          per referred family — placement follows payment.
        </li>
        <li>
          <strong>FuneralWise</strong> markets itself as "an unbiased bridge" while operating an
          insurance marketing organization selling final-expense policies and selling preferred
          placement to funeral homes.
        </li>
        <li>
          <strong>Memorial Merits</strong> discloses affiliate links (e.g., a discount code for an urn
          retailer) and — to its credit — admits its state figures are "ranges, not flat facts" drawn
          from industry aggregators, because state-level NFDA figures are paywalled.
        </li>
      </ul>
      <p>
        We are describing competitors' <em>own disclosed practices</em>, not accusing anyone of
        fabricating prices. The point is structural: when a comparison site's revenue comes from the
        businesses being compared, the reader deserves to know. <strong>FuneralCostInfo takes no
        money from funeral homes</strong> — no referral fees, no paid placements, no lead sales.
        See our <Link href="/affiliate-disclosure/">affiliate disclosure</Link> for exactly how we
        do make money.
      </p>

      <h2>Our own limitations, stated plainly</h2>
      <p>
        Our figures are <strong>modeled estimates, not surveyed prices</strong>: national NFDA 2023
        medians, inflation-adjusted via BLS, scaled to states via BEA 2024 regional price parities.
        The formula is published in full on our <Link href="/methodology/">methodology page</Link> and
        is reproducible from public data. A model cannot capture a specific funeral home's General
        Price List — for that, use the home's GPL (your right under the{' '}
        <Link href="/guides/funeral-rule-rights/">FTC Funeral Rule</Link>) or a local price survey
        from the <a href="https://funerals.org" rel="noopener noreferrer">Funeral Consumers Alliance</a>.
        When the next NFDA price study is published, we will rebuild on it.
      </p>

      <h2>The three questions to ask any funeral-cost figure</h2>
      <ol>
        <li><strong>Which year's dollars?</strong> If it says $8,300 in 2026, it is quoting 2023.</li>
        <li><strong>Which basket?</strong> Traditional burial, cremation, an average of everything — or undefined?</li>
        <li><strong>Who pays the publisher?</strong> Follow the revenue: referral fees, paid placement, and lead sales are the norm in this niche.</li>
      </ol>

      <p className="updated">{VINTAGE_LABEL} · Built {LAST_UPDATED} · Model v3.</p>
    </div>
  );
}
