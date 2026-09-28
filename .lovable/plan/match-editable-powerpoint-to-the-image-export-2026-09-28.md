# Match editable PowerPoint to the image export

## Goal
Bring the native editable PowerPoint closer to the live image export, using the four attached Roadmap Foundations slides as the parity benchmark while preserving one editable slide per screen.

## Changes
- Recalibrate the shared slide frame: title wrapping, subtitle position, body start, footer, and note band.
- Rebuild editable column cards to match the live cards, including fill, border, internal spacing, separator, round bullets, and typography.
- Rebuild editable tables to match the live header band, row heights, borders, first-column emphasis, and exact content bounds.
- Apply the corrected shared patterns across all slides using those renderers, without changing slide content or order.
- Keep both image and editable export options, and update the editable filename version.

## Validation
- Export the Roadmap Foundations section and full editable deck.
- Validate the PowerPoint package and confirm the slide count remains one-to-one with the live deck.
- Render the four benchmark slides to images, compare them with the attachments, fix visible spacing or overflow issues, then re-render.
