/**
 * src/lib/getLayout.ts
 * Utility to map template/page_type to layout components
 * Task 7.2.3 - Content wiring
 * 
 * Per locked assumption #4:
 * 1. Use `template` to select layout (primary)
 * 2. Fall back to `page_type` only if template is missing
 * 3. Never infer layouts from directory names
 */

/**
 * Template to layout mapping
 * Maps template values from frontmatter to layout component names
 */
export const templateToLayout: Record<string, string> = {
  // Primary templates from Content_Contract.md
  home: 'HomeLayout',
  service_pillar: 'ServicePillarLayout',
  geo_service: 'GeoServiceLayout',
  guide: 'GuideLayout',
  contact: 'ContactLayout',
  
  // Extended templates found in existing content
  geo_hub: 'GeoServiceLayout',  // GEO hubs use same layout as GEO services
  about: 'ServicePillarLayout', // About uses service pillar structure
  persona: 'ServicePillarLayout', // Persona pages use service pillar structure
  faq: 'GuideLayout', // FAQ page uses guide structure
  reviews: 'ServicePillarLayout', // Reviews uses service pillar structure
  services: 'ServicePillarLayout', // Services overview uses service pillar structure
};

/**
 * Get layout name from frontmatter
 * @param frontmatter - Page frontmatter with template and/or page_type
 * @returns Layout component name
 */
export function getLayoutName(frontmatter: { template?: string; page_type?: string }): string {
  // Primary: use template field
  if (frontmatter.template && templateToLayout[frontmatter.template]) {
    return templateToLayout[frontmatter.template];
  }
  
  // Fallback: use page_type if template is missing
  if (frontmatter.page_type && templateToLayout[frontmatter.page_type]) {
    return templateToLayout[frontmatter.page_type];
  }
  
  // Default fallback
  return 'ServicePillarLayout';
}

/**
 * Type for frontmatter that can be passed to layouts
 * Matches the Props interface in layout components
 */
export interface PageFrontmatter {
  title?: string;
  description?: string;
  canonical_url?: string;
  faq_block?: Array<{
    question: string;
    answer: string;
    audience?: string;
    schema?: boolean;
  }>;
  geo?: {
    state?: string;
    city?: string;
  };
  date?: string;
  updated?: string;
  hero_image?: string;
  page_type?: string;
  template?: string;
  slug?: string;
  tags?: string[];
  main_entity?: string;
  noindex?: boolean;
}
