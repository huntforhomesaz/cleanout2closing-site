# Phase 7 â€“ Claude Runbook (Execution Order)

Purpose:  
Give an AI/dev a simple, step-by-step way to implement Phase 7 using the existing specs, without drifting or reinventing the architecture.

This is NOT a new spec. It just tells you how to use the existing ones.

---

## 1. Global rules

1. Do not invent new architecture, file structure, or SEO patterns.
2. For each run, work on ONE task only (7.2.1, then 7.2.2, etc.).
3. Before writing code, always:
   - Say which task you are doing (e.g., â€œTask 7.2.1â€).
   - List which spec docs you are relying on.
   - Summarize your plan in 5â€“10 bullets.
4. After writing code, always:
   - List the files you created or modified.
   - List any open questions or assumptions you made.
5. If something in the specs seems impossible or contradictory, stop and explain the conflict instead of guessing.

Authority order (do not contradict):

1. `docs/C2C_MegaSite_MasterPlan.md`  
2. `docs/Phase_Decisions_Log.md`  
3. Phase 7 spec docs in `/docs`  
4. Support docs: `IA_Map.md`, `Page_Templates.md`, `Content_Contract.md`, `Brand_Guardrails.md`, `Assets_Inventory.md`

---

## 2. Execution order overview

You must work through Phase 7 tasks in this order:

1. 7.2.1 â€“ Repo and content structure  
2. 7.2.2 â€“ Astro layouts and templates  
3. 7.2.3 â€“ Content wiring and frontmatter  
4. 7.2.4 â€“ JSON-LD and SEO wiring  
5. 7.2.5 â€“ Forms, CTAs, and lead flow  
6. 7.2.6 â€“ Analytics and Search Console  
7. 7.2.7 â€“ Indexation and early query coverage (mostly post-launch / console work)

Each numbered section below tells you:

- Which docs to read
- What to do in that task
- What NOT to do in that task
- What to report back

---

## 3. Task-by-task instructions

### Task 7.2.1 â€“ Repo and content structure

Docs to read:

- `docs/C2C_MegaSite_MasterPlan.md` (focus on IA, URLs, Phase 5â€“6 page list)
- `docs/IA_Map.md`
- `docs/Phase7_Task7.2.1_Repo_and_Content_Structure.md`
- `docs/Content_Contract.md` (just enough to know how content files are organized)

What to do:

1. Align the repo structure to match the IA and spec:
   - Confirm/create base folders like `src/`, `content/`, `public/`, `docs/`.
2. Create the directory and file skeleton for all locked Phase 5 and Phase 6 pages in `content/`:
   - Service pillars, audience pages, core pages, GEO hubs, GEO services, and guides.
3. Ensure filenames and slugs match the URLs defined in the Master Plan and IA_Map.
4. Create minimal placeholder Astro pages/routes as needed (for example, basic `src/pages/*.astro` files) so the site can build.
5. Do not implement real layouts or styling; simple placeholder markup is fine.

What NOT to do in this task:

- Do not implement final layout components.
- Do not wire JSON-LD or SEO meta logic.
- Do not build forms, CTAs, or analytics.
- Do not alter the content text itself.

What to report:

- â€œFiles created/modified:â€ with a bullet list of paths.
- â€œOpen questions / decisions I need from you:â€ with any assumptions or conflicts.

---

### Task 7.2.2 â€“ Astro layouts and templates

Docs to read:

- `docs/Phase7_Task7.2.2_Astro_Layouts_and_Templates.md`
- `docs/Page_Templates.md`
- `docs/Brand_Guardrails.md` (for basic visual/voice constraints)

What to do:

1. Implement the shared Astro layouts and shell components described in the spec:
   - Base layout (global chrome)
   - Home layout
   - Service pillar layout
   - GEO service layout
   - Guide layout
   - Contact layout
2. Implement shared components needed for these layouts:
   - Header, footer, nav, basic CTA block shells.
3. Use simple, clean structure and placeholder areas for content.
4. Do not wire real markdown content or JSON-LD yet; just ensure slots/props exist where the next tasks can plug in.

What NOT to do:

- Do not change the repo structure defined in 7.2.1.
- Do not wire frontmatter-to-layout logic (thatâ€™s 7.2.3â€™s primary goal).
- Do not add JSON-LD, SEO meta tags, or analytics scripts.

What to report:

- List of layouts and components created.
- Any assumptions about naming, props, or slots.

---

### Task 7.2.3 â€“ Content wiring and frontmatter

Docs to read:

- `docs/Phase7_Task7.2.3_Content_Wiring_and_Frontmatter.md`
- `docs/Content_Contract.md`
- `docs/Page_Templates.md` (for which page uses which layout)

What to do:

1. Wire markdown content in `content/` into the correct layouts.
2. Make sure each markdown file uses the frontmatter fields defined in `Content_Contract.md`.
3. Implement the logic in Astro pages/layouts to:
   - Read frontmatter.
   - Pass frontmatter values into layouts/components.
