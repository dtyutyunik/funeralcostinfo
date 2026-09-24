import type { MetadataRoute } from 'next';
import { SITE_URL, ALL_STATE_SLUGS, LAST_UPDATED } from '../lib/data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(LAST_UPDATED + 'T00:00:00Z');
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
    '/about/',
    '/editorial-policy/',
    '/affiliate-disclosure/',
    '/privacy/',
    '/contact/',
    '/press/',
    ...ALL_STATE_SLUGS.map((s) => `/funeral-costs/${s}/`),
  ];
  return routes.map((r) => ({
    url: SITE_URL + (r || '/'),
    lastModified,
    changeFrequency: r === '' ? 'weekly' : 'monthly',
    priority: r === '' ? 1 : r.startsWith('/funeral-costs/') ? 0.8 : 0.6,
  }));
}
