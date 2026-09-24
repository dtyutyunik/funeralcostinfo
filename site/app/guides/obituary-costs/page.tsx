import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL, dataset, fmt } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

const A = dataset.anchors;

export const metadata: Metadata = {
  title: 'Obituary Costs: Newspaper Prices & Free Alternatives',
  description:
    'What a newspaper obituary costs in 2026: per-line pricing, photo and day fees, why metro papers charge so much more, and free alternatives for sharing the news.',
  alternates: { canonical: SITE_URL + '/guides/obituary-costs/' },
  openGraph: {
    title: 'Obituary Costs: Newspaper Prices & Free Alternatives',
    description:
      'Newspaper obituaries are billed like classified ads — by the line or inch. Here is what drives the price, plus free and low-cost alternatives.',
    url: SITE_URL + '/guides/obituary-costs/',
  },
};

export default function ObituaryCostsGuide() {
  const faqs = [
    {
      q: 'What does a typical newspaper obituary cost?',
      a: 'Most U.S. newspaper obituaries land around $200–$500, with longer tributes in big-city markets routinely passing $800 (automateed, 2026 guide). But the range is huge: a 150-word obituary costs about $85 in Everett, Washington, versus roughly $780 in New York City. The paper, your market, the length, and whether you add a photo or extra days all move the number.',
    },
    {
      q: 'Why are newspaper obituaries so expensive?',
      a: 'Because they are priced like classified advertising, not news. Papers typically bill by the line, the column inch, or the word — and a line holds only about 25–30 characters in a standard newspaper column. A heartfelt 400-word tribute can run about 76 lines, so a four-figure bill is possible in a major metro paper (example from the Los Angeles Times placement page, 2026). Circulation and prestige set the per-line rate, which is why the same words cost far more in a large market than a small one.',
    },
    {
      q: 'Does the funeral home mark up the obituary fee?',
      a: 'Possibly. The funeral home usually submits the obituary to the paper on your behalf, and the charge appears on your itemized bill as a cash-advance item — money the funeral home pays to a third party on your behalf. Under the FTC Funeral Rule, the funeral home must tell you in writing how it calculates charges for cash-advance items, so ask directly: is this a straight pass-through of the paper\u2019s fee, or does it include a handling fee?',
    },
    {
      q: 'What are the best free alternatives to a newspaper obituary?',
      a: 'The funeral home\u2019s own website usually hosts an obituary page at no charge — ask your funeral director before paying for anything separately. Other free or low-cost options: memorial pages on sites like Ever Loved (which states its standard memorial websites are free), social media announcements, and community or church bulletins. Online-only newspaper listings typically run $50–$100 if you want a print publication\u2019s digital presence without the print price.',
    },
    {
      q: 'Can I run a short notice in print and the full obituary online?',
      a: 'Yes, and it is the most cost-effective approach for many families: a tight 50–100-word print announcement with the name, age, city, date of death, survivors, and service details, plus a pointer (a URL or the funeral home\u2019s site) to the full-length version online, where length costs nothing. This keeps the traditional record while avoiding per-line billing for the whole life story.',
    },
    {
      q: 'Is the obituary included in our cost estimates?',
      a: `No. Our modeled national estimates — for example, ${fmt(A.traditional_burial.value)} for traditional burial or ${fmt(A.direct_cremation.value)} for direct cremation, both modeled August-2026-dollar estimates — exclude obituary notices. Obituaries are cash-advance items (third-party costs the funeral home pays on your behalf), so they are not part of the funeral-home charges or the NFDA 2023 medians those estimates are built from. Budget for them separately.`,
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Obituary costs', url: SITE_URL + '/guides/obituary-costs/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Obituary costs</nav>
      <JsonLd data={articleJsonLd({
        title: 'Obituary Costs: Newspaper Prices & Free Alternatives',
        description: 'What a newspaper obituary costs in 2026: per-line pricing, photo and day fees, why metro papers charge so much more, and free alternatives for sharing the news.',
        url: SITE_URL + '/guides/obituary-costs/',
        datePublished: '2026-09-24',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="obituary-costs" imageAlt="Obituary Costs: Newspaper Prices & Free Alternatives"><h1>Obituary costs: newspaper prices &amp; free alternatives</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> a typical newspaper obituary costs <strong>$200–$500</strong>,
          with longer tributes in major metro markets routinely passing <strong>$800</strong> (2026
          guide figures). Papers bill by the line, inch, or word — so the same 150-word obituary
          costs about $85 in a small town and roughly $780 in New York City. Free alternatives —
          the funeral home&rsquo;s own website page, memorial sites, and social media — cost
          nothing and have no length limits.
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>

        <h2>How newspaper obituaries are priced</h2>
        <p>
          Paid obituaries are advertising, not news — papers price them the way they price
          classified ads: by the line, the column inch, the word, or a flat package rate. A
          weekly-paper industry survey found nearly half of papers charge either per word (26%)
          or a flat fee (23%), with others using tiered or per-column-inch pricing (RJI, 2026).
          Which model your paper uses matters less than understanding the unit: a &ldquo;line&rdquo;
          is defined by the paper&rsquo;s column width and font, typically only about 25–30
          characters — not by how your document looks at home.
        </p>
        <p>
          Typical per-line rates commonly cited run about $5–$12, though large metro papers can
          charge $20 or more per line (thepricer.org). Anchored to real 2026 listings, the scale
          looks like this:
        </p>
        <ul>
          <li><strong>Los Angeles Times:</strong> placement page lists notices starting at $205 for a short entry — and a 400-word tribute works out to roughly 76 lines, so a full obituary there can run into four figures (Medium/R. Doyle, Aug 2026).</li>
          <li><strong>Seattle:</strong> a starting price around $366 has appeared in placement flows (obituary.design, price check Sept 2026).</li>
          <li><strong>Houston Chronicle:</strong> a $36.50 starting price — but that buys only a short notice; a full obituary with photo and an online bundle costs substantially more (obituary.design, price check Sept 2026).</li>
        </ul>
        <p>
          The broader industry economics confirm the spread: obituary sections are roughly a
          $500-million-a-year business for local papers, with average revenue per obituary around
          $486 in large markets versus about $318 in small and mid-size markets (Adpay, via The
          Hustle, 2024). In short: the price of your obituary is mostly determined by your market,
          and prices vary enormously from one to the next.
        </p>

        <h2>What drives the final price</h2>
        <ul>
          <li><strong>Length.</strong> This is the main lever. Per-line or per-word pricing means every sentence costs you — trimming 50 words can save real money at metro rates.</li>
          <li><strong>Photo fees.</strong> Adding a photo typically costs $25–$250 extra depending on the paper (2026 figures).</li>
          <li><strong>Publication days.</strong> Each additional day it runs multiplies the bill. Sunday and weekend editions often cost more.</li>
          <li><strong>Online guest-book add-ons.</strong> Many papers charge an additional fee — often cited in the $50–$100 range — to pair the print notice with an online listing and guest book. Legacy.com reports average obituary costs of $100–$800 or more depending on publication, length, and photo.</li>
          <li><strong>Deadlines and rush.</strong> Missing a day&rsquo;s deadline can push the obituary to a more expensive edition.</li>
        </ul>
        <p>
          More than half of weekly-paper newsroom leaders say the cost of obituaries can be a
          barrier for families (RJI, 2026). If the number surprises you, you are not alone — and
          you have options below.
        </p>

        <h2>Who submits the obituary — and who pays</h2>
        <p>
          Usually the funeral home submits the obituary to the newspaper on your behalf. The fee
          then appears on your itemized bill as a <strong>cash-advance item</strong>: money the
          funeral home pays to a third party (the paper) for you. It is not part of the funeral
          home&rsquo;s own service charges — which is why our modeled estimates, built from
          funeral-home charges only, exclude obituary notices (more on that below).
        </p>
        <p>
          Funeral homes are allowed to pass the fee through at cost or to add a handling markup.
          Under the FTC Funeral Rule, the provider must tell you in writing how it computes
          charges for cash-advance items, so ask a plain question before you sign: <em>&ldquo;Is
          the obituary price a straight pass-through of the paper&rsquo;s fee, or does it include
          a handling fee?&rdquo;</em> See <Link href="/guides/paying-for-a-funeral/">Paying for a funeral →</Link> for
          how cash advances fit into the total bill.
        </p>

        <h2>Free and low-cost alternatives</h2>
        <p>
          You do not have to pay per line to announce a death or share a life story. These options
          are free or nearly free:
        </p>
        <ul>
          <li><strong>The funeral home&rsquo;s website obituary page.</strong> Usually included free with services — ask your funeral director before paying separately. This is the single easiest free option.</li>
          <li><strong>Memorial websites.</strong> Platforms like Ever Loved state that their standard memorial websites are free and let you publish a full online obituary at no cost (Ever Loved, via funeral.com, 2025–2026).</li>
          <li><strong>Social media announcements.</strong> A post on the deceased&rsquo;s or family&rsquo;s accounts reaches the people who knew them fastest, costs nothing, and invites memories and photos.</li>
          <li><strong>Community and church bulletins.</strong> Local congregations, clubs, and community newsletters often publish death announcements free.</li>
          <li><strong>Online-only newspaper listings.</strong> If you want a print publication&rsquo;s digital presence without the print price, online-only listings typically run $50–$100 (JoinCake, via thepricer.org).</li>
        </ul>
        <p>
          The move many families make: publish a short 50–100-word notice in print with the
          essentials — name, age, city, date of death, survivors, service details — and put the
          full-length tribute online, where length costs nothing. Nobody measures your love in
          column inches, and the long version is the one the family actually keeps.
        </p>

        <h2>Writing it once, using it everywhere</h2>
        <p>
          Write the obituary once as a master document, then adapt it per outlet — the funeral
          home&rsquo;s page takes the long version, print takes the short one, social media gets
          a condensed version with a link. What to include: full name (and nickname/maiden name),
          age, city of residence, date and place of death, cause of death if the family is
          comfortable sharing it, education and career highlights, survivors and those who died
          before them, service details (date, time, location, visitation), and donation or flower
          preferences.
        </p>
        <p>
          Then proofread the parts that matter most under grief-stress: every name, every date,
          every survivor&rsquo;s spelling. Corrections after publication are rarely free. If
          writing under pressure feels overwhelming, paid obituary-writing services typically
          charge $99–$600, with most quality services in the $150–$350 range (amavia, 2026 guide)
          — but families often manage well with a template and a careful friend.
        </p>

        <h2>A note on our cost estimates</h2>
        <p>
          Our modeled national estimates — {fmt(A.traditional_burial.value)} for traditional
          burial, {fmt(A.cremation_with_service.value)} for cremation with a service,
          {fmt(A.direct_cremation.value)} for direct cremation, {fmt(A.direct_burial.value)} for
          direct burial, and {fmt(A.burial_with_vault.value)} for burial with a vault (all
          modeled August-2026-dollar estimates built from NFDA 2023 medians, adjusted for
          inflation; green burial at {fmt(A.green_burial.value)} is a stated assumption, not a
          surveyed price) — <strong>do not include obituary notices</strong>. Like cemetery
          fees and clergy honoraria, obituaries are cash-advance items paid to third parties, so
          they sit outside the funeral-home charges our estimates model. Budget for them
          separately — or publish free. For the full breakdown of what is and is not included,
          see <Link href="/guides/funeral-cost-2026-breakdown/">Funeral cost 2026 breakdown →</Link>
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>

        <p>
          <Link href="/guides/paying-for-a-funeral/">Paying for a funeral →</Link>
          {' · '}
          <Link href="/guides/when-someone-dies-checklist/">When someone dies: checklist →</Link>
          {' · '}
          <Link href="/guides/funeral-cost-2026-breakdown/">Funeral cost 2026 breakdown →</Link>
        </p>
      <RelatedGuides currentSlug="obituary-costs" />
      </div>
    </>
  );
}
