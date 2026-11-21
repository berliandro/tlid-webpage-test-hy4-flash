---
name: Team Liquid ID — Reference System
description: Full-bleed charcoal canvas, a two-layer thin grid crossing both edges, pill controls, oversized geometric type, and a fan of 3:4 player cards. One system on every route.
colors:
  panel: "#0F0F11"
  panel-2: "#15151A"
  pill: "#27262E"
  text: "#F6F6F8"
  muted: "#A8A8B2"
  muted-deep: "#8C8C96"
  gold: "#F5C542"
  cyan: "#3BB0D4"
  blue: "#2F6BFF"
  purple: "#8B55F3"
  red: "#F95264"
  green: "#05E0CC"
  grid-line: "rgba(255,255,255,.038)"
  grid-line-mobile: "rgba(255,255,255,.06)"
  hairline: "rgba(255,255,255,.09)"
  shade-25: "rgba(0,0,0,.25)"
  shade-35: "rgba(0,0,0,.35)"
  shade-50: "rgba(0,0,0,.5)"
  noscript-ink: "#001538"
  noscript-paper: "#EEEEEE"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontWeight: 800
    fontSize: "clamp(2.2rem,5vw,4.6rem)"
    lineHeight: 1.03
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontWeight: 400
    fontSize: "16px"
    lineHeight: 1.6
  label:
    fontFamily: "'IBM Plex Mono', monospace"
    fontWeight: 400
    fontSize: "12px"
    letterSpacing: "0.1em"
rounded:
  panel: "28px"
  card: "22px"
  pill: "999px"
spacing:
  s-2: "12px"
  s-3: "16px"
  s-4: "24px"
  s-5: "32px"
  s-6: "48px"
  gutter: "clamp(20px,5vw,72px)"
  block-gap: "clamp(16px,2vw,28px)"
  page-y: "clamp(36px,5vw,72px)"
  section-y: "clamp(40px,6vw,88px)"
  shell-max: "1440px"
  grid-step: "32px"
  card-ratio: "3/4"
  tap: "44px"
---

# Design System: Team Liquid ID

## Overview

**Creative North Star: "The Evidence Fan"**

An independent, unofficial destination where a team's identity is built from real people, real numbers and visible provenance. The visual language comes from the supplied reference's website surface — never its grey showcase frame: a full-bleed charcoal canvas, a faint one-pixel perspective grid crossing both edges, compact pills, a centred crest, oversized geometric type and a bottom fan of vivid 3:4 portrait cards. The same grid, pills, separators and type scale appear on all ten routes, including the not-found page.

The identity is carried as much by content discipline as by styling: unknowns stay blank, real and synthetic portraits are distinguished, conflicts are shown rather than smoothed over, and every factual block carries a source disclosure. Colour is used as punctuation on a neutral field; nothing glows, floats in glass, or imitates a gaming dashboard.

**Key Characteristics:**
- Two full-width grid layers, perspective-transformed and masked to read at both edges while receding behind content.
- Five-star fan of 3:4 cards with per-player matte, raised centre card and hover/focus hooks.
- One centred TLID crest in the top bar; the deliberate top-centre focal point on every route.
- Restrained pill vocabulary: transparent at rest, white fill with dark ink only when active.
- Data honesty made visible: source notes, conflict blocks, explicit unknown states.

### Motion

Motion is CSS-driven and transform/opacity-only. It is **quiet, interruptible and stateful**, never decorative:

- **Entrance (the single approved reveal pattern):** `[data-reveal]` elements start at `opacity:0` with an 18px translateY and transition to rest over 520ms with an exponential-style ease-out. A single `IntersectionObserver` (root margin `-6%`, threshold 0.08) adds `.is-in` and immediately unobserves each element. Stagger uses `--reveal-i` at 45ms per sibling, capped at six steps (270ms) so long lists never crawl.
- **Navigation:** `main` receives a 300ms `page-enter` fade/rise on each route render.
- **Hover and focus:** controls lift 2px, cards lift 4px with a 1.06 portrait zoom, tile accent rules grow from 34px to 52px. Distances stay small.
- **Idle:** a status-coin ring pulse (2.8s), a 2px mark float (5.5s), and a homepage hero-coin breathe (3.4s). These are the only continuous animations.
- **Recovery:** `prefers-reduced-motion: reduce` removes every animation and transition and disables reveal attributes; `visibilitychange` pauses ambient motion on hidden tabs; print styles force all reveals visible; the app is fully functional without `IntersectionObserver`.

## Colors

The palette is a neutral charcoal field with a small, stable set of accents. Accents are rare and semantic, never atmospheric.

### Primary
- **Gold** (`gold`): provenance, status dot, unknown-value underlines and the season moment's short rule. Its rarity is the point.

### Secondary
- **Cyan** (`cyan`): data, links, focus rings, timeline markers and the "?" first-use help affordance.
- **Per-player matte** (`purple`, `red`, `green`, `blue`, and a cyan-adjacent variant): sampled card backgrounds; each card also carries a `--card-ink` chosen for contrast, never a generic white-on-colour default.

### Neutral
- **Panel** (`panel`): canvas. **Panel 2** (`panel-2`): raised surfaces. **Pill** (`pill`): control fill.
- **Text** (`text`): primary copy. **Muted** (`muted`) / **Muted Deep** (`muted-deep`): secondary copy and metadata.
- **Hairline** (`hairline`) and **Grid Line** (`grid-line`, slightly stronger on small screens): separators and the two grid layers.

### Named Rules
**The Accent-as-Punctuation Rule.** Accents mark state, provenance or identity; they never become backgrounds for whole sections.
**The Contrast Rule.** Text on a player matte uses that card's `--card-ink`, not inherited white; dark ink on light cards, light ink on dark cards.

## Typography

**Display:** Manrope (Arial fallback). **Body:** Manrope. **Label / data:** IBM Plex Mono. No serif, script or condensed display face; webfonts are self-hosted.

### Hierarchy
- **Display** (800, `--display-size: clamp(2.6rem,5vw,4.6rem)`, 1.03, −0.04em): one shared token for the centred oversized openings on Team, Players and 404, plus player-detail names. The 2.6rem floor keeps the tier consistent on phones.
- **Chapter lead** (800, `clamp(2.2rem,4vw,3.6rem)`): left-aligned narrative openings on Discover and History.
- **Compact masthead** (800, `clamp(2.4rem,5vw,4.2rem)`): left-aligned openings on Statistics, Matches and Sources; sized at least 1.25× the section-head H2 so the route title perceptibly outranks its sections.
- **Headline** (800, ~1.15rem): section and card titles.
- **Body** (400, 16px/1.6): reading copy; measure capped near 70ch.
- **Label** (mono 400/600, 12px, uppercase tracking): kickers, data, badges, separators and metadata. Functional text never drops below 12px.

### Named Rules
**The One Voice Rule.** Body and UI copy are short, concrete and human; no marketing filler or invented claims. Both locales are resolved at runtime — English is the default, Indonesian is a full toggle.

## Layout

A full-bleed shell with a `--shell-max` of 1440px and a fluid `--gutter`; centred top-level blocks share that max width so edges align across routes. Vertical rhythm uses the documented `--page-y`, `--section-y`, `--block-gap` and fixed `--s-2`…`--s-6` steps; no arbitrary per-element margins.

The grid is two full-width repeating linear-gradient layers at `--grid-step` (32px), transformed with `perspective(820px) rotateX(15deg) scale(1.16)` from a 50%/14% origin. It is masked vertically to fade at top and bottom and horizontally so lines stay strongest at both edges and recede to about a third of their alpha behind the centre column — the reference's thin-line language without a visible wireframe.

