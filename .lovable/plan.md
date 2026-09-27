# Add “What is a roadmap and why?” section

## Goal
Add a concise executive section near the start of the deck that explains what a product roadmap is, why leadership needs it, and how it differs from discovery readiness and delivery planning.

## What will change
- Insert a new section immediately after the opening context slides, before the product and platform roadmap content.
- Build five slides from the attached executive deck and playbook:
  1. Section opener: What is a roadmap and why?
  2. Definition: strategic intent, priorities, product direction, and approximate sequencing.
  3. Why it matters: one source of truth for investment choices, trade-offs, alignment, and progress.
  4. Connected management layers: roadmap, discovery/readiness, and delivery/release plan.
  5. Roadmap contract: a quarter is planning intent, while commitment requires maturity, feasibility, dependencies, and capacity.
- Use the deck’s existing executive visual language and supported slide layouts.
- Keep the source’s terminology, including “Artefact Ready,” and avoid presenting roadmap quarters as guaranteed dates.
- Include the new slides in full and section PowerPoint exports automatically.

## Validation
- Review every new slide at desktop and mobile sizes for clipping and overlap.
- Verify slide order, navigation count, and section download coverage.
- Prepare and download a PowerPoint using the repaired two-step download flow, then validate that it opens and contains the new section.

## Technical details
- Add the section as typed slide data, reusing existing `section`, `columns`, and `table` renderers.
- Add a dedicated section range so it appears under “By section.”
- Keep the screen-capture exporter as the visual source for PowerPoint parity.
