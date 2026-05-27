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

### Recommended Vercel project settings

This repo is set up to run on **Vercel Hobby** with:

- **Framework Preset:** Next.js
- **Node.js Version:** 20.x
- **Install Command:** `npm install`
- **Build Command:** `npm run build`

A `vercel.json` file is included so the project keeps those defaults when imported.

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

## Daily Morning Brief automation (6:00am Australia/Perth)

This repo includes an automated daily briefing generator tailored for **Kaden Condie (Perth, WA)**.

### Output format

The generated file is:

- `morning-brief/latest.md`
- `morning-brief/brief-YYYYMMDD.md`

And follows this structure:

- `# Morning Brief — [Day, Date]`
- Today at a Glance
- Calendar
- Priority Actions
- To-Do List (Must/Should/Can move)
- Important Emails
- Career / Film / Business Opportunities
- Work / Client Priorities
- Logistics
- Suggested Day Plan
- `Main thing today: ...`

### Schedule

GitHub Actions workflow: `.github/workflows/morning-brief.yml`

- Runs daily at **6:00am Australia/Perth** (cron set as `0 22 * * *` UTC).
- Can also be run manually via **workflow_dispatch**.

### Data sources

The script reads JSON from either URLs or files (URLs typically set via GitHub Secrets):

- `CALENDAR_JSON_URL` or `CALENDAR_JSON_FILE`
- `TASKS_JSON_URL` or `TASKS_JSON_FILE`
- `EMAILS_JSON_URL` or `EMAILS_JSON_FILE`
- `SOURCES_JSON_URL` or `SOURCES_JSON_FILE`

If a source is missing/unavailable, the brief states that clearly and does not invent data.

### Expected JSON shape (minimum)

```json
{
  "items": []
}
```

Or a top-level array.

Calendar item example:

```json
{
  "title": "Client edit review",
  "start": "2026-05-28T01:30:00Z",
  "end": "2026-05-28T02:15:00Z",
  "location": "Northbridge Studio",
  "attendees": ["Client Name"],
  "prepNotes": "Bring cut v3 and revision list"
}
```

Task item example:

```json
{
  "title": "Submit Screenwest funding draft",
  "priority": "high",
  "overdue": true,
  "notes": "Due today"
}
```

Email item example:

```json
{
  "from": "Festival Team",
  "subject": "Submission deadline reminder",
  "snippet": "Final call closes Friday",
  "unread": true,
  "suggestedAction": "Confirm submission package today"
}
```

### Manual run

```bash
npm run brief:daily
```
