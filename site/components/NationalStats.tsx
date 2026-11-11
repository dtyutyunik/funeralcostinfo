import Link from 'next/link';
import { dataset, fmt, SERVICE_ORDER } from '../lib/data';

// Canonical national statistics block: the six modeled national anchors behind
// every figure on the site. Used on the homepage, calculator, state pages, and
// top guides so the $9,140 figure and its siblings are always identical.
export default function NationalStats() {
  const national = dataset.anchors;
  const maxAnchor = Math.max(...SERVICE_ORDER.map((k) => national[k].value));
  return (
    <>
      <div className="est-grid">
        {SERVICE_ORDER.map((k, i) => {
          const a = national[k];
          return (
            <div className={`est-card${i === 0 ? ' featured' : ''}`} key={k}>
              <div className="svc">
                {a.label}
                {a.assumption && <small>Stated assumption: no NFDA median exists</small>}
              </div>
              <div className="val">{fmt(a.value)}</div>
              <div className="rng">NFDA 2023 median {a.assumption ? 'n/a' : fmt(a.value_2023)} × 1.1016</div>
              <div className="bar-track" aria-hidden="true">
                <div className="bar-fill" style={{ width: `${(a.value / maxAnchor) * 100}%` }} />
              </div>
              {a.assumption && (
                <div className="assumption">Assumption: {a.assumption}</div>
              )}
            </div>
          );
        })}
      </div>
      <p>
        Modeled estimates in August 2026 dollars: NFDA 2023 national medians adjusted with the BLS
        Consumer Price Index for funeral expenses (factor 1.1016). See the full{' '}
        <Link href="/guides/funeral-costs-by-state-2026/">Funeral Cost Index 2026</Link> for every
        state, and the <Link href="/methodology/">methodology</Link> for sources and limits.
      </p>
    </>
  );
}
