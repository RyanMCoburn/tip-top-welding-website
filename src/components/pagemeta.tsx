import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { absoluteUrl, getRouteMeta } from '../config/seo'
import { BRAND } from '../config/brand'
import { IMAGE_PATHS } from '../data/images'

function setMeta(attr: string, key: string, content: string, isProperty = false) {
  const selector = isProperty ? `meta[property="${key}"]` : `meta[name="${key}"]`
  let el = document.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    if (isProperty) el.setAttribute('property', key)
    else el.setAttribute('name', key)
    document.head.appendChild(el)
  }
  el.setAttribute(attr === 'content' ? 'content' : key, content)
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.href = href
}

export default function PageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = getRouteMeta(pathname)
    const url = absoluteUrl(meta.path)

    document.title = meta.title

    setMeta('content', 'description', meta.description)
    setMeta('content', 'robots', meta.noindex ? 'noindex, follow' : 'index, follow')
    setLink('canonical', url)

    setMeta('content', 'og:title', meta.title, true)
    setMeta('content', 'og:description', meta.description, true)
    setMeta('content', 'og:url', url, true)
    setMeta('content', 'og:type', meta.ogType ?? 'website', true)
    setMeta('content', 'og:site_name', BRAND.name, true)
    setMeta('content', 'og:image', absoluteUrl(IMAGE_PATHS.ogImage), true)

    setMeta('content', 'twitter:card', 'summary_large_image')
    setMeta('content', 'twitter:title', meta.title)
    setMeta('content', 'twitter:description', meta.description)
    setMeta('content', 'twitter:image', absoluteUrl(IMAGE_PATHS.ogImage))
  }, [pathname])

  return null
}
