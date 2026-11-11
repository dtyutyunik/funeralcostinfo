import type { Metadata } from 'next';
import Calculator from '../../components/Calculator';
import Byline from '../../components/Byline';
import { PAGE_DATES } from '../../lib/page-dates';
import JsonLd, { breadcrumbJsonLd, faqJsonLd } from '../../components/JsonLd';
import { SITE_URL } from '../../lib/data';
import NationalStats from '../../components/NationalStats';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Funeral Cost Calculator and Estimator: 2026 State-by-State Estimate',
  description:
    'Free funeral cost calculator and estimator: pick your state and service type to build a 2026 modeled estimate for burial, cremation, cemetery charges, and cash advances. Compare the result with local funeral home price lists.',
  alternates: { canonical: SITE_URL + '/calculator/' },
  openGraph: {
    title: 'Funeral Cost Calculator and Estimator: 2026 State-by-State Estimate',
    description:
      'Build a transparent funeral cost estimate by state and service type, with cemetery and cash-advance costs, a modeled range, and a printable receipt.',
    url: SITE_URL + '/calculator/',
  },
};

const faqs = [
  {
    q: 'What is the average funeral cost in the United States?',
    a: 'Our modeled national estimates in August 2026 dollars are $9,140 for a traditional burial with viewing, $6,920 for cremation with a service, and $3,030 for direct cremation. These are planning estimates built from NFDA 2023 medians and the BLS funeral-expenses CPI, not quotes from a funeral home.',
  },
  {
    q: 'How does this funeral cost estimator work?',
    a: 'Choose a state and service type. The estimator starts with the NFDA 2023 national median, adjusts it to August 2026 dollars with the BLS funeral-expenses CPI, scales it with the state\u2019s BEA regional price parity, and then adds the cemetery and cash-advance items you select.',
  },
  {
    q: 'Is the calculator result a funeral home quote?',
    a: 'No. It is an independent modeled estimate for budgeting and comparison. A specific funeral home can charge more or less. Request its General Price List and compare each line with the calculator result.',
  },
  {
    q: 'What funeral costs can I add to the estimate?',
    a: 'The calculator can add cemetery plot, opening and closing, burial container, marker, flowers, obituary, clergy, death certificates, and other cash advances, plus optional adjustments for religious traditions, VA benefits, cemetery upkeep, and body donation where those options apply.',
  },
  {
    q: 'Why does my state differ from the national number?',
    a: 'Funeral costs track local price levels. A state whose overall prices run 15 percent above the national average will show funeral estimates roughly 15 percent above the national anchor. The state pages show the exact regional factor applied.',
  },
  {
    q: 'How current are these numbers?',
    a: 'The inflation adjustment runs through August 2026, the latest BLS funeral expenses index available when the model was built. When newer CPI data is published, the model is rerun and every page updates together.',
  },
];

export default function CalculatorPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Calculator', url: SITE_URL + '/calculator/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Calculator</nav>
        <h1>Funeral cost calculator and estimator</h1>
        <Byline updated={PAGE_DATES['/calculator/']?.updated} />
        <p className="answer-first">
          <strong>Quick answer:</strong> choose your state and service type below, add typical
          cemetery and cash-advance costs, and get a transparent modeled estimate — every number
          labeled, every input cited. The national starting point is the NFDA 2023 median of $8,300 —
          $9,140 in August 2026 dollars after adjusting with the BLS funeral-expenses CPI — for a
          funeral with viewing and burial. Optional toggles cover religious traditions, VA burial
          benefits, cemetery upkeep, and body donation to science. Then print the receipt and compare it against
          real General Price Lists from local funeral homes.
        </p>
        <Calculator defaultState="CA" />
        <h2>National funeral cost estimates used by this calculator</h2>
        <p>
          These national starting points are modeled estimates in August 2026 dollars. Select a state
          in the calculator to scale them to local price levels.
        </p>
        <NationalStats />
        <p>
          For a state-specific breakdown before using the estimator, start with our{' '}
          <Link href="/guides/funeral-costs-by-state-2026/">funeral costs by state guide</Link> or open a
          state page such as <Link href="/funeral-costs/california/">California</Link>,{' '}
          <Link href="/funeral-costs/texas/">Texas</Link>, <Link href="/funeral-costs/florida/">Florida</Link>,
          or <Link href="/funeral-costs/new-york/">New York</Link>.
        </p>
        <h2>How to use this with a real funeral home</h2>
        <ol>
          <li>Build your estimate above and print it.</li>
          <li>Call two or three local funeral homes and ask for their General Price List — they must provide it under the FTC Funeral Rule, even by phone.</li>
          <li>Compare their itemized prices against your modeled estimate, line by line.</li>
          <li>Buy only the goods and services you want. You can supply your own casket or urn.</li>
        </ol>
        <p><Link href="/guides/funeral-rule-rights/">Know your rights under the FTC Funeral Rule →</Link></p>
        <h2>How the estimate is built</h2>
        <p>
          Every number on this page comes from the same published model, so you can trace any
          figure back to its source. It works in three layers.
        </p>
        <ol>
          <li>
            <strong>National benchmark.</strong> We start with the National Funeral Directors
            Association 2023 median prices, the most widely cited national benchmark in the
            industry. For example, the 2023 median for a funeral with viewing and burial was
            $8,300.
          </li>
          <li>
            <strong>Inflation adjustment.</strong> Those 2023 medians are brought forward to
            August 2026 dollars using the Bureau of Labor Statistics Consumer Price Index for
            funeral expenses (index 417.820 divided by the 2023 average of 379.301, a factor of
            1.1016). That turns the $8,300 national median into $9,140 in current dollars.
          </li>
          <li>
            <strong>State adjustment.</strong> National numbers are then scaled to your state
            using the Bureau of Economic Analysis 2024 Regional Price Parities, which measure
            how far above or below the national average each state prices goods and services.
          </li>
        </ol>
        <p>
          On top of that base, you add the pieces a funeral home median does not cover:
          cemetery costs (plot, opening and closing, outer burial container, marker), cash
          advances the funeral home pays to third parties on your behalf (flowers, obituary
          notices, clergy honorarium, death certificates), and optional toggles for religious
          traditions, VA burial benefits, and cemetery upkeep. The full method, with every
          source linked, is on our <Link href="/methodology/">methodology page</Link>.
        </p>
        <h2>What this calculator cannot tell you</h2>
        <p>
          An honest tool lists its limits. These are modeled estimates, not quotes: any single
          funeral home can price well above or below the modeled number, especially in high
          cost metro areas. The model covers the six standard service types (traditional
          burial, burial with vault, cremation with service, direct cremation, direct burial,
          and green burial); it does not price alkaline hydrolysis, natural organic reduction,
          or other newer dispositions, and availability of those options varies by state law.
          Green burial figures are our own assumption, set at 60 percent of the traditional
          burial anchor, because no national surveyed price exists yet. Treat the result as a
          planning baseline and a negotiating reference, then verify against real General
          Price Lists.
        </p>
        <h2>Calculator FAQ</h2>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </>
  );
}
