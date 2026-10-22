import links from '../content/settings/design-checkout.json'
export type ShopDesign = { id:string; name:string; price:number|null }
export type DesignMedia = { src: string; label: string; alt: string }
/** Explicit mappings keep design selection tied to the correct photograph. */
export const DESIGN_MEDIA: Record<string, DesignMedia> = {
  'dolphin-pool-rail': {src:'/images/portfolio/dolphin-poolside-project.webp', label:'Project photo • poolside display', alt:'Polished Dolphin pool rail beside a residential pool on a display base'},
  'nautilus-pool-rail': {src:'/images/portfolio/nautilus-poolside-project.webp', label:'Project photo • poolside display', alt:'Nautilus pool rail beside a pool on a display base'},
  'sea-turtle-pool-rail': {src:'/images/portfolio/sea-turtle-poolside-project.webp', label:'Project photo • poolside test fit', alt:'Sea Turtle pool rail during a test fit beside a stone-edge pool on a temporary base'},
  'sea-turtle-mailbox': {src:'/images/portfolio/sea-turtle-stand-project.webp', label:'Project photo • completed metalwork', alt:'Fabricated Sea Turtle mailbox stand outdoors'},
  'seahorse-mailbox': {src:'/images/portfolio/seahorse-stand-project.webp', label:'Project photo • completed metalwork', alt:'Fabricated Seahorse mailbox stand with a flat mounting top'},
  ...Object.fromEntries(['anchor','big-horned-owl','hammerhead-shark','manatee','pelican','shrimp'].map(slug=>[`${slug}-mailbox`, {src:`/images/gallery/${slug}-mailbox-stand.webp`,label:'Design concept • promotional image',alt:`${slug.replaceAll('-',' ')} mailbox stand design concept`} ])),
  ...Object.fromEntries(['captains-wheel','coral','crab'].map(slug=>[`${slug}-pool-rail`, {src:`/images/gallery/${slug}-pool-rail.webp`,label:'Design concept • promotional image',alt:`${slug.replaceAll('-',' ')} pool rail design concept`} ])),
}
export function designMedia(designId: string): DesignMedia | undefined { return DESIGN_MEDIA[designId] }
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
  const design=[...SHOP.mailbox.designs,...SHOP.pool.designs].find(item=>item.id===designId)
  if(design?.price==null) return null
  const subtotal=design.price+(designId.endsWith('-mailbox') && finish==='standard'?250:0)
  if((links.unitAmounts as Record<string,number>)[key]!==Math.round(subtotal*100)) return null
  try { const url=new URL(urlText); return url.protocol==='https:' && url.hostname==='buy.stripe.com' && !url.pathname.startsWith('/test_') ? url.href : null } catch { return null }
}
export function shopQuoteUrl(category:string, request:string) { return `/contact?details=${encodeURIComponent(`I'm interested in ${category}. ${request}`)}#quote-form` }
