/**
 * src/config/site.ts
 * Site-wide configuration for SEO and JSON-LD
 * Task 7.2.4 - JSON-LD and SEO wiring
 * 
 * Single source of truth for:
 * - Site metadata
 * - LocalBusiness schema data
 * - WebSite schema data
 * - Author/Publisher info for BlogPosting
 */

export const SITE_CONFIG = {
  // Site basics
  name: 'Cleanout2Closing',
  url: 'https://cleanout2closing.com',
  language: 'en-US',
  
  // For title suffixes
  titleSuffix: ' | Cleanout2Closing',
  
  // LocalBusiness data
  business: {
    name: 'Cleanout2Closing',
    description: 'Realtor-led estate transition help in Tucson. From cleanout to closing, I coordinate vendors and the home sale so families can focus on what matters most.',
    url: 'https://cleanout2closing.com',
    logo: 'https://cleanout2closing.com/images/c2c/C2C_Logo_Final.png',
    image: 'https://cleanout2closing.com/images/c2c/C2C_Logo_Final.png',
    email: 'bradley@cleanout2closing.com',
    // Address (Tucson-based)
    address: {
      addressLocality: 'Tucson',
      addressRegion: 'AZ',
      addressCountry: 'US',
    },
  },
  
  // Author info for BlogPosting
  author: {
    name: 'Bradley Hunt',
    url: 'https://cleanout2closing.com/about',
  },
} as const;

/**
 * Schema @id constants for cross-referencing
 */
export const WEBSITE_ID = 'https://cleanout2closing.com/#website';
export const LOCAL_BUSINESS_ID = 'https://cleanout2closing.com/#localbusiness';
