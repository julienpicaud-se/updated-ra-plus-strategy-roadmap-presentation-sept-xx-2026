# Board Version of the Deck, Top-Level Only

Turn `/board-2027` into the single board deck: 12 slides, strategic altitude only, product detail removed. The main 103-slide deck at `/` stays untouched.

## Target structure, 12 slides

| # | Slide | Change |
|---|-------|--------|
| 1 | Title, RA+ Roadmap, Board Review | Keep |
| 2 | The roadmap on one page | Keep, executive summary |
| 3 | Why this matters now | New framing slide, client demand beyond carbon, regulation, AI shift |
| 4 | Where we are today, Q4 2026 | Rewritten from the Q4 update, no rank numbers, no theme names |
| 5 | Divider, The 2027 Picture | Keep |
| 6 | Carbon Performance becomes Sustainability Performance | Keep, trimmed copy |
| 7 | The 2027 platform in one view | Keep, trimmed to the spine, intelligence layer and surfaces |
| 8 | Five strategic bets | Keep, one line each |
| 9 | Q4 2026 to H2 2027 by horizon | Keep, 3 lanes instead of 4, one short phrase per cell |
| 10 | What has to be true | Merge of dependencies and risks, outcome-level only |
| 11 | What we ask of the board | Keep, three decisions plus the directional caution |
| 12 | Thank you, Q&A | Keep |

## What gets removed

Dropped from the current 16: the Q4 honest-read accounting slide, the separate H1 and H2 milestone slides, the separate platform-asks slide, the separate risks slide, and the second timeline divider. Their board-relevant substance folds into slides 4, 9 and 10.

Stripped everywhere: theme rank numbers, Jira and JPD vocabulary, capacity and slot counts, category-level Scope 3 detail, connector and service names. Half-year horizons only, no quarter-level sequencing after Q4 2026.

## Board altitude rules applied

- One idea per slide, at most 4 items per slide, one to two lines per item.
- Named outcomes and client value, not features or delivery mechanics.
- Only Q4 2026 is presented as committed. H1 and H2 2027 stay directional, subject to change, and explicitly not a client commitment.
- 2026 language stays Carbon Performance; 2027 and later is Sustainability Performance, with carbon inside a broader baseline.
- No new figures invented. Anything needing a number we do not have is marked as a visible placeholder and flagged back to you.

## Technical notes

- Rewrite `src/data/board-2027-data.ts` down to 12 entries with simplified copy.
- Add two slide components: `BoardWhyNowSlide` and `BoardWhatHasToBeTrueSlide`, registered in the `SlideType` union and `SlideRenderer`.
- Simplify `BoardQ4UpdateSlide` to three outcome cards with no rank references, and `BoardHorizonTimelineSlide` to three lanes.
- Retire `BoardMilestonesSlide` and its native export handler along with the milestone content fields.
- Add native pptxgenjs specs for the two new types so the board deck exports fully editable.
- Verify with a typecheck and build, a browser walk of all 12 slides at 1280x1800 checking overflow and footer clipping, and a board PPTX export editability check.
