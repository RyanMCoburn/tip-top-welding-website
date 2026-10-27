import { build } from 'vite'
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { pathToFileURL } from 'node:url'

// The server bundle is temporary and must never be published with the site.
const serverDirectory = resolve('.prerender')
try {
  await build({
    build: {
      ssr: 'src/entry-server.tsx',
      outDir: serverDirectory,
      emptyOutDir: true,
    },
  })
  const { render, routes, getRouteMeta, absoluteUrl, SERVICE_REDIRECTS } =
    await import(pathToFileURL(resolve(serverDirectory, 'entry-server.js')).href)
  const template = await readFile('dist/index.html', 'utf8')
  const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  const sitemap = []
  for (const path of [...routes, '/404']) {
    const meta = getRouteMeta(path)
    const canonical = absoluteUrl(meta.path)
    let html = template.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${escape(meta.title)}</title>`)
    const values = {
      description: meta.description,
      robots: meta.noindex ? 'noindex, follow' : 'index, follow',
      'og:title': meta.title,
      'og:description': meta.description,
      'og:url': canonical,
      'twitter:title': meta.title,
      'twitter:description': meta.description,
    }
    for (const [key, value] of Object.entries(values)) {
      const tag = new RegExp(`<meta\\s+(?:name|property)="${key}"\\s+content="[^"]*"\\s*/?>`)
      html = html.replace(tag, () => `<meta ${key.startsWith('og:') ? 'property' : 'name'}="${key}" content="${escape(value)}" />`)
    }
    html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/,
      () => `<link rel="canonical" href="${escape(canonical)}" />`)
    html = html.replace('<div id="root"></div>', () => `<div id="root">${render(path)}</div>`)
    const output = path === '/' ? 'dist/index.html' : path === '/404' ? 'dist/404.html' : `dist${path}/index.html`
    await mkdir(dirname(output), { recursive: true })
    await writeFile(output, html)
    if (!meta.noindex) sitemap.push(canonical)
  }
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap.map(url => `  <url><loc>${escape(url)}</loc></url>`).join('\n')}\n</urlset>\n`)
  const redirects = [
    '/admin /admin/ 301',
    ...Object.entries(SERVICE_REDIRECTS).map(([from, to]) => `/services/${from} /services/${to} 301`),
    // Netlify serves existing prerendered pages and assets before this fallback.
    '/* /404.html 404',
  ]
  await writeFile('dist/_redirects', redirects.join('\n') + '\n')
  console.log(`Prerendered ${routes.length} routes plus the 404 page; sitemap contains ${sitemap.length} indexable URLs.`)
} finally {
  await rm(serverDirectory, { recursive: true, force: true })
}
