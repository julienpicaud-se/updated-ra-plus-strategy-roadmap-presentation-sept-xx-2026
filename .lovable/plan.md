# Roadmap Gap Matrix

## Goal
Add a roadmap-focused comparison to the existing competitor matrix page, using the same green table layout and family navigation as the Energy & Efficiency and Climate Risk matrices.

## What will be built
- Add a clear view switch between the existing capability matrix and a new roadmap gap matrix.
- Cover every rival already supported by the project:
  - Energy & Efficiency: IBM Envizi, EnergyCAP, Accruent, Arcadia, Honeywell Forge, EAC and renewables specialists, demand response/VPP/DER specialists.
  - Climate Risk: Climate X, XDI, Cotality, S&P Global Climanomics, Risilience, Bloomberg.
  - Sustainability: Watershed, Persefoni, Sweep, Sphera, EcoVadis, osapiens, IntegrityNext, Workiva, Wolters Kluwer, Novisto.
- Compare each rival against RA+ across three horizons: near term, medium term, and longer term.
- Show the strategic gap for each rival, including where RA+ leads, is level, is closing a gap, or remains behind.
- Link each rival name to its existing deep-dive page.
- Retain explicit caveats that rival roadmaps are directional readings of public and licensed analyst material, not vendor commitments.

## Technical details
- Derive rival roadmap content from the existing energy, climate, and sustainability vendor datasets rather than duplicating claims.
- Add a compact roadmap-gap data model for RA+ comparison and render it with the existing semantic colors, table styling, responsive horizontal scrolling, and status labels.
- Keep the existing capability matrices unchanged.
- Verify all rivals appear once, links resolve, the page renders cleanly, and the project build remains healthy.
