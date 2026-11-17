# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: plain static HTML/CSS/JS with no build step and no framework. Chosen because the low-spec hardware and ~60 FPS mandate rewards minimum runtime overhead and full control over rendering cost; the choice was offered to the user, who delegated it. No deploy target was specified — future work should confirm hosting before committing to any build tooling or API layer.

Source repository: https://github.com/berliandro/tlid-webpage-test-hy4-flash.git (provided by the user; empty when the project was initialized).

## Users

**Primary:** Casual fans and curious visitors who want to explore Team Liquid ID beyond match results — people drawn by team identity and player personality who may not arrive looking for statistics. They browse for discovery and atmosphere as much as for facts.

**Secondary:** Competitive enthusiasts who want player comparisons, performance trends, hero statistics, match records, and tournament history.

**Situation:** Visitors may be on low-spec hardware (integrated graphics, limited CPU/RAM) and may have reduced-motion preferences set. The experience must remain complete and usable under those conditions.

## Product Purpose

A destination for exploring Team Liquid ID as a living subject rather than a results feed. It combines team identity and organizational information, player personalities and stories, competitive statistics, match schedules and results, tournament participation, discoveries, and history.

Success is measured by whether visitors find the experience worth exploring even when they are not looking for a specific statistic — by recognition of a distinct identity, by time spent discovering, and by clarity of information when they do seek facts.

## Positioning

An explorable, art-directed world about a team. Where a neighboring esports site presents a roster, a table, and a fixture list, this product treats identity and player individuality as a constructed visual narrative with competitive data embedded inside it. Its claim is an experience, not a dataset: a coherent visual world that makes following the team entertaining. This distinction depends on real, attributed content and on the identity being genuinely ownable rather than decorative.

## Operating Context

- Deliberately staged development: product initialization → shaping/information architecture → visual exploration → research/data discovery → implementation → data integration → validation/refinement. Research and design may overlap; no implementation or comprehensive data collection occurs during initialization.
- No user-provided competitive dataset exists. All team, player, match, and historical information must be discovered independently from public sources with attribution, source URLs, retrieval dates, and verification notes.
- Unofficial concept product: no organizational facts are invented and no official endorsement is claimed.
- Modern web browsers on modest hardware. Ambient motion must pause or reduce when the page is hidden; static fallbacks must preserve the visual identity.

## Capabilities and Constraints

**Candidate experiences (information architecture not yet fixed):** Team, Players, Statistics, Matches, Discover, History, plus additional discovery-led experiences. These are starting points to be evaluated in the shaping stage, not committed pages.

**Constraints:**

- Performance is a hard requirement: favor transform/opacity animation, CSS over JavaScript loops, lazy-loaded media, lean bundles, and no heavy libraries without justification. Avoid expensive blur filters, animated shadows, unnecessary WebGL/3D, and offscreen animation.
- Respect operating-system reduced-motion preferences and provide equivalent static presentations.
- Maintain readability, contrast, and usable interactions despite an ambitious visual presentation.
- Architecture must stay flexible enough to support additional seasons, competitions, and players.
- Do not fabricate statistics, biographies, match results, achievements, or history. Distinguish verified information, unverified/unknown information, and illustrative sample data explicitly.

**Explicitly undecided / to verify:** final information architecture and user journeys; the visual direction; the game title and competitive discipline (implied by hero/KDA language but not yet confirmed); available data sources and whether an external API, database, or manual collection is needed; deploy target.

## Brand Commitments

- Name used throughout: **Team Liquid ID**. The product is an independent, unofficial concept site about that team — it must not imply official Team Liquid endorsement or partnership.
- A strong, ownable visual identity is a fundamental product requirement, not a finishing touch. The user explicitly rejects generic esports conventions: dark backgrounds with glowing blue/purple accents, black-and-red palettes, generic gradients, glassmorphism and glowing borders, predictable card grids, gaming-dashboard layouts, template player profiles, and decorative HUD elements.
- Every major design decision should contribute to one coherent visual philosophy; originality and expressive presentation are valued over template completeness.

## Evidence on Hand

None. No competitive dataset, player statistics, match records, historical information, biographies, source URLs, or brand assets have been provided. The folder began empty with no codebase or design system to inherit.

Future work must not fabricate any of the above. Values that cannot be verified from reliable sources must be marked unknown, and any illustrative data must be clearly labeled as such.

## Product Principles

1. **Identity before dashboard.** The product is an explorable world first; competitive data serves the experience rather than defining it.
2. **Never invent the record.** Verified, unknown, and illustrative information are always distinguishable, with sources attributed.
3. **Motion is felt, not watched.** Ambient movement is subtle, continuous, purposeful, and silenced gracefully for reduced-motion users and hidden pages.
4. **Performance is a design constraint.** Visual ambition is achieved with inexpensive rendering; smoothness on low-spec hardware is a measure of success, not cleanup work.
5. **Exploration and individuality.** Give each player a meaningful identity and reward discovery for its own sake.

## Accessibility & Inclusion

Adequate contrast, readable typography, and usable interactions are required. Reduced-motion preferences must be honored with static alternatives that preserve the visual identity. Low-spec hardware users are a first-class audience, not an edge case.
