import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Your Rights Under the FTC Funeral Rule',
  description:
    'The FTC Funeral Rule in plain English: price lists by phone, itemized GPLs, no forced packages, your own casket or urn, and more. Educational guide — not legal advice.',
  alternates: { canonical: SITE_URL + '/guides/funeral-rule-rights/' },
  openGraph: {
    title: 'Your Rights Under the FTC Funeral Rule',
    description:
      'Plain-English guide to the FTC Funeral Rule: your right to itemized prices, no forced packages, and using your own casket or urn.',
    url: SITE_URL + '/guides/funeral-rule-rights/',
  },
};

const RIGHTS = [
  {
    t: 'Get prices by phone — no name required',
    d: 'Funeral homes must give you accurate price information over the phone. You do not have to give your name, visit in person, or meet with a salesperson first.',
  },
  {
    t: 'Receive a written General Price List (GPL) when you visit',
    d: 'If you visit in person to discuss arrangements, the funeral home must give you a written, itemized GPL to keep. Take it home and compare it with other providers.',
  },
  {
    t: 'Buy only the goods and services you want',
    d: 'You cannot be required to buy a package. With a few specific exceptions (like the basic services fee), every item is optional.',
  },
  {
    t: 'See casket and outer burial container price lists',
    d: 'Before showing you caskets or vaults, the provider must show you the price lists for those items.',
  },
  {
    t: 'Use an alternative container for cremation',
    d: 'For cremation, you have the right to use an alternative container (such as unfinished wood or cardboard) instead of a casket.',
  },
  {
    t: 'Bring your own casket or urn',
    d: 'You may buy a casket or urn elsewhere — including online, often for much less — and the funeral home may not charge you a handling fee for using it.',
  },
  {
    t: 'Get an itemized written statement',
    d: 'Before paying, you must receive an itemized statement showing exactly what you are buying and the cost of each item.',
  },
  {
    t: 'Embalming is not automatically required',
    d: 'No state requires routine embalming, and funeral homes may not claim it is required by law when it is not. Refrigeration is an alternative in most cases.',
  },
];

export default function FuneralRuleGuide() {
  const faqs = [
    {
      q: 'Does the Funeral Rule apply to cemeteries?',
      a: 'Generally no — the FTC Funeral Rule covers funeral homes and providers selling funeral goods and services, not cemeteries. Cemetery pricing is regulated at the state level, which is another reason to compare cemetery quotes separately.',
    },
    {
      q: 'Can a funeral home refuse to give me prices over the phone?',
      a: 'No. The Funeral Rule requires funeral homes to provide accurate price information by telephone. If a provider refuses, that is itself a red flag — and a potential rule violation you can report to the FTC.',
    },
    {
      q: 'Is this guide legal advice?',
      a: 'No. This is educational information summarizing the FTC\u2019s official consumer guidance. For your specific situation, consult the FTC directly or a licensed attorney in your state.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Your Rights Under the FTC Funeral Rule', url: SITE_URL + '/guides/funeral-rule-rights/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › FTC Funeral Rule rights</nav>
      <JsonLd data={articleJsonLd({
        title: 'Your Rights Under the FTC Funeral Rule',
        description: 'The FTC Funeral Rule in plain English: price lists by phone, itemized GPLs, no forced packages, your own casket or urn, and more. Educational guide — not legal advice.',
        url: SITE_URL + '/guides/funeral-rule-rights/',
        datePublished: '2026-09-23',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="funeral-rule-rights" imageAlt="Your rights under the FTC Funeral Rule"><h1>Your rights under the FTC Funeral Rule</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> the FTC Funeral Rule gives you the right to price
          information by phone, a written itemized General Price List when you visit, to buy only
          what you want (no forced packages), to bring your own casket or urn with no handling fee,
          and to receive an itemized statement before paying. Knowing these rights is the single
          most effective way to avoid overpaying.
        </p>
        <p className="updated">Based on the FTC&apos;s official consumer guide (<a href="https://consumer.ftc.gov/articles/ftc-funeral-rule">consumer.ftc.gov</a>). Educational information only — not legal advice. Last reviewed {LAST_UPDATED}.</p>

        <h2>The eight rights that matter most</h2>
        {RIGHTS.map((r, i) => (
          <div key={r.t}>
            <h3>{i + 1}. {r.t}</h3>
            <p>{r.d}</p>
          </div>
        ))}

        <h2>How to use these rights when comparing prices</h2>
        <ol>
          <li>Call two or three funeral homes and ask for prices by phone — compare the totals for the same service type.</li>
          <li>Visit your top choice and take the GPL home. Compare it line by line with our <Link href="/calculator/">calculator estimate</Link>.</li>
          <li>Cross out anything you don&apos;t want. Ask which fees are truly required (the basic services fee usually is; most else is optional).</li>
          <li>Price caskets and urns online — providers cannot charge you extra for bringing your own.</li>
          <li>Get the final itemized statement in writing before you pay or sign.</li>
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
      <RelatedGuides currentSlug="funeral-rule-rights" />
      </div>
    </>
  );
}
