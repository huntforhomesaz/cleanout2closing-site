Phase 7 â€“ Task 7.2.5 â€“ Forms, CTAs, and Lead Flow

Status: Spec drafted â€¢ Implementation pending
Owner: Bradley Hunt / Cleanout2Closing
Related docs:

C2C_MegaSite_MasterPlan.md 

C2C_MegaSite_MasterPlan

IA_Map.md 

IA_Map

Page_Templates.md 

Page_Templates

Content_Contract.md 

Content_Contract

Brand_Guardrails.md 

Brand_Guardrails

Assets_Inventory.md 

Assets_Inventory

1. Purpose

Define how all site forms and CTAs work, where they appear, and how leads move:

Visitor â†’ Netlify form â†’ n8n webhook â†’ Bitrix24 lead/pipeline.

This spec is the authority for Claude (or any dev) implementing:

Form markup and validation

CTA components and copy patterns

Netlify Forms configuration

n8n webhook payload structure

Bitrix24 field and pipeline mapping

Thank-you states and â€œwhat happens nextâ€ messaging

Nothing in this spec may contradict:

Content_Contract rules for CTAs, disclaimers, and page types 

Content_Contract

Brand_Guardrails voice and â€œno pressureâ€ tone 

Brand_Guardrails

2. Scope and non-goals
2.1 In scope

All contact/intake forms on cleanout2closing.com

Button and text CTAs that initiate contact or navigation to /contact

Netlify Forms configuration for static form handling (HTML with netlify attribute and hidden fields)

n8n webhook endpoint and JSON payload spec

Mapping of fields into Bitrix24 â€œleadâ€ or â€œdealâ€ records, including tags and pipeline placement

UX around submit states, errors, spam handling, and confirmation messaging

2.2 Out of scope

Detailed Bitrix24 automation rules and internal tasks (handled in Sales Brain / CRM project)

Complex multi-step wizards or conversational forms

Payment processing or document e-signature flows

3. Form inventory and locations
3.1 Primary forms

Global Contact / Strategy Call form

URL: /contact

Page type: contact 

Content_Contract

Template: Contact / Free Strategy Call Template 

Page_Templates

Role: Main lead intake for all situations.

Inline â€œTalk through your situationâ€ form (optional v1, placeholder supported)

Locations:

Bottom of high-intent guides (e.g., inherited house Tucson guide) 

C2C_MegaSite_MasterPlan

Optional near the end of key service pillars

Same backend as global contact form (same Netlify form name and webhook) with slight layout variation.

3.2 CTA components without form fields

These do not collect data directly; they route to /contact:

Hero primary CTA on Home: â€œSchedule a free strategy callâ€ 

Page_Templates

Hero secondary CTA on Home: â€œSee how it worksâ€ (scroll to /how-it-works section)

Pillar page CTAs: â€œDoes this sound like your situation? Letâ€™s talk through it.â€ 

Page_Templates

GEO page CTAs: â€œIf your property is in or around Tucson, letâ€™s talk.â€ 

Page_Templates

Guide CTAs: â€œIf this sounds like your situation, Iâ€™m happy to talk it through.â€ 

Page_Templates

All button links should include UTM parameters and context (see Tracking, section 7).

4. Global form pattern and fields
4.1 Base fields

All lead-generating forms must collect the following minimum fields (aligns with Content_Contract contact template) 

Content_Contract

:

Required:

full_name (text)

best_contact_method (radio: Phone, Email, Either)

phone (text, required if best_contact_method includes Phone)

email (text, required if best_contact_method includes Email)

situation_type (select)

Options:

Probate property

Trust sale

Inherited property

Senior transition / assisted living

Family property with multiple decision-makers

Out-of-state owner

Other / not sure

property_location (free text, with helper: â€œCity, neighborhood, or address if you are comfortableâ€)

situation_description (textarea)

Helper text: â€œShare a few basics about the property and what is going on.â€

Optional:

timeline (select: â€œAs soon as possibleâ€, â€œNext 1â€“3 monthsâ€, â€œ3+ monthsâ€, â€œNot sure yetâ€)

how_did_you_hear (text)

Hidden (system) fields:

page_url (auto populated via JS)

page_type (from frontmatter page_type) 

Content_Contract

geo_city / geo_state (from frontmatter geo when present; otherwise blank) 

Content_Contract

utm_source, utm_medium, utm_campaign, utm_term, utm_content (if present in URL)

form_variant (e.g., contact_main, guide_inline, etc.)

4.2 Contact page specific fields

On /contact, keep layout simple and low friction, consistent with the Contact template: â€œsimple contact page explaining who should reach out and what to expect.â€

Group fields into two steps visually (not separate HTTP steps):

Step A: Name + best way to reach you + situation_type

Step B: Property location + situation_description

Use clear labels; no jargon; short helper text.

