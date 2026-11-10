import type { Metadata } from 'next';
import { SITE_URL } from '../../lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description:
    'FuneralCostInfo disclosure: no affiliate relationships and no funeral-home partnerships. The site is supported by display advertising served through Google AdSense, which never influences our estimates.',
  alternates: { canonical: SITE_URL + '/affiliate-disclosure/' },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="wrap prose">
      <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Affiliate disclosure</nav>
      <h1>Affiliate disclosure</h1>
      <p className="updated">Effective 2026-11-10.</p>
      <p className="answer-first">
        <strong>Quick answer:</strong> FuneralCostInfo has <strong>no affiliate relationships and
        no commercial partnerships of any kind</strong>. Nothing on this site earns us a
        commission, and no funeral home, cemetery, insurer, or vendor pays us anything or can
        influence a number we publish. The site is supported by display advertising served through
        Google AdSense.
      </p>
      <h2>How advertising works here</h2>
      <p>
        Ads on this site are served by Google AdSense. Advertisers do not choose to appear on
        specific pages, do not review our content, and have no relationship with us. Advertising
        revenue never influences our estimates: the dataset is built from official sources by a
        published formula, and no advertiser can change a number. See our{' '}
        <Link href="/privacy/">privacy policy</Link> for how advertising cookies work and how to
        opt out of personalized ads.
      </p>
      <h2>If that changes</h2>
      <p>
        Should we ever add affiliate links, for example final-expense insurance comparisons, this
        page will be updated first, and every affected page will carry a clear, adjacent
        disclosure before any such link appears.
      </p>
    </div>
  );
}
