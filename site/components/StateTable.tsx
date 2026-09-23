'use client';

import { useState } from 'react';
import { dataset, fmt, stateSlug, type ServiceKey } from '../lib/data';

export default function StateTable() {
  const [q, setQ] = useState('');
  const rows = dataset.states.filter((s) =>
    s.name.toLowerCase().includes(q.toLowerCase()) || s.abbr.toLowerCase() === q.toLowerCase()
  );

  return (
    <div>
      <div className="table-tools no-print">
        <input
          type="search"
          placeholder="Search states…"
          aria-label="Search states"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <span className="updated">{rows.length} of {dataset.states.length} shown</span>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table className="data">
          <caption style={{ textAlign: 'left', paddingBottom: 8, color: 'var(--muted)', fontSize: 14 }}>
            Modeled funeral-cost estimates by state (NFDA 2023 national medians × BEA regional price parity).
          </caption>
          <thead>
            <tr>
              <th>State</th>
              <th className="num">Traditional burial</th>
              <th className="num">Direct cremation</th>
              <th className="num">Price level (RPP)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((s) => (
              <tr key={s.abbr}>
                <td><a href={`/funeral-costs/${stateSlug(s.name)}/`}>{s.name}</a></td>
                <td className="num">{fmt(s.estimates.traditional_burial.point)}</td>
                <td className="num">{fmt(s.estimates.direct_cremation.point)}</td>
                <td className="num">{s.rpp_all_items.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="updated">
        All figures are modeled estimates with illustrative ranges — see any state page for all six
        service types, ranges, and what is included. Data vintage: NFDA 2023 medians; BEA 2023 regional
        price parities. Last updated {dataset.built}.
      </p>
    </div>
  );
}

export function serviceLabel(k: ServiceKey): string {
  return dataset.anchors[k].label;
}
