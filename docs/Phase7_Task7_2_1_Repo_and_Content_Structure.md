Phase 7 â€“ Task 7.2.1 Repo and Content Structure

For: cleanout2closing-site (Astro + Netlify + Decap CMS)

0. Doc role

This document tells Claude (or any dev) exactly how to structure the repo and content tree for Cleanout2Closing.

It must align with:

C2C_MegaSite_MasterPlan.md

IA_Map.md

Page_Templates.md

Content_Contract.md

Phase_Decisions_Log.md

Assets_Inventory.md

Brand_Guardrails.md

It does not define layouts, Decap config, or JSON-LD; those are later tasks (7.2.2â€“7.2.4).

The goal here is: a stable folder/file structure that Astro, Decap, and JSON-LD can all rely on.

Astroâ€™s official guidance is to keep a clear separation between src/ (code/layouts) and a dedicated content directory, and to use content collections for Markdown data.
Astro Documentation
+2
Astro Documentation
+2

Decapâ€™s guidance is to define collections against folders in a single config.yml.
Astro Documentation
+1

This spec follows those patterns while honoring the â€œcontent/ treeâ€ already described in the Master Plan.

1. High-level repo structure

Assume a standard Astro project layout with Netlify + Decap:

cleanout2closing-site/
  public/
  src/
    components/
    layouts/
    pages/
    lib/
  content/
    pages/
    service-areas/
    geo/
    guides/
  docs/
  admin/
    config.yml
  astro.config.mjs
  netlify.toml
  package.json
  tsconfig.json
  README.md


Key points:

src/pages/ will hold the Astro route shells that render data from Markdown/collections.
Astro Documentation
+1

content/ is the single, Git-tracked markdown root described in the Master Plan (Phase 5 & 6).

admin/config.yml is the Decap CMS config that will reference folders under content/.
Astro Documentation
+1

If you prefer Astroâ€™s default src/content/ for content collections, you may internally wire astro.config.mjs to treat content/ as the source for content collections. The external structure (paths in this doc and in Decap) must remain as written.

2. Content directory structure

The Master Plan and Phase 6 define four main content â€œfamiliesâ€:

Non-GEO core/Persona pages (Phase 5)

Service-areas spine (service-areas + state hub)

GEO hubs + service pages (Tucson + Green Valley)

Guides (Tucson-focused longform content)

Map those into subfolders under /content:

content/
  pages/
    home.md
    how-it-works.md
    services.md
    service-inherited-and-probate-property.md
    service-senior-transitions.md
    service-trustee-support.md
    service-out-of-state-owners.md
    service-cleanout-and-vendor-coordination.md
    for-realtors-and-professionals.md
    for-heirs-and-personal-representatives.md
    for-seniors-and-their-families.md
    faqs.md
    about.md
    contact.md

  service-areas/
    service-areas.md
    az.md

  geo/
    az-tucson.md
    az-tucson-estate-cleanout-and-home-sale.md
    az-tucson-senior-transition-and-home-sale.md
    az-tucson-out-of-state-owner-help.md
    az-green-valley.md
    az-green-valley-senior-and-estate-home-sale.md
    az-green-valley-out-of-state-owner-help.md

  guides/
    inherited-house-tucson-what-to-do.md
    pima-county-probate-property-timeline.md
    assisted-living-move-tucson-what-happens-to-the-house.md


All of these files already exist conceptually in Phase 5 and Phase 6; this step is about locking their physical location and naming.

Filenames match the canonical filenames listed in the Master Plan.

Frontmatter for each file must follow Content_Contract.md (title, description, slug, date, updated, page_type, template, tags, main_entity, canonical_url, optional hero_image, noindex, plus GEO + FAQ fields where applicable).

Astro content collections are optimized for exactly this pattern: multiple folders of Markdown entries, each belonging to a logical â€œcollection.â€
Astro Documentation
+2
LogRocket Blog
+2

3. Slug and URL alignment

The slug of each page must match the URL plan already locked in the Master Plan and IA:

content/pages/home.md

slug: "/" (or handled specially in routing; see layouts later)

content/pages/how-it-works.md

slug: "/how-it-works"

content/pages/services.md

slug: "/services"

Persona pages:

for-heirs-and-personal-representatives.md â†’ /personas/heirs-and-personal-representatives or /for-heirs-and-personal-representatives (Master Plan uses the latter filename; URL can be either variant but must be consistent across IA_Map, JSON-LD, and internal links).

Service-areas and GEO:

service-areas.md â†’ /service-areas

az.md â†’ /az

az-tucson.md â†’ /az/tucson

az-tucson-estate-cleanout-and-home-sale.md â†’ /az/tucson/estate-cleanout-and-home-sale

az-tucson-senior-transition-and-home-sale.md â†’ /az/tucson/senior-transition-and-home-sale

az-tucson-out-of-state-owner-help.md â†’ /az/tucson/out-of-state-owner-help

az-green-valley.md â†’ /az/green-valley

az-green-valley-senior-and-estate-home-sale.md â†’ /az/green-valley/senior-and-estate-home-sale

az-green-valley-out-of-state-owner-help.md â†’ /az/green-valley/out-of-state-owner-help

Guides:

inherited-house-tucson-what-to-do.md â†’ /guides/inherited-house-tucson-what-to-do

pima-county-probate-property-timeline.md â†’ /guides/pima-county-probate-property-timeline

assisted-living-move-tucson-what-happens-to-the-house.md â†’ /guides/assisted-living-move-tucson-what-happens-to-the-house

All of this is already codified in Phase 5 & 6; this task simply ensures the content tree and slugs mirror those decisions.

4. Astro + Decap alignment (for later tasks)

Even though Decap config and layouts are later tasks, 7.2.1 needs to anticipate them:

Collections by folder

Decap will be configured with one collection per folder:
Astro Documentation
+1

pages â†’ folder: "content/pages"

service_areas â†’ folder: "content/service-areas"

geo â†’ folder: "content/geo"

guides â†’ folder: "content/guides"

Astro content collections

Astroâ€™s content collections will be defined to read from the same folders. There are two viable approaches per Astro docs:

Use src/content as the logical content root and point each collection to ../../content/... paths, or

Use Astro 5â€™s Content Layer API to mount content/ as the base directory for collections.
Astro Documentation
+2
astro-antfustyle-theme.vercel.app
+2

Either way, the on-disk structure defined in section 2 must remain stable.

Frontmatter schema

The Zod schemas for each Astro collection (e.g. pagesCollection, geoCollection, etc.) must mirror Content_Contract.md. Astroâ€™s docs strongly recommend this for type safety and editor feedback.
Astro Documentation
+2
LogRocket Blog
+2

That schema work lives in Task 7.2.2/7.2.3, not here, but this folder layout makes it trivial.

5. src/pages/ routing shell (high level only)

This task does not require implementing pages, but we need to define the pattern so repo structure is â€œfuture-safeâ€:

Recommended pattern aligned with Astroâ€™s file-based routing:
Astro Documentation
+2
CloudCannon
+2

src/pages/
  index.astro                    # Home (pulls from content/pages/home.md)
  how-it-works.astro             # /how-it-works
  services.astro                 # /services
  about.astro                    # /about
  contact.astro                  # /contact
  faqs.astro                     # /faqs

  service-areas/
    index.astro                  # /service-areas
    az/
      index.astro                # /az
      tucson/
        index.astro              # /az/tucson
      green-valley/
        index.astro              # /az/green-valley

  guides/
    [slug].astro                 # Dynamic route: /guides/{slug}

  personas/
    index.astro?                 # Optional persona hub
    for-heirs-and-personal-representatives.astro
    for-seniors-and-their-families.astro
    for-out-of-state-owners.astro


Notes:

Route filenames do not have to match Markdown filenames; they will read from collections by slug or id. But keeping a close correspondence makes maintenance easier.

Dynamic routes (guides/[slug].astro) will be wired to Astro content collections via getStaticPaths() in Task 7.2.2.

6. Media and public assets (early decisions)

To avoid surprises when wiring Decap:

Use public/images/c2c/ as the default for shared static imagery (logos, hero backgrounds, generic illustrations).
Astro Documentation
+1

If Decap is allowed to upload images, configure:

media_folder: "public/images/uploads"

public_folder: "/images/uploads"

This will be set in admin/config.yml later, but the folders should exist now:

public/
  images/
    c2c/
      logo-cleanout2closing.svg
      logo-cleanout2closing-horizontal.svg
      ...
    uploads/
      (Decap-managed assets)

7. Task 7.2.1 completion checklist

Claude (or dev) can mark this task â€œdoneâ€ when:

 content/ exists with subfolders:

 content/pages/

 content/service-areas/

 content/geo/

 content/guides/

 All Phase 5 & 6 Markdown files are placed in those folders with the exact filenames listed in section 2.

 Each file has valid frontmatter keys required by Content_Contract.md (values can still be refined later).

 src/pages/ has the basic route file layout described in section 5 (even as empty skeletons).

 public/images/c2c/ and public/images/uploads/ folders exist.

 No filenames, slugs, or folder names conflict with the IA or URL patterns in C2C_MegaSite_MasterPlan.md and IA_Map.md.

Once all boxes are checked, Phase 7 can proceed to Task 7.2.2 (Astro layouts and templates).