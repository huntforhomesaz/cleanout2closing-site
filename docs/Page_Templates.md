# Cleanout2Closing â€“ Page Template Library

Status: Phase 4 â€“ Templates locked v1.0  
Last updated: 2025-12-21  
Source of truth: All page layouts must follow the templates defined in this file once finalized.

## Rules

- No page-specific copy may be finalized until templates are approved here.  
- Templates are structural, not stylistic. Visual design may evolve; section order may not.  
- Any template change requires:
  - Update to this file
  - Entry in Phase_Decisions_Log.md
  - Confirmation that the change does not conflict with C2C_MegaSite_MasterPlan.md
- Each new page must explicitly choose one of these templates before drafting.
- FAQs and â€œWhat we donâ€™t doâ€ / boundary statements are required wherever specified here and will be detailed in Content_Contract.md (Phase 4.5).

## Template Index

1. Home Page Template  
2. Service Pillar Page Template  
3. GEO Service Page Template  
4. Guide / Blog Post Template  
5. Contact / Free Strategy Call Template  

---

### 1. Home Page Template

**Purpose**

Introduce Cleanout2Closing, make it obvious who this is for, show the â€œcleanout to closingâ€ journey, and give one clear next step.

**Default URL**

- `/`

**Section Outline (in order)**

- Global navigation + logo (shared layout, not a â€œcontent sectionâ€)  
- Hero â€“ primary promise and one clear CTA  
- â€œWhat situation are you in?â€ â€“ six scenario tiles  
- â€œHow Cleanout2Closing worksâ€ â€“ simple 3â€“4 step journey  
- â€œWho I helpâ€ â€“ audience/persona snapshot  
- â€œWhy work with meâ€ â€“ Bradley credibility + Realtor-led positioning  
- Proof and reviews â€“ testimonials and trust signals  
- Service areas â€“ quick GEO overview and links  
- FAQs â€“ 3â€“6 common questions  
- Final CTA â€“ reiterate next step

**Example Headings (brand voice)**

- Hero:
  - â€œFrom cleanout to closing in Tucson, handled for you.â€  
  - â€œEstate cleanout, vendors, and the sale â€“ one accountable point of contact.â€

- Situations:
  - Section heading: â€œWhat situation are you in?â€  
  - Tile labels:
    - â€œProbate propertyâ€  
    - â€œTrust saleâ€  
    - â€œInherited propertyâ€  
    - â€œSenior transitionâ€  
    - â€œFamily property with multiple decision-makersâ€  
    - â€œOut-of-state ownerâ€

- Process:
  - Section heading: â€œHow I take you from cleanout to closing.â€  
  - Step examples:
    - â€œStep 1 â€“ Walk the property and understand your situation.â€  
    - â€œStep 2 â€“ Line up the right vendors with clear estimates.â€  
    - â€œStep 3 â€“ Get the home ready, listed, and under contract.â€  
    - â€œStep 4 â€“ Keep you updated through escrow until closing.â€

- Who I help:
  - â€œWho I do this work for.â€  

- Why work with me:
  - â€œWhy families and professionals trust me with estate property.â€

- Proof:
  - â€œReal families. Real transitions. Real results.â€

- Service areas:
  - â€œWhere I currently help families.â€  

- Final CTA:
  - â€œTell me what youâ€™re facing, and Iâ€™ll map out your options.â€

**Notes to Developers**

- Hero:
  - Use a single primary CTA (e.g., â€œSchedule a free strategy callâ€) and one secondary (e.g., â€œSee how it worksâ€).  
  - Ensure hero supports both short and long headings; use responsive text.

- Situations:
  - Implement as a 2Ã—3 or 3Ã—2 grid of cards with short labels and 1â€“2 line descriptions.  
  - Each card should link to the most relevant pillar or GEO page (configurable per deployment).

- Process:
  - Use a numbered horizontal or vertical step layout.  
  - Each step should have a short title and 1â€“2 sentence description.

- Who I help:
  - Display 3â€“5 persona bullets (heirs/beneficiaries, trustees/PRs, seniors/adult children, out-of-state owners, Realtors/professionals).  
  - Optional: link to `/personas/*` pages when those exist.

- Why work with me:
  - Reserve space for a headshot, short bio, and â€œRealtor-ledâ€ positioning.  
  - Include brokerage disclosure text area near this section.

