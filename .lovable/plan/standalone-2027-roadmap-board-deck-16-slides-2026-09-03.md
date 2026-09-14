# Standalone 2027 Roadmap Board Deck (16 slides)

A separate, board-ready deck at its own route, built from the 2027 material already in the main deck plus a Q4 2026 update. Half-year horizons (H1 / H2 2027), milestones per horizon, no epic-level detail. The 103-slide deck stays untouched.

## Where it lives

- New route `/board-2027`, rendering the same slide engine (keyboard, swipe, dot navigation, PPTX download) as the main deck.
- The existing deck components are reused; nothing in the main deck's data or order changes.

## Slide list (16)

Act A, the frame
1. Title: RA+ 2027 Roadmap, Board Review (subtitle: directional, not a client commitment)
2. Executive summary on one page: where we are, where 2027 takes us, what we ask
3. Q4 2026 update: what ships this quarter, condensed from the existing Q4 section into one board-level view
4. Q4 2026 honest read: what closed, what carried, capacity reality in one line each

Act B, the 2027 picture
5. Section divider: The 2027 Picture
6. Carbon Performance becomes Sustainability Performance, with carbon inside a broader baseline (Accor as the client anchor)
7. The 2027 platform in one view: data spine, intelligence layer, product surfaces
8. Five strategic bets for 2027, one line of rationale each

Act C, timeline and milestones
9. Section divider: Timeline and Milestones
10. Horizon timeline: Q4 2026 to H1 2027 to H2 2027, themes per horizon per product line
11. H1 2027 milestones: 4 milestones with outcome and dependency
12. H2 2027 milestones: 4 milestones with outcome and dependency
13. Dependencies and platform asks, board-level only

Act D, the ask
14. Risks and mitigations, 4 items
15. What we ask of the board: decisions, and the caution that this view is directional and reviewed each planning cycle
16. Thank you / Q&A

## Content sourcing

All content comes from material already in this project: the Q4 2026 Carbon Performance section (ships, Q3 accounting, capacity, governance, platform asks, 2027 bets), the 2027 vision slides (Sustainability Performance, platform, bets, horizon), and the existing risks/decisions slides. No new figures are invented; every number traces to the Q4 roadmap review already parsed into the deck. Terminology follows project rules: 2026 stays "Carbon Performance", 2027+ uses "Sustainability Performance"; "platform" not "system"; no em dashes.

## Technical notes

- `src/data/board-2027-data.ts`: new `boardSlides` array typed with the existing `SlideData` interface, reusing existing slide `type` values wherever they fit so no renderer work is needed.
- Three new slide components for the board-specific layouts: horizon timeline (Q4 2026 / H1 / H2 swimlanes), half-year milestone slide (reused for slides 11 and 12), and the condensed Q4 update. New `SlideType` entries added to the union and to `SlideRenderer`.
- `SlideDeck` and `SlideNavigation` gain an optional `slides` prop, defaulting to the current `slidesData`, so the main deck behaves exactly as today and `/board-2027` passes `boardSlides`.
- `slides-pptx-export.ts`: `buildPptx` / `exportSlidesToPptx` take an optional slides array and file name so the board deck exports its own PPTX; native editable builders added for the three new types.
- New page `src/pages/Board2027.tsx` plus the route in `App.tsx` above the catch-all.

## Verification

Build and typecheck, then walk all 16 slides in the browser at 1280 width, screenshot each, and check for overflow, low contrast, and clipped footers. Then run the board PPTX export and confirm the editability report is clean.
