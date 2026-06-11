import { Link } from 'react-router-dom'
import CTAButton from '../components/CTAButton'
import { CONTACT, SITE } from '../data/siteContent'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-navy-950 py-24">
      <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">404</p>
        <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">Page Not Found</h1>
        <p className="mt-4 text-lg leading-relaxed text-steel-400">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved. Head back to
          the homepage or contact us about your marine fabrication project.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <CTAButton to="/" size="lg">
            Back to Home
          </CTAButton>
          <CTAButton to="/contact" variant="outline" size="lg">
            Contact Us
          </CTAButton>
        </div>
        <p className="mt-8 text-sm text-steel-500">
          Or call{' '}
          <a href={CONTACT.tel} className="text-accent hover:text-white">
            {SITE.phone}
          </a>
        </p>
        <p className="mt-6">
          <Link to="/services" className="text-sm text-steel-500 transition-colors hover:text-accent">
            View Services
          </Link>
          <span className="mx-2 text-steel-700">|</span>
          <Link to="/gallery" className="text-sm text-steel-500 transition-colors hover:text-accent">
            View Gallery
          </Link>
        </p>
      </div>
    </section>
  )
}
