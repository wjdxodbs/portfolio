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
- Error boundaries: `error.tsx` (route-level, no `<html><body>`) and `global-error.tsx` (root-level, must include `<html><body>` and import `./globals.css` explicitly since the root layout is bypassed).

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
Shared components live in `src/components/` (layout, ui, common, icons).

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

#### CSS Keyframe Rule — Critical
CSS Modules scope `@keyframes` names locally. A CSS Module **cannot** reliably reference keyframes defined in `globals.css`. Any `@keyframes` used within a `.module.css` file must be **defined in that same file**. `globals.css` may also define them for reference, but each module needs its own copy.

```css
/* ✅ Correct — keyframe defined locally in the same module */
@keyframes fadeInUp { ... }
.visual { animation: fadeInUp 0.8s ease forwards; }

/* ❌ Wrong — .visual will stay invisible if fadeInUp is only in globals.css */
.visual { animation: fadeInUp 0.8s ease 0.2s forwards; opacity: 0; }
```
This is especially dangerous when `opacity: 0` is set explicitly — without the animation running, the element is permanently invisible.

#### JS/CSS Duration Sync
When a JS timer and a CSS animation must share the same duration (e.g., toast, modal close), both are declared in `globals.css` as variables with a comment referencing the JS constant, and in the JS file with a comment referencing the CSS variable:
```css
/* globals.css */
--toast-duration: 2s;        /* useCopyToClipboard: TOAST_DURATION = 2000 */
--modal-close-duration: 0.3s; /* ProjectModal: MODAL_CLOSE_DURATION = 300 */
```

### Component Patterns
- **`CtaButton`** supports an `as` prop (polymorphic) — renders as any element or component. Use `as="a"`, `as="button"`, or `as={Link}` for Next.js navigation. **Never wrap `<CtaButton>` in a `<button>`, `<a>`, or `<Link>` tag** — `Link` renders as `<a>`, which is the same violation.
- **`SectionHeader`** accepts an `as` prop to control the heading level (`as="h1"` on page-level sections).
- **`ProjectThumbnail`** is the shared thumbnail component used by both `ProjectCard` and `ProjectModal`. Pass `variant="card"` (16:9 aspect ratio, hover scale) or `variant="modal"` (fixed height, rounded). Overlay badges/CTAs go in `children`.
- Icons use **lucide-react**. Import named exports directly: `import { Mail, X } from "lucide-react"`. Always pass `size` and `aria-hidden="true"` props (e.g., `<Mail size={16} aria-hidden="true" />`). Do not create custom SVG icon components or inline SVGs.
- Static data (projects, skills, experience) lives in `_constants/` and is imported directly — no props drilling.
- Shared UI strings (labels, button text) live in `src/app/_constants/labels.ts`.

### Modal Pattern
`ProjectModal` is the reference implementation for accessible modals:
1. Loaded via `next/dynamic` with `ssr: false` (excludes from initial bundle).
2. Rendered via `createPortal` into `document.body`.
3. **Focus trap**: `useFocusTrap({ isActive, containerRef, initialFocusRef, onEscape })` — traps Tab/Shift+Tab within the container and calls `onEscape` on Escape key. The hook stores `onEscape` in a `useRef` internally to avoid stale closure; do **not** add it to the effect's dependency array.
4. **Focus restore**: the opener element (`triggerElement`) is stored in parent state. On close, call `triggerElement?.focus()` before clearing state so keyboard users return to where they were.
5. **Exit animation**: `isClosing` state drives a CSS exit class. A `setTimeout` matching `MODAL_CLOSE_DURATION` (synced with `--modal-close-duration` in `globals.css`) delays the actual unmount.

### WAI-ARIA Patterns
- **Tabs** (`ExperienceTabs` / `ExperienceInteractive`): tabs container has `role="tablist"`, each tab button has `role="tab"`, `aria-selected`, and `aria-controls="experience-panel-{id}"`. The panel has `id="experience-panel-{id}"` and `role="tabpanel"`.
- **Accordion** (`SkillCard`): toggle button has `aria-expanded={isOpen}` and a descriptive `aria-label`.
- **Dialog** (`ProjectModal`): the modal content div carries `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` pointing to the visible `<h2 id="modal-title">` inside the modal. Do **not** put `role="dialog"` on the backdrop/overlay div.

### Metadata
Use `createPageMetadata(title, description, path)` from `src/app/_utils/metadata.ts` for all page-level metadata exports. It handles `alternates.canonical` and `openGraph` automatically. The root layout (`layout.tsx`) owns the site-wide `metadataBase` and default metadata.

### Performance Memoization — Do Not Overuse
Do **not** reach for `React.memo`, `useCallback`, or `useMemo` by default. Only add them when a real performance problem has been observed and measured.
- **Skip them for**: simple prop passing, lightweight renders, static data display — which covers nearly everything in this portfolio.
- **Acceptable when**: a genuinely expensive computation (filtering, sorting large lists) needs caching, or a callback passed to a `memo`-wrapped child is causing measurable unnecessary re-renders.
- Reflexively wrapping every function in `useCallback` and every value in `useMemo` hurts readability and adds memoization overhead without benefit.

### TypeScript Conventions
- No `any`. Use proper types.
- `interface` for props and data shapes.
- `import type` for type-only imports.
- Use absolute imports via `@/` alias (e.g., `@/components/Header`).
- Derive union types from constant objects with `keyof typeof` (e.g., `TechName` from `TECH_ICONS`).

### Next.js Specifics
- **Async APIs**: `params`, `searchParams`, `cookies()` must be awaited (Next.js 15+ requirement).
- Images: use `next/image` with explicit `width`/`height` or `fill`.
- Navigation: use `next/link` for all internal links — via `CtaButton as={Link}`, not wrapping.
- External image domains allowed: `cdn.jsdelivr.net`, `raw.githubusercontent.com` (configured in `next.config.ts`).
- SEO: `sitemap.ts` and `robots.ts` auto-generate at build time.
