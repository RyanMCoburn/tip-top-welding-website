export type ServiceMedia = { src:string; alt:string; caption:string; additional?:ServiceMedia[] }
export const SERVICE_MEDIA:Record<string,ServiceMedia> = {
  'pontoon-repairs': {src:'/images/services/pontoon-work.webp',alt:'Pontoon boat supported on stands outside the workshop',caption:'Pontoon boat in the workshop yard'},
  'skeg-repairs': {src:'/images/services/skeg-assessment.webp',alt:'Close-up of an outboard lower unit and damaged skeg',caption:'Skeg damage assessment • before repair'},
  'decorative-rails': {src:'/images/portfolio/seaweed-stair-rail.webp',alt:'Custom seaweed-pattern railing following an indoor staircase',caption:'Seaweed-pattern stair railing • project installation photo',additional:[
    {src:'/images/services/decorative-gate.webp',alt:'Installed arched metal gate with decorative scrollwork',caption:'Decorative gate with custom scrollwork'},
    {src:'/images/services/decorative-railing.webp',alt:'Installed metal railing along a covered walkway',caption:'Walkway railing'},
    {src:'/images/services/stair-railing.webp',alt:'Stair railing with bolted base and decorative post detail',caption:'Stair railing and mounting detail'},
  ]},
  'marine-welding': {src:'/images/portfolio/yacht-stainless-railing.webp',alt:'Yacht upper-deck stainless railing in a marina',caption:'Yacht railwork • project photo'},
  'mobile-welding': {src:'/images/services/mobile-welding-truck.webp',alt:'Tip Top Welding branded mobile welding truck',caption:'Tip Top Welding mobile welding • promotional image'},
  'aluminum-welding': {src:'/images/gallery/sea-turtle-mailbox-stand.webp',alt:'Sea Turtle aluminum mailbox stand in the workshop',caption:'Aluminum mailbox fabrication • workshop promotional image'},
  'stainless-steel': {src:'/images/gallery/nautilus-pool-rail.webp',alt:'Nautilus stainless pool rail design',caption:'Nautilus pool rail • promotional design image'},
  'bow-rail-repairs': {src:'/images/services/bow-rail-after.webp',alt:'Boat bow rail after repair, shown in Tip Top Welding promotional material',caption:'Bow-rail repair • project photo from Tip Top Welding promotional material'},
  'pool-railings': {src:'/images/gallery/dolphin-pool-rail.webp',alt:'Dolphin pool rail design',caption:'Dolphin pool rail • promotional design image'},
  'custom-metal': {src:'/images/services/mailbox-installation.webp',alt:'Custom mailbox installation shown in Tip Top Welding promotional material',caption:'Custom mailbox installation • project promotional image'},
  'nautical-metal-art': {src:'/images/gallery/seahorse-mailbox-stand.webp',alt:'Seahorse mailbox stand design',caption:'Seahorse mailbox stand • design concept'},
}
