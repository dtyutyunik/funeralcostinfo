import raw from '../data/estimates.json';

export interface ServiceEstimate { point: number; low: number; high: number }
export interface Anchor { value: number; label: string; assumption?: string | null }
export interface Addon { mid: number; low: number; high: number; label: string; note: string }
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
  return '$' + n.toLocaleString('en-US');
}

export function fmtRange(e: ServiceEstimate): string {
  return `${fmt(e.low)} – ${fmt(e.high)}`;
}

/** Visible on every page: the data-vintage line (freshness is a trust issue). */
export const VINTAGE_LABEL =
  'Estimates modeled from 2024 BEA regional price parities and 2023 NFDA medians';
export const VINTAGE_SHORT = 'BEA 2024 · NFDA 2023';
