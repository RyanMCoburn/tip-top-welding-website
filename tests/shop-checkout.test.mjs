import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'
import ts from 'typescript'

function loadShop() {
  const config = JSON.parse(readFileSync(new URL('../src/content/settings/design-checkout.json', import.meta.url)))
  const source = readFileSync(new URL('../src/config/shop.ts', import.meta.url), 'utf8')
  const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText
  const exports = {}
  vm.runInNewContext(output, { exports, require: () => ({ default: config }), URL })
  return { ...exports, config }
}

test('approved prices enable all five existing live checkout links', () => {
  const { liveCheckoutUrl, config } = loadShop()
  for (const [key, url] of Object.entries(config.urls)) {
    const [design, finish] = key.split(':')
    assert.equal(liveCheckoutUrl(design, finish), url)
  }
})

test('price changes disable checkout until the Stripe amount is verified again', () => {
  const { SHOP, liveCheckoutUrl } = loadShop()
  SHOP.pool.designs[0].price += 1
  assert.equal(liveCheckoutUrl('nautilus-pool-rail', 'stainless'), null)
})

test('unpriced custom designs, test links and foreign destinations cannot take payment', () => {
  const { liveCheckoutUrl, config } = loadShop()
  assert.equal(liveCheckoutUrl('anchor-mailbox', 'mill'), null)
  for (const url of ['https://buy.stripe.com/test_invalid', 'https://example.com/pay', 'http://buy.stripe.com/invalid']) {
    config.urls['nautilus-pool-rail:stainless'] = url
    assert.equal(liveCheckoutUrl('nautilus-pool-rail', 'stainless'), null)
  }
})
