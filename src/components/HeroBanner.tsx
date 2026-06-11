import CTAButton from './CTAButton'
import { CONTACT, CTAS, SITE } from '../data/siteContent'

export default function HeroBanner() {
  return (
    <section className="hero-banner" aria-label="Introduction">
      <div className="hero-metal-brush" aria-hidden="true" />
      <div className="hero-chrome-lines" aria-hidden="true" />

      <svg
        className="hero-blueprint hero-blueprint-bow"
        viewBox="0 0 400 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M20 180 Q120 40 220 70 Q320 95 380 55" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
        <path d="M220 70 L220 160 M200 95 L240 95 M205 125 L235 125" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" opacity="0.7" />
      </svg>
      <svg
        className="hero-blueprint hero-blueprint-rail"
        viewBox="0 0 280 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M10 130 Q90 30 160 50 T270 35" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
        <path d="M30 145 Q100 70 165 82 T275 68" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" opacity="0.6" />
      </svg>
      <svg
        className="hero-blueprint hero-blueprint-marina"
        viewBox="0 0 320 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M20 110 L20 40 M20 40 L300 40 M300 40 L300 110" stroke="currentColor" strokeWidth="1.2" strokeDasharray="5 6" />
        <path d="M60 110 L60 40 M120 110 L120 40 M180 110 L180 40 M240 110 L240 40" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.55" />
      </svg>

      <div className="hero-inner">
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

        <div className="hero-visual hero-visual--dark-only">
          <div className="hero-welder-stage">
            <div className="hero-weld-glow-arc" aria-hidden="true" />
            <img
              src="/images/hero/welder.png"
              alt="Professional welder fabricating stainless steel marine railing"
              className="hero-welder-img"
              width={1024}
              height={682}
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
