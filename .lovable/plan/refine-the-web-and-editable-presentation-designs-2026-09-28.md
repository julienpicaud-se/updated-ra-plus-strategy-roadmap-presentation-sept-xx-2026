# Refine the web and editable presentation designs

## Scope
- Improve the live deck and native editable PowerPoint as one coordinated design pass.
- Preserve all content, slide order, section boundaries, export options, and 97-slide one-to-one mapping.

## Design changes
- Strengthen the shared slide frame with more deliberate title spacing, quieter footers, and a cleaner content rhythm.
- Refine recurring cards, tables, boards, statistics, and roadmap layouts with consistent radii, borders, surfaces, and typography.
- Improve title and section slides while retaining the established Schneider green executive identity.
- Apply equivalent geometry and styling in the editable PowerPoint renderer so native objects closely match the web slides.
- Keep specialist dark-green slides visually consistent without flattening their distinct information structures.

## Technical details
- Centralize reusable visual decisions in the existing React frame and PowerPoint helpers.
- Keep the live 1280×720 renderer as the source of truth and preserve fully editable PowerPoint text, tables, and shapes.
- Retain the reliable export structure: no custom master, no unused notes parts, and one PowerPoint slide per web screen.

## Verification
- Inspect representative web slides across the major slide types at 1280×720.
- Generate and validate the complete editable PowerPoint, confirming exactly 97 slides.
- Render the exported slides to images, inspect every page for clipping, overlaps, contrast, and alignment, then complete a fix-and-verify pass.