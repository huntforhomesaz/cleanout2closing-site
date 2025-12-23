Cleanout2Closing Mega-Site Master Plan

Version 1.3 â€¢ Date: 2025-12-21

Document Role

This document serves three purposes:

Strategic master plan for the Cleanout2Closing mega site

Single source of truth for SEO, GEO, IA, and content decisions

Final handoff authority document for Claude to generate site design, templates, and first-pass content

Once all phases are complete, this document is considered design-complete and may be handed to Claude to implement the site without additional clarification.

How to use this document

This is the master blueprint for the Cleanout2Closing mega site.

It covers research, SEO, GEO, information architecture, page templates, and content creation in the right order.

Treat it as the source of truth in your repo at:

cleanout2closing-site/docs/C2C_MegaSite_MasterPlan.md

Every time you make a significant decision (scope, GEO, services, IA, templates), update this document first, then implement.

Assumed stack and context

Brand: Cleanout2Closing (consumer-facing)

Sister brand: AZ Probate Concierge (attorney/fiduciary-facing)

Role: Realtor-led estate transition and real estate sales service

Location: Tucson, AZ as primary market, with future Arizona expansion

Stack: Astro, Netlify, Decap CMS, JSON-LD/SEO baked into templates

This plan is written so that both ChatGPT and Claude can use it to:

Run research

Propose IA and content

Generate templates and first-pass pages

Without drifting away from the agreed scope.

High-level project goals
Business goals

Generate high-quality, ready-to-talk leads for:

Inherited property and probate situations

Senior transitions and downsizing

Vendor coordination and â€œcleanout to closingâ€ projects

Position Cleanout2Closing as:

The go-to local expert in Tucson for estate property transitions.

A Realtor-led solution that coordinates everything, not just the sale.

A trustworthy, no-pressure resource for families and out-of-state owners.

SEO/GEO goals

Own â€œTucson + estate transitionâ€ style queries before going wide.

Structure the site so we can scale to:

Other Arizona cities and regions

National, long-tail content that still supports local work

Build a GEO/SEO foundation that can later support:

â€œHow toâ€ guides

Checklists

Attorney/fiduciary resources

Local neighborhood/area pages related to estates and transitions

User experience goals

Make it very clear who we help and how it works, in plain language.

Make it easy for overwhelmed visitors to:

Understand the process from cleanout to closing

See that we coordinate vendors and the sale

Reach out without feeling pressured

Provide different entry points:

â€œI inherited a house. Where do I start?â€

â€œMy parent is moving into assisted living.â€

â€œIâ€™m out of state and need help with a Tucson property.â€

â€œIâ€™m a Realtor/attorney/fiduciary looking for a partner.â€

Positioning summary (for reference)

Cleanout2Closing is the consumer-facing sister brand to AZ Probate Concierge.

It is a Realtor-led estate transition service that:

Helps families, trustees, and out-of-state owners handle properties that need more than a simple sale.

Coordinates vendors, cleanout, property preparation, and the actual real estate transaction.

Provides one accountable point of contact from cleanout to closing.

This is not:

A junk removal company

A moving company

An estate sale company

A labor crew

A legal or tax advisory firm

The brand sits at the intersection of:

Estate transition and vendor coordination

Licensed real estate sales and negotiation

Compassionate, practical help for overwhelmed families

Assumed constraints and non-negotiables

No overpromising national scale in Phase 1.

No positioning as a non-Realtor â€œestate solutions company.â€

Must maintain compliance with real estate advertising rules (brokerage, disclaimers, etc.).

Must avoid implying that we provide legal, tax, or fiduciary advice or services.

Brand voice is:

Plain-spoken

Grounded

Calm, but not flat

Focused on clarity and relief, not hype

Project phases overview

Phase numbering reflects actual work completed to date.

Phase 1 â€“ Foundation and inputs (Complete)
Consolidate what already exists, decide realistic 6-month scope (GEO + services), lock brand summary and core service definitions.

Phase 2 â€“ Market and competitor research (Complete)
Identify top national and local competitors, extract patterns in messaging/IA/search terms, define specific SEO/GEO targets.

Phase 3 â€“ Information architecture and templates (Complete)
Design the site map and routing strategy, define page types and templates, connect IA to Decap collections and JSON-LD types.

