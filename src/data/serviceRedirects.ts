/** Legacy service slugs → current canonical slug (301-style client redirect) */
export const SERVICE_REDIRECTS: Record<string, string> = {
  'marine-aluminum-welding': 'aluminum-welding',
  'boat-railings': 'bow-rail-repairs',
  'custom-boat-fabrication': 'custom-metal-projects',
  't-tops-towers': 'custom-metal-projects',
  'swim-platforms': 'marine-welding',
  'skeg-lower-unit-repairs': 'skeg-repairs',
}

export function getServiceRedirect(slug: string): string | undefined {
  return SERVICE_REDIRECTS[slug]
}
