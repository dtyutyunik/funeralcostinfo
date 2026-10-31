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
    title: 'Aquamation Cost: Alkaline Hydrolysis Prices, Definition & Where It Is Legal',
    blurb:
      'Water cremation explained: published provider prices, how alkaline hydrolysis compares with cremation, and where it is legal.',
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
    title: 'Burial Insurance and Final Expense Insurance Cost: 2026 Rates by Age',
    blurb:
      'Burial insurance rates for a $10,000 policy by age, smoker differences, simplified vs. guaranteed issue, and the traps that make it a bad deal.',
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
  {
    slug: 'burial-vault-cost',
    title: 'How Much Does a Burial Vault Cost? Liners, Vaults & Your Rights',
    blurb:
      'A grave liner runs about $700 to $1,000; a sealed burial vault runs $900 to $13,000+. No law requires either one — most cemeteries do.',
    group: 'Costs & data',
    image: '/images/guides/burial-vault-cost.jpg',
  },
  {
    slug: 'how-to-plan-a-funeral',
    title: 'How to Plan a Funeral: A Step-by-Step Guide',
    blurb:
      'The ten steps in order, from the first phone calls to the paperwork after the service, with modeled 2026 costs at each decision point.',
    group: 'Planning',
    image: '/images/guides/how-to-plan-a-funeral.jpg',
  },
  {
    slug: 'cremation-diamonds-cost',
    title: 'How Much Does a Cremation Diamond Cost? Prices, Process & Timeline',
    blurb:
      'Turning ashes into a diamond costs from about $995 for a small stone to $25,000 or more for a large one: the lab process, timelines, and what to check before ordering.',
    group: 'Costs & data',
    image: '/images/guides/cremation-diamonds-cost.jpg',
  },
  {
    slug: 'funeral-loans',
    title: 'Funeral Loans: How to Borrow for a Funeral, Rates & Alternatives',
    blurb:
      'No special funeral loan exists: personal loans at 6 to 36 percent APR, funeral home financing, or a credit card, plus the cheaper alternatives to check first.',
    group: 'Planning',
    image: '/images/guides/funeral-loans.jpg',
  },
  {
    slug: 'memorial-service-cost',
    title: 'How Much Does a Memorial Service Cost? 2026 Price Breakdown',
    blurb:
      'A standalone memorial service typically costs $1,500 to $4,000: venue, officiant, catering, and funeral home fees line by line, plus the under-$1,000 version.',
    group: 'Costs & data',
    image: '/images/guides/memorial-service-cost.jpg',
  },
  {
    slug: 'what-to-do-with-ashes',
    title: 'What to Do With Ashes After Cremation: All Your Options, With Costs',
    blurb:
      'Keep, bury, niche, scatter, share, or turn ashes into glass, a diamond, a tree, or a reef: every option with typical costs, and no law requires burial.',
    group: 'Planning',
    image: '/images/guides/what-to-do-with-ashes.jpg',
  },
  {
    slug: 'funeral-officiant-cost',
    title: 'How Much Does a Funeral Officiant Cost? Honorariums and Celebrant Fees',
    blurb:
      'Clergy honorariums run $150 to $500 and professional celebrants $300 to $800: what each covers, how to pay, and how to choose.',
    group: 'Costs & data',
    image: '/images/guides/funeral-officiant-cost.jpg',
  },
  {
    slug: 'social-security-survivor-benefits',
    title: 'Social Security Survivor Benefits: How Much, Who Qualifies & How to Apply',
    blurb:
      'A surviving spouse receives 71.5% to 100% of the deceased worker benefit and children 75%: eligibility, the switching strategy, and how to apply.',
    group: 'Planning',
    image: '/images/guides/social-security-survivor-benefits.jpg',
  },
  {
    slug: 'graveside-service-cost',
    title: 'How Much Does a Graveside Service Cost? 2026 Price Breakdown',
    blurb:
      'The funeral home graveside line runs $200 to $820, plus separate cemetery fees: what the service includes, what moves the price, and how it compares with a full funeral.',
    group: 'Costs & data',
    image: '/images/guides/graveside-service-cost.jpg',
  },
  {
    slug: 'how-to-write-a-eulogy',
    title: 'How to Write a Eulogy: A Step-by-Step Guide With a Template',
    blurb:
      'A 3 to 7 minute eulogy in five parts, with a fill-in template, delivery checklist, and answers to the questions speakers ask most.',
    group: 'Planning',
    image: '/images/guides/how-to-write-a-eulogy.jpg',
  },
  {
    slug: 'funeral-transportation-cost',
    title: 'How Much Does Funeral Transportation Cost? Hearse, Limousine & Procession Prices',
    blurb:
      'A hearse typically costs $175 to $550 and a family limousine $50 to $450, plus mileage and overtime: every procession vehicle priced line by line.',
    group: 'Costs & data',
    image: '/images/guides/funeral-transportation-cost.jpg',
  },
  {
    slug: 'funeral-reception-cost',
    title: 'How Much Does a Funeral Reception Cost? Catering, Venue & Per Guest Prices',
    blurb:
      'A small reception typically costs $300 to $2,000, with food at $25 to $50 per guest: catering formats, venue options, and per-guest math.',
    group: 'Costs & data',
    image: '/images/guides/funeral-reception-cost.jpg',
  },
  {
    slug: 'cheapest-funeral-options',
    title: 'What Are the Cheapest Funeral Options? Ranked by Cost (2026)',
    blurb:
      'Body donation, direct cremation, memorial society rates, direct burial, and green burial ranked by total cost, plus the free help most families miss.',
    group: 'Planning',
    image: '/images/guides/cheapest-funeral-options.jpg',
  },
  {
    slug: 'how-cremation-works',
    title: 'How Does Cremation Work? The Step-by-Step Process Explained',
    blurb:
      'Authorization, the waiting period, the retort at 1,400 to 1,800 degrees, processing, and return of the ashes in 7 to 10 days.',
    group: 'Planning',
    image: '/images/guides/how-cremation-works.jpg',
  },
  {
    slug: 'funeral-flowers-cost',
    title: 'How Much Do Funeral Flowers Cost? Arrangement Prices & What to Send',
    blurb:
      'Most people spend $75 to $150: baskets from $60, standing sprays $135 to $350, casket sprays $250 to $700 or more, by arrangement and relationship.',
    group: 'Costs & data',
    image: '/images/guides/funeral-flowers-cost.jpg',
  },
  {
    slug: 'military-funeral-honors',
    title: 'Military Funeral Honors: Eligibility, Flag, Taps & How to Request Them',
    blurb:
      'Free for eligible veterans: at least two uniformed members, the folding and presentation of the flag, and Taps, plus how to request them.',
    group: 'Planning',
    image: '/images/guides/military-funeral-honors.jpg',
  },
  {
    slug: 'infant-funeral-costs',
    title: 'How Much Does a Baby Funeral Cost? Infant Burial & Cremation Prices',
    blurb:
      'Infant cremation is often under $1,000 and infant burial far below adult prices, with hospital options that are sometimes free.',
    group: 'Costs & data',
    image: '/images/guides/infant-funeral-costs.jpg',
  },
  {
    slug: 'crowdfunding-a-funeral',
    title: 'How to Crowdfund a Funeral: GoFundMe Costs, Goals & What to Write',
    blurb:
      'Set the goal from the real bill, expect GoFundMe fees of 2.9% plus $0.30 per donation, and write a short, specific story.',
    group: 'Planning',
    image: '/images/guides/crowdfunding-a-funeral.jpg',
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
