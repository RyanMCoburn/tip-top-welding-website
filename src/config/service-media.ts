import { FEATURED_POOL_INSTALLATIONS } from './pool-installations'
export type ServiceMedia = { src:string; alt:string; caption:string; additional?:ServiceMedia[] }
export const SERVICE_MEDIA:Record<string,ServiceMedia> = {
  'pool-railings': {...FEATURED_POOL_INSTALLATIONS[0], additional:FEATURED_POOL_INSTALLATIONS.slice(1).map(photo=>({...photo}))},
  "bow-rail-repairs": {
    "src": "/images/portfolio/boat-rail-fitted-curved-returns.webp",
    "alt": "Installed polished boat railing with curved returns",
    "caption": "Custom boat railing • fitted curved returns",
    "additional": [
      {
        "src": "/images/portfolio/cruisers-yacht-railwork-january-2023.webp",
        "alt": "Meridian yacht undergoing bow-rail replacement",
        "caption": "Meridian yacht • rail replacement during installation"
      }
    ]
  },
  "pontoon-repairs": {
    "src": "/images/portfolio/pontoon-welded-repair-patch.webp",
    "alt": "Pontoon repair patch with a continuous perimeter weld",
    "caption": "Pontoon patch repair • weld detail"
  },
  "skeg-repairs": {
    "src":"/images/portfolio/mercury-racing-400r-skeg-repair.webp","alt":"Mercury Racing 400R outboard shown in full with a bare aluminum repair area on the skeg","caption":"Mercury Racing 400R • skeg repair before refinishing",
    "additional":[
      {"src":"/images/repairs/cavitation-plate-restored-may2026.webp","alt":"Cavitation plate with a rebuilt and shaped aluminum edge","caption":"Cavitation plate • rebuilt edge before paint"},
      {"src":"/images/portfolio/lower-unit-skeg-rebuilt-2026.webp","alt":"Detached lower unit with welded and shaped replacement skeg section","caption":"Skeg repair • weld and shaping detail"}
    ]
  },
  "t-top-fabrication-repairs": {
    "src": "/images/portfolio/custom-rod-holder-racks-black.webp",
    "alt": "Fitted T-top and rod-holder layout aboard a boat in Naples",
    "caption": "Fitted T-top and rod-holder layout • Naples",
    "additional": [
      {
        "src": "/images/portfolio/custom-ttop-with-rod-holders.webp",
        "alt": "Custom T-top assembly with integrated rod holders in the workshop",
        "caption": "Custom T-top assembly • fabrication stage"
      }
    ]
  },
  "custom-rod-holders": {
    "src": "/images/portfolio/custom-rod-holders-installed.webp",
    "alt": "Polished rod-holder assembly installed behind a boat leaning post",
    "caption": "Custom rod holders • installed assembly",
    "additional": [
      {
        "src": "/images/portfolio/custom-rod-holder-racks-black.webp",
        "alt": "Fitted T-top and rod-holder layout aboard a boat in Naples",
        "caption": "Fitted T-top and rod-holder layout • Naples"
      }
    ]
  },
  "swim-platform-railings": {
    "src": "/images/portfolio/swim-platform-railing-installation.webp",
    "alt": "Davit assembly being fitted on a yacht swim platform",
    "caption": "Swim-platform davit assembly • during fitting"
  },
  "fuel-tanks": {
    "src": "/images/portfolio/custom-welded-tank.webp",
    "alt": "Custom aluminum tank showing welded seams and fittings",
    "caption": "Custom aluminum tank • welded fabrication",
    "additional": [
      {
        "src": "/images/portfolio/formed-tank-with-fill-pipes.webp",
        "alt": "Custom shaped aluminum tank with two angled pipes",
        "caption": "Formed aluminum tank • pipe connections and welded seams"
      }
    ]
  },
  "marine-welding": {
    "src": "/images/portfolio/yacht-stainless-railing.webp",
    "alt": "Stainless upper-deck railwork on an Azimut yacht",
    "caption": "Azimut yacht • stainless railwork",
    "additional": [
      {
        "src": "/images/portfolio/azimut-flybridge-finished-railwork.webp",
        "alt": "Finished yacht flybridge with teak decking and stainless perimeter rails",
        "caption": "Finished flybridge • stainless perimeter railings"
      }
    ]
  },
  "dock-marina": {
    "src": "/images/portfolio/fish-cleaning-table.webp",
    "alt": "Custom metal fish-shaped cleaning table installed beside the water",
    "caption": "Custom waterfront table • fitted top and metal frame"
  },
  "decorative-rails": {
    "src": "/images/portfolio/geometric-stair-railing.webp",
    "alt": "Custom geometric railing panels fitted to an interior staircase",
    "caption": "Geometric stair railings • installed",
    "additional": [
      {"src":"/images/portfolio/curved-staircase-overview.webp","alt":"Finished curved staircase and decorative landing railings","caption":"Curved staircase and landing • finished installation"},
      {
        "src": "/images/portfolio/horizontal-entry-railings.webp",
        "alt": "Installed horizontal entrance and walkway railings",
        "caption": "Entrance and walkway railings • installed"
      },
      {
        "src": "/images/portfolio/stair-railing-detail.webp",
        "alt": "Finished exterior stair railing with decorative collars and mounting plates",
        "caption": "Stair railing • finish and mounting detail"
      }
    ]
  },
  "custom-gates": {
    "src": "/images/portfolio/naples-brushed-stainless-gate.webp",
    "alt": "Installed brushed stainless steel double gate with pale inset panels in Naples",
    "caption": "Brushed stainless steel gate • Naples",
    "additional": [
      {"src":"/images/services/decorative-gate.webp","alt":"Installed arched metal gate with detailed scrollwork","caption":"Custom scrollwork gate • installed"},
      {"src":"/images/portfolio/dolphin-garden-gate.webp","alt":"Installed garden gate with a dolphin design","caption":"Dolphin garden gate • installed"}
    ]
  },
  "louvers-privacy-screens": {
    "src": "/images/portfolio/horizontal-privacy-screens.webp",
    "alt": "Finished horizontal privacy screens fitted between stone columns",
    "caption": "Custom privacy screens • finished installation",
    "additional": [
      {
        "src": "/images/portfolio/louvered-equipment-screen.webp",
        "alt": "Installed white louvered enclosure with a matching access gate",
        "caption": "Louvered enclosure • installed panels and access gate"
      }
    ]
  },
  "custom-metal": {
    "src": "/images/portfolio/fish-cleaning-table.webp",
    "alt": "Custom metal fish-shaped cleaning table installed beside the water",
    "caption": "Custom waterfront table • fitted top and metal frame"
  },
  "nautical-metal-art": {
    "src": "/images/portfolio/gold-patina-dolphin.webp",
    "alt": "Custom dolphin metal artwork with a gold patina",
    "caption": "Dolphin metal art • gold patina finish",
    "additional": [
      {
        "src": "/images/portfolio/twisted-fish-sculpture.webp",
        "alt": "Custom metal fish and starfish sculpture with textured details",
        "caption": "Custom fish sculpture • fabricated metalwork"
      }
    ]
  },
  "mobile-welding": {
    "src": "/images/portfolio/ttop-dockside-welding.webp",
    "alt": "Welder carrying out T-top work aboard a boat at a dock",
    "caption": "On-site T-top welding • project work in progress"
  },
  "aluminum-welding": {
    "src": "/images/portfolio/custom-welded-tank.webp",
    "alt": "Custom aluminum tank showing welded seams and fittings",
    "caption": "Custom aluminum tank • welded fabrication"
  },
  "stainless-steel": {
    "src": "/images/portfolio/azimut-flybridge-finished-railwork.webp",
    "alt": "Finished yacht flybridge with teak decking and stainless perimeter rails",
    "caption": "Finished flybridge • stainless perimeter railings"
  }
}
