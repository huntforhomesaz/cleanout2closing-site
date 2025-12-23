Phase 7 â€“ Task 7.2.3 Decap CMS Config & Content Collections

For: cleanout2closing-site (Astro + Netlify + Decap CMS)

0. Doc role

This document tells Claude exactly how to:

Configure Decap CMS (config.yml) for Cleanout2Closing.

Align Decap collections with the Markdown content tree defined in Task 7.2.1.

Keep Decap fields in sync with the frontmatter schema / Astro content collections defined by Content_Contract.md and content.config.ts.

This is a build spec, not site copy. It must:

Respect:

C2C_MegaSite_MasterPlan.md

IA_Map.md

Page_Templates.md

Content_Contract.md

Phase_Decisions_Log.md

Assets_Inventory.md

Brand_Guardrails.md

Prepare all content types so Bradley can edit via /admin using Decapâ€™s UI.
Decap CMS
+2
Decap CMS
+2

1. Admin folder and config location

Decap CMS expects its config in a config.yml file in the folder where the admin UI is served (usually /admin).
Decap CMS
+1

Astroâ€™s own Decap CMS guide uses:

public/admin/index.html for the CMS app

public/admin/config.yml for configuration
Astro Documentation

For this project, standardize on:

cleanout2closing-site/
  public/
    admin/
      index.html
      config.yml


If any earlier docs suggested a top-level /admin/config.yml (outside public), treat that as superseded by this spec. The config must end up at /admin/config.yml in the built site, so placing it in public/admin is the simplest path with Astro.
Astro Documentation
+1

1.1 Create/verify public/admin/index.html

If not already present, create public/admin/index.html with the standard Decap bootstrapping:

<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Cleanout2Closing Admin</title>
  </head>
  <body>
    <!-- Decap CMS app -->
    <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
  </body>
</html>


No inline config override is needed because we use public/admin/config.yml as the default configuration file.
Decap CMS
+1

2. config.yml â€“ global settings

Create public/admin/config.yml with:

backend:
  name: git-gateway        # or "github" if using GitHub backend directly
  branch: main             # adjust if repo default is different

media_folder: "public/images/uploads"
public_folder: "/images/uploads"

locale: "en"

# Optional: display URL for local dev vs Netlify
site_url: "https://cleanout2closing.com" # adjust as needed

collections: []


Notes:

backend.name:

On Netlify, git-gateway is the simplest Git-based backend.
Decap CMS
+1

If you prefer GitHub directly, switch to name: github and add repo: owner/repo.

media_folder and public_folder match the folder decisions from Task 7.2.1 and are consistent with Decap docs.
Decap CMS
+2
Decap CMS
+2

The rest of this spec will replace the empty collections: [] with the actual collections.

3. Collections overview

We need four main content collections, aligned with the content/ folders from Task 7.2.1:

pages â€“ Non-GEO, core and persona pages (content/pages/â€¦).

service_areas â€“ Service-areas spine and state hub (content/service-areas/â€¦).

geo â€“ GEO hubs and GEO service pages (content/geo/â€¦).

guides â€“ Longform guides/checklists (content/guides/â€¦).

Decap supports both â€œfolderâ€ and â€œfilesâ€ collections: folder collections for many similar entries, files collections for a small set of fixed files.
Decap CMS
+1

Weâ€™ll use:

pages: files collection (fixed list of core pages).

service_areas: files collection (fixed service-areas + AZ hub).

geo: folder collection (city/area hubs + GEO services, future-friendly).

guides: folder collection (guides/checklists, new guides allowed).

All collections must share the core fields specified in Content_Contract.md:

title (string)

description (text)

slug (string)

date (datetime)

updated (datetime)

page_type (select)

template (select)

tags (list of strings)

main_entity (string or object)

canonical_url (string/url)

hero_image (image, optional)

noindex (boolean)

faq_block (list of FAQ objects, where applicable)

GEO-specific fields where needed (e.g., city, state)

Weâ€™ll express these using Decap widgets (string, text, datetime, boolean, list, object, image, select).
Decap CMS
+1

4. pages collection (core & persona pages)

A files collection for Phase 5 core pages:

collections:
  - name: "pages"
    label: "Pages"
    label_singular: "Page"
    delete: false
    editor:
      preview: true
    files:
      - name: "home"
        label: "Home"
        file: "content/pages/home.md"
        fields: &core_page_fields
          - { name: "title", label: "Title", widget: "string" }
          - { name: "description", label: "Meta Description", widget: "text" }
          - { name: "slug", label: "Slug", widget: "string" }
          - { name: "date", label: "Created Date", widget: "datetime" }
          - { name: "updated", label: "Updated Date", widget: "datetime" }
          - { name: "page_type", label: "Page Type", widget: "select", options: ["home","service_pillar","persona","faq","about","contact"] }
          - { name: "template", label: "Template", widget: "select", options: ["home","service_pillar","guide","contact"] }
          - { name: "tags", label: "Tags", widget: "list", required: false }
          - { name: "main_entity", label: "Main Entity (for schema)", widget: "string", required: false }
          - { name: "canonical_url", label: "Canonical URL", widget: "string", required: false }
          - { name: "hero_image", label: "Hero Image", widget: "image", required: false }
          - { name: "noindex", label: "Noindex", widget: "boolean", required: false, default: false }
          - label: "FAQs"
            name: "faq_block"
            widget: "list"
            required: false
            fields:
              - { name: "question", label: "Question", widget: "string" }
              - { name: "answer", label: "Answer", widget: "markdown" }
          - { name: "body", label: "Body", widget: "markdown" }

      - name: "how_it_works"
        label: "How It Works"
        file: "content/pages/how-it-works.md"
        fields: *core_page_fields

      - name: "services"
        label: "Services Overview"
        file: "content/pages/services.md"
        fields: *core_page_fields

      - name: "service_inherited_and_probate"
        label: "Service â€“ Inherited & Probate"
        file: "content/pages/service-inherited-and-probate-property.md"
        fields: *core_page_fields

      - name: "service_senior_transitions"
        label: "Service â€“ Senior Transitions"
        file: "content/pages/service-senior-transitions.md"
        fields: *core_page_fields

      - name: "service_trustee_support"
        label: "Service â€“ Trustee Support"
        file: "content/pages/service-trustee-support.md"
        fields: *core_page_fields

      - name: "service_out_of_state_owners"
        label: "Service â€“ Out-of-State Owners"
        file: "content/pages/service-out-of-state-owners.md"
        fields: *core_page_fields

      - name: "service_cleanout_vendor_coordination"
        label: "Service â€“ Cleanout & Vendor Coordination"
        file: "content/pages/service-cleanout-and-vendor-coordination.md"
        fields: *core_page_fields

      - name: "for_realtors_and_professionals"
        label: "For Realtors & Professionals"
        file: "content/pages/for-realtors-and-professionals.md"
        fields: *core_page_fields

      - name: "for_heirs_and_prs"
        label: "For Heirs & Personal Representatives"
        file: "content/pages/for-heirs-and-personal-representatives.md"
        fields: *core_page_fields

      - name: "for_seniors_and_families"
        label: "For Seniors & Their Families"
        file: "content/pages/for-seniors-and-their-families.md"
        fields: *core_page_fields

      - name: "faqs"
        label: "FAQs"
        file: "content/pages/faqs.md"
        fields: *core_page_fields

      - name: "about"
        label: "About"
        file: "content/pages/about.md"
        fields: *core_page_fields

      - name: "contact"
        label: "Contact"
        file: "content/pages/contact.md"
        fields: *core_page_fields


Notes:

delete: false to protect core site pages from being deleted accidentally.
Decap CMS
+1

The &core_page_fields anchor ensures a consistent set of fields across all core pages; Astro schemas must mirror this (see 6.1).
Stack Overflow
+1

5. service_areas collection (service-areas spine)

A second files collection for service-areas overview and AZ hub:

  - name: "service_areas"
    label: "Service Areas"
    label_singular: "Service Area Page"
    delete: false
    editor:
      preview: true
    files:
      - name: "service_areas_overview"
        label: "Service Areas Overview"
        file: "content/service-areas/service-areas.md"
        fields: *core_page_fields

      - name: "az_hub"
        label: "Arizona Hub"
        file: "content/service-areas/az.md"
        fields: *core_page_fields


These are structurally similar to other pages but conceptually part of the GEO spine.

6. geo collection (GEO hubs + local services)

A folder collection for all items in content/geo/, with creation allowed for future markets:

  - name: "geo"
    label: "GEO Pages"
    label_singular: "GEO Page"
    folder: "content/geo"
    create: true
    delete: false
    format: "frontmatter"
    extension: "md"
    slug: "{{slug}}"
    editor:
      preview: true
    fields:
      - { name: "title", label: "Title", widget: "string" }
      - { name: "description", label: "Meta Description", widget: "text" }
      - { name: "slug", label: "Slug", widget: "string" }
      - { name: "date", label: "Created Date", widget: "datetime" }
      - { name: "updated", label: "Updated Date", widget: "datetime" }
      - { name: "page_type", label: "Page Type", widget: "select", options: ["geo_service","geo_hub"] }
      - { name: "template", label: "Template", widget: "select", options: ["geo_service"] }
      - { name: "tags", label: "Tags", widget: "list", required: false }
      - { name: "main_entity", label: "Main Entity (for schema)", widget: "string", required: false }
      - { name: "canonical_url", label: "Canonical URL", widget: "string", required: false }
      - { name: "hero_image", label: "Hero Image", widget: "image", required: false }
      - { name: "noindex", label: "Noindex", widget: "boolean", required: false, default: false }
      - label: "Location"
        name: "location"
        widget: "object"
        required: false
        fields:
          - { name: "city", label: "City", widget: "string" }
          - { name: "state", label: "State", widget: "string", default: "AZ" }
      - label: "FAQs"
        name: "faq_block"
        widget: "list"
        required: false
        fields:
          - { name: "question", label: "Question", widget: "string" }
          - { name: "answer", label: "Answer", widget: "markdown" }
      - { name: "body", label: "Body", widget: "markdown" }


All existing GEO files (az-tucson*.md, az-green-valley*.md) will now conform to this schema.

page_type distinguishes between hubs (geo_hub) and services (geo_service) so layouts and JSON-LD can diverge later if needed.

Folder collections are specifically recommended for groups of similar entries stored in a single folder.
Decap CMS
+1

7. guides collection (guides & checklists)

Another folder collection for /guides content:

  - name: "guides"
    label: "Guides & Checklists"
    label_singular: "Guide"
    folder: "content/guides"
    create: true
    delete: false
    format: "frontmatter"
    extension: "md"
    slug: "{{slug}}"
    editor:
      preview: true
    fields:
      - { name: "title", label: "Title", widget: "string" }
      - { name: "description", label: "Meta Description", widget: "text" }
      - { name: "slug", label: "Slug", widget: "string" }
      - { name: "date", label: "Created Date", widget: "datetime" }
      - { name: "updated", label: "Updated Date", widget: "datetime" }
      - { name: "page_type", label: "Page Type", widget: "select", options: ["guide"] }
      - { name: "template", label: "Template", widget: "select", options: ["guide"] }
      - { name: "tags", label: "Tags", widget: "list", required: false }
      - { name: "main_entity", label: "Main Entity (for schema)", widget: "string", required: false }
      - { name: "canonical_url", label: "Canonical URL", widget: "string", required: false }
      - { name: "hero_image", label: "Hero Image", widget: "image", required: false }
      - { name: "noindex", label: "Noindex", widget: "boolean", required: false, default: false }
      - label: "FAQs"
        name: "faq_block"
        widget: "list"
        required: false
        fields:
          - { name: "question", label: "Question", widget: "string" }
          - { name: "answer", label: "Answer", widget: "markdown" }
      - { name: "body", label: "Body", widget: "markdown" }


This supports existing guides plus future Tucson/Arizona estate-transition guides, consistent with the Content Contract.

8. Matching Astro content collections schema

Astroâ€™s content collections use defineCollection with Zod schemas (or similar) to validate frontmatter.
Astro Documentation
+2
Astro Documentation
+2

Thereâ€™s a known gotcha: build errors occur if Astroâ€™s schema doesnâ€™t match the actual frontmatter (and by extension, Decapâ€™s field definitions). Matching schema exactly to collections in config.yml is the fix.
Stack Overflow

So:

In src/content.config.ts, define collections:

pagesCollection for content/pages/**.md

serviceAreasCollection for content/service-areas/**.md

geoCollection for content/geo/**.md

guidesCollection for content/guides/**.md

Use Zod to enforce the same fields, types, and required/optional flags as in config.yml.

For example (conceptually):

import { defineCollection, z } from "astro:content";

const corePageSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  date: z.string(),
  updated: z.string(),
  page_type: z.enum(["home","service_pillar","persona","faq","about","contact","geo_service","geo_hub","guide"]),
  template: z.enum(["home","service_pillar","geo_service","guide","contact"]),
  tags: z.array(z.string()).optional(),
  main_entity: z.string().optional(),
  canonical_url: z.string().optional(),
  hero_image: z.string().optional(),
  noindex: z.boolean().optional(),
  faq_block: z
    .array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    )
    .optional(),
});


Then reuse corePageSchema (or variants) across the collections, adding GEO-specific fields (city/state) where needed.

9. Task 7.2.3 completion checklist

Phase 7 Task 7.2.3 is complete when:

 public/admin/index.html exists and loads Decap CMS.

 public/admin/config.yml exists and includes:

 Global backend, media_folder, public_folder settings.

 pages collection as a files collection for all Phase 5 core pages.

 service_areas collection as a files collection for service-areas.md and az.md.

 geo collection as a folder collection for content/geo.

 guides collection as a folder collection for content/guides.

 Field definitions across collections that match the frontmatter requirements in Content_Contract.md.

 src/content.config.ts defines Astro content collections (pages, service_areas, geo, guides) with schemas that match the Decap field definitions (names, types, and required/optional status).
Astro Documentation
+2
Astro Documentation
+2

 A test edit via /admin successfully updates a Markdown file in content/ and Astro build passes without schema errors.

Once all boxes are checked, you can proceed to Phase 7 Task 7.2.4 (JSON-LD & SEO wiring) to tie frontmatter into structured data and head tags.