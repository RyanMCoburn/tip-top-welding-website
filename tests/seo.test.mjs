import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const read = path => readFile(new URL(`../dist/${path}`, import.meta.url), 'utf8')
const decode = value => value.replaceAll('&amp;', '&')

test('every sitemap URL has its own complete HTML and canonical before JavaScript', async () => {
  const sitemap = await read('sitemap.xml')
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => decode(match[1]))
  assert.ok(urls.length >= 25)
  const titles = new Set()
  for (const url of urls) {
    const path = new URL(url).pathname
    const html = await read(path === '/' ? 'index.html' : `${path.slice(1)}/index.html`)
    assert.equal((html.match(/rel="canonical"/g) ?? []).length, 1, path)
    assert.ok(html.includes(`rel="canonical" href="${url}"`), path)
    assert.ok(html.includes('property="og:url" content="' + url + '"'), path)
    assert.match(html, /<h1\b/, path)
    assert.match(html, /href="tel:2392094929"/, path)
    assert.match(html, /<main[\s\S]*<a\b/, path)
    assert.doesNotMatch(html, /content="noindex/, path)
    const title = html.match(/<title>(.*?)<\/title>/)?.[1]
    assert.ok(title && !titles.has(title), `unique title: ${path}`)
    titles.add(title)
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)]
      .map(match => JSON.parse(match[1]))
    assert.ok(schemas.some(schema => schema['@id'] === 'https://tiptopwelding.com/#business'), path)
  }
})

test('service requests deliver service copy, not the homepage shell', async () => {
  const mobile = await read('services/mobile-welding/index.html')
  const pontoon = await read('services/pontoon-repairs/index.html')
  assert.match(mobile, /<h1[^>]*>Mobile Welding Repairs<\/h1>/)
  assert.match(pontoon, /<h1[^>]*>Pontoon Repairs<\/h1>/)
  assert.notEqual(mobile.match(/<title>(.*?)<\/title>/)[1], pontoon.match(/<title>(.*?)<\/title>/)[1])
})

test('policies and missing pages are noindex and excluded from sitemap', async () => {
  const sitemap = await read('sitemap.xml')
  for (const path of ['privacy', 'terms', '404']) {
    assert.match(await read(path === '404' ? '404.html' : `${path}/index.html`), /content="noindex, follow"/)
    assert.ok(!sitemap.includes(`/${path}<`))
  }
  const redirects = await read('_redirects')
  assert.match(redirects, /\/services\/boat-railings \/services\/bow-rail-repairs 301/)
  assert.match(redirects, /\/\* \/404.html 404/)
  assert.doesNotMatch(redirects, /\/\* \/index.html 200/)
})

test('the existing quote submission schema and backend assets remain published', async () => {
  const schema = await read('quote-request.html')
  const contact = await read('contact/index.html')
  assert.match(schema, /name="project-quote"/)
  assert.match(contact, /action="\/quote-request.html"/)
  assert.match(contact, /name="form-name" value="project-quote"/)
})
