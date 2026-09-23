'use client';

import { useMemo, useRef, useState } from 'react';
import { US_STATE_PATHS, MAP_VIEWBOX } from '../data/us-states';
import { dataset, fmt, stateSlug, PHASE0_STATES, VINTAGE_SHORT } from '../lib/data';

const BIN_COLORS = ['#EAF3F1', '#CBE0DB', '#9CC2B9', '#6FA196', '#3E7F74', '#0E5B56'];
const PHASE0 = new Set(PHASE0_STATES);

interface Tip {
  abbr: string;
  x: number;
  y: number;
}

export default function UsMap() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tip, setTip] = useState<Tip | null>(null);

  const { fills, minV, maxV } = useMemo(() => {
    const vals = dataset.states.map((s) => s.estimates.traditional_burial.point);
    const minV = Math.min(...vals);
    const maxV = Math.max(...vals);
    const fills: Record<string, string> = {};
    for (const s of dataset.states) {
      const v = s.estimates.traditional_burial.point;
      const t = (v - minV) / Math.max(1, maxV - minV);
      fills[s.abbr] = BIN_COLORS[Math.min(BIN_COLORS.length - 1, Math.floor(t * BIN_COLORS.length))];
    }
    return { fills, minV, maxV };
  }, []);

  const stateByAbbr = useMemo(() => {
    const m: Record<string, (typeof dataset.states)[number]> = {};
    for (const s of dataset.states) m[s.abbr] = s;
    return m;
  }, []);

  const placeTip = (abbr: string, clientX: number, clientY: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setTip({ abbr, x: clientX - r.left, y: clientY - r.top });
  };

  const renderState = (abbr: string) => {
    const st = stateByAbbr[abbr];
    if (!st) return null;
    const d = US_STATE_PATHS[abbr];
    const slug = stateSlug(st.name);
    const isLinked = PHASE0.has(slug);
    const label = `${st.name}: modeled traditional burial ${fmt(st.estimates.traditional_burial.point)}${isLinked ? '. Opens the ' + st.name + ' cost guide.' : ''}`;
    const path = (
      <path
        d={d}
        fill={fills[abbr]}
        aria-hidden="true"
        className={`state${tip && tip.abbr !== abbr ? ' dim' : ''}${isLinked ? ' linked' : ''}`}
      />
    );
    const shape = isLinked ? (
      <a href={`/funeral-costs/${slug}/`} aria-label={label}>
        {path}
      </a>
    ) : (
      path
    );
    return (
      <g
        key={abbr}
        tabIndex={0}
        role={isLinked ? undefined : 'img'}
        aria-label={isLinked ? undefined : label}
        onMouseEnter={(e) => placeTip(abbr, e.clientX, e.clientY)}
        onMouseMove={(e) => placeTip(abbr, e.clientX, e.clientY)}
        onMouseLeave={() => setTip(null)}
        onFocus={(e) => {
          const r = (e.currentTarget as SVGGElement).getBoundingClientRect();
          const wrap = wrapRef.current?.getBoundingClientRect();
          if (wrap) setTip({ abbr, x: r.left + r.width / 2 - wrap.left, y: r.top - wrap.top });
        }}
        onBlur={() => setTip(null)}
      >
        {shape}
      </g>
    );
  };

  const tipState = tip ? stateByAbbr[tip.abbr] : null;

  return (
    <div className="card map-card">
      <div className="map-wrap" ref={wrapRef}>
        <svg viewBox={MAP_VIEWBOX} role="img" aria-label="U.S. map of modeled traditional funeral costs by state">
          <title>Modeled cost of a traditional funeral with viewing and burial, by state</title>
          {Object.keys(US_STATE_PATHS).map(renderState)}
        </svg>
        {tip && tipState && (
          <div className="map-tooltip" style={{ left: tip.x, top: tip.y }} aria-hidden="true">
            <strong>{tipState.name}</strong>
            <br />
            <span className="t-est">{fmt(tipState.estimates.traditional_burial.point)}</span>
            {' '}traditional burial
            <br />
            <span style={{ opacity: 0.75, fontSize: 12 }}>
              Range {fmt(tipState.estimates.traditional_burial.low)}–{fmt(tipState.estimates.traditional_burial.high)} · RPP {tipState.rpp_all_items.toFixed(1)}
            </span>
          </div>
        )}
      </div>
      <div className="map-legend" aria-hidden="true">
        <span>{fmt(minV)}</span>
        <span className="bar" />
        <span>{fmt(maxV)}</span>
        <span>Modeled traditional burial (viewing + burial)</span>
      </div>
      <p className="map-note">
        Five states have full cost guides — select a highlighted state or browse the table below.
        Data vintage: {VINTAGE_SHORT} · Updated {dataset.built}.
      </p>
    </div>
  );
}
