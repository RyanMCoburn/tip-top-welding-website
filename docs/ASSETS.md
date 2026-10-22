# Asset Folder Structure

Real Tip Top brand and project files live under `public/images/`. Paths are registered in `src/data/images.ts` and wired in `src/data/projects.ts`.

```
public/
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── .htaccess
└── images/
    ├── logo/
    │   ├── logo-dark.png      → Header (dark mode)
    │   ├── logo-light.png     → Header (light mode)
    │   └── logo.png             → Fallback
    ├── hero/
    │   ├── hero-truck-side.jpg  → Homepage hero background
    │   └── hero.jpg             → Alias
    ├── gallery/                 → Gallery category photos
    ├── projects/                → Before/after + featured project crops
    ├── brand/                   → Social/flyer graphics (not hero use)
    ├── services/                → One photo per service slug (optional)
    └── team/                    → Shop / team photography (optional)
```

## Processing new assets

Run `python scripts/process-assets.py` after dropping source files into the Cursor assets folder, or copy processed files directly into `public/images/`.

## Currently wired assets

| File | Used for |
|------|----------|
| `logo/logo-dark.png` | Header logo — dark mode |
| `logo/logo-light.png` | Header logo — light mode |
| `hero/hero-truck-side.jpg` | Homepage hero, OG image candidate |
| `gallery/mobile-welding-truck-side.jpg` | Gallery, homepage work preview |
| `gallery/mobile-welding-truck-rear.jpg` | Gallery, homepage work preview |
| `gallery/bow-rail-work.jpg` | Gallery, homepage work preview |
| `gallery/custom-mailbox-work.jpg` | Gallery, homepage work preview |
| `projects/boat-rail-before.jpg` | Types of Work — before/after |
| `projects/boat-rail-after.jpg` | Types of Work — before/after |
| `projects/mailbox-fabrication.jpg` | Types of Work — featured project |
| `brand/*.jpg` | Brand Highlights section only (not hero) |

## Categories still needing photos

Aluminum, Stainless, Pool Railings, Decorative Work, Pontoon, Skeg, Nautical Art, Marina/Dock — placeholders show **“Add real Tip Top photo”**.

## Before launch checklist

1. Add remaining real photos — **no stock photography**.
2. Confirm `VERIFIED_CLAIMS` in `src/config/brand.ts` with owner.
3. Set `DEMO_MODE = false` in `src/config/brand.ts`.
4. Update `og:image` in `index.html` if a dedicated OG crop is added.
5. Connect quote form to Formspree or hosting email handler.
6. Have legal counsel review `src/config/legal.ts`.

## Config reference

| File | Purpose |
|------|---------|
| `src/config/brand.ts` | Business identity, logo paths, CONTACT, DEMO_MODE, claims |
| `src/data/images.ts` | Image path registry + gallery categories |
| `src/data/projects.ts` | Real before/after + featured projects |
| `scripts/process-assets.py` | Crop/copy source PNGs into public folders |

## Pool rail photography

Only genuine photographs of final, permanent pool rail installations may be displayed. Temporary display bases, workshop views, test fits, promotional flyers, renderings, and edited installation mockups are excluded from pool rail imagery across the store, gallery, collections, and service pages. Existing originals are retained on disk. No verified final installation photographs are currently selected; retain the product names, prices, and order/quote controls without substituting another photograph.
