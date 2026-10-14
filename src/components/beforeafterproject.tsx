interface BeforeAfterProjectProps {
  title: string
  category: string
  location: string
  problem: string
  solution: string
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
}

export default function BeforeAfterProject({
  title,
  category,
  location,
  problem,
  solution,
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
}: BeforeAfterProjectProps) {
  return (
    <article className="overflow-hidden rounded-sm border border-navy-700 bg-navy-800/40">
      <div className="border-b border-navy-700 px-6 py-5 md:px-8">
        <span className="mb-2 inline-block rounded-sm bg-accent/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
          {category}
        </span>
        <h3 className="text-xl font-bold text-white md:text-2xl">{title}</h3>
        <p className="mt-1 text-sm text-steel-500">{location}</p>
      </div>

      {/* TODO: Replace — public/images/projects/[id]-before.jpg & -after.jpg */}
      <div className="grid md:grid-cols-2">
        <div className="relative">
          <div className="absolute left-4 top-4 z-10 rounded-sm bg-navy-950/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-steel-400">
            Before
          </div>
          <img src={beforeImage} alt={beforeAlt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
        </div>
        <div className="relative border-t border-navy-700 md:border-l md:border-t-0">
          <div className="absolute left-4 top-4 z-10 rounded-sm bg-accent/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-950">
            After
          </div>
          <img src={afterImage} alt={afterAlt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
        </div>
      </div>

      <div className="grid gap-6 px-6 py-6 md:grid-cols-2 md:px-8 md:py-8">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-steel-500">The Problem</h4>
          <p className="mt-2 text-sm leading-relaxed text-steel-400">{problem}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">Our Solution</h4>
          <p className="mt-2 text-sm leading-relaxed text-steel-300">{solution}</p>
        </div>
      </div>
    </article>
  )
}
