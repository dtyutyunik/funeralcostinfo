import type { Metadata } from 'next';
import './globals.css';
import { SITE_URL } from '../lib/data';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'FuneralCostInfo — What funerals really cost, by state',
    template: '%s | FuneralCostInfo',
  },
  description:
    'Independent, modeled funeral-cost estimates for every U.S. state, built from NFDA national medians and BEA regional price data. We take no money from funeral homes.',
  openGraph: {
    type: 'website',
    siteName: 'FuneralCostInfo',
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body>
        <header className="site-header no-print">
          <div className="wrap">
            <a className="brand" href="/">Funeral<span>Cost</span>Info</a>
            <nav className="main-nav" aria-label="Main">
              <a href="/calculator/">Calculator</a>
              <a href="/methodology/">Methodology</a>
              <a href="/guides/funeral-rule-rights/">Your Rights</a>
              <a href="/about/">About</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="wrap">
            <div className="cols">
              <div>
                <strong style={{ color: 'var(--ink)' }}>FuneralCostInfo</strong>
                <p>Independent funeral-cost transparency. We take no money from funeral homes.</p>
              </div>
              <div>
                <strong style={{ color: 'var(--ink)' }}>Explore</strong>
                <ul>
                  <li><a href="/calculator/">Cost calculator</a></li>
                  <li><a href="/methodology/">Methodology &amp; data</a></li>
                  <li><a href="/guides/funeral-rule-rights/">FTC Funeral Rule rights</a></li>
                </ul>
              </div>
              <div>
                <strong style={{ color: 'var(--ink)' }}>Company</strong>
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
              All state figures are modeled estimates (NFDA 2023 national medians adjusted by BEA
              regional price parities), not surveyed prices. Educational content only — not
              financial, legal, or funeral-planning advice. See our <a href="/methodology/">methodology</a>.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
