import type { Metadata } from 'next';
import Calculator from '../../components/Calculator';
import JsonLd, { breadcrumbJsonLd } from '../../components/JsonLd';
import { SITE_URL } from '../../lib/data';

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
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> › Calculator</nav>
        <h1>Funeral cost calculator</h1>
        <p className="answer-first">
          <strong>Quick answer:</strong> choose your state and service type below, add typical
          cemetery and cash-advance costs, and get a transparent modeled estimate — every number
          labeled, every input cited. The national starting point is the NFDA 2023 median of $8,300
          for a funeral with viewing and burial. Then print the receipt and compare it against
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
        <p><a href="/guides/funeral-rule-rights/">Know your rights under the FTC Funeral Rule →</a></p>
      </div>
    </>
  );
}
