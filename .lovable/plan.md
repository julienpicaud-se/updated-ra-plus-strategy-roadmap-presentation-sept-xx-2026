# High-fidelity editable PowerPoint export

## Goal
Make the editable PowerPoint preserve the live deck’s slide order, visual hierarchy, typography, spacing, tables, and shapes as closely as PowerPoint’s rendering engine allows, while keeping content editable.

A fully pixel-identical result cannot be guaranteed because browsers and PowerPoint lay out fonts differently. The image export remains the exact visual reference. The editable export will target close visual parity without flattening slides into pictures.

## What will change
- Rebuild the shared PowerPoint frame to match the live 1280×720 slide geometry: margins, title area, content area, notes, footer, colors, and corner radii.
- Use the live deck’s Inter typography when available, with a safe PowerPoint fallback, and calibrate text sizes and line heights against rendered screens.
- Align each editable slide type with its corresponding live layout, including title, section, columns, boards, statistics, tables, timelines, product maps, strategy pages, comparisons, pricing, journeys, and closing slides.
- Keep every live screen as exactly one PowerPoint slide. Remove table auto-pagination that currently creates extra slides, and fit dense tables within the original slide using controlled row heights and font scaling.
- Keep text as text, tables as editable cells where practical, and diagrams as individually editable PowerPoint shapes.
- Preserve the existing image-based export unchanged as the pixel-faithful option.
- Rename the editable output clearly and keep full-deck and section-level editable downloads.

## Fidelity checks
- Export the complete editable deck and confirm its slide count exactly matches the live deck.
- Render both the live screens and editable PowerPoint slides to images at the same 16:9 size.
- Compare representative slides from every slide type, then correct spacing, wrapping, alignment, color, and overflow issues.
- Inspect every exported slide for clipping, overlaps, missing content, and unexpected extra pages.
- Validate the final file structure and reopen it through an independent Office renderer.
- Complete at least one visual fix-and-verify cycle before delivery.

## Technical details
- Treat 1280×720 screen pixels as the layout source and convert consistently to 13.333×7.5-inch PowerPoint coordinates.
- Centralize reusable frame, typography, card, table, and footer measurements so the browser and editable renderer do not drift independently.
- Avoid custom slide masters and unused notes parts, following the proven Windows-compatible export pattern already used by the image export.
- Continue applying the existing PowerPoint compatibility cleanup before download.
