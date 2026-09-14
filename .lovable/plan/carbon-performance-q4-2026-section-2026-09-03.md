# Carbon Performance, Q4 2026 Section

A dedicated, executive-grade section covering only the Carbon Performance roadmap for Q4 2026, built from the uploaded solutions export (7 items dated 2026 Q4, plus 10 items spanning 2026 Q4 to 2027 Q1).

## Where it goes

New Act inserted immediately before the existing "Carbon Performance Deep Dive" act, so the story runs: roadmap, vision, sales enablement, then the Q4 zoom-in, then the product deep dive.

## Slides (6)

1. **Section divider** - "Carbon Performance, Q4 2026" with a one-line promise: make the inventory defensible, complete, and easy to run.
2. **The Q4 Thesis** - three executive outcomes rather than a feature list:
   - Defensible boundaries (base year, exclusions, materiality, consolidation approaches)
   - Complete inventory (thermal source, refrigerant leakage, commuting and WFH, EAC/market-based Scope 2)
   - Usable at scale (inventory management UX, Quartz design alignment, import experience)
3. **What Ships in Q4** - grouped card view of the 7 committed Q4 items with theme and status (Discovery vs Delivery), each reduced to one executive line of client value.
4. **Q4 into Q1, the Continuum** - the 10 items spanning 2026 Q4 to 2027 Q1 (consolidation methods, calculation methods and governance, client-facing configuration, Scope 3.4/3.9 transport, sold-product desk research, permissions), framed as what starts in Q4 and lands in Q1.
5. **Why It Matters Commercially** - what each Q4 cluster unlocks: audit-ready reporting for assurance and CSRD-style scrutiny, wider Scope 3 coverage for enterprise deals, self-service configuration to cut delivery cost, and the on-ramp to Sustainability Performance in 2027.
6. **Q4 Watch-Outs and Asks** - the delivery risks visible in the data (most Q4 items still in Discovery, several in Parking Lot, admin-config load) with the mitigation and the decision asked of the board, plus the standing caution that the roadmap is directional and not a client commitment.

## Content rules

- No invented metrics, dates, or client names. Only the summaries, themes, quarters, and statuses in the uploaded file, plus existing deck context.
- No em dashes.
- "Carbon Performance" for 2026 wording; the 2027 slide already handles the Sustainability Performance shift and slide 5 links to it.

## Technical notes

- Four new slide components in `src/components/slides/` using existing design tokens and staggered-motion patterns: `CPQ4ThesisSlide`, `CPQ4ShipsSlide`, `CPQ4ContinuumSlide`, `CPQ4ValueSlide`, `CPQ4RisksSlide` (divider reuses `section-divider`).
- Register new type strings in the `Slide['type']` union in `src/data/slides-data.ts` and in `SlideRenderer.tsx`.
- Insert the slide entries in `slides-data.ts` before the Act 7 divider and renumber act labels for the following acts.
- PPTX export: add native `pptxgenjs` handlers for the new types in `src/lib/slides-pptx-export.ts` so the section exports fully editable, consistent with the current native-first approach.
