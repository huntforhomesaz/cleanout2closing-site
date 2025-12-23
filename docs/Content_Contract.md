\# Cleanout2Closing â€“ Content Contract



Status: Final â€“ 2025-12-21  

Phase: 4.5 â€“ Content Contract Finalization  



\## 1. Role of this document



This Content Contract defines the required structure, metadata, SEO rules, and compliance guardrails for all Cleanout2Closing (C2C) web content.



It is binding for:



\- All content created for cleanout2closing.com  

\- All AI-generated drafts (ChatGPT, Claude, or other LLMs)  

\- Any future writers, designers, or developers working on the site  



If there is a conflict:



1\. C2C\_MegaSite\_MasterPlan.md is the top authority on site-wide strategy and IA.  

2\. Brand\_Guardrails.md is the top authority on brand, voice, and visuals.  

3\. This Content\_Contract.md governs how individual pages are structured and published.  



No content may be published that violates this contract.



---



\## 2. Scope and dependencies



This contract applies to:



\- The Cleanout2Closing consumer site only (not AZ Probate Concierge).  

\- All pages that live under the IA defined in IA\_Map.md.  

\- All page types and templates defined in Page\_Templates.md.



It assumes:



\- Phase 2 (Market \& competitor research) is complete.  

\- Phase 3 (IA \& GEO architecture) is locked.  

\- Phase 4 (Page templates \& UX) is locked.  



If IA or templates change, this contract must be reviewed and updated the same day, with a new entry in Phase\_Decisions\_Log.md.



---



\## 3. Page types and templates



Every page must declare its page\_type and must conform to one of the locked templates in Page\_Templates.md.



\### 3.1 Allowed page types



\- `home` â€“ Home page  

\- `service\_pillar` â€“ Non-geo service pillars  

\- `geo\_service` â€“ GEO/location service pages  

\- `guide` â€“ Guides, checklists, and educational posts  

\- `contact` â€“ Contact / Free Strategy Call page  



\### 3.2 Template mapping



\- `home` â†’ Home Page Template  

\- `service\_pillar` â†’ Service Pillar Page Template  

\- `geo\_service` â†’ GEO Service Page Template  

\- `guide` â†’ Guide / Blog Post Template  

\- `contact` â†’ Contact / Free Strategy Call Template  



No additional page types or templates may be added without updating:



\- IA\_Map.md  

\- Page\_Templates.md  

\- This Content\_Contract.md  

\- Phase\_Decisions\_Log.md  



---



\## 4. Global content rules



These rules apply to all page types.



\### 4.1 Brand, voice, and pronouns



\- Voice and tone must follow Brand\_Guardrails.md.  

\- Primary voice is first-person singular (â€œI coordinateâ€, â€œI manageâ€).  

\- â€œWeâ€ is used only for:

&nbsp; - Coordinated vendors (â€œwe get the vendors lined upâ€)  

&nbsp; - Brokerage/team mentions and required disclosures  

&nbsp; - Legal or compliance statements  



No content may contradict locked messaging pillars:



\- Relief from overwhelm  

\- One accountable point of contact  

\- Clear process and sequencing  

\- Local expertise and execution  

\- Completion through escrow  



\### 4.2 Prohibited claims and misrepresentation



Content may NOT:



\- Claim or imply that Bradley provides legal, tax, or accounting advice.  

\- Claim or imply that C2C performs labor services (junk removal crews, packing, daily caregiving).  

\- Guarantee outcomes, timelines, or sale prices.  

\- Suggest that Bradley acts as executor, fiduciary, or attorney.  

\- Invent credentials, awards, or designations not verifiable elsewhere.  



All such items must be phrased as:



\- Coordination (â€œI coordinate X, Y, Zâ€)  

\- Oversight (â€œI oversee the processâ€)  

\- Communication (â€œI keep you and your attorney informedâ€)  



\### 4.3 Copy style rules



\- Plain language. Short, clear sentences.  

\- No buzzwords, no corporate jargon, no hype.  

\- No em dashes. Use simple punctuation.  

\- No scare tactics, countdowns, or artificial urgency.  

\- CTAs must invite conversation, not pressure commitment.



\### 4.4 Local and GEO rules



\- Tucson is the primary GEO. References to other cities must follow IA\_Map.md.  

\- GEO pages must not suggest services are offered outside the documented service areas.  

\- Guides with general information must still clarify when examples are Tucson/Pima-specific.



---



\## 5. Frontmatter schema



Every content file must include the following frontmatter fields unless explicitly marked as optional.



\### 5.1 Core frontmatter (all pages)



Required:



\- `title` (string)  

&nbsp; - Human-readable page title.  

&nbsp; - Should match or closely mirror the on-page H1.  