Phase 4 â€“ Content planning and outlines (Complete)
Define content priorities for the first 3â€“6 months, create outlines for core pages and initial GEO/pillar pages, map topics to target queries and user intents.

Phase 4.5 â€“ Content contract finalization (Complete)
Finalize Content_Contract.md (frontmatter, schema rules, internal links, compliance).

Phase 5 â€“ Content drafting and assembly (Complete)
Draft first-pass content for core pages and persona pages; refine to on-brand, compliant copy.

Phase 6 â€“ GEO and service-area content (Complete)
Extend Phase 5 core into Tucson + Green Valley GEO/service-area clusters and Tucson-focused guides.

Phase 7 â€“ Implementation and QA (Not started)
Wire content and templates into Astro/Decap, JSON-LD, forms, and internal links; run QA.

Phase 8 â€“ Launch and iterate (Not started)
Soft launch, monitor performance, adjust based on early data.

Phase 1 â€“ Foundation and inputs
1.1 Goals

Centralize what already exists.

Define scope for first 6 months so we do not boil the ocean.

1.2 Tasks

[ ] Collect and list existing assets (record details in Assets_Inventory.md):

AZ Probate Concierge site content

Any current C2C copy, notes, logo decisions, and brand docs

Cleanout2Closing and AZ Probate Concierge logo files (AI, PNG, SVG, PDF or similar)

Cleanout2Closing and AZ Probate Concierge business card design files and exports

AZ Probate Concierge brochure (attorney/professional-facing tri-fold)

This Mega-Site Master Plan and related structural docs (Existing_Copy_Dump.md, Content_Contract.md, IA_Map.md, Page_Templates.md, Phase_Decisions_Log.md)

[ ] Decide 6-month scope for:

Primary geographic focus (Tucson plus maybe one or two additional markets)

Primary service lines (inheritance, senior transitions, vendor coordination)

Phase 1 Decisions

Status: Complete â€“ 2025-12-21

Decisions recorded from Phase 1 (Foundation and inputs):

For at least the first 6 months, Cleanout2Closing will focus on estate property transition services for properties in Tucson, Arizona, rather than pursuing broad national service claims.

Cleanout2Closingâ€™s primary service scenarios are probate property, trust sales, inherited property, senior transitions, family properties with multiple decision makers, and Tucson properties owned by out-of-state clients.

Cleanout2Closingâ€™s core service lines for the first 6 months are: estate cleanout coordination, vendor scheduling and oversight, property preparation for sale, secure access management, documentation and progress reporting, and Realtor-led guidance through pricing, marketing, negotiation, and escrow.

Cleanout2Closing operates as a Realtor-led estate transition coordination service and single point of accountability from cleanout to closing, not as a labor crew or stand-alone vendor.

Cleanout2Closing will coordinate and oversee qualified vendors for on-site work, but will not perform junk removal, moving, or estate sale labor directly.

Cleanout2Closing will not provide legal, tax, accounting, or fiduciary services, and will not act as executor, fiduciary, or attorney; those roles remain with appropriate professionals.

SEO and content efforts in the first 6 months will prioritize Tucson-focused and long-tail estate transition queries (including probate, trust, inherited, senior transition, and out-of-state owner problems) instead of national head terms.

Additional Arizona GEO pages beyond Tucson and broader state or national coverage will be deferred until the core Tucson structure and content are live and stable.

1.3 Recommended LLM mode and prompt

Model: ChatGPT, GPT-5.1 Thinking, browsing OFF.

Prompt to use (Phase 1 â€“ Task 1.1):

[Keep the long â€œPhase 1 â€“ Task 1.1 Prompt (Exact)â€ block exactly as in your current file; itâ€™s already correct and doesnâ€™t depend on Phase 7, so Iâ€™m not repeating it here to save space when you paste.]

Phase 2 â€“ Market and competitor research

We want to know what top-ranking competitors are doing for:

Estate cleanout services

Senior transition and downsizing

Inherited property real estate guides and landing pages

â€œCleanout to closingâ€ style concierge services

2.1 Goals

Identify main national players and patterns in messaging and site structure.

Identify which services and angles are most visible in Google for:

Probate/inherited/estate properties

