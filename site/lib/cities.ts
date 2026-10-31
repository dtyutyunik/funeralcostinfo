import { dataset, stateSlug, type ServiceEstimate } from './data';

/**
 * City-level modeled estimates (Phase 4).
 *
 * Methodology mirrors the state model exactly: national anchor x BEA Regional
 * Price Parity (all items) / 100, point rounded to the nearest $10, with an
 * illustrative range of point x 0.85 (low) and point x 1.15 (high), each
 * rounded to the nearest $10. The parity source is the BEA MARPP table
 * (Regional Price Parities by Metropolitan Statistical Area), 2024 vintage,
 * the same vintage as the state RPPs in estimates.json. This formula
 * reproduces all 306 state estimates in estimates.json exactly.
 *
 * Published ranges, where present, are provider-published direct cremation
 * prices from DFS Memorials' 2026 metro table or After.com / Funeralocity
 * 2026 data, as already cited in the funeral costs by city guide. They are
 * shown separately and never blended into the modeled estimates.
 */

export interface PublishedRange {
  best: string | null;
  highest: string | null;
  average: string | null;
  source: string;
  note: string;
}

export interface CityData {
  slug: string;
  name: string;
  stateSlug: string;
  metroName: string;
  geoFips: string;
  rppAllItems: number;
  estimates: Record<string, ServiceEstimate>;
  published: PublishedRange | null;
  context: string[];
  caveats: string[];
  cityFaqs: { q: string; a: string }[];
}

interface CitySeed {
  slug: string;
  name: string;
  stateName: string;
  metroName: string;
  geoFips: string;
  rppAllItems: number;
  published: PublishedRange | null;
  context: string[];
  caveats: string[];
  cityFaqs: { q: string; a: string }[];
}

const round10 = (x: number) => Math.round(x / 10) * 10;

function buildEstimates(rpp: number): Record<string, ServiceEstimate> {
  const out: Record<string, ServiceEstimate> = {};
  for (const [key, anchor] of Object.entries(dataset.anchors)) {
    const point = round10((anchor.value * rpp) / 100);
    out[key] = { point, low: round10(point * 0.85), high: round10(point * 1.15) };
  }
  return out;
}

