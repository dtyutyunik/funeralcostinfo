import type { Metadata } from 'next';
import JsonLd, { breadcrumbJsonLd } from '../../components/JsonLd';
import { SITE_URL, LAST_UPDATED } from '../../lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Guides — Funeral Costs, Planning & Your Rights',
  description:
    'Plain-English funeral guides: 2026 cost breakdowns, state-by-state estimates, cremation and burial costs, paying for a funeral, what to do when someone dies, and your rights under the Funeral Rule.',
  alternates: { canonical: SITE_URL + '/guides/' },
  openGraph: {
    title: 'Guides — Funeral Costs, Planning & Your Rights',
    description:
      'Independent, plain-English funeral guides from FuneralCostInfo: costs, planning checklists, and consumer rights.',
    url: SITE_URL + '/guides/',
  },
};

const GROUPS: { heading: string; guides: { slug: string; title: string; blurb: string }[] }[] = [
  {
    heading: 'Costs & data',
    guides: [
      {
        slug: 'funeral-cost-2026-breakdown',
        title: 'How Much Does a Funeral Cost in 2026? The Full Breakdown',
        blurb: 'Modeled national estimates for all six service types, what is included and excluded, and why quotes vary so much.',
      },
      {
        slug: 'funeral-costs-by-state-2026',
        title: 'Funeral Costs by State 2026: All 50 States + D.C.',
        blurb: 'Every jurisdiction compared side by side, with modeled traditional-burial and direct-cremation figures.',
      },
      {
        slug: 'cremation-cost-2026',
        title: 'How Much Does Cremation Cost in 2026?',
        blurb: 'Cremation with a service vs. direct cremation: what each includes and what drives the price.',
      },
      {
        slug: 'burial-plot-costs',
        title: 'How Much Does a Burial Plot Cost?',
        blurb: 'The cemetery bill is separate from the funeral home: plots, opening and closing, and perpetual care.',
      },
      {
        slug: 'headstone-costs',
        title: 'How Much Does a Headstone Cost? Markers vs. Monuments',
        blurb: 'Flat markers vs. upright monuments, engraving, installation, and the veteran headstone benefit.',
      },
      {
        slug: 'why-funeral-cost-figures-disagree',
        title: 'Why Funeral Cost Figures Disagree',
        blurb: '2023 vs. 2026 dollars, medians vs. averages, and surveyed prices vs. modeled estimates — explained.',
      },
    ],
  },
  {
    heading: 'Planning',
    guides: [
      {
        slug: 'when-someone-dies-checklist',
        title: 'What to Do When Someone Dies: The First 48 Hours',
        blurb: 'A calm, ordered checklist: pronouncement, who to call, choosing a funeral home, and paperwork.',
      },
      {
        slug: 'compare-funeral-homes',
        title: 'How to Compare Funeral Homes & Read the Price List',
        blurb: 'Your Funeral Rule rights, how to compare General Price Lists line by line, and red flags.',
      },
      {
        slug: 'paying-for-a-funeral',
        title: 'How to Pay for a Funeral: VA, Social Security & Aid',
        blurb: 'VA burial benefits, the $255 Social Security payment, FEMA limits, county aid, and life insurance.',
      },
      {
        slug: 'funeral-service-types',
        title: 'Funeral Service Types Explained',
        blurb: 'Traditional burial, burial with vault, cremation with service, direct cremation, direct burial, green burial.',
      },
    ],
  },
  {
    heading: 'Rights & terms',
    guides: [
      {
        slug: 'funeral-rule-rights',
        title: 'Your Rights Under the FTC Funeral Rule',
        blurb: 'Prices by phone, the General Price List, itemized statements, and what no one can require you to buy.',
      },
      {
        slug: 'funeral-glossary',
        title: 'Funeral Glossary in Plain English',
        blurb: 'Embalming, vaults, caskets, GPLs, cash advances and more — about 30 terms, no jargon.',
      },
    ],
  },
];

export default function GuidesIndex() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Guides', url: SITE_URL + '/guides/' },
      ])} />
      <div className="wrap prose">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> › Guides</nav>
        <h1 style={{ marginTop: 0 }}>Guides</h1>
        <p>
          Independent, plain-English guides to funeral costs, planning, and your rights.
          Every price on this site carries its source — see our <Link href="/methodology/">methodology</Link> for
          how the estimates are built.
        </p>
        {GROUPS.map((g) => (
          <div key={g.heading}>
            <h2>{g.heading}</h2>
            <ul>
              {g.guides.map((guide) => (
                <li key={guide.slug}>
                  <Link href={`/guides/${guide.slug}/`}><strong>{guide.title}</strong></Link>
                  <br />{guide.blurb}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="updated">Last updated {LAST_UPDATED}.</p>
      </div>
    </>
  );
}