&nbsp; - Recommended length: 50â€“65 characters.



\- `description` (string)  

&nbsp; - Meta description used for SEO.  

&nbsp; - Recommended length: 120â€“160 characters.  

&nbsp; - Must be an honest summary, not keyword stuffing.



\- `slug` (string)  

&nbsp; - URL path segment or full path (implementation-specific).  

&nbsp; - Must align with IA\_Map.md (e.g., `/services/inherited-and-probate-property`).  



\- `date` (string, `YYYY-MM-DD`)  

\- `updated` (string, `YYYY-MM-DD`)  



\- `page\_type` (string)  

&nbsp; - One of: `home`, `service\_pillar`, `geo\_service`, `guide`, `contact`.



\- `template` (string)  

&nbsp; - One of: `home`, `service\_pillar`, `geo\_service`, `guide`, `contact`.  

&nbsp; - Must match Page\_Templates.md.



\- `tags` (array of strings)  

&nbsp; - 2â€“8 tags per page.  

&nbsp; - Use short, descriptive tags (e.g., `probate`, `senior-transition`, `cleanout`, `out-of-state`, `tucson`, `guide`).  



\- `main\_entity` (string)  

&nbsp; - Short identifier of the primary thing the page is about.  

&nbsp; - Example: `inherited\_house\_tucson`, `senior\_transition\_tucson`.



\- `canonical\_url` (string)  

&nbsp; - Full absolute URL of the preferred version of the page.  

&nbsp; - Example: `https://cleanout2closing.com/az/tucson/estate-cleanout-and-home-sale`.



Optional but recommended:



\- `hero\_image` (string)  

&nbsp; - Path or URL for the main hero image / background.



\- `noindex` (boolean, default `false`)  

&nbsp; - Use `true` only for experimental, duplicate, or legally sensitive pages that should not be indexed.



\### 5.2 GEO frontmatter



Required when `page\_type = "geo\_service"` or when a `guide` is explicitly geo-specific:



\- `geo` (object)

&nbsp; - `state` (string; e.g., `AZ`)  

&nbsp; - `city` (string; e.g., `Tucson`)  

&nbsp; - Optional `metro` or `region` if needed later.



Example:



```yaml

geo:

&nbsp; state: AZ

&nbsp; city: Tucson

5.3 FAQ frontmatter (faq\_block)

Pages with FAQs (Home, Service Pillar, GEO Service, Guides, Contact) must define FAQs in frontmatter.



faq\_block (array of objects)



Each FAQ object:



question (string)



answer (string)



audience (string; e.g., heir, trustee, senior, attorney, realtor, general)



schema (boolean; whether this QA should be included in FAQPage JSON-LD)



Example:



yaml

Copy code

faq\_block:

&nbsp; - question: "Do you buy houses for cash?"

&nbsp;   answer: "No. Iâ€™m a licensed Realtor. My role is to coordinate cleanout, vendors, and a traditional or investor sale that fits your goals."

&nbsp;   audience: "heir"

&nbsp;   schema: true

If a page uses FAQ accordions in the UI, those FAQs must be present in faq\_block.



6\. Page-type minimums and required elements

These rules sit on top of the structural templates in Page\_Templates.md. Section order is defined in that file; this contract defines minimum content and required elements per type.



6.1 Home (page\_type = "home")

Minimums:



Word count: 800â€“1,400 words.



FAQs: at least 3 FAQs in faq\_block.



Proof: at least one testimonial or proof block.



Required content elements (mapped to sections in the Home template):



Clear statement of the core promise (â€œfrom cleanout to closingâ€, Tucson context).



A â€œWhat situation are you in?â€ strip that clearly names the six scenarios:



Probate property



Trust sale



Inherited property



Senior transition



Family property with multiple decision-makers



Out-of-state owner



A 3â€“4 step â€œHow it worksâ€ process.



Short â€œWho I helpâ€ persona summary (heirs, trustees, seniors/adult children, out-of-state owners, professionals).



â€œWhy work with meâ€ section that reinforces Realtor-led, Tucson-local, estate transition positioning.



Service area overview that clearly prioritizes Tucson and links to /service-areas, /az, and /az/tucson.



Final CTA with low-pressure language (â€œtell me what youâ€™re facingâ€, â€œmap out your optionsâ€).



6.2 Service Pillar (page\_type = "service\_pillar")

Applies to:



/services/inherited-and-probate-property



/services/senior-transitions-and-downsizing



/services/cleanout-and-vendor-coordination



/services/for-realtors-and-professionals



Minimums:



Word count: 1,000â€“1,800 words.



FAQs: 4â€“8 FAQs in faq\_block.



At least one short case example or concrete scenario callout.



Required content elements:



Clear explanation of who this pillar is for (â€œIs this you?â€ section).



â€œCommon situations I handleâ€ mapped to the six scenarios where relevant.



A stepwise description of â€œHow I help from cleanout to closingâ€ (3â€“5 steps).



A â€œWhat I handle vs what you/your attorney handleâ€ boundary section that:



Lists tasks C2C coordinates or oversees.



Lists tasks that remain with attorneys, fiduciaries, PRs, or vendors.



Includes a short legal/tax disclaimer (see section 8).



â€œWhat you can expectâ€ section covering:



Communication frequency



Updates and documentation



Coordination style



Proof and/or case examples tied to this pillar (if direct real-estate proof is thin, legacy business proof may be used with clear labeling).



Direct internal links to:



Relevant GEO pages (e.g., /az/tucson/estate-cleanout-and-home-sale).



At least one supporting guide (e.g., inherited house guide for the Inherited/Probate pillar).



Contact page.



6.3 GEO Service (page\_type = "geo\_service")

Applies to:



/az/tucson/estate-cleanout-and-home-sale



/az/tucson/senior-transition-and-home-sale



/az/tucson/out-of-state-owner-help



Future /az/{city}/â€¦ pages as IA expands.



Minimums:



Word count: 800â€“1,400 words.



FAQs: 3â€“6 FAQs in faq\_block.



At least one locally grounded example (street type, neighborhood type, or typical scenario).



Required content elements:



H1 and on-page copy must clearly include service + city (e.g., â€œEstate cleanout and home sale in Tucson, AZâ€).



â€œLocal problem contextâ€ section describing why this is hard specifically in that city.



â€œWhat I handle in {City}â€ list describing:



Property and contents issues.



Vendor and scheduling realities.



Sale-related tasks and coordination.



â€œHow the process works hereâ€ section that adapts the pillar process to local reality.



â€œWhere I serve around {City}â€ section that:



Names nearby communities and neighborhoods.



Only lists locations consistent with IA\_Map.md.



Local FAQs that:



Reflect city-specific questions (HOAs, older homes, snowbird patterns, etc.).



Avoid generic, non-local filler.



Internal links:



Must link back to the relevant service pillar.



Must link to /service-areas and/or /az.



Must link to /contact.



6.4 Guide (page\_type = "guide")

Minimums:



Word count: 1,200â€“2,000 words for core guides.



FAQs: 3â€“5 FAQs in faq\_block.



At least 3 major step sections using H2s.



Required content elements:



A clear, search-aligned H1 (e.g., â€œWhat to do with an inherited house in Tucson, AZâ€).



Short empathetic intro that states what the guide will help with.



â€œShort answer if youâ€™re in a hurryâ€ / TL;DR callout near the top.



â€œWhen this guide will be helpfulâ€ section clarifying who it applies to.



3â€“7 â€œStepâ€ or â€œPhaseâ€ sections that give concrete actions.



A small â€œHow I can help in this situationâ€ section that:



Clearly distinguishes Bradleyâ€™s role from attorneys/fiduciaries.



Links to the relevant pillar and GEO pages.



Local nuances section when geo-specific (e.g., Pima County probate timelines).



Internal links:



At least:



1 link to a relevant pillar page.



1 link to a relevant GEO page (for Tucson or another supported city).



1 link to /contact.



Guides must never read like legal advice. All process explanations should push legal/tax-specific questions back to licensed professionals.



6.5 Contact (page\_type = "contact")

Minimums:



Word count: 400â€“800 words.



FAQs: 3â€“5 FAQs in faq\_block.



Required content elements:



Simple, inviting hero copy that emphasizes mapping options, not committing to a sale.



â€œThis is for you ifâ€¦â€ bullets to clarify ideal visitors.



â€œWhat happens when you reach outâ€ 3â€“4 step sequence.



Trust and compliance block that:



States there is no pressure or obligation.



States clearly that no legal/tax/accounting advice is being given.



A single, simple contact form plus phone/email options.



Response-time expectation text (e.g., â€œI usually respond within one business day.â€).



7\. Structured data / JSON-LD rules

Structured data must be generated based on page\_type and FAQ presence. JSON-LD should be embedded using <script type="application/ld+json"> in the page head or body as determined by the implementation.



7.1 Allowed schema types

The site may use:



Organization



LocalBusiness



WebSite



WebPage or subtype as appropriate



BreadcrumbList



BlogPosting



FAQPage



HowTo (for clearly step-based guides only)



No other schema types should be introduced without updating this contract.



7.2 Mapping by page\_type

home



WebSite (global site metadata).



LocalBusiness (for Bradley/C2C with basic NAP and service area).



BreadcrumbList (Home only).



service\_pillar



WebPage (or subtype) with mainEntity reflecting the service described.



LocalBusiness referencing the same business as Home, optionally with areaServed fields.



BreadcrumbList.



FAQPage when there are FAQs (driven by faq\_block where schema: true).



geo\_service



WebPage with mainEntity describing the local service.



LocalBusiness including areaServed set from geo frontmatter.



BreadcrumbList.



FAQPage when FAQs are present.



guide



BlogPosting (primary).



HowTo permitted when the guide clearly describes a step-based process and the steps are marked in content.



FAQPage when FAQs are present.



BreadcrumbList.



contact



WebPage with a ContactPoint embedded in LocalBusiness where implementation allows.



BreadcrumbList.



7.3 FAQ schema

Only FAQs with schema: true in faq\_block should be included in FAQPage JSON-LD.



Questions and answers in schema must match the on-page FAQ text exactly.



Limit FAQ schema entries per page to a reasonable number (3â€“10) to avoid spam signals.



8\. Compliance and disclaimers

The following statements (or close variants) must exist where indicated. Exact phrasing can be adapted to fit tone, but the meaning must not change.



8.1 Legal / tax / accounting disclaimer

Required on:



All Service Pillar pages



All GEO Service pages



All Guides that touch probate, trusts, inheritance, taxes, or fiduciary topics



Contact page



Base content:



â€œIâ€™m not an attorney, accountant, or tax professional.â€



â€œI donâ€™t provide legal or tax advice.â€



â€œMy role is to coordinate the property, vendors, and sale alongside your attorney or fiduciary.â€



8.2 Labor and scope disclaimer

Required on:



Service Pillar pages



GEO Service pages



Guides that mention cleanouts, moving, or labor



Base content:



Clarify that C2C coordinates and oversees work; does not operate junk trucks or moving crews.



Clarify that third-party vendors are independently licensed/insured where appropriate.



Example idea (paraphrased in-page):



â€œI donâ€™t run a junk removal crew or moving company. My role is to line up and oversee the right vendors, so you donâ€™t have to manage all the moving parts yourself.â€



8.3 Brokerage and Realtor disclosures

Implementation of brokerage disclosures must follow your brokerage and ADRE rules. This contract requires:



A clearly visible mention that Bradley is a licensed Realtor in Tucson, AZ.



Space for brokerage/team logos and required â€œbrokered byâ€ language (exact text handled in design/dev).



Disclosures may live in a shared footer and/or in â€œWhy work with meâ€ sections on Home and pillar pages.



9\. Internal linking requirements

The goal of internal linking is to:



Help real visitors find the next right page.



Reinforce the core IA (pillars, GEO, guides, contact).



Support SEO without spam.



9.1 Minimum internal link rules

home



Must link to each service pillar page.



Must link to /service-areas or /az.



Must link to /contact.



service\_pillar



Must link to:



At least one relevant GEO page (Tucson first).



At least one relevant guide.



/contact.



geo\_service



Must link back to its parent service pillar.



Must link to /service-areas or /az.



Must link to /contact.



guide



Must link to:



At least one relevant pillar page.



At least one relevant GEO page if applicable.



/contact.



contact



May link to Home and key pillar pages as reassurance, but the primary focus is the form/CTA.



9.2 Anchor text rules

Use natural, descriptive anchor text (e.g., â€œestate cleanout and home sale in Tucsonâ€ rather than â€œclick hereâ€).



Do not over-stuff keywords in links.



Keep anchors short (2â€“7 words).



10\. LLM usage rules

When using ChatGPT, Claude, or any LLM to generate content:



The assistant must treat:



C2C\_MegaSite\_MasterPlan.md



Brand\_Guardrails.md



IA\_Map.md



Page\_Templates.md



This Content\_Contract.md



as required context before drafting.



The assistant may:



Draft outlines based on the chosen template.



Draft long-form copy.



Suggest FAQs, titles, and internal links consistent with this contract.



The assistant may NOT:



Invent new services or page types.



Change section order defined in Page\_Templates.md.



Ignore or downplay required disclaimers.



Remove or bypass required FAQs, proof blocks, or internal links.



Any deviation from this contract must be explicitly approved and then logged in Phase\_Decisions\_Log.md, followed by an update to this file.



11\. Enforcement

A page is considered publishable only if:



It uses one of the allowed templates.



Its frontmatter complies with section 5.



It includes the minimum sections and elements for its page\_type.



It satisfies the structured data and internal linking rules.



It includes required disclaimers where applicable.



If a page fails any of these checks, it must be treated as a draft and corrected before going live or being provided to Claude as â€œfinal content.â€

