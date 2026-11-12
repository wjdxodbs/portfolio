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

Shared components live in `src/components/` (layout, ui, common, icons).

### Server vs Client Components

- Default to **React Server Components**. Add `"use client"` only for components with event handlers or hooks.
- When a section needs interactivity, split it: keep the outer section as a Server Component and extract only the interactive part into a separate Client Component (e.g., `Hero.tsx` stays server, `HeroStats.tsx` is a `"use client"` component for the counter animation).
- All interactive components (modals, cards with toggle, copy buttons, typewriter) are client components.
- Heavy client-only components (e.g., `ProjectModal`) use `next/dynamic` with `ssr: false` to exclude them from the initial bundle.

### Styling

- **CSS Modules only** — one `.module.css` per component.
- CSS class names use **camelCase** (e.g., `.skillCard`) for dot-notation access (`styles.skillCard`).
- Design tokens (colors, spacing, etc.) are defined as CSS variables in `globals.css`. Use `var(--token-name)` whenever a token exists — never re-type a value that is already tokenized.
- A value used in exactly one place is **not** a token. Write it inline at the use site. `globals.css` holds values shared across components or whose meaning is global (z-index order, radius/transition scales); a component-specific one-off (`--close-btn-bg-hover`) belongs in that component's `.module.css`, not in `:root`. The rule bans magic numbers, not local values.
- Badge/chip padding uses `--badge-padding-sm` (3px 8px) or `--badge-padding-md` (4px 10px). Pick the appropriate size — don't hardcode.
- **Accent & no-neon policy**: the accent is amber `var(--accent)` (`#d9a55b`) on a neutral near-black background (`#0e0e0f`). Use the accent as **fill and line** (button backgrounds, rules, focus rings, text emphasis) — never as a glow. Do **not** add new glow effects (zero-offset colored `box-shadow`/`text-shadow` halos, accent `radial-gradient` light pools); they read as AI-template neon. Glows have been removed from the codebase. Responsiveness comes from motion (lift, border-color change, underline draw), not light. The one sanctioned attention motion is the Hero "취업 준비 중" status dot: an expanding 1.5px ring (transform/opacity only — no blur, no shadow), disabled under `prefers-reduced-motion`. When a translucent accent or background tint is needed, derive it with `color-mix(in srgb, var(--accent) N%, transparent)` instead of hardcoding rgba.
- Accordion/expand animations use `grid-template-rows: 0fr → 1fr` pattern (not `max-height`).

#### Responsive: `@media` 우선

- **Breakpoints**: only `640 / 768 / 1024` with `max-width` (mobile breaks down from desktop base). No new breakpoints.
- **Default approach**: use `@media` breakpoints for responsive values (font-size, padding, gap). Discrete step changes match industry standard and align with designer-spec workflows.
- **Body text rule**: do not shrink body/clickable text (`~14-16px`) on mobile — only large display/heading text needs to shrink. Touch targets must stay ≥ 44px.
- **Fluid `clamp()` token**: `--section-padding` is the only `clamp()` token left in `globals.css`; it is retained for section-level spacing where fluid scaling is intentional. Do **not** introduce new `clamp()` values in components — use `@media` instead (headings use discrete size steps).
- **Discrete layout changes** (grid columns, flex-basis 100%, flex direction, show/hide, hover-capability) use `@media`. A non-standard breakpoint (e.g., 480px) is allowed **only** when the change is genuinely discrete and the standard 640px branch would degrade UX — current examples: `Skills.module.css`, `ProjectModalInfoGrid.module.css`, and `ProjectModalSection.module.css` each keep a 480px branch for grid/flex layout changes.
- **Container size limit** (e.g., modal width) uses `min(100vw - n, max)`. ProjectModal demonstrates the canonical pattern: `width: 100%; max-width: 960px;` on the modal lets the overlay's `padding: clamp(...)` handle the breathing room automatically.
- **No `html` font-size scaling**: the root font-size is not adjusted via `@media`. `rem` values are stable across viewports, and component-level fonts use `@media` for responsive adjustment.

