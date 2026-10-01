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
  {
    slug: 'funeral-costs-by-city',
    title: 'Funeral Costs by City: Average Prices in the 25 Largest US Metros (2026)',
    blurb:
      'Published 2026 price data for the 25 largest US metros, why city prices differ, and how to shop locally.',
    group: 'Costs & data',
    image: '/images/guides/funeral-costs-by-city.jpg',
  },
  {
    slug: 'corporate-vs-independent-funeral-homes',
    title: 'Are Corporate Funeral Homes More Expensive? SCI/Dignity Memorial vs. Independent Prices',
    blurb:
      'The head-to-head price study, current ranges, the enforcement record, and how to check who owns your funeral home.',
    group: 'Costs & data',
    image: '/images/guides/corporate-vs-independent-funeral-homes.jpg',
  },
  {
    slug: 'mausoleum-cost',
    title: 'How Much Does a Mausoleum Cost? 2026 Price Guide',
    blurb:
      'Community crypts, columbarium niches, and lawn crypts from real 2025–2026 cemetery price lists, fee by fee.',
    group: 'Costs & data',
    image: '/images/guides/mausoleum-cost.jpg',
  },
  {
    slug: 'embalming-costs-requirements',
    title: 'How Much Does Embalming Cost? Prices, Law & Your Right to Refuse',
    blurb:
      'NFDA median $845, when any state actually requires embalming, and the FTC rule that lets you refuse.',
    group: 'Costs & data',
    image: '/images/guides/embalming-costs-requirements.jpg',
  },
  {
    slug: 'religious-funeral-costs',
    title: 'How Much Do Religious Funerals Cost? Jewish, Muslim, Catholic & Hindu (2026)',
    blurb:
      "Four traditions' rites and real 2025–2026 price tags, side by side.",
    group: 'Costs & data',
    image: '/images/guides/religious-funeral-costs.jpg',
  },
  {
    slug: 'home-funeral-cost',
    title: "How Much Does a Home Funeral Cost? (2026) + Where It's Legal State by State",
    blurb:
      'Usually under $500 vs. a $9,140 professional funeral: which states let families handle everything and the paperwork it takes.',
    group: 'Planning',
    image: '/images/guides/home-funeral-cost.jpg',
  },
  {
    slug: 'funeral-memorial-society',
    title: 'Funeral Memorial Societies: How They Cut Funeral Costs (2026 Guide)',
    blurb:
      'One-time $25–$50 memberships that unlock contracted funeral rates — member direct cremation around $995 vs. $2,695 for the public.',
    group: 'Planning',
    image: '/images/guides/funeral-memorial-society.jpg',
  },
  {
    slug: 'international-repatriation-remains',
    title: 'How Much Does It Cost to Repatriate a Body? International Rules, Paperwork & Prices (2026)',
    blurb:
      'Repatriating a body internationally costs $5,000–$15,000+: the paperwork chain and CDC rules for bringing remains into the US.',
    group: 'Planning',
    image: '/images/guides/international-repatriation-remains.jpg',
  },
  {
    slug: 'death-certificates-cost',
    title: "How Much Does a Death Certificate Cost? (2026) State Fees + How Many Copies You Need",
    blurb:
      'State fees run $5–$30+ per certified copy; families typically need 5–10. Who orders them and how long they take.',
    group: 'Planning',
    image: '/images/guides/death-certificates-cost.jpg',
  },
  {
    slug: 'burial-at-sea',
    title: 'How Much Does Burial at Sea Cost? (2026) — Navy Program, EPA Rules & Charter Prices',
    blurb:
      'Ash scattering ($100–$500 unattended) vs. full-body sea burial ($7,000–$17,000): EPA rules, Navy eligibility, and charter pricing.',
    group: 'Planning',
    image: '/images/guides/burial-at-sea.jpg',
  },
  {
    slug: 'final-expense-burial-insurance',
    title: "How Much Does Final Expense Insurance Cost? (2026) — and When It's a Bad Deal",
    blurb:
      'Typical premiums $30–$80/month for a $10,000 policy, simplified vs. guaranteed issue, and the traps that make it a bad deal.',
    group: 'Rights & terms',
    image: '/images/guides/final-expense-burial-insurance.jpg',
  },
  {
    slug: 'indigent-burial-assistance',
    title: 'Indigent Burial Assistance (2026): County Programs & What to Do With No Money for a Funeral',
    blurb:
      'How county indigent burial programs work, who qualifies, what they cover — plus veterans’ free burial and the SSA $255 payment explained.',
    group: 'Planning',
    image: '/images/guides/indigent-burial-assistance.jpg',
  },
  {
    slug: 'file-complaint-funeral-home',
    title: 'How to File a Complaint Against a Funeral Home (2026)',
    blurb:
      'The four doors: the funeral home itself, your state licensing board, the FTC, and your state attorney general — what each can do, what to document, and realistic timelines.',
    group: 'Rights & terms',
    image: '/images/guides/file-complaint-funeral-home.jpg',
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
