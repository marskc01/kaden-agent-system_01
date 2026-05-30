# Deployment Guide

This site is ready to deploy on Vercel as a standard Next.js project.

## Option A: Deploy from GitHub

1. Push the repo to GitHub.
2. Open Vercel and choose **Add New Project**.
3. Import the GitHub repo.
4. Confirm these settings:
   - Framework Preset: **Next.js**
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Node.js Version: `20.x`
5. Click **Deploy**.

The included `vercel.json` already declares the framework and build commands.

## Option B: Deploy with the Vercel CLI

From the repo root:

```bash
npm install
npx vercel
```

For a production deployment:

```bash
npm run deploy
```

The first `vercel` command links the local repo to a Vercel project. After that, `npm run deploy` publishes production builds.

## Before every deployment

Run:

```bash
npm run lint
npm run build
```

## Recommended post-deploy setup

- Add a custom domain in the Vercel dashboard.
- Replace placeholder project media with real Vimeo/YouTube embeds.
- Update metadata in `lib/site.ts`.
- Set `NEXT_PUBLIC_SITE_URL` in Vercel if you add analytics, canonical URLs, or social preview generation later.
