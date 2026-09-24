import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, VINTAGE_LABEL, dataset, fmt } from '../../../lib/data';
import Link from 'next/link';

const A = dataset.anchors;

export const metadata: Metadata = {
  title: "Green Burial & Composting: Costs and Where It's Legal",
  description:
    'What green burial and human composting (natural organic reduction) cost, the 14 states where human composting is legal as of 2026, and how to shop for both.',
  alternates: { canonical: SITE_URL + '/guides/green-burial-composting/' },
  openGraph: {
    title: "Green Burial & Composting: Costs and Where It's Legal",
    description:
      'Plain-English guide to green burial and human composting: what happens, what each typically costs, and where natural organic reduction is legal.',
    url: SITE_URL + '/guides/green-burial-composting/',
  },
};

const COMPOST_STATES: { state: string; year: string }[] = [
  { state: 'Washington', year: '2019' },
  { state: 'Colorado', year: '2021' },
  { state: 'Oregon', year: '2021' },
  { state: 'Vermont', year: '2022' },
  { state: 'California', year: '2022' },
  { state: 'New York', year: '2022' },
  { state: 'Nevada', year: '2023' },
  { state: 'Arizona', year: '2024' },
  { state: 'Maryland', year: '2024' },
  { state: 'Delaware', year: '2024' },
  { state: 'Minnesota', year: '2024' },
  { state: 'Maine', year: '2024' },
  { state: 'Georgia', year: '2025' },
  { state: 'New Jersey', year: '2025' },
];

