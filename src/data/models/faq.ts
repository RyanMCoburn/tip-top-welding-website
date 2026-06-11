export type FaqCategory = 'general' | 'services' | 'pricing' | 'process'

export interface FaqItem {
  id: string
  question: string
  answer: string
  category: FaqCategory
  relatedServiceSlugs?: readonly string[]
}

export const FAQ_CATEGORIES: Record<FaqCategory, string> = {
  general: 'General',
  services: 'Services',
  pricing: 'Pricing & Quotes',
  process: 'Process',
} as const
