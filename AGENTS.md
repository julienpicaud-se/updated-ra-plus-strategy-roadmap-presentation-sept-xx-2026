# Project Architecture

- Keep PowerPoint export image-based from the live slide renderer, because one visual source preserves screen-to-slide parity.
- Treat `cpDeck` as the ordered presentation source, with introductory sections composed before the selected shared deck slides.