import type { Metadata } from 'next';
import { SITE_URL } from '../../lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'FuneralCostInfo terms of use: our figures are modeled estimates for general information, not quotes or professional advice.',
  alternates: { canonical: SITE_URL + '/terms/' },
};

export default function TermsPage() {
  return (
    <div className="wrap prose">
      <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Terms of use</nav>
      <h1>Terms of use</h1>
      <p className="updated">Effective 2026-11-10.</p>
      <h2>Information, not quotes or advice</h2>
      <p>
        FuneralCostInfo publishes modeled cost estimates and general educational information about
        funeral pricing and consumer rights. Our figures are estimates built from published
        sources by the method described on our <Link href="/methodology/">methodology page</Link>.
        They are not price quotes, offers, or guarantees. Only a funeral home&apos;s General Price
        List states what that funeral home charges. Nothing on this site is funeral-planning,
        financial, insurance, or legal advice for your specific situation.
      </p>
      <h2>Accuracy</h2>
      <p>
        We work to keep figures current and sourced, and we correct errors when they are reported
        (see our <Link href="/contact/">contact page</Link>). Prices in this industry change and
        vary by provider, so confirm any figure with the provider before making a decision. The
        site is provided as is, without warranties of any kind.
      </p>
      <h2>External links</h2>
      <p>
        We link to government agencies, nonprofit organizations, and other sources for reference.
        We do not control those sites and are not responsible for their content.
      </p>
      <h2>Acceptable use</h2>
      <p>
        You may read, print, and share our pages for personal use, with a link back when you quote
        figures. Automated scraping that burdens the site, and republishing our estimates as your
        own surveyed data, are not permitted.
      </p>
      <h2>Changes</h2>
      <p>
        We may update these terms; the effective date above will change when we do. Continued use
        of the site after a change means you accept the updated terms.
      </p>
    </div>
  );
}
