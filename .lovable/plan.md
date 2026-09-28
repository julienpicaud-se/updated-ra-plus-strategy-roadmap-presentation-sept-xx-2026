# Editable V2 PowerPoint export

## Build
- Preserve the existing editable export and add a separate **Editable V2** choice for the full deck and every section.
- Extend the native PowerPoint renderer with the approved reference-led executive style: deep green anchors, bright green hierarchy, restrained orange emphasis, crisp white surfaces, compact framing, and consistent footer branding.
- Apply the direction across every slide family while retaining one editable PowerPoint slide per live deck slide and keeping all text, tables, and shapes editable.
- Give Editable V2 a distinct filename so it never replaces the existing export.

## Quality checks
- Generate the complete Editable V2 deck from the current 97-slide source.
- Validate and auto-repair the PowerPoint package, confirm slide count and text extraction, render every slide to images, and inspect representative and dense layouts.
- Fix any clipping, overlap, weak contrast, or inconsistent spacing found during review, then re-run validation.

## Technical details
- Keep the current screen-image export and current editable renderer unchanged.
- Add a V2 renderer/export path rather than changing the existing editable download.
- Continue stripping fragile notes metadata and avoid custom slide masters for desktop PowerPoint compatibility.
