interface SectionHeadingProps {
  as?: 'h1' | 'h2'
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  animated?: boolean
}

export default function SectionHeading({
  as: Heading = 'h2',
  title,
  subtitle,
  align = 'center',
  light = false,
  animated = true,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'} ${animated ? 'animate-in' : ''}`}
    >
      <div
        className={`mb-4 h-1 w-16 ${align === 'center' ? 'mx-auto' : ''} bg-accent`}
        aria-hidden="true"
      />
      <Heading
        className={`text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-white'
        }`}
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg leading-relaxed text-steel-400 ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
