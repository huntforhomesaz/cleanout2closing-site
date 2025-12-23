/**
 * src/lib/schema.ts
 * JSON-LD schema builder functions
 * Task 7.2.4 - JSON-LD and SEO wiring
 * 
 * LOCKED MAPPING TABLE RULES:
 * - Canonical page_types that drive schema: home, service_pillar, geo_service, guide, contact
 * - Non-canonical page_types (about, persona, faqs, reviews, services, geo_hub): BreadcrumbList ONLY
 * - FAQPage: only when faq_block exists AND at least one item has schema: true
 * - LocalBusiness: one entity, reused via @id, never duplicated
 * - BreadcrumbList: every indexable page, based on IA_Map.md
 */

import { SITE_CONFIG, WEBSITE_ID, LOCAL_BUSINESS_ID } from '../config/site';

// =============================================================================
// TYPES
// =============================================================================

export interface FaqItem {
  question: string;
  answer: string;
  audience?: string;
  schema?: boolean;
}

export interface GeoData {
  state?: string;
  city?: string;
}

export interface PageData {
  title: string;
  description: string;
  canonical_url: string;
  page_type: string;
  slug: string;
  date?: string;
  updated?: string;
  main_entity?: string;
  faq_block?: FaqItem[];
  geo?: GeoData;
}

export interface BreadcrumbSegment {
  name: string;
  url: string;
}

// =============================================================================
// CANONICAL PAGE TYPE CHECK
// =============================================================================

const CANONICAL_PAGE_TYPES = ['home', 'service_pillar', 'geo_service', 'guide', 'contact'];

export function isCanonicalPageType(pageType: string): boolean {
  return CANONICAL_PAGE_TYPES.includes(pageType);
}

// =============================================================================
// WEBSITE SCHEMA (home page only)
// =============================================================================

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    publisher: {
      '@id': LOCAL_BUSINESS_ID,
    },
  };
}

// =============================================================================
// LOCAL BUSINESS SCHEMA
// =============================================================================

export function buildLocalBusinessSchema(geoData?: GeoData) {
  const areaServed = geoData?.city 
    ? {
        '@type': 'City',
        name: geoData.city,
        containedInPlace: {
          '@type': 'State',
          name: geoData.state === 'AZ' ? 'Arizona' : (geoData.state || 'Arizona'),
        },
      }
    : {
        '@type': 'City',
        name: 'Tucson',
        containedInPlace: {
          '@type': 'State',
          name: 'Arizona',
        },
      };

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': LOCAL_BUSINESS_ID,
    name: SITE_CONFIG.business.name,
    description: SITE_CONFIG.business.description,
    url: SITE_CONFIG.business.url,
    logo: SITE_CONFIG.business.logo,
    image: SITE_CONFIG.business.image,
    email: SITE_CONFIG.business.email,
    address: {
      '@type': 'PostalAddress',
      ...SITE_CONFIG.business.address,
    },
    areaServed,
  };
}

// =============================================================================
// WEBPAGE SCHEMA (for service_pillar, geo_service, contact)
// =============================================================================

export function buildWebPageSchema(page: PageData) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: page.canonical_url,
    isPartOf: {
      '@id': WEBSITE_ID,
    },
    inLanguage: SITE_CONFIG.language,
  };

  // Add mainEntity for service_pillar and geo_service
  if (page.page_type === 'service_pillar') {
    schema.mainEntity = {
      '@type': 'Service',
      name: page.title.replace(/\s*\|\s*Cleanout2Closing$/, ''),
      provider: {
        '@id': LOCAL_BUSINESS_ID,
      },
    };
  } else if (page.page_type === 'geo_service' && page.geo?.city) {
    schema.mainEntity = {
      '@type': 'Service',
      name: page.title,
      areaServed: {
        '@type': 'City',
        name: page.geo.city,
      },
      provider: {
        '@id': LOCAL_BUSINESS_ID,
      },
    };
  }

  return schema;
}

// =============================================================================
// BLOGPOSTING SCHEMA (for guide pages)
// =============================================================================

export function buildBlogPostingSchema(page: PageData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: page.title,
    description: page.description,
    datePublished: page.date || new Date().toISOString().split('T')[0],
    dateModified: page.updated || page.date || new Date().toISOString().split('T')[0],
    author: {
      '@type': 'Person',
      name: SITE_CONFIG.author.name,
      url: SITE_CONFIG.author.url,
    },
    publisher: {
      '@type': 'Organization',
      '@id': LOCAL_BUSINESS_ID,
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: SITE_CONFIG.business.logo,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': page.canonical_url,
    },
  };
}

