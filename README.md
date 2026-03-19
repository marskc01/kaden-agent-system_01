# Kaden Cinematic Portfolio

A deployable cinematic portfolio built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**. The site preserves a premium cover-page aesthetic while adding real routing, scrollable layouts, reusable project data, subtle interactive motion, and a Vercel-friendly deployment path.

## Included pages

- **Home** — cinematic cover-page style landing experience
- **Film Work** — narrative / auteur-facing project grid
- **Commercial Work** — client / strategy-facing project grid
- **About Kaden** — bio, ethos, socials, and contact structure
- **Project pages** — dynamic detail page for each project

## Features

- Global top navigation across all pages
- Normal browser scrolling throughout the site (no forced auto-scroll)
- Responsive neural particle / connected nodes background effect
- Film grain overlay that stays subtle and readable
- Project cards with hover depth / slight 3D tilt interaction
- Central `lib/projects.ts` data file for easy content replacement
- Placeholder embeds and posters ready to swap with real project assets

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
  NavBar.tsx
  NeuralField.tsx
  PageShell.tsx
  ProjectCard.tsx
  SectionIntro.tsx
lib/
  projects.ts
```

## Local setup

### 1) Install dependencies

```bash
npm install
```

### 2) Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3) Create a production build

```bash
npm run build
npm run start
```

## Replacing placeholder content

Update `lib/projects.ts` with your real:

- project titles and slugs
- poster URLs or image assets
- Vimeo / YouTube embed URLs
- synopsis and strategy copy
- roles, credits, tags, and deliverables
- client names and contact information

Update `app/about/page.tsx` with your real:

- biography
- creative ethos
- email address
- Instagram / Vimeo / other socials

## Deploying to Vercel

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
7. Click **Deploy**.

### Option 2: Deploy with the Vercel CLI

```bash
npm i -g vercel
vercel
```

For production deployment:

```bash
vercel --prod
```

## Recommended next steps

- Replace Unsplash placeholders with owned stills / posters
- Add a custom domain in Vercel
- Add metadata images and social previews
- Connect analytics if desired
- Add a CMS later if you want self-managed project updates
