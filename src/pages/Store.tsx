import { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import CTAButton from '../components/CTAButton'
import FaqList from '../components/FaqList'
import SectionHeading from '../components/SectionHeading'
import StoreProductCard from '../components/StoreProductCard'
import {
  getStoreProductById,
  STORE_FAQ_ITEMS,
  STORE_PAGE,
  STORE_PRODUCTS,
} from '../config/store'
import { CONTACT, CTAS } from '../data/siteContent'

export default function Store() {
  const [searchParams] = useSearchParams()
  const highlightId = searchParams.get('product')
  const scrolledRef = useRef(false)
  const { hero, ordering, products, customQuote, faq } = STORE_PAGE

  useEffect(() => {
    if (!highlightId || scrolledRef.current) return
    const product = getStoreProductById(highlightId)
    if (!product) return

    scrolledRef.current = true
    const frame = window.requestAnimationFrame(() => {
      const el = document.getElementById(`store-product-${highlightId}`)
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [highlightId])

  return (
    <>
      <section className="store-hero relative overflow-hidden bg-navy-900 py-20 md:py-28">
        <div
          className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800"
          aria-hidden="true"
        />
        <div className="absolute inset-0 store-hero-shine" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Tip Top Welding Store
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-steel-300 md:text-xl">
            {hero.subheadline}
          </p>
          <p className="mt-5 max-w-3xl text-sm font-medium tracking-wide text-steel-400 md:text-base">
            {hero.trustLine}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CTAButton to="/contact#quote-form" size="lg">
              Get Quote
            </CTAButton>
            <CTAButton href={CONTACT.tel} variant="outline" size="lg">
              {CTAS.phone}
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="section-space store-section-light bg-navy-950">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title={ordering.title} subtitle={ordering.subtitle} />
          <div className="grid gap-6 md:grid-cols-3">
            {ordering.steps.map((step) => (
              <div key={step.step} className="store-step-card card-premium rounded-xl p-6 md:p-8">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                  {step.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-400">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl rounded-xl border border-navy-700/80 bg-navy-900/60 px-5 py-4 text-center text-sm leading-relaxed text-steel-400">
            {ordering.disclaimer}
          </p>
        </div>
      </section>

      <section className="section-space store-section-products bg-navy-900" id="products">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title={products.title} subtitle={products.subtitle} />
          <p
            className="store-checkout-notice mx-auto mb-10 max-w-3xl rounded-xl border border-accent/20 bg-accent/6 px-5 py-4 text-center text-sm leading-relaxed text-steel-300"
            role="note"
          >
            {products.checkoutNotice}
          </p>
          <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
            {STORE_PRODUCTS.map((product, i) => (
              <div
                key={product.id}
                id={`store-product-${product.id}`}
                className={`flex h-full scroll-mt-28 animate-in ${['animate-in-delay-1', 'animate-in-delay-2', 'animate-in-delay-3', 'animate-in-delay-4'][i % 4]}`}
              >
                <StoreProductCard product={product} highlighted={highlightId === product.id} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space store-section-light border-y border-navy-700/60 bg-navy-950">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{customQuote.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-steel-400">
            {customQuote.description}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <CTAButton to="/contact#quote-form" size="lg">
              {customQuote.primaryCta}
            </CTAButton>
            <CTAButton href={CONTACT.tel} variant="outline" size="lg">
              {customQuote.secondaryCta}
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="section-space bg-navy-900">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <SectionHeading title={faq.title} subtitle={faq.subtitle} align="center" />
          <FaqList items={STORE_FAQ_ITEMS} groupByCategory={false} />
        </div>
      </section>
    </>
  )
}
