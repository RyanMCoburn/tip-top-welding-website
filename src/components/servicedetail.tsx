import { Link } from 'react-router-dom'
import { useState } from 'react'
import CTAButton from './ctabutton'
import { SERVICE_MEDIA } from '../config/service-media'

interface ServiceDetailProps {
  id: string
  slug?: string
  title: string
  description: string
  commonUseCases: readonly string[]
  showIntro?: boolean
  reversed?: boolean
}

export default function ServiceDetail({
  id,
  slug,
  title,
  description,
  commonUseCases,
  reversed = false,
  showIntro = true,
}: ServiceDetailProps) {
  const media=SERVICE_MEDIA[id]
  const [failedSrc,setFailedSrc]=useState<string>()
  const hasMedia=Boolean(media) && failedSrc !== media?.src
  return (
    <article
      id={id}
      className="scroll-mt-28 border-b border-navy-700/60 py-10 last:border-b-0 md:py-14"
    >
      <div
        className={`grid items-center gap-8 ${hasMedia?'lg:grid-cols-2 lg:gap-12':''} ${
          hasMedia && reversed ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        {hasMedia && <div><figure className="overflow-hidden rounded-xl border border-navy-700 bg-navy-900"><a href={media.src} target="_blank" rel="noopener noreferrer" aria-label={`Open photo: ${media.alt}`}><img src={media.src} alt={media.alt} loading="lazy" onError={()=>setFailedSrc(media.src)} className="aspect-[4/3] w-full object-contain"/></a><figcaption className="border-t border-navy-700 px-4 py-3 text-xs text-steel-400">{media.caption}</figcaption></figure>{media.additional && <div className="mt-3 grid grid-cols-2 gap-3">{media.additional.map(photo=><figure key={photo.src} className="overflow-hidden rounded-lg border border-navy-700 bg-navy-900"><a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`Open photo: ${photo.alt}`}><img src={photo.src} alt={photo.alt} loading="lazy" className="aspect-[4/3] w-full object-contain"/></a><figcaption className="px-3 py-2 text-xs text-steel-400">{photo.caption}</figcaption></figure>)}</div>}</div>}

        <div>
          <h2 className="text-2xl font-bold text-white md:text-3xl">{showIntro ? title : 'Project Scope & Examples'}</h2>
          {showIntro && <p className="mt-4 text-lg leading-relaxed text-steel-400">{description}</p>}

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-steel-300">
            Types of Work
          </h3>
          <ul className={`mt-4 gap-x-8 gap-y-3 ${hasMedia?'space-y-3':'grid sm:grid-cols-2'}`}>
            {commonUseCases.map((useCase) => (
              <li key={useCase} className="flex items-start gap-3 text-steel-400">
                <svg
                  className="mt-1 h-4 w-4 shrink-0 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {useCase}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton to="/contact#quote-form">Get a Quote for {title}</CTAButton>
            {slug && (
              <Link
                to={`/services/${slug}`}
                className="inline-flex items-center text-sm font-medium text-accent hover:text-white"
              >
                Full service page →
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
