# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture

### Routing & Layout
- **App Router** with a `(withHeader)` route group — pages inside inherit the header layout automatically. Pages outside (e.g., `not-found.tsx`) render without the header.
- Pages: `/` (Home), `/projects`, `/contact`

### File Colocation Pattern
Each page owns its dependencies inside its folder:
```
app/(withHeader)/projects/
  ├── page.tsx
  ├── _components/   ← page-specific components
  ├── _hooks/        ← page-specific hooks
  ├── _types/        ← page-specific types
  ├── _constants/    ← static data
  └── _utils/        ← helper functions
```
Shared components live in `src/components/` (layout, ui, common).

### Server vs Client Components
- Default to **React Server Components**. Add `"use client"` only for components with event handlers or hooks.
- When a section needs interactivity, split it: keep the outer section as a Server Component and extract only the interactive part into a `*Interactive.tsx` Client Component (e.g., `Experience.tsx` → `ExperienceInteractive.tsx`).
- All interactive components (modals, cards with toggle, copy buttons, typewriter) are client components.
- Heavy client-only components (e.g., `ProjectModal`) use `next/dynamic` with `ssr: false` to exclude them from the initial bundle.

### Styling
- **CSS Modules only** — one `.module.css` per component.
- CSS class names use **camelCase** (e.g., `.skillCard`) for dot-notation access (`styles.skillCard`).
- Design tokens (colors, spacing, etc.) are defined as CSS variables in `globals.css`. Always use `var(--token-name)` instead of hardcoded values.
- Accordion/expand animations use `grid-template-rows: 0fr → 1fr` pattern (not `max-height`).

### Component Patterns
- **`CtaButton`** supports an `as` prop (polymorphic) — use `as="a"` or `as="button"` to avoid nesting interactive elements. Never wrap `<CtaButton>` in a `<button>` or `<a>` tag.
- **`SectionHeader`** accepts an `as` prop to control the heading level (`as="h1"` on page-level sections).
- Static data (projects, skills, experience) lives in `_constants/` and is imported directly — no props drilling.

### TypeScript Conventions
- No `any`. Use proper types.
- `interface` for props and data shapes.
- `import type` for type-only imports.
- Use absolute imports via `@/` alias (e.g., `@/components/Header`).

### Next.js Specifics
- **Async APIs**: `params`, `searchParams`, `cookies()` must be awaited (Next.js 15+ requirement).
- Images: use `next/image` with explicit `width`/`height` or `fill`.
- Navigation: use `next/link` for all internal links.
- External image domains allowed: `cdn.jsdelivr.net`, `raw.githubusercontent.com` (configured in `next.config.ts`).
- SEO: `sitemap.ts` and `robots.ts` auto-generate at build time.