#### Floating Navigation Bar

The header uses a floating pill-shaped nav bar:

```css
position: fixed;
top: 16px;
border-radius: 9999px;
backdrop-filter: blur(20px);
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(255, 255, 255, 0.1);
```

- `max-width: var(--container-width)` with `margin: 0 24px` (not centered with `auto` — uses left/right margin)
- Mobile (768px): `top: 12px`, `margin: 0 12px`, `height: 44px`
- The header wrapper uses `pointer-events: none` with `pointer-events: auto` on the nav to allow clicking through the transparent area

#### Section Padding

`--section-padding` uses `clamp(60px, calc(10.42vw - 6.67px), 100px)` for responsive spacing — no media query override needed.

#### Glassmorphism Card Pattern

Cards use a consistent glassmorphism treatment:

```css
background: var(--glass-card-bg);
backdrop-filter: blur(12px);
border: 1px solid var(--border-subtle);
box-shadow: var(--glass-highlight); /* inset 0 1px 0 rgba(255,255,255,0.05) */
```

On hover, respond with motion and line (lift, `--accent-border-hover` border), not an accent glow — see the no-neon policy above. The `var(--glass-highlight)` token simulates a glass surface top-edge reflection.

#### Section Background Pattern

Home page sections are separated by color, not by a divider line or a glow. Rhythm comes from alternating section backgrounds: Hero and Experience sit on `--background`, Skills on `--background-alt` (one subtle step lighter). Boundaries are blended, not hard: each section's top `--section-blend` (160px) fades from the previous section's color into its own via the `--section-fade-alt` / `--section-fade-base` tokens (use `--section-fade-alt` for an alt section, `--section-fade-base` for a base section; no `border-top`). A new home section continues the alternation and uses the matching token.

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

When a JS timer and a CSS animation must share the same duration, sync them via an existing transition token — don't hardcode the value in both places:

- `TOAST_DURATION = 2000` (ms) ↔ `var(--transition-loop)` = 2s
- `MODAL_CLOSE_DURATION = 300` (ms) ↔ `var(--transition-normal)` = 0.3s

If no existing token matches, add a named variable to `globals.css` and reference it in both the CSS and the JS constant's comment.

### Component Patterns

- **`CtaButton`** requires an `as` prop (polymorphic) — renders as any element or component. `as` is mandatory (no default element) so a CTA never silently renders as a non-interactive `<div>`. Use `as="a"`, `as="button"`, or `as={Link}` for Next.js navigation. **Never wrap `<CtaButton>` in a `<button>`, `<a>`, or `<Link>` tag** — `Link` renders as `<a>`, which is the same violation.
- **`SectionHeader`** accepts an `as` prop to control the heading level (`as="h1"` on page-level sections).
- **`AnimateOnScroll`** (`src/components/common/AnimateOnScroll.tsx`) — `"use client"` wrapper that triggers `fadeUp` transition when the element enters the viewport via `IntersectionObserver`. Accepts `className` and `delay` (ms) props for stagger effects. Use in Server Components to add scroll-triggered animations without converting them to client components.
- **`ProjectThumbnail`** renders the modal thumbnail (fixed height, rounded top). It takes `project` and `sizes` only. The project card grid draws its own thumbnail inline (`ProjectCardGrid`), so this component is intentionally modal-scoped — do not re-add a `variant` prop for a second consumer that doesn't exist.
- Icons use **lucide-react**. Import named exports directly: `import { Mail, X } from "lucide-react"`. Always pass `size` and `aria-hidden="true"` props (e.g., `<Mail size={16} aria-hidden="true" />`). Do not create custom SVG icon components or inline SVGs.
- **`SectionDots`** (`src/app/_components/SectionDots.tsx`) — `"use client"` fixed-position dot navigation on the right side of the home page. Uses `IntersectionObserver` to track active section and anchor links (`<a href="#section">`) for navigation. Hidden on mobile (768px). Only rendered on the home page, not on Projects/Contact.
- Static data (projects, skills, experience) lives in `_constants/` and is imported directly — no props drilling.
- Shared UI strings (labels, button text) live in `src/app/_constants/labels.ts`.
- Data consumed by more than one page is promoted out of the page folder into `src/app/_constants/` + `src/app/_types/` — `contact.ts` still lives there from when the home `About` section also rendered the email; today only the Contact page uses it. Never re-type a contact value inline.

