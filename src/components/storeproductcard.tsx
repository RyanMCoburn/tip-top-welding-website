import CTAButton from './ctabutton'
import {
  formatStorePrice,
  getStoreCheckoutUrl,
  getStoreQuoteUrl,
  STORE_PAGE,
  type StoreProduct,
} from '../config/store'

interface StoreProductCardProps {
  product: StoreProduct
  highlighted?: boolean
}

export default function StoreProductCard({ product, highlighted = false }: StoreProductCardProps) {
  const checkoutUrl = getStoreCheckoutUrl(product.id)
  const priceLabel = formatStorePrice(product.price)
  const quoteUrl = getStoreQuoteUrl(product.id)

  return (
    <article
      className={`store-product-card card-premium flex h-full min-h-[32rem] flex-col overflow-hidden rounded-xl ${
        highlighted ? 'store-product-card--highlight' : ''
      }`}
    >
      <div className="border-b border-navy-700/60 px-6 py-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            {product.series && (
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{product.series}</p>
            )}
            <h3 className="mt-1 text-xl font-bold leading-snug text-white">{product.title}</h3>
          </div>
          <p className="shrink-0 text-2xl font-bold tracking-tight text-white">{priceLabel}</p>
        </div>
        <p className="mt-3 min-h-[3.25rem] text-sm leading-relaxed text-steel-400">{product.description}</p>
      </div>

      <div className="store-product-card__body flex flex-1 flex-col px-6 py-5">
        <div className="flex-1">
          <p className="text-sm leading-relaxed text-steel-300">
            <span className="font-semibold text-white">Best for:</span> {product.bestFor}
          </p>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-steel-500">Includes</p>
            <ul className="mt-3 space-y-2">
              {product.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-steel-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {product.confirmationRequired ? (
            <p className="mt-5 rounded-lg border border-accent/25 bg-accent/8 px-3 py-2 text-xs leading-relaxed text-steel-300">
              Measurements and final placement are confirmed with Tip Top Welding before work is scheduled.
            </p>
          ) : (
            <p className="mt-5 text-xs leading-relaxed text-steel-500">
              Tip Top Welding LLC — aluminum and stainless fabrication for Southwest Florida coastal properties.
            </p>
          )}
        </div>

        <div className="store-product-card__cta mt-6 border-t border-navy-700/50 pt-5">
          <p className="mb-4 text-center text-xs font-medium leading-relaxed text-steel-400">
            {STORE_PAGE.conversionLine}
          </p>
          <div className="flex min-h-[9.5rem] flex-col justify-end gap-2">
            {checkoutUrl ? (
              <>
                <CTAButton href={checkoutUrl} size="md" fullWidth openInNewTab={false}>
                  Buy Now
                </CTAButton>
                <CTAButton to={quoteUrl} variant="outline" size="md" fullWidth>
                  Get Quote
                </CTAButton>
              </>
            ) : (
              <>
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="btn-cta-premium inline-flex min-h-[48px] w-full cursor-not-allowed items-center justify-center rounded-lg border border-navy-700/80 bg-navy-800/40 px-6 py-3 text-base font-semibold text-steel-500 opacity-60"
                >
                  Buy Now
                </button>
                <CTAButton to={quoteUrl} variant="primary" size="md" fullWidth>
                  Request This Item
                </CTAButton>
                <CTAButton to={quoteUrl} variant="outline" size="md" fullWidth>
                  Get Quote
                </CTAButton>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
