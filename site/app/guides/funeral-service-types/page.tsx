import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED, dataset, fmt } from '../../../lib/data';
import Link from 'next/link';

const A = dataset.anchors;

export const metadata: Metadata = {
  title: 'Funeral Service Types Explained: Burial, Cremation & Green Burial',
  description:
    'What actually happens in a traditional burial, burial with vault, cremation with service, direct cremation, direct burial, and green burial — with modeled national cost estimates for each.',
  alternates: { canonical: SITE_URL + '/guides/funeral-service-types/' },
  openGraph: {
    title: 'Funeral Service Types Explained: Burial, Cremation & Green Burial',
    description:
      'Plain-English guide to the six main funeral service types: what happens, what is included, and what each typically costs.',
    url: SITE_URL + '/guides/funeral-service-types/',
  },
};

interface ServiceType {
  key: string;
  name: string;
  tagline: string;
  anchorKey: string;
  assumption?: boolean;
  steps: string[];
  includes: string;
  goodToKnow: string;
}

const TYPES: ServiceType[] = [
  {
    key: 'traditional',
    name: 'Traditional funeral with burial',
    tagline: 'Viewing, ceremony, then burial — the full-service option most people picture.',
    anchorKey: 'traditional_burial',
    steps: [
      'The funeral home transfers the body into its care and prepares it — usually embalming, dressing, and cosmetology.',
      'A viewing or visitation is held, where family and friends gather with the body present in a casket.',
      'A funeral ceremony follows — religious or secular, at the funeral home, a place of worship, or graveside.',
      'A procession moves to the cemetery for a short committal service, and the casket is buried.',
    ],
    includes:
      'Basic services fee, embalming and preparation, viewing, funeral ceremony, hearse and procession, casket, cemetery plot, and opening/closing of the grave.',
    goodToKnow:
      'Embalming is not required by law in any state — it is chosen mainly when there is a viewing with the body present. If burial happens promptly, refrigeration is the usual alternative, and some states require it after a set number of hours.',
  },
  {
    key: 'vault',
    name: 'Funeral with burial vault',
    tagline: 'A traditional funeral plus an outer burial container around the casket.',
    anchorKey: 'burial_with_vault',
    steps: [
      'Everything in a traditional funeral, with one addition at the cemetery.',
      'Before the casket is lowered, a vault — usually concrete, sometimes steel — is placed in the grave, and the casket is set inside it.',
      'The vault lid is sealed, and the grave is closed as usual.',
    ],
    includes:
      'All traditional-funeral items plus the vault itself and its installation. Our modeled national estimate adds roughly $1,870 over a traditional burial.',
    goodToKnow:
      'Vaults keep the grave from sinking as the casket deteriorates — which is why most cemeteries require at least a basic grave liner. That is a cemetery rule, not a law: no state mandates vaults.',
  },
  {
    key: 'cremation-service',
    name: 'Cremation with memorial service',
    tagline: 'Cremation plus a ceremony — with or without the body present.',
    anchorKey: 'cremation_with_service',
    steps: [
      'The body is cremated at a crematory — either before or after the ceremony, depending on the family\u2019s choice.',
      'If the ceremony happens before cremation with the body present, families often use a rental casket; the body is cremated afterward in a simple container.',
      'If it happens after, the ceremony centers on the urn. This is usually called a memorial service.',
      'Ashes are then buried, placed in a columbarium niche, scattered where legal, or kept by the family.',
    ],
    includes:
      'Cremation fee, alternative container or casket, urn, the ceremony itself, and final disposition of the ashes (cemetery fees for burial or niche are separate).',
    goodToKnow:
      'You have the legal right to use a simple alternative container (unfinished wood, cardboard) for cremation instead of buying a casket. Scattering rules vary by state and locality — check before scattering on public land or at sea.',
  },
  {
    key: 'direct-cremation',
    name: 'Direct cremation',
    tagline: 'No viewing, no ceremony with the body present — the simplest and usually cheapest option.',
    anchorKey: 'direct_cremation',
    steps: [
      'The funeral home or crematory collects the body and handles required paperwork and permits.',
      'Cremation takes place within days, in a basic alternative container — no embalming, no viewing.',
      'The ashes are returned to the family in a simple container.',
      'Families often hold their own memorial later, anywhere they choose, at little or no cost.',
    ],
    includes:
      'Basic services fee, transfer of the body, the cremation itself, an alternative container, and a basic container for the ashes.',
    goodToKnow:
      'You will still need certified copies of the death certificate (usually $5–$35 each depending on the state) for banks, insurers, and property. Some crematories have mandatory waiting periods or authorization steps that add a day or two.',
  },
  {
    key: 'direct-burial',
    name: 'Direct burial',
    tagline: 'Burial without a viewing or funeral-home ceremony — the lowest-cost burial option.',
    anchorKey: 'direct_burial',
    steps: [
      'The funeral home collects the body; it is refrigerated rather than embalmed and placed in a simple casket.',
      'Burial happens shortly after death, without a viewing or ceremony at the funeral home.',
      'A graveside service can still be held at the cemetery — many families do.',
    ],
    includes:
      'Basic services fee, a simple casket, cemetery plot, and opening/closing of the grave.',
    goodToKnow:
      'Direct burial fits prompt-burial religious requirements (Jewish and Muslim traditions, for example) without the cost of a full ceremony. Cemetery fees — plot, opening/closing, and any required liner — are often the largest part of the bill, so compare cemeteries separately.',
  },
  {
    key: 'green',
    name: 'Green (natural) burial',
    tagline: 'No embalming, biodegradable materials, no vault — burial designed to return the body to the earth.',
    anchorKey: 'green_burial',
    assumption: true,
    steps: [
      'The body is not embalmed (or only non-toxic fluids are used) and is refrigerated instead.',
      'It is placed in a biodegradable casket — wicker, unfinished wood, cardboard — or a simple shroud.',
      'Burial takes place in a shallower grave with no vault, in a cemetery that permits it — often a conservation cemetery that preserves the land as habitat.',
      'Graves are typically marked with a natural stone or GPS rather than a conventional headstone.',
    ],
    includes:
      'Basic services fee, biodegradable casket or shroud, cemetery plot, and opening/closing. There is no vault and no embalming to pay for.',
    goodToKnow:
      'Availability is the main constraint: not every area has a certified green cemetery (the Green Burial Council certifies providers at three levels), though some conventional cemeteries offer hybrid green sections. Our $5,480 figure is an assumption — 60% of the traditional burial anchor — because no national survey tracks green burial prices. Treat it as a planning placeholder and get local quotes.',
  },
];

