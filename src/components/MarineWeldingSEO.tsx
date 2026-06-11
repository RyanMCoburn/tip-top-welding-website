import { MARINE_WELDING_SEO } from '../data/siteContent'

export default function MarineWeldingSEO() {
  const { title, paragraphs, keywords } = MARINE_WELDING_SEO

  return (
    <section className="border-t border-navy-700/60 bg-navy-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
          <div className="mt-8 space-y-5 text-steel-400 leading-relaxed">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-sm border border-navy-700 bg-navy-800/50 px-3 py-1.5 text-xs text-steel-500"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
