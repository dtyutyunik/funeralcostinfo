import Link from 'next/link';

export interface NextStepItem {
  href: string;
  label: string;
  blurb: string;
}

/**
 * End-of-page "keep planning" module for state and city pages (added 2026-11-26,
 * Sprint 2 v2 Queue D / EXP-001): gives a one-page visitor a guided next step
 * (city pages, the state guide where one exists, evergreen guides, and the
 * inline calculator anchor) to lift pages per session.
 */
export default function NextSteps({ heading, items }: { heading: string; items: NextStepItem[] }) {
  if (items.length === 0) return null;
  return (
    <section className="next-steps" aria-label={heading}>
      <h2>{heading}</h2>
      <ul>
        {items.map((it) => (
          <li key={it.href + it.label}>
            <Link href={it.href}>{it.label}</Link>
            <span className="next-steps-blurb"> — {it.blurb}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
