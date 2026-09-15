# Pixel-faithful PowerPoint export

## Goal
Replace the fragile hand-recreated PowerPoint layouts with an export that captures every live deck screen exactly, while producing a PowerPoint file that opens reliably.

## What will change
- Render each of the 65 deck screens at one fixed 16:9 presentation size.
- Capture each rendered screen at high resolution and place it edge-to-edge on its matching PowerPoint slide.
- Use the same capture path for the full deck and every section download, so no screen uses a separate PowerPoint layout implementation.
- Change the main PPTX button to generate the current live deck rather than download the stale static file.
- Keep slide order, titles, colors, tables, timelines, shared-capability chips, and all other visible content identical to the live deck.
- Generate a fresh downloadable PowerPoint file for the project.

## Important trade-off
The exported slides will be pixel-faithful images. They will look exactly like the live screens and open reliably, but individual text boxes and shapes will not be editable in PowerPoint.

## Validation
- Compare every exported slide with its corresponding 16:9 live screen using image comparison.
- Confirm the full deck and each section contain the expected number and order of slides.
- Open, render, and schema-validate the final `.pptx` with PowerPoint-compatible tooling.
- Complete at least one visual fix-and-verify cycle before delivery.

## Technical details
- Add a dedicated presentation capture mode without navigation controls or transitions.
- Use the existing live slide renderer as the only visual source.
- Build a minimal image-only PPTX package, avoiding the XML patching that caused the current file-open failure.
- Keep the existing editable exporter isolated as legacy code until the new path passes validation.
