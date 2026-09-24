import type { ReactNode } from 'react';
import { getGuide } from '../lib/guides';

/**
 * Framed hero for guide article pages: featured image above the article h1,
 * inside a bordered panel matching the site's card style. The h1 is passed
 * as children so each page's exact SEO markup stays untouched.
 */
export default function GuideHero({
  slug,
  imageAlt,
  children,
}: {
  slug: string;
  imageAlt: string;
  children: ReactNode;
}) {
  const guide = getGuide(slug);
  return (
    <figure className="card guide-hero">
      {guide && (
        <img
          src={guide.image}
          alt={imageAlt}
          className="guide-hero-img"
          width={1200}
          height={400}
        />
      )}
      <figcaption className="guide-hero-body">{children}</figcaption>
    </figure>
  );
}
