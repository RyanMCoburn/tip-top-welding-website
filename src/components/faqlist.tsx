import { useState } from 'react'
import type { FaqItem } from '../data/models/faq'
import { FAQ_CATEGORIES } from '../data/models/faq'

interface FaqListProps {
  items: readonly FaqItem[]
  groupByCategory?: boolean
}

export default function FaqList({ items, groupByCategory = true }: FaqListProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  if (!groupByCategory) {
    return (
      <div className="space-y-3">
        {items.map((item) => (
          <FaqItemRow key={item.id} item={item} isOpen={openId === item.id} onToggle={() => setOpenId(openId === item.id ? null : item.id)} />
        ))}
      </div>
    )
  }

  const categories = [...new Set(items.map((i) => i.category))]

  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <div key={category}>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-steel-300">
            {FAQ_CATEGORIES[category]}
          </h2>
          <div className="space-y-3">
            {items
              .filter((i) => i.category === category)
              .map((item) => (
                <FaqItemRow
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => setOpenId(openId === item.id ? null : item.id)}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function FaqItemRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="faq-card overflow-hidden rounded-xl">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-white">{item.question}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-accent transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="border-t border-navy-700 px-6 pb-5 pt-2">
          <p className="leading-relaxed text-steel-400">{item.answer}</p>
        </div>
      )}
    </div>
  )
}