- Proof:
  - Support multiple testimonies with name, role (heir, PR, Realtor), and source (e.g., â€œGoogle reviewâ€).  
  - Include space for small logos (e.g., brokerage/team, BBB history if appropriate).

- Service areas:
  - Show a simple list of city links (Tucson first), optionally with map thumbnail.  
  - This should link into `/service-areas`, `/az`, and `/az/tucson`.

- FAQs:
  - Build as a collapsible accordion.  
  - Mark up so it can be upgraded to FAQPage schema via Content_Contract.md rules.

- Final CTA:
  - Repeat primary CTA with short reassurance line (â€œNo pressure, no spam, just a clear plan.â€).  
  - Place just above the global footer.

---

### 2. Service Pillar Page Template

**Purpose**

Explain a single service pillar (e.g., Inherited & Probate Property, Senior Transitions) in clear, non-jargony language, show how the â€œcleanout to closingâ€ model applies, and invite a conversation.

**Applies To**

- `/services/inherited-and-probate-property`  
- `/services/senior-transitions-and-downsizing`  
- `/services/cleanout-and-vendor-coordination`  
- `/services/for-realtors-and-professionals`

**Section Outline (in order)**

- Hero â€“ pillar promise and who itâ€™s for  
- â€œIs this you?â€ â€“ short bullets describing the visitorâ€™s situation  
- â€œCommon situations I handleâ€ â€“ map relevant scenarios (probate, trust, etc.)  
- â€œHow I help from cleanout to closingâ€ â€“ step-by-step journey  
- â€œWhat I handle vs what you/your attorney handleâ€ â€“ boundaries and clarity  
- â€œWhat you can expect from meâ€ â€“ communication, documentation, and updates  
- Proof and/or case examples  
- Pillar-specific FAQs  
- CTA â€“ invite conversation / strategy call

**Example Headings (brand voice)**

- Hero:
  - â€œInherited and probate property, handled from cleanout to closing.â€  
  - â€œSenior transitions and downsizing, without burning the family out.â€  

- Is this you:
  - â€œIs this what youâ€™re dealing with?â€  

- Common situations:
  - â€œSituations I handle all the time.â€  

- Process:
  - â€œHow I take this off your plate.â€  
  - Steps like:
    - â€œStep 1 â€“ Understand your legal and family timelines.â€  
    - â€œStep 2 â€“ Coordinate cleanout and vendor work around those dates.â€  
    - â€œStep 3 â€“ Price, list, and negotiate the sale with a clear plan.â€  
    - â€œStep 4 â€“ Keep you and your attorney or fiduciary updated through escrow.â€

- Boundaries:
  - â€œWhat I do â€“ and what I donâ€™t do.â€  

- Expectations:
  - â€œWhat you can expect when we work together.â€  

- Proof:
  - â€œHow this has worked for other families.â€  

- FAQs:
  - â€œCommon questions about this service.â€

- CTA:
  - â€œDoes this sound like your situation? Letâ€™s talk through it.â€

**Notes to Developers**

- Hero:
  - H1 should include the service name and â€œTucsonâ€ when appropriate for SEO.  
  - Include optional eyebrow text above H1 (e.g., â€œService for heirs and trusteesâ€).

- â€œIs this you?â€:
  - Use 3â€“5 short bullets.  
  - Designed to be skimmable; no paragraphs.

- Common situations:
  - Use a simple bullet list or mini-cards.  
  - Cards should mirror your six scenarios where relevant (probate property, trust sale, etc.).

- Process:
  - Use a numbered list style consistent with the Home â€œHow it worksâ€ block.  
  - Allow for icons or small illustrations, but not required.

- Boundaries:
  - Two-column or two-block layout:
    - â€œWhat I handleâ€  
    - â€œWhat stays with your attorney, fiduciary, or vendorsâ€  
  - Reserve a text slot for legal/tax disclaimer copy from Content_Contract.md.

- Expectations:
  - Bullet layout for communication frequency, documentation, and reporting.

- Proof:
  - Same testimonial component as Home, but filtered by pillar where possible.  

- FAQs:
  - Accordion component, 4â€“8 questions.  
  - Must be mark-up ready for FAQPage schema.

- CTA:
  - Single primary CTA (contact/strategy call) aligned with Contact template.  
  - Optionally repeat phone/text inline for mobile.

---

### 3. GEO Service Page Template

**Purpose**

Capture local search traffic (e.g., â€œestate cleanout Tucsonâ€), explain how C2C works in that specific city, and route visitors into contact.

**Applies To (examples)**

