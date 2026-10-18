import links from '../content/settings/design-checkout.json'
export type ShopDesign = { id:string; name:string; price:number|null }
export const SHOP = {
  mailbox: { title:'Custom Mailbox Stands', image:'/images/gallery/sea-turtle-mailbox-stand.webp', material:'Mill-finish aluminum', designs:[
    {id:'sea-turtle-mailbox',name:'Sea Turtle',price:4500},
    ...['Anchor','Big Horned Owl','Burrowing Owl','Dolphin','Hammerhead Shark','Manatee','Pelican','Seahorse','Shrimp'].map(name=>({id:`${name.toLowerCase().replaceAll(' ','-')}-mailbox`,name,price:null})),
  ] as ShopDesign[] },
  pool: { title:'Custom Pool Rails', image:'/images/gallery/nautilus-pool-rail.webp', material:'Polished stainless steel', designs:[
    {id:'nautilus-pool-rail',name:'Nautilus',price:3300},
    {id:'dolphin-pool-rail',name:'Dolphin',price:3300},
    {id:'sea-turtle-pool-rail',name:'Sea Turtle',price:4288},
    ...['Captain’s Wheel','Coral','Crab'].map(name=>({id:`${name.toLowerCase().replace(/[^a-z ]/g,'').replaceAll(' ','-')}-pool-rail`,name,price:null})),
  ] as ShopDesign[] },
}
export function liveCheckoutUrl(designId:string,finish:string):string|null {
  const key=`${designId}:${finish}`
  const urlText=(links.urls as Record<string,string>)[key]
  if(!links.enabled || links.mode!=='live' || !urlText) return null
  try { const url=new URL(urlText); return url.protocol==='https:' && url.hostname==='buy.stripe.com' && !url.pathname.startsWith('/test_') ? url.href : null } catch { return null }
}
export function shopQuoteUrl(category:string, request:string) { return `/contact?details=${encodeURIComponent(`I'm interested in ${category}. ${request}`)}#quote-form` }
