Phase 7 â€“ Task 7.2.6 â€“ Analytics and Search Console

Status: Spec drafted â€¢ Implementation pending
Owner: Bradley Hunt / Cleanout2Closing

Related docs (for context, not re-specified here):

C2C_MegaSite_MasterPlan.md (Phase 7 overview)

IA_Map.md

Page_Templates.md

Content_Contract.md

Brand_Guardrails.md

Phase2_Competitor_Research.md

1. Purpose

This task sets up measurement for cleanout2closing.com so we can answer:

How many people are visiting and from where?

Which pages and GEO/service content are getting real engagement?

Which CTAs and forms are actually generating leads?

We will:

Confirm Google Analytics 4 (GA4) and Google Search Console are correctly configured for cleanout2closing.com. 
Google Help

Implement baseline GA4 tracking (pageviews + key events for forms and CTAs). 
Google for Developers
+1

Verify that Search Console is receiving data and can see the sitemap, ready for Phase 7.2.7â€™s indexation work. 
Netlify Support Forums
+1

This spec is the authority for all analytics and Search Console implementation on the C2C site.

2. Scope and non-goals
2.1 In scope

GA4 property and web data stream for cleanout2closing.com. 
Google Help

Implementation of the GA4 base tag site-wide (via Astro layout / Netlify snippet). 
Medium
+1

Event tracking for:

Contact form submissions (lead events).

Key CTA button clicks (e.g., â€œSchedule a free strategy callâ€).

Phone and email link clicks.

Search Console:

Property verification for the production domain.

Submission of sitemap URL and basic coverage checks. 
Netlify Support Forums
+2
Netlify Support Forums
+2

2.2 Out of scope

Advanced funnel analysis, scroll tracking, or heatmaps (Clarity, Hotjar, etc.).

Complex GA4 custom dimensions beyond what is needed for core reporting.

Detailed Search Console optimization and indexation work (handled in Task 7.2.7).

3. GA4 property and base tag
3.1 Property and data stream

Assumptions:

A GA4 property already exists or will be created specifically for Cleanout2Closing. If not, create it following Googleâ€™s â€œSet up Analytics for a websiteâ€ guide (web data stream only). 
Google Help

Requirements:

One GA4 property dedicated to cleanout2closing.com.

One â€œWebâ€ data stream for the production domain (https://cleanout2closing.com).

Measurement ID stored as a Netlify environment variable (e.g., VITE_GA4_MEASUREMENT_ID or similar). 
Stack Overflow

3.2 Base tag implementation

We will use the standard GA4 gtag.js snippet in the main Astro layout (or Netlify snippet injection, not both).

Minimal GA4 script structure (conceptual):

<!-- In <head> of base layout -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX', {
    'send_page_view': true
  });
</script>


Implementation notes:

Use the environment variable for G-XXXXXXX so the ID is not hard-coded. 
Netlify Support Forums
+1

For v1, keep send_page_view: true and treat the site as a normal multi-page site (Astro generates static pages; no SPA complexity needed initially). 
Google for Developers

Do NOT include any legacy Universal Analytics code.

4. Pageview behavior

Given Astroâ€™s default behavior (full page loads for navigation), we can rely on the default GA4 pageview measurement:

Every new page load sends a page_view event automatically via gtag('config', ...). 
Google for Developers

Only if we later introduce client-side SPA routing do we need to:

Disable automatic pageviews (send_page_view: false) and send manual page_view events when routes change. That change is out of scope for this task.

5. Event tracking design (forms & CTAs)

GA4 works best when we use clear, consistent events with parameters rather than dozens of unique event names. 
Google for Developers
+1

5.1 Event naming

Use GA4 recommended or conventional names where appropriate:

generate_lead â€“ Fired on successful contact form submission. (GA4 recommended event for lead forms.) 
Google for Developers

select_content â€“ For key CTA clicks when we want to treat them as content selection actions (e.g., hero CTA button). 
Google for Developers

click â€“ For phone and email link clicks, with parameters identifying type (phone/email).

view_item (optional later) â€“ For high-value guide reads (e.g., when user reaches 75% scroll).

All event names must be lowercase with underscores.

5.2 Core events to implement now

Contact form submission

Trigger: Successful submit of the c2c-contact Netlify form (client-side hook after confirming HTML form submission succeeded or on Netlify function success callback).

Event name: generate_lead

Parameters:

form_name: "c2c-contact"

page_location: window.location.href

page_referrer: document.referrer

page_type: value from frontmatter (e.g., contact, service, guide)

geo_city, geo_state: from frontmatter when available

form_variant: e.g., contact_main, guide_inline, service_footer

CTA clicks (buttons that link to /contact)

Trigger: Click on major CTA buttons (home hero, service page CTAs, guide CTAs).

Event name: select_content

Parameters:

link_text: visible label (e.g., "Schedule a free strategy call")

link_target: URL (usually /contact)

cta_context: e.g., home_hero, home_final, service_mid, guide_end

page_type, geo_city, geo_state as above

Phone link clicks

Trigger: Clicks on tel: links.

Event name: click

Parameters:

link_type: "phone"

