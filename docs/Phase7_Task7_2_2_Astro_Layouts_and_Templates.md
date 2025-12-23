Phase 7 â€“ Task 7.2.2 Astro Layouts & Template Wiring

For: cleanout2closing-site (Astro + Netlify + Decap CMS)

0. Doc role

This document tells Claude exactly how to implement page layouts and template wiring in Astro for Cleanout2Closing.

It must align with:

C2C_MegaSite_MasterPlan.md

IA_Map.md

Page_Templates.md

Content_Contract.md

Phase_Decisions_Log.md

Assets_Inventory.md

Brand_Guardrails.md

It assumes Task 7.2.1 (repo + content structure) is done and the content/ tree exists as specified.

It does not cover Decap config (admin/config.yml) or JSON-LD details â€“ those are Tasks 7.2.3 and 7.2.4.

Astro layouts are the reusable page shells that let us share headers, footers, and meta across pages.
Astro Documentation
+1
 Astro content collections give us a typed, centralized way to load Markdown entries and their frontmatter.
Astro Documentation
+2
Astro Documentation
+2

1. Assumptions

Astro v4 or v5 project using the standard structure: src/components, src/layouts, src/pages, public, plus a content/ directory as defined in Task 7.2.1.
Astro Documentation
+1

Content is stored as Markdown with frontmatter, wired via Astro Content Collections and src/content.config.ts.
Astro Documentation
+2
Astro Documentation
+2

The final site will be deployed to Netlify using standard Astro + Netlify patterns.
Astro Documentation
+2
Netlify Docs
+2

2. Layout hierarchy

Create a small, composable layout hierarchy under src/layouts/:

src/layouts/
  BaseLayout.astro
  HomeLayout.astro
  ServicePillarLayout.astro
  GeoServiceLayout.astro
  GuideLayout.astro
  ContactLayout.astro

2.1 BaseLayout.astro

Role: universal shell for all pages.

Responsibilities:

<html>, <head>, <body> structure.

Site-wide <title> and <meta> fallbacks.

Global header/nav and footer components.

Slot area for page-specific content.

Slot or prop placeholder for JSON-LD (wired later in Task 7.2.4).

Implementation pattern (conceptual):

---
// BaseLayout.astro
interface Props {
  title?: string;
  description?: string;
  // optional JSON-LD object later
  jsonLd?: any;
}

const { title, description } = Astro.props;
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>{title ?? 'Cleanout2Closing | From cleanout to closing'}</title>
    <meta name="description" content={description ?? 'Estate transition and home sale help in Tucson.'} />
    <!-- JSON-LD injection handled in Task 7.2.4 -->
    <slot name="head" />
  </head>
  <body>
    <header>
      <!-- Global nav component (e.g., <SiteNav />) -->
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <!-- Global footer component -->
    </footer>
  </body>
</html>


Astro supports nested layouts with slot transfer, so page-specific layouts can wrap inside BaseLayout without repeating structure.
DEV Community

2.2 Page-type layouts

Each page uses one of the locked templates in Page_Templates.md. This section defines the Astro layout components that correspond to those templates.

2.2.1 HomeLayout.astro

Used by: home.md (page_type: home, template: home or equivalent).

Responsibilities (high-level; details live in Page_Templates.md):

Hero section: clear positioning, simple CTA (â€œTalk to Bradleyâ€ or similar).

â€œWho we helpâ€ tiles: 3â€“4 cards (Inherited/Probate, Seniors, Out-of-State, Trustees/PRs).

â€œHow it worksâ€ mini-steps.

Trust/proof snippet (Stratton Group, years in Tucson, etc.).

Soft CTA near bottom.

Implementation shape:

---
// HomeLayout.astro
import BaseLayout from './BaseLayout.astro';

interface Props {
  frontmatter: any;
  Content: any; // rendered Markdown body
}

const { frontmatter, Content } = Astro.props;
---

<BaseLayout title={frontmatter.title} description={frontmatter.description}>
  <section class="hero">
    <!-- Use frontmatter.hero_heading, hero_subheading, primary_cta_label, etc. -->
  </section>

  <section class="who-we-help">
    <!-- Cards from frontmatter or hard-coded; link to persona/service pages -->
  </section>

  <section class="how-it-works">
    <!-- 3-step overview from frontmatter or Content -->
  </section>

  <section class="proof">
    <!-- Short trust block; can consume a proof snippet from Content or frontmatter -->
  </section>

  <section class="cta">
    <!-- Bottom CTA pointing to /contact -->
  </section>
</BaseLayout>


The actual field names must follow Content_Contract.md (e.g., hero, cta, faq_block). Keep the layout generic and read from frontmatter where possible.

2.2.2 ServicePillarLayout.astro

Used by:

service-inherited-and-probate-property.md

service-senior-transitions.md

service-trustee-support.md

service-out-of-state-owners.md

service-cleanout-and-vendor-coordination.md

for-realtors-and-professionals.md (if treated as pillar)

Responsibilities:

Hero with â€œWho this is forâ€ and â€œWhat problem we solveâ€.

â€œHow we helpâ€ section (bullets tied to your service model).

Process/steps.

Boundaries: â€œWhat we do / What we donâ€™t doâ€ (required per Content Contract).

FAQs block.

Soft CTA.

Shape:

---
// ServicePillarLayout.astro
import BaseLayout from './BaseLayout.astro';

interface Props {
  frontmatter: any;
  Content: any;
}

const { frontmatter, Content } = Astro.props;
---

<BaseLayout title={frontmatter.title} description={frontmatter.description}>
  <section class="hero">
    <!-- Service-specific hero -->
  </section>

  <section class="who-this-is-for">
    <!-- from frontmatter.audience or similar -->
  </section>

  <section class="how-we-help">
    <!-- bullets / cards from frontmatter or Content -->
  </section>

  <section class="process-steps">
    <!-- 3â€“5 steps; can be structured data for HowTo later -->
  </section>

  <section class="boundaries">
    <!-- What we do / What we donâ€™t do -->
  </section>

  <section class="faqs">
    <!-- Map over frontmatter.faq_block[] -->
  </section>

  <section class="cta">
    <!-- CTA to /contact -->
  </section>
</BaseLayout>

2.2.3 GeoServiceLayout.astro

Used by:

az-tucson-estate-cleanout-and-home-sale.md

az-tucson-senior-transition-and-home-sale.md

az-tucson-out-of-state-owner-help.md

az-green-valley-senior-and-estate-home-sale.md

az-green-valley-out-of-state-owner-help.md

Responsibilities:

GEO-specific hero (Tucson / Green Valley).

Local context block (references probate/senior context for that area).

â€œHow we handle this in [City]â€ section.

Local proof/anchoring (e.g., mention Tucson/Green Valley explicitly).

Boundaries + FAQs per Content Contract.

Internal links back to:

/service-areas

/az

City hub (/az/tucson, /az/green-valley)

Shape:

---
// GeoServiceLayout.astro
import BaseLayout from './BaseLayout.astro';

interface Props {
  frontmatter: any;
  Content: any;
}

const { frontmatter, Content } = Astro.props;
---

<BaseLayout title={frontmatter.title} description={frontmatter.description}>
  <section class="hero">
    <!-- City-specific hero -->
  </section>

  <section class="local-context">
    <!-- Local probate/senior context, pulled from Content -->
  </section>

  <section class="how-we-help-here">
    <!-- Steps / bullets tuned to the GEO -->
  </section>

  <section class="boundaries">
    <!-- What we do / donâ€™t do, still required -->
  </section>

  <section class="faqs">
    <!-- Localized FAQs from frontmatter -->
  </section>

  <section class="related-links">
    <!-- Links to /service-areas, /az, city hub, related guides -->
  </section>

  <section class="cta">
    <!-- CTA to /contact -->
  </section>
</BaseLayout>

2.2.4 GuideLayout.astro

Used by:

inherited-house-tucson-what-to-do.md

pima-county-probate-property-timeline.md

assisted-living-move-tucson-what-happens-to-the-house.md

Responsibilities:

Hero with clear problem statement (â€œI inherited a houseâ€¦â€).

Body content as a structured guide (sections, lists, etc.).

Optional â€œAt-a-glanceâ€ summary or checklist box.

Internal links to:

Relevant service pillar(s)

Tucson hub or appropriate GEO page

Contact page

Shape:

---
// GuideLayout.astro
import BaseLayout from './BaseLayout.astro';

interface Props {
  frontmatter: any;
  Content: any;
}

const { frontmatter, Content } = Astro.props;
---

<BaseLayout title={frontmatter.title} description={frontmatter.description}>
  <article class="guide">
    <header class="hero">
      <!-- Title, subheading, quick summary -->
    </header>

    <section class="guide-body">
      <Content />
    </section>

    <section class="related-links">
      <!-- Links to relevant service + GEO pages -->
    </section>

    <section class="cta">
      <!-- Soft CTA (â€œIf you want help with this in Tucsonâ€¦â€) -->
    </section>
  </article>
</BaseLayout>


Guide pages may later be tagged as HowTo/FAQPage in JSON-LD; this layout just ensures structure supports that.
Astro Documentation
+1

2.2.5 ContactLayout.astro

Used by:

contact.md (page_type: contact)

Responsibilities:

Simple hero reassuring â€œno pressure.â€

Contact form area (Netlify Forms wiring in Task 7.2.5).

Short â€œwhat happens after you reach outâ€ section.

Shape:

---
// ContactLayout.astro
import BaseLayout from './BaseLayout.astro';

interface Props {
  frontmatter: any;
  Content: any;
}

const { frontmatter, Content } = Astro.props;
---

