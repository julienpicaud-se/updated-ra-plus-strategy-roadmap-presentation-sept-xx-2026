# Verify Faithful export of the four 2027 slides

## Goal

Produce a Faithful-mode PPTX export and confirm the four 2027 board slides render cleanly in the exported file, with specific attention to the Accor client signal and the roadmap date labels.

## Slides in scope

From the main deck (Act 5):

1. Carbon Performance Becomes Sustainability Performance (`sustainability-performance-2027`) — carries the Accor signal about clients wanting a baseline beyond carbon.
2. The 2027 Platform Picture (`vision-2027-platform`)
3. Five Strategic Bets (`vision-2027-bets`)
4. From Proof to Convergence (`vision-2027-horizon`) — carries the 2026 / 2027 / 2028 horizon dates.

## What will be checked

- Every one of the four slides is present and non-blank in the export (Faithful mode is image-based, so an incomplete animation can capture an empty frame).
- The Accor sentence on the Sustainability Performance slide is fully visible, not clipped or cut mid-line.
- Date and horizon labels (Q4 2026, H1/H2 2027, 2028) are legible and not overlapped by adjacent shapes or connectors.
- No overflow past slide edges, no text-over-shape collisions, correct slide order.

## How it will be verified

1. Drive the running app with Playwright, navigate to the four slides so their entrance animations settle, then trigger the Faithful export from the export menu and capture the downloaded `.pptx`.
2. Convert the exported deck to images (LibreOffice to PDF, then `pdftoppm`) and read the four rendered slide images directly.
3. Report each issue found per slide. If a slide comes out blank or clipped, the fix is to force animation completion (or add a settle delay) in the Faithful capture path before the frame is grabbed, then re-export and re-verify.

## Notes

- Read-only verification first. Code changes only if the export shows a real defect, and they stay inside the Faithful capture path plus the affected slide layout.
- No content is invented: any wording or figure on these slides stays exactly as it is in the deck data today.
