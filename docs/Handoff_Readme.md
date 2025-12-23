# Cleanout2Closing â€“ Phase 7 Implementation Handoff

This document is the starting point for implementing the Cleanout2Closing site in this repo.

The strategy, IA, and content are already designed and locked. Your job is to implement Phase 7 (7.2.1â€“7.2.7) in code, following the specs and decisions that already exist.

## 1. Source-of-truth documents

Please read these before making any structural decisions:

1. `docs/C2C_MegaSite_MasterPlan.md`  
   - Master blueprint for SEO, GEO structure, IA, templates, and content.

2. `docs/Phase_Decisions_Log.md`  
   - Dated decisions and overrides. If something in the Master Plan seems unclear, check here next.

3. Phase 7 task-spec docs (implementation authority for this phase):

   - `docs/Phase7_Task7.2.1_Repo_and_Content_Structure.md`  
   - `docs/Phase7_Task7.2.2_Astro_Layouts_and_Templates.md`  
   - `docs/Phase7_Task7.2.3_Content_Wiring_and_Frontmatter.md`  
   - `docs/Phase7_Task7.2.4_JsonLd_and_SEO_Wiring.md`  
   - `docs/Phase7_Task7.2.5_Forms_CTAs_and_Lead_Flow.md`  
   - `docs/Phase7_Task7.2.6_Analytics_and_SearchConsole.md`  
   - `docs/Phase7_Task7.2.7_Indexation_and_Early_Query_Coverage.md`

Do not introduce new structures, templates, or SEO patterns that contradict these documents without updating the relevant spec and logging the change in `Phase_Decisions_Log.md`.

## 2. Tech stack (high level)

- Static site using Astro.  
- Content in markdown (under `content/`) with frontmatter defined by `Content_Contract.md`.  
- Hosted on Netlify (build and deploy).  
- Decap (Netlify CMS) is planned for editor workflow, but detailed CMS configuration is out of scope for this handoff.  
- Forms: Netlify Forms â†’ n8n webhook â†’ Bitrix24 CRM.  
- Analytics: Google Analytics 4 (GA4) + Google Search Console.

Details for each of these live in the Phase 7 spec docs; follow those rather than improvising.

## 3. Your implementation checklist (Phase 7)

Work through these tasks in order. Each task has its own spec file with more detail and a QA checklist.

1. **7.2.1 Repo and content structure**  
   - Align the repo structure, `content/` tree, and Astro routes with the IA and URL patterns in the Master Plan and IA_Map.  
   - See: `docs/Phase7_Task7.2.1_Repo_and_Content_Structure.md`

2. **7.2.2 Astro layouts and templates**  
   - Implement the shared layouts (Base, Home, Service, GEO, Guide, Contact) and any shared components.  
   - See: `docs/Phase7_Task7.2.2_Astro_Layouts_and_Templates.md`

3. **7.2.3 Content wiring and frontmatter**  
   - Wire the existing markdown content into the correct layouts.  
   - Ensure frontmatter fields match `Content_Contract.md` and are used correctly in templates.  
   - See: `docs/Phase7_Task7.2.3_Content_Wiring_and_Frontmatter.md`

4. **7.2.4 JSON-LD and SEO wiring**  
   - Implement SEO/meta and JSON-LD components as specified (WebSite, LocalBusiness, WebPage, Breadcrumb, FAQPage, HowTo, etc. where allowed).  
   - See: `docs/Phase7_Task7.2.4_JsonLd_and_SEO_Wiring.md`

5. **7.2.5 Forms, CTAs, and lead flow**  
   - Build the `/contact` form and any inline form variants or CTA components.  
   - Wire them to Netlify Forms â†’ n8n â†’ Bitrix24 with the specified field mapping and non-pushy confirmations.  
   - See: `docs/Phase7_Task7.2.5_Forms_CTAs_and_Lead_Flow.md`

6. **7.2.6 Analytics and Search Console**  
   - Add the GA4 base tag, event tracking for leads/CTAs/phone/email clicks, and confirm Search Console setup and sitemap.  
   - See: `docs/Phase7_Task7.2.6_Analytics_and_SearchConsole.md`

7. **7.2.7 Indexation and early query coverage**  
   - After launch, use Search Console to confirm indexation and review early queries.  
   - Make small internal-link and FAQ/guide tweaks per the spec; log findings.  
   - See: `docs/Phase7_Task7.2.7_Indexation_and_Early_Query_Coverage.md`

## 4. How to handle questions or needed changes

If you find something that:

- Contradicts the reality of the stack, OR  
- Would be significantly easier/better with a small adjustment,

do NOT silently change the architecture.

Instead:

1. Note what you want to change and why.  
2. Propose the change by:
   - Adding a short note to `Phase_Decisions_Log.md`, clearly marked as a proposal; or  
   - Returning a summary to Bradley explaining the suggested change.  
3. Only after approval, update:
   - The relevant Phase 7 spec doc(s), and  
   - Any affected code or content.

## 5. Definition of done (for you)

Your implementation work is considered complete when:

- All seven Phase 7 tasks have been implemented according to their spec docs.  
- QA checklists inside each spec doc are run and pass (or any exceptions are clearly documented).  
- The deployed site:
  - Renders all locked pages (Phase 5 and 6) correctly.  
  - Has working forms and lead flow.  
  - Sends GA4 events and appears in Search Console with an accessible sitemap.  
- Any deviations from the specs are documented in `Phase_Decisions_Log.md`.

If you need to summarize your work back to Bradley, include:

- Which tasks (7.2.1â€“7.2.7) are complete.  
- Any spec changes you made and why.  
- Any open issues or follow-up items you recommend for Phase 8+.