// =============================================================================
// FAQPAGE SCHEMA (conditional - only when faq_block has schema: true items)
// =============================================================================

export function buildFaqSchema(faqBlock: FaqItem[] | undefined) {
  if (!faqBlock || faqBlock.length === 0) {
    return null;
  }

  // Filter to only include items with schema: true
  const schemaEligibleFaqs = faqBlock.filter(faq => faq.schema === true);

  if (schemaEligibleFaqs.length === 0) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: schemaEligibleFaqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// =============================================================================
// BREADCRUMB SCHEMA
// =============================================================================

export function buildBreadcrumbSchema(segments: BreadcrumbSegment[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: segments.map((segment, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: segment.name,
      item: segment.url,
    })),
  };
}

/**
 * Generate breadcrumb segments from slug based on IA_Map.md
 * Deterministic - no inference, follows locked IA structure
 */
export function generateBreadcrumbSegments(slug: string, title: string): BreadcrumbSegment[] {
  const baseUrl = SITE_CONFIG.url;
  const segments: BreadcrumbSegment[] = [
    { name: 'Home', url: baseUrl },
  ];

  // Normalize slug
  const path = slug.startsWith('/') ? slug : `/${slug}`;
  
  // Home page - just Home
  if (path === '/' || path === '') {
    return segments;
  }

  // Core pages (single level)
  const corePages: Record<string, string> = {
    '/how-it-works': 'How It Works',
    '/about': 'About',
    '/reviews': 'Reviews',
    '/contact': 'Contact',
    '/faqs': 'FAQs',
  };
  
  if (corePages[path]) {
    segments.push({ name: corePages[path], url: `${baseUrl}${path}` });
    return segments;
  }

  // Services pages
  if (path === '/services') {
    segments.push({ name: 'Services', url: `${baseUrl}/services` });
    return segments;
  }
  
  if (path.startsWith('/services/')) {
    segments.push({ name: 'Services', url: `${baseUrl}/services` });
    segments.push({ name: title.replace(/\s*\|\s*Cleanout2Closing$/, ''), url: `${baseUrl}${path}` });
    return segments;
  }

  // Persona pages (for-*)
  if (path.startsWith('/for-')) {
    segments.push({ name: title.replace(/\s*\|\s*Cleanout2Closing$/, ''), url: `${baseUrl}${path}` });
    return segments;
  }

  // Service areas
  if (path === '/service-areas') {
    segments.push({ name: 'Service Areas', url: `${baseUrl}/service-areas` });
    return segments;
  }

  // Arizona hub
  if (path === '/az') {
    segments.push({ name: 'Service Areas', url: `${baseUrl}/service-areas` });
    segments.push({ name: 'Arizona', url: `${baseUrl}/az` });
    return segments;
  }

  // Tucson pages
  if (path === '/az/tucson') {
    segments.push({ name: 'Service Areas', url: `${baseUrl}/service-areas` });
    segments.push({ name: 'Arizona', url: `${baseUrl}/az` });
    segments.push({ name: 'Tucson', url: `${baseUrl}/az/tucson` });
    return segments;
  }
  
  if (path.startsWith('/az/tucson/')) {
    segments.push({ name: 'Service Areas', url: `${baseUrl}/service-areas` });
    segments.push({ name: 'Arizona', url: `${baseUrl}/az` });
    segments.push({ name: 'Tucson', url: `${baseUrl}/az/tucson` });
    segments.push({ name: title.replace(/\s*\|\s*Cleanout2Closing$/, ''), url: `${baseUrl}${path}` });
    return segments;
  }

  // Green Valley pages
  if (path === '/az/green-valley') {
    segments.push({ name: 'Service Areas', url: `${baseUrl}/service-areas` });
    segments.push({ name: 'Arizona', url: `${baseUrl}/az` });
    segments.push({ name: 'Green Valley', url: `${baseUrl}/az/green-valley` });
    return segments;
  }
  
  if (path.startsWith('/az/green-valley/')) {
    segments.push({ name: 'Service Areas', url: `${baseUrl}/service-areas` });
    segments.push({ name: 'Arizona', url: `${baseUrl}/az` });
    segments.push({ name: 'Green Valley', url: `${baseUrl}/az/green-valley` });
    segments.push({ name: title.replace(/\s*\|\s*Cleanout2Closing$/, ''), url: `${baseUrl}${path}` });
    return segments;
  }

  // Guides
  if (path === '/guides') {
    segments.push({ name: 'Guides', url: `${baseUrl}/guides` });
    return segments;
  }
  
  if (path.startsWith('/guides/')) {
    segments.push({ name: 'Guides', url: `${baseUrl}/guides` });
    segments.push({ name: title.replace(/\s*\|\s*Cleanout2Closing$/, ''), url: `${baseUrl}${path}` });
    return segments;
  }

  // Fallback for any other pages - just add the title
  segments.push({ name: title.replace(/\s*\|\s*Cleanout2Closing$/, ''), url: `${baseUrl}${path}` });
  return segments;
}