Senior transitions

Vendor coordination â€œconciergeâ€ services

Make sure our plan is realistic for:

Ranking in Tucson and Arizona

Supporting future expansion in a way that doesnâ€™t look like copycat content

2.2 Tasks

[ ] Identify competitors and comparison targets:
Search for combinations like:

â€œTucson estate cleanout and saleâ€

â€œsell inherited house Tucsonâ€

â€œsenior transition services Tucsonâ€

â€œprobate real estate services + city namesâ€

â€œestate cleanout to closingâ€ / â€œestate transition conciergeâ€

Capture:

Top 3â€“5 national players in estate cleanout/transition

Top 3â€“5 regional or local Tucson/Arizona services that overlap with:

Estate cleanouts

Senior transitions

Probate/inherited home sales

Vendor coordination services

[ ] Analyze their positioning and messaging:

What problems do they emphasize?

What outcomes do they promise?

How do they structure their home and service pages?

What FAQs and objections do they address?

[ ] Analyze their GEO/SEO approach:

Which cities/regions do they target?

Do they use state-level pages, city pages, or neighborhood pages?

What kinds of long-tail queries are clearly being targeted?

[ ] Summarize findings into:

A narrative summary of patterns and gaps

A short list of â€œnon-negotiableâ€ topics we must cover

A list of GEO/SEO opportunities that seem under-served

Phase 2 Decisions

Status: Complete â€“ 2025-12-21

We will treat three main competitor groups as reference points: (1) national senior/estate transition vendors (e.g., Caring Transitions, WayForth, NASMM-style move managers), (2) local Tucson/Southern Arizona service vendors (senior movers, junk removal, estate cleanout providers, estate sale companies), and (3) probate/inherited-property Realtors and CPRES-branded agents.

Cleanout2Closingâ€™s differentiation is confirmed as a Realtor-led â€œcleanout to closingâ€ concierge service that coordinates vendors and the real estate sale as one accountable point of contact, rather than acting as a labor contractor or a traditional Realtor who only handles the listing and escrow.

We will explicitly position C2C as separate from estate sale companies, junk removal/moving crews, and generic CPRES agents by clearly stating boundaries (we coordinate vendor work and documentation but do not perform labor services or provide legal/tax/fiduciary advice).

Tucson remains the primary GEO focus for SEO and content in the near term, targeting estate transitionâ€“related queries (inherited/probate properties, senior transitions, estate cleanouts) before expanding to nearby senior/probate-heavy areas such as Green Valley, Sahuarita, Oro Valley, Vail, and Catalina.

The C2C site must cover a defined set of non-negotiable topics, including: (1) what â€œcleanout to closingâ€ means in Tucson, (2) a plain-English overview of the probate sale journey in Pima County, (3) the differences between estate cleanout, estate sale, junk removal, and repairs (who does what / who pays), (4) options for selling an inherited house in Tucson (as-is vs light project vs larger rehab), and (5) specific guidance for out-of-state owners, heirs, seniors and their families, and trustees/PRs.

Full competitor details, patterns, and topic lists are documented in Phase2_Competitor_Research.md and should be treated as the authoritative research record for future IA and content decisions.

2.4 Recommended LLM mode and prompt

Model: ChatGPT, GPT-5.1 Thinking with browsing ON.

[Keep your existing Phase 2 prompt block as-is.]

Phase 3 â€“ Information architecture and templates
3.1 Goals

Turn research and scope into a practical, scalable IA.

Make sure the structure works for:

Core â€œwho we help / what we doâ€ pages

GEO pages (Tucson first, Arizona next)

Future â€œhow toâ€ / checklist / FAQ content

Connect IA to Decap collections and JSON-LD types.

3.2 IA skeleton (finalized)

Top-level navigation (core):

Home

How It Works

Services

Service Areas

Guides

About

Reviews (optional, depending on assets)

Contact

Service pillars:

Inherited and Probate Property

Senior Transitions and Downsizing

Cleanout and Vendor Coordination

For Realtors and Professionals

Personas (under /personas or equivalent):

For Heirs and Personal Representatives

For Seniors and Their Families

For Out-of-State Owners

For Trustees/PRs

For Realtors and Professionals

GEO structure:

/service-areas â€“ overview

