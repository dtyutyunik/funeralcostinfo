import raw from '../data/disposition-rights.json';

export interface DispositionRights {
  /** Ordered list of who holds the right to control disposition, highest priority first. */
  priorityOrder: string[];
  /** Whether/how a person can designate an agent in writing to override the kin order. */
  designatedAgent: string;
  /** Who must sign a cremation authorization. */
  cremationAuthorizer: string;
  /** What happens when several people share the top priority class (majority rule etc.), if the statute addresses it. */
  majorityRule: string | null;
  /** Whether state law addresses withholding a body or cremated remains over an unpaid bill. */
  holdRemains: string;
  /** Primary right-of-disposition statute citation, e.g. "Tex. Health & Safety Code §711.002". */
  statuteCite: string;
  /** Official source URL for the statute. */
  statuteUrl: string;
  confidence: 'high' | 'medium' | 'low';
  /** One-line state quirk or caveat, if any. */
  note: string;
}

export const DISPOSITION_RIGHTS = raw as Record<string, DispositionRights>;

export function getRights(slug: string): DispositionRights | undefined {
  return DISPOSITION_RIGHTS[slug];
}
