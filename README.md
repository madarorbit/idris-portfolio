# Idris Arif — Personal Product Portfolio

The personal product portfolio for **Idris Arif**: founder, builder, and software/AI product maker.

The site is intentionally organised around shipped products and product thinking rather than a list of self-rated technologies. It is bilingual, with Arabic as the default language:

- `/ar` — Arabic, RTL
- `/en` — English, LTR
- `/ar/work/madar` and `/en/work/madar` — MADAR case study
- `/ar/work/ahd` and `/en/work/ahd` — AHD / عَهد case study

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS 4, and a small layer of project-specific CSS for the editorial visual system.

There is no database, authentication, CMS, contact backend, or external runtime dependency. Direct phone and WhatsApp links are used for contact.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The root redirects to `/ar`.

Useful checks:

```bash
npm run lint
npm run typecheck
npm run build
```

Set `NEXT_PUBLIC_SITE_URL` in the deployment environment so canonical URLs, sitemap, robots, and social metadata use the final production URL. The site falls back to `http://localhost:3000` during local development.

## Project structure

```text
src/app/                 Routes, metadata, sitemap, and robots
src/components/          Shared site and project components
src/content/projects.ts  Typed project model and bilingual case-study content
src/content/site.ts      Shared copy and contact links
src/lib/i18n.ts          Locale helpers
public/portraits/        Approved personal portrait assets
public/projects/         Selected project assets from the source repositories
public/og/               Static social preview compositions
```

## Adding a project

1. Add one typed object to `src/content/projects.ts` with Arabic and English copy.
2. Add the project slug to the source repository only when the work is real and ready to show.
3. Add selected, optimised images under `public/projects/<slug>/`.
4. Add public links only. Do not add private repository URLs, credentials, customer data, or internal operational details.

The Work index, project route, related-work link, sitemap, and metadata are driven from the typed project collection. A new case study does not need a new page component.

## Updating content and links

- Site navigation and shared copy live in `src/content/site.ts`.
- Project stories and links live in `src/content/projects.ts`.
- Phone, WhatsApp, Instagram, and GitHub are defined once in `src/content/site.ts`.
- Replace portrait images only with approved personal photos; preserve their natural texture and identity.

## Deployment

The project is ready for a standard Vercel deployment from `main`. Configure `NEXT_PUBLIC_SITE_URL` to the actual production URL after the Vercel project is created or connected. No secrets are required for this static portfolio.