/az â€“ state hub

/az/tucson â€“ Tucson hub

/az/green-valley â€“ Green Valley hub

Future hubs reserved (e.g., Sahuarita, Oro Valley, Vail, Catalina)

Guides:

/guides/inherited-house-tucson-what-to-do

/guides/pima-county-probate-property-timeline

/guides/assisted-living-move-tucson-what-happens-to-the-house

Future guides follow same pattern.

3.3 Template types

(Defined fully in Page_Templates.md.)

Home Page Template

Service Pillar Page Template

GEO Service Page Template

Guide / Blog Post Template

Contact / Free Strategy Call Template

3.4 JSON-LD and AEO integration (high level)

Use JSON-LD types:

Organization/LocalBusiness for the brand

WebSite and WebPage for key pages

FAQPage for FAQ sections

HowTo for procedural content

BlogPosting for article-style guides

BreadcrumbList for navigation

Phase 3 Decisions

Status: Complete â€“ 2025-12-21

The Cleanout2Closing site map will use a simple core navigation: Home, How It Works, Services, Service Areas, Guides, About, Reviews, Contact. Service pillars, persona pages, GEO hubs, and guides sit under these core entries.

Service pillars are locked for the initial build as:

Inherited and Probate Property

Senior Transitions and Downsizing

Cleanout and Vendor Coordination

For Realtors and Professionals

Persona content will live under /personas (heirs, trustees, seniors and adult children, fiduciaries, Realtors and professionals) and will always link upward to a primary service pillar instead of replacing service pages.

GEO architecture is GEO-first with a state hub for Arizona (/az), city/area hubs for Tucson and nearby secondary markets (/az/tucson, /az/green-valley, /az/sahuarita, /az/oro-valley, /az/vail, /az/catalina), and service pages that follow the pattern /az/{city}/estate-cleanout-and-home-sale plus related variants for senior transitions and out-of-state owners.

For the first 6 months, Tucson is the only city with full depth (state hub, city hub, and multiple service pages). Other cities are earmarked for months 3â€“6 but will not be built until the Tucson core is live and stable.

The initial guide and FAQ library will focus on non-negotiable topics identified in Phase 2, including: what cleanout to closing means in Tucson, what to do with an inherited house in Tucson, a plain-English Pima County probate sale timeline, differences between estate cleanout, estate sale, junk removal, and repairs, and what happens to the house when a parent moves into assisted living.

IA_Map.md is updated to reflect this structure, grouped into Core, Service Pillars, Personas, GEO, and Guides. Future structural changes must keep GEO-first organization and be logged in Phase_Decisions_Log.md the same day.

Phase 4 â€“ Content planning and outlines
4.1 Goals

Define what we will actually publish in the first 3â€“6 months.

Connect content directly to:

Business goals (lead generation, trust, referrals)

SEO/GEO goals (Tucson estate transitions, long-tail queries)

User needs (overwhelmed families, seniors, out-of-state owners)

4.2 Tasks

[ ] Define content priority list for first 3 months:

Home

How It Works

Services

AZ hub (/az) and Tucson hub (/az/tucson)

Contact

At least 1â€“3 resource/FAQ/checklist pieces that directly answer:

â€œI inherited a house in Tucson. What do I do?â€

â€œMy parent is moving into assisted living. What happens to the house?â€

â€œI live out of state and need help with a Tucson property.â€

[ ] Define secondary content for months 4â€“6:

Additional GEO detail pages as needed

Additional how-to/checklist content

Case studies as they become available

[ ] Create outlines for each core page and priority resource:

Section headings

Key messages

Primary and secondary CTAs

[ ] Map content to queries and phases of the customer journey.

Phase 4 Decisions

Status: Complete â€“ 2025-12-21

Locked a small Page Template Library for Cleanout2Closing in docs/Page_Templates.md.

Defined five core templates:

Home Page Template

Service Pillar Page Template

GEO Service Page Template

Guide / Blog Post Template

Contact / Free Strategy Call Template

Each template now specifies:

Section order (bullet list of sections in order)

Example headings in Bradleyâ€™s brand voice

Notes to developers for hero, grids/cards, step layouts, FAQ accordions, and CTA placement

All future pages must select one of these templates before drafting content.