### Scroll Behavior

- `html` has `scroll-behavior: smooth` in `globals.css` for smooth anchor navigation.
- `layout.tsx` has `data-scroll-behavior="smooth"` on `<html>` — this is a Next.js 16 attribute that temporarily sets `scroll-behavior: auto` during page navigation to prevent smooth scroll-to-top on route changes, then restores smooth. **Do not remove** — without it, navigating from a scrolled page causes a visible smooth scroll to top before the new page loads.
- All sections have `scroll-margin-top: var(--header-height)` via `section[id]` selector in `globals.css` to account for the fixed floating nav.

### Skills Grid

- Uses `display: grid; grid-template-columns: repeat(3, 1fr); align-items: stretch` for consistent row heights.
- `SkillCard` has `height: 100%` to fill the grid cell completely.
- Each `Skill` carries its own `category` field (a `SkillCategory` union derived from `SKILL_CATEGORIES` in `_types/skill.ts`). `Skills.tsx` renders by iterating `SKILL_CATEGORIES` (which also fixes category display order) and filtering skills by `s.category` — no separate name-list mapping.

### Modal Pattern

`ProjectModal` is the reference implementation for accessible modals:

1. Loaded via `next/dynamic` with `ssr: false` (excludes from initial bundle).
2. Rendered via `createPortal` into `document.body`.
3. **Structure**: `.modal` uses `display: flex; flex-direction: column`. The close button sits at `position: absolute` inside `.modal`, and `.scrollArea` (`flex: 1; overflow-y: auto`) wraps the thumbnail + body so the button stays visible while content scrolls.
4. **Focus trap**: `useFocusTrap({ isActive, containerRef, initialFocusRef, onEscape })` — traps Tab/Shift+Tab within the container and calls `onEscape` on Escape key. The hook stores `onEscape` in a `useRef` internally to avoid stale closure; do **not** add it to the effect's dependency array.
5. **Focus restore**: the opener element (`triggerElement`) is stored in parent state. On close, call `triggerElement?.focus()` before clearing state so keyboard users return to where they were.
6. **Exit animation**: `isClosing` state drives CSS exit classes on both the **overlay** (`.overlayClosing` → `fadeOut`) and the **modal** (`.modalClosing` → `scale + fadeOut`). A `setTimeout` matching `MODAL_CLOSE_DURATION` (synced with `var(--transition-normal)`) delays the actual unmount.

### WAI-ARIA Patterns

- **Accordion** (`SkillCard`): toggle button has `aria-expanded={isOpen}` and a descriptive `aria-label`.
- **Dialog** (`ProjectModal`): the modal content div carries `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` pointing to the visible `<h2 id="modal-title">` inside the modal. Do **not** put `role="dialog"` on the backdrop/overlay div.

### Metadata

Each page declares its own `export const metadata: Metadata` inline with `title`, `description`, `alternates.canonical`, and `openGraph` fields. The root layout (`layout.tsx`) owns the site-wide `metadataBase` and default metadata. The site origin comes from a single `SITE_URL` export in `src/app/_constants/site.ts` — import it, never re-declare `process.env.NEXT_PUBLIC_SITE_URL` locally.

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
- External image domains allowed: `cdn.jsdelivr.net` (configured in `next.config.ts`).
- SEO: `sitemap.ts` and `robots.ts` auto-generate at build time.
