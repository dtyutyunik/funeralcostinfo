import type { Metadata } from 'next';
import { SITE_URL } from '../../lib/data';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'FuneralCostInfo privacy policy: no accounts, no tracking, no analytics, no data collection. Your calculator inputs never leave your browser.',
  alternates: { canonical: SITE_URL + '/privacy/' },
};

export default function PrivacyPage() {
  return (
    <div className="wrap prose">
      <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> › Privacy</nav>
      <h1>Privacy policy</h1>
      <p className="updated">Effective 2026-09-23.</p>
      <p className="answer-first">
        <strong>Quick answer:</strong> this site collects no personal data. There are no accounts,
        no analytics, no tracking cookies, and no advertising scripts. Calculator inputs are processed
        entirely in your browser and never sent anywhere.
      </p>
      <h2>What we collect</h2>
      <p>Nothing. We do not operate user accounts, contact forms that store data, analytics, or third-party trackers.</p>
      <h2>Cookies</h2>
      <p>We set no cookies.</p>
      <h2>Contact</h2>
      <p>
        If you email us (see our <a href="/contact/">contact page</a>), your message is used only to
        respond to you. We do not add addresses to any list.
      </p>
      <h2>Changes</h2>
      <p>
        If we ever add analytics or advertising, this policy will be updated first, with the effective
        date changed and the change described here.
      </p>
    </div>
  );
}
