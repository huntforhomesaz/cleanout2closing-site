/**
 * src/content.config.ts
 * Astro Content Collections configuration
 * Task 7.2.3 - Content wiring and frontmatter
 * 
 * Defines collections for:
 * - pages (content/pages/) - core pages, services, personas
 * - serviceAreas (content/service-areas/) - service-areas.md and az.md
 * - geo (content/geo/) - GEO hubs and service pages
 * - guides (content/guides/) - educational guides
 * 
 * Schema based on Content_Contract.md and Decap CMS field definitions
 */

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * FAQ item schema
 * Per Content_Contract.md section 5.3:
 * - question (required)
 * - answer (required)
 * - audience (optional - heir, trustee, senior, etc.)
 * - schema (optional - whether to include in FAQPage JSON-LD)
 */
const faqItemSchema = z.object({
  question: z.string(),
  answer: z.string(),
  audience: z.string().optional(),
  schema: z.boolean().optional(),
});

/**
 * GEO object schema
 * Per Content_Contract.md section 5.2
 */
const geoSchema = z.object({
  state: z.string().optional(),
  city: z.string().optional(),
  metro: z.string().optional(),
  region: z.string().optional(),
}).optional();

/**
 * Core page schema - shared fields across all page types
 * Per Content_Contract.md section 5.1
 * 
 * Note: page_type and template enums are intentionally flexible to accommodate
 * existing content variations without requiring retroactive normalization.
 */
const corePageSchema = z.object({
  // Required fields
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  date: z.string(),
  updated: z.string(),
  
  // Page type and template - flexible enum to match existing content
  // Content_Contract.md defines: home, service_pillar, geo_service, guide, contact
  // Existing content also uses: about, persona, faqs, reviews, services, geo_hub
  page_type: z.enum([
    'home',
    'service_pillar',
    'geo_service',
    'geo_hub',
    'guide',
    'contact',
    'about',
    'persona',
    'faqs',
    'reviews',
    'services',
  ]),
  
  // Template - determines which layout to use
  // Primary layout selector per locked assumption #4
  template: z.enum([
    'home',
    'service_pillar',
    'geo_service',
    'geo_hub',
    'guide',
    'contact',
    'about',
    'persona',
    'faq',
    'reviews',
    'services',
  ]),
  
  // Required arrays
  tags: z.array(z.string()),
  
  // Required strings
  main_entity: z.string(),
  canonical_url: z.string(),
  
  // Optional fields
  hero_image: z.string().optional(),
  noindex: z.boolean().optional().default(false),
  
  // FAQ block - optional array of FAQ items
  faq_block: z.array(faqItemSchema).optional(),
  
  // GEO-specific fields (optional, used by geo_service and some guides)
  geo: geoSchema,
});

/**
 * Pages collection
 * Directory: content/pages/
 * Covers: home, how-it-works, services overview, service pillars, 
 *         personas, about, contact, faqs, reviews
 * 
 * generateId: Uses filename (without extension) as ID, not frontmatter slug
 */
const pagesCollection = defineCollection({
  loader: glob({ 
    pattern: '**/*.md', 
    base: './content/pages',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: corePageSchema,
});

/**
 * Service Areas collection
 * Directory: content/service-areas/
 * Covers: service-areas.md, az.md (state hub)
 */
const serviceAreasCollection = defineCollection({
  loader: glob({ 
    pattern: '**/*.md', 
    base: './content/service-areas',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: corePageSchema,
});

/**
 * GEO collection
 * Directory: content/geo/
 * Covers: Tucson hub, Green Valley hub, and all GEO service pages
 * 
 * Note: az-tucson.md has page_type: "guide" instead of "geo_hub"
 * This is a known mismatch documented in Task 7.2.3 output.
 */
const geoCollection = defineCollection({
  loader: glob({ 
    pattern: '**/*.md', 
    base: './content/geo',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: corePageSchema,
});

/**
 * Guides collection
 * Directory: content/guides/
 * Covers: All educational guides and checklists
 */
const guidesCollection = defineCollection({
  loader: glob({ 
    pattern: '**/*.md', 
    base: './content/guides',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: corePageSchema,
});

/**
 * Export all collections
 */
export const collections = {
  pages: pagesCollection,
  serviceAreas: serviceAreasCollection,
  geo: geoCollection,
  guides: guidesCollection,
};
