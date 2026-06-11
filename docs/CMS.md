# Tip Top Welding — Decap CMS Guide

Tip Top Welding LLC can update gallery photos, project examples, homepage featured work, and key site settings from a browser — no code editing required.

**Admin URL (after Netlify deploy):** `https://tiptopwelding.com/admin`

---

## One-time setup (developer)

### 1. Create a GitHub repository

1. Create a new GitHub repository for the Tip Top Welding website.
2. Push this project to the repository.
3. Use `main` as the default branch (matches `public/admin/config.yml`).

### 2. Deploy to Netlify

1. Sign in at [netlify.com](https://www.netlify.com/).
2. **Add new site → Import an existing project → GitHub.**
3. Select the Tip Top Welding repository.
4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Deploy the site.

### 3. Enable Netlify Identity

1. In Netlify: **Site configuration → Identity → Enable Identity.**
2. Under **Registration preferences**, set to **Invite only** (recommended).

### 4. Enable Git Gateway

1. In Netlify: **Site configuration → Identity → Services → Git Gateway.**
2. Click **Enable Git Gateway** so Decap CMS can commit content changes to GitHub.

### 5. Invite Tip Top Welding as a site user

1. In Netlify: **Identity → Invite users.**
2. Send an invite to the Tip Top Welding business email.
3. The invited user accepts the email and sets a password.

### 6. Open the CMS

1. Visit `https://your-site.netlify.app/admin` (or your custom domain `/admin`).
2. Click **Login with Netlify Identity**.
3. Sign in with the invited Tip Top Welding account.

After login, Tip Top Welding can add and edit content. Each save creates a Git commit and triggers a new Netlify build.

---

## What Tip Top Welding can edit

| Collection | Purpose |
|------------|---------|
| **Gallery Photos** | Photos grouped by category on `/gallery` |
| **Work Examples / Projects** | Before/after blocks, featured project, and work example cards on `/projects` |
| **Homepage Featured Work** | “Recent Work” cards on the homepage |
| **Site Settings** | Business name, phone, email, address, service areas, social links, Formspree endpoint |

Uploaded images are stored in `public/images/uploads/` and served at `/images/uploads/...`.

---

## How to add a gallery photo

1. Log in at `/admin`.
2. Open **Gallery Photos → New Gallery Photo**.
3. Fill in:
   - **Title** — short label (e.g. `Bow Rail Repair — Cape Coral`)
   - **URL slug** — lowercase with hyphens (e.g. `bow-rail-repair-cape-coral`)
   - **Category** — pick one of the eight gallery categories
   - **Image** — upload a clear project photo
   - **Alt text** — describe the work for accessibility
   - **Description** — optional caption
   - **Sort order** — lower numbers appear first (optional)
4. Click **Publish** (or **Save** in editorial workflow).
5. Wait for Netlify to rebuild (usually 1–2 minutes).
6. Check `/gallery` — the photo appears under its category.

If no CMS photos exist for a category, the site shows the built-in placeholder until real photos are added.

---

## How to replace a project photo

1. Log in at `/admin`.
2. Open **Work Examples / Projects**.
3. Either edit an existing entry or create a new one.
4. Upload a new **Main image**, or update **Before image** / **After image** for before/after sections.
5. Set **Featured** to `true` if this should be the main featured project on Types of Work.
6. Publish and wait for the rebuild.
7. Check `/projects`.

**Before & After:** Both before and after images must be uploaded for the before/after block to appear.

---

## How to set featured homepage photos

1. Log in at `/admin`.
2. Open **Homepage Featured Work → New Featured Work Item**.
3. Add **Title**, **URL slug**, **Image**, **Alt text**, and optional **Description** (shown as the category line).
4. Optional **Link** — internal path such as `/projects` or `/gallery`.
5. Use **Sort order** to control card order (lower = first).
6. Publish and wait for the rebuild.
7. Check the homepage **Recent Work** section.

If no homepage featured work entries exist, the site uses built-in fallback cards so the page still builds.

---

## Recommended photo specs

| Use | Recommendation |
|-----|----------------|
| **Width** | 1600px or larger (landscape) |
| **Format** | JPG or WebP |
| **Aspect ratio** | 4:3 or 3:2 works best in gallery cards |
| **File size** | Under 500 KB when possible (compress before upload) |
| **Lighting** | Clear, well-lit project photos |

### Recommended file names

Use descriptive lowercase names when uploading:

- `bow-rail-repair-cape-coral.jpg`
- `pool-railing-stainless-fort-myers.jpg`
- `custom-mailbox-fabrication.jpg`
- `dock-ladder-repair-marina.jpg`

Decap CMS stores files in `/images/uploads/` — the CMS handles the path automatically.

---

## Photo quality guidelines

**Do upload:**

- Clear photos of finished welding or fabrication work
- Before and after shots taken in similar lighting
- Close-ups that show weld quality and fitment

**Do not upload:**

- Blurry screenshots
- Social media flyers or promotional graphics as main project photos
- Heavily filtered images
- Photos with large watermarks

Use flyers and branding graphics only in appropriate marketing sections — not as primary gallery or project photos.

---

## Site settings

Open **Site Settings** in the CMS to update:

- Business name (`Tip Top Welding LLC`)
- Phone, email, address
- Service areas list
- Facebook, Instagram, and Google Reviews URLs
- **Formspree endpoint** — quote form URL (`https://formspree.io/f/...`)

Leave Formspree empty to keep demo mode (form shows a demo message instead of sending email).

Changes apply after the next Netlify build.

---

## Local development notes

- Content files live in `src/content/` (JSON).
- Fallback data in `src/data/` keeps the site working when CMS folders are empty.
- The site reads CMS JSON at **build time** — a rebuild is required after CMS edits (automatic on Netlify).
- Admin panel files: `public/admin/index.html` and `public/admin/config.yml`.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Cannot log in at `/admin` | Confirm Netlify Identity is enabled and the user was invited |
| Save fails in CMS | Enable Git Gateway under Netlify Identity services |
| Photos not showing | Wait for build to finish; confirm image uploaded under `/images/uploads/` |
| Quote form still in demo mode | Add Formspree endpoint in Site Settings and republish |
| Build fails after CMS edit | Check JSON entries have required fields (title, slug, category, image where required) |

For developer support, review the Netlify deploy log and confirm `npm run build` passes locally.
