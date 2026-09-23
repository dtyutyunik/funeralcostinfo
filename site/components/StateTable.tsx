'use client';

import { useMemo, useState } from 'react';
import { dataset, fmt, stateSlug, PHASE0_STATES, VINTAGE_SHORT } from '../lib/data';

type SortKey = 'name' | 'burial' | 'cremation' | 'rpp';

const SORT_LABELS: Record<SortKey, string> = {
  name: 'State name',
  burial: 'Traditional burial cost',
  cremation: 'Direct cremation cost',
  rpp: 'Price level (RPP)',
};

export default function StateTable() {
  const [q, setQ] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('burial');
  const [dir, setDir] = useState<1 | -1>(-1);

  const maxBurial = useMemo(
    () => Math.max(...dataset.states.map((s) => s.estimates.traditional_burial.point)),
    []
  );

  const rows = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const filtered = dataset.states.filter(
      (s) => !needle || s.name.toLowerCase().includes(needle) || s.abbr.toLowerCase() === needle
    );
    const val = (s: (typeof dataset.states)[number]) =>
      sortKey === 'name' ? s.name :
      sortKey === 'burial' ? s.estimates.traditional_burial.point :
      sortKey === 'cremation' ? s.estimates.direct_cremation.point :
      s.rpp_all_items;
    return [...filtered].sort((a, b) => {
      const va = val(a); const vb = val(b);
      const cmp = typeof va === 'string' ? va.localeCompare(vb as string) : (va as number) - (vb as number);
      return cmp * dir;
    });
  }, [q, sortKey, dir]);

  const toggleSort = (key: SortKey) => {
    if (key === sortKey) setDir((d) => (d === 1 ? -1 : 1));
    else { setSortKey(key); setDir(key === 'name' ? 1 : -1); }
  };

  const arrow = (key: SortKey) => (sortKey === key ? (dir === 1 ? ' ↑' : ' ↓') : '');

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
        <label style={{ fontSize: 14.5, color: 'var(--muted)' }}>
          Sort by:{' '}
          <select
            aria-label="Sort states by"
            value={sortKey}
            onChange={(e) => toggleSort(e.target.value as SortKey)}
          >
            {(Object.keys(SORT_LABELS) as SortKey[]).map((k) => (
              <option key={k} value={k}>{SORT_LABELS[k]}</option>
            ))}
          </select>
        </label>
        <span className="count">{rows.length} of {dataset.states.length} shown</span>
      </div>
      <div className="table-scroll">
        <table className="data">
          <caption>
            Modeled funeral-cost estimates by state ({VINTAGE_SHORT}). Select a column header to sort.
          </caption>
          <thead>
            <tr>
              <th><button type="button" onClick={() => toggleSort('name')}>State{arrow('name')}</button></th>
              <th className="num"><button type="button" onClick={() => toggleSort('burial')}>Traditional burial{arrow('burial')}</button></th>
              <th className="num"><button type="button" onClick={() => toggleSort('cremation')}>Direct cremation{arrow('cremation')}</button></th>
              <th className="num"><button type="button" onClick={() => toggleSort('rpp')}>Price level{arrow('rpp')}</button></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((s) => {
              const slug = stateSlug(s.name);
              const linked = PHASE0_STATES.includes(slug);
              const burial = s.estimates.traditional_burial.point;
              return (
                <tr key={s.abbr}>
                  <td>
                    {linked ? (
                      <a className="state-link" href={`/funeral-costs/${slug}/`}>{s.name}</a>
                    ) : (
                      <>{s.name}</>
                    )}
                  </td>
                  <td className="num cost-bar-cell">
                    <strong>{fmt(burial)}</strong>
                    <div className="cost-bar-track" aria-hidden="true">
                      <div className="cost-bar-fill" style={{ width: `${(burial / maxBurial) * 100}%` }} />
                    </div>
                  </td>
                  <td className="num">{fmt(s.estimates.direct_cremation.point)}</td>
                  <td className="num" style={{ color: 'var(--muted)' }}>{s.rpp_all_items.toFixed(1)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="updated" style={{ marginTop: 12 }}>
        All figures are modeled estimates with illustrative ranges — open a state guide for all six
        service types, ranges, and what is included. Data vintage: {VINTAGE_SHORT}. Last updated {dataset.built}.
      </p>
    </div>
  );
}