export default function ServiceTypesGuide() {
  const faqs = [
    {
      q: 'Is embalming required by law?',
      a: 'No. No state requires routine embalming. It is typically chosen when there is a viewing with the body present; otherwise refrigeration is the usual alternative. Be wary of any provider that claims embalming is legally required — under the FTC Funeral Rule, that claim is only allowed when it is actually true (for example, some states require it in narrow cases like interstate transport by common carrier).',
    },
    {
      q: 'Is a burial vault required by law?',
      a: 'No. Vaults and grave liners are required by many cemeteries as a matter of their own policy, to prevent graves from sinking. No state law mandates them. If a cemetery requires one, that cost belongs in your cemetery comparison, not necessarily your funeral-home bill.',
    },
    {
      q: 'What is the cheapest funeral option?',
      a: 'Direct cremation is typically the least expensive arrangement — our modeled national estimate is $3,030. Body donation to science through a willed-body program can cost the family nothing, since programs usually cover transport and cremation, though acceptance is determined at the time of death and an open-casket funeral is not possible.',
    },
    {
      q: 'Can I arrange a funeral without a funeral home?',
      a: 'In some states, yes — families can handle transfers, paperwork, and burial themselves, sometimes called a family-directed funeral. Laws vary widely by state: some require a licensed funeral director for certain steps. Check your state\u2019s rules before assuming.',
    },
    {
      q: 'Does green burial always cost less than conventional burial?',
      a: 'Often, but not always. Skipping embalming and the vault removes real costs, but green cemetery plots — especially in conservation cemeteries — can be priced at a premium. Our $5,480 national figure is an assumption, not a surveyed price, so local quotes matter more here than for any other service type.',
    },
    {
      q: 'How do religious traditions affect the choice?',
      a: 'They often decide it. Jewish and Muslim traditions generally require prompt burial without embalming or cremation; Catholic teaching prefers burial but permits cremation, with ashes to be buried or interred rather than scattered; Hindu tradition favors cremation, usually within 24 hours; Buddhist practice commonly includes cremation with rites that vary by school. Our calculator includes optional tradition-based adjustments for five faiths — see the calculator page for details.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Funeral service types explained', url: SITE_URL + '/guides/funeral-service-types/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Funeral service types</nav>
      <JsonLd data={articleJsonLd({
        title: 'Funeral Service Types Explained: Burial, Cremation & Green Burial',
        description: 'What actually happens in a traditional burial, burial with vault, cremation with service, direct cremation, direct burial, and green burial — with modeled national cost estimates for each.',
        url: SITE_URL + '/guides/funeral-service-types/',
        datePublished: '2026-09-23',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <h1>Funeral service types, explained</h1>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> there are six main ways a funeral can be arranged —
          traditional burial, burial with a vault, cremation with a service, direct cremation,
          direct burial, and green burial. They differ in two things: what happens to the body,
          and whether there is a ceremony. Direct cremation ({fmt(A.direct_cremation.value)}) is
          typically the least expensive; a traditional funeral with burial ({fmt(A.traditional_burial.value)})
          is the full-service baseline. Every figure below is a modeled national estimate in
          August 2026 dollars — <Link href="/methodology/">see how we built them</Link>.
        </p>
        <p className="updated">National estimates: NFDA 2023 medians adjusted to August 2026 dollars via BLS CPI. Last updated {LAST_UPDATED}.</p>

        <h2>The six service types at a glance</h2>
        <div className="table-scroll">
          <table className="data">
            <caption>Six service types with modeled national estimates (August 2026 dollars).</caption>
            <thead>
              <tr>
                <th>Service type</th>
                <th>What happens</th>
                <th>National estimate</th>
              </tr>
            </thead>
            <tbody>
              {TYPES.map((t) => (
                <tr key={t.key}>
                  <td><a href={'#' + t.key}>{t.name}</a></td>
                  <td>{t.tagline}</td>
                  <td><strong>{fmt(A[t.anchorKey].value)}</strong>{t.assumption ? ' *' : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 13.5, color: 'var(--muted)' }}>* Green burial is an assumption (60% of the traditional burial anchor), not a surveyed national price. See below.</p>

        {TYPES.map((t, i) => (
          <section key={t.key} id={t.key} aria-label={t.name}>
            <h2>{i + 1}. {t.name}</h2>
            <p><em>{t.tagline}</em></p>
            <p><strong>Modeled national estimate: {fmt(A[t.anchorKey].value)}</strong>
              {t.assumption ? ' (assumption — see note below)' : ' (NFDA 2023 median in August 2026 dollars)'}
            </p>
            <h3>What happens, step by step</h3>
            <ol>
              {t.steps.map((s, j) => <li key={j}>{s}</li>)}
            </ol>
            <h3>What the price typically includes</h3>
            <p>{t.includes}</p>
            <h3>Good to know</h3>
            <p>{t.goodToKnow}</p>
          </section>
        ))}

        <h2>How to choose</h2>
        <p>Four questions narrow it down fast:</p>
        <ol>
          <li><strong>Budget.</strong> If cost is the binding constraint, direct cremation is the usual floor. Our <Link href="/calculator/">calculator</Link> builds a line-item estimate for any of the six.</li>
          <li><strong>Should the body be present?</strong> Viewings and body-present ceremonies point to traditional burial or cremation-with-service; otherwise direct options plus a separate memorial work well.</li>
          <li><strong>Religious requirements.</strong> Faith often decides the matter — see the FAQ above and the tradition toggles in our calculator.</li>
          <li><strong>Environmental concerns.</strong> Green burial minimizes the footprint; cremation uses significant energy; conventional burial involves embalming chemicals and concrete vaults.</li>
        </ol>

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
          <Link href="/guides/funeral-glossary/">Funeral terms glossary →</Link>
          {' · '}
          <Link href="/guides/funeral-rule-rights/">Your rights under the FTC Funeral Rule →</Link>
        </p>
      </div>
    </>
  );
}
