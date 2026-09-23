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

const STEPS = ['State', 'Service', 'Add-ons', 'Estimate'] as const;

export default function Calculator({ defaultState = 'CA', compact = false }: { defaultState?: string; compact?: boolean }) {
  const [step, setStep] = useState(0);
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
  const addonCount = Object.values(addons).filter(Boolean).length;

  return (
    <div className="calc card card-pad" id="calculator">
      <div className="calc-head">
        <div>
          <h2>{compact ? 'Build your estimate' : 'Funeral cost calculator'}</h2>
          {!compact && (
            <p>Four steps, about a minute. Every figure is a modeled estimate — never a quote.</p>
          )}
        </div>
      </div>

      <div className="stepper no-print" aria-hidden="true">
        {STEPS.map((label, i) => (
          <div
            key={label}
            data-n={i + 1}
            className={`step${i < step ? ' done' : ''}${i === step ? ' active' : ''}`}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Step 1: State */}
      {step === 0 && (
        <div className="calc-step-panel field">
          <label htmlFor="calc-state">Which state are you planning in?</label>
          <select id="calc-state" value={stateAbbr} onChange={(e) => setStateAbbr(e.target.value)}>
            {dataset.states.map((s) => (
              <option key={s.abbr} value={s.abbr}>{s.name}</option>
            ))}
          </select>
          <p style={{ color: 'var(--muted)', fontSize: 14.5, marginTop: 12 }}>
            Prices are adjusted by {st.name}&rsquo;s regional price parity ({st.rpp_all_items.toFixed(1)}),
            from the BEA&rsquo;s 2024 release.
          </p>
        </div>
      )}

      {/* Step 2: Service */}
      {step === 1 && (
        <div className="calc-step-panel">
          <span className="field-legend" id="svc-legend">What kind of service?</span>
          <div className="radio-list two-col" role="radiogroup" aria-labelledby="svc-legend">
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
      )}

      {/* Step 3: Add-ons */}
      {step === 2 && (
        <div className="calc-step-panel">
          <span className="field-legend" id="addon-legend">
            Add typical extras <span style={{ fontWeight: 400, color: 'var(--muted)' }}>(optional — state-adjusted)</span>
          </span>
          <div className="check-list" role="group" aria-labelledby="addon-legend">
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
      )}

      {/* Step 4: Estimate */}
      {step === 3 && (
        <div className="calc-step-panel">
          <div className="receipt" aria-live="polite">
            <div className="receipt-head">
              <div className="rlabel">Modeled estimate — {st.name}</div>
              <div className="big">{fmt(result.point)}</div>
              <div className="range">Illustrative range: {fmt(result.low)} – {fmt(result.high)}</div>
            </div>
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
          </div>
          <div className="no-print" style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: 'wrap' }}>
            <button className="btn btn-secondary" onClick={() => window.print()}>Print this estimate</button>
            {!compact && <a className="btn btn-secondary" href="/methodology/">How we calculate this</a>}
          </div>
          <div className="disclaimer">
            <strong>Modeled estimate, not a price quote.</strong> Built from the NFDA 2023 national
            median ({fmt(dataset.anchors[service].value)}) adjusted to August 2026 dollars via the
            BLS funeral-expenses CPI, then scaled by the BEA 2024 regional price
            parity for {st.name} ({st.rpp_all_items.toFixed(1)}). Actual funeral-home prices vary
            widely. Always request an itemized General Price List (GPL) — it is your right under
            the FTC Funeral Rule. Excludes cemetery plot unless you added it above.
          </div>
        </div>
      )}

      <div className="calc-nav no-print">
        <button
          className="btn btn-secondary"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
        >
          ← Back
        </button>
        {step < 3 ? (
          <button className="btn" onClick={() => setStep((s) => Math.min(3, s + 1))}>
            {step === 2 ? `See my estimate${addonCount ? ` (${addonCount} extra${addonCount > 1 ? 's' : ''})` : ''}` : 'Continue →'}
          </button>
        ) : (
          <button className="btn btn-secondary" onClick={() => { setStep(0); setAddons({}); }}>
            Start over
          </button>
        )}
      </div>
    </div>
  );
}
