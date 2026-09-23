import type { Metadata } from 'next';
import { SITE_URL } from '../../lib/data';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description:
    'FuneralCostInfo affiliate disclosure: we currently have no affiliate relationships, no ads, and no funeral-home partnerships. What would happen if that changed.',
  alternates: { canonical: SITE_URL + '/affiliate-disclosure/' },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="wrap prose">
      <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> › Affiliate disclosure</nav>
      <h1>Affiliate disclosure</h1>
      <p className="updated">Effective 2026-09-23.</p>
      <p className="answer-first">
        <strong>Quick answer:</strong> FuneralCostInfo currently has <strong>no affiliate
        relationships, no advertising, and no commercial partnerships of any kind</strong>. There is
        nothing on this site that earns us a commission, and no funeral home, cemetery, insurer, or
        vendor pays us anything.
      </p>
      <h2>If that changes</h2>
      <p>
        Should we ever add affiliate links or advertising — for example, final-expense insurance
        comparisons — this page will be updated first, and every affected page will carry a clear,
        adjacent disclosure. Commercial relationships will never influence our estimates: the dataset
        is built from official sources by a published formula, and no partner can change a number.
      </p>
      <h2>What counts as a placeholder</h2>
      <p>
        Some pages contain visibly labeled placeholder boxes (for example, &ldquo;Affiliate placement
        — not active&rdquo;). These mark where clearly-labeled, optional commercial content could
        appear in the future. They are not links, not recommendations, and not endorsements.
      </p>
    </div>
  );
}