link_text: e.g., "Call Bradley"

link_target: tel:+1520XXXXXXX

page_type, cta_context

Email link clicks

Trigger: Clicks on mailto: links.

Event name: click

Parameters:

link_type: "email"

link_target: mailto:...

page_type, cta_context

5.3 Implementation pattern

Inside a small analytics helper:

// analytics.js
export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined' || typeof gtag !== 'function') return;
  gtag('event', name, params);
}


Then within Astro components for:

Contact form (on successful submit).

CTA buttons (on click).

Phone/email links (wrap in handler or use onClick wrapper).

When in doubt, err on the side of fewer, higher-quality events rather than many noisy ones. 
Analytics Mania
+1

6. Conversions and reporting

Once events are flowing:

Mark generate_lead as a Conversion in GA4. 
Google for Developers
+1

Optionally mark key select_content events (e.g., home hero CTA) as conversions if they correlate strongly with eventual leads.

Initial views and dashboards:

Standard GA4 reports:

Acquisition â†’ Traffic acquisition

Engagement â†’ Pages and screens

Engagement â†’ Events

Custom exploration (later): â€œLead funnelâ€ with dimensions:

page_type

geo_city

situation_type (once we pass this as a custom dimension, out of scope for v1)

7. Google Search Console configuration
7.1 Property type and verification

We want a Domain property for full visibility across all protocols and subdomains of cleanout2closing.com (www, non-www, etc.). 
Google Help
+1

Steps:

In Search Console, add a new property using the Domain option and enter cleanout2closing.com. 
Google Help

Search Console will provide a DNS TXT record (e.g., google-site-verification=...).

Add this TXT record to the DNS provider (Cloudflare, since thatâ€™s the chosen DNS layer for this project). 
Netlify Support Forums
+2
Netlify Support Forums
+2

Wait for DNS to propagate and click â€œVerifyâ€ in Search Console.

If DNS domain-level verification is problematic, fall back to a URL-prefix property by:

Verifying with an HTML file or meta tag injected into the <head> of the siteâ€™s layout.

Netlify + Cloudflare specific note:

Because Cloudflare manages DNS, DNS-based verification must be added in Cloudflare, not Netlify. Netlify docs and community threads confirm that Search Console verification is handled via the DNS provider when using the Domain property. 
Netlify Support Forums
+2
Netlify Support Forums
+2

7.2 Sitemap

Once property is verified:

Submit the sitemap URL in Search Console (likely /sitemap.xml, generated by Astro). 
Netlify Support Forums

Confirm that Search Console can fetch:

https://cleanout2closing.com/

https://cleanout2closing.com/sitemap.xml

No further sitemap customization is required at this task; 7.2.7 will handle coverage and query analysis.

8. Optional: Netlify Analytics

Netlify offers integrated Web Analytics. This is optional but nice as a second data source that doesnâ€™t rely on JS. 
Netlify Docs
+1

If enabled:

Treat Netlify Analytics as a cross-check for GA4 (visitor counts, basic page popularity).

Do not attempt to mirror GA4 event schema inside Netlify; keep this as a simple backup/validation tool.

9. QA and sanity checks

Before considering 7.2.6 implemented:

9.1 GA4 QA checklist

 GA4 property and web data stream exist for cleanout2closing.com.

 GA4 script is present on all pages (view source; confirm gtag.js).

 Real-time report in GA4 shows your test visits when you browse the site. 
Google Help
+1

 page_view events appear automatically when you navigate the site.

 Submitting the contact form once triggers a single generate_lead event with correct parameters.

 Clicking the home hero CTA triggers a select_content event with cta_context = home_hero.

 Phone and email clicks generate click events with appropriate link_type values.

 generate_lead is marked as a Conversion in GA4 and appears under Conversions after a test submission.

9.2 Search Console QA checklist

 Domain property for cleanout2closing.com is verified in Search Console. 
Google Help
+1

 Sitemap URL has been submitted and is shown as â€œSuccess.â€ 
Netlify Support Forums

 Search Console can fetch the homepage without crawl errors.

 No robots.txt or meta tags are blocking core pages unintentionally. 
Netlify Support Forums
+1

10. Implementation checklist for Claude / dev

When actually wiring this up in the repo and Netlify:

Ensure GA4 property and web data stream exist; note the Measurement ID.

Add GA4 script snippet to the Astro siteâ€™s base layout (or configure Netlify snippet injection).

Create a small analytics.js helper to wrap gtag('event', ...).

Hook generate_lead events into the contact form success handler.

Hook select_content events into main CTA buttons (home hero, service CTAs, guide CTAs).

Hook click events into phone and email links.

In GA4, mark generate_lead as a conversion.

In Search Console, add and verify a Domain property for cleanout2closing.com.

Submit the /sitemap.xml URL in Search Console.

Run all QA checklist items in section 9 and log any deviations.

Once all boxes are checked and a few live days of data confirm that everything is stable, update C2C_MegaSite_MasterPlan.md to mark:

â€œ7.2.6 Analytics and Search Consoleâ€ as â€œSpec complete; implementation complete and QA passed.â€