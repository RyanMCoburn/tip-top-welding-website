import CTAButton from './ctabutton'
import { CONTACT, CTAS, SITE } from '../data/sitecontent'

export default function HeroBanner() {
  return (
    <section className="hero-banner hero-banner--photo" aria-label="Introduction">
      <div className="hero-photo">
        <img
          src="/images/portfolio/yacht-stainless-railing.webp"
          alt="Yacht stainless railwork at a Southwest Florida marina"
          className="hero-photo-img"
          width={1440}
          height={1080}
          decoding="async"
          fetchPriority="high"
        />
      </div>
      <div className="hero-photo-overlay" aria-hidden="true" />

      <div className="hero-inner hero-inner--photo">
        <div className="hero-content">
          <div className="hero-text-panel animate-in">
            <p className="hero-eyebrow mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent animate-in animate-in-delay-1">
              {SITE.legalName} · Southwest Florida
            </p>
            <h1 className="hero-title animate-in animate-in-delay-2 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              {SITE.tagline}
            </h1>
            <p className="hero-subtitle animate-in animate-in-delay-3 mt-6 max-w-xl text-lg leading-relaxed md:text-xl">
              {SITE.subheadline}
            </p>

            <ul className="hero-tags animate-in animate-in-delay-4 mt-6 flex flex-wrap gap-2" aria-label="Services">
              {SITE.heroTags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>

            <p className="hero-service-line animate-in animate-in-delay-5 mt-5 text-sm font-medium tracking-wide md:text-base">
              {SITE.heroServiceLine}
            </p>
            <div className="hero-cta-row animate-in animate-in-delay-6 mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CTAButton href={CONTACT.tel} size="lg" className="hero-cta w-full sm:w-auto">
                {CTAS.phone}
              </CTAButton>
              <CTAButton href={CONTACT.sms} variant="outline" size="lg" className="hero-cta w-full sm:w-auto">
                {CTAS.secondary}
              </CTAButton>
              <CTAButton to="/contact#quote-form" variant="secondary" size="lg" className="hero-cta w-full sm:w-auto">
                {CTAS.primary}
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
