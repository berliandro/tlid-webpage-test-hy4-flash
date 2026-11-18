# Page refinement workflow (repeatable)

This is the workflow used for the homepage V2 pass. Apply it one route at a time; do not batch multiple pages into one pass.

## 1. Scope before touching code

- Refine exactly one route. Wrap its markup in a page-scoped class and add a matching `body` class in the router so shared header/footer theming cannot leak into other routes.
- Freeze everything else: copy claims, datasets, source notes, navigation destinations and interaction behavior stay intact unless the brief explicitly changes them.

## 2. Two isolated assessments (before design decisions)

Run these independently so mechanical findings do not anchor the judgment:

1. **Typography** — faces and roles; hierarchy at a glance; deliberate scale; 45–75ch reading measure; stress under long headings, localization expansion, zoom and fallback; delivered font assets.
2. **Layout + color** — squint test for primary/secondary/group order; proximity versus containers; tight/generous rhythm; focus path; awkward space or asymmetry; responsive behavior at 1440/1280/768/390; contrast pairs and color roles.

Synthesize both into one problem list. Do not start editing before this list exists.

## 3. Set the thesis

Write one sentence each for:

- the eye path (what is seen first, second, third);
- the single decisive visual move;
- the type roles (display, body, label, numeric);
- the color roles (canvas, ink, primary accent, supporting accent, muted).

## 4. Rewrite the copy

- One fact per section. Heading states the subject; supporting line adds new information or disappears.
- Remove section numbers and eyebrow labels above headings.
- Cut repeated intros and generic promotional sentences. Keep source attribution only where it helps verification.

## 5. Rebuild the structure

- Use a 12-column grid with one spacing scale.
- Group by proximity, not by adding containers.
- Give the primary element the largest scale and the secondary element the next clearest contrast.
- Check computed boxes at every supported width; eliminate overflow, orphaned gaps and misaligned edges.

## 6. Typeset

- Two families maximum: one editorial display, one workhorse sans.
- Lock a role scale with explicit tokens; avoid arbitrary intermediate sizes.
- Use tabular figures for numbers and proper line-height/tracking for each face.
- Self-host only the weights actually used.

## 7. Colorize

- Choose relationships, not swatches: canvas/ink value contrast, one accent with a clear job, one supporting accent, muted role for metadata.
- Verify WCAG AA for body and large text on every surface used.
- Never encode meaning with color alone.

## 8. Add one earned delight

- One authored motion with transform/opacity only, plus one material hover response.
- No loops, no blur, no celebration for ordinary clicks.
- Reduced-motion path keeps the composition complete.

## 9. Verify and record

- DOM/layout measurements at 1440, 1280, 768, 390 and 360px.
- Language toggle: default English, Indonesian switch, persistence across navigation and reload.
- Detector scan, syntax check, production build, no console errors.
- Record the resulting before/after evidence in the page's change note before repeating on the next route.

## Pass 1 evidence — homepage `/` (2026-11-18)

**Before:** 438 words; dark `#001538` field; Bodoni Moda + DM Sans + Italianno script; four equal-weight numbered sections; gold used for CTA, flag, numerals, kickers and ornament; 7px plate credits; 80–93 character body measures; staggered/tilted plates with ~303px slack at tablet width.

**After:** 204 words; light `#F6F2E8` paper canvas with contained navy `#0A1F4A` pulse panel; Gloock display + Manrope body, no script face; one primary masthead, one secondary pulse, then player band, record, and a text-style gate index; gold `#F0A626` reserved for CTA/active/accent with `#8A4B00` for small text on paper; cobalt `#1F6FB2` for links; equal 6/3/2-column band rhythm; one authored thread-draw motion and one hover response; reduced-motion static path.

**Scope:** `body.route-home` and `.home-page` isolate the new system; other routes retain their original theme.

**Verification:** no horizontal overflow at 1440/1280/768/390/360; band columns 6/6/3/2/2; gate columns 4/4/2/1/1; English default and Indonesian toggle verified with persistence; type-scope detector clean after replacing the flagged display face; general detector has one pre-existing advisory only; `npm run check` and `npm run build` pass; no console errors.

