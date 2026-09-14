# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Node >= 18.17.1 (see README).

```bash
npm install
npm run dev      # dev server at localhost:4321
npm run build    # static build to dist/ (also type/content-schema checks)
npm run preview  # serve the built site
```

There are no tests and no lint script. `prettier` + `prettier-plugin-tailwindcss` are dev deps but have no npm script; the codebase style is 4-space indent, single quotes, wide lines.

## What this is

`agenticrabbit.com` — Hardik's personal blog/portfolio. Astro 5 static site, derived from the "dante" Astro theme (the `package.json` name and the `prose-dante` typography variant still say "Dante"). Tailwind 3 with `@astrojs/tailwind` (`applyBaseStyles: false` — base styles live in `src/styles/global.css`).

## Architecture

**Content collections** (`src/content.config.ts`) use the glob loader and are the source of all routes:

| Collection key | Directory | Notes |
| --- | --- | --- |
| `blog` | `src/content/blog/` | `tags`, `excerpt`, `isFeatured`, `publishDate` |
| `projects` | `src/content/art/` | **Name mismatch is intentional**: the collection is `projects`, the URL space and folder are `art`. Uses `description`, not `excerpt`; no tags |
| `pages` | `src/content/pages/` | Flat pages served at `/<id>` by `src/pages/[...id].astro` |

Zod schemas strip unknown frontmatter keys, so extra fields in a markdown file (e.g. `tags` on an art entry) silently do nothing. Only `blog` supports tags.

**Routing.** Page slugs come from the markdown filename (`post-1.md` → `/blog/post-1`), so renaming a content file breaks its URL. `[...page].astro` files are paginated indexes (page size from `siteConfig.postsPerPage` / `projectsPerPage`); `[id].astro` files render single entries and compute prev/next by walking the date-sorted array. Tag pages are generated from `getAllTags` / `getPostsByTag` in `src/utils/data-utils.ts`, keyed by `slugify(tag)`.

**Site-wide content lives in `src/data/site-config.ts`**, not in components — title, nav links, footer links, social links, hero text (raw HTML string), and pagination sizes. Change copy there first.

**Layout chain:** page → `BaseLayout.astro` (html shell, hardcoded GA tag `G-591ES0J4GS`, `Nav`/`Header`/`Footer`) → `BaseHead.astro` (SEO/OG tags). Single-entry pages pass `showHeader={false}` and render their own `<h1>`.

**Theming** is CSS custom properties (`--color-text-main`, `--color-bg-main`, `--color-bg-muted`, `--color-border-main`) defined in `src/styles/global.css` for `:root` and `html.dark`, exposed to Tailwind as `text-main` / `bg-main` / `bg-muted` / `border-main` in `tailwind.config.cjs`. Dark mode is class-based, toggled by `ThemeToggle.astro`. Prose uses the custom `prose-dante` typography variant.

## Redirects — two mechanisms

- `astro.config.mjs` `redirects` for vanity paths that map to internal routes (`/kasol` → `/blog/post-1`).
- `public/_redirects` (Netlify/Cloudflare Pages format) for external targets (`/resume` → Google Drive).

Adding a blog or art post that has a short vanity URL means touching one of these too.

## Adding content

Drop a `.md` file in the right `src/content/` directory with the schema's required frontmatter (`title`, `publishDate`; `publishDate` is a loose string like `'Mar 9 2025'` coerced to a Date). `isFeatured: true` surfaces it on the homepage. Images referenced from markdown and from `seo.image.src` are absolute paths into `public/`.
