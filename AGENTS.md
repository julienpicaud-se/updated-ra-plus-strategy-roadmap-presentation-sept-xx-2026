# Project Architecture

- Keep PowerPoint export image-based from the live slide renderer, because one visual source preserves screen-to-slide parity.
- Treat `cpDeck` as the ordered presentation source, with introductory sections composed before the selected shared deck slides.
- Compose the collaboration governance section immediately before the product-detail appendix so it exports as an independent deck part.
- Place the Product team organization section directly before collaboration governance, with its own export boundary.
- Strip PptxGenJS-generated notes parts from every image-based export, because unused notes placeholders can make desktop PowerPoint reject the file.
- Create image-export slides without a custom slide master, because PptxGenJS 4.0.1 emits fragile master metadata that triggers desktop PowerPoint repair.
- Keep native editable PowerPoint exports one-to-one with `cpDeck` and calibrate shared renderers against 1280×720 screen captures, because section boundaries and visible geometry must match the live presentation.