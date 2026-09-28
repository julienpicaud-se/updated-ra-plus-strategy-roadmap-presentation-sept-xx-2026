# Repair PowerPoint export using the proven project pattern

## Goal
Make full-deck and section PowerPoint files open reliably in desktop PowerPoint, using the working September 7 project as the reference.

## Changes
- Keep the current screen-matched, image-based slides.
- Replace the fragile ZIP/XML rewrite path with PowerPoint generation that follows the reference project's native writer behavior.
- Preserve full-deck and named section downloads.
- Update the package checks to validate the exact file structure produced by the new path.

## Verification
- Export the complete 97-slide deck and representative section files through the live interface.
- Inspect package relationships and content types for missing or dangling parts.
- Validate the final PowerPoint, reopen it through an independent Office renderer, and confirm slide counts and visual parity.
- Deliver a newly named file so it cannot be confused with earlier broken downloads.
