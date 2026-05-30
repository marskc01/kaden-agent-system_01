# Kaden Cinematic Portfolio

A deployable cinematic portfolio built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**. The site preserves a premium cover-page aesthetic while adding real routing, scrollable layouts, reusable project data, subtle interactive motion, and a Vercel-friendly deployment path.

## Included pages

- **Home** — cinematic cover-page style landing experience
- **Film Work** — narrative / auteur-facing project slate
- **Commercial Work** — client / strategy-facing case-study grid
- **About Kaden** — bio, ethos, socials, and contact structure
- **Project pages** — dynamic detail page for each project

## Features

- Global top navigation across all pages
- Normal browser scrolling throughout the site (no forced auto-scroll)
- Responsive neural particle / connected nodes background effect
- Film grain overlay that stays subtle and readable
- Project cards with hover depth / slight 3D tilt interaction
- Central `lib/site.ts` file for global copy, contact details, and category positioning
- Central `lib/projects.ts` data file for easy project replacement
- Placeholder embeds and media notes ready to swap with real project assets

## Project structure

```text
app/
  about/page.tsx
  commercial/page.tsx
  film/page.tsx
  project/[slug]/page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  FilmGrain.tsx
  MarqueeRow.tsx
  NavBar.tsx
  NeuralField.tsx
  PageShell.tsx
  Pill.tsx
  PortfolioCards.tsx
  SectionTitle.tsx
  TiltCard.tsx
lib/
  projects.ts
  site.ts
CUSTOMIZE.md
DEPLOYMENT.md
vercel.json
```

## Local setup

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Create a production build

```bash
npm run build
npm run start
```

### 4. Preview a production build locally

```bash
npm run preview
```

## Customizing the site

Start with these two files:

- `lib/site.ts` — name, metadata, contact details, homepage copy, marquee rows, Film/Commercial page positioning, and About page copy.
- `lib/projects.ts` — all Film and Commercial project entries, including slugs, titles, roles, experience, learnings, deliverables, tags, and media placeholders.

For the complete editing guide, see [`CUSTOMIZE.md`](./CUSTOMIZE.md).

## Deploying to Vercel

This repo includes `vercel.json` with the expected Next.js framework and build settings.

### Option 1: Deploy from GitHub

1. Push this repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/).
3. Click **Add New Project**.
4. Import the GitHub repository.
5. Keep the detected framework preset as **Next.js**.
6. Use the default build settings:
   - **Install Command:** `npm install`
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Node.js Version:** `20.x`
7. Click **Deploy**.

### Option 2: Deploy with the Vercel CLI

```bash
npm install
npx vercel
npm run deploy
```

For the full deploy checklist, see [`DEPLOYMENT.md`](./DEPLOYMENT.md).

## Recommended next steps

- Replace placeholder project copy in `lib/projects.ts`.
- Replace placeholder showreel/media text with real Vimeo or YouTube embeds.
- Add a custom domain in Vercel.
- Update metadata in `lib/site.ts`.
- Add an OG image and social previews.
