import type { Metadata } from 'next';
import Byline from '../../components/Byline';
import { PAGE_DATES } from '../../lib/page-dates';
import JsonLd, { breadcrumbJsonLd, faqJsonLd } from '../../components/JsonLd';
import { SITE_URL, VINTAGE_LABEL } from '../../lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Embed Our Funeral Cost Calculator: Free Widget for Your Website',
  description:
    'Add the free FuneralCostInfo funeral cost calculator to your website with one script tag or iframe. State-by-state modeled estimates for funeral homes, nonprofits, libraries, and media. Attribution required, no fees, no lead sales.',
  alternates: { canonical: SITE_URL + '/embed/' },
  openGraph: {
    title: 'Embed Our Funeral Cost Calculator',
    description:
      'A free, embeddable funeral cost calculator with state-by-state modeled estimates. One script tag, attribution required, no fees.',
    url: SITE_URL + '/embed/',
  },
};

const LOADER_SNIPPET = `<script src="https://funeralcostinfo.com/embed.js" async></script>
<div class="fci-calculator" data-state="TX"></div>`;

const LOADER_COBRAND_SNIPPET = `<div class="fci-calculator" data-state="TX" data-partner="Acme Funeral Home"></div>`;

const IFRAME_SNIPPET = `<iframe src="https://funeralcostinfo.com/embed/calculator.html?state=TX" width="100%" height="460" style="border:0;max-width:680px" title="Funeral cost calculator by FuneralCostInfo" loading="lazy"></iframe>`;

const IFRAME_COBRAND_SNIPPET = `<iframe src="https://funeralcostinfo.com/embed/calculator.html?state=TX&partner=Acme%20Funeral%20Home" width="100%" height="460" style="border:0;max-width:680px" title="Funeral cost calculator by FuneralCostInfo" loading="lazy"></iframe>`;

const preStyle: React.CSSProperties = {
  background: '#f2f6fa',
  border: '1px solid #d8dee4',
  borderRadius: '8px',
  padding: '12px 14px',
  overflowX: 'auto',
  fontSize: '13.5px',
  lineHeight: 1.5,
};

const faqs = [
  {
    q: 'Who can embed the calculator?',
    a: 'Any funeral home, funeral consumer nonprofit, library, hospice, senior service, or media site. It is free for commercial and noncommercial use as long as the built-in attribution stays in place.',
  },
  {
    q: 'What does the widget show?',
    a: 'A visitor picks a state and one of six service types (traditional burial, burial with vault, cremation with service, direct cremation, direct burial, green burial) and sees the modeled point estimate, the typical range for that state, and the national average for comparison. A link takes them to the full state breakdown on FuneralCostInfo.',
  },
  {
    q: 'Where do the numbers come from?',
    a: 'The same published model as the rest of this site: NFDA 2023 national medians adjusted to August 2026 dollars with the BLS CPI for funeral expenses, then scaled to each state with BEA 2024 regional price parities. They are modeled estimates for planning, not quotes, and the widget says so.',
  },
  {
    q: 'Does the widget track our visitors or sell leads?',
    a: 'No. The widget is a static page with no trackers, no forms, and no data collection. FuneralCostInfo takes no money from funeral homes and sells no leads.',
  },
  {
    q: 'Can we put our name on it?',
    a: 'Yes. Add a partner name and the widget shows a small "Provided with" line with your organization name at the top. With the script option use the data-partner attribute; with the iframe option add a partner query parameter. No logos, text only.',
  },
  {
    q: 'How do we set the default state?',
    a: 'With the script option, set data-state to your two-letter state abbreviation on the placeholder div. With the iframe option, set the state query parameter. Visitors can always change the state inside the widget.',
  },
];

export default function EmbedPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Embed the calculator', url: SITE_URL + '/embed/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Embed the calculator</nav>
        <h1>Embed our funeral cost calculator</h1>
        <Byline published={PAGE_DATES['/embed/']?.published} updated={PAGE_DATES['/embed/']?.updated} />
        <p className="answer-first">
          <strong>Quick answer:</strong> the FuneralCostInfo calculator is free to embed on any
          website. Paste one script tag (or a plain iframe), and your visitors get state-by-state
          funeral cost estimates built from our published model. The only condition is that the
          built-in attribution line, &quot;Cost estimates by FuneralCostInfo&quot; with its link,
          stays in place. No fees, no sign-up, no lead sales, no tracking.
        </p>

        <h2>Live preview</h2>
        <p>This is the widget exactly as your visitors will see it. It resizes itself to fit its content.</p>
        <iframe
          src="/embed/calculator.html?state=CA"
          width="100%"
          height={460}
          style={{ border: 0, maxWidth: '680px' }}
          title="Funeral cost calculator by FuneralCostInfo"
          loading="lazy"
        />

        <h2>Option A: script tag (recommended)</h2>
        <p>
          Paste the script once on any page, then drop a placeholder div wherever you want a
          calculator. Set <code>data-state</code> to your state abbreviation to set the default
          state. You can place several placeholders with different default states on one page.
        </p>
        <pre style={preStyle}><code>{LOADER_SNIPPET}</code></pre>
        <p>
          To co-brand it, add <code>data-partner</code> with your organization name. The widget
          shows a small &quot;Provided with&quot; line at the top:
        </p>
        <pre style={preStyle}><code>{LOADER_COBRAND_SNIPPET}</code></pre>
        <p>
          The script option resizes the frame automatically when the widget height changes, so
          there are no scrollbars and no clipped content.
        </p>

        <h2>Option B: plain iframe</h2>
        <p>
          If your platform does not allow custom scripts, use a plain iframe instead. Set the{' '}
          <code>state</code> query parameter to your state abbreviation:
        </p>
        <pre style={preStyle}><code>{IFRAME_SNIPPET}</code></pre>
        <p>Co-branded version, using the <code>partner</code> query parameter (URL-encoded):</p>
        <pre style={preStyle}><code>{IFRAME_COBRAND_SNIPPET}</code></pre>

        <h2>Terms of use</h2>
        <ul>
          <li>Free for funeral homes, nonprofits, libraries, government and media sites.</li>
          <li>Attribution is required: keep the &quot;Cost estimates by FuneralCostInfo&quot; footer and its link as rendered. Do not hide, shrink, or restyle it away.</li>
          <li>Do not modify the figures or present them as your own data or as quotes from your funeral home. They are modeled estimates, and the widget labels them as such.</li>
          <li>We may update the underlying model (for example when new CPI or BEA data lands); embedded widgets update automatically with no action on your side.</li>
        </ul>

        <h2>Questions</h2>
        <p>
          Email <a href="mailto:hello@funeralcostinfo.com">hello@funeralcostinfo.com</a> if you
          want a default service type preset, a different default state for a statewide network,
          or help with the install. The full method behind the numbers is on our{' '}
          <Link href="/methodology/">methodology page</Link>, and the full interactive version
          with cemetery and cash-advance add-ons is the{' '}
          <Link href="/calculator/">funeral cost calculator</Link>.
        </p>
        <p className="updated">{VINTAGE_LABEL}</p>

        <h2>Embed FAQ</h2>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </>
  );
}