- `/az/tucson/estate-cleanout-and-home-sale`  
- `/az/tucson/senior-transition-and-home-sale`  
- `/az/tucson/out-of-state-owner-help`  
- Future pages: `/az/{city}/estate-cleanout-and-home-sale`, etc.

**Section Outline (in order)**

- Hero â€“ service + city/state  
- Local problem context â€“ why this is hard in {City}  
- â€œWhat I handle in {City}â€ â€“ concrete tasks and situations  
- â€œHow the process works hereâ€ â€“ steps with local nuance  
- Local proof or short case example  
- Service area description / nearby communities  
- Local FAQs  
- CTA â€“ location-aware contact invitation

**Example Headings (brand voice)**

- Hero:
  - â€œEstate cleanout and home sale help in Tucson, AZ.â€  
  - â€œSenior transition and home sale support in Tucson.â€

- Local context:
  - â€œWhy this is especially hard in Tucson.â€  

- What I handle:
  - â€œWhat I can take off your plate here in Tucson.â€  

- Process:
  - â€œHow I handle an estate property in {City} from cleanout to closing.â€

- Proof:
  - â€œA real example from right here in {City}.â€

- Service area:
  - â€œWhere I serve around {City}.â€  

- FAQs:
  - â€œQuestions I hear a lot from {City} families.â€

- CTA:
  - â€œIf your property is in or around {City}, letâ€™s talk.â€

**Notes to Developers**

- Hero:
  - H1 should include service and city (â€œEstate cleanout and home sale in Tucson, AZâ€).  
  - Include city and state in meta title and H1; avoid keyword stuffing in body.

- Local context:
  - Fixed layout that allows for a short paragraph and 3â€“4 bullets about local realities (age of housing stock, typical timelines, snowbird / out-of-state patterns, etc.).

- What I handle:
  - Bullet list grouped into:
    - Property and contents (cleanout, vendors, photos).  
    - Sale-related items (coordination with brokerage and buyers).  

- Process:
  - Same step layout as other templates, with optional local notes per step.

- Proof:
  - Short case-study component with:
    - Situation summary  
    - City/neighborhood  
    - Outcome (timeline, sale result)

- Service area:
  - Simple list of neighborhoods / nearby towns (e.g., Oro Valley, Marana, Vail) with links where IA provides pages.  
  - Optional small static map or map-style illustration.

- Local FAQs:
  - 3â€“6 questions specific to that city/service combo.  
  - Use shared accordion component, FAQPage schema-ready.

- CTA:
  - Repeat service + city in CTA subheading (â€œNeed help with an estate property in Tucson?â€).  
  - Primary CTA should go to Contact page with city tracked (query string or hidden field is fine).

---

### 4. Guide / Blog Post Template

**Purpose**

Provide deep, helpful answers to specific questions (e.g., â€œWhat to do with an inherited house in Tucsonâ€), showcase expertise, and gently route readers to the appropriate service or GEO page.

**Applies To (examples)**

- `/guides/inherited-house-tucson-what-to-do`  
- `/guides/pima-county-probate-property-timeline`  
- `/guides/assisted-living-move-tucson-what-happens-to-the-house`  
- `/guides/estate-cleanout-checklist-tucson`  
- `/guides/estate-cleanout-vs-junk-removal-vs-estate-sale`

**Section Outline (in order)**

- Hero â€“ clear, search-friendly title  
- Short intro â€“ empathy + what this guide will cover  
- Quick answer / TL;DR  
- â€œWhen this guide appliesâ€ â€“ who and what situations  
- Step-by-step sections (3â€“7 major steps)  
- Checklist or downloadable summary (optional in v1, but space reserved)  
- â€œHow I can help in this situationâ€ â€“ service bridge  
- Local nuances (Tucson / Pima-specific callouts)  
- FAQs related to the guide topic  
- Soft CTA â€“ invite conversation without hard sell

**Example Headings (brand voice)**

- Hero:
  - â€œWhat to do with an inherited house in Tucson, AZ.â€  
  - â€œEstate cleanout checklist for Tucson families.â€

- Intro:
  - â€œIf youâ€™ve just inherited a house in Tucson, itâ€™s normal to feel overwhelmed.â€  

- Quick answer:
  - â€œShort answer if youâ€™re reading this in a hurry.â€  

- When this applies:
  - â€œWhen this guide will be helpful to you.â€  

