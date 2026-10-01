'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GUIDES, type GuideGroup } from '../lib/guides';

const GROUP_ORDER: GuideGroup[] = ['Costs & data', 'Planning', 'Rights & terms'];

/**
 * Curated "top guides" per group — the flagship, highest-intent articles.
 * Everything else lives one click away on the /guides/ index.
 * (Swap any slug here to change the menu; no analytics feed exists yet.)
 */
const CURATED: Record<GuideGroup, string[]> = {
  'Costs & data': [
    'funeral-cost-2026-breakdown',
    'funeral-costs-by-state-2026',
    'cremation-cost-2026',
    'funeral-costs-by-city',
    'burial-plot-costs',
    'casket-buying-guide',
  ],
  Planning: [
    'when-someone-dies-checklist',
    'paying-for-a-funeral',
    'compare-funeral-homes',
    'prepaid-funeral-plans',
    'funeral-service-types',
    'veterans-burial-benefits',
  ],
  'Rights & terms': [
    'funeral-rule-rights',
    'funeral-glossary',
    'file-complaint-funeral-home',
    'final-expense-burial-insurance',
  ],
};

function curatedGuides(group: GuideGroup) {
  const slugs = CURATED[group];
  return slugs
    .map((slug) => GUIDES.find((g) => g.slug === slug))
    .filter((g): g is (typeof GUIDES)[number] => Boolean(g));
}

/**
 * "Guides" nav item with a dropdown menu of the top guides per group,
 * grouped the same way as the /guides/ index. Desktop: opens on hover
 * or keyboard focus; touch/mobile: toggled with the chevron button.
 */
export default function GuidesDropdown() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const btnRef = useRef<HTMLButtonElement>(null);

  // Close the menu whenever the route changes (layout persists across navigations).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open ]);

  return (
    <div className={`nav-dropdown${open ? ' open' : ''}`}>
      <span className="nav-dropdown-trigger">
        <Link href="/guides/">Guides</Link>
        <button
          ref={btnRef}
          type="button"
          className="nav-dropdown-toggle"
          aria-expanded={open}
          aria-controls="guides-menu"
          aria-label={open ? 'Close guides menu' : 'Open guides menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="chev">
            &#x25BE;
          </span>
        </button>
      </span>
      <div className="nav-dropdown-panel" id="guides-menu">
        <div className="nav-dropdown-grid">
          {GROUP_ORDER.map((group) => (
            <div key={group} className="nav-dropdown-col">
              <strong>{group}</strong>
              <ul>
                {curatedGuides(group).map((g) => (
                  <li key={g.slug}>
                    <Link href={`/guides/${g.slug}/`}>{g.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Link href="/guides/" className="nav-dropdown-all">
          View all guides &rarr;
        </Link>
      </div>
    </div>
  );
}
