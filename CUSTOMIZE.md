# Customization Guide

This portfolio is intentionally set up so you can customize the live site without hunting through every component.

## Quick edit map

| What you want to change | File to edit |
| --- | --- |
| Name, nav label, email, Instagram, metadata | `lib/site.ts` |
| Homepage headline, hero text, reel placeholder, contact CTA | `lib/site.ts` |
| Film/Commercial page positioning copy | `lib/site.ts` |
| Marquee words | `lib/site.ts` |
| Project titles, slugs, case-study copy, roles, deliverables | `lib/projects.ts` |
| Visual background themes | `components/PageShell.tsx` |
| Particle colors, density, mouse behavior | `components/NeuralField.tsx` |
| Card layouts and hover/tilt presentation | `components/PortfolioCards.tsx` |

## 1. Change global identity and contact details

Open `lib/site.ts` and update `siteConfig`:

```ts
export const siteConfig = {
  name: "Kaden Condie",
  navLabel: "Portfolio V0.2",
  location: "Perth, WA",
  contact: {
    email: "kadencondie2@gmail.com",
    instagramLabel: "Instagram",
    instagramUrl: "https://instagram.com"
  }
};
```

These values are used by the navigation, homepage contact block, About page contact block, and app metadata.

## 2. Customize the homepage

Still in `lib/site.ts`, edit `siteConfig.home` to update:

- hero pills
- main headline and emphasized second line
- intro paragraph
- small stat cards
- reel/showreel placeholder text
- final contact CTA

The homepage component reads those values from `siteConfig`, so you usually do not need to edit `app/page.tsx` for copy changes.

## 3. Customize Film and Commercial positioning

Edit `categoryMeta` in `lib/site.ts`:

```ts
film: {
  label: "Film Work",
  short: "Filmmaking-led",
  hero: "Narrative projects presented more like a film slate than a client case-study grid.",
  pageText: "..."
}
```

Use the Film copy for auteur/narrative language. Use the Commercial copy for client, strategy, marketing, deliverables, and clarity.

## 4. Add or edit projects

Open `lib/projects.ts`. Each project follows this shape:

```ts
{
  slug: "my-project-slug",
  title: "My Project",
  category: "film", // or "commercial"
  type: "Short Film",
  year: "2026",
  summary: "One or two sentence project description.",
  role: ["Director", "Editor"],
  experience: ["What happened / what you did."],
  learned: ["What you learned."],
  gained: ["What you gained from the project."],
  tags: ["Narrative", "Emotion-led"],
  focus: ["Tone", "Performance"],
  media: "Trailer, stills, BTS, director notes can live here.",
  mediaType: "posterOnly"
}
```

### Film project tips

For Film projects, fill out:

- `focus`
- `role`
- `experience`
- `learned`
- `gained`
- `tags`

The Film page uses these fields to make each project feel like a narrative slate.

### Commercial project tips

For Commercial projects, also fill out:

- `client`
- `clientFocus`
- `deliverables`

The Commercial page uses these fields to make each project feel more like a client-facing case study.

## 5. Add real video embeds

For Vimeo, use the player URL:

```ts
mediaType: "embed",
embedUrl: "https://player.vimeo.com/video/YOUR_VIDEO_ID"
```

For YouTube, use the embed URL:

```ts
mediaType: "embed",
embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

## 6. Change the visual atmosphere

Use `components/PageShell.tsx` for page-level atmosphere:

- home background gradient
- film background gradient
- commercial background gradient
- film vignette layers
- commercial guide lines
- mouse-reactive light strength

Use `components/NeuralField.tsx` for particle behavior:

- palette colors
- node count formula
- link distance
- mouse repulsion
- glow intensity

## 7. Check before deploying

Run:

```bash
npm run lint
npm run build
```

If both pass, the project is ready for Vercel.
