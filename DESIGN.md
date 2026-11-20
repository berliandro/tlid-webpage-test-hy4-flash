---
name: Team Liquid ID — Aged Print Archive
description: An aged, grainy printed archive of Team Liquid ID: ink, fibre, worn rules and stamped seals
colors:
  paper: "#D8C8A6"
  paper-light: "#E7DAC0"
  paper-dark: "#B9A886"
  ink: "#241E17"
  ink-soft: "#5B4E3D"
  oxblood: "#8D2B1F"
  blue: "#2C3E57"
  brass: "#A37C31"
  rule: "rgba(36,30,23,.32)"
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
    backgroundColor: "{colors.oxblood}"
    textColor: "{colors.paper-light}"
    rounded: "0px"
    padding: "12px 18px"
  archive-card:
    backgroundColor: "{colors.paper-light}"
    textColor: "{colors.ink}"
    rounded: "0px"
    padding: "12px"
  stamp:
    backgroundColor: "{colors.oxblood}"
    textColor: "{colors.paper-light}"
    rounded: "0px"
    padding: "26px"
---

## Overview

The site is an aged printed archive: warm paper fibre, heavy ink rules, oxblood wax seals, brass annotations, and small inlined game icons. One focal point per viewport, short factual copy, left-aligned reading.

## Colors

Paper `#D8C8A6` is the ground with a seamless CC0 grain tile blended in. Ink `#241E17` carries text and rules. Oxblood `#8D2B1F` is the action and seal accent; blue `#2C3E57` marks sources; brass `#A37C31` is a quiet annotation tone. Dark mode darkens paper only.

## Typography

Role tokens `--type-display/headline/title/body/label/meta` with `--fs-*` steps. Gloock for display, Manrope for body and data. No synthesized weights. Body is 16px/1.6 with a 38rem measure; functional text never below 11px; numerals tabular.

## Layout

A 12-column mental grid, one primary action above the fold, generous spacing, no nested cards. Sections are ruled bands with one heading and one supporting line. Coarse pointers get 44px targets via `--tap`.

## Elevation & Depth

No glow or gradient. Depth comes from paper tone, 1px rules, double rules, and a rotated wax-seal panel.

## Shapes

Square corners. Recurring details: grain tile, heavy rules, registration ticks, inlined game-icons, oxblood seals.

## Components

`primary-action` is oxblood on paper. `archive-card` is paper-light with a heavy top rule. `stamp` is an oxblood panel for the current-season snapshot. `source-note` is a disclosure with publisher, URL, retrieval date and confidence.

## Do's and Don'ts

Do keep every route in this world, write short concrete sentences, attribute every fact, and label unknowns. Don't use long paragraphs, generic marketing language, mixed terminology, emoji, hollow cards, dark+glow esports styling, or uncredited assets.
