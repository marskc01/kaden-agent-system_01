# Kaden Cinematic Portfolio

A deployable Next.js portfolio for a cinematic filmmaker / director brand, with dedicated pages for narrative work, commercial work, an about page, and dynamic project detail pages.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel-ready deployment

## Features

- Scrollable cinematic home page with strong readability
- Top navigation across all pages
- Dedicated **Film Work**, **Commercial Work**, and **About Kaden** pages
- Dynamic **Project** pages powered by `lib/projects.ts`
- Subtle neural / connected-nodes background that reacts to the pointer
- Light film grain overlay for texture
- Project cards with hover depth / slight 3D tilt
- Placeholder copy and media blocks designed for easy replacement
- No forced auto-scroll behavior

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

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Editing content

Replace placeholder content in:

- `lib/projects.ts` for project titles, tags, embeds, copy, and metadata
- `app/about/page.tsx` for bio, ethos, contact details, and social links
- `app/page.tsx` for the home page headline and cover messaging

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com/) and import the repository.
3. Select the **Next.js** framework preset if Vercel does not detect it automatically.
4. Keep the default install command (`npm install`) and build command (`npm run build`).
5. Deploy.

### Optional post-deploy steps

- Add a custom domain
- Update metadata / OG image
- Replace placeholder embeds with Vimeo or YouTube links
- Swap the placeholder contact details for real links
- Add stills or posters in `public/` and wire them into the project pages

## Notes

- The site intentionally preserves viewer control with normal scroll behavior.
- Styling keeps the cinematic feel without sacrificing text contrast or usability.
- The project data file is ready for expansion as you add real work.
