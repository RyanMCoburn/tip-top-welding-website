import type { FaqItem } from './models/faq'

// =============================================================================
// FAQ — general service information only; no fabricated project claims
// =============================================================================

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 'what-services',
    category: 'general',
    question: 'What types of welding and fabrication do you offer?',
    answer:
      'Tip Top Welding LLC offers mobile welding and custom fabrication for aluminum and stainless steel — including marine welding, bow rail repairs, pontoon and skeg repairs, pool railings, decorative rails and gates, dock and marina work, custom metal projects, and nautical metal art across Southwest Florida.',
  },
  {
    id: 'service-area',
    category: 'general',
    question: 'What areas do you serve?',
    answer:
      'We are based in Cape Coral and serve Southwest Florida including Cape Coral, Fort Myers, Sanibel, Captiva, Bonita Springs, Naples, surrounding marinas, and nearby communities. On-site service availability depends on location, project scope, and scheduling.',
  },
  {
    id: 'mobile-welding',
    category: 'services',
    question: 'Do you offer mobile welding?',
    answer:
      'Yes, for many projects. We provide mobile welding and on-site fabrication at your boat, dock, marina, or property when location, access, and scope allow. Text or call with photos and your location to discuss.',
    relatedServiceSlugs: ['mobile-welding'],
  },
  {
    id: 'marina-work',
    category: 'services',
    question: 'Do you work on boats at marinas?',
    answer:
      'Yes, when access and project scope allow. We handle marine welding and repairs at marinas, docks, and boatyards across Southwest Florida. Send photos and your marina location to discuss.',
    relatedServiceSlugs: ['marine-welding', 'mobile-welding'],
  },
  {
    id: 'materials',
    category: 'services',
    question: 'Do you weld aluminum and stainless steel?',
    answer:
      'Yes. We specialize in aluminum and stainless steel welding and fabrication for marine, pool, dock, decorative, and custom metal projects. Contact us to discuss your specific material and job needs.',
    relatedServiceSlugs: ['aluminum-welding', 'stainless-steel-welding'],
  },
  {
    id: 'bow-pontoon-skeg',
    category: 'services',
    question: 'Can you repair bow rails, pontoons, and skegs?',
    answer:
      'Yes. We handle bow rail repairs, pontoon structural aluminum repair, and skeg damage repair. Projects are quoted individually after reviewing photos and discussing scope.',
    relatedServiceSlugs: ['bow-rail-repairs', 'pontoon-repairs', 'skeg-repairs'],
  },
  {
    id: 'pool-decorative-rails',
    category: 'services',
    question: 'Do you build custom pool railings or decorative rails?',
    answer:
      'Yes. We fabricate custom pool railings, decorative rails, gates, and stair metalwork in aluminum and stainless. Send photos and layout details for a preliminary quote.',
    relatedServiceSlugs: ['pool-railings', 'decorative-rails-gates-stairs'],
  },
  {
    id: 'text-photos-quote',
    category: 'pricing',
    question: 'Can I text photos for a quote?',
    answer:
      'Yes. Text or email photos of your project with a brief description of what you need. We review the details and provide a preliminary estimate. Final pricing and scope are confirmed after project review.',
  },
  {
    id: 'quote-process',
    category: 'pricing',
    question: 'How do I get a quote for my project?',
    answer:
      'Use our quote form to send project details and up to three photos, or call, text, or email us. We review the details and provide a preliminary estimate. Final pricing and scope are confirmed after project review and inspection.',
  },
  {
    id: 'project-range',
    category: 'pricing',
    question: 'What size projects do you handle?',
    answer:
      'Project scope varies from repairs and railing work to larger custom fabrication. Services and custom changes are quoted individually. Approved pool rail and mailbox designs have individual prices listed in our store.',
  },
  {
    id: 'timeline',
    category: 'process',
    question: 'How long does a fabrication project take?',
    answer:
      'Timeline depends on scope, materials, scheduling, and site conditions. We provide a timeline estimate with your quote after reviewing the project.',
  },
  {
    id: 'photos-required',
    category: 'process',
    question: 'Why do you ask for project photos?',
    answer:
      'Photos help us understand access, existing conditions, and fabrication requirements before we visit or begin work. This supports more accurate preliminary quotes.',
  },
  {
    id: 'haul-out',
    category: 'process',
    question: 'Do I need to haul out my boat for welding work?',
    answer:
      'Not always. Many projects can be discussed for in-water or on-site completion depending on scope and access. We will advise after reviewing your project.',
  },
  {
    id: 'licensed',
    category: 'general',
    question: 'Are you licensed and insured?',
    answer:
      'Contact us for current license and insurance documentation needed for your property, marina, or project.',
  },
] as const

export function getFaqByCategory(category: FaqItem['category']): readonly FaqItem[] {
  return FAQ_ITEMS.filter((item) => item.category === category)
}

export function getFaqForService(serviceSlug: string): readonly FaqItem[] {
  return FAQ_ITEMS.filter(
    (item) => item.relatedServiceSlugs?.includes(serviceSlug),
  )
}

export function getFaqById(id: string): FaqItem | undefined {
  return FAQ_ITEMS.find((item) => item.id === id)
}
