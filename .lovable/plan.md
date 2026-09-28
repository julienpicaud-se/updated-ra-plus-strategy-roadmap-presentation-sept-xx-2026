# Bold, varied editable PowerPoint redesign

## Goal
Make the editable 97-slide deck feel intentionally art-directed rather than template-repeated, while preserving every slide’s content, native editability, order, section exports, and PowerPoint compatibility.

## Design direction
- Keep Schneider green and the established executive identity, but introduce stronger contrast, larger typographic moments, asymmetric composition, and more deliberate negative space.
- Build a coherent set of distinct layout families instead of repeating equal cards: editorial statement, portfolio grid, data canvas, decision split, journey flow, roadmap field, and dark strategic interlude.
- Use a recurring visual language of vertical spines, oversized section numerals, framed data zones, compact labels, and selective dark-green surfaces. Avoid decorative clutter and preserve board-level readability.

## Changes
- Add reusable PowerPoint composition helpers for editorial labels, section markers, metric callouts, decision bands, and asymmetric panels.
- Vary recurring slide types by content and sequence: alternate card proportions, hierarchy, alignment, background treatment, and emphasis without changing the underlying information.
- Redesign the most repetitive families first: columns, boards, statistics, tables, bets, journeys, and closing decisions.
- Strengthen title and section transitions so each major part has a distinct visual rhythm.
- Keep specialist roadmap, pricing, competitor, and value-case slides visually related while giving each a unique silhouette.
- Rename the editable export so the new art-directed version is clearly identifiable.

## Validation
- Generate the complete editable deck and confirm exactly 97 slides.
- Validate the package and reopen it through an independent Office renderer.
- Render every slide to images, inspect for repetition, clipping, overlaps, contrast, and alignment, then complete at least one fix-and-verify pass.
- Confirm section-level and full-deck exports still use native editable objects and preserve one slide per screen.

## Technical details
- Keep the existing no-master, stripped-notes, corrected-image-metadata export pattern.
- Centralize the new visual motifs in reusable PptxGenJS helpers rather than one-off decoration.
- Do not modify the web deck or slide content in this pass.
