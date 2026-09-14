# Enhance the Q4 2026 Carbon Performance Section

The attached Q4 2026 Roadmap Review adds material the current five-slide Q4 section does not carry: an honest Q3 accounting, where CP sits on the RA+ priority list, the Protect / Push / Defer wedge, a capacity-versus-demand reality check, governance gaps, and platform dependencies. This upgrades the section from "what ships" to a defensible executive narrative, while keeping it board-appropriate (no epic-level tables).

## New slides (added inside the Carbon Performance Q4 2026 act)

1. **Where CP Sits on the RA+ Priority List** (before The Q4 Thesis)
   159 themes ranked across RA+, 54 of them Carbon Performance. Highlight the CP entries in the global top 20 (Automated Data Quality Checks #1, CP Data Collection Setup Foundation #2, Scope 3 Product Emissions #3, Accor Portfolio Data Experience #4, Decarbonization Actions #5) so the board sees CP is not asking for priority, it already holds it.

2. **Q3, Honest Accounting** (before The Q4 Thesis)
   Three columns: shipped (bulk import rollback, smart mapping, historic mapping memory, charts without starter query, measuring points cleanup), closing in Q3 (expanded Scope 3 and calculations, statement preview and export, statements revamp scoped, pre-calculated emissions import), and stalled or on hold (discrepancy management, cross-hierarchy query builder, estimations and gapfilling). Named exposure: Application Experience and Portfolio carries seven epics still to do.

3. **The Q4 Wedge: Protect, Push, Defer**
   Q3 landed ingestion; Q4 buys emission factor and calculation depth. Protect (automated data quality, Scope 3 product emissions categories 10 to 12, pre-calculated emissions import), Push (renewable energy and market-based Scope 2, extended inventory classification, Sera contextual intelligence), Defer (self-serve decarb planning and execution, dedicated auditor experience, Category 15 and FLAG, languages and EU hosting, full PCF which rides Supply Chain).

4. **Capacity Reality: 45 Slots, 127 Asked**
   Big-number treatment: ~45 solution slots of Q4 capacity, 127 slots of demand in the current export (73 ranked, 27 unranked, 27 themeless), 82 over before scope negotiation. Cut line falls at rank #25 Organizational Boundary and Consolidation, 17 themes and 42 slots fit, 9 ranked themes defer. Frames the ask as sequencing, not stretching.

5. **Governance Gaps to Close**
   11 CP themes hold 27 Q4 solutions with no theme rank, 27 solutions sit outside any theme, several initiatives have no delivery epics opened (data quality configuration, actions programs and projects, initiative planning, target management). Each with the owner action required.

6. **What We Need From Platform Teams**
   Dependency clusters: data ingestion and pipelines (pipeline and transformation foundation, CP data collection setup, programmatic connectors, data collection lifecycle), data quality and services, and cross-product consumption. Stated as confirm-commitment asks, with a note that theme rank is not in this group's scope.

7. **2027, Three Bets** (closing the section, directional not committed)
   Close the inventory (Category 15 investments, sources outside GHGP scopes), self-serve depth (decarb planning and execution, decision support, dedicated auditor experience), and cross-product compounding (Supply Chain emissions, R&C integration, supplier-specific factors, reusable analytics, PCF integrations). Links forward to the existing 2027 Sustainability Performance slides.

## Updates to existing Q4 slides

- **What Ships in Q4 2026**: align with the ranked Q4 plan from the review (CP Data Collection Setup Foundation, Scope 3 product emissions, renewable energy and market-based Scope 2, pre-calculated emissions import, inventory statements and extended classification, allocations foundation, Scope 3.4 and 3.9 transport, organizational boundary and consolidation) and label discovery versus delivery status.
- **Q4 Watch-Outs and Asks**: fold in the capacity overrun, unranked themes, and no-delivery-epics findings so risks match the new evidence.
- **Why Q4 Matters Commercially**: add the named client anchors from the review (Accor and Schneider Electric October to December, Newell Brands and Sanofi November, Schneider Electric December 31).

## Technical notes

- Five new slide components in `src/components/slides/` following the existing `CPQ4*Slide.tsx` patterns and design tokens (no hardcoded colors), plus reuse of existing big-number style for the capacity slide.
- Register the new types in the union in `src/data/slides-data.ts`, insert the entries in act order, and add cases in `src/components/slides/SlideRenderer.tsx`.
- Add native editable PPTX handlers for each new type in `src/lib/slides-pptx-export.ts` so all three export modes stay editable.
- Keep the standing caution: sequencing is directional, subject to discovery and planning-cycle review, and not a client commitment.
