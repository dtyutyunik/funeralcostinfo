import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import JsonLd, { faqJsonLd, breadcrumbJsonLd } from '../../../../components/JsonLd';
import Byline from '../../../../components/Byline';
import {
  dataset, getState, fmt, fmtRange, SITE_URL, LAST_UPDATED,
  SERVICE_ORDER, VINTAGE_LABEL, type ServiceKey,
} from '../../../../lib/data';
import { CITIES, getCity } from '../../../../lib/cities';
import Link from 'next/link';

export function generateStaticParams() {
  return CITIES.map((c) => ({ state: c.stateSlug, city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}): Promise<Metadata> {
  const { state, city } = await params;
  const c = getCity(state, city);
  if (!c) return {};
  const trad = c.estimates.traditional_burial;
  const crem = c.estimates.direct_cremation;
  const title = `How Much Does a Funeral Cost in ${c.name}? 2026 Burial and Cremation Estimates`;
  const description =
    `Average funeral cost in ${c.name}: modeled 2026 estimates are ${fmt(trad.point)} for a traditional burial, ${fmt(c.estimates.cremation_with_service.point)} for cremation with a service, and ${fmt(crem.point)} for direct cremation. Compare ranges, published local prices, and how ${c.name} compares with its state average.`;
  const url = `${SITE_URL}/funeral-costs/${state}/${city}/`;
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'article' },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}) {
  const { state, city } = await params;
  const c = getCity(state, city);
  const st = getState(state);
  if (!c || !st) notFound();
  const trad = c.estimates.traditional_burial;
  const stTrad = st.estimates.traditional_burial;
  const maxPoint = Math.max(...SERVICE_ORDER.map((k) => c.estimates[k].point));
  const diffPct = ((trad.point - stTrad.point) / stTrad.point) * 100;
  const diffWord = diffPct >= 0 ? 'above' : 'below';

  const faqs = [
    {
      q: `What is the average cost of cremation in ${c.name}?`,
      a: `Our modeled 2026 estimate for direct cremation in the ${c.metroName} metro is ${fmt(c.estimates.direct_cremation.point)} (illustrative range ${fmtRange(c.estimates.direct_cremation)}). Cremation with a viewing and service is modeled at ${fmt(c.estimates.cremation_with_service.point)} (range ${fmtRange(c.estimates.cremation_with_service)}). These figures exclude a cemetery niche or plot, an upgraded urn, and most cash-advance items.`,
    },
    ...c.cityFaqs,
    {
      q: `Are these real prices from ${c.name} funeral homes?`,
      a: `No. These are modeled estimates: the NFDA 2023 national median, adjusted to August 2026 dollars with the BLS funeral-expenses CPI and scaled by the BEA 2024 regional price parity for the ${c.metroName} metro (RPP ${c.rppAllItems.toFixed(1)}).${c.published ? ` Published provider prices for the metro are shown separately on this page (${c.published.source}) and are not blended into the modeled figures.` : ''} Treat the point figure as a planning midpoint and the range as the plausible spread, then request itemized General Price Lists from local funeral homes for real quotes.`,
    },
    {
      q: `What does the ${fmt(trad.point)} traditional-burial estimate include?`,
      a: `It follows the NFDA median's definition: basic services fee, removal and transfer, embalming and preparation, facilities and staff for viewing and ceremony, hearse, service car, memorial printed package, and a metal casket. It does not include the cemetery plot, opening and closing fees, a headstone, flowers, or obituary notices.`,
    },
    {
      q: `How do I get an exact price in ${c.name}?`,
      a: `Under the FTC Funeral Rule you have the right to an itemized General Price List from any funeral home, price information by phone without giving your name, and to buy only the goods and services you want. Call two to three ${c.name} providers, compare their GPLs line by line, and never sign under time pressure. See our guide to your rights under the FTC Funeral Rule.`,
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: `Funeral costs in ${st.name}`, url: `${SITE_URL}/funeral-costs/${state}/` },
        { name: `Funeral costs in ${c.name}`, url: `${SITE_URL}/funeral-costs/${state}/${city}/` },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link> › <Link href={`/funeral-costs/${state}/`}>Funeral costs in {st.name}</Link> › Funeral costs in {c.name}
        </nav>
        <h1>
          Funeral Costs in {c.name} <span className="modeled-tag">Modeled estimate</span>
        </h1>
        <Byline />
        <div className="answer-first">
          <strong>Quick answer:</strong> a traditional funeral with viewing and burial in {c.name}{' '}
          is modeled at <strong>{fmt(trad.point)}</strong> (range {fmtRange(trad)}), about{' '}
          {Math.abs(diffPct).toFixed(0)} percent {diffWord} the {st.name} state estimate of{' '}
          {fmt(stTrad.point)}. Direct cremation is modeled at{' '}
          <strong>{fmt(c.estimates.direct_cremation.point)}</strong>. These are modeled
          estimates, not surveyed prices or quotes, built from the NFDA 2023 national medians,
          inflated with the BLS funeral-expenses CPI, and adjusted by the {c.metroName}{' '}
          metro&apos;s BEA 2024 regional price parity ({c.rppAllItems.toFixed(1)}).
        </div>

        <h2>Modeled estimates by service type: {c.name}</h2>
        <p style={{ color: 'var(--muted)' }}>
          Bars are scaled to the most expensive option. Ranges are illustrative (±15%), not
          statistical confidence intervals. Excludes cemetery and cash-advance costs unless noted.
          Metro area: {c.metroName} (BEA GeoFIPS {c.geoFips}).
        </p>
        <div className="est-grid">
          {SERVICE_ORDER.map((k: ServiceKey, i) => {
            const e = c.estimates[k];
            const anchor = dataset.anchors[k];
            return (
              <div className={`est-card${i === 0 ? ' featured' : ''}`} key={k}>
                <div className="svc">
                  {anchor.label}
                  {anchor.assumption && <small>Stated assumption: no NFDA median exists</small>}
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
            <h3>{c.name} in context</h3>
            <ul>
              {c.context.map((x, i) => <li key={i}>{x}</li>)}
            </ul>
          </div>
          <div className="context-box">
            <h3>Local caveats</h3>
            <ul>
              {c.caveats.map((x, i) => <li key={i}>{x}</li>)}
            </ul>
          </div>
        </div>

        <h2>How {c.name} compares with the {st.name} average</h2>
        <p>
          The {st.name} state page models a traditional burial at{' '}
          <strong>{fmt(stTrad.point)}</strong> and direct cremation at{' '}
          <strong>{fmt(st.estimates.direct_cremation.point)}</strong>, using the state price
          parity of {st.rpp_all_items.toFixed(1)}. The {c.metroName} metro parity is{' '}
          {c.rppAllItems.toFixed(1)}, so this page models a traditional burial at{' '}
          <strong>{fmt(trad.point)}</strong> and direct cremation at{' '}
          <strong>{fmt(c.estimates.direct_cremation.point)}</strong>, about{' '}
          {Math.abs(diffPct).toFixed(0)} percent {diffWord} the state figures. Metro estimates
          run higher than statewide ones in most of the country because state figures blend in
          rural counties. If the death and services are outside the {c.name} metro, start from
          the <Link href={`/funeral-costs/${state}/`}>{st.name} state page</Link> instead. Our{' '}
          <Link href="/guides/funeral-costs-by-city/">funeral costs by city guide</Link> compares
          the 25 largest metros side by side.
        </p>

        {c.published && (
          <>
            <h2>Published direct cremation prices in {c.name}</h2>
            <p>
              Modeled estimates are a planning anchor, but this metro also has published provider
              prices. {c.published.source} lists direct cremation in the {c.metroName} metro
              {c.published.average ? <> at an average of <strong>{c.published.average}</strong></> : ''}
              {c.published.best ? <> from <strong>{c.published.best}</strong></> : ''}
              {c.published.highest ? <> to <strong>{c.published.highest}</strong></> : ''}.{' '}
              {c.published.note} Published prices describe specific providers, usually cremation
              specialists at the low end, while the modeled figures follow the NFDA median
              provider. Both are useful: the model for budgeting a typical arrangement, the
              published range for knowing how far comparison shopping can move the bill.
            </p>
          </>
        )}

        <h2>Cremation costs in {c.name}</h2>
        <p>
          The average cost of cremation in {c.name} depends on whether a service is held. Direct
          cremation, with no viewing or ceremony, is modeled at{' '}
          <strong>{fmt(c.estimates.direct_cremation.point)}</strong> (range{' '}
          {fmtRange(c.estimates.direct_cremation)}). Cremation with a viewing and service is
          modeled at <strong>{fmt(c.estimates.cremation_with_service.point)}</strong> (range{' '}
          {fmtRange(c.estimates.cremation_with_service)}). Use the{' '}
          <Link href="/calculator/">funeral cost calculator and estimator</Link> to add an urn,
          cemetery niche, death certificates, and other items, or read the national{' '}
          <Link href="/guides/cremation-cost-2026/">cremation cost guide</Link> for what each
          option includes.
        </p>

        <h2>What&apos;s included, and what isn&apos;t</h2>
        <p><strong>Included</strong> (per the NFDA median definition): basic services fee, removal and transfer,
        embalming and preparation, viewing and ceremony facilities and staff, hearse, service car, memorial
        printed package, and casket (burial) or cremation casket and urn (cremation with service).</p>
        <p><strong>Not included:</strong> cemetery plot, opening and closing, headstone or marker, burial
        vault (except the burial-with-vault row), flowers, obituary notices, and cash-advance items such as
        clergy honoraria or death certificates.</p>

        <h2>Official resources for {c.name} families</h2>
        <ul>
          <li>
            <Link href={`/funeral-costs/${state}/`}>Funeral costs in {st.name}</Link>: the state
            page lists the state licensing board, any statewide price survey, and {st.name} rules
            that apply in {c.name} too.
          </li>
          <li><a href="https://consumer.ftc.gov/articles/ftc-funeral-rule">FTC Funeral Rule: your federal rights</a></li>
          <li><Link href="/guides/funeral-rule-rights/">Our plain-English guide to the Funeral Rule</Link></li>
          <li><Link href="/guides/compare-funeral-homes/">How to compare funeral homes</Link> before you commit to one.</li>
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