4. Confirm that each locked page from Phase 5â€“6:
   - Renders with the correct layout.
   - Shows the correct title/description pulled from frontmatter.
   - Has basic CTAs in the right spots (even if they are stubbed).

What NOT to do:

- Do not implement JSON-LD scripts (that is 7.2.4).
- Do not build final form markup or lead flow (7.2.5).
- Do not add analytics code (7.2.6).

What to report:

- Which pages are fully wired and which, if any, are not.
- Any frontmatter fields you had to infer.

---

### Task 7.2.4 â€“ JSON-LD and SEO wiring

Docs to read:

- `docs/Phase7_Task7.2.4_JsonLd_and_SEO_Wiring.md`
- `docs/Content_Contract.md` (for SEO-related frontmatter fields)

What to do:

1. Implement SEO/meta helper(s) that:
   - Set the `<title>` and `<meta name="description">` from frontmatter.
   - Handle canonical URLs and robots/noindex where specified.
2. Implement JSON-LD injection according to the spec:
   - Global: WebSite + LocalBusiness.
   - Per-page: WebPage + Breadcrumb.
   - Optional: FAQPage, HowTo, BlogPosting where allowed and supported by content.
3. Make sure JSON-LD uses data from frontmatter and does not contradict the Content_Contract.

What NOT to do:

- Do not change the underlying content just to fit schema.
- Do not add tracking scripts (GA4) here.
- Do not modify forms or CTAs.

What to report:

- Where the SEO/meta component is used.
- Example JSON-LD output for one or two key pages.

---

### Task 7.2.5 â€“ Forms, CTAs, and lead flow

Docs to read:

- `docs/Phase7_Task7.2.5_Forms_CTAs_and_Lead_Flow.md`
- `docs/Page_Templates.md` (for CTA locations)
- `docs/Brand_Guardrails.md` (tone and language constraints)
- Optionally `Content_Contract.md` for contact page expectations

What to do:

1. Build the `/contact` page form using the fields and patterns from the spec:
   - Netlify-compatible form attributes.
   - Required and optional fields as defined.
2. Implement CTA components and place them:
   - On home, service pillars, GEO pages, and guides where specified.
3. Wire Netlify Forms â†’ n8n â†’ Bitrix24 integration at least as:
   - Correct form name and hidden fields.
   - Clearly documented endpoints and payload structure.
   - Stubbed or environment-based URLs if secrets are not available.
4. Implement â€œthank youâ€ and error states matching the spec:
   - Non-pushy, clear about next steps.

What NOT to do:

- Do not invent new CTAs or hard-sell language that conflicts with Brand_Guardrails.
- Do not add analytics events here beyond basic hooks (actual GA4 wiring belongs to 7.2.6).

What to report:

- Form markup and where it lives.
- Which pages contain CTAs and what they link to.
- Any TODOs for the n8n/Bitrix piece if you had to stub.

---

### Task 7.2.6 â€“ Analytics and Search Console

Docs to read:

- `docs/Phase7_Task7.2.6_Analytics_and_SearchConsole.md`

What to do:

1. Add the GA4 base tag according to the spec:
   - Use an environment variable for the Measurement ID.
2. Implement event tracking:
   - `generate_lead` on successful form submissions.
   - CTA click events for key buttons.
   - Phone and email click events.
3. Ensure the site is ready for Search Console:
   - Sitemap route exists or is wired.
   - No unintended noindex/robots issues.

What NOT to do:

- Do not hard-code real GA IDs if not provided; use placeholders or env vars.
- Do not alter content purely for SEO here (that belongs in future phases).

What to report:

- Where GA4 is initialized.
- Which events are wired and how they are triggered.

---

### Task 7.2.7 â€“ Indexation and early query coverage

Docs to read:

- `docs/Phase7_Task7.2.7_Indexation_and_Early_Query_Coverage.md`

What to do (repo side):

1. Confirm sitemap and robots are set up to support Search Console work.
2. Ensure URLs and slugs line up with the Master Plan so Search Console data makes sense.

Most of this task is:

- Using Search Console and GA4 after launch to:
  - Confirm indexation.
  - Review early queries.
  - Tune internal links and FAQs.

What NOT to do:

- Do not attempt to script Search Console itself from the repo unless explicitly requested.
- Do not restructure URLs in this task.

What to report:

- Confirmation that the site is technically ready for Search Console usage.
- Any notes on where sitemap/robots live.

---

## 4. Standard response format (for every run)

At the end of every run, your reply should clearly include:

1. Which task you worked on (e.g., â€œTask 7.2.3 â€“ Content wiring and frontmatterâ€).  
2. A short summary of what you did.  
3. A section:

   - `Files created/modified:`  
     - `- path/to/file1`  
     - `- path/to/file2`  

4. A section:

   - `Open questions / decisions I need from you:`  
     - `- Question 1`  
     - `- Question 2`  

If you are not sure what to do, state your assumption and stop, instead of guessing or changing the architecture.
