import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import CTAButton from './ctabutton'
import { SHOP, liveCheckoutUrl, shopQuoteUrl } from '../config/shop'
import { formatStorePrice } from '../config/store'
export default function ShopCard({category}:{category:'mailbox'|'pool'}) {
  const item=SHOP[category]
  const [params,setParams]=useSearchParams()
  const designId=params.get(category) ?? item.designs[0].id
  const setDesignId=(value:string)=>setParams(previous=>{const next=new URLSearchParams(previous);next.set(category,value);return next},{replace:true,preventScrollReset:true})
  const design=item.designs.find(option=>option.id===designId) ?? item.designs[0]
  const [finish,setFinish]=useState('mill')
  const [material,setMaterial]=useState('stainless')
  const mailbox=category==='mailbox'
  const custom=design.price===null || (mailbox ? finish==='custom' : material==='aluminum')
  const checkout=custom ? null : liveCheckoutUrl(design.id,mailbox?finish:material)
  const total=(design.price ?? 0)+(mailbox && finish==='standard'?250:0)
  const request=`${design.name} design, ${mailbox ? finish==='standard'?'black, white, or bronze powder coat':finish==='custom'?'custom powder-coat color':'mill-finish aluminum':material==='aluminum'?'aluminum':'polished stainless steel'}.`
  const quote=shopQuoteUrl(item.title,`${request} Please confirm pricing, dimensions, and delivery costs.`)
  const input='mt-2 w-full rounded-lg border border-navy-700 bg-navy-950 px-4 py-3 text-white focus:outline-2 focus:outline-accent'
  return <article id={category} className="card-premium flex flex-col overflow-hidden rounded-2xl scroll-mt-24">
    <div className="bg-navy-900">

      <div className="p-6 md:p-8"><p className="text-xs font-semibold uppercase tracking-wider text-accent">Made to order in Cape Coral</p><h2 className="mt-3 text-3xl font-bold text-white">{item.title}</h2><p className="mt-4 font-semibold text-white">{design.name}</p><p className="mt-3 text-steel-300">{mailbox ? 'Aluminum mailbox stand' : material === 'aluminum' ? 'Aluminum pool rail' : 'Polished stainless steel pool rail'}. Each design is priced individually.</p></div>
    </div>
    <div className="flex flex-1 flex-col border-t border-navy-700 p-6 md:p-8">
      <label className="mb-5 font-medium text-steel-300">Design<select value={design.id} onChange={e=>setDesignId(e.target.value)} className={input}>{item.designs.map(option=><option key={option.id} value={option.id}>{option.name} — {option.price===null?'request a quote':formatStorePrice(option.price)}</option>)}</select></label>
      {mailbox ? <label className="font-medium text-steel-300">Finish<select value={finish} onChange={e=>setFinish(e.target.value)} className={input}><option value="mill">Mill-finish aluminum — included</option><option value="standard">Black, white, or bronze powder coat — add $250</option><option value="custom">Other powder-coat color — request a quote</option></select></label> : <label className="font-medium text-steel-300">Material<select value={material} onChange={e=>setMaterial(e.target.value)} className={input}><option value="stainless">Polished stainless steel — standard</option><option value="aluminum">Aluminum — request a quote</option></select></label>}
      <div className="mt-auto pt-6"><div className="mb-4 flex justify-between gap-3 text-white"><span>{custom?'Custom request':'Base order subtotal'}</span><strong>{custom?'Quote required':formatStorePrice(total)}</strong></div>
      {checkout?<CTAButton href={checkout} fullWidth size="lg">Buy {design.name}</CTAButton>:<CTAButton to={quote} fullWidth size="lg">{custom?'Request Custom Quote':'Request This Design'}</CTAButton>}
      <div className="mt-3"><CTAButton to={shopQuoteUrl(item.title,`${request} Please quote delivery/shipping or installation for my location.`)} fullWidth variant="outline">Get Delivery / Installation Quote</CTAButton></div></div>
    </div>
  </article>
}