- Steps:
  - â€œStep 1 â€“ Make sure the property is secure and insured.â€  
  - â€œStep 2 â€“ Understand who has authority to make decisions.â€  
  - â€œStep 3 â€“ Decide what happens to belongings.â€  
  - â€œStep 4 â€“ Look at your options for the property itself.â€

- Service bridge:
  - â€œWhere I fit in â€“ and where your attorney or fiduciary fits.â€  

- Local nuances:
  - â€œWhatâ€™s different here in Tucson and Pima County.â€  

- CTA:
  - â€œIf this sounds like your situation, Iâ€™m happy to talk it through.â€

**Notes to Developers**

- Hero:
  - H1 = full, descriptive title, optimized for the target query.  
  - Include a short eyebrow above H1 (e.g., â€œGuide for heirs and trusteesâ€).

- Quick answer:
  - Use a highlighted box (â€œTL;DRâ€) near the top.  
  - This should be visually distinct for skimmers.

- Steps:
  - Use H2 for each step; H3 for subpoints if needed.  
  - Maintain consistent numbering and styling.

- Checklist:
  - Reserve a block that can later become a downloadable PDF or printable list.

- Service bridge:
  - Use a callout box near mid or end of article; not the first thing on the page.  
  - Include links to relevant pillar and GEO pages.

- Local nuances:
  - Use a short side callout (â€œIn Tucson/Pima County, this usually meansâ€¦â€) to differentiate from generic advice.

- FAQs:
  - 3â€“5 questions tied directly to the guide topic.  
  - Use shared accordion component, FAQPage schema-ready.

- CTA:
  - Soft close (no countdowns or pressure language).  
  - Link to Contact page and relevant service page.

---

### 5. Contact / Free Strategy Call Template

**Purpose**

Make it easy and low-pressure for people to reach out, set expectations, and reassure them that theyâ€™re not stepping into a hard sales pitch.

**Applies To**

- `/contact` (primary)  
- Any variant contact/landing pages that map to this structure.

**Section Outline (in order)**

- Hero â€“ clear invite to talk  
- â€œWho this is forâ€ â€“ when it makes sense to reach out  
- â€œWhat happens when you contact meâ€ â€“ 3â€“4 step expectation setting  
- Trust and compliance notes â€“ no hard sell, no legal/tax advice  
- Contact options â€“ form, phone, email  
- Response time and availability  
- Contact-related FAQs

**Example Headings (brand voice)**

- Hero:
  - â€œTell me what youâ€™re facing, and Iâ€™ll map out your options.â€  
  - â€œLetâ€™s talk through your estate or transition property.â€

- Who this is for:
  - â€œThis is for you ifâ€¦â€  

- What happens:
  - â€œWhat happens when you reach out.â€  
  - Steps like:
    - â€œStep 1 â€“ You share a few basics about the property and your situation.â€  
    - â€œStep 2 â€“ I review and let you know if Iâ€™m the right fit.â€  
    - â€œStep 3 â€“ We schedule a time to walk the property or talk through next steps.â€

- Trust/compliance:
  - â€œWhat you can expect from me.â€  

- FAQs:
  - â€œCommon questions about reaching out.â€

**Notes to Developers**

- Hero:
  - Keep layout simple and low-friction.  
  - Primary CTA should be the form; secondary can be phone.

- â€œWho this is forâ€:
  - Use bullets; emphasize heirs, trustees/PRs, seniors/adult children, and out-of-state owners.  
  - Allow 1â€“2 bullets for who this is *not* for (e.g., people seeking legal advice).

- â€œWhat happensâ€:
  - Use 3â€“4 visually distinct steps.  
  - Avoid language that suggests pressure or commitment.

- Trust and compliance:
  - Reserve text fields for:
    - â€œNo pressureâ€ reassurance.  
    - Legal/tax disclaimer text (from Content_Contract.md).  
    - Brokerage disclosures, if required by ADRE / KW.

- Contact options:
  - Single form with fields: Name, Email, Phone, Best way to reach you, Brief description, Property location.  
  - Include optional dropdown for â€œWhat describes your situation?â€ (probate, trust, inherited, senior move, out-of-state, other).

- Response time:
  - Short text block to set expectations (e.g., â€œI usually respond within one business day.â€).

- FAQs:
  - 3â€“5 short Q&As about:
    - Fees/obligation  
    - How fast Bradley responds  
    - Whether out-of-state calls are okay  
    - Whether attorneys or fiduciaries can contact directly  
  - Use accordion, FAQPage schema-ready.
