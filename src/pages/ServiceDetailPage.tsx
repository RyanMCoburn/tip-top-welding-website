import { Link, Navigate, useParams } from 'react-router-dom'
import CTAButton from '../components/CTAButton'
import ServiceDetail from '../components/ServiceDetail'
import FaqList from '../components/FaqList'
import MarineWeldingSEO from '../components/MarineWeldingSEO'
import { CONTACT, CTAS } from '../config/brand'
import { getServiceBySlug } from '../data/services'
import { getFaqForService } from '../data/faq'
import { getServiceRedirect } from '../data/serviceRedirects'

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  if (slug) {
    const redirectTo = getServiceRedirect(slug)
    if (redirectTo) {
      return <Navigate to={`/services/${redirectTo}`} replace />
    }
  }

  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const relatedFaq = getFaqForService(service.slug)

  return (
    <>
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <nav className="mb-6 text-sm text-steel-500" aria-label="Breadcrumb">
            <Link to="/services" className="hover:text-accent">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-steel-400">{service.title}</span>
          </nav>
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">{service.title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-steel-400">{service.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton to="/contact#quote-form">{CTAS.primary}</CTAButton>
            <CTAButton href={CONTACT.tel} variant="outline">
              {CTAS.phone}
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="bg-navy-950">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ServiceDetail
            id={service.id}
            title={service.title}
            description={service.description}
            commonUseCases={service.commonUseCases}
          />
        </div>
      </section>

      <section className="bg-navy-900 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">{service.title} in Southwest Florida</h2>
          <div className="mt-6 space-y-4 text-steel-400 leading-relaxed">
            {service.seoContent.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {service.seo.keywords.map((keyword) => (
              <span key={keyword} className="rounded-sm border border-navy-700 bg-navy-800/50 px-3 py-1 text-xs text-steel-500">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      {relatedFaq.length > 0 && (
        <section className="bg-navy-900 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-white">Common Questions</h2>
            <FaqList items={relatedFaq} groupByCategory={false} />
            <p className="mt-6">
              <Link to="/faq" className="text-sm text-accent hover:text-white">
                View all FAQ →
              </Link>
            </p>
          </div>
        </section>
      )}

      <MarineWeldingSEO />
    </>
  )
}
