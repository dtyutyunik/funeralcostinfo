import type { Metadata } from 'next';
import JsonLd, { articleJsonLd, faqJsonLd, breadcrumbJsonLd } from '../../../components/JsonLd';
import Byline from '../../../components/Byline';
import { SITE_URL, LAST_UPDATED } from '../../../lib/data';
import Link from 'next/link';
import GuideHero from '../../../components/GuideHero';
import RelatedGuides from '../../../components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Funeral Terms Glossary: Embalming, Vaults, Caskets & More in Plain English',
  description:
    'What does embalming actually involve? What is a burial vault, a grave liner, a columbarium? Plain-English definitions of the funeral terms you will see on price lists.',
  alternates: { canonical: SITE_URL + '/guides/funeral-glossary/' },
  openGraph: {
    title: 'Funeral Terms Glossary: Embalming, Vaults, Caskets & More in Plain English',
    description:
      'Plain-English definitions of funeral terms — embalming, vaults, caskets, urns, columbariums, GPLs, and more.',
    url: SITE_URL + '/guides/funeral-glossary/',
  },
};

interface Term {
  t: string;
  d: string;
}

interface Group {
  id: string;
  name: string;
  intro: string;
  terms: Term[];
}

const GROUPS: Group[] = [
  {
    id: 'preparing-the-body',
    name: 'Preparing the body',
    intro: 'What happens to the body between death and the funeral or cremation.',
    terms: [
      {
        t: 'Embalming',
        d: 'A preservation process: blood is drained from the body and replaced with a preservative solution (usually formaldehyde-based), and the body\u2019s surfaces are disinfected and treated. Its main purpose is temporary — to slow decomposition long enough for a viewing with the body present. It does not preserve the body permanently. No state requires embalming by law for a routine burial; when there is no viewing, refrigeration is the usual alternative.',
      },
      {
        t: 'Refrigeration',
        d: 'Keeping the body cooled (typically around 36–39\u00b0F) to slow decomposition without chemicals. The standard alternative to embalming when there is no viewing, and what most direct cremation and direct burial providers use.',
      },
      {
        t: 'Restorative art / cosmetology',
        d: 'The dressing, hairstyling, and cosmetic work done so the body looks natural for a viewing — part of what \u201cpreparation of the body\u201d means on a price list.',
      },
      {
        t: 'Autopsy',
        d: 'A medical examination of the body to determine cause of death. Ordered by a coroner or medical examiner in certain cases, or requested by a family. It can delay funeral arrangements by a day or more and may make embalming or viewing more complicated — ask the provider.',
      },
    ],
  },
  {
    id: 'containers',
    name: 'Caskets, urns & vaults',
    intro: 'What the body or ashes go in — and what goes around the casket underground.',
    terms: [
      {
        t: 'Casket vs. coffin',
        d: 'A casket is rectangular with a hinged lid — the standard American funeral container. A coffin is the older hexagonal shape, wider at the shoulders and narrower at the feet. On U.S. price lists you will almost always see \u201ccasket.\u201d',
      },
      {
        t: 'Alternative container',
        d: 'A simple, unfinished container — often cardboard, unfinished wood, or fiberboard — used instead of a casket for cremation. You have the legal right to use one, and crematories cannot require you to buy a casket.',
      },
      {
        t: 'Rental casket',
        d: 'A casket with a removable interior liner, rented for a viewing or funeral service and then reused. The body is cremated afterward in a simple container. A common way to have a body-present ceremony before cremation without buying a casket.',
      },
      {
        t: 'Urn',
        d: 'A container for cremated remains (\u201cash\u201d). Urns range from simple plastic or cardboard boxes included with cremation to decorative metal, wood, or ceramic vessels. The funeral home may not charge a handling fee if you bring your own.',
      },
      {
        t: 'Burial vault',
        d: 'An outer container — usually concrete, sometimes steel — placed in the grave around the casket. It keeps the grave from sinking as the casket deteriorates. Most cemeteries require at least a basic version (see grave liner); no state law requires one.',
      },
      {
        t: 'Grave liner',
        d: 'A simpler, usually unsealed concrete box that serves the same ground-support purpose as a vault. Many cemeteries accept a liner as their minimum requirement, and it typically costs less than a sealed vault.',
      },
      {
        t: 'Shroud',
        d: 'A simple cloth wrapping used instead of a casket — required in Muslim burial, common in Jewish burial, and the standard choice for green burial.',
      },
    ],
  },
  {
    id: 'resting-places',
    name: 'Where remains rest',
    intro: 'Cemetery options for bodies and ashes.',
    terms: [
      {
        t: 'Grave / plot',
        d: 'The patch of cemetery ground where a casket or urn is buried. Sold by the cemetery (not the funeral home), with the price usually covering only the land itself.',
      },
      {
        t: 'Opening and closing',
        d: 'The cemetery\u2019s fee for digging the grave and closing it after burial — a separate line item from the plot, and often one of the largest cemetery charges.',
      },
      {
        t: 'Mausoleum',
        d: 'An above-ground building with chambers for caskets — chosen by families who prefer not to bury below ground. A single chamber is called a crypt.',
      },
      {
        t: 'Columbarium',
        d: 'A structure — a wall, room, or building — holding niches for urns. The cremation equivalent of a mausoleum.',
      },
      {
        t: 'Niche',
        d: 'An individual compartment in a columbarium that holds one or two urns, usually sealed with a plaque.',
      },
      {
        t: 'Headstone / marker / monument',
        d: 'The memorial placed at the grave. A headstone stands upright; a marker (or \u201cflat marker\u201d) lies flush with the ground; a monument is a larger, often family-sized memorial. Cemeteries set their own rules on size and material — and their perpetual-care funds generally do not cover maintaining your marker.',
      },
      {
        t: 'Scattering',
        d: 'Distributing cremated remains — at sea, in a memorial garden, or on private land. Rules vary by state and locality: some places require permits or set distance-from-shore minimums, so check before you scatter.',
      },
      {
        t: 'Perpetual (endowment) care',
        d: 'A trust fund, required by most states, into which the cemetery deposits part of every plot sale. Only the fund\u2019s income may be spent, on mowing, landscaping, and common-ground upkeep — forever, in theory. It is usually baked into the plot price and does not cover individual markers.',
      },
    ],
  },
  {
    id: 'ceremonies',
    name: 'Ceremonies & gatherings',
    intro: 'The events around the funeral — and what each one is called.',
    terms: [
      {
        t: 'Visitation / viewing / wake',
        d: 'A gathering before the funeral where family and friends can see the body (viewing) and offer condolences. \u201cWake\u201d traditionally means an evening gathering, often with a more social tone.',
      },
      {
        t: 'Funeral service',
        d: 'A ceremony with the body present (in a casket) — religious or secular — held at a funeral home, place of worship, or graveside.',
      },
      {
        t: 'Memorial service',
        d: 'A ceremony held without the body present — usually after cremation, with the urn present or not. Functionally like a funeral service minus the casket.',
      },
      {
        t: 'Graveside / committal service',
        d: 'The short service at the cemetery where the body is committed to burial — sometimes the entire ceremony for a direct burial.',
      },
      {
        t: 'Eulogy',
        d: 'A speech celebrating the life of the person who died, usually given by family or close friends during the service.',
      },
      {
        t: 'Pallbearer',
        d: 'One of the people who carry the casket — traditionally six, usually family members or close friends.',
      },
      {
        t: 'Celebrant / officiant',
        d: 'The person who leads the ceremony. A religious officiant (clergy, imam, rabbi) for faith services; a professional celebrant for secular or personalized ceremonies. An honorarium of roughly $150–$800 is customary, depending on affiliation.',
      },
      {
        t: 'Hearse',
        d: 'The vehicle that carries the casket from the funeral home to the cemetery — billed as a separate line item (\u201chearse\u201d or \u201cfuneral coach\u201d).',
      },
    ],
  },
  {
    id: 'money-paperwork',
    name: 'Money & paperwork',
    intro: 'The price-list terms and documents you will encounter.',
    terms: [
      {
        t: 'General Price List (GPL)',
        d: 'The itemized list of every good and service a funeral home offers, with prices. Under the FTC Funeral Rule, the funeral home must give you a written GPL to keep when you visit in person — take it home and compare it with other providers.',
      },
      {
        t: 'Basic services fee',
        d: 'The one charge you cannot decline: a flat fee covering the funeral home\u2019s overhead — staff, permits, planning, and coordination. Everything else on the GPL is optional.',
      },
      {
        t: 'Cash advance items',
        d: 'Third-party goods and services the funeral home buys on your behalf and passes through at cost (sometimes with a markup they must disclose): cemetery fees, obituary notices, flowers, clergy honoraria, death certificates, musicians.',
      },
      {
        t: 'At-need vs. pre-need',
        d: '\u201cAt-need\u201d means arranging after a death has occurred. \u201cPre-need\u201d means planning and often prepaying before death. Pre-need contracts vary widely in what they lock in — read exactly which prices are guaranteed.',
      },
      {
        t: 'Death certificate',
        d: 'The official legal record of death, needed by banks, insurers, and property offices. Copies cost roughly $5–$35 each depending on the state, and families typically need several. Order more than you think you need — reordering later is slower.',
      },
      {
        t: 'Obituary / death notice',
        d: 'The published announcement. A short death notice in a local paper can run $100–$400; longer tributes in major metro papers routinely reach $800 or more. Online memorial pages are often free.',
      },
    ],
  },
];

