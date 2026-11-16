import type { Metadata } from 'next';
import { SITE_URL } from '../../lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'FuneralCostInfo privacy policy: no accounts and no personal data collection. We use Cloudflare Web Analytics and Google Analytics 4 for visitor statistics. Advertising is served by Google AdSense, which uses cookies. Calculator inputs never leave your browser.',
  alternates: { canonical: SITE_URL + '/privacy/' },
};

export default function PrivacyPage() {
  return (
    <div className="wrap prose">
      <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Privacy</nav>
      <h1>Privacy policy</h1>
      <p className="updated">Effective 2026-11-16.</p>
      <p className="answer-first">
        <strong>Quick answer:</strong> FuneralCostInfo itself collects no personal data. There are no
        accounts. Our visitor measurement comes from Cloudflare Web Analytics and Google Analytics 4,
        which give us aggregate statistics about visits. Cloudflare&apos;s tool is cookieless and
        anonymous; Google Analytics sets cookies, as described below. Calculator inputs are processed
        entirely in your browser and never sent anywhere. The site is supported by advertising
        served through Google AdSense, and Google and its partners use cookies to serve those ads,
        as described below.
      </p>
      <h2>What we collect</h2>
      <p>
        Nothing directly. We do not operate user accounts or store contact-form submissions. Our
        hosting provider (Cloudflare) processes standard server logs, including IP addresses, to
        deliver the site and protect it from abuse, and its Web Analytics service gives us
        anonymous, aggregate statistics about visits (pages viewed, referrers, countries, devices).
        Web Analytics sets no cookies and does not identify or profile individual visitors.
      </p>
      <p>
        Google Analytics 4 measures how visitors use the site (pages viewed, referrers, countries,
        devices, and time on page) so we can see which pages help people and which do not. It sets
        cookies, including one named _ga, to tell visitors apart, and reports statistics to us in
        aggregate. We do not receive names, email addresses, or anything that identifies you
        personally from it.
      </p>
      <h2>Advertising and cookies</h2>
      <p>
        This site displays advertising served by Google AdSense. Third-party vendors, including
        Google, use cookies to serve ads based on a user&apos;s prior visits to this website or
        other websites. Google&apos;s use of advertising cookies enables it and its partners to
        serve ads to our users based on their visits to this site and other sites on the Internet.
      </p>
      <p>
        You can opt out of personalized advertising by visiting{' '}
        <a href="https://www.google.com/settings/ads" rel="noopener noreferrer">Google Ads Settings</a>.
        You can also opt out of some third-party vendors&apos; use of cookies for personalized
        advertising at{' '}
        <a href="https://www.aboutads.info/choices/" rel="noopener noreferrer">aboutads.info/choices</a>.
        Visitors in the European Economic Area, the UK, and Switzerland are shown a consent
        message before personalized ads are served.
      </p>
      <p>
        The only first-party cookies set through this site are the Google Analytics cookies
        described above. Advertising cookies come from the AdSense service described in this
        section.
      </p>
      <h2>Contact</h2>
      <p>
        If you email us (see our <Link href="/contact/">contact page</Link>), your message is used only to
        respond to you. We do not add addresses to any list.
      </p>
      <h2>Changes</h2>
      <p>
        If our data or advertising practices change, this policy will be updated first, with the
        effective date changed and the change described here. The previous version of this policy,
        effective 2026-09-23, stated that the site ran no advertising; that changed when the site
        began carrying AdSense advertising. On 2026-11-16 the site began using Cloudflare Web
        Analytics for anonymous, aggregate visitor statistics; the earlier statement that the site
        ran no analytics no longer applies. Later on 2026-11-16 the site added Google Analytics 4
        for visitor statistics; its cookies are described above.
      </p>
    </div>
  );
}
