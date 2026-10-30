import assert from 'node:assert/strict'
import { readdir, readFile, access } from 'node:fs/promises'
import { join, relative } from 'node:path'
import { createHash } from 'node:crypto'
import sharp from 'sharp'

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? walk(join(directory, entry.name)) : join(directory, entry.name)))).flat()
}
function decode(value) {
  return value.replace(/&(?:amp|quot|apos|lt|gt|#(?:x[0-9a-f]+|\d+));/gi, entity => {
    const named = { '&amp;': '&', '&quot;': '"', '&apos;': "'", '&lt;': '<', '&gt;': '>' }
    if (named[entity]) return named[entity]
    const code = entity.slice(2, -1)
    return String.fromCodePoint(code[0].toLowerCase() === 'x' ? parseInt(code.slice(1), 16) : Number(code))
  })
}
const files = (await walk('dist')).filter(file => file.endsWith('.html'))
const pages = new Map()
for (const file of files) {
  const html = await readFile(file, 'utf8')
  if (!html.includes('id="root"')) continue
  const route = '/' + relative('dist', file).replaceAll('\\', '/').replace(/(?:^|\/)index\.html$/, '').replace(/\.html$/, '')
  pages.set(route, html)
}
assert(pages.size >= 29, 'Production pages must be prerendered')
const photos = new Map()
let checkedLinks = 0
for (const [route, html] of pages) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1]
  assert(main, `${route}: missing main content`)
  assert.equal([...main.matchAll(/<h1\b/g)].length, 1, `${route}: expected one main heading`)
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1])
  assert.equal(new Set(ids).size, ids.length, `${route}: duplicate element IDs`)
  const paragraphs = [...main.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)].map(match => decode(match[1].replace(/<[^>]*>/g, '')).trim()).filter(text => text.length > 100)
  assert.equal(new Set(paragraphs).size, paragraphs.length, `${route}: repeated body paragraph`)
  for (const match of main.matchAll(/<img\b[^>]*>/g)) {
    const src = decode(match[0].match(/\bsrc="([^"]+)"/)?.[1] || '')
    assert(/\balt="[^"]+"/.test(match[0]), `${route}: photo needs descriptive alt text`)
    const bytes = await readFile('dist' + src)
    const hash = createHash('sha256').update(bytes).digest('hex')
    assert(!photos.has(hash), `${route}: repeated photograph ${src}; already shown at ${photos.get(hash)?.route}`)
    photos.set(hash, { route, src, pixels: await sharp(bytes).rotate().resize(32, 32, { fit: 'fill' }).removeAlpha().raw().toBuffer() })
  }
  for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const href = decode(match[1])
    if (!href.startsWith('/') && !href.startsWith('#')) continue
    const url = new URL(href, 'https://tiptopwelding.com' + route)
    const target = pages.get(url.pathname.replace(/\/$/, '') || '/')
    if (!target) await access('dist' + url.pathname).catch(() => assert.fail(`${route}: broken internal link ${href}`))
    if (url.hash && target) assert(target.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${route}: broken anchor ${href}`)
    checkedLinks++
  }
}
const unique = [...photos.values()]
for (let i = 0; i < unique.length; i++) for (let j = i + 1; j < unique.length; j++) {
  const a = unique[i], b = unique[j]
  let difference = 0
  for (let k = 0; k < a.pixels.length; k++) difference += Math.abs(a.pixels[k] - b.pixels[k])
  assert(difference / a.pixels.length >= 1, `Visually duplicate photos: ${a.src} and ${b.src}`)
}
console.log(`Site audit passed: ${pages.size} pages, ${unique.length} unique photographs, ${checkedLinks} internal links; no repeated photos, duplicate IDs, repeated body paragraphs, missing images, or broken anchors.`)