FAQs and â€œWhat I do / What I donâ€™t doâ€ boundary sections are required where specified and will be governed by Content_Contract.md in Phase 4.5.

No structural changes to navigation, pillars, or GEO architecture were made in Phase 4; templates are aligned to the IA locked in Phase 3.

Any change to these templates requires:

Updating docs/Page_Templates.md

Logging a new entry in Phase_Decisions_Log.md

Confirming continued alignment with C2C_MegaSite_MasterPlan.md.

Phase 4.5 â€“ Content contract and rules

(You already have this defined; keeping the key bits.)

4.5.4 Rules

No pillar or GEO content may be drafted before Phase 4.5 is complete.

Claude and any LLM must follow the finalized Content Contract exactly.

Content_Contract.md is now finalized and enforceable as of 2025-12-21.

Phase 4.5 Decisions

Status: Complete â€“ 2025-12-21

Finalized the Cleanout2Closing Content Contract in docs/Content_Contract.md.

Defined a single set of frontmatter requirements for all pages (title, description, slug, date, updated, page_type, template, tags, main_entity, canonical_url, optional hero_image and noindex) plus GEO and FAQ frontmatter for relevant pages.

Mapped each page_type (home, service_pillar, geo_service, guide, contact) to its locked template in Page_Templates.md and defined minimum content requirements (word counts, FAQs, proof blocks, disclaimers, and internal links).

Established structured data rules tying each page_type to allowed JSON-LD schema (LocalBusiness, WebSite/WebPage, BreadcrumbList, BlogPosting, FAQPage, HowTo where appropriate).

Locked internal linking requirements so that Home, pillars, GEO pages, guides, and Contact cross-link in a consistent way that reinforces the IA.

Codified compliance requirements (no legal/tax advice, no labor claims, clear Realtor/brokerage disclosure, and required disclaimers) in the contract.

4.5.5 Recommended LLM mode and prompt

Model: ChatGPT, GPT-5.1 Thinking, browsing OFF.

[Keep your existing Phase 4.5 prompt block.]

Phase 5 â€“ Content drafting and assembly
5.1 Goals and canonical page set

The Phase 5 non-GEO core page set for launch is now locked and drafted.

Canonical page lineup and filenames:

Home (home.md)

How It Works (how-it-works.md)

Services overview (services.md)

Inherited and probate property (service-inherited-and-probate-property.md)

Senior transitions and downsizing (service-senior-transitions.md)

Trustee and personal representative property support (service-trustee-support.md)

Out-of-state owner and heir support (service-out-of-state-owners.md)

Cleanout and vendor coordination (service-cleanout-and-vendor-coordination.md)

For Realtors and professionals (for-realtors-and-professionals.md)

For heirs and personal representatives (for-heirs-and-personal-representatives.md)

For seniors and their families (for-seniors-and-their-families.md)

Frequently asked questions (faqs.md)

About (about.md)

Contact (contact.md)

These pages are considered first-pass complete as of 2025-12-21 and will be refined, not structurally changed, unless a new decision is recorded in Phase_Decisions_Log.md.

5.2 Tasks

[ ] Draft content for each core page based on outlines.
[ ] Draft initial resource/FAQ/checklist content.
[ ] Review for:

Clarity

Tone

Compliance

Avoiding overpromises

Phase 5 Decisions

Status: Complete â€“ 2025-12-21

Phase 5 pillar and core service content is drafted and locked to the page lineup listed above and in Phase_Decisions_Log.md.

These pages now serve as the canonical non-GEO core for Cleanout2Closing. Future work in this phase focuses on refinement (voice, CTAs, internal links, microcopy) rather than adding or removing core pages.

Any structural changes to the core roster must be recorded as a new decision in Phase_Decisions_Log.md.

Phase 6 â€“ GEO and service-area content

Extend the Phase 5 canonical non-GEO core into localized GEO/service-area content.
Start with Arizona â†’ Tucson as the anchor market, then add a proof-of-concept cluster for Green Valley.
Lock a reusable pattern for future GEO markets (hub + local service pages + guides).

6.1 Goals

Extend the Phase 5 canonical non-GEO core into a small but complete GEO/service-area cluster.

Make Tucson the anchor GEO market with a repeatable pattern (state hub â†’ city hub â†’ local services â†’ supporting guides).

