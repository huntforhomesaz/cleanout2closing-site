/**
 * src/lib/trackEvent.ts
 * GA4 event tracking helper
 * Task 7.2.6 - Analytics and Search Console
 * 
 * Centralized, type-safe event tracking.
 * Non-blocking, fails silently.
 */

import { GA_EVENTS, type GAEventName, GA4_CONFIG } from '../config/analytics';

/**
 * Event parameters interface
 */
interface EventParams {
  page_type?: string;
  page_path?: string;
  form_name?: string;
  cta_variant?: string;
  link_url?: string;
  link_text?: string;
  [key: string]: string | number | boolean | undefined;
}

/**
 * Track a GA4 event
 * 
 * @param eventName - The event name (use GA_EVENTS constants)
 * @param params - Additional event parameters
 * 
 * Usage:
 * trackEvent(GA_EVENTS.CTA_CLICK, { cta_variant: 'hero_primary', page_type: 'home' });
 */
export function trackEvent(eventName: GAEventName | string, params: EventParams = {}): void {
  try {
    // Ensure gtag is available
    if (typeof window === 'undefined' || typeof (window as any).gtag !== 'function') {
      if (GA4_CONFIG.debug) {
        console.log('[Analytics] gtag not available, event not tracked:', eventName, params);
      }
      return;
    }

    // Add common parameters
    const enrichedParams: EventParams = {
      ...params,
      page_path: params.page_path || window.location.pathname,
    };

    // Send event
    (window as any).gtag('event', eventName, enrichedParams);

    if (GA4_CONFIG.debug) {
      console.log('[Analytics] Event tracked:', eventName, enrichedParams);
    }
  } catch (error) {
    // Fail silently - analytics should never break the site
    if (GA4_CONFIG.debug) {
      console.error('[Analytics] Error tracking event:', error);
    }
  }
}

/**
 * Track contact form submission
 */
export function trackFormSubmit(formName: string, pageType: string): void {
  trackEvent(GA_EVENTS.CONTACT_FORM_SUBMIT, {
    form_name: formName,
    page_type: pageType,
  });
}

/**
 * Track CTA button click
 */
export function trackCTAClick(ctaVariant: string, pageType: string): void {
  trackEvent(GA_EVENTS.CTA_CLICK, {
    cta_variant: ctaVariant,
    page_type: pageType,
  });
}

/**
 * Track phone link click
 */
export function trackPhoneClick(linkText: string): void {
  trackEvent(GA_EVENTS.PHONE_CLICK, {
    link_text: linkText,
  });
}

/**
 * Track email link click
 */
export function trackEmailClick(linkUrl: string): void {
  trackEvent(GA_EVENTS.EMAIL_CLICK, {
    link_url: linkUrl,
  });
}

// Re-export event constants for convenience
export { GA_EVENTS };
