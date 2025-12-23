Phase 7 â€“ Task 7.2.4 â€“ JSON-LD & SEO Wiring (Astro + Decap)
0. Role of this document

This document tells the implementer (Claude or a dev) exactly how to wire JSON-LD structured data and basic SEO meta tags into the Cleanout2Closing Astro site, using the existing frontmatter rules from Content_Contract.md and layouts from Page_Templates.md.

The goal is to:

Use JSON-LD (not Microdata) for all structured data. 
Google for Developers
+1

Keep everything driven from frontmatter so content can be edited safely in Decap.

Stay within the schema types already approved in the Master Plan and Content Contract:

Organization, LocalBusiness, WebSite, WebPage, BreadcrumbList, BlogPosting, HowTo, FAQPage.

1. Inputs and dependencies

This task must follow these docs:

- `docs/C2C_MegaSite_MasterPlan.md` (overall strategy and Phase 7 breakdown)
- `docs/Content_Contract.md` (frontmatter + schema rules)
- `docs/Page_Templates.md` (section order and required blocks)
- `docs/Phase7_Task7.2.1_Repo_and_Content_Structure.md` (content/ tree + slugs)
- `docs/Phase7_Task7.2.2_Astro_Layouts_and_Templates.md` (layouts and page wiring)
- `docs/Phase7_Task7.2.3_Decap_CMS_Config_and_Content_Collections.md` (Decap collections + frontmatter fields)

Do not introduce new page types, new frontmatter fields, or new schema types outside whatâ€™s already approved in these docs.


2. High-level approach

Use JSON-LD via <script type="application/ld+json"> in the <head> of each page, injected from layouts/components. 
cemkiray.com
+1

Centralize meta tags + JSON-LD in shared components so every page type automatically gets the right baseline schema and meta.

Drive per-page details (title, description, canonical URL, FAQs, etc.) from frontmatter, not hard-coded strings.

Follow Googleâ€™s structured-data guidelines:

Only mark up content that actually appears on the page. 
Google for Developers
+1

Use JSON-LD consistently rather than mixing Microdata and JSON-LD on the same page. 
Neil Patel

Validate with Googleâ€™s Rich Results Test and monitor Search Console enhancement reports. 
cemkiray.com
+1

3. Files and components to create

Create the following (names can be adjusted slightly if needed, but the roles must stay the same):

src/components/Seo.astro

Responsible for:

<title> and <meta name="description">

Canonical tag

Robots meta (noindex from frontmatter)

Open Graph / Twitter basics (optional but recommended)

src/components/JsonLd.astro

Small wrapper that takes one or more JS objects and outputs:

<script type="application/ld+json" set:html={JSON.stringify(schema)} />


Accept either a single object or an array and render one script tag per object.

Use the set:html pattern as shown in common Astro examples. 
cemkiray.com

src/lib/schema.ts (or src/lib/schema/index.ts)

Export pure functions that build schema objects from plain inputs:

buildWebsiteSchema(config)

buildLocalBusinessSchema(config)

buildWebPageSchema(page)

buildBreadcrumbSchema(segments)

buildFaqSchema(faqBlock)

buildHowToSchema(guide)

buildBlogPostingSchema(guide)

All functions must:

Set "@context": "https://schema.org".

Set "@type" according to the mapping in section 5.

Only include fields we can populate reliably (no placeholder/empty fields).

Layout integration

Update the main layout used by all pages (e.g. src/layouts/BaseLayout.astro) to:

Import Seo.astro and JsonLd.astro.

Compute the page-level schema objects.

Render Seo + JsonLd in <head> before </head>.

4. Baseline schema: WebSite + LocalBusiness
4.1 WebSite schema (global)

Implement once, in the top-level layout, for all pages:

@type: "WebSite"

name: â€œCleanout2Closingâ€

url: primary domain (e.g. https://cleanout2closing.com/)

publisher: reference to the LocalBusiness / Organization node

Optional: potentialAction as SearchAction if/when C2C adds site search. 
cemkiray.com
+1

This object does not need frontmatter and can be built from a small config module (e.g. src/config/site.ts).

4.2 LocalBusiness / Organization schema (global)

Implement once in the layout as a site-wide schema object, using LocalBusiness:

@type: "LocalBusiness" (or a subtype later if we formally choose one) 
Schema.org

name: â€œCleanout2Closingâ€

url: site URL

image: logo URL (from assets)

telephone: business phone

address: Tucson address / mailing address as appropriate

areaServed: objects referencing Tucson, AZ and Green Valley, AZ

sameAs: list of social/brand URLs (if available)

All of this should be sourced from a small internal config file and/or environment variables, not per-page frontmatter.

5. Page-type â†’ schema mapping

Use the page_type field from frontmatter (defined in Content_Contract.md) to decide what JSON-LD to generate. At minimum, every page gets:

WebPage schema describing that specific page.

BreadcrumbList matching the site IA. 
Google for Developers
+1

Then, add feature-specific types for guides and FAQs.

5.1 Common WebPage schema (all pages)

For every page:

Build a WebPage object with:

@type: "WebPage"

name: frontmatter title

url: frontmatter canonical_url

description: frontmatter description

isPartOf: {"@id": <WebSite URL>} or nested WebSite object

Optional:

breadcrumb: link to the BreadcrumbList object

inLanguage: "en-US"

mainEntity: frontmatter main_entity where appropriate

5.2 Service pillars (page_type: "service_pillar")

Schema objects:

WebPage (above)

BreadcrumbList

Optional: you may include a reference back to the LocalBusiness via about or provider but do not introduce Service schema unless a future decision explicitly adds it.

5.3 GEO service pages (page_type: "geo_service")

Schema objects:

WebPage (above)

BreadcrumbList

Add geographic hints via about or spatialCoverage pointing to:

A simple Place with name â€œTucson, Arizonaâ€ or â€œGreen Valley, Arizonaâ€ and the URL of the corresponding GEO hub.

Do not add new schema types beyond whatâ€™s approved in Master Plan / Content Contract.

5.4 Guides (page_type: "guide")

Depending on the guideâ€™s format, choose one of:

BlogPosting

Use when the guide is informational, not strictly step-by-step. 
cemkiray.com
+1

Schema objects:

BlogPosting

WebPage

BreadcrumbList

BlogPosting fields:

headline: frontmatter title

description: frontmatter description

author: Bradley Hunt (Person) or Cleanout2Closing (Organization)

datePublished / dateModified: from frontmatter date / updated

mainEntityOfPage: canonical URL

HowTo

Use when the guide is explicitly step-based (e.g. â€œStep 1, Step 2â€¦â€), such as â€œWhat to do with an inherited house in Tucsonâ€ or â€œAssisted living move â€“ what happens to the house.â€ 
Google for Developers

Schema objects:

HowTo

WebPage

BreadcrumbList

HowTo fields:

name: frontmatter title

description: frontmatter description

step: array of HowToStep built from section headings (where it makes sense)

For each guide page, pick either BlogPosting or HowTo based on the actual content structure, not both.

5.5 FAQs (page_type: "faqs" or pages with faq_block)

When a page includes a faq_block in frontmatter and actually renders those questions/answers on the page:

Schema objects:

WebPage

BreadcrumbList

FAQPage (if and only if the page shows a list of Q&A pairs)

FAQ rules:

Use FAQPage only when the page truly displays a list of FAQs with answers (no user-generated answers). 
Google for Developers
+1

Each Question / Answer in JSON-LD must match the visible on-page text (no hidden or synthetic Q&A). 
Market My Market
+1

Build the FAQ schema solely from the faq_block frontmatter and its rendered content.

6. BreadcrumbList generation

Implement a shared helper that generates BreadcrumbList JSON-LD from the pageâ€™s path segments and the IA.

Derive the breadcrumb trail from the route:

Example: /az/tucson/estate-cleanout-and-home-sale becomes:

Home â†’ Arizona â†’ Tucson â†’ Estate Cleanout & Home Sale

Produce BreadcrumbList with:

@type: "BreadcrumbList"

itemListElement: array of ListItem objects in order, each with:

position: 1, 2, 3, â€¦

name: label (e.g. â€œHomeâ€, â€œArizonaâ€, â€œTucsonâ€)

item: URL of the breadcrumb level. 
Google for Developers
+1

Breadcrumb generation should be deterministic and not require manual configuration per page.

7. Meta tags & basic on-page SEO

Seo.astro should:

Title

Use frontmatter title and optionally append a short site suffix (e.g. | Cleanout2Closing).

Keep titles human-readable and aligned with the on-page H1.

Meta description

Use frontmatter description.

Ensure each page has a unique, descriptive meta description that reflects the visible content, per Googleâ€™s page metadata guidance. 
Google for Developers
+1

Canonical URL

Use frontmatter canonical_url.

Output <link rel="canonical" href="..." /> on every indexable page to avoid duplicate URL issues. 
Google for Developers

Robots / noindex

If noindex: true in frontmatter, output:

<meta name="robots" content="noindex, nofollow" />


Otherwise, omit or default to standard indexing.

Open Graph / Twitter (recommended)

Use frontmatter (or config) for:

og:title, og:description, og:url, og:type, og:image

Twitter card equivalents

Keep OG tags consistent with the HTML <title> and description.

8. Validation & QA

Before calling 7.2.4 complete:

Rich results validation

Run several key URLs (home, one service pillar, one Tucson GEO service, one guide, FAQs) through Googleâ€™s Rich Results Test / structured-data testing tools. 
cemkiray.com
+1

Fix any hard errors in JSON-LD.

Search Console checks

Ensure Search Console shows the domain and is recording enhancement data.

Confirm that relevant rich-result reports exist (where applicable), such as FAQ or HowTo.

Content parity

Spot-check that:

FAQ questions/answers match visible content.

HowTo steps reasonably align with step sections.

Descriptions and titles used in JSON-LD reflect the real page.

Performance sanity

Confirm that adding JSON-LD and meta tags does not introduce layout shifts, runtime errors, or hydration issues.

9. Completion criteria

Task 7.2.4 is considered complete when:

Seo.astro, JsonLd.astro, and schema.ts (or equivalent) exist and are wired into the main layout.

All page types defined in Content_Contract.md emit:

WebPage, BreadcrumbList, and any required feature schema (FAQPage, HowTo, BlogPosting) according to this mapping.

WebSite and LocalBusiness schema are emitted on every page.

At least one URL of each major type validates cleanly in Googleâ€™s Rich Results Test.

Search Console begins reporting structured-data information for the domain (once crawled).

When this checklist is done, update C2C_MegaSite_MasterPlan.md under Phase 7 â†’ 7.2.4 to mark â€œStatus: Completeâ€ and briefly summarize any implementation nuances or deviations.
