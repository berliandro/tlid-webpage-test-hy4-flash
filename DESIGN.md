---
name: Team Liquid ID — editorial lookbook
description: An independent editorial destination for Team Liquid's Indonesian MLBB squad
colors:
  canvas: "#F6F2E8"
  ink: "#0A1F4A"
  paper: "#FFFBF2"
  gold: "#F0A626"
  gold-light: "#F7C95E"
  gold-ink: "#8A4B00"
  cobalt: "#1F6FB2"
  slate: "#5B6B8C"
  canvas-dark: "#001538"
  ink-dark: "#F4EAD7"
  paper-dark: "#0A1F4A"
  on-dark: "#E6E2D6"
  on-dark-muted: "#C9D6E8"
typography:
  display:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(58px, 7.6vw, 96px)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(34px, 4vw, 52px)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.3
  meta:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
spacing:
  tap: "44px"
  measure: "36rem"
components:
  primary-action:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "0px"
    padding: "15px 22px"
  source-note:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "0px"
    padding: "8px 0"
  pulse-panel:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    rounded: "0px"
    padding: "clamp(24px, 3vw, 38px)"
---

## Overview

The site is one coherent editorial world: warm paper canvas, deep navy structural islands, gold reserved for actions and active states, cobalt for links, and Gloock/Manrope typography. The same tokens apply on every route; route classes only change composition, never the palette or type system.

## Colors

Canvas `#F6F2E8` owns large regions. Ink `#0A1F4A` carries text and contained panels. Gold `#F0A626` is the action/active accent; `#8A4B00` is its accessible small-text form on paper. Cobalt `#1F6FB2` carries links. Slate `#5B6B8C` carries metadata. A `prefers-color-scheme: dark` variant remaps the same palette without introducing new hues.

## Typography

Role tokens: `--type-display`, `--type-headline`, `--type-title`, `--type-body`, `--type-label`, `--type-meta`, with matching `--fs-*` steps. Body is 16px/1.55 with a 36rem measure. All numeric data uses tabular figures. `font-synthesis: none`; only authored weights are used.

## Layout

A 12-column mental grid with one spacing scale. Reading path is left-aligned and top-to-bottom: masthead, pulse panel, player band, record, gate index. No element is centred except marks physically on a paper plate. Touch targets are at least 44px on coarse pointers via `--tap`.

## Elevation & Depth

Depth comes from paper tone and 1px rules. Shadows are neutral, offset and soft; no glow, blur or animation of shadow.

## Shapes

Square corners throughout. The recurring material details are the drafted paper texture, a stitched dashed line, and the gold lace edge. No rounded cards, glassmorphism or HUD ornament.

## Components

`primary-action` is gold on ink, 15×22px padding, square. `source-note` is a disclosure with publisher, URL, retrieval date and confidence. `pulse-panel` is an ink island with cream text and a gold kicker. `glossary` defines KDA, MVP, MPL ID, S18 and MLBB.

## Do's and Don's

Do attribute every competitive fact, keep unknown states explicit, preserve the source ledger, and keep motion limited to one authored transform/opacity moment. Don't fabricate statistics, reuse another project's palette or motifs, use colour alone for meaning, shrink functional text below 11px, or start a local server for this project.
