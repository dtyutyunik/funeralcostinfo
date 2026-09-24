import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import { SITE_URL, VINTAGE_LABEL, LAST_UPDATED } from '../lib/data';
import JsonLd, { organizationJsonLd } from '../components/JsonLd';
import Link from 'next/link';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'FuneralCostInfo — What funerals really cost, by state',
    template: '%s | FuneralCostInfo',
  },
  description:
    'Independent, modeled funeral-cost estimates for every U.S. state, built from 2024 BEA regional price parities and 2023 NFDA national medians adjusted to August 2026 dollars via BLS funeral-expenses CPI. We take no money from funeral homes.',
  openGraph: {
    type: 'website',
    siteName: 'FuneralCostInfo',
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <JsonLd data={organizationJsonLd(SITE_URL)} />
        <header className="site-header no-print">
          <div className="wrap">
            <Link className="brand" href="/">
              Funeral<span className="dot">Cost</span>Info
              <small>Independent cost transparency</small>
            </Link>
            <nav className="main-nav" aria-label="Main">
              <Link href="/calculator/">Calculator</Link>
              <Link href="/methodology/">Methodology</Link>
              <Link href="/guides/funeral-rule-rights/">Your Rights</Link>
              <Link href="/about/">About</Link>
            </nav>
          </div>
        </header>
        <div className="vintage-strip" role="note" aria-label="Data vintage">
          <div className="wrap">
            <span className="vdot" aria-hidden="true" />
            <span><strong>Data vintage:</strong> {VINTAGE_LABEL} · Updated {LAST_UPDATED}</span>
          </div>
        </div>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="wrap">
            <div className="cols">
              <div>
                <strong>FuneralCostInfo</strong>
                <p>Independent funeral-cost transparency. We take no money from funeral homes.</p>
              </div>
              <div>
                <strong>Explore</strong>
                <ul>
                  <li><Link href="/calculator/">Cost calculator</Link></li>
                  <li><Link href="/methodology/">Methodology &amp; data</Link></li>
                  <li><Link href="/guides/funeral-rule-rights/">FTC Funeral Rule rights</Link></li>
                  <li><Link href="/guides/funeral-service-types/">Funeral service types</Link></li>
                  <li><Link href="/guides/funeral-glossary/">Funeral terms glossary</Link></li>
                </ul>
              </div>
              <div>
                <strong>Company</strong>
                <ul>
                  <li><Link href="/about/">About</Link></li>
                  <li><Link href="/editorial-policy/">Editorial policy</Link></li>
                  <li><Link href="/affiliate-disclosure/">Affiliate disclosure</Link></li>
                  <li><Link href="/privacy/">Privacy</Link></li>
                  <li><Link href="/contact/">Contact</Link></li>
                  <li><Link href="/press/">Press</Link></li>
                </ul>
              </div>
            </div>
            <div className="fineprint">
              <span className="vintage">
                <strong>Data vintage:</strong> {VINTAGE_LABEL} · Updated {LAST_UPDATED} ·
                refreshed annually as official releases arrive.
              </span>
              All state figures are modeled estimates, not surveyed prices. Educational content
              only — not financial, legal, or funeral-planning advice. See our{' '}
              <Link href="/methodology/">methodology</Link>.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