5. CTA patterns and copy rules
5.1 Brand and tone constraints

CTAs must invite conversation, not commitment or pressure.

No language that suggests urgency, deadlines, or scarcity.

Plain language only; avoid hype words (â€œamazingâ€, â€œexclusive offerâ€, etc.).

5.2 Approved CTA verbs

Use any of:

â€œScheduleâ€, â€œTalkâ€, â€œTell meâ€, â€œShareâ€, â€œStartâ€, â€œMap outâ€

Avoid:

â€œBook nowâ€, â€œLock inâ€, â€œClaim your offerâ€, â€œSign up nowâ€

5.3 Default CTA copy per template

Home hero:

Primary button: â€œSchedule a free strategy callâ€

Secondary text link: â€œSee how this worksâ€ (scroll to â€œHow Cleanout2Closing worksâ€) 

Page_Templates

Home final CTA:

Heading: â€œTell me what you are facing, and I will map out your options.â€ 

Page_Templates

Button: â€œStart hereâ€ (link to /contact with UTM cta=home_final)

Service pillar pages:

Mid-page CTA:

Copy: â€œDoes this sound like your situation? I am happy to talk it through.â€

Button: â€œTalk through my situationâ€ â†’ /contact

Final CTA:

Copy: â€œIf this is what you are dealing with, tell me what is going on and I will map out options that fit your timelines and comfort level.â€

GEO service pages:

Mid-page CTA:

Copy: â€œNeed help with an estate property in {City}? I can coordinate the cleanout, vendors, and sale here.â€

Final CTA:

Copy: â€œIf your property is in or around {City}, share a few details and I will let you know how I can help.â€ 

Page_Templates

Guides:

Mid-article soft CTA (after main steps):

Copy: â€œIf this sounds like your situation, I am happy to talk it through and show you what this would look like in Tucson.â€

Button: â€œTalk through my situationâ€ â†’ /contact

End CTA:

Copy: â€œYou do not have to figure this out alone. Tell me what is going on, and I will walk you through realistic options.â€

Contact page:

Hero line (per Content_Contract):

â€œTell me what you are facing, and I will map out your options.â€

Button label: â€œSend my situationâ€

6. Netlify Forms implementation
6.1 Form setup

Use Netlifyâ€™s static form handling:

Each HTML form must have:

name="c2c-contact" (single canonical form name)

method="POST"

data-netlify="true"

netlify-honeypot="bot-field" (spam trap field)

Example (conceptual, not final HTML):

<form
  name="c2c-contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="c2c-contact" />
  <input type="hidden" name="page_url" value="" />
  <input type="hidden" name="page_type" value="contact" />
  <input type="hidden" name="geo_city" value="Tucson" />
  <!-- Honeypot -->
  <p class="hidden">
    <label>
      Do not fill this out if you are human:
      <input name="bot-field" />
    </label>
  </p>

  <!-- Visible fields -->
  <!-- full_name, best_contact_method, phone, email, etc. -->
</form>


Implementation notes:

Use Astro components to avoid duplication of form markup across pages.

Inline forms on guides or pillars must use the same name and field set so they land in the same Netlify form bucket; differentiate with form_variant.

6.2 Validation

Client-side:

HTML5 validation (required attributes, type=email, etc.).

Minimal JS to handle conditional requirement of phone/email based on best_contact_method.

Server-side: Netlify will accept any payload; n8n should perform additional sanity checks (see section 7.3).

7. n8n webhook and Bitrix24 mapping
7.1 Netlify â†’ n8n flow

Implementation pattern:

Netlify receives form submission.

Netlify triggers outgoing webhook (via Netlify build hook or Netlify Functions proxy) to n8n HTTP node.

n8n normalizes and transforms payload, then calls Bitrix24 REST API to create/update a lead.

Spec:

n8n endpoint: POST https://{n8n-host}/webhook/c2c-contact

Expected content type: application/json

Payload shape (from Netlify function):

{
  "form_name": "c2c-contact",
  "submitted_at": "2025-12-21T20:15:00Z",
  "fields": {
    "full_name": "Jane Doe",
    "best_contact_method": "Phone",
    "phone": "520-555-1234",
    "email": "jane@example.com",
    "situation_type": "Probate property",
    "property_location": "Tucson, near Broadway and Swan",
    "situation_description": "Mom passed in October, house is full and we live out of state.",
    "timeline": "Next 1â€“3 months",
    "how_did_you_hear": "Referred by Jon Tucker",
    "page_url": "https://cleanout2closing.com/guides/inherited-house-tucson-what-to-do",
    "page_type": "guide",
    "geo_city": "Tucson",
    "geo_state": "AZ",
    "utm_source": "google",
    "utm_medium": "organic",
    "utm_campaign": "guide_inherited_house_tucson",
    "utm_term": "",
    "utm_content": "mid_page_cta",
    "form_variant": "guide_inline"
  }
}


