# Repair editable PowerPoint layouts

## What will change
- Fix multi-column slides so bullets remain inside their cards, with card height and bullet spacing calculated from the actual content.
- Fix dark section dividers so long titles and subtitles never overlap, while preserving the bold section style.
- Fix dense tables so all rows, notes, and footer branding occupy separate reserved areas.
- Apply the corrections to the shared editable renderer so similar slides across the 97-slide deck benefit automatically.

## Technical details
- Replace fixed column-card and bullet coordinates with content-aware vertical regions and fitted text sizing.
- Add title-length-aware section divider geometry and subtitle positioning.
- Derive table height from the available area between the header and note/footer zones, with row-aware font sizing.
- Rename the corrected editable export, regenerate the full deck, validate the PowerPoint package, render it to images, and visually re-check the reported slide families.

## Scope
- Editable PowerPoint only. Web slides and slide content remain unchanged.
