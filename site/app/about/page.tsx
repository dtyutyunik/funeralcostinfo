import type { Metadata } from 'next';
import { SITE_URL } from '../../lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About FuneralCostInfo',
  description:
    'Why FuneralCostInfo exists: independent, modeled funeral-cost transparency with no money from funeral homes. Our mission, funding model, and what we will never do.',
  alternates: { canonical: SITE_URL + '/about/' },
};

export default function AboutPage() {
  return (
    <div className="wrap prose">
      <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › About</nav>
      <h1>About FuneralCostInfo</h1>
      <p className="answer-first">
        <strong>Quick answer:</strong> FuneralCostInfo is an independent consumer-information site
        about what funerals cost. We publish modeled state-by-state estimates built from official
        sources, explain the method openly, and teach your rights under the FTC Funeral Rule.
        We take no money from funeral homes — no provider can pay to change a number or appear here.
      </p>
      <h2>Why this site exists</h2>
      <p>
        Funeral pricing is one of the least transparent consumer markets in the United States.
        Families typically arrange a funeral once or twice in a lifetime, under time pressure and
        grief, facing an industry where prices are rarely published online. The national median for
        a funeral with viewing and burial is $9,140 (NFDA 2023 median, adjusted to August 2026
        dollars) — but without state-level context,
        that number helps no one plan.
      </p>
      <p>
        We exist to close that gap: every state gets a modeled estimate, the formula is published,
        and every number is labeled as modeled — never presented as a quote.
      </p>
      <h2>How we are funded</h2>
      <p>
        This site currently has <strong>no revenue and no commercial relationships</strong>. There are
        no ads, no affiliate links, and no funeral-home partnerships. If that ever changes, changes will
        be disclosed prominently — see our <Link href="/affiliate-disclosure/">affiliate disclosure</Link>.
      </p>
      <h2>What we will never do</h2>
      <ul>
        <li>Accept money from a funeral home, cemetery, or casket seller in exchange for coverage or placement.</li>
        <li>Present a modeled estimate as a surveyed price or a quote.</li>
        <li>Use popups, countdown timers, fake urgency, or dark patterns.</li>
        <li>Sell or share personal data (we collect none — see our <Link href="/privacy/">privacy policy</Link>).</li>
      </ul>
      <h2>Editorial standards</h2>
      <p>
        Our research and writing standards are published in our <Link href="/editorial-policy/">editorial policy</Link>:
        official sources only, every input dated, assumptions labeled, annual refresh.
      </p>
    </div>
  );
}