// =============================================================================
// MAIN SCHEMA GENERATOR - Implements locked mapping table
// =============================================================================

export interface GeneratedSchemas {
  schemas: Record<string, unknown>[];
  breadcrumbs: BreadcrumbSegment[];
}

/**
 * Generate all JSON-LD schemas for a page based on locked mapping table
 * 
 * Canonical page_types and their schemas:
 * - home: WebSite, LocalBusiness, BreadcrumbList, FAQPage (conditional)
 * - service_pillar: WebPage, LocalBusiness (ref), BreadcrumbList, FAQPage (conditional)
 * - geo_service: WebPage, LocalBusiness (with areaServed), BreadcrumbList, FAQPage (conditional)
 * - guide: BlogPosting, BreadcrumbList, FAQPage (conditional)
 * - contact: WebPage, LocalBusiness (ref), BreadcrumbList, FAQPage (conditional)
 * 
 * Non-canonical page_types: BreadcrumbList ONLY
 */
export function generatePageSchemas(page: PageData): GeneratedSchemas {
  const schemas: Record<string, unknown>[] = [];
  const breadcrumbSegments = generateBreadcrumbSegments(page.slug, page.title);
  
  // Always add BreadcrumbList for all indexable pages
  schemas.push(buildBreadcrumbSchema(breadcrumbSegments));

  // If not a canonical page type, return just breadcrumbs
  if (!isCanonicalPageType(page.page_type)) {
    return { schemas, breadcrumbs: breadcrumbSegments };
  }

  // Handle canonical page types per locked mapping table
  switch (page.page_type) {
    case 'home':
      // WebSite (only on home)
      schemas.push(buildWebSiteSchema());
      // LocalBusiness (full entity on home)
      schemas.push(buildLocalBusinessSchema());
      // FAQPage (conditional)
      const homeFaq = buildFaqSchema(page.faq_block);
      if (homeFaq) schemas.push(homeFaq);
      break;

    case 'service_pillar':
      // WebPage with mainEntity
      schemas.push(buildWebPageSchema(page));
      // LocalBusiness reference (not full entity)
      // Note: We include full LocalBusiness for consistency, using same @id
      schemas.push(buildLocalBusinessSchema());
      // FAQPage (conditional)
      const pillarFaq = buildFaqSchema(page.faq_block);
      if (pillarFaq) schemas.push(pillarFaq);
      break;

    case 'geo_service':
      // WebPage with mainEntity describing service + city
      schemas.push(buildWebPageSchema(page));
      // LocalBusiness with areaServed from geo frontmatter
      schemas.push(buildLocalBusinessSchema(page.geo));
      // FAQPage (conditional)
      const geoFaq = buildFaqSchema(page.faq_block);
      if (geoFaq) schemas.push(geoFaq);
      break;

    case 'guide':
      // BlogPosting (primary schema for guides)
      schemas.push(buildBlogPostingSchema(page));
      // FAQPage (conditional)
      const guideFaq = buildFaqSchema(page.faq_block);
      if (guideFaq) schemas.push(guideFaq);
      // Note: HowTo is conditional and rare - not implemented by default
      // Would require explicit frontmatter flag if needed in future
      break;

    case 'contact':
      // WebPage (generic)
      schemas.push(buildWebPageSchema(page));
      // LocalBusiness
      schemas.push(buildLocalBusinessSchema());
      // FAQPage (conditional)
      const contactFaq = buildFaqSchema(page.faq_block);
      if (contactFaq) schemas.push(contactFaq);
      break;
  }

  return { schemas, breadcrumbs: breadcrumbSegments };
}