Validate Green Valley, AZ as the first â€œretirement-communityâ€ expansion market without overbuilding.

Keep all GEO work aligned with IA_Map.md, Page_Templates.md, Content_Contract.md, and Brand_Guardrails.md.

6.2 Deliverables

The following Phase 6 content assets are now drafted and live in the content/ tree:

Service-area spine

service-areas.md

Slug: /service-areas

Role: High-level service-areas overview and explainer.

Arizona + Tucson core GEO cluster

az.md

Slug: /az

Role: Arizona hub for C2C; explains state-level footprint and links into Tucson/Green Valley.

az-tucson.md

Slug: /az/tucson

Role: Tucson hub; links to Tucson service-area pages and guides.

az-tucson-estate-cleanout-and-home-sale.md

Slug: /az/tucson/estate-cleanout-and-home-sale

Role: Tucson GEO service page for inherited/estate property plus cleanout and sale.

az-tucson-senior-transition-and-home-sale.md

Slug: /az/tucson/senior-transition-and-home-sale

Role: Tucson GEO service page for senior transitions and assisted-living moves.

az-tucson-out-of-state-owner-help.md

Slug: /az/tucson/out-of-state-owner-help

Role: Tucson GEO service page for out-of-state owners and heirs.

Tucson-supporting guides

inherited-house-tucson-what-to-do.md

Slug: /guides/inherited-house-tucson-what-to-do

Role: Plain-English â€œwhat now?â€ guide for inherited houses in Tucson.

pima-county-probate-property-timeline.md

Slug: /guides/pima-county-probate-property-timeline

Role: Pima County probate property sale timeline in plain English.

assisted-living-move-tucson-what-happens-to-the-house.md

Slug: /guides/assisted-living-move-tucson-what-happens-to-the-house

Role: Assisted-living move guide focused on Tucson and nearby areas.

Green Valley, AZ micro-cluster

az-green-valley.md

Slug: /az/green-valley

Role: Green Valley, AZ hub; explains why it is a primary retirement-market focus.

az-green-valley-senior-and-estate-home-sale.md

Slug: /az/green-valley/senior-and-estate-home-sale

Role: Combined senior-transition + estate/inherited home sale GEO service page.

az-green-valley-out-of-state-owner-help.md

Slug: /az/green-valley/out-of-state-owner-help

Role: GEO service page for out-of-state / snowbird owners with Green Valley homes.

6.3 Status

Status: Complete (2025-12-21).

Tucson GEO cluster pattern (hub + 3 local services + 3 guides) is locked as the base model for future markets.

Green Valley GEO cluster is locked as a â€œretirement-communityâ€ variant (hub + 2 services) and treated as a primary service area.

No additional GEO markets may be added without:

Updating this Master Plan,

Logging a new decision in Phase_Decisions_Log.md, and

Extending IA_Map.md and Assets_Inventory.md accordingly.

6.4 Decisions

Tucson is confirmed as the anchor GEO market for Cleanout2Closing; all future GEO work must reuse the Tucson pattern unless explicitly changed in a new decision.

Green Valley, AZ is elevated to a primary service area with its own hub and service pages, not treated as a â€œlater maybeâ€ market.

The standard C2C GEO pattern is now:

One service-areas overview page (/service-areas)

State hub (/az)

City/area hubs (e.g. /az/tucson, /az/green-valley)

Local GEO service pages (estate/inherited, senior transition, out-of-state owners)

Supporting guides that sit under /guides/ but are tied to specific GEO hubs.

All Phase 6 content must remain aligned with:

IA_Map.md (site structure),

Page_Templates.md (layout and pattern),

Content_Contract.md (frontmatter, schema, FAQs, and â€œwhat I do / donâ€™t doâ€), and

Brand_Guardrails.md (voice and visual references).

Implementation & QA (templates wired into Astro/Decap, JSON-LD, forms, internal links) is moved to Phase 7; Phase 6 is content + IA only.

Phase 7 â€“ Launch and iterate

7.1 Goals

Launch without drama.

Start getting data.

Treat Phase 7 as the implementation and launch phase to be executed primarily by Claude (or another dev) using the task-spec docs created in /docs.

