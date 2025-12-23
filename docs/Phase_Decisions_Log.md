# Cleanout2Closing â€“ Phase Decisions Log

Purpose:
This file records all structural, strategic, and scope decisions made during the Cleanout2Closing mega-site build.
It exists to prevent drift, re-litigation, and conflicting interpretations between tools (ChatGPT, Claude, humans).

Rule:
If a decision affects structure, scope, naming, or execution rules, it must be logged here.

---

## Decision Log

### 2025-12-21
**Phase:** 0 â€“ Governance  
**Decision:** Established C2C_MegaSite_MasterPlan.md as the single source of truth and final Claude handoff authority.  
**Impact:** All future design and content work must align to the master plan.  
**Files affected:**  
- docs/C2C_MegaSite_MasterPlan.md

---

### 2025-12-21
**Phase:** 0 â€“ Governance  
**Decision:** Deferred final Content Contract until after Phase 4 (templates) to avoid premature constraints.  
**Impact:** No pillar or GEO content may be finalized until Phase 4.5 is completed.  
**Files affected:**  
- docs/Content_Contract.md (placeholder only)

---

## Template for New Decisions

### YYYY-MM-DD
**Phase:**  
**Decision:**  
**Impact:**  
**Files affected:**  
- 
## Phase 2 â€“ Market & Competitor Research (Decisions)
Date: 2025-12-21

- We will treat three main competitor groups as reference points: (1) national senior/estate transition vendors (e.g., Caring Transitions, WayForth, NASMM-style move managers), (2) local Tucson/Southern Arizona service vendors (senior movers, junk removal, estate cleanout providers, estate sale companies), and (3) probate/inherited-property Realtors and CPRES-branded agents.
- Cleanout2Closingâ€™s differentiation is confirmed as a Realtor-led â€œcleanout to closingâ€ concierge service that coordinates vendors and the real estate sale as one accountable point of contact, rather than acting as a labor contractor or a traditional Realtor who only handles the listing and escrow.
- We will explicitly position C2C as separate from estate sale companies, junk removal/moving crews, and generic CPRES agents by clearly stating boundaries (we coordinate vendor work and documentation but do not perform labor services or provide legal/tax/fiduciary advice).
- Tucson remains the primary GEO focus for SEO and content in the near term, targeting estate transitionâ€“related queries (inherited/probate properties, senior transitions, estate cleanouts) before expanding to nearby senior/probate-heavy areas such as Green Valley, Sahuarita, Oro Valley, Vail, and Catalina.
- The C2C site must cover a defined set of non-negotiable topics, including: (1) what â€œcleanout to closingâ€ means in Tucson, (2) a plain-English overview of the probate sale journey in Pima County, (3) the differences between estate cleanout, estate sale, junk removal, and repairs (who does what / who pays), (4) options for selling an inherited house in Tucson (as-is vs light project vs larger rehab), and (5) specific guidance for out-of-state owners, heirs, seniors and their families, and trustees/PRs.
- Full competitor details, patterns, and topic lists are documented in Phase2_Competitor_Research.md and should be treated as the authoritative research record for future IA and content decisions.

### 2025-12-21
**Phase:** 4 â€“ Page templates and UX  
**Decision:** Finalized the Cleanout2Closing Page Template Library in `docs/Page_Templates.md`, defining five core templates: Home, Service Pillar, GEO Service, Guide/Blog, and Contact/Free Strategy Call. Each template now includes a locked section order, example headings in Bradleyâ€™s brand voice, and developer notes for layout, FAQs, proof placement, and CTAs. All future pages must adopt one of these templates before drafting content.  
**Impact:** Page structure is now standardized across the site. Content writers and LLMs may not improvise page layouts or section order; they must select the appropriate template and follow it exactly. Any template changes require updates to `docs/Page_Templates.md`, an entry in this log, and a check against `C2C_MegaSite_MasterPlan.md`. Phase 4.5 (`Content_Contract.md`) will build on these templates to define detailed publishing rules, but will not change the core layout.  
**Files affected:**  
- docs/Page_Templates.md (now populated with Phase 4 templates)  
- docs/C2C_MegaSite_MasterPlan.md (Phase 4 Decisions and LLM mode updated)  
- docs/Content_Contract.md (Phase 4.5 will reference the locked templates)
### 2025-12-21
**Phase:** 4.5 â€“ Content Contract finalization  
**Decision:** Finalized the binding Content_Contract.md for Cleanout2Closing, defining core frontmatter fields (title, description, slug, date, updated, page_type, template, tags, main_entity, canonical_url, optional hero_image and noindex), GEO and FAQ frontmatter, page-type minimums (word counts, required sections, FAQs, proof blocks, disclaimers, and internal links), JSON-LD schema rules per page_type, and internal linking rules across Home, pillar, GEO, guide, and Contact pages.  
**Impact:** All future content (human or AI-generated) must select a valid page_type and template, follow the Content Contractâ€™s frontmatter schema, meet the minimum content and FAQ requirements for that page_type, include required disclaimers, and implement internal links consistent with IA_Map.md. Claude and other LLMs may not improvise structure or ignore the contract when generating or revising pages. Any changes to templates, IA, or this contract must be logged here and reflected in `docs/Content_Contract.md`, `docs/Page_Templates.md`, and `docs/C2C_MegaSite_MasterPlan.md`.  
**Files affected:**  
- docs/Content_Contract.md (now final and enforceable)  
- docs/C2C_MegaSite_MasterPlan.md (Phase 4.5 rules and decisions updated)  
- docs/Page_Templates.md (referenced by the contract for page_type and template mapping)  
- docs/IA_Map.md (reinforced via internal linking rules)

