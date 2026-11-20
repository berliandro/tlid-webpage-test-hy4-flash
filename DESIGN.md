---
name: Team Liquid ID — The Liquid Ledger
description: A natural-history field ledger of a competitive horse: engraved, stamped, catalogued, and unequivocally Team Liquid ID
colors:
  ink: "#071B33"
  ink-deep: "#03101F"
  ink-deep-dark: "#01070F"
  bone: "#EDE3CC"
  bone-dark: "#F5EDD8"
  paper: "#E4D8BC"
  paper-dark: "#D9CDB0"
  brass: "#D8A93B"
  brass-dark: "#E6BC55"
  brass-deep: "#A9782A"
  oxblood: "#8E2B2B"
  cyan: "#3BB0D4"
  muted: "#9BAFC4"
  muted-dark: "#A8BCD0"
  rule: "rgba(237,227,204,.28)"
  paper-rule: "rgba(7,27,51,.24)"
  plate-shadow: "rgba(3,16,31,.55)"
  wash: "rgba(216,169,59,.08)"
typography:
  display:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(68px, 9.4vw, 150px)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(36px, 5vw, 70px)"
    fontWeight: 400
    lineHeight: 1.03
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(20px, 2.4vw, 32px)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0em"
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
  note:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0em"
spacing:
  tap: "44px"
  measure: "38rem"
components:
  primary-action:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.ink}"
    rounded: "0px"
    padding: "14px 22px"
  specimen-plate:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "0px"
    padding: "12px"
  record-panel:
    backgroundColor: "{colors.oxblood}"
    textColor: "{colors.bone}"
    rounded: "0px"
    padding: "clamp(22px, 3vw, 38px)"
  source-note:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    rounded: "0px"
    padding: "8px 0"
---

## Overview

TLID is presented as a field ledger of a competitive animal: an authored engraving of a horse, specimen plates for the six players, ruled measurement tables for the record, and stamped provenance on every claim. The world is dark petrol indigo and bone paper, never white and never neon. It is an independent concept, not an official Team Liquid site.

## Colors

Ink `#071B33` is the ground; bone `#EDE3CC` and paper `#E4D8BC` are the catalogue surfaces. Brass `#D8A93B` is the single action and rule accent; oxblood `#8E2B2B` is reserved for the record panel and status seals; EBB cyan `#3BB0D4` identifies live data labels. `prefers-color-scheme: dark` deepens the ink and brightens bone/brass without changing hue families.

## Typography

Six role tokens: `--type-display`, `--type-note`, `--type-body`, `--type-label`, `--type-meta` with `--fs-*` steps. Gloock is the only display voice. Bodoni Moda italic is used only for annotations and the wordmark accent. Manrope handles body and data. All numerals are tabular; `font-synthesis: none` prevents fake weights. Body is 16px/1.55 with a 38rem measure.

## Layout

One left-aligned reading path: giant masthead, engraved plate, record panel, specimen band, gate index. Asymmetry comes from plate overlap and ruled columns, never from centred content. Every interactive target is at least 44px on coarse pointers via `--tap`.

## Elevation & Depth

Depth is made from paper tone, 1px rules and a single hard plate shadow in ink. No glow, blur, or shadow animation.

## Shapes

Square corners. Recurring authored motifs: engraved horse plate, hatched ink texture, registration crosses, measurement ticks, brass double rules, and oxblood wax seals.

## Components

`primary-action` is brass on ink. `specimen-plate` is a paper card with a brass top rule. `record-panel` is oxblood with a brass border. `source-note` is a disclosure carrying publisher, URL, retrieval date and confidence. `glossary` defines MLBB, MPL ID, S18, KDA, MVP and kill participation.

## Do's and Don'ts

Do keep every route in this same world, attribute every fact, label unknown states, and preserve the deterministic seeded offsets with hidden-tab pause and a static reduced-motion path. Don't use white/clean flat surfaces, generic dark+glow esports styling, card grids, gradients, glow, rounded components, fabricated data, or another project's motifs.
