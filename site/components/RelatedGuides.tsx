import Link from 'next/link';
import { getRelatedGuides } from '../lib/guides';

/** "Related guides" section: 3 framed mini-cards, same group first. */
export default function RelatedGuides({ currentSlug }: { currentSlug: string }) {
  const related = getRelatedGuides(currentSlug);
  return (
    <section className="related" aria-labelledby="related-guides-heading">
      <h2 id="related-guides-heading">Related guides</h2>
      <div className="guide-grid">
        {related.map((g) => (
          <article key={g.slug} className="card guide-card">
            <Link href={`/guides/${g.slug}/`} aria-label={g.title} className="img-link">
              <img
                src={g.image}
                alt={g.title}
                className="guide-card-img"
                width={600}
                height={400}
                loading="lazy"
              />
            </Link>
            <div className="guide-card-body">
              <h3>
                <Link href={`/guides/${g.slug}/`}>{g.title}</Link>
              </h3>
              <p>{g.blurb}</p>
              <Link className="guide-readmore" href={`/guides/${g.slug}/`}>
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