7.2 Tasks

7.2.1 Repo and content structure (spec complete; implementation pending)

- Authority doc: `docs/Phase7_Task7.2.1_Repo_and_Content_Structure.md`
- Lock the repo layout and content tree for `cleanout2closing-site`, including:
  - `content/` directory structure for core pages, service areas, GEO pages, and guides.
  - Alignment between filenames, slugs, and the IA/URL patterns defined in this Master Plan and IA_Map.md.
  - Basic `src/pages/` route shell structure and `public/images/` conventions.
- Status: Spec drafted in /docs; build/implementation to be performed by Claude.

7.2.2 Astro layouts and templates (spec complete; implementation pending)

- Authority doc: `docs/Phase7_Task7.2.2_Astro_Layouts_and_Templates.md`
- Implement shared Astro layouts:
  - BaseLayout, HomeLayout, ServicePillarLayout, GeoServiceLayout, GuideLayout, ContactLayout.
- Ensure layouts respect Brand_Guardrails.md and Page_Templates.md, including typography, spacing, and CTA placement.
- Status: Spec drafted in /docs; build/implementation to be performed by Claude.

7.2.3 Content wiring and frontmatter (spec complete; implementation pending)

- Authority doc: `docs/Phase7_Task7.2.3_Content_Wiring_and_Frontmatter.md`
- Wire markdown content files from `content/` into the Astro layouts, using the Content_Contract.md frontmatter fields.
- Confirm that all locked Phase 5 and Phase 6 pages render correctly with titles, descriptions, JSON-LD hooks, and CTAs.
- Status: Spec drafted in /docs; build/implementation to be performed by Claude.

7.2.4 JSON-LD and SEO wiring (spec complete; implementation pending)

- Authority doc: `docs/Phase7_Task7.2.4_JsonLd_and_SEO_Wiring.md`
- Implement:
  - Global WebSite + LocalBusiness schema.
  - Per-page WebPage + BreadcrumbList schema.
  - Optional FAQPage, HowTo, BlogPosting schema where allowed by Content_Contract.md.
  - Shared SEO/meta component for titles, descriptions, canonical URLs, and robots/noindex based on frontmatter.
- Status: Spec drafted in /docs; build/implementation to be performed by Claude.

7.2.5 Forms, CTAs, and lead flow (spec complete; implementation pending)

- Authority doc: `docs/Phase7_Task7.2.5_Forms_CTAs_and_Lead_Flow.md`
- Implement form patterns and CTAs consistent with Page_Templates.md and Content_Contract.md, including:
  - Global Contact/Strategy Call form at `/contact`.
  - Inline forms or CTA blocks on key service and guide pages.
- Wire Netlify Forms â†’ n8n webhook â†’ Bitrix24 pipeline with:
  - Clear field mapping (situation type, GEO, page context, UTM parameters).
  - Thank-you states and â€œwhat happens nextâ€ messaging that are clear and non-pushy.
- Ensure all CTAs follow Brand_Guardrails (no hype, conversation-first, compliant language).
- Status: Spec drafted in /docs; build/implementation to be performed by Claude.

7.2.6 Analytics and Search Console (spec complete; implementation pending)

- Authority doc: `docs/Phase7_Task7.2.6_Analytics_and_SearchConsole.md`
- Confirm GA4 and Search Console configuration for `cleanout2closing.com`, including:
  - GA4 base tag, pageview tracking, and key events for forms, CTAs, and phone/email clicks.
  - Domain-level Search Console property and sitemap submission.
- Mark `generate_lead` events as conversions in GA4 and verify that website leads appear correctly.
- Status: Spec drafted in /docs; build/implementation to be performed by Claude.

7.2.7 Indexation and early query coverage (spec complete; implementation pending)

- Authority doc: `docs/Phase7_Task7.2.7_Indexation_and_Early_Query_Coverage.md`
- Monitor crawlability and indexation in Search Console:
  - Page indexing report for core pages and GEO/service content.
  - URL Inspection for key URLs (home, Tucson/Green Valley hubs, main services, guides).
- Review early search queries and internal link patterns:
  - Adjust internal links, FAQs, and guide sections to align with real search behavior.
- Status: Spec drafted in /docs; initial implementation/monitoring to be performed by Claude, with decisions logged in Phase_Decisions_Log.md.

