// =============================================================================
// Form endpoints — CMS site settings override; hardcoded fallback when empty
// =============================================================================

import { getSiteSettings } from '../content/loaders'

/**
 * Quote request form (Formspree or compatible JSON POST endpoint).
 *
 * Set in Decap CMS → Site Settings → Formspree endpoint,
 * or leave empty to keep demo mode (no data sent; shows demo success message).
 */
export const QUOTE_FORM_ENDPOINT = getSiteSettings().formspreeEndpoint

/** Hidden field sent with every quote submission */
export const QUOTE_FORM_SOURCE = 'Tip Top Welding Website' as const

export function isQuoteFormConfigured(): boolean {
  return QUOTE_FORM_ENDPOINT.trim().length > 0
}
