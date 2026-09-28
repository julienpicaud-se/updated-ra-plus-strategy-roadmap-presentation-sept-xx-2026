# Match the editable PowerPoint more closely to the web deck

## Goal
Refine the native editable PowerPoint so its visual hierarchy, spacing, geometry, and surfaces closely match the live 1280×720 slides, while preserving editable text and shapes and keeping all 97 slides one-to-one.

## Changes
- Recalibrate the shared frame from live captures: page background, header offsets, title wrapping, subtitle position, content bounds, note treatment, and footer behavior.
- Match the core slide patterns precisely: title and section screens, columns, boards, statistic cards, tables, bets, and timelines.
- Align specialist slide types with their live counterparts, including dark-green strategic slides, roadmap grids, product maps, value cases, pricing, journeys, and closing screens.
- Remove PowerPoint-only decoration that is absent from the web version, including extra shadows, watermarks, accent bars, alternating fills, and ornamental shapes where they change the composition.
- Keep the existing reliable export structure: native editable objects, no custom slide master, stripped notes parts, one PowerPoint slide per web screen.
- Rename the refined editable download so it is easy to distinguish from the current executive-design version.

## Validation
- Generate the full 97-slide editable deck and the Roadmap Foundations section.
- Validate both PowerPoint packages and confirm slide counts and one-to-one ordering.
- Render representative slides from every major slide type and compare them with fresh 1280×720 web captures.
- Complete at least one visual fix-and-verify pass for spacing, clipping, contrast, and alignment.

## Technical details
- Keep styling centralized in the existing PowerPoint frame, card, tone, and spacing helpers.
- Use the live React renderer as the visual source of truth and retain fully editable PowerPoint text, tables, and shapes.
