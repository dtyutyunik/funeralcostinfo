// Shared metadata for the guides library (blog-style index + related guides).
// Presentation-only: titles/blurbs mirror site/app/guides/page.tsx. No data or model facts here.

export type GuideGroup = 'Costs & data' | 'Planning' | 'Rights & terms';

export interface GuideMeta {
  slug: string;
  title: string;
  blurb: string;
  group: GuideGroup;
  image: string; // /images/guides/<slug>.jpg
}

export const GUIDES: GuideMeta[] = [
  {
    slug: 'funeral-cost-2026-breakdown',
    title: 'How Much Does a Funeral Cost in 2026? The Full Breakdown',
    blurb:
      'Modeled national estimates for all six service types, what is included and excluded, and why quotes vary so much.',
    group: 'Costs & data',
    image: '/images/guides/funeral-cost-2026-breakdown.jpg',
  },
  {
    slug: 'funeral-costs-by-state-2026',
    title: 'Funeral Costs by State 2026: All 50 States + D.C.',
    blurb:
      'Every jurisdiction compared side by side, with modeled traditional-burial and direct-cremation figures.',
    group: 'Costs & data',
    image: '/images/guides/funeral-costs-by-state-2026.jpg',
  },
  {
    slug: 'cremation-cost-2026',
    title: 'How Much Does Cremation Cost in 2026?',
    blurb:
      'Cremation with a service vs. direct cremation: what each includes and what drives the price.',
    group: 'Costs & data',
    image: '/images/guides/cremation-cost-2026.jpg',
  },
  {
    slug: 'burial-plot-costs',
    title: 'How Much Does a Burial Plot Cost?',
    blurb:
      'The cemetery bill is separate from the funeral home: plots, opening and closing, and perpetual care.',
    group: 'Costs & data',
    image: '/images/guides/burial-plot-costs.jpg',
  },
  {
    slug: 'headstone-costs',
    title: 'How Much Does a Headstone Cost? Markers vs. Monuments',
    blurb:
      'Flat markers vs. upright monuments, engraving, installation, and the veteran headstone benefit.',
    group: 'Costs & data',
    image: '/images/guides/headstone-costs.jpg',
  },
  {
    slug: 'why-funeral-cost-figures-disagree',
    title: 'Why Funeral Cost Figures Disagree',
    blurb:
      '2023 vs. 2026 dollars, medians vs. averages, and surveyed prices vs. modeled estimates — explained.',
    group: 'Costs & data',
    image: '/images/guides/why-funeral-cost-figures-disagree.jpg',
  },
  {
    slug: 'green-burial-composting',
    title: 'Green Burial & Human Composting: Costs and Where They\u2019re Legal',
    blurb: 'Natural burial, composting (14 states as of 2026), and what each costs.',
    group: 'Costs & data',
    image: '/images/guides/green-burial-composting.jpg',
  },
  {
    slug: 'casket-buying-guide',
    title: 'Caskets: What They Cost and Your Right to Buy Elsewhere',
    blurb:
      'Metal, wood, and cremation caskets in plain English — plus the Funeral Rule right no seller can take from you.',
    group: 'Costs & data',
    image: '/images/guides/casket-buying-guide.jpg',
  },
  {
    slug: 'when-someone-dies-checklist',
    title: 'What to Do When Someone Dies: The First 48 Hours',
    blurb:
      'A calm, ordered checklist: pronouncement, who to call, choosing a funeral home, and paperwork.',
    group: 'Planning',
    image: '/images/guides/when-someone-dies-checklist.jpg',
  },
  {
    slug: 'compare-funeral-homes',
    title: 'How to Compare Funeral Homes & Read the Price List',
    blurb:
      'Your Funeral Rule rights, how to compare General Price Lists line by line, and red flags.',
    group: 'Planning',
    image: '/images/guides/compare-funeral-homes.jpg',
  },
  {
    slug: 'paying-for-a-funeral',
    title: 'How to Pay for a Funeral: VA, Social Security & Aid',
    blurb:
      'VA burial benefits, the $255 Social Security payment, FEMA limits, county aid, and life insurance.',
    group: 'Planning',
    image: '/images/guides/paying-for-a-funeral.jpg',
  },
  {
    slug: 'prepaid-funeral-plans',
    title: 'Prepaid Funeral Plans: Pros, Cons & Traps',
    blurb:
      'What prepaying locks in, where the money sits, and the questions to ask before you sign.',
    group: 'Planning',
    image: '/images/guides/prepaid-funeral-plans.jpg',
  },
  {
    slug: 'who-can-arrange-funeral',
    title: 'Who Has the Legal Right to Make Funeral Arrangements?',
    blurb:
      'The usual priority order, why a written designation beats it, and what happens when families disagree.',
    group: 'Planning',
    image: '/images/guides/who-can-arrange-funeral.jpg',
  },
  {
    slug: 'funeral-service-types',
    title: 'Funeral Service Types Explained',
    blurb:
      'Traditional burial, burial with vault, cremation with service, direct cremation, direct burial, green burial.',
    group: 'Planning',
    image: '/images/guides/funeral-service-types.jpg',
  },
  {
    slug: 'funeral-rule-rights',
    title: 'Your Rights Under the FTC Funeral Rule',
    blurb:
      'Prices by phone, the General Price List, itemized statements, and what no one can require you to buy.',
    group: 'Rights & terms',
    image: '/images/guides/funeral-rule-rights.jpg',
  },
  {
    slug: 'funeral-glossary',
    title: 'Funeral Glossary in Plain English',
    blurb:
      'Embalming, vaults, caskets, GPLs, cash advances and more — about 30 terms, no jargon.',
    group: 'Rights & terms',
    image: '/images/guides/funeral-glossary.jpg',
  },
  {
    slug: 'scattering-ashes-laws-costs',
    title: 'Scattering Ashes: Laws, Costs & How to Do It',
    blurb:
      'Where you can legally scatter ashes — EPA rules, park permits, private land, and what it costs.',
    group: 'Planning',
    image: '/images/guides/scattering-ashes-laws-costs.jpg',
  },
  {
    slug: 'body-organ-donation-guide',
    title: 'Body & Organ Donation: How It Works',
    blurb:
      'How organ and whole-body donation work, what it costs the family (usually nothing), and how it affects funeral plans.',
    group: 'Planning',
    image: '/images/guides/body-organ-donation-guide.jpg',
  },
  {
    slug: 'urn-costs-guide',
    title: 'Urns: Types, Costs & Where to Buy',
    blurb:
      'Metal, wood, biodegradable, and keepsake urns — types, sizing, and your right to buy anywhere.',
    group: 'Costs & data',
    image: '/images/guides/urn-costs-guide.jpg',
  },
  {
    slug: 'obituary-costs',
    title: 'Obituary Costs: Newspaper Prices & Free Alternatives',
    blurb:
      'Why newspaper obituaries cost hundreds of dollars, and the free alternatives most families miss.',
    group: 'Planning',
    image: '/images/guides/obituary-costs.jpg',
  },
  {
    slug: 'veterans-burial-benefits',
    title: 'Veterans Burial Benefits: Full 2026 Guide',
    blurb:
      'VA burial allowances, free national cemetery burial, headstones and markers, and how to apply.',
    group: 'Planning',
    image: '/images/guides/veterans-burial-benefits.jpg',
  },
  {
    slug: 'shipping-remains',
    title: 'Transporting Remains Across State Lines: Rules & Costs',
    blurb:
      'Burial transit permits, airline cargo rules, and what it costs to move remains across state lines.',
    group: 'Planning',
    image: '/images/guides/shipping-remains.jpg',
  },
  {
    slug: 'aquamation-guide',
    title: "Aquamation: Costs & Where It's Legal",
    blurb:
      'Alkaline hydrolysis explained — where it is legal, what providers charge, and how it compares to cremation.',
    group: 'Costs & data',
    image: '/images/guides/aquamation-guide.jpg',
  },
];

export function getGuide(slug: string): GuideMeta | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

/** 3 related guides: same group first (excluding current), then fill from other groups in order. */
export function getRelatedGuides(currentSlug: string, count = 3): GuideMeta[] {
  const current = getGuide(currentSlug);
  if (!current) return GUIDES.slice(0, count);
  const sameGroup = GUIDES.filter((g) => g.group === current.group && g.slug !== currentSlug);
  const others = GUIDES.filter((g) => g.group !== current.group && g.slug !== currentSlug);
  return [...sameGroup, ...others].slice(0, count);
}
