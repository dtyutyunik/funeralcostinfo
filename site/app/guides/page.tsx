import type { Metadata } from 'next';
import JsonLd, { breadcrumbJsonLd } from '../../components/JsonLd';
import { SITE_URL, LAST_UPDATED } from '../../lib/data';
import { GUIDES, type GuideGroup } from '../../lib/guides';
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

const GROUP_ORDER: GuideGroup[] = ['Costs & data', 'Planning', 'Rights & terms'];

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
        {GROUP_ORDER.map((heading) => (
          <section key={heading}>
            <h2>{heading}</h2>
            <div className="guide-grid">
              {GUIDES.filter((g) => g.group === heading).map((guide) => (
                <article key={guide.slug} className="card guide-card">
                  <Link href={`/guides/${guide.slug}/`} aria-label={guide.title} className="img-link">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="guide-card-img"
                      width={600}
                      height={400}
                      loading="lazy"
                    />
                  </Link>
                  <div className="guide-card-body">
                    <h3>
                      <Link href={`/guides/${guide.slug}/`}>{guide.title}</Link>
                    </h3>
                    <p>{guide.blurb}</p>
                    <Link className="guide-readmore" href={`/guides/${guide.slug}/`}>
                      Read more →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
        <p className="updated">Last updated {LAST_UPDATED}.</p>
      </div>
    </>
  );
}
