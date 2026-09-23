import type { Metadata } from 'next';
import { SITE_URL } from '../../lib/data';

export const metadata: Metadata = {
  title: 'Editorial Policy',
  description:
    'FuneralCostInfo editorial policy: official sources only, every input dated, modeled estimates labeled as modeled, assumptions explicit, annual refresh.',
  alternates: { canonical: SITE_URL + '/editorial-policy/' },
};

export default function EditorialPolicyPage() {
  return (
    <div className="wrap prose">
      <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> › Editorial policy</nav>
      <h1>Editorial policy</h1>
      <p className="updated">Effective 2026-09-23.</p>
      <ol>
        <li><strong>Official sources only.</strong> Cost inputs come from the NFDA, the Bureau of Economic Analysis, the Bureau of Labor Statistics, and the FTC. Third-party price aggregators are never treated as authoritative.</li>
        <li><strong>Every input is dated.</strong> Source vintage and retrieval dates appear on the methodology page and in the dataset itself.</li>
        <li><strong>Modeled means modeled.</strong> State figures are estimates derived from national medians; they are labeled &ldquo;modeled estimate&rdquo; wherever they appear and never presented as surveyed prices or quotes.</li>
        <li><strong>Assumptions are explicit.</strong> Where no official figure exists (e.g., green burial), the assumption is stated in the open — on the page, in the data, and in the methodology.</li>
        <li><strong>No funeral-industry money.</strong> No provider can pay for coverage, placement, or a changed number. Any future commercial relationship will be disclosed before it appears on any page.</li>
        <li><strong>Respectful tone.</strong> No popups, no countdown timers, no fake urgency, no dark patterns, no grief-exploiting copy.</li>
        <li><strong>Corrections.</strong> Errors are corrected promptly and noted. If a source revises its data, we revise with it on the next annual refresh — sooner if the error is material.</li>
        <li><strong>Annual refresh.</strong> The dataset is rebuilt each year from the latest BEA, NFDA, and BLS releases.</li>
      </ol>
    </div>
  );
}