<BaseLayout title={frontmatter.title} description={frontmatter.description}>
  <section class="hero">
    <!-- Reassuring copy from frontmatter / Content -->
  </section>

  <section class="form-section">
    <!-- Netlify form markup will go here in 7.2.5 -->
  </section>

  <section class="what-to-expect">
    <Content />
  </section>
</BaseLayout>

3. Wiring layouts to content collections

Use Astro Content Collections to load entries and pass them into the appropriate layout.
Astro Documentation
+2
Astro Documentation
+2

3.1 Content config (high-level)

In src/content.config.ts:

Define collections for:

pages â†’ content/pages/**.md

service_areas â†’ content/service-areas/**.md

geo â†’ content/geo/**.md

guides â†’ content/guides/**.md

Use defineCollection() with loader: glob({ pattern: '**/*.md', base: './content/pages' }) (and equivalent for each).
Astro Documentation
+2
GitHub
+2

Schemas should mirror Content_Contract.md (fields: title, description, slug, page_type, template, tags, hero fields, FAQ blocks, GEO fields, etc.). The exact schema details belong to Task 7.2.3, but you must design layouts to read from those fields.

3.2 Route files calling layouts

In each src/pages/*.astro route:

Use getEntry() / getCollection() from astro:content to fetch the right entry by slug or id.
Astro Documentation
+2
Astro Documentation
+2

Pass entry.data (frontmatter) and entry.body (rendered content) to the matching layout.

Example for Home:

---
// src/pages/index.astro
import { getEntry } from 'astro:content';
import HomeLayout from '../layouts/HomeLayout.astro';

const homeEntry = await getEntry('pages', 'home'); // or filter by slug
const { data, render } = await homeEntry.render();
const Content = render.Content;
---

<HomeLayout frontmatter={data}>
  <Content slot="body" />
</HomeLayout>


You can also pass Content as a prop instead of using a slot; both are acceptable as long as layouts get frontmatter and a renderable body.

For GEO pages, use dynamic routes or explicit routes (as defined in 7.2.1) but the pattern is the same: find entry in geo collection by slug, choose GeoServiceLayout, and render.

4. Mapping page_type / template to layouts

The Content Contract already ties each page_type to a template; layouts must follow that mapping:

page_type: "home" â†’ HomeLayout.astro

page_type: "service_pillar" â†’ ServicePillarLayout.astro

page_type: "geo_service" â†’ GeoServiceLayout.astro

page_type: "guide" â†’ GuideLayout.astro

page_type: "contact" â†’ ContactLayout.astro

You may either:

Hardcode this mapping in each route file (index.astro, services.astro, etc.), or

Implement a small helper in src/lib/layoutMap.ts that returns the correct layout component based on page_type and template.

Whatever approach you take, it must remain consistent with Page_Templates.md and Content_Contract.md. Any change to this mapping must be recorded in Phase_Decisions_Log.md the same day.

5. Styling and components (constraints)

Styling approach (Tailwind, CSS modules, or plain CSS) is not dictated here, but:

Layouts must be cleanly structured with semantic HTML (<section>, <article>, <header>, <nav>, <footer>).

Components for nav/footer should live in src/components/ and be reused by BaseLayout.
CloudCannon
+2
cursor.directory
+2

Do not hardcode copy beyond whatâ€™s necessary for structure. Prefer frontmatter and Markdown content so Bradley can edit via Decap.

6. Task 7.2.2 completion checklist

Phase 7 Task 7.2.2 is complete when:

 src/layouts/BaseLayout.astro exists and:

 Provides shared HTML skeleton, head, header/nav, footer, and <slot /> structure.

 Accepts title and description props from frontmatter.

 Has a placeholder for JSON-LD (props or dedicated <JsonLd /> component to be implemented in 7.2.4).

 src/layouts/HomeLayout.astro exists and:

 Wraps BaseLayout.

 Implements all sections required by the Home Page Template (hero, who-we-help, how-it-works, proof, CTA).

 Reads heading/CTA/proof data from frontmatter and/or child content.

 src/layouts/ServicePillarLayout.astro exists and:

 Wraps BaseLayout.

 Implements sections required by the Service Pillar template (hero, who-this-is-for, how-we-help, process, boundaries, FAQs, CTA).

 src/layouts/GeoServiceLayout.astro exists and:

 Wraps BaseLayout.

 Implements GEO-specific hero/context, local process, boundaries, FAQs, related links, CTA.

 src/layouts/GuideLayout.astro exists and:

 Wraps BaseLayout.

 Renders guide content as an <article>, with hero, body, related links, CTA.

 src/layouts/ContactLayout.astro exists and:

 Wraps BaseLayout.

 Provides hero, form section placeholder, and â€œwhat to expectâ€ area.

 Each relevant src/pages/*.astro route:

 Loads content via Astro Content Collections (getEntry / getCollection).

 Passes frontmatter and Content to the correct layout based on page_type / template.

Once all boxes are checked, you can move to Task 7.2.3 (Decap CMS configuration & collection schema wiring).