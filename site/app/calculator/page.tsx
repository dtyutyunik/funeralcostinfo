import type { Metadata } from 'next';
import Calculator from '../../components/Calculator';
import JsonLd, { breadcrumbJsonLd } from '../../components/JsonLd';
import { SITE_URL } from '../../lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Funeral Cost Calculator — Build Your Estimate',
  description:
    'Interactive funeral cost calculator: pick your state and service type, add cemetery and cash-advance costs, and get a modeled line-item estimate with an illustrative range. Print-friendly receipt included.',
  alternates: { canonical: SITE_URL + '/calculator/' },
  openGraph: {
    title: 'Funeral Cost Calculator — Build Your Estimate',
    description:
      'Pick your state and service type, add optional costs, and get a transparent modeled estimate with a print-friendly receipt.',
    url: SITE_URL + '/calculator/',
  },
};

export default function CalculatorPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Calculator', url: SITE_URL + '/calculator/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Calculator</nav>
        <h1>Funeral cost calculator</h1>
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
        <h3>Is this a quote from a funeral home?</h3>
        <p>
          No. It is an independent modeled estimate built from public data. Use it to plan a
          budget and to sanity check the prices a funeral home gives you, not as a price any
          specific provider will honor.
        </p>
        <h3>Why does my state differ from the national number?</h3>
        <p>
          Funeral costs track local price levels. A state whose overall prices run 15 percent
          above the national average will show funeral estimates roughly 15 percent above the
          national anchor. The state pages show the exact regional factor applied.
        </p>
        <h3>How current are these numbers?</h3>
        <p>
          The inflation adjustment runs through August 2026, the latest BLS funeral expenses
          index available when the model was built. When newer CPI data is published, the
          model is re run and every page updates together.
        </p>
      </div>
    </>
  );
}