const SEEDS: CitySeed[] = [
  {
    slug: 'new-york-city',
    name: 'New York City',
    stateName: 'New York',
    metroName: 'New York-Newark-Jersey City, NY-NJ',
    geoFips: '35620',
    rppAllItems: 112.563,
    published: {
      best: '$495',
      highest: '$6,750',
      average: null,
      source: 'DFS Memorials 2026',
      note: 'The widest spread of any US metro in the DFS table: the same direct cremation is published at both the lowest best price and one of the highest top ends in the country.',
    },
    context: [
      'The New York metro price level (BEA 2024 RPP 112.6) sits above the New York State figure of 107.9, so modeled city estimates run about 4 percent above the state page.',
      'The city also runs the burial safety net of last resort: Hart Island in the Bronx has served as the city cemetery for unclaimed and indigent New Yorkers since 1869, holds more than one million burials, and has been managed by NYC Parks since 2021.',
    ],
    caveats: [
      'Burial space inside the five boroughs is extremely limited and priced accordingly. Many city families bury in New Jersey, Long Island or Westchester cemeteries, where plot prices differ sharply from in-city grounds.',
      'The metro crosses into New Jersey. A New Jersey funeral home serving a New York family works under New Jersey rules and its own price list, so compare GPLs on both sides of the Hudson.',
    ],
    cityFaqs: [
      {
        q: 'Why does New York City have both the cheapest and some of the most expensive cremation prices in the country?',
        a: 'Competition and overhead colliding. DFS Memorials\' 2026 metro table shows published direct cremation in the metro from $495 to $6,750. Hundreds of providers compete for the same families, including low-cost cremation specialists, while full-service Manhattan homes carry some of the highest rent and labor costs in the industry. The provider you choose moves the price more in New York than in any other metro.',
      },
      {
        q: 'What happens in New York City if a family cannot afford any funeral at all?',
        a: 'The city buries unclaimed and indigent residents at the City Cemetery on Hart Island at public expense. Families who later learn a relative was buried there can visit through NYC Parks, which has managed the island since 2021. Our guide to county and indigent burial assistance explains how public burial programs work and what to ask for before a case reaches that point.',
      },
    ],
  },
  {
    slug: 'los-angeles',
    name: 'Los Angeles',
    stateName: 'California',
    metroName: 'Los Angeles-Long Beach-Anaheim, CA',
    geoFips: '31080',
    rppAllItems: 113.566,
    published: {
      best: '$1,045',
      highest: '$2,900',
      average: null,
      source: 'DFS Memorials 2026',
      note: 'Published direct cremation prices across Los Angeles and Orange counties.',
    },
    context: [
      'The Los Angeles metro price level (BEA 2024 RPP 113.6) is the second highest among our city pages and about 3 percent above the California state figure, so modeled estimates run above the state page.',
      'The metro covers Los Angeles and Orange counties. Prices vary widely between the two counties and between full-service funeral homes and the cremation specialists that advertise across the basin.',
    ],
    caveats: [
      'The published DFS range tops out at $2,900, well under our modeled direct cremation midpoint, because the modeled figure follows the NFDA median provider rather than the cheapest specialist in the market.',
      'California requires every funeral establishment to provide its General Price List on request. In a metro this size you can realistically collect five or six GPLs by phone in one afternoon, and the spread rewards the effort.',
    ],
    cityFaqs: [
      {
        q: 'How much does cremation cost in Los Angeles?',
        a: 'Our modeled 2026 estimate for direct cremation in the Los Angeles metro is $3,440, and $7,860 for cremation with a viewing and service. Published provider prices run lower at the competitive end: DFS Memorials lists direct cremation in the metro from $1,045 to $2,900 in 2026. The gap between the modeled midpoint and the best published price is the value of comparing several General Price Lists.',
      },
      {
        q: 'Why do funeral prices vary so much across Los Angeles?',
        a: 'Overhead and provider type. A full-service home in a high-rent corridor prices its basic services fee very differently from a cremation specialist in an industrial part of the county, and Orange County providers price differently again. The service itself is standardized, so most of the spread is the business model, not the cremation.',
      },
    ],
  },
  {
    slug: 'san-francisco',
    name: 'San Francisco',
    stateName: 'California',
    metroName: 'San Francisco-Oakland-Fremont, CA',
    geoFips: '41860',
    rppAllItems: 115.613,
    published: {
      best: '$1,985',
      highest: null,
      average: null,
      source: 'DFS Memorials 2026',
      note: 'The best published direct cremation price in the metro is the highest best price of any large metro in the DFS 2026 table.',
    },
    context: [
      'The San Francisco metro has the highest regional price parity of any city in this set (BEA 2024 RPP 115.6), so its modeled estimates top the list, about 4 percent above the California state page.',
      'Almost nobody is buried inside San Francisco itself. The city barred new cemeteries in 1900 and evicted most existing ones in 1912, so burials moved south to Colma, a town incorporated in 1924 that holds 17 cemeteries and roughly 1.5 million interments (Congressional Record, 2024).',
    ],
    caveats: [
      'Cemetery costs for a San Francisco burial are usually Colma or East Bay costs, quoted by the cemetery separately from the funeral home bill and excluded from the estimates on this page.',
      'Only two small cemeteries still operate within city limits, so in-city burial is a premium niche rather than a default option.',
    ],
    cityFaqs: [
      {
        q: 'Where are San Francisco burials held if there are almost no cemeteries in the city?',
        a: 'Mostly in Colma, about ten miles south, where 17 cemeteries hold roughly 1.5 million interments, or in East Bay cemeteries in Oakland and Hayward. San Francisco families should expect the cemetery bill to come from a Colma or East Bay cemetery even when the funeral home is in the city, and should price the plot, opening and closing separately.',
      },
      {
        q: 'How much does a funeral cost in San Francisco compared with the rest of California?',
        a: 'Our modeled traditional burial estimate for the metro is $10,570, against $10,120 on the California state page and a national anchor of $9,140. The metro premium is real but modest next to the provider spread: DFS Memorials lists the best published direct cremation price at $1,985, the highest best price of any large metro it tracks.',
      },
    ],
  },
  {
    slug: 'san-diego',
    name: 'San Diego',
    stateName: 'California',
    metroName: 'San Diego-Chula Vista-Carlsbad, CA',
    geoFips: '41740',
    rppAllItems: 111.887,
    published: {
      best: null,
      highest: null,
      average: '$1,526',
      source: 'After.com / Funeralocity 2026',
      note: 'Average published direct cremation price for San Diego in After.com\'s California city data (Funeralocity 2026).',
    },
    context: [
      'San Diego\'s metro price level (BEA 2024 RPP 111.9) sits close to the California state figure of 110.7, so modeled city estimates land just above the state page.',
      'The metro is a single county, so unlike most cities in this set the San Diego figures are not diluted by lower cost suburbs in other counties or states.',
    ],
    caveats: [
      'Coastal cemeteries price plots well above inland grounds in the county, and cemetery charges are excluded from the funeral home estimates on this page.',
      'After.com\'s $1,526 average published direct cremation price sits far below our modeled midpoint of $3,390, a reminder that San Diego\'s cremation specialists price well under the NFDA median provider.',
    ],
    cityFaqs: [
      {
        q: 'What is the average cost of cremation in San Diego?',
        a: 'Two honest answers. Our modeled 2026 estimate, following the NFDA median provider, is $3,390 for direct cremation and $7,740 for cremation with a service. Published market data runs lower: After.com\'s Funeralocity 2026 figures put the average published direct cremation price in San Diego at $1,526. Families who call three or four providers usually land between those two anchors.',
      },
      {
        q: 'Do these San Diego estimates cover burial at Fort Rosecrans or Miramar National Cemetery?',
        a: 'No. These estimates describe private arrangements. Eligible veterans can instead be buried at Fort Rosecrans National Cemetery or Miramar National Cemetery in San Diego, where the VA provides the gravesite, opening and closing, and a government headstone at no charge to the family. Our veterans burial benefits guide walks through eligibility and what the VA does and does not pay for.',
      },
    ],
  },
  {
    slug: 'chicago',
    name: 'Chicago',
    stateName: 'Illinois',
    metroName: 'Chicago-Naperville-Elgin, IL-IN',
    geoFips: '16980',
    rppAllItems: 103.595,
    published: {
      best: '$1,295',
      highest: '$4,600',
      average: null,
      source: 'DFS Memorials 2026',
      note: 'Published direct cremation prices across the Chicago metro, which reaches into northwest Indiana.',
    },
    context: [
      'The Chicago metro price level (BEA 2024 RPP 103.6) sits above the Illinois state figure of 100.0, so modeled city estimates run about 4 percent above the state page.',
      'Cook County\'s size keeps provider density high in the city and near suburbs, and DFS Memorials found published direct cremation from $1,295 to $4,600 across the metro in 2026.',
    ],
    caveats: [
      'Several historic Chicago cemeteries are effectively full for new ground burial, so families often end up in suburban grounds where plot prices differ sharply from the remaining in-city space.',
      'The metro crosses into Indiana. An Indiana provider serving a Chicago family works under Indiana rules and its own price list.',
    ],
    cityFaqs: [
      {
        q: 'How much does a funeral cost in Chicago compared with downstate Illinois?',
        a: 'Our modeled traditional burial estimate for the Chicago metro is $9,470, against $9,140 on the Illinois state page and $9,140 nationally. The metro premium is modest; the bigger Chicago variable is provider type, with published direct cremation spanning $1,295 to $4,600 (DFS Memorials 2026) inside the same metro.',
      },
      {
        q: 'What is the cheapest cremation option in Chicago?',
        a: 'Direct cremation through a cremation specialist. The best published metro price is $1,295 (DFS Memorials 2026), against our modeled midpoint of $3,140. Specialists keep prices down by skipping the full-service facility; the cremation itself, the paperwork and the legal requirements are the same.',
      },
    ],
  },
  {
    slug: 'houston',
    name: 'Houston',
    stateName: 'Texas',
    metroName: 'Houston-Pasadena-The Woodlands, TX',
    geoFips: '26420',
    rppAllItems: 98.629,
    published: {
      best: '$895',
      highest: '$6,800',
      average: '$2,094',
      source: 'DFS Memorials 2026; us-funerals.com 2026',
      note: 'Average direct cremation of $2,094 from us-funerals.com\'s 2026 Houston city data; range from DFS Memorials 2026.',
    },
    context: [
      'Houston is the softest priced big metro in Texas: its BEA 2024 RPP of 98.6 sits below the national average and only slightly above the Texas state figure of 97.1.',
      'us-funerals.com\'s 2026 city data puts Houston\'s average direct cremation at $2,094 with a best price of $895, matching the low end of the DFS Memorials range.',
    ],
    caveats: [
      'The DFS top end of $6,800 for a Houston direct cremation shows the spread here is about provider type, not the service: national brand homes price the same cremation several times higher than local specialists.',
      'Texas does not require embalming. State law requires a body held for more than 24 hours to be refrigerated, embalmed or placed in a suitable sealed container.',
    ],
    cityFaqs: [
      {
        q: 'Why is cremation cheaper in Houston than in Dallas?',
        a: 'Mostly the metro price level. Houston\'s BEA regional price parity is 98.6 against Dallas-Fort Worth\'s 103.1, and our modeled direct cremation estimates follow that gap: $2,990 in Houston against $3,120 in Dallas. Published averages complicate the picture: us-funerals.com puts Houston\'s average direct cremation at $2,094 and Dallas\'s at $1,994, so in practice the two markets overlap and the provider you pick matters more than the city.',
      },
      {
        q: 'How much does a funeral cost in Houston?',
        a: 'Our modeled 2026 estimate for a traditional funeral with viewing and burial in the Houston metro is $9,010 (range $7,660 to $10,360), a little above the Texas state page figure of $8,870 and just under the national anchor of $9,140. Cemetery costs come on top of that.',
      },
    ],
  },
  {
    slug: 'dallas',
    name: 'Dallas',
    stateName: 'Texas',
    metroName: 'Dallas-Fort Worth-Arlington, TX',
    geoFips: '19100',
    rppAllItems: 103.09,
    published: {
      best: '$845',
      highest: '$6,300',
      average: '$1,994',
      source: 'DFS Memorials 2026; us-funerals.com 2026',
      note: 'Average direct cremation of $1,994 from us-funerals.com\'s 2026 Dallas city data; range from DFS Memorials 2026.',
    },
    context: [
      'Dallas-Fort Worth runs about 6 percent above the Texas state modeled figure, the widest city to state gap among the Texas metros, reflecting the metroplex price level (RPP 103.1 against 97.1 statewide).',
      'Provider directory listings cited in our funeral costs by city guide put a Dallas traditional funeral average at $7,272 with a lowest listed price of $5,175 (Parting.com). Directory averages sit below our modeled midpoint because they average listed package prices rather than the NFDA median arrangement.',
    ],
    caveats: [
      'Two anchor cities price differently: us-funerals.com\'s 2026 averages put Fort Worth direct cremation at $1,632 against $1,994 in Dallas, so the side of the metroplex matters.',
      'The best published direct cremation price in the metro is $845 (DFS Memorials and us-funerals.com, 2026), among the lowest in the country.',
    ],
    cityFaqs: [
      {
        q: 'Is Fort Worth cheaper than Dallas for cremation?',
        a: 'On published averages, yes. us-funerals.com\'s 2026 city data puts the average direct cremation at $1,632 in Fort Worth and $1,994 in Dallas, with the same $845 best price in both. Our modeled metro estimate treats Dallas-Fort Worth as one market at $3,120, so families willing to use a Fort Worth provider often beat the modeled figure by the widest margin.',
      },
      {
        q: 'How much does a funeral cost in Dallas?',
        a: 'Our modeled 2026 estimate for a traditional funeral with viewing and burial in the Dallas-Fort Worth metro is $9,420 (range $8,010 to $10,830). Directory listings average lower, around $7,272 (Parting.com), because they reflect listed package prices. Either way, cemetery charges are extra.',
      },
    ],
  },
  {
    slug: 'phoenix',
    name: 'Phoenix',
    stateName: 'Arizona',
    metroName: 'Phoenix-Mesa-Chandler, AZ',
    geoFips: '38060',
    rppAllItems: 103.316,
    published: {
      best: '$950',
      highest: '$2,370',
      average: null,
      source: 'DFS Memorials 2026',
      note: 'One of the tightest published direct cremation spreads of any large metro in the DFS 2026 table.',
    },
    context: [
      'The Phoenix metro price level (BEA 2024 RPP 103.3) runs above the Arizona state figure of 100.7, so modeled city estimates sit about 3 percent above the state page.',
      'Arizona is a high cremation state: the NFDA projects 79.1 percent of Arizona dispositions will be cremations by 2035, and the Valley\'s cremation societies and specialists keep published prices competitive.',
    ],
    caveats: [
      'DFS Memorials\' 2026 range for Phoenix direct cremation is $950 to $2,370, one of the tightest spreads of any big metro. When the market is this compressed, the difference between providers is smaller than the difference between service types.',
      'Summer heat shapes logistics in the Valley: providers refrigerate promptly after a death, and families planning graveside services in summer usually schedule morning times.',
    ],
    cityFaqs: [
      {
        q: 'What is the average cost of cremation in Phoenix?',
        a: 'Our modeled 2026 estimate for direct cremation in the Phoenix metro is $3,130, and $7,150 for cremation with a viewing and service. Published prices run lower: DFS Memorials lists Phoenix direct cremation from $950 to $2,370 in 2026. The Valley\'s dense field of cremation providers is the main reason real quotes cluster under the modeled midpoint.',
      },
      {
        q: 'Why are Phoenix cremation prices lower than the modeled estimate?',
        a: 'Competition and cremation culture. With the NFDA projecting 79.1 percent of Arizona dispositions to be cremations by 2035, Phoenix supports many cremation societies and specialists whose whole business is priced direct cremation. The modeled figure follows the NFDA median full-service provider instead, so it reads high for this particular market.',
      },
    ],
  },
  {
    slug: 'miami',
    name: 'Miami',
    stateName: 'Florida',
    metroName: 'Miami-Fort Lauderdale-West Palm Beach, FL',
    geoFips: '33100',
    rppAllItems: 114.155,
    published: {
      best: '$765',
      highest: '$4,311',
      average: null,
      source: 'DFS Memorials 2026',
      note: 'Published direct cremation prices across Miami-Dade, Broward and Palm Beach counties.',
    },
    context: [
      'Miami is the outlier of this city set: the metro price level (BEA 2024 RPP 114.2) runs more than 10 percent above the Florida state figure of 103.4, the largest city premium here, driven by Miami-Dade County\'s price level.',
      'The metro spans Miami-Dade, Broward and Palm Beach counties, and prices generally soften as you move north from Miami-Dade into Broward and Palm Beach providers.',
    ],
    caveats: [
      'The best published direct cremation price in the metro is $765 (DFS Memorials 2026). The gap between the cheapest specialist and the modeled median provider is especially wide in South Florida.',
      'Florida regulates prepaid funeral contracts through the Department of Financial Services. South Florida has a large preneed market, so verifying a seller\'s license before signing a prepaid contract matters here.',
    ],
    cityFaqs: [
      {
        q: 'Why do funerals cost more in Miami than in the rest of Florida?',
        a: 'The metro price level. The BEA puts the Miami metro regional price parity at 114.2 against 103.4 for Florida as a whole, reflecting Miami-Dade\'s commercial rents, wages and land costs. Our modeled traditional burial estimate follows: $10,430 in the metro against $9,450 on the Florida state page. The state figure blends in the Panhandle and rural counties, which price far below South Florida.',
      },
      {
        q: 'How much does cremation cost in Miami?',
        a: 'Our modeled 2026 estimate for direct cremation in the Miami metro is $3,460, and $7,900 for cremation with a viewing and service. Published prices undercut the model at the competitive end: DFS Memorials lists direct cremation in the metro from $765 to $4,311 in 2026, so a family that compares providers in Broward as well as Miami-Dade usually lands well under the modeled midpoint.',
      },
    ],
  },
  {
    slug: 'boston',
    name: 'Boston',
    stateName: 'Massachusetts',
    metroName: 'Boston-Cambridge-Newton, MA-NH',
    geoFips: '14460',
    rppAllItems: 108.266,
    published: {
      best: '$1,195',
      highest: '$3,200',
      average: null,
      source: 'DFS Memorials 2026',
      note: 'Published direct cremation prices across the Boston metro, which reaches into southern New Hampshire.',
    },
    context: [
      'The Boston metro price level (BEA 2024 RPP 108.3) is set by eastern Massachusetts and runs about 2 percent above the Massachusetts state figure, even though the metro reaches into southern New Hampshire.',
      'Greater Boston\'s burial landscape is old: Mount Auburn Cemetery in Cambridge and Watertown, founded in 1831, is widely regarded as the first rural cemetery in the United States, and many historic grounds in the inner suburbs have little new space left.',
    ],
    caveats: [
      'Historic Boston area cemeteries sell new plots sparingly, and several release space only as it becomes available. Families often end up in suburban grounds in Middlesex or Norfolk county, at prices set by each cemetery.',
      'DFS Memorials puts published Boston direct cremation between $1,195 and $3,200 in 2026, a narrower spread than most coastal metros.',
    ],
    cityFaqs: [
      {
        q: 'How much does a funeral cost in Boston?',
        a: 'Our modeled 2026 estimate for a traditional funeral with viewing and burial in the Boston metro is $9,900 (range $8,420 to $11,390), about 2 percent above the Massachusetts state page figure of $9,670. Burial space is the wildcard: cemetery charges are excluded here and historic inner-suburb cemeteries price scarce plots at a premium.',
      },
      {
        q: 'Why is burial space so expensive around Boston?',
        a: 'Age and land. Many of the metro\'s large cemeteries were laid out in the 1800s in what are now dense, high-value suburbs, and they cannot expand. Limited new inventory keeps plot prices high close to the city, which is why Boston families frequently choose suburban or out-of-state cemeteries, or cremation, which the NFDA projects will account for 70.9 percent of Massachusetts dispositions by 2035.',
      },
    ],
  },
  {
    slug: 'denver',
    name: 'Denver',
    stateName: 'Colorado',
    metroName: 'Denver-Aurora-Centennial, CO',
    geoFips: '19740',
    rppAllItems: 105.782,
    published: {
      best: '$995',
      highest: '$3,125',
      average: null,
      source: 'DFS Memorials 2026',
      note: 'Published direct cremation prices across the Denver metro.',
    },
    context: [
      'Denver\'s metro price level (BEA 2024 RPP 105.8) runs about 3 percent above the Colorado state figure of 103.1, so modeled city estimates sit modestly above the state page.',
      'Colorado is a high cremation state: the NFDA projects 79.6 percent of Colorado dispositions will be cremations by 2035, and the Denver metro supports a dense field of cremation providers and societies.',
    ],
    caveats: [
      'Colorado adopted funeral service licensing in 2024 after decades without a licensing regime for funeral directors, and the new system is still bedding in. Confirm a Denver provider\'s license status with the state before signing.',
      'DFS Memorials lists Denver direct cremation from $995 to $3,125 in 2026, so the metro\'s competitive end sits well under our modeled midpoint of $3,210.',
    ],
    cityFaqs: [
      {
        q: 'What is the average cost of cremation in Denver?',
        a: 'Our modeled 2026 estimate for direct cremation in the Denver metro is $3,210, and $7,320 for cremation with a viewing and service. Published prices run lower: DFS Memorials lists Denver direct cremation from $995 to $3,125 in 2026. As in most high cremation markets, specialists price well under the full-service median the model follows.',
      },
      {
        q: 'How do Denver funeral prices compare with the Colorado state estimate?',
        a: 'Slightly higher. Our modeled traditional burial estimate is $9,670 for the Denver metro against $9,420 on the Colorado state page, a gap of about 3 percent that matches the difference between the metro and state price levels. Families in the mountain counties or on the eastern plains should start from the state page instead.',
      },
    ],
  },
  {
    slug: 'indianapolis',
    name: 'Indianapolis',
    stateName: 'Indiana',
    metroName: 'Indianapolis-Carmel-Greenwood, IN',
    geoFips: '26900',
    rppAllItems: 95.696,
    published: null,
    context: [
      'Indianapolis prices sit below the national average (BEA 2024 RPP 95.7) but about 3 percent above the Indiana state figure of 93.3, which blends in the state\'s rural counties.',
      'The city\'s anchor cemetery is Crown Hill, founded in 1863. At 555 acres it is one of the largest private cemeteries in the United States and the burial place of President Benjamin Harrison.',
    ],
    caveats: [
      'No metro level published price table covers Indianapolis yet, so the modeled estimates on this page carry more weight than in cities with survey data. Collecting three local General Price Lists matters more here, not less.',
      'A large in-city supply of burial space at cemeteries like Crown Hill is one reason Indianapolis cemetery costs stay closer to the national ranges than in land scarce coastal metros. Cemetery charges are still excluded from the estimates above.',
    ],
    cityFaqs: [
      {
        q: 'How much does a funeral cost in Indianapolis?',
        a: 'Our modeled 2026 estimate for a traditional funeral with viewing and burial in the Indianapolis metro is $8,750 (range $7,440 to $10,060), against $8,530 on the Indiana state page and $9,140 nationally. Direct cremation is modeled at $2,900. Indianapolis is one of the more affordable large metros in the country for funeral services.',
      },
      {
        q: 'What is the average cost of cremation in Indianapolis?',
        a: 'Our modeled 2026 estimate for direct cremation in the Indianapolis metro is $2,900 (range $2,470 to $3,340), and $6,620 for cremation with a viewing and service. No published metro price survey covers Indianapolis, so treat the modeled range as the planning anchor and verify it against two or three local General Price Lists, which the FTC Funeral Rule entitles you to receive.',
      },
    ],
  },
  {
    slug: 'louisville',
    name: 'Louisville',
    stateName: 'Kentucky',
    metroName: 'Louisville/Jefferson County, KY-IN',
    geoFips: '31140',
    rppAllItems: 93.074,
    published: null,
    context: [
      'Louisville is the lowest priced metro in this city set (BEA 2024 RPP 93.1), though it still runs about 3 percent above the Kentucky state figure of 90.2.',
      'The metro crosses the Ohio River into southern Indiana, so Louisville families can and do compare Kentucky providers with Indiana providers in New Albany and Jeffersonville, which work under a different state rulebook and different price lists.',
    ],
    caveats: [
      'Cave Hill Cemetery, founded in 1848, is Louisville\'s largest cemetery and a historic arboretum. Its plot and service prices come from its own schedule and sit outside the modeled funeral home estimates on this page.',
      'Kentucky\'s modeled state figures are among the lowest in the country, and Louisville\'s metro premium is small, so this page and the state page stay close. Use the state page for Kentucky communities outside the metro.',
    ],
    cityFaqs: [
      {
        q: 'How much does a funeral cost in Louisville?',
        a: 'Our modeled 2026 estimate for a traditional funeral with viewing and burial in the Louisville metro is $8,510 (range $7,230 to $9,790), against $8,240 on the Kentucky state page and $9,140 nationally. Direct cremation is modeled at $2,820. Louisville is the most affordable metro in our city set on modeled figures.',
      },
      {
        q: 'Can Louisville families use Indiana funeral homes or cemeteries?',
        a: 'Yes. The Louisville metro includes Clark and Floyd counties in Indiana, and families regularly compare providers in New Albany and Jeffersonville with Louisville homes. The funeral home\'s own state rules and General Price List govern the arrangement, and transport across the river is routine, but confirm any transfer fees in writing before signing.',
      },
    ],
  },
  {
    slug: 'milwaukee',
    name: 'Milwaukee',
    stateName: 'Wisconsin',
    metroName: 'Milwaukee-Waukesha, WI',
    geoFips: '33340',
    rppAllItems: 96.937,
    published: null,
    context: [
      'Milwaukee\'s metro price level (BEA 2024 RPP 96.9) sits below the national average and about 3 percent above the Wisconsin state figure of 94.1.',
      'Forest Home Cemetery, founded in 1850 on the city\'s south side, is among Milwaukee\'s oldest and largest burial grounds and still anchors the city\'s historic cemetery landscape.',
    ],
    caveats: [
      'No published metro price table covers Milwaukee yet. The modeled figures on this page are the planning anchor until a local survey exists, so verify them against local General Price Lists.',
      'Wisconsin\'s cremation share keeps climbing, with the NFDA projecting 72.7 percent of state dispositions will be cremations by 2035. Milwaukee cremation specialists compete hard on direct cremation, so phone quotes often land under the modeled midpoint.',
    ],
    cityFaqs: [
      {
        q: 'What is the average cost of cremation in Milwaukee?',
        a: 'Our modeled 2026 estimate for direct cremation in the Milwaukee metro is $2,940 (range $2,500 to $3,380), and $6,710 for cremation with a viewing and service. No published metro survey covers Milwaukee, but the city\'s cremation specialists compete on price, so collecting three quotes by phone is the fastest way to find the bottom of the local market.',
      },
      {
        q: 'How much does a funeral cost in Milwaukee compared with the Wisconsin average?',
        a: 'Our modeled traditional burial estimate for the Milwaukee metro is $8,860, against $8,600 on the Wisconsin state page and $9,140 nationally. The metro premium is about 3 percent. Families in smaller Wisconsin communities should expect prices closer to, or below, the state page figures.',
      },
    ],
  },
  {
    slug: 'honolulu',
    name: 'Honolulu',
    stateName: 'Hawaii',
    metroName: 'Urban Honolulu, HI',
    geoFips: '46520',
    rppAllItems: 110.961,
    published: null,
    context: [
      'Urban Honolulu\'s price level (BEA 2024 RPP 111.0) sits close to the Hawaii state figure of 110.0, so city and state modeled estimates nearly match, both among the highest in the country.',
      'Hawaii has the highest projected cremation share in the nation: the NFDA projects 86.7 percent of Hawaii dispositions will be cremations by 2035, and Oahu families already choose cremation at rates well above the mainland.',
    ],
    caveats: [
      'Oahu burial space is genuinely scarce and priced like it. Cemetery charges, excluded from these estimates, are where Honolulu burials diverge most from mainland costs.',
      'Shipping remains between the islands or to the mainland adds airline cargo and preparation costs that mainland families never see. Our guide to shipping remains covers the process and paperwork.',
    ],
    cityFaqs: [
      {
        q: 'Why is burial so expensive in Honolulu?',
        a: 'Land. Oahu has a fixed supply of cemetery land in and around an expensive city, and the funeral home estimates on this page exclude the cemetery bill entirely. Plot, opening and closing, and marker costs in Honolulu cemeteries are where a burial budget grows fastest, which is one reason most Hawaii families choose cremation instead.',
      },
      {
        q: 'How much does cremation cost in Honolulu?',
        a: 'Our modeled 2026 estimate for direct cremation in Urban Honolulu is $3,360 (range $2,860 to $3,860), and $7,680 for cremation with a viewing and service. That is close to the Hawaii state page figure of $3,330 for direct cremation, because the city and state price levels nearly match. Cremation avoids the island\'s scarce and costly burial space, which is why the NFDA projects it will reach 86.7 percent of Hawaii dispositions by 2035.',
      },
    ],
  },
];

export const CITIES: CityData[] = SEEDS.map((s) => ({
  slug: s.slug,
  name: s.name,
  stateSlug: stateSlug(s.stateName),
  metroName: s.metroName,
  geoFips: s.geoFips,
  rppAllItems: s.rppAllItems,
  estimates: buildEstimates(s.rppAllItems),
  published: s.published,
  context: s.context,
  caveats: s.caveats,
  cityFaqs: s.cityFaqs,
}));

export function getCity(state: string, city: string): CityData | undefined {
  return CITIES.find((c) => c.stateSlug === state && c.slug === city);
}

export function citiesForState(state: string): CityData[] {
  return CITIES.filter((c) => c.stateSlug === state);
}

export const ALL_CITY_ROUTES: string[] = CITIES.map(
  (c) => `/funeral-costs/${c.stateSlug}/${c.slug}/`,
);
