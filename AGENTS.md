# Project Architecture

- Keep PowerPoint export image-based from the live slide renderer, because one visual source preserves screen-to-slide parity.
- Treat `cpDeck` as the ordered presentation source, with introductory sections composed before the selected shared deck slides.
- Compose the collaboration governance section immediately before the product-detail appendix so it exports as an independent deck part.
- Place the Product team organization section directly before collaboration governance, with its own export boundary.
- Strip PptxGenJS-generated notes parts from every image-based export, because unused notes placeholders can make desktop PowerPoint reject the file.