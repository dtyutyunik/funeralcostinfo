'use client';

import { useMemo, useState } from 'react';
import { dataset, options, fmt, fmtRange, adjAddon, type ServiceKey } from '../lib/data';
import Link from 'next/link';

const SERVICE_NOTES: Record<string, string> = {
  traditional_burial: 'Viewing + ceremony, burial; vault not included',
  burial_with_vault: 'Viewing + ceremony, burial with vault',
  cremation_with_service: 'Viewing + ceremony, then cremation',
  direct_cremation:
    'No viewing or ceremony; simplest cremation option. The NFDA median reflects full-service funeral homes — discount and direct providers often charge less.',
  direct_burial: 'Burial without viewing or ceremony',
  green_burial: 'No embalming, biodegradable container, no vault (assumption-based)',
};

const STEPS = ['State', 'Service', 'Add-ons', 'Estimate'] as const;

const CHANGE_BADGE: Record<string, string> = {
  remove: '− removed',
  add: '+ added',
  change: '→ changed',
  note: 'note',
  optional: 'optional',
};

interface Line {
  label: string;
  amount: number;
  range?: string;
  sub?: string;
  negative?: boolean;
}

export default function Calculator({ defaultState = 'CA', compact = false }: { defaultState?: string; compact?: boolean }) {
  const [step, setStep] = useState(0);
  const [stateAbbr, setStateAbbr] = useState(defaultState);
  const [service, setService] = useState<ServiceKey>('traditional_burial');
  const [addons, setAddons] = useState<Record<string, boolean>>({});
  const [tradition, setTradition] = useState('');
  const [vaPath, setVaPath] = useState<'none' | 'service_connected' | 'non_service_connected'>('none');
  const [vaHeadstone, setVaHeadstone] = useState(false);
  const [bodyDonation, setBodyDonation] = useState(false);

  const st = dataset.states.find((s) => s.abbr === stateAbbr)!;
  const mult = st.rpp_all_items / 100;
  const trad = options.religious_traditions.find((t) => t.id === tradition);
  const va = options.va_benefits;
  const anchor = dataset.anchors[service];

  const result = useMemo(() => {
    const lines: Line[] = [];
    if (bodyDonation) {
      lines.push({
        label: `${anchor.label} — via body donation program`,
        amount: 0,
        range: '$0 if the donation is accepted',
        sub: 'Programs typically cover cremation, transport, and the death certificate at no cost.',
      });
    } else {
      const base = st.estimates[service];
      lines.push({ label: anchor.label, amount: base.point, range: fmtRange(base) });
    }
    // Generic add-ons
    for (const [key, on] of Object.entries(addons)) {
      if (!on) continue;
      if (key.startsWith('trad_')) continue; // rendered from the tradition panel instead
      const a = dataset.addons[key];
      if (!a) continue;
      const v = adjAddon(a, mult);
      lines.push({ label: a.label, amount: v.mid, range: `${fmt(v.low)} – ${fmt(v.high)}`, sub: a.note });
    }
    // Tradition-specific add-ons
    if (trad) {
      for (const ta of trad.addons) {
        if (!addons[ta.key]) continue;
        const v = adjAddon(ta, mult);
        lines.push({ label: ta.label, amount: v.mid, range: `${fmt(v.low)} – ${fmt(v.high)}`, sub: ta.note });
      }
    }
    // VA deductions (federal amounts — not state-adjusted)
    if (vaPath !== 'none') {
      const al = va.allowances.find((x) => x.key === (vaPath === 'service_connected' ? 'va_service_connected' : 'va_non_service'));
      if (al) lines.push({ label: al.label, amount: -al.amount, sub: 'Must be claimed — not automatic.', negative: true });
      if (vaHeadstone) {
        const hs = va.allowances.find((x) => x.key === 'va_headstone')!;
        lines.push({ label: hs.label, amount: -hs.amount, negative: true });
      }
    }
    const rawTotal = lines.reduce((s, l) => s + l.amount, 0);
    const point = Math.max(0, rawTotal);
    const low = Math.round((point * 0.85) / 10) * 10;
    const high = Math.round((point * 1.15) / 10) * 10;
    return { lines, point, low, high };
  }, [stateAbbr, service, addons, st, mult, trad, vaPath, vaHeadstone, bodyDonation, anchor, va.allowances]);

  const toggle = (k: string) => setAddons((p) => ({ ...p, [k]: !p[k] }));
  const addonCount = Object.values(addons).filter(Boolean).length + (vaPath !== 'none' ? 1 : 0) + (bodyDonation ? 1 : 0);

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
            from the BEA&rsquo;s 2024 release, and stated in August 2026 dollars.
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

          <div className="field" style={{ marginTop: 22 }}>
            <label htmlFor="calc-tradition">Religious or cultural tradition <span style={{ fontWeight: 400, color: 'var(--muted)' }}>(optional)</span></label>
            <select id="calc-tradition" value={tradition} onChange={(e) => setTradition(e.target.value)}>
              <option value="">None — standard model</option>
              {options.religious_traditions.map((t) => (
                <option key={t.id} value={t.id}>{t.label}</option>
              ))}
            </select>
          </div>

          {trad && (
            <div className="tradition-panel" style={{ marginTop: 16 }}>
              <h3 style={{ marginTop: 0 }}>{trad.label} — what changes</h3>
              {trad.suggests_service && !service.includes('cremation') && (
                <p className="tradition-hint">
                  Heads up: this tradition is usually paired with cremation — consider switching the
                  service above to &ldquo;Cremation with viewing + ceremony&rdquo;.
                </p>
              )}
              <ul className="tradition-changes">
                {trad.line_changes.map((c, i) => (
                  <li key={i}>
                    <span className={`change-badge change-${c.change}`}>{CHANGE_BADGE[c.change] ?? c.change}</span>{' '}
                    <strong>{c.item}:</strong> {c.detail}
                  </li>
                ))}
              </ul>
              {trad.typical_totals.map((t, i) => (
                <p key={i} style={{ marginBottom: 6 }}>
                  <strong>{t.label}:</strong> {t.range} <span style={{ color: 'var(--muted)' }}>— {t.detail}</span>
                </p>
              ))}
              <p style={{ color: 'var(--muted)', fontSize: 14 }}><strong>Cemetery note:</strong> {trad.cemetery_note}</p>
              {trad.addons.length > 0 && (
                <div className="check-list" style={{ marginTop: 12 }}>
                  {trad.addons.map((ta) => {
                    const v = adjAddon(ta, mult);
                    return (
                      <label key={ta.key}>
                        <input type="checkbox" checked={!!addons[ta.key]} onChange={() => toggle(ta.key)} />
                        <span>
                          <span className="svc-label">{ta.label}</span>
                          <span className="svc-note">≈ {fmt(v.mid)} typical ({fmt(v.low)}–{fmt(v.high)}) — {ta.note}</span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              )}
              <p className="disclaimer" style={{ marginTop: 12 }}>{trad.disclaimer}</p>
            </div>
          )}

          <div className="field" style={{ marginTop: 22 }}>
            <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={bodyDonation}
                onChange={(e) => setBodyDonation(e.target.checked)}
                style={{ marginTop: 4 }}
              />
              <span>
                <strong>Considering body donation to science?</strong>
                <span style={{ display: 'block', fontWeight: 400, color: 'var(--muted)', fontSize: 14.5 }}>
                  Donation programs typically cover cremation, transport, and the death certificate free —
                  if the donation is accepted.
                </span>
              </span>
            </label>
          </div>
          {bodyDonation && (
            <div className="tradition-panel" style={{ marginTop: 12 }}>
              <p style={{ marginTop: 0 }}>{options.body_donation.intro}</p>
              <ul>
                {options.body_donation.programs.map((p) => (
                  <li key={p.name}><strong>{p.name}:</strong> {p.detail}</li>
                ))}
              </ul>
              <p><strong>The catches:</strong></p>
              <ul>
                {options.body_donation.catches.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Step 3: Add-ons */}
      {step === 2 && (
        <div className="calc-step-panel">
          <span className="field-legend" id="addon-legend">
            Add typical extras <span style={{ fontWeight: 400, color: 'var(--muted)' }}>(optional — state-adjusted unless noted)</span>
          </span>
          <div className="check-list" role="group" aria-labelledby="addon-legend">
            {Object.entries(dataset.addons).map(([k, a]) => {
              const v = adjAddon(a, mult);
              return (
                <label key={k}>
                  <input type="checkbox" checked={!!addons[k]} onChange={() => toggle(k)} />
                  <span>
                    <span className="svc-label">{a.label}</span>
                    <span className="svc-note">
                      ≈ {fmt(v.mid)} typical ({fmt(v.low)}–{fmt(v.high)})
                    </span>
                  </span>
                </label>
              );
            })}
          </div>

          <div className="upkeep-box" style={{ marginTop: 18 }}>
            <strong>{options.upkeep.label}.</strong> {options.upkeep.explainer}
          </div>
          <p style={{ color: 'var(--muted)', fontSize: 14 }}>{options.cash_advance_note}</p>

          <div className="field" style={{ marginTop: 18 }}>
            <span className="field-legend" id="va-legend">Was the deceased a U.S. veteran? <span style={{ fontWeight: 400, color: 'var(--muted)' }}>(optional — reduces the total)</span></span>
            <div className="radio-list" role="radiogroup" aria-labelledby="va-legend">
              <label>
                <input type="radio" name="va" checked={vaPath === 'none'} onChange={() => setVaPath('none')} />
                <span><span className="svc-label">No / prefer not to say</span></span>
              </label>
              <label>
                <input type="radio" name="va" checked={vaPath === 'service_connected'} onChange={() => setVaPath('service_connected')} />
                <span>
                  <span className="svc-label">Yes — service-connected death</span>
                  <span className="svc-note">VA burial allowance up to {fmt(2000)} (deducted)</span>
                </span>
              </label>
              <label>
                <input type="radio" name="va" checked={vaPath === 'non_service_connected'} onChange={() => setVaPath('non_service_connected')} />
                <span>
                  <span className="svc-label">Yes — non-service-connected death</span>
                  <span className="svc-note">VA burial + plot allowances {fmt(2004)} (deducted)</span>
                </span>
              </label>
            </div>
          </div>
          {vaPath !== 'none' && (
            <div className="tradition-panel" style={{ marginTop: 12 }}>
              <p style={{ marginTop: 0 }}>{va.intro}</p>
              <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'pointer', marginBottom: 10 }}>
                <input type="checkbox" checked={vaHeadstone} onChange={(e) => setVaHeadstone(e.target.checked)} style={{ marginTop: 4 }} />
                <span><strong>Private-cemetery headstone/marker</strong> — deduct the {fmt(441)} VA allowance</span>
              </label>
              <p style={{ color: 'var(--muted)', fontSize: 14 }}><strong>VA national cemetery:</strong> {va.national_cemetery}</p>
              <p style={{ color: 'var(--muted)', fontSize: 14 }}><strong>Eligibility:</strong> {va.eligibility}</p>
              <ul style={{ fontSize: 14, color: 'var(--muted)' }}>
                {va.disclaimers.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Step 4: Estimate */}
      {step === 3 && (
        <div className="calc-step-panel">
          <div className="receipt" aria-live="polite">
            <div className="receipt-head">
              <div className="rlabel">Modeled estimate — {st.name} (August 2026 dollars)</div>
              <div className="big">{fmt(result.point)}</div>
              <div className="range">Illustrative range: {fmt(result.low)} – {fmt(result.high)}</div>
            </div>
            <table className="line-items">
              <tbody>
                {result.lines.map((l) => (
                  <tr key={l.label} className={l.negative ? 'deduction' : ''}>
                    <td>
                      {l.label}
                      {l.range ? <><br /><span style={{ color: 'var(--muted)', fontSize: 13 }}>{l.range}</span></> : null}
                      {l.sub ? <><br /><span style={{ color: 'var(--muted)', fontSize: 13 }}>{l.sub}</span></> : null}
                    </td>
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
          {trad && (
            <div className="disclaimer" style={{ marginTop: 12 }}>
              <strong>{trad.label}:</strong> {trad.disclaimer} {options.religious_global_disclaimer}
            </div>
          )}
          {bodyDonation && (
            <div className="disclaimer" style={{ marginTop: 12 }}>
              <strong>Body donation:</strong> the $0 above assumes a program accepts the donation at the
              time of death — pre-registration does not guarantee acceptance, and open-casket funerals are
              not possible. Confirm directly with the program.
            </div>
          )}
          <div className="no-print" style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: 'wrap' }}>
            <button className="btn btn-secondary" onClick={() => window.print()}>Print this estimate</button>
            {!compact && <Link className="btn btn-secondary" href="/methodology/">How we calculate this</Link>}
          </div>
          <div className="disclaimer">
            <strong>Modeled estimate, not a price quote.</strong> Built from the NFDA 2023 national
            median ({fmt(anchor.value_2023)}) inflated to August 2026 dollars ({fmt(anchor.value)} via the
            BLS funeral-expenses CPI), then adjusted by the BEA 2024 regional price parity for {st.name} ({st.rpp_all_items.toFixed(1)}).
            Actual funeral-home prices vary widely. Always request an itemized General Price List (GPL) — it is your right under
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
          <button className="btn btn-secondary" onClick={() => { setStep(0); setAddons({}); setTradition(''); setVaPath('none'); setVaHeadstone(false); setBodyDonation(false); }}>
            Start over
          </button>
        )}
      </div>
    </div>
  );
}