export default function GreenBurialCompostingGuide() {
  const faqs = [
    {
      q: 'Is green burial legal in every state?',
      a: 'There is no law against green burial itself. No state requires embalming or a burial vault. The practical constraint is finding a cemetery that permits it — one that will accept an unembalmed body in a biodegradable container with no vault. Some conventional cemeteries have hybrid green sections where green-burial rules apply to part of the grounds.',
    },
    {
      q: 'What exactly is natural organic reduction?',
      a: 'It is the legal term for human composting. The body is laid in a closed vessel with wood chips, straw, and alfalfa, where microbial activity breaks it down over about a month. Implants and other inorganic materials are removed and recycled first. After resting and screening — usually around two months in total — the result is about a cubic yard of soil.',
    },
    {
      q: 'What happens to the soil from human composting?',
      a: 'Typically, the family decides: keep some or all of it for planting trees, a memorial garden, or potted plants, or donate it to a conservation project — providers usually arrange the donation if the family declines the soil. State regulations set limits on what you can do with it, so ask the provider what is permitted where you live.',
    },
    {
      q: 'Can I choose human composting if it is not legal in my state?',
      a: 'Usually, yes. Providers such as Recompose and Earth Funeral serve families from most states by coordinating transport to a licensed facility — the person dies in one state, is composted where it is legal, and the soil is returned. The provider typically handles transportation, death certificates, and permits. Ask exactly what transport adds to the price, since distance is usually the main cost driver.',
    },
    {
      q: 'Is human composting cheaper than a traditional burial?',
      a: 'Published 2026 provider prices run roughly $5,000–$7,000 before out-of-area transport — comparable to our modeled cremation-with-service figure and below a full traditional burial. As with any funeral service, pricing varies by provider and by distance, so get the written price list before deciding.',
    },
    {
      q: 'Does green burial fit my religious tradition?',
      a: 'It often aligns well with traditions that require prompt burial without embalming — Jewish and Muslim practice, for example. Cremation is prohibited in some traditions: Islam and Orthodox Judaism prohibit it, Catholic teaching prefers burial but permits cremation with ashes buried rather than scattered, and Hindu tradition favors cremation within about a day. Human composting is newer than most religious rulings on cremation, so when faith is the deciding factor, consult your religious authority before planning.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Green burial & human composting', url: SITE_URL + '/guides/green-burial-composting/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Green burial &amp; human composting</nav>
      <JsonLd data={articleJsonLd({
        title: "Green Burial & Composting: Costs and Where It's Legal",
        description: 'What green burial and human composting (natural organic reduction) cost, the 14 states where human composting is legal as of 2026, and how to shop for both.',
        url: SITE_URL + '/guides/green-burial-composting/',
        datePublished: '2026-09-24',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <h1>Green Burial &amp; Human Composting: Costs and Where They&apos;re Legal</h1>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> Green burial means burying a body without embalming, in a
          biodegradable casket or shroud, with no vault — the body returns to the earth. Human
          composting (natural organic reduction) goes a step further: the body rests in a vessel of
          wood chips, straw, and alfalfa while microbes turn it into soil over about a month. As of
          2026, human composting is legal in 14 states; anywhere else, providers can usually arrange
          transport to a licensed facility. Our modeled national figure for green burial is{' '}
          <strong>{fmt(A.green_burial.value)}</strong> — a stated assumption equal to 60% of our
          traditional-burial anchor ({fmt(A.traditional_burial.value)}), not a surveyed price. Human
          composting prices vary by provider; published 2026 prices run roughly $5,000–$7,000.
        </p>
        <p className="updated">Green burial figure is an assumption (60% of the traditional-burial anchor). National estimates: NFDA 2023 medians adjusted to August 2026 dollars via BLS CPI. Last updated {LAST_UPDATED}.</p>

        <h2>Green burial, in plain English</h2>
        <p>
          A conventional burial layers chemicals and concrete between the body and the earth: embalming
          fluids, a metal or hardwood casket, and a concrete vault or grave liner. A green burial strips
          all of that away. The body is not embalmed — refrigeration holds it instead, and some families
          use non-toxic fluids for a brief viewing. It goes into the ground in a casket made to break
          down — wicker, unfinished pine, cardboard — or in a simple shroud.
        </p>
        <p>
          The grave is dug shallower than a conventional one, and no vault or liner is installed, so the
          body contacts the soil directly. Graves are typically marked with a natural fieldstone, a GPS
          marker, or a communal memorial rather than a quarried headstone.
        </p>
        <p>
          What you don&apos;t pay for: embalming, an expensive casket, and the vault. What you still pay
          for: the funeral home&apos;s basic services, the biodegradable container, the cemetery plot, and
          opening/closing the grave — the cemetery fees are usually the largest part of the bill.
        </p>

        <h2>What a green cemetery is — and how it differs</h2>
        <p>
          A green cemetery is a burial ground dedicated to this approach: bodies buried whole and
          unembalmed in biodegradable containers, no vaults allowed, and the landscape kept as natural as
          possible — native plants, minimal mowing, sometimes protected as wildlife habitat. Conservation
          cemeteries take it one step further, using burial fees to buy and protect land outright.
        </p>
        <p>
          That differs from a conventional cemetery section in almost every detail: conventional cemeteries
          usually require a vault or liner to keep graves from sinking, permit embalming chemicals, and
          maintain manicured lawns. The Green Burial Council certifies green providers at three levels, and
          some conventional cemeteries offer hybrid green sections where green-burial rules apply to part
          of the grounds.
        </p>
        <p>
          Availability is the real constraint. Not every region has a certified green cemetery, so families
          sometimes travel — or choose a conventional cemetery&apos;s green section nearby. Plan around what
          exists where you live, not around the ideal.
        </p>

        <h2>What green burial costs (read the label)</h2>
        <p>
          Our modeled national figure for green burial is <strong>{fmt(A.green_burial.value)}</strong> in
          August 2026 dollars — and it is a <strong>stated assumption, not a surveyed price</strong>: 60%
          of our traditional-burial anchor of {fmt(A.traditional_burial.value)}, which is itself the NFDA
          2023 median of $8,300 adjusted by the 1.1016 BLS funeral-expenses CPI factor. No national survey
          tracks green burial prices, so we publish the assumption and label it everywhere it appears —
          including in our <Link href="/calculator/">calculator</Link>.
        </p>
        <p>
          For context: our modeled traditional burial is {fmt(A.traditional_burial.value)}, and cremation
          with a service is {fmt(A.cremation_with_service.value)}. Green burial usually comes in below
          conventional burial because you skip embalming, the vault, and the pricey casket — but green
          plots themselves can carry a premium, especially at conservation cemeteries. Treat the{' '}
          {fmt(A.green_burial.value)} as a planning placeholder and get local quotes before counting on it.{' '}
          <Link href="/methodology/">See how we built every figure</Link>.
        </p>

        <h2>Human composting (natural organic reduction), explained</h2>
        <p>
          Human composting — called natural organic reduction, or NOR, in state laws — is a third path: not
          burial, not flame cremation. The body is laid in a closed vessel filled with organic material —
          wood chips, straw, and alfalfa — where microbial activity breaks it down over about a month.
          Implants, pacemakers, and other inorganic materials are removed and recycled first. After resting
          and screening, the full timeline is usually around two months from laying-in to finished soil.
        </p>
        <p>
          One body yields roughly a cubic yard of soil — enough to fill the bed of a pickup truck. The
          family decides what happens to it: keep some or all of it for planting trees, a memorial garden,
          or potted plants, or donate it to a conservation project — providers usually arrange the donation
          if the family declines the soil. State regulations set limits on how the soil may be used, so ask
          the provider what is permitted where you live.
        </p>

        <h2>Where human composting is legal (as of 2026)</h2>
        <p>
          Fourteen states have legalized natural organic reduction, with Washington first in 2019. The list
          below reflects state trackers current to September 2026 — the law in this area keeps changing, so
          confirm your state&apos;s status before planning.
        </p>
        <div className="table-scroll">
          <table className="data">
            <caption>States where human composting (natural organic reduction) is legal, as of September 2026.</caption>
            <thead>
              <tr>
                <th>State</th>
                <th>Legalized</th>
              </tr>
            </thead>
            <tbody>
              {COMPOST_STATES.map((s) => (
                <tr key={s.state}>
                  <td>{s.state}</td>
                  <td>{s.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Two caveats. First, <strong>legal is not the same as operational</strong>. California legalized
          NOR in 2022, but facilities can&apos;t operate until January 2027 — a five-year gap while
          regulators wrote the rules on licensing, temperatures, and record-keeping. Minnesota&apos;s 2024
          law took effect in July 2025, and Georgia&apos;s 2025 law took effect that July. So check two
          things: whether your state has a law, and whether a licensed facility is actually serving families
          there.
        </p>
        <p>
          Second, the list keeps growing. Rhode Island&apos;s bill passed the House in May 2026 and moved to
          the Senate; Illinois and Utah had live legislation in 2026; Ohio&apos;s sat in committee;
          Oklahoma&apos;s passed both chambers before a 2026 veto. Expect the map to change — and treat any
          state list older than a few months with suspicion.
        </p>

        <h2>Can I be composted if my state isn&apos;t legal yet?</h2>
        <p>
          Usually, yes. Providers such as Recompose and Earth Funeral serve families from most states by
          coordinating transport to a licensed facility: the person dies in one state, is composted where it
          is legal, and the soil is returned. The provider typically handles transportation, death
          certificates, and permits as part of the arrangement. Ask exactly what transport adds to the
          price, since distance is usually the main cost driver.
        </p>

        <h2>What human composting costs</h2>
        <p>
          No national survey tracks NOR prices, so published provider prices are the benchmark. In 2026,
          Recompose — the Seattle provider that pioneered the process — listed $7,000 for its full service:
          transport within Washington and the Portland metro area, funeral director services, paperwork, the
          transformation itself, and the soil packaged for pickup or shipment. Earth Funeral, which opened a
          Maryland facility in 2026, charges about $6,000, according to The Banner&apos;s May 2026 coverage.
        </p>
        <p>
          So a realistic 2026 range is roughly <strong>$5,000–$7,000</strong> before out-of-area transport —
          comparable to our modeled cremation-with-service figure of {fmt(A.cremation_with_service.value)}
          and below a full traditional burial at {fmt(A.traditional_burial.value)}. Pricing varies by
          provider and by how far the body travels, so get the provider&apos;s written price list before
          deciding.
        </p>

        <h2>Your rights when shopping for either option</h2>
        <p>
          The FTC Funeral Rule covers providers of funeral goods and services — including human composting
          companies, which function as funeral providers. That means they must give you prices over the
          phone and a written General Price List when you visit in person. Cemeteries that only sell burial
          plots are generally outside the Rule, but ask a green cemetery for a written price list anyway — a
          reputable one will hand it over. If anyone claims embalming or a vault is legally required, know
          that no state mandates either, and the Rule forbids providers from saying something is required
          when it isn&apos;t. <Link href="/guides/funeral-rule-rights/">Read your rights under the FTC Funeral Rule</Link>.
        </p>

        <h2>Alternatives worth considering</h2>
        <p>
          Green burial and composting aren&apos;t for everyone. Body donation to science through a
          willed-body program typically costs the family nothing — programs usually cover transport and
          cremation — though acceptance is decided at the time of death and an open-casket funeral
          isn&apos;t possible. And the conventional options remain: see{' '}
          <Link href="/guides/funeral-service-types/">the six service types explained</Link>, the{' '}
          <Link href="/guides/funeral-cost-2026-breakdown/">full cost breakdown</Link>, or the{' '}
          <Link href="/guides/funeral-glossary/">funeral terms glossary</Link> if the terminology is new.
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
          <Link href="/guides/funeral-rule-rights/">Your rights under the FTC Funeral Rule →</Link>
          {' · '}
          <Link href="/guides/funeral-glossary/">Funeral terms glossary →</Link>
          {' · '}
          <Link href="/methodology/">Methodology →</Link>
        </p>
        <p className="updated">{VINTAGE_LABEL}. Last updated {LAST_UPDATED}.</p>
      </div>
    </>
  );
}
