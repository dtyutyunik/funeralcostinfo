'use client';

import { useMemo, useState } from 'react';
import { dataset, fmt, fmtRange, type ServiceKey } from '../lib/data';

const SERVICE_NOTES: Record<string, string> = {
  traditional_burial: 'Viewing + ceremony, burial; vault not included',
  burial_with_vault: 'Viewing + ceremony, burial with vault',
  cremation_with_service: 'Viewing + ceremony, then cremation',
  direct_cremation: 'No viewing or ceremony; simplest cremation option',
  direct_burial: 'Burial without viewing or ceremony',
  green_burial: 'No embalming, biodegradable container, no vault (assumption-based)',
};

export default function Calculator({ defaultState = 'CA', compact = false }: { defaultState?: string; compact?: boolean }) {
  const [stateAbbr, setStateAbbr] = useState(defaultState);
  const [service, setService] = useState<ServiceKey>('traditional_burial');
  const [addons, setAddons] = useState<Record<string, boolean>>({});

  const st = dataset.states.find((s) => s.abbr === stateAbbr)!;
  const mult = st.rpp_all_items / 100;

  const result = useMemo(() => {
    const base = st.estimates[service];
    const lines: { label: string; amount: number; range?: string }[] = [
      { label: dataset.anchors[service].label, amount: base.point, range: fmtRange(base) },
    ];
    for (const [key, on] of Object.entries(addons)) {
      if (!on) continue;
      const a = dataset.addons[key];
      const mid = Math.round((a.mid * mult) / 10) * 10;
      const low = Math.round((a.low * mult) / 10) * 10;
      const high = Math.round((a.high * mult) / 10) * 10;
      lines.push({ label: a.label, amount: mid, range: `${fmt(low)} – ${fmt(high)}` });
    }
    const point = lines.reduce((s, l) => s + l.amount, 0);
    const low = Math.round(point * 0.85 / 10) * 10;
    const high = Math.round(point * 1.15 / 10) * 10;
    return { lines, point, low, high };
  }, [stateAbbr, service, addons, st, mult]);

  const toggle = (k: string) => setAddons((p) => ({ ...p, [k]: !p[k] }));

  return (
    <div className="calc" id="calculator">
      <h2>{compact ? 'Quick estimate' : 'Funeral cost calculator'}</h2>
      <p style={{ color: 'var(--muted)', marginTop: 0 }}>
        Build a line-item estimate for your state. All figures are modeled estimates, not quotes.
      </p>
      <div className="calc-grid">
        <div className="field">
          <label htmlFor="calc-state">State</label>
          <select id="calc-state" value={stateAbbr} onChange={(e) => setStateAbbr(e.target.value)}>
            {dataset.states.map((s) => (
              <option key={s.abbr} value={s.abbr}>{s.name}</option>
            ))}
          </select>
          <div style={{ marginTop: 18 }}>
            <label>Service type</label>
            <div className="radio-list" role="radiogroup" aria-label="Service type">
              {(Object.keys(dataset.anchors) as ServiceKey[]).map((k) => (
                <label key={k}>
                  <input type="radio" name="svc" checked={service === k} onChange={() => setService(k)} />
                  <span>
                    <span className="svc-label">{dataset.anchors[k].label}</span>
                    <span className="svc-note">{SERVICE_NOTES[k]}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="field">
          <label>Optional add-ons <span style={{ fontWeight: 400, color: 'var(--muted)' }}>(typical ranges, state-adjusted)</span></label>
          <div className="check-list">
            {Object.entries(dataset.addons).map(([k, a]) => (
              <label key={k}>
                <input type="checkbox" checked={!!addons[k]} onChange={() => toggle(k)} />
                <span>
                  <span className="svc-label">{a.label}</span>
                  <span className="svc-note">
                    ≈ {fmt(Math.round((a.mid * mult) / 10) * 10)} typical ({fmt(Math.round((a.low * mult) / 10) * 10)}–{fmt(Math.round((a.high * mult) / 10) * 10)})
                  </span>
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="calc-result" aria-live="polite">
        <div style={{ fontSize: 14, color: 'var(--muted)', fontWeight: 600 }}>
          MODELED ESTIMATE — {st.name.toUpperCase()}
        </div>
        <div className="big">{fmt(result.point)}</div>
        <div className="range">Illustrative range: {fmt(result.low)} – {fmt(result.high)}</div>
        <table className="line-items">
          <tbody>
            {result.lines.map((l) => (
              <tr key={l.label}>
                <td>{l.label}{l.range ? <><br /><span style={{ color: 'var(--muted)', fontSize: 13 }}>{l.range}</span></> : null}</td>
                <td>{fmt(l.amount)}</td>
              </tr>
            ))}
            <tr className="total">
              <td>Estimated total</td>
              <td>{fmt(result.point)}</td>
            </tr>
          </tbody>
        </table>
        <div className="no-print" style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
          <button className="btn btn-secondary" onClick={() => window.print()}>Print this estimate</button>
          {!compact && <a className="btn btn-secondary" href="/methodology/">How we calculate this</a>}
        </div>
        <div className="disclaimer">
          <strong>Modeled estimate, not a price quote.</strong> Built from the NFDA 2023 national
          median ({fmt(dataset.anchors[service].value)}) adjusted by the BEA regional price parity
          for {st.name} ({st.rpp_all_items}). Actual funeral-home prices vary widely. Always request
          an itemized General Price List (GPL) — it is your right under the FTC Funeral Rule.
          Excludes cemetery plot unless you add it above.
        </div>
      </div>
    </div>
  );
}
