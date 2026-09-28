# Add Product, GSP and cross-team collaboration section

## Goal
Add a focused section before the product-detail appendix explaining how Product collaborates with GSP, Go-to-Market, Sales, Engineering, SCDR, Data & Ops, and regional testers through recurring planning governance meetings.

## Section content
Create an eight-slide section using the deck's existing executive visual language:

1. **Section opener: Product collaboration and governance**
   - Position collaboration as the operating model that turns market, consulting, delivery, and customer evidence into roadmap decisions.

2. **Two-level planning governance**
   - Show the Sustainability RA+ Platform Planning Group above the four product planning groups.
   - Explain its standing roles, cross-product decision rights, escalation path, and recurring governance meetings.

3. **Product planning groups**
   - Show how each product group reviews customer and market evidence, understands competition, shapes priorities, and approves its roadmap.
   - Include Product Management, Product Marketing, Go-to-Market, Sales, GSP, and Engineering representation.

4. **Who participates across the sustainability products**
   - Recreate the supplied membership matrix for Carbon Performance, Supply Chain, Climate Risk, and Reporting & Compliance.
   - Use names and functional roles only, with no email addresses.

5. **How GSP family expertise connects to Product**
   - Rework the supplied GSP family-to-product mapping into a readable executive table.
   - Preserve named family leads and RA+ product ownership, consolidating repeated uploaded screenshots into one slide.

6. **Carbon Performance collaboration in practice**
   - Show the regional testing network across AMS, APMEA, NECE, SE, and UK&I.
   - List participants by region as testing contributors, omit all email addresses, and emphasize how structured testing feeds product decisions.

7. **Supply Chain collaboration in practice**
   - Organize the supplied collaborators by Build Phase / Suppliers to Target, Supplier Actions, PCF, general Supply Chain topics, SCDR Program Management, and SCDR Data & Ops.
   - Clearly distinguish GSP collaboration from the SCDR alignment group where affiliation is uncertain.

8. **Planning governance meeting contract**
   - Summarize cadence, inputs, decisions, outputs, and escalation: customer evidence, roadmap priorities, cross-product dependencies, policy decisions, owners, and follow-through.
   - Avoid inventing a specific meeting frequency where the source only says meetings occur regularly.

## Deck and download changes
- Insert the section immediately before the current product-detail appendix.
- Give it a distinct section number and add it as its own named option under “By section.”
- Update subsequent section labels and boundaries without changing their internal slide order.
- Keep the live slide renderer as the single visual source for full-deck and section PowerPoint exports.

## Validation
- Review every new slide at desktop and mobile sizes for clipping, overlap, and readable name density.
- Verify slide order, navigation count, and the new section boundary.
- Download and validate the collaboration-only PowerPoint and the complete deck, confirming filenames, slide counts, and section coverage.

## Technical details
- Add the collaboration slides as typed deck data, primarily reusing the existing `section`, `columns`, `table`, and `stats` layouts.
- Split dense participant information across the Carbon Performance and Supply Chain slides rather than shrinking text excessively.
- Extend section-range calculation so the collaboration section exports independently and later sections retain correct ranges.
