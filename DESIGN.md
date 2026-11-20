---
name: Team Liquid ID — Arsip Kompetitif
description: A modern, finished site in Team Liquid's exact colors with restrained tactile grain and one focal point per viewport
colors:
  foundation-blue: "#001538"
  momentum-white: "#EEEEEE"
  ebb-cyan: "#3BB0D4"
  flow-purple: "#5651ED"
  sunrise-gold: "#F7C95E"
  sunset-gold: "#F09F26"
  rule: "rgba(0,21,56,.28)"
  panel-tint: "rgba(0,21,56,.04)"
typography:
  display:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(56px, 8vw, 116px)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(32px, 4.4vw, 58px)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(20px, 2.2vw, 30px)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
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
  measure: "38rem"
components:
  primary-action:
    backgroundColor: "{colors.sunset-gold}"
    textColor: "{colors.foundation-blue}"
    rounded: "0px"
    padding: "12px 18px"
  archive-card:
    backgroundColor: "{colors.momentum-white}"
    textColor: "{colors.foundation-blue}"
    rounded: "0px"
    padding: "12px"
  pulse-panel:
    backgroundColor: "{colors.momentum-white}"
    textColor: "{colors.foundation-blue}"
    rounded: "0px"
    padding: "20px"
---

## Overview

A modern, finished archive in Team Liquid's exact colors: Momentum white ground, Foundation blue type, Sunset gold actions, EBB cyan and Flow purple for accents. The matte finish is a procedural feTurbulence noise overlay multiplied into selected surfaces, never a hue change, never a repeating image, and never animated.

## Colors

Only Team Liquid's published colors are used. Dark mode swaps to a Foundation-blue canvas with Momentum-white text; no new hues are introduced. Small text stays Foundation blue on white or white on blue so contrast holds.

## Typography

Role tokens `--type-display/headline/title/body/label/meta` with `--fs-*` steps. Gloock display, Manrope body. 16px/1.6 body, 38rem measure, 11px functional floor, tabular numerals, `font-synthesis: none`.

## Layout

One focal point per viewport, left-aligned reading path, one primary action above the fold, generous spacing, no nested cards. Coarse pointers get 44px targets via `--tap`.

## Elevation & Depth

No glow or gradient. Depth comes from blue rules, panel tint, and a small textured seal. Grain is a single non-repeating SVG noise field with `multiply` on selected surfaces.

## Shapes

Square corners. Recurring details: heavy blue rules, gold action fills, inlined CC BY icons, and the matte grain overlay.

## Components

`primary-action` is Sunset gold with Foundation-blue text. `archive-card` is Momentum white with a gold top rule. `pulse-panel` is a secondary snapshot stamp. `source-note` is a disclosure with publisher, URL, retrieval date and confidence.

## Do's and Don'ts

Do keep the palette exactly, write short concrete sentences, attribute every fact, and label unknowns. Don't shift hues, apply sepia, use animated filters, write marketing filler, or use uncredited assets.