**Route openings are deliberately varied inside one system:** centred oversized for Team/Players/404, left-aligned chapter leads for Discover/History, compact hairline-closed mastheads for the data routes. The crest stays centred in the top bar at all widths; at ≤860px it hangs just below the bar seam, never touching content.

Mobile collapses multi-column layouts to one column, keeps 44px tap targets, expands the search field to a readable width, and reorders the profile so name and role precede the portrait. Deep links are full copies of the app shell served at each known route with a static `<base>`, so there is no redirect flash.

## Elevation & Depth

Predominantly flat. Hierarchy is carried by hairlines, panel tonal steps and spacing, not by shadows. A single card shadow (`0 -8px 30px` at `shade-25`) gives the fan its soft lift; first-use help panels use a soft offset blur. Focus is conveyed by a 2px cyan outline, never a glow.

### Named Rules
**The Flat-by-Default Rule.** Surfaces are flat at rest; depth appears only for the fan cards and expanded help, never as decoration.

## Shapes

Rounded but disciplined: panels at `--radius` (28px), cards and portrait frames at `--card-radius` (22px), all controls at `--pill` (999px). Player cards hold a strict 3:4 aspect ratio with consistent cropping; the fan uses small rotations (about ±9deg) and a raised centre card. Synthetic portraits use a typographic monogram, a 34px gold rule and mono labels — an authored unknown state, not a placeholder image.

## Components

### Pills and controls
Transparent base with inherited colour so UA button styling never leaks; 1px hairline border; active state is white fill with dark ink. Hover lifts 2px. Search is a single pill with a `/` hint on desktop only; it filters site sections, announces results via a live region, and shows a visible no-results line with a Clear action.

### Navigation
Five visible header choices: Team, Players, Statistics, Matches and an **Explore** pill containing Discover and History. Children are shown with their active route in the label ("Explore: Discover"). Sources remains a single data link in the footer. A current-section label is visible on narrow widths; on desktop the active pill is the state indicator.

### Fan card and matte
3:4 portrait, `object-fit: cover`, bottom-anchored image at 84% height, name and role always visible, index badge top-right. A sourced one-line hook is revealed on hover/focus and always shown (clamped) on touch devices. Per-player `--card-bg` and `--card-ink` preserve contrast. Small WebP sources are used at ≤860px.

### Unknown state
`.portrait-synthetic`: oversized initial, 34px gold rule, "SYNTHETIC ILLUSTRATION · NO VERIFIED PORTRAIT" and "NOT A REAL PORTRAIT" in mono, plus a bilingual `aria-label`. The footer glossary remains the full reference.

### Data surfaces
Compact tiles use a 34px accent rule; the season moment is a hairline-bordered tile with a gold mono figure, not a filled panel. Source notes and disclosures are native `<details>` with a mono `+` marker. First-use opponent codes get a small `?` `<details>` chip with a verified contextual gloss and a link to the footer glossary.

### Deep-link shell
Every known route ships a full copy of the app shell with a static base, so a direct load renders immediately at HTTP 200 with no "Loading…" redirect.

## Do's and Don'ts

### Do:
- **Do** keep the two grid layers at both edges, the centred mark, the pill vocabulary and the 3:4 card ratio on every route.
- **Do** use per-card `--card-ink` and the documented reveal, hover, idle and reduced-motion rules.
- **Do** let first-use help point to the footer glossary rather than duplicating it.
- **Do** keep every route reachable in at most two header interactions and every empty state recoverable.

### Don't:
- **Don't** reproduce the grey Pinterest showcase frame, presentation margins or a new outer inset.
- **Don't** add grain, glow, glass, gradients behind the grid, serif display type, vintage treatments or generic esports chrome.
- **Don't** animate layout properties in continuous effects, or leave ambient motion running on hidden tabs.
- **Don't** invent facts, expand unverified abbreviations into guessed names, or hide conflicts and unknown values.