### 2025-12-21
**Phase:** 5 â€“ Pillar and service content  
**Decision:** Locked the initial Cleanout2Closing core, non-GEO page set and completed first-pass drafts using the Content_Contract frontmatter. The canonical Phase 5 page lineup is:

- home.md  
- how-it-works.md  
- services.md  
- service-inherited-and-probate-property.md  
- service-senior-transitions.md  
- service-trustee-support.md  
- service-out-of-state-owners.md  
- service-cleanout-and-vendor-coordination.md  
- for-realtors-and-professionals.md  
- for-heirs-and-personal-representatives.md  
- for-seniors-and-their-families.md  
- faqs.md  
- about.md  
- contact.md  

**Impact:** These files are now the authoritative â€œpillar and coreâ€ content set for the C2C mega-site. Any new non-GEO top-level pages, major renames, or structural changes must be added to this lineup via a new Phase Decisions entry. Future editing should refine language, CTAs, and internal links, but not change the underlying page roster without being logged.  

**Files affected:**  
- docs/C2C_MegaSite_MasterPlan.md  
- docs/Assets_Inventory.md  
- content/pages/\* (Phase 5 core pages listed above)  
- docs/IA_Map.md  

### 2025-12-21
**Phase:** 6 â€“ GEO and service-area content  
**Decision:**  
We are locking the Tucson and Green Valley GEO/service-area clusters as the first expansion beyond the Phase 5 non-GEO core. Tucson is the anchor market; Green Valley is confirmed as a primary retirement-community market. A standard pattern is now established: service-areas overview â†’ state hub â†’ city/area hubs â†’ local GEO services â†’ supporting guides.

**Impact:**  
- GEO content is no longer ad hoc; all future markets must reuse or deliberately extend this pattern.  
- Tucson and Green Valley now have clearly defined hub and service pages that can be wired directly into Astro/Decap and JSON-LD in Phase 7.  
- New GEO markets (beyond Tucson/Green Valley) require an explicit new decision and updates to the Master Plan, IA_Map.md, and Assets_Inventory.md.

**Files affected:**  
- `C2C_MegaSite_MasterPlan.md` (Phase 6 section and phase overview)  
- `IA_Map.md` (addition of Tucson and Green Valley GEO clusters)  
- `Assets_Inventory.md` (Phase 6 GEO/guide content inventory)  
- `Page_Templates.md` (confirmation that GEO pages use existing templates)  
- `Content_Contract.md` (confirmation of frontmatter and schema usage on GEO pages)

### 2025-12-22
**Phase:** 7 â€“ Implementation & QA (Astro, JSON-LD, forms, and analytics specs)  
**Decision:**  
We are locking in the Phase 7 implementation plan as a set of detailed task-spec documents for the Cleanout2Closing site. Tasks 7.2.1â€“7.2.7 are now fully defined as spec-only authority docs in `/docs`, covering repo/content structure, Astro layouts/templates, content wiring/frontmatter, JSON-LD/SEO, forms/CTAs/lead flow, GA4 + Search Console, and initial indexation/query coverage. All Phase 7 implementation work in the `cleanout2closing-site` repo must follow these specs and the C2C_MegaSite_MasterPlan.md; no ad hoc structural or SEO changes should be made outside this framework.

**Impact:**  
- Phase 7 is no longer conceptual; the implementation path is concretely defined and can be handed to Claude (or another dev/agent) without re-designing the stack.  
- The content tree, page lineup, and GEO pattern locked in Phases 5 and 6 are now protected at the implementation layer: repo structure, layouts, frontmatter, JSON-LD, and CTAs/forms must reflect the Master Plan and IA_Map.md.  
- Forms and CTAs are standardized: `/contact` is the canonical intake path, Netlify Forms â†’ n8n â†’ Bitrix24 is the canonical lead flow, and all CTAs must use the conversation-first, non-hype language in Brand_Guardrails.md and Content_Contract.md.  
- Analytics and search visibility are no longer â€œlaterâ€ tasks; GA4, Search Console, and early indexation/query checks are baked into launch, so future tuning (Phase 8+) can rely on real data instead of guesswork.  
- Any future changes to repo structure, page templates, JSON-LD patterns, form fields/flows, or analytics/indexation approach must be reflected by updating the relevant Phase 7 spec doc(s) and logging the change here.

**Files affected:**  
- `C2C_MegaSite_MasterPlan.md` (Phase 7 â€“ Tasks 7.2.1â€“7.2.7 section)  
- `docs/Phase7_Task7.2.1_Repo_and_Content_Structure.md`  
- `docs/Phase7_Task7.2.2_Astro_Layouts_and_Templates.md`  
- `docs/Phase7_Task7.2.3_Content_Wiring_and_Frontmatter.md`  
- `docs/Phase7_Task7.2.4_JsonLd_and_SEO_Wiring.md`  
- `docs/Phase7_Task7.2.5_Forms_CTAs_and_Lead_Flow.md`  
- `docs/Phase7_Task7.2.6_Analytics_and_SearchConsole.md`  
- `docs/Phase7_Task7.2.7_Indexation_and_Early_Query_Coverage.md`
