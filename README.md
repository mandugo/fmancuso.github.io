# Personal Academic Website

A static, bilingual (English / Italian) academic site built with [Astro](https://astro.build). It includes a CV, publications (from BibTeX), blog, dark/light mode, and print-friendly CV with PDF export.

## Features

- **Languages:** English (default at `/`) and Italian (under `/it`)
- **Pages:** Home, CV, Publications, Blog (with tag filtering)
- **Publications:** Loaded from `src/data/publications.bib` at build time, with year and type filters
- **Blog:** Astro Content Collections; posts in `src/content/blog/en/` and `src/content/blog/it/`
- **Theme:** Dark/light toggle with `localStorage` persistence
- **SEO:** Canonical URLs, hreflang, OpenGraph, Twitter card, RSS per language, sitemap
- **Print:** CV has dedicated print styles and a “Print / Save PDF” button

## Prerequisites

- Node.js 18+
- npm

## Commands

| Command        | Action                                      |
|----------------|---------------------------------------------|
| `npm install`  | Install dependencies                        |
| `npm run dev`  | Start dev server at `http://localhost:4321` |
| `npm run build`| Build static site to `dist/`               |
| `npm run preview` | Preview the production build locally     |

## Where to edit content

| What to change           | File / folder                               |
|--------------------------|---------------------------------------------|
| Name, tagline, socials   | `src/data/site.ts`                          |
| CV (both languages)      | `src/data/cv.ts`                            |
| Publications             | `src/data/publications.bib`                 |
| Blog posts (EN)          | `src/content/blog/en/*.md`                  |
| Blog posts (IT)          | `src/content/blog/it/*.md`                  |
| Production site URL      | `astro.config.mjs` → `site`                 |

## Project structure

```
src/
  components/     # Layout and UI (header, footer, pages, etc.)
  content/blog/  # Markdown posts (en/, it/)
  data/          # site.ts, cv.ts, publications.bib
  layouts/       # BaseLayout
  pages/         # Routes (/, /it, /cv, /publications, /blog, …)
  styles/        # global.css
  utils/         # i18n, posts, bibtex
```

## Deploy

The site is static. Build with `npm run build` and deploy the `dist/` folder to any static host (e.g. Netlify, Vercel, Cloudflare Pages). Set the `site` URL in `astro.config.mjs` to your production domain before deploying.

## License

Private / personal use.
