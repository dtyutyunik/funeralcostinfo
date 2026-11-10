import type { MetadataRoute } from 'next';
import { SITE_URL, ALL_STATE_SLUGS, LAST_UPDATED } from '../lib/data';
import { ALL_CITY_ROUTES } from '../lib/cities';
import { PAGE_DATES } from '../lib/page-dates';

export const dynamic = 'force-static';

function lastModFor(route: string): Date {
  let key = route === '' ? '/' : route;
  if (/^\/funeral-costs\/[a-z-]+\/$/.test(route)) key = 'state-template';
  else if (route.startsWith('/funeral-costs/')) key = 'city-template';
  const d = PAGE_DATES[key]?.updated ?? LAST_UPDATED;
  return new Date(d + 'T00:00:00Z');
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/calculator/',
    '/methodology/',
    '/guides/',
    '/guides/funeral-rule-rights/',
    '/guides/funeral-service-types/',
    '/guides/funeral-glossary/',
    '/guides/why-funeral-cost-figures-disagree/',
    '/guides/funeral-cost-2026-breakdown/',
    '/guides/funeral-costs-by-state-2026/',
    '/guides/cremation-cost-2026/',
    '/guides/burial-plot-costs/',
    '/guides/headstone-costs/',
    '/guides/paying-for-a-funeral/',
    '/guides/when-someone-dies-checklist/',
    '/guides/compare-funeral-homes/',
    '/guides/green-burial-composting/',
    '/guides/prepaid-funeral-plans/',
    '/guides/casket-buying-guide/',
    '/guides/who-can-arrange-funeral/',
    '/guides/scattering-ashes-laws-costs/',
    '/guides/body-organ-donation-guide/',
    '/guides/urn-costs-guide/',
    '/guides/obituary-costs/',
    '/guides/veterans-burial-benefits/',
    '/guides/shipping-remains/',
    '/guides/aquamation-guide/',
    '/guides/funeral-costs-by-city/',
    '/guides/corporate-vs-independent-funeral-homes/',
    '/guides/mausoleum-cost/',
    '/guides/embalming-costs-requirements/',
    '/guides/religious-funeral-costs/',
    '/guides/home-funeral-cost/',
    '/guides/funeral-memorial-society/',
    '/guides/international-repatriation-remains/',
    '/guides/death-certificates-cost/',
    '/guides/burial-at-sea/',
    '/guides/final-expense-burial-insurance/',
    '/guides/file-complaint-funeral-home/',
    '/guides/indigent-burial-assistance/',
    '/guides/burial-vault-cost/',
    '/guides/how-to-plan-a-funeral/',
    '/guides/cremation-diamonds-cost/',
    '/guides/funeral-loans/',
    '/guides/memorial-service-cost/',
    '/guides/what-to-do-with-ashes/',
    '/guides/funeral-officiant-cost/',
    '/guides/social-security-survivor-benefits/',
    '/guides/graveside-service-cost/',
    '/guides/how-to-write-a-eulogy/',
    '/guides/funeral-transportation-cost/',
    '/guides/funeral-reception-cost/',
    '/guides/cheapest-funeral-options/',
    '/guides/how-cremation-works/',
    '/guides/funeral-flowers-cost/',
    '/guides/military-funeral-honors/',
    '/guides/infant-funeral-costs/',
    '/guides/crowdfunding-a-funeral/',
    '/guides/direct-cremation-vs-traditional-funeral/',
    '/guides/funeral-live-streaming-cost/',
    '/guides/after-a-death-checklist-first-month/',
    '/guides/cremation-container-cost/',
    '/guides/funeral-etiquette/',
    '/guides/cremation-jewelry-cost/',
    '/guides/are-funeral-expenses-tax-deductible/',
    '/guides/how-much-does-pet-cremation-cost/',
    '/guides/dog-cremation-cost/',
    '/guides/cat-cremation-cost/',
    '/guides/in-home-pet-euthanasia-cost/',
    '/guides/what-to-do-when-a-pet-dies/',
    '/guides/pet-burial-cost/',
    '/guides/pet-aquamation-cost/',
    '/guides/pet-home-burial-laws/',
    '/guides/cemetery-fees-explained/',
    '/guides/does-medicaid-pay-for-funeral-costs/',
    '/about/',
    '/editorial-policy/',
    '/affiliate-disclosure/',
    '/privacy/',
    '/terms/',
    '/contact/',
    '/press/',
    ...ALL_STATE_SLUGS.map((s) => `/funeral-costs/${s}/`),
    ...ALL_CITY_ROUTES,
  ];
  return routes.map((r) => ({
    url: SITE_URL + (r || '/'),
    lastModified: lastModFor(r),
    changeFrequency: r === '' ? 'weekly' : 'monthly',
    priority: r === '' ? 1 : r.startsWith('/funeral-costs/') ? 0.8 : 0.6,
  }));
}
