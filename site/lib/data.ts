import raw from '../data/estimates.json';
import optionsRaw from '../data/options.json';

export interface ServiceEstimate { point: number; low: number; high: number }
export interface Anchor { value: number; value_2023: number; label: string; assumption?: string | null }
export interface Addon { mid: number; low: number; high: number; label: string; note: string; state_adjust?: boolean }
export interface StateData {
  abbr: string; name: string;
  rpp_all_items: number; rpp_goods: number;
  rpp_services_housing: number; rpp_services_utilities: number; rpp_services_other: number;
  estimates: Record<string, ServiceEstimate>;
  nfda_projected_cremation_rate_2035?: number;
}
export interface Dataset {
  model_version: string; built: string; is_modeled: boolean;
  anchors: Record<string, Anchor>;
  addons: Record<string, Addon>;
  states: StateData[];
}

export const dataset = raw as Dataset;

export interface TraditionLineChange { change: string; item: string; detail: string }
export interface TraditionAddon { key: string; mid: number; low: number; high: number; label: string; note: string }
export interface TraditionTotal { label: string; range: string; detail: string }
export interface ReligiousTradition {
  id: string; label: string;
  suggests_service?: string;
  line_changes: TraditionLineChange[];
  typical_totals: TraditionTotal[];
  cemetery_note: string;
  addons: TraditionAddon[];
  disclaimer: string;
  sources: string[];
}
export interface VaAllowance { key: string; amount: number; label: string; detail: string }
export interface OptionsData {
  religious_traditions: ReligiousTradition[];
  religious_global_disclaimer: string;
  va_benefits: {
    label: string; intro: string; allowances: VaAllowance[];
    national_cemetery: string; eligibility: string;
    disclaimers: string[]; sources: string[];
  };
  upkeep: { label: string; explainer: string; sources: string[] };
  body_donation: {
    label: string; intro: string;
    programs: { name: string; detail: string }[];
    catches: string[]; sources: string[];
  };
  cash_advance_note: string;
}

export const options = optionsRaw as OptionsData;

export const SITE_URL = 'https://funeralcostinfo.com';
export const LAST_UPDATED = dataset.built;

export const SERVICE_ORDER = [  'traditional_burial',
  'burial_with_vault',
  'cremation_with_service',
  'direct_cremation',
  'direct_burial',
  'green_burial',
] as const;

export type ServiceKey = (typeof SERVICE_ORDER)[number];

export function stateSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function getState(slug: string): StateData | undefined {
  return dataset.states.find((s) => stateSlug(s.name) === slug);
}

export const PHASE0_STATES = ['california', 'texas', 'florida', 'new-york', 'mississippi'];

export function fmt(n: number): string {
  const sign = n < 0 ? '−' : '';
  return sign + '$' + Math.abs(n).toLocaleString('en-US');
}

export function longDate(iso: string): string {
  return new Date(iso + 'T12:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function fmtRange(e: ServiceEstimate): string {
  return `${fmt(e.low)} – ${fmt(e.high)}`;
}

/** State-adjust an add-on figure (nearest $10), unless it opts out (e.g. government fees). */
export function adjAddon(a: { mid: number; low: number; high: number; state_adjust?: boolean }, mult: number) {
  if (a.state_adjust === false) return { mid: a.mid, low: a.low, high: a.high };
  const r = (x: number) => Math.round((x * mult) / 10) * 10;
  return { mid: r(a.mid), low: r(a.low), high: r(a.high) };
}

/** Visible on every page: the data-vintage line (freshness is a trust issue). */
export const VINTAGE_LABEL =
  'NFDA 2023 medians adjusted to August 2026 dollars via BLS CPI for funeral expenses; 2024 BEA regional price parities';
export const VINTAGE_SHORT = 'BEA 2024 · NFDA 2023 in Aug 2026 $';
