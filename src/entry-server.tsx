import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppRoutes } from './app'
import { ThemeProvider } from './context/themeprovider'
import { ROUTE_SEO, getRouteMeta, absoluteUrl } from './config/seo'
import { SERVICES } from './data/services'
import { SERVICE_REDIRECTS } from './data/serviceredirects'

export const routes = [
  ...Object.keys(ROUTE_SEO),
  ...SERVICES.map(service => `/services/${service.slug}`),
]
export { getRouteMeta, absoluteUrl, SERVICE_REDIRECTS }

// Render the same components visitors use, rather than a crawler-only copy.
export function render(path: string) {
  return renderToString(
    <ThemeProvider><StaticRouter location={path}><AppRoutes /></StaticRouter></ThemeProvider>,
  )
}
