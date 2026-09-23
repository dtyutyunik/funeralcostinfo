import type { MetadataRoute } from 'next';
import { SITE_URL } from '../lib/data';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  // Deliberately permissive for AI search crawlers: this content is meant to be cited.
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
    ],
    sitemap: SITE_URL + '/sitemap.xml',
  };
}
