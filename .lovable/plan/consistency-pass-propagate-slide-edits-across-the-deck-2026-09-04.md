# Consistency Pass: Propagate Slide Edits Across the Deck

Several edits you made on specific slides conflict with the same wording still present on other slides. Proposed changes below, all in `src/data/cp-roadmap-deck.ts` (plus one string in `src/lib/pptx-export.ts`).

## Proposed changes

1. **One-page board table (slide "RA+ 2026 and 2027 at board altitude")**
   - Column header "Stream" becomes "Product", and the subtitle "What each stream commits to per half year." becomes "What each product commits to per half year." (matches the slide 8 rename).
   - Carbon Performance H2 2027 cell: "Category 15, FLAG, intensity metrics" becomes "Category 15, FLAG" (you removed intensity and normalisation metrics from slide 6).
   - Carbon Performance H1 2027 cell: "Categories 1, 4, 9 and 5, consolidation" becomes "Category 4 and 9 transport, category 5, consolidation" (matches your Category 4 and 9 product linked transport wording).

2. **Slide 10 capability line**
   - "Light PCF calculator, CDP, SEED and AI scraping integrations" becomes "Light PCF calculator, SEED and AI scraping integrations" (you removed CDP on slide 9).

3. **2027 sequencing slide ("How 2027 lays out across the year")**
   - Remove "Sera for carbon inventory" from the H2 2027 "Assurance and AI" lane (you moved it to Q4 2026 on slide 6).

4. **Deck-wide product name**
   - Title slide eyebrow "Vertex Enterprise Sustainability" becomes "RA+ Enterprise Sustainability" (you asked to replace Vertex by RA+ on slide 15).
   - PPTX export footer "Carbon Performance, Vertex Enterprise Sustainability" updated to match.

## Deliberately left unchanged

- The ranked-themes table row "#3 Scope 3 Product Emissions, categories 1, 4, 9 and 10 to 12": it quotes the source ranking verbatim and covers categories 10 to 12 as well, not only transport.
- "CDP" in the frameworks template list (CSRD, EU Taxonomy, CDP, IFRS S1 and S2): CDP is a real disclosure framework there, not an integration name.
- "Zeigo network integration" on slides 9 and 10: you replaced Salesforce/BFO integration and white labelling with the Zeigo Activate sunset, but did not ask to remove the network integration item.

No layout, component, or structural changes; wording only.
