# Tip Top Welding Website

Professional static website for Tip Top Welding — marine aluminum and stainless fabrication in Southwest Florida.

**Stack:** Vite, React, TypeScript, Tailwind CSS, React Router. No backend, no database.

---

## Run Locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

---

## Build for Production

```bash
npm run build
```

Production files are generated in the **`dist/`** folder:

```
dist/
  index.html
  assets/
  favicon.svg
  robots.txt
  sitemap.xml
  .htaccess
```

Preview the production build locally:

```bash
npm run preview
```

---

## Connect Quote Form (Formspree)

No backend required. The quote form posts to Formspree when configured.

1. **Create a Formspree form** at [formspree.io](https://formspree.io/) and set the notification email to `tiptopwelding@outlook.com` (or the client’s preferred inbox).
2. **Copy the form endpoint URL** from Formspree (format: `https://formspree.io/f/xxxxxxxx`).
3. **Paste the URL** into `src/config/forms.ts`:

   ```ts
   export const QUOTE_FORM_ENDPOINT = 'https://formspree.io/f/your-form-id'
   ```

4. **Test a submission** — run `npm run dev`, open `/contact`, fill out the quote form, and confirm the email arrives in Formspree / the inbox.

While `QUOTE_FORM_ENDPOINT` is empty, the form stays in **demo mode** (nothing is sent; a demo message is shown).

Fields sent to Formspree: `name`, `phone`, `email`, `projectType`, `message`, and hidden `source` (`Tip Top Welding Website`).

Photo upload is not enabled yet — customers can text photos using the **Text Project Photos** button.

---

## Content management (Decap CMS)

Tip Top Welding can update gallery photos, project examples, homepage featured work, and site settings from `/admin` after Netlify deploy — no code required.

**Full setup guide:** [docs/CMS.md](docs/CMS.md)

### Quick setup summary

1. **Create a GitHub repo** and push this project.
2. **Deploy to Netlify** — build command `npm run build`, publish directory `dist`.
3. **Enable Netlify Identity** (invite only recommended).
4. **Enable Git Gateway** under Identity services.
5. **Invite Tip Top Welding** as a site user via Netlify Identity.
6. Visit **`/admin`** on the live site and log in with Netlify Identity.
7. Upload and edit photos — each publish triggers a new build.

CMS content is stored in `src/content/` (JSON). Uploaded images go to `public/images/uploads/`. The site falls back to built-in data when CMS folders are empty, so `npm run build` always works locally.

---

## Before Showing Client

Complete these in `src/config/brand.ts`, `src/config/legal.ts`, `src/data/siteContent.ts`, and `src/data/images.ts`:

- [ ] **Verify LLC name** — `BRAND.legalName` in `src/config/brand.ts` (currently `Tip Top Welding LLC`)
- [ ] **Verify address** — `BRAND.streetAddress`, `BRAND.city`, `BRAND.postalCode`, `BRAND.fullAddress`
- [ ] **Verify phone** — `BRAND.phone` / `BRAND.phoneRaw`
- [ ] **Verify email** — `BRAND.email`
- [ ] **Verify insurance wording** — update `TRUST_ITEMS` licensed entry only after client confirms coverage details
- [ ] **Verify license wording** — update `TRUST_ITEMS` and FAQ licensed answer only after client confirms license details
- [ ] **Verify service area wording** — confirm `SERVICE_AREAS` list and `DISCLAIMERS.serviceArea` in `src/config/legal.ts`
- [ ] **Replace photos** — update `src/data/images.ts` paths to `public/images/…`
- [ ] **Replace reviews** — swap `REVIEWS` with verified Google reviews; set `REVIEWS_ARE_PLACEHOLDER` to `false`
- [ ] **Confirm Google Business link** — add to footer/contact when URL is available
- [ ] **Confirm domain/hosting access** — verify `tiptopwelding.com` DNS and cPanel login

Walk the client through demo placeholders (sample reviews, demo form, placeholder photos) so nothing is mistaken for live data.

---

## Before Going Live

- [ ] Run `npm run build`
- [ ] Upload **contents of `dist/`** to hosting (GoDaddy / cPanel `public_html`)
- [ ] Confirm `.htaccess` is uploaded for SPA routing
- [ ] **Test mobile buttons** — Call, Text Photos, Get Quote sticky bar
- [ ] **Test all navigation** — all 7 routes + 404 page
- [ ] **Test quote form behavior** — with `QUOTE_FORM_ENDPOINT` set, confirm Formspree email delivery; with it empty, confirm demo message
- [ ] Set `QUOTE_FORM_ENDPOINT` in `src/config/forms.ts` (see **Connect Quote Form** above)
- [ ] **Submit sitemap** — `https://tiptopwelding.com/sitemap.xml` in Google Search Console
- [ ] **Update Google Business Profile** website URL to `https://tiptopwelding.com`
- [ ] Replace `og:image` in `index.html` with `public/images/og-image.jpg`
- [ ] Have legal counsel review `src/config/legal.ts` (Privacy Policy, Terms, disclaimers)
- [ ] Update analytics and cookies sections in `PRIVACY_POLICY` once production tools are configured

---

## Deploy to GoDaddy / cPanel

1. Run `npm run build`.
2. Log in to GoDaddy → **cPanel** → **File Manager** (or FTP).
3. Upload everything inside `dist/` to `public_html`.
4. Ensure `index.html`, `robots.txt`, `sitemap.xml`, and `.htaccess` are at the domain root.

### SPA Routing

The included `public/.htaccess` rewrites unknown paths to `index.html` so React Router works on Apache/cPanel.

### Routes (sitemap-ready)

| Route       | Page            |
|-------------|-----------------|
| `/`         | Home            |
| `/services` | Services index  |
| `/services/:slug` | Individual SEO service pages (10 routes) |
| `/projects` | Projects        |
| `/faq` | FAQ page |
| `/gallery`  | Gallery         |
| `/about`    | About           |
| `/contact`  | Contact         |
| `/privacy`  | Privacy Policy  |
| `/terms`    | Terms of Service|

---

## Architecture

```
src/
  config/
    brand.ts          # BRAND, DEMO_MODE, CTAs, service areas, NAP
    forms.ts          # Formspree endpoint (CMS site settings override)
    legal.ts          # Privacy, Terms, disclaimers
    seo.ts            # Route metadata, getRouteMeta()
  content/
    gallery/          # Decap CMS gallery photos (*.json)
    projects/         # Decap CMS work examples (*.json)
    featured-work/    # Decap CMS homepage featured work (*.json)
    settings/         # site.json — business info, social links, Formspree
    loaders.ts        # CMS data + fallback merge logic
  data/
    models/           # TypeScript interfaces (project, service, faq)
    services.ts       # Service pages + per-service SEO content
    projects.ts       # Gallery, featured, before/after project registry
    faq.ts            # FAQ items
    images.ts         # Image path registry
    siteContent.ts    # Marketing copy barrel + re-exports
  components/
    PageMeta.tsx      # Route-specific document title & meta tags
    LocalBusinessSchema.tsx  # JSON-LD structured data
public/
  admin/              # Decap CMS admin (index.html, config.yml)
  images/uploads/     # CMS uploaded photos
docs/
  ASSETS.md           # Public image folder structure
  CMS.md              # Decap CMS setup and Tip Top Welding admin guide
```

Set `DEMO_MODE = false` in `src/config/brand.ts` before launch.

## Updating Client Content

**Start here:**

| File | What to edit |
|------|--------------|
| `src/config/brand.ts` | LLC name, phone, email, address, DEMO_MODE |
| `src/config/forms.ts` | Formspree quote form endpoint (overridden by CMS Site Settings when set) |
| `src/config/legal.ts` | Privacy Policy, Terms of Service, disclaimers |
| `src/config/seo.ts` | Default SEO, static route metadata |
| `src/data/services.ts` | Service copy + SEO pages (`/services/:slug`) |
| `src/data/projects.ts` | Gallery, featured, before/after projects |
| `src/data/faq.ts` | FAQ questions and answers |
| `src/data/images.ts` | Image URLs → `public/images/...` |
| `src/data/siteContent.ts` | Marketing sections, reviews, social links |

See **[docs/ASSETS.md](docs/ASSETS.md)** for the recommended `public/images/` folder layout.

Save real photos to `public/images/` and update paths in `images.ts`.

| Section | What to replace |
|---------|-----------------|
| `SITE` | Phone, email, location, domain |
| `SERVICE_AREAS` | Confirmed service cities |
| `SERVICES` | Descriptions, use cases, service images |
| `PROJECTS` | Real project photos and titles |
| `FEATURED_PROJECTS` | Featured project showcase |
| `BEFORE_AFTER_PROJECTS` | Before/after case studies |
| `WHY_CHOOSE_TIPTOP` | Why choose section copy |
| `MARINE_WELDING_SEO` | SEO content block |
| `SOCIAL_LINKS` | Google, Facebook, Instagram URLs |
| `CONTACT_CARDS` | Call, text, email card content |
| `SERVICE_AREA_MAP` | Map embed placeholder |
| `PROJECT_SCOPE` | Project investment positioning |
| `REVIEWS` | Real Google reviews |
| `SEO_COPY` | Location/SEO paragraphs (verify accuracy) |
| `TRUST_ITEMS` | License numbers, insurance details |
| `IMAGES` | All placeholder image URLs |

Search the codebase for `TODO` comments for additional swap points.

---

## Demo / Placeholder Safety

The following are **not live** or **not verified** until confirmed:

- License and insurance trust/FAQ wording (placeholders until client verification)
- Analytics and cookies policy sections (TODO placeholders in `legal.ts`)
- All gallery, hero, and service photos (Unsplash placeholders)
- Review section (`REVIEWS_ARE_PLACEHOLDER = true`)
- Quote form (demo mode until `QUOTE_FORM_ENDPOINT` is set in `src/config/forms.ts`)
- Google Maps embed on Contact page (`SERVICE_AREA_MAP.embedUrl`)
- Privacy Policy and Terms (draft copy in `legal.ts` — need legal counsel review)

---

## Project Structure

```
src/
  data/
    siteContent.ts    ← Business copy, services, reviews
    images.ts         ← Placeholder image paths
  components/
  pages/
  App.tsx
public/
  favicon.svg
  robots.txt
  sitemap.xml
  .htaccess
```

---

## Notes

- No environment variables required for basic static deployment.
- Do not publish unverified claims (years in business, certifications, guarantees) without client confirmation.
