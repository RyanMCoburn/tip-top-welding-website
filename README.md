# Tip Top Welding website

Source for https://tiptopwelding.com, hosted on the Netlify project `harmonious-moxie-33152a`.

## Build and preview

Use Node.js 22 or later. Run `npm ci`, then `npm run build`. Publish the generated `dist` directory. `npm run dev` starts a local preview.

The application uses React, TypeScript, Vite and Tailwind. Imports and source filenames use matching lowercase paths for Linux builds.

## Content

- Gallery records: `src/content/gallery`.
- Home portfolio: `src/content/featured-work`.
- Site settings: `src/content/settings/site.json`.
- Individually approved design prices: `src/config/shop.ts`.
- Project photos and optimized website images: `public/images`.

Project photography, promotional images and concepts have separate captions. The seaweed staircase location has not been confirmed; do not label it Casey Key without confirmation.

## Quote requests

The React quote form posts multipart form data to `/quote-request.html`. That static HTML file provides Netlify's form detection schema. Keep its field names synchronized with `src/components/quoteform.tsx`. Netlify form detection must remain enabled. Submissions appear under the `project-quote` form, and email notifications go to the business email configured in Netlify. The form accepts three photos, with a 7 MB combined client limit below Netlify's 8 MB request limit.

## Checkout status

Live checkout is deliberately disabled until the existing business account has live authorization and its tax registration, individual product prices, payment links, receipts and fulfillment notifications are verified. `src/content/settings/design-checkout.json` controls the approved per-design links. Never put test links or one generic price for every design on the public store. Pickup is included; shipping, local delivery, installation and custom changes are quoted separately.

## Publishing and administration

Netlify currently uses manual deployments. Upload a zip containing the contents of `dist`, including the SPA redirects and quote schema. Git-based automatic deployment is not yet connected.

The Decap `/admin` configuration is retained, but its Git Gateway authentication is not configured. Do not describe the editor as ready until sign-in and a complete content edit/deploy have been tested. No secret keys belong in this repository.
