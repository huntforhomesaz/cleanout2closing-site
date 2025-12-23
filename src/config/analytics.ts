/**
 * src/config/analytics.ts
 * Analytics configuration - single source of truth
 * Task 7.2.6 - Analytics and Search Console
 * 
 * All analytics settings are centralized here.
 * No hard-coded IDs in components.
 */

/**
 * GA4 Configuration
 * 
 * IMPORTANT: Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID
 * before going to production.
 */
export const GA4_CONFIG = {
  // GA4 Measurement ID - replace with actual ID
  measurementId: 'G-XXXXXXXXXX',
  
  // Enable/disable analytics globally
  enabled: true,
  
  // Debug mode - enables verbose console logging
  // Set to true during development/testing
  debug: false,
  
  // Respect Do Not Track browser setting
  respectDNT: true,
} as const;

/**
 * Environment detection
 * Analytics only fires in production by default
 */
export const isProduction = (): boolean => {
  // In Astro static builds, we check for production indicators
  // This will be evaluated at build time for static pages
  if (typeof window !== 'undefined') {
    return window.location.hostname === 'cleanout2closing.com' ||
           window.location.hostname === 'www.cleanout2closing.com';
  }
  return import.meta.env.PROD ?? false;
};

/**
 * Check if Do Not Track is enabled
 */
export const isDNTEnabled = (): boolean => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return false;
  }
  // Check various DNT indicators
  const dnt = navigator.doNotTrack || 
              (window as any).doNotTrack || 
              (navigator as any).msDoNotTrack;
  return dnt === '1' || dnt === 'yes';
};

/**
 * Determine if analytics should be active
 */
export const shouldLoadAnalytics = (): boolean => {
  if (!GA4_CONFIG.enabled) return false;
  if (GA4_CONFIG.respectDNT && isDNTEnabled()) return false;
  if (!isProduction() && !GA4_CONFIG.debug) return false;
  return true;
};

/**
 * Event names - standardized across the site
 */
export const GA_EVENTS = {
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  CTA_CLICK: 'cta_click',
  PHONE_CLICK: 'phone_click',
  EMAIL_CLICK: 'email_click',
} as const;

export type GAEventName = typeof GA_EVENTS[keyof typeof GA_EVENTS];
