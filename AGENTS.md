# Project Architecture

- Keep PowerPoint export image-based from the live slide renderer, because one visual source preserves screen-to-slide parity.
- Treat `cpDeck` as the ordered presentation source, with introductory sections composed before the selected shared deck slides.
- Compose the collaboration governance section immediately before the product-detail appendix so it exports as an independent deck part.
- Place the Product team organization section directly before collaboration governance, with its own export boundary.
- Strip PptxGenJS-generated notes parts from every image-based export, because unused notes placeholders can make desktop PowerPoint reject the file.
- Create image-export slides without a custom slide master, because PptxGenJS 4.0.1 emits fragile master metadata that triggers desktop PowerPoint repair.
- Keep native editable PowerPoint exports one-to-one with `cpDeck` and calibrate shared renderers against 1280×720 screen captures, because section boundaries and visible geometry must match the live presentation.
- Keep editable PowerPoint styling centralized in reusable frame, card, tone, and spacing helpers, because the full deck must read as one coherent executive presentation.
- Treat the live 1280×720 React slides as the visual source of truth for editable PowerPoint styling, including white canvases, neutral borders, brand footers, and decoration-free section layouts.
- Keep web and native PowerPoint headers, card radii, note callouts, table density, and footer branding visually synchronized whenever either renderer changes.
- Use content-aware editable PowerPoint layout families with reserved header, content, note, and footer zones, because visual variety must never compromise containment or legibility.
- Keep experimental PowerPoint art directions in standalone sample exports until approved, because concept testing must not destabilize the complete deck.