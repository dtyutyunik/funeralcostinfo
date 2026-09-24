import type { MetadataRoute } from 'next';
import { SITE_URL, PHASE0_STATES, LAST_UPDATED } from '../lib/data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(LAST_UPDATED + 'T00:00:00Z');
  const routes = [
    '',
    '/calculator/',
    '/methodology/',
    '/guides/funeral-rule-rights/',
    '/guides/funeral-service-types/',
    '/guides/funeral-glossary/',
    '/about/',
    '/editorial-policy/',
    '/affiliate-disclosure/',
    '/privacy/',
    '/contact/',
    '/press/',
    ...PHASE0_STATES.map((s) => `/funeral-costs/${s}/`),
  ];
  return routes.map((r) => ({
    url: SITE_URL + (r || '/'),
    lastModified,
    changeFrequency: r === '' ? 'weekly' : 'monthly',
    priority: r === '' ? 1 : r.startsWith('/funeral-costs/') ? 0.8 : 0.6,
  }));
}
