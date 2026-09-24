export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}

export function breadcrumbJsonLd(crumbs: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

export function personJsonLd() {
  return {
    '@type': 'Person',
    name: 'Dmitriy Tyutyunik',
    url: 'https://www.linkedin.com/in/dmitriy-tyutyunik/',
    jobTitle: 'Software engineer',
    sameAs: ['https://www.linkedin.com/in/dmitriy-tyutyunik/'],
  };
}

export function organizationJsonLd(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FuneralCostInfo',
    url: siteUrl + '/',
    description:
      'Independent, modeled funeral-cost estimates for every U.S. state. We take no money from funeral homes.',
    foundingDate: '2026-09',
    founder: personJsonLd(),
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@funeralcostinfo.com',
      contactType: 'customer service',
    },
  };
}

export function articleJsonLd(opts: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  siteUrl: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: personJsonLd(),
    publisher: {
      '@type': 'Organization',
      name: 'FuneralCostInfo',
      url: opts.siteUrl + '/',
    },
    inLanguage: 'en-US',
  };
}
