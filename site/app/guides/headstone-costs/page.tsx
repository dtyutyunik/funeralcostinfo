import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL } from '../../../lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Much Does a Headstone Cost? Markers vs. Monuments',
  description:
    'Flat markers, bevel markers, upright monuments, and ledgers — what each type is, what moves the price, cemetery rules that constrain your choice, and what veterans get free.',
  alternates: { canonical: SITE_URL + '/guides/headstone-costs/' },
  openGraph: {
    title: 'How Much Does a Headstone Cost? Markers vs. Monuments',
    description:
      'Plain-English guide to headstone costs: marker types, the price drivers, cemetery rules to check first, and VA headstone benefits for veterans.',
    url: SITE_URL + '/guides/headstone-costs/',
  },
};

export default function HeadstoneCostsGuide() {
  const faqs = [
    {
      q: 'Is a headstone included in the funeral-home bill?',
      a: 'Usually not. The funeral home handles the service and burial; the headstone or marker is a separate purchase — typically from a monument dealer, the cemetery itself, or sometimes online. That is exactly why headstones rarely appear on a funeral home\u2019s General Price List: they are a different vendor\u2019s product.',
    },
    {
      q: 'What is a typical price range for a headstone marker?',
      a: 'The one sourced range we can cite: the Funeral Consumers Alliance of Maryland/DC published a July 2026 comparative-costs survey putting typical markers at $1,000\u2013$3,000. Prices vary widely by material, size, and design, so treat any figure as a starting point and get written quotes from more than one dealer.',
    },
    {
      q: 'Can I buy a headstone from a third-party dealer instead of the cemetery?',
      a: 'Usually yes — but check the cemetery\u2019s monument rules first, in writing. Some cemeteries charge a setting or inspection fee for stones purchased elsewhere, and a few restrict outside vendors entirely. The rules plus the fee determine whether the cheaper dealer price is actually cheaper.',
    },
    {
      q: 'What headstone benefit do veterans get?',
      a: 'The U.S. Department of Veterans Affairs provides a free government headstone or marker for any eligible veteran, usable at any cemetery. In certain cases the VA also pays a $441 headstone or marker allowance, and burial in a VA national cemetery — including the marker — is free. See VA.gov for current eligibility details.',
    },
    {
      q: 'Why won\u2019t my cemetery allow an upright monument?',
      a: 'Many cemeteries designate flat-marker-only sections so mowing equipment can pass straight over the stones. Upright monuments cost the cemetery more maintenance labor, so the flat-only rule is common. Always ask which sections permit which marker types before falling in love with a design.',
    },
    {
      q: 'Bronze or granite — which should I choose?',
      a: 'Both are standard and durable. Granite uprights and flat markers are the most common choice and hold engraving well; bronze is typically a cast plaque mounted on a granite base and is common in flat-marker sections. Marble looks classic but weathers faster outdoors. The cemetery\u2019s approved-materials list may narrow the choice for you.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Headstone costs', url: SITE_URL + '/guides/headstone-costs/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Headstone costs</nav>
      <JsonLd data={articleJsonLd({
        title: 'How Much Does a Headstone Cost? Markers vs. Monuments',
        description: 'Flat markers, bevel markers, upright monuments, and ledgers — what each type is, what moves the price, cemetery rules that constrain your choice, and what veterans get free.',
        url: SITE_URL + '/guides/headstone-costs/',
        datePublished: '2026-09-24',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <h1>How much does a headstone cost?</h1>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> the only independently sourced range we can cite is
          $1,000–$3,000 for a typical marker, from the Funeral Consumers Alliance of
          Maryland/DC\u2019s July 2026 comparative-costs survey. Flat (grass) markers cost
          less than upright monuments; everything else depends on material, size, and
          engraving. And the headstone is almost always a separate purchase — it is not
          part of the funeral-home bill.
        </p>

        <h2>Flat markers, bevel markers, upright monuments, ledgers: what each is</h2>
        <p>
          "Headstone" is the everyday word, but the trade divides markers into a few distinct
          types, and the type is the single biggest driver of price.
        </p>
        <ul>
          <li>
            <strong>Flat (grass) markers</strong> — a slab set flush with the ground, usually
            granite or a bronze plaque on a granite base. Mower-friendly, so cemeteries love
            them. Typically the least expensive option.
          </li>
          <li>
            <strong>Bevel markers</strong> — similar to flat markers but with a sloped face,
            slightly raised at the back. A middle ground: more presence than a flat marker,
            still low-profile enough for many cemetery sections.
          </li>
          <li>
            <strong>Upright monuments</strong> — the classic standing headstone on a base,
            plus its tablet (the inscribed top). The most visible — and usually the most
            expensive — option, because it uses more stone and more labor.
          </li>
          <li>
            <strong>Slanted markers and ledgers</strong> — a slanted marker is a thicker
            wedge with a sloped face; a ledger is a full-length slab covering the grave.
            Ledgers use the most material and sit at the top of the price range.
          </li>
        </ul>
        <p>
          Companion markers — one stone for two people — also exist in each of these forms
          and are common for couples.
        </p>

        <h2>What moves the price</h2>
        <p>
          Once you know the type, five things decide where in the range you land. Dealers
          rarely publish prices, so expect to request written quotes.
        </p>
        <ul>
          <li>
            <strong>Size.</strong> More stone costs more — a two-foot flat marker and a
            four-foot upright are different products. Cemeteries also set maximum sizes, so
            bigger is not always an option.
          </li>
          <li>
            <strong>Material.</strong> Granite is the workhorse: durable, widely available,
            and offered in many colors. Bronze (as a plaque, usually on granite) is a
            standard alternative. Marble is traditional but weathers faster outdoors, which
            is why some cemeteries discourage it.
          </li>
          <li>
            <strong>Lettering and engraving.</strong> Many dealers charge per character or
            per letter beyond a base inscription, so a long epitaph adds up. Names and dates
            are standard; every extra line has a price.
          </li>
          <li>
            <strong>Artwork and etching.</strong> Carved designs, portraits, and laser
            etching are priced as add-ons. The more custom the artwork, the more it adds.
          </li>
          <li>
            <strong>Installation and foundation.</strong> The stone has to be set on a
            concrete foundation at the grave — and that labor is often billed separately
            from the stone itself. Ask whether a quote includes setting or just the marker.
          </li>
        </ul>
        <p>
          One more charge to watch for: <strong>cemetery setting or inspection fees</strong>.
          If you buy a marker from an independent dealer, some cemeteries charge a fee to
          set it or to inspect an outside vendor\u2019s work. Get that fee in writing before
          comparing the dealer\u2019s price against the cemetery\u2019s own price.
        </p>

        <h2>Cemetery rules that constrain your choice</h2>
        <p>
          The cemetery, not the dealer, has the final say on what goes on the grave. Before
          buying anything, ask for the cemetery\u2019s monument regulations in writing.
          Common constraints include:
        </p>
        <ul>
          <li><strong>Approved materials</strong> — some cemeteries allow only granite, or only bronze-on-granite, in certain sections.</li>
          <li><strong>Size limits</strong> — maximum height, width, and thickness per section.</li>
          <li><strong>Flat-only sections</strong> — many sections permit only flush markers so mowers can pass over them.</li>
          <li><strong>Design approval</strong> — the cemetery may need to approve the inscription or artwork before installation.</li>
        </ul>
        <p>
          These rules are set by the cemetery as a private business, not by law. But they
          are binding once you own a plot there — a marker that violates them will not be
          installed, no matter what the dealer promised.
        </p>

        <h2>Veterans: the government provides the marker</h2>
        <p>
          If the deceased was an eligible veteran, the headstone math changes completely.
          The U.S. Department of Veterans Affairs provides a <strong>free government
          headstone or marker for any eligible veteran, usable at any cemetery</strong> —
          private, state, or national. In certain cases the VA also pays a <strong>$441
          headstone or marker allowance</strong>, and <strong>burial in a VA national
          cemetery, including the marker, is free</strong>. Check current eligibility and
          application details on VA.gov before spending anything on a marker for a veteran.
        </p>

        <h2>Practical tips before you buy</h2>
        <ol>
          <li>
            <strong>Get the cemetery\u2019s monument rules in writing first.</strong> Material,
            size, and type restrictions decide what you can buy. Everything else follows
            from this document.
          </li>
          <li>
            <strong>Compare the cemetery\u2019s price against independent monument
            dealers.</strong> Get at least two written quotes that each state whether
            lettering, artwork, foundation, and setting are included — then add any
            cemetery setting or inspection fee to the dealer\u2019s number before comparing.
          </li>
          <li>
            <strong>Ask what the inscription price covers.</strong> Per-character charges
            mean the final price depends on what you write. Draft the inscription before
            you ask for the final number.
          </li>
          <li>
            <strong>There is no rush.</strong> Unlike the funeral itself, a marker can wait
            months. A temporary marker holds the place while you shop — and shopping
            unhurried is the best way to avoid overpaying.
          </li>
          <li>
            <strong>Keep the paper trail together.</strong> File the cemetery\u2019s written
            monument rules, every dealer quote, and the final proof of the inscription in
            one place. If a family member questions the wording or the price later, the
            signed proof and the written rules settle it.
          </li>
        </ol>
        <p>
          One sourced reference point for comparison shopping: the Funeral Consumers
          Alliance of Maryland/DC — an independent consumer organization, not affiliated
          with this site — published <a href="https://mdfunerals.org/wp-content/uploads/2026/07/Comparative-Costs-7.15.26.pdf" rel="noopener noreferrer">comparative costs (July 2026, PDF)</a> showing
          typical markers at $1,000–$3,000. Use it as a sanity check on any quote you receive.
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
          <Link href="/calculator/">Build your line-item estimate →</Link>
          {' · '}
          <Link href="/guides/funeral-service-types/">Funeral service types explained →</Link>
          {' · '}
          <Link href="/guides/funeral-glossary/">Funeral terms glossary →</Link>
        </p>

        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>
      </div>
    </>
  );
}
