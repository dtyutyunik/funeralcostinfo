import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import { SITE_URL, VINTAGE_LABEL, LAST_UPDATED } from '../lib/data';

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
    'Independent, modeled funeral-cost estimates for every U.S. state, built from 2024 BEA regional price parities and 2023 NFDA national medians. We take no money from funeral homes.',
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
        <header className="site-header no-print">
          <div className="wrap">
            <a className="brand" href="/">
              Funeral<span className="dot">Cost</span>Info
              <small>Independent cost transparency</small>
            </a>
            <nav className="main-nav" aria-label="Main">
              <a href="/calculator/">Calculator</a>
              <a href="/methodology/">Methodology</a>
              <a href="/guides/funeral-rule-rights/">Your Rights</a>
              <a href="/about/">About</a>
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
                  <li><a href="/calculator/">Cost calculator</a></li>
                  <li><a href="/methodology/">Methodology &amp; data</a></li>
                  <li><a href="/guides/funeral-rule-rights/">FTC Funeral Rule rights</a></li>
                </ul>
              </div>
              <div>
                <strong>Company</strong>
                <ul>
                  <li><a href="/about/">About</a></li>
                  <li><a href="/editorial-policy/">Editorial policy</a></li>
                  <li><a href="/affiliate-disclosure/">Affiliate disclosure</a></li>
                  <li><a href="/privacy/">Privacy</a></li>
                  <li><a href="/contact/">Contact</a></li>
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
              <a href="/methodology/">methodology</a>.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