export default function GlossaryGuide() {
  const faqs = [
    {
      q: 'Do I have to pay for embalming if I don\u2019t want it?',
      a: 'No. Embalming is optional, and the basic services fee cannot be used to smuggle it in — it must appear as its own line item you agree to. If a provider implies it is legally required when it is not, that is a red flag under the FTC Funeral Rule.',
    },
    {
      q: 'What is the difference between a funeral service and a memorial service?',
      a: 'A funeral service has the body present in a casket; a memorial service does not — it is usually held after cremation, with the urn present or not. The distinction matters for cost: a memorial service skips embalming, viewing, and often the casket.',
    },
    {
      q: 'The price list mentions \u201cprofessional services\u201d — what is that?',
      a: 'That is usually the basic services fee by another name: the funeral home\u2019s non-declinable overhead charge for staff, planning, permits, and coordination. It is the one fee you cannot remove, so compare it across providers.',
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
        { name: 'Funeral terms glossary', url: SITE_URL + '/guides/funeral-glossary/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides › Funeral terms glossary</nav>
      <JsonLd data={articleJsonLd({
        title: 'Funeral Terms Glossary: Embalming, Vaults, Caskets & More in Plain English',
        description: 'What does embalming actually involve? What is a burial vault, a grave liner, a columbarium? Plain-English definitions of the funeral terms you will see on price lists.',
        url: SITE_URL + '/guides/funeral-glossary/',
        datePublished: '2026-09-23',
        dateModified: LAST_UPDATED,
        siteUrl: SITE_URL,
      })} />
        <GuideHero slug="funeral-glossary" imageAlt="Funeral terms, in plain English"><h1>Funeral terms, in plain English</h1></GuideHero>
        <Byline />

        <p className="answer-first">
          <strong>Quick answer:</strong> funeral price lists are full of jargon — embalming, vaults,
          liners, columbariums, cash advance items. This glossary defines the terms you will
          actually encounter, in plain language, so you can read a General Price List with
          confidence. For what each type of funeral involves and costs, see our{' '}
          <Link href="/guides/funeral-service-types/">service types guide</Link>.
        </p>
        <p className="updated">Educational definitions — not legal or financial advice. Last updated {LAST_UPDATED}.</p>

        <h2>Jump to a section</h2>
        <ul>
          {GROUPS.map((g) => (
            <li key={g.id}><a href={'#' + g.id}>{g.name}</a> — {g.intro}</li>
          ))}
        </ul>

        {GROUPS.map((g) => (
          <section key={g.id} id={g.id} aria-label={g.name}>
            <h2>{g.name}</h2>
            <p><em>{g.intro}</em></p>
            {g.terms.map((term) => (
              <div key={term.t}>
                <h3>{term.t}</h3>
                <p>{term.d}</p>
              </div>
            ))}
          </section>
        ))}

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
          <Link href="/guides/funeral-service-types/">Funeral service types explained →</Link>
          {' · '}
          <Link href="/calculator/">Build your line-item estimate →</Link>
          {' · '}
          <Link href="/guides/funeral-rule-rights/">Your rights under the FTC Funeral Rule →</Link>
        </p>
      <RelatedGuides currentSlug="funeral-glossary" />
      </div>
    </>
  );
}
