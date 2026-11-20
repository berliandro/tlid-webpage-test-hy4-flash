---
name: Team Liquid ID — Reference System
description: Full-bleed charcoal canvas, one-pixel perspective grid, compact pills, oversized geometric sans, and a fan of vivid character cards. One system on every route.
colors:
  noscript-ink: "#001538"
  noscript-paper: "#EEEEEE"
  panel: "#0F0F11"
  panel-2: "#15151A"
  pill: "#27262E"
  text: "#F6F6F8"
  muted: "#8C8C96"
  gold: "#F5C542"
  cyan: "#3BB0D4"
  blue: "#2F6BFF"
  purple: "#8B55F3"
  red: "#F95264"
  green: "#05E0CC"
  grid-line: "rgba(255,255,255,.055)"
  hairline: "rgba(255,255,255,.09)"
typography:
  display: "Manrope 800, -0.04em tracking, 1.03 leading"
  body: "Manrope 400, 16px / 1.6"
  data: "IBM Plex Mono 400/600, uppercase micro-labels"
spacing:
  grid-step: "44px at 1440, 22px at reference 736"
  panel-radius: "28px"
  card-radius: "22px"
  pill-radius: "999px"
  tap: "44px"
---

## Overview

The visual language is taken from the supplied reference: a charcoal site background with a large inset near-black panel, a faint one-pixel perspective grid behind all content, compact pill controls, a tiny centred status badge, oversized centred geometric type, and a bottom fan of vivid character cards. Layout and information architecture are adapted freely to Team Liquid ID; the visual language is not.

## Colour

Measured from the reference's website surface: panel `#0F0F11`, secondary panel `#15151A`, pill `#27262E`, text `#F6F6F8`, muted `#8C8C96`, badge gold `#F5C542`. The grey frame in the supplied preview is Pinterest presentation only and is not part of this design. Card accents are sampled from the reference's vivid set: purple `#8B55F3`, red `#F95264`, cyan `#3BB0D4`, green `#05E0CC`, blue `#2F6BFF`. Grid lines are `rgba(255,255,255,.055)`; hairlines are `rgba(255,255,255,.09)`.

## Grid and construction

The grid is a 1px repeating linear-gradient pair at a 44px step, transformed with `perspective(820px) rotateX(15deg) scale(1.16)` and masked so it fades at the top and bottom. The site runs full-bleed with no outer frame or inset; cards use a 22px radius and all controls are pills. Thin separators appear above and below every major section.

## Type

Manrope variable handles everything: 800 with `-0.04em` tracking for display, 400 at 16px/1.6 for reading. IBM Plex Mono carries micro-labels, badges and data. No serif, no script, no condensed display face.

## Components

- `pill` — compact 30px control, 999px radius, 1px hairline, active state filled white.
- `search-pill` — inline search with subtle placeholder and key hint.
- `status-pill` — gold dot plus short verified label.
- `fan-card` — vivid gradient card, 22px top radius, name and role top-left, index badge top-right, rotated and overlapping; centre card raised.
- `tile` — compact panel tile with a 34px accent rule; vivid variants use the card palette.
- `source-note` — disclosure with a mono `+` marker.

## Motion

No entrance animation is used. Only hover lifts on cards and a 420ms width transition on data bars. `prefers-reduced-motion` removes those transitions; all content is present without motion.

## Do's and Don'ts

Do keep the grid, pills, panel inset and card fan on every route. Do use the real sourced portraits. Don't add grain, glow, glass, gradients behind the grid, serif display type, tiny identity icons, vintage treatments or template esports chrome.
