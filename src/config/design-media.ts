import { FEATURED_POOL_INSTALLATIONS } from './pool-installations'
export type DesignMedia = { src: string; label: string; alt: string }
/** Explicit mappings keep design selection tied to the correct photograph. */
export const DESIGN_MEDIA: Record<string, DesignMedia> = {
  ...Object.fromEntries(FEATURED_POOL_INSTALLATIONS.map(photo => [photo.design, {src:photo.src,alt:photo.alt,label:'Photo • completed installation'}])),
  'sea-turtle-mailbox': {src:'/images/portfolio/sea-turtle-stand-project.webp', label:'Project photo • completed metalwork', alt:'Fabricated Sea Turtle mailbox stand outdoors'},
  'seahorse-mailbox': {src:'/images/portfolio/seahorse-stand-project.webp', label:'Project photo • completed metalwork', alt:'Fabricated Seahorse mailbox stand with a flat mounting top'},
  ...Object.fromEntries(['anchor','big-horned-owl','hammerhead-shark','manatee','pelican','shrimp'].map(slug=>[`${slug}-mailbox`, {src:`/images/gallery/${slug}-mailbox-stand.webp`,label:'Design concept • promotional image',alt:`${slug.replaceAll('-',' ')} mailbox stand design concept`} ])),
}
export function designMedia(designId: string): DesignMedia | undefined { return DESIGN_MEDIA[designId] }