7.3 Decisions

Status: In progress

- Phase 7 implementation is delegated primarily to Claude (or an equivalent dev/agent) using this Master Plan and the Phase 7 task-spec docs in `/docs` as authority.
- Tasks 7.2.1â€“7.2.7 are now documented at the spec level; no code, content wiring, or SEO/analytics changes should be made outside these specs without updating both this Master Plan and Phase_Decisions_Log.md.
- The next active work items before launch are:
  - Implement Tasks 7.2.1â€“7.2.7 in the `cleanout2closing-site` repo.
  - Run a QA pass across content, layouts, JSON-LD, forms/CTAs/lead flow, analytics, and Search Console indexation.
- Once implementation and QA are complete, Phase 7 can be marked â€œImplementation complete; ready for Phase 8 monitoring and iteration.â€


Phase 8 â€“ Launch and iterate
8. Implementation & Handoff

8.1 Who this plan is for

This Master Plan and the Phase 7 task-spec docs are written for:

- Bradley Hunt, as the owner and decision-maker for Cleanout2Closing.
- A developer or AI agent (such as Claude) responsible for implementing the site in the `cleanout2closing-site` repo.
- Any future collaborator who needs to understand how the site is structured and why it is built this way.

8.2 What is considered â€œsource of truthâ€

For implementation, the order of authority is:

1) This Master Plan (`docs/C2C_MegaSite_MasterPlan.md`)  
2) Phase_Decisions_Log.md (for dated overrides and clarifications)  
3) Phase 7 spec docs in `/docs`:
   - `Phase7_Task7.2.1_Repo_and_Content_Structure.md`
   - `Phase7_Task7.2.2_Astro_Layouts_and_Templates.md`
   - `Phase7_Task7.2.3_Content_Wiring_and_Frontmatter.md`
   - `Phase7_Task7.2.4_JsonLd_and_SEO_Wiring.md`
   - `Phase7_Task7.2.5_Forms_CTAs_and_Lead_Flow.md`
   - `Phase7_Task7.2.6_Analytics_and_SearchConsole.md`
   - `Phase7_Task7.2.7_Indexation_and_Early_Query_Coverage.md`

No structural, SEO, or form/CTA changes should be made that contradict these documents without:

- Updating the relevant Phase 7 spec doc(s), and  
- Logging the change in Phase_Decisions_Log.md.

8.3 What â€œdoneâ€ looks like for Phase 7

From an implementation standpoint, Phase 7 is complete when:

- The repo structure, content tree, and Astro layouts match the IA and URL patterns defined in this Master Plan and IA_Map.md.
- All locked Phase 5 and Phase 6 pages are wired into Astro with correct frontmatter, templates, JSON-LD, and CTAs.
- Forms and lead flow are fully functional:
  - `/contact` uses the standardized Contact/Strategy Call form.
  - Inline CTAs and any inline forms route through Netlify Forms â†’ n8n webhook â†’ Bitrix24, with all required fields and tags.
- GA4 and Search Console are correctly configured and receiving data:
  - `generate_lead` is marked as a conversion.
  - Search Console sees the sitemap, and key pages are indexable.
- The QA checklists in each Phase 7 spec doc are completed and any exceptions are noted.

Once these conditions are met, mark Phase 7 as:

> â€œImplementation complete; ready for Phase 8 monitoring and iterationâ€

in both this Master Plan and Phase_Decisions_Log.md.

8.4 How to hand this to a dev or AI agent

When handing off implementation to Claude or another developer:

1) Provide:
   - This Master Plan file.  
   - Phase_Decisions_Log.md.  
   - All Phase 7 task-spec docs in `/docs`.  

2) Instruct them explicitly:
   - Implement Tasks 7.2.1â€“7.2.7 exactly as described in the spec docs.  
   - Do not invent new structures, templates, or SEO patterns.  
   - If a change seems necessary, propose it and wait for approval before altering any spec or live structure.

3) Ask for:
   - A brief written summary of what was implemented.  
   - A note on any deviations from the specs.  
   - Confirmation that all QA checklists have been run and passed (or which items are still open).

This section should be kept in sync with any future changes to Phase 7 or to the technical stack.
