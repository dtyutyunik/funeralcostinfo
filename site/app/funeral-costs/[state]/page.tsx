import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import JsonLd, { faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import {
  dataset, getState, stateSlug, fmt, fmtRange, SITE_URL, LAST_UPDATED,
  SERVICE_ORDER, PHASE0_STATES, VINTAGE_LABEL, type ServiceKey,
} from '../../../lib/data';
import Link from 'next/link';

interface StateNote {
  boardName: string;
  boardUrl: string | null;
  context: string[];
  caveats: string[];
}

const STATE_NOTES: Record<string, StateNote> = {
  california: {
    boardName: 'California Cemetery and Funeral Bureau',
    boardUrl: 'https://www.cfb.ca.gov/',
    context: [
      'California has the highest regional price level of any state in our dataset (RPP 110.7), so its modeled estimates are the highest in the nation.',
      'The NFDA projects 81.5% of California dispositions will be cremations by 2035 — among the highest cremation rates in the country.',
    ],
    caveats: [
      'Costs vary enormously within California: Los Angeles, San Francisco, and San Diego metro prices typically run well above the state modeled figure, while rural counties run below it.',
      'California law requires funeral establishments to provide written price lists; always ask for the General Price List before discussing options.',
    ],
  },
  texas: {
    boardName: 'Texas Funeral Service Commission',
    boardUrl: 'https://tfsc.texas.gov/',
    context: [
      'Texas sits just below the national average price level (RPP 97.1), so modeled costs run slightly under the national medians.',
      'The NFDA projects 70.2% of Texas dispositions will be cremations by 2035.',
    ],
    caveats: [
      'Texas does not require embalming. State law requires that a body held for more than 24 hours be refrigerated, embalmed, or encased in a suitable container.',
      'Anyone providing funeral services for compensation in Texas must be licensed by the Texas Funeral Service Commission — be wary of unlicensed online sellers.',
    ],
  },
  florida: {
    boardName: 'Florida Division of Funeral, Cemetery & Consumer Services',
    boardUrl: 'https://www.myfloridacfo.com/division/funeralcemetery',
    context: [
      'Florida runs modestly above the national average price level (RPP 103.4).',
      'The NFDA projects 79.8% of Florida dispositions will be cremations by 2035, reflecting the state\u2019s large retiree population and transient communities.',
    ],
    caveats: [
      'Florida regulates preneed (prepaid) funeral contracts through the Department of Financial Services; if you are considering prepaying, verify the seller\u2019s license.',
      'Prices differ between South Florida metros and the Panhandle — treat the state figure as a midpoint, not a local quote.',
    ],
  },
  'new-york': {
    boardName: 'New York State Department of Health, Bureau of Funeral Directing',
    boardUrl: null,
    context: [
      'New York has one of the highest price levels in the nation (RPP 107.9), driven largely by the New York City metro area.',
      'The NFDA projects 70.7% of New York dispositions will be cremations by 2035.',
    ],
    caveats: [
      'The New York City metro area typically prices well above the state modeled figure; upstate and rural counties typically price below it.',
      'New York licenses funeral directors through the Department of Health\u2019s Bureau of Funeral Directing; you can verify a license before engaging a provider.',
    ],
  },
  mississippi: {
    boardName: 'Mississippi State Board of Funeral Service',
    boardUrl: 'https://www.msbfs.ms.gov/',
    context: [
      'Mississippi has the second-lowest regional price level in our dataset (RPP 87.0), just above Arkansas, so its modeled estimates are among the lowest in the nation.',
      'The NFDA projects Mississippi will retain one of the highest burial shares in the country, with only 54.5% cremations by 2035.',
    ],
    caveats: [
      'Mississippi is largely rural; fewer providers can mean less price competition in some counties — comparing two or three GPLs matters more, not less.',
      'A low state average does not guarantee a low bill: merchandise choices (casket, vault) move the total more than geography does.',
    ],
  },
};

export function generateStaticParams() {
  return PHASE0_STATES.map((slug) => ({ state: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const st = getState(state);
  if (!st) return {};
  const trad = st.estimates.traditional_burial;
  const crem = st.estimates.direct_cremation;
  const title = `Funeral Costs in ${st.name} (2026): Modeled Estimates by Service Type`;
  const description =
    `How much does a funeral cost in ${st.name}? Modeled estimate in August 2026 dollars: ${fmt(trad.point)} for a traditional burial with viewing (NFDA 2023 median $${dataset.anchors.traditional_burial.value_2023.toLocaleString()} inflated via the BLS funeral-expenses CPI, adjusted for ${st.name} prices), ${fmt(crem.point)} for direct cremation. Independent — no funeral-home money.`;
  const url = `${SITE_URL}/funeral-costs/${state}/`;
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'article' },
  };
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const st = getState(state);
  if (!st) notFound();
  const notes = STATE_NOTES[state];
  const trad = st.estimates.traditional_burial;
  const maxPoint = Math.max(...SERVICE_ORDER.map((k) => st.estimates[k].point));

  const faqs = [
    {
      q: `Are these real prices from ${st.name} funeral homes?`,
      a: `No. These are modeled estimates: the NFDA 2023 national median, adjusted to August 2026 dollars with the BLS funeral-expenses CPI and scaled by the BEA 2024 regional price parity for ${st.name} (RPP ${st.rpp_all_items.toFixed(1)}). No state-level funeral price survey exists. Treat the point figure as a planning midpoint and the range as the plausible spread — then request itemized General Price Lists from local funeral homes for real quotes.`,
    },
    {
      q: `What does the ${fmt(trad.point)} traditional-burial estimate include?`,
      a: `It follows the NFDA median's definition: basic services fee, removal/transfer, embalming and preparation, facilities and staff for viewing and ceremony, hearse, service car, memorial printed package, and a metal casket. It does not include the cemetery plot, opening and closing fees, a headstone, flowers, or obituary notices.`,
    },
    {
      q: `What is NOT included in these estimates?`,
      a: `Cemetery costs (plot, opening/closing, marker), flowers, obituary notices, clergy honoraria, death certificates, and other cash-advance items. Cemetery charges alone commonly add several thousand dollars to a burial. Use the calculator to add typical cemetery and cash-advance costs.`,
    },
    {
      q: `How accurate is the modeled estimate for ${st.name}?`,
      a: `It is a transparent starting point, not a quote. The ±15% illustrative range reflects typical within-state variation; individual funeral homes can fall outside it, especially in high-cost metros or with premium merchandise. The model's accuracy improves as a planning anchor, not as a prediction of any single provider's price.`,
    },
    {
      q: `How do I get an exact price in ${st.name}?`,
      a: `Under the FTC Funeral Rule you have the right to an itemized General Price List from any funeral home, price information by phone without giving your name, and to buy only the goods and services you want. Call or visit two to three providers, compare their GPLs line by line, and never sign under time pressure. See our guide to your rights under the FTC Funeral Rule.`,
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: `Funeral costs in ${st.name}`, url: `${SITE_URL}/funeral-costs/${state}/` },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link> › Funeral costs in {st.name}
        </nav>
        <h1>
          Funeral Costs in {st.name} <span className="modeled-tag">Modeled estimate</span>
        </h1>
        <div className="answer-first">
          <strong>Quick answer:</strong> a traditional funeral with viewing and burial in {st.name}{' '}
          is modeled at <strong>{fmt(trad.point)}</strong> (range {fmtRange(trad)}), versus the
          inflation-adjusted national anchor of {fmt(dataset.anchors.traditional_burial.value)} (the NFDA
          2023 median of {fmt(dataset.anchors.traditional_burial.value_2023)} in August 2026 dollars). Direct cremation
          is modeled at <strong>{fmt(st.estimates.direct_cremation.point)}</strong>. These are
          modeled estimates — not surveyed prices or quotes — built from the NFDA 2023 national
          medians, inflated with the BLS funeral-expenses CPI, and adjusted by {st.name}&apos;s BEA 2024 regional price parity ({st.rpp_all_items.toFixed(1)}).
        </div>

        <h2>Modeled estimates by service type — {st.name}</h2>
        <p style={{ color: 'var(--muted)' }}>
          Bars are scaled to the most expensive option. Ranges are illustrative (±15%), not
          statistical confidence intervals. Excludes cemetery and cash-advance costs unless noted.
        </p>
        <div className="est-grid">
          {SERVICE_ORDER.map((k: ServiceKey, i) => {
            const e = st.estimates[k];
            const anchor = dataset.anchors[k];
            return (
              <div className={`est-card${i === 0 ? ' featured' : ''}`} key={k}>
                <div className="svc">
                  {anchor.label}
                  {anchor.assumption && <small>Stated assumption — no NFDA median exists</small>}
                </div>
                <div className="val">{fmt(e.point)}</div>
                <div className="rng">Illustrative range {fmtRange(e)}</div>
                <div className="bar-track" aria-hidden="true">
                  <div className="bar-fill" style={{ width: `${(e.point / maxPoint) * 100}%` }} />
                </div>
                {anchor.assumption && (
                  <div className="assumption">Assumption: {anchor.assumption}</div>
                )}
              </div>
            );
          })}
        </div>

        <div className="context-grid">
          <div className="context-box">
            <h3>{st.name} in context</h3>
            <ul>
              {notes.context.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
          <div className="context-box">
            <h3>Local caveats</h3>
            <ul>
              {notes.caveats.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        </div>

        <h2>What&apos;s included — and what isn&apos;t</h2>
        <p><strong>Included</strong> (per the NFDA median definition): basic services fee, removal/transfer,
        embalming and preparation, viewing and ceremony facilities/staff, hearse, service car, memorial
        printed package, and casket (burial) or cremation casket and urn (cremation with service).</p>
        <p><strong>Not included:</strong> cemetery plot, opening and closing, headstone or marker, burial
        vault (except the burial-with-vault row), flowers, obituary notices, and cash-advance items such as
        clergy honoraria or death certificates.</p>

        <div className="affiliate-cta no-print">
          <div className="placeholder-note">Affiliate placement — not active</div>
          <p style={{ margin: '8px 0' }}>
            <strong>Planning ahead?</strong> Final-expense insurance is one way families fund funeral costs.
            We have no insurance partnerships yet, so there is nothing to click — when we add vetted,
            clearly-labeled options, they will appear here. <Link href="/affiliate-disclosure/">Read our disclosure</Link>.
          </p>
        </div>

        <h2>Official {st.name} resources</h2>
        <ul>
          {notes.boardUrl && (
            <li><a href={notes.boardUrl} rel="noopener noreferrer">{notes.boardName}</a> — verify licenses and file complaints.</li>
          )}
          {!notes.boardUrl && (
            <li>{notes.boardName} — verify licenses and file complaints (search the bureau&apos;s site directly).</li>
          )}
          <li><a href="https://consumer.ftc.gov/articles/ftc-funeral-rule">FTC Funeral Rule — your federal rights</a></li>
          <li><Link href="/guides/funeral-rule-rights/">Our plain-English guide to the Funeral Rule</Link></li>
        </ul>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>

        <p className="updated">
          {VINTAGE_LABEL} · Updated {LAST_UPDATED} · Model v3. <Link href="/methodology/">Full methodology</Link>.
        </p>
      </div>
    </>
  );
}