n8n should:

Normalize phone and trim strings.

Drop submissions that trip spam honeypot or have clearly invalid content (e.g., all fields identical, nonsense emails).

7.2 Bitrix24 mapping

Exact Bitrix24 field names will depend on your existing CRM, but the mapping should follow:

Lead title: Cleanout2Closing â€“ {situation_type} â€“ {property_location or geo_city}

Name: full_name

Phone: phone (primary)

Email: email

Lead source: map utm_source or default â€œC2C websiteâ€

Source description: utm_medium / utm_campaign plus page_url

Custom fields (examples):

C2C_SITUATION_TYPE â† situation_type

C2C_PROPERTY_LOCATION â† property_location

C2C_TIMELINE â† timeline

C2C_HOW_HEARD â† how_did_you_hear

C2C_PAGE_URL â† page_url

C2C_PAGE_TYPE â† page_type

C2C_GEO_CITY / C2C_GEO_STATE â† geo_*

C2C_FORM_VARIANT â† form_variant

Description / comments field:

Compose a human-readable summary, including:

Situation description (verbatim)

Submission date/time

Referrer info if available

Pipeline / stage:

All website leads enter a dedicated pipeline or stage, for example:

Pipeline: C2C Website Leads

Stage: New â€“ Website

n8n should also set tags, such as:

c2c-site

situation:{situation_type_slug} (e.g., situation:probate-property)

geo:tucson or geo:green-valley when known

7.3 Error handling and notifications

If Bitrix24 API call fails:

Log payload + error in n8n.

Send an internal email to Bradley with subject: â€œC2C website lead â€“ CRM errorâ€ with raw details.

If Netlify or n8n submission looks like spam:

Do not create a lead.

Optionally log in a separate â€œspamâ€ list for pattern review.

8. Thank-you states and â€œwhat happens nextâ€
8.1 Contact page success state

After successful submit on /contact:

Stay on /contact and swap form with a confirmation block (do not redirect to a generic /thank-you page in v1).

Copy (on-brand, no pressure):

Heading:

Thank you for reaching out.

Body:

I usually respond within one business day.

I will review what you shared and let you know if I am the right fit.
If it makes sense to move forward, we will schedule a time to walk the property or talk through your options in more detail.

Include a smaller note:

If your timeline is very tight or the situation is urgent, you can also call or text me at [phone number].

(Phone number to match brokerage rules.)

8.2 Inline form success

For inline forms on guides or service pages:

Replace form area with short confirmation:

Thank you. I will review what you shared and follow up, usually within one business day.

Provide a link to /contact in case they want to add more detail.

8.3 Error states

If form fails to submit:

Show a friendly error:

Something went wrong while sending your message.
Please try again in a moment, or email me directly at [email] and I will respond as soon as I can.

No technical jargon; no stack traces.

9. Compliance and boundary reminders

All forms and CTAs must respect:

â€œNo legal / tax / accounting adviceâ€ disclaimer on Contact and relevant service/guide pages. 

Content_Contract

Clear statements that Bradley coordinates vendors and the sale, but does not operate a junk removal crew or moving company.

Required Realtor/brokerage disclosures in site footer and â€œWhy work with meâ€ sections (already covered in other tasks; forms must not conflict). 

Content_Contract

CTAs must never:

Guarantee outcomes, timelines, or sale prices.

Suggest exclusivity, deadlines, or â€œlast chanceâ€ messaging.

10. Implementation checklist for Claude

When Claude (or another dev) implements this task in the repo:

Create a reusable ContactForm Astro component that implements the field set in section 4, wired for Netlify Forms.

Add the ContactForm to /contact using the Contact template layout. 

Page_Templates

Add CTA components to:

Home hero and final CTA section

All service pillars (mid + end of page)

GEO pages (end of page)

Priority guides (mid + end of article)

Ensure all CTA buttons link to /contact with appropriate UTM and form_variant tags.

Configure Netlify form handling for c2c-contact, including honeypot.

Implement Netlify â†’ n8n â†’ Bitrix24 webhook as described in section 7.

Implement success and error states as described in section 8.

Run QA using the checklist below; do not deploy until all boxes are checked.

10.1 QA checklist

 Form appears and functions on /contact and any inline locations.

 Required fields cannot be submitted empty; email/phone validation works.

 Honeypot field is hidden from real users.

 A test submission appears in Netlifyâ€™s form dashboard.

 The same test submission appears correctly in Bitrix24 with all mapped fields.

 UTM and page context fields are populated when visiting from a tagged URL.

 Success and error messages display correctly on desktop and mobile.

 No CTA copy violates Content_Contract or Brand_Guardrails (no pressure, no hype, no guarantees).

When this spec is fully implemented and tested, Task 7.2.5 can be marked â€œCompleteâ€ in C2C_MegaSite_MasterPlan.md Phase 7 section.