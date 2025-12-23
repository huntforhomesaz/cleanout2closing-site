# Phase 7 – Task 7.2.7: Indexation and Early Query Coverage

**Document Version:** 1.0  
**Date:** 2025-12-23  
**Status:** Complete  
**Purpose:** Search-readiness and discoverability audit (no content rewrites, IA changes, or SEO copy optimization)

---

## 1. Indexation Status Summary

### Overall Assessment: ✅ PASS

All pages are correctly configured for indexation. No critical issues found.

| Metric | Status | Notes |
|--------|--------|-------|
| Canonical URLs | ✅ Pass | All pages have proper `<link rel="canonical">` tags |
| Robots Meta | ✅ Pass | All indexable pages have `<meta name="robots" content="index, follow">` |
| Sitemap Inclusion | ✅ Pass | 28 pages correctly included in sitemap |
| robots.txt | ✅ Pass | Allows all crawlers, blocks only `/admin/` and `/images/uploads/` |
| noindex Flag Support | ✅ Pass | Frontmatter `noindex: true` properly generates `noindex, nofollow` |
| Duplicate Prevention | ✅ Pass | No conflicting canonical URLs or duplicate paths |

### Sitemap Statistics
- **Total URLs in Sitemap:** 28
- **Sitemap Location:** `https://cleanout2closing.com/sitemap-index.xml`
- **Sub-sitemap:** `https://cleanout2closing.com/sitemap-0.xml`
- **Admin Exclusion:** Correctly filtered via Astro sitemap config

### robots.txt Configuration
```
User-agent: *
Allow: /
Sitemap: https://cleanout2closing.com/sitemap-index.xml
Disallow: /admin/
Disallow: /images/uploads/
```

---

## 2. Canonical vs Non-Canonical Page Table

### Canonical Pages (Must Be Indexed)

| Page | URL | Page Type | Sitemap | Canonical | Robots | Status |
|------|-----|-----------|---------|-----------|--------|--------|
| **Home** | `/` | home | ✅ | ✅ | index, follow | ✅ OK |
| **Inherited & Probate Property** | `/services/inherited-and-probate-property` | service_pillar | ✅ | ✅ | index, follow | ✅ OK |
| **Senior Transitions** | `/services/senior-transitions` | service_pillar | ✅ | ✅ | index, follow | ✅ OK |
| **Out-of-State Owners** | `/services/out-of-state-owners` | service_pillar | ✅ | ✅ | index, follow | ✅ OK |
| **Cleanout & Vendor Coordination** | `/services/cleanout-and-vendor-coordination` | service_pillar | ✅ | ✅ | index, follow | ✅ OK |
| **Trustee Support** | `/services/trustee-support` | service_pillar | ✅ | ✅ | index, follow | ✅ OK |
| **How It Works** | `/how-it-works` | service_pillar | ✅ | ✅ | index, follow | ✅ OK |
| **Tucson Hub** | `/az/tucson` | geo_hub (content: guide) | ✅ | ✅ | index, follow | ✅ OK |
| **Tucson Estate Cleanout** | `/az/tucson/estate-cleanout-and-home-sale` | geo_service | ✅ | ✅ | index, follow | ✅ OK |
| **Tucson Senior Transition** | `/az/tucson/senior-transition-and-home-sale` | geo_service | ✅ | ✅ | index, follow | ✅ OK |
| **Tucson Out-of-State** | `/az/tucson/out-of-state-owner-help` | geo_service | ✅ | ✅ | index, follow | ✅ OK |
| **Green Valley Hub** | `/az/green-valley` | geo_hub | ✅ | ✅ | index, follow | ✅ OK |
| **Green Valley Senior/Estate** | `/az/green-valley/senior-and-estate-home-sale` | geo_service | ✅ | ✅ | index, follow | ✅ OK |
| **Green Valley Out-of-State** | `/az/green-valley/out-of-state-owner-help` | geo_service | ✅ | ✅ | index, follow | ✅ OK |
| **Guide: Inherited House Tucson** | `/guides/inherited-house-tucson-what-to-do` | guide | ✅ | ✅ | index, follow | ✅ OK |
| **Guide: Assisted Living Move** | `/guides/assisted-living-move-tucson-what-happens-to-the-house` | guide | ✅ | ✅ | index, follow | ✅ OK |
| **Guide: Pima County Probate** | `/guides/pima-county-probate-property-timeline` | guide | ✅ | ✅ | index, follow | ✅ OK |
| **Contact** | `/contact` | contact | ✅ | ✅ | index, follow | ✅ OK |

### Non-Canonical Pages (Indexable but Not Ranking Targets)

| Page | URL | Page Type | Sitemap | Canonical | Robots | Notes |
|------|-----|-----------|---------|-----------|--------|-------|
| About | `/about` | about | ✅ | ✅ | index, follow | Trust signal, not ranking target |
| FAQs | `/faqs` | faqs | ✅ | ✅ | index, follow | Aggregated FAQs, supporting page |
| Reviews | `/reviews` | reviews | ✅ | ✅ | index, follow | Social proof page |
| Services Hub | `/services` | services | ✅ | ✅ | index, follow | Navigation hub |
| Service Areas | `/service-areas` | guide | ✅ | ✅ | index, follow | Navigation hub |
| Arizona Hub | `/az` | guide | ✅ | ✅ | index, follow | State-level navigation |
| Guides Index | `/guides` | (astro page) | ✅ | ✅ | index, follow | Guide listing page |
| Persona: Heirs | `/for-heirs-and-personal-representatives` | persona | ✅ | ✅ | index, follow | Audience entry point |
| Persona: Seniors | `/for-seniors-and-their-families` | persona | ✅ | ✅ | index, follow | Audience entry point |
| Persona: Realtors | `/for-realtors-and-professionals` | persona | ✅ | ✅ | index, follow | Audience entry point |

### Blocked Paths (Correctly Excluded)

| Path | Method | Notes |
|------|--------|-------|
| `/admin/` | robots.txt Disallow | Decap CMS admin interface |
| `/images/uploads/` | robots.txt Disallow | User-uploaded media |

---

## 3. Early Query Coverage Map

This section maps existing content to early-intent search queries. **No content changes recommended at this phase.**

### Guide Pages → "What do I do when..." Queries

| Page | Target Early-Intent Queries | Coverage Quality |
|------|----------------------------|------------------|
| `/guides/inherited-house-tucson-what-to-do` | "what to do with inherited house tucson", "inherited house arizona", "sell inherited home tucson" | ✅ Strong |
| `/guides/assisted-living-move-tucson-what-happens-to-the-house` | "assisted living move tucson house", "parent moving to assisted living what about house", "senior move tucson home sale" | ✅ Strong |
| `/guides/pima-county-probate-property-timeline` | "pima county probate timeline", "how long does probate take arizona", "sell house during probate tucson" | ✅ Strong |

### GEO Service Pages → "Help selling house in..." Queries

| Page | Target Early-Intent Queries | Coverage Quality |
|------|----------------------------|------------------|
| `/az/tucson/estate-cleanout-and-home-sale` | "estate cleanout tucson", "inherited house cleanout tucson", "sell estate property tucson" | ✅ Strong |
| `/az/tucson/senior-transition-and-home-sale` | "senior home sale tucson", "downsizing help tucson", "sell parent's house tucson" | ✅ Strong |
| `/az/tucson/out-of-state-owner-help` | "out of state owner tucson property", "sell house remotely tucson", "inherited house out of state arizona" | ✅ Strong |
| `/az/green-valley/senior-and-estate-home-sale` | "estate sale green valley az", "senior home sale green valley" | ✅ Strong |
| `/az/green-valley/out-of-state-owner-help` | "out of state owner green valley", "sell house green valley remotely" | ✅ Strong |

### Service Pillar Pages → "Estate cleanout help..." Queries

| Page | Target Early-Intent Queries | Coverage Quality |
|------|----------------------------|------------------|
| `/services/inherited-and-probate-property` | "inherited property help tucson", "probate property sale help", "estate property coordinator" | ✅ Strong |
| `/services/senior-transitions` | "senior transition help tucson", "downsizing coordinator tucson", "help selling parent's home" | ✅ Strong |
| `/services/out-of-state-owners` | "out of state heir property help", "remote property sale coordinator", "inherited house from another state" | ✅ Strong |
| `/services/cleanout-and-vendor-coordination` | "estate cleanout coordination", "vendor management estate property", "cleanout to closing service" | ✅ Strong |
| `/services/trustee-support` | "trustee property help tucson", "personal representative property sale", "executor real estate help" | ✅ Strong |

### Query Intent → Page Mapping Summary

| Intent Category | Primary Pages | Supporting Pages |
|-----------------|---------------|------------------|
| **Inherited/Probate Property** | Guide: Inherited House, Guide: Probate Timeline, Service: Inherited & Probate | GEO: Tucson Estate Cleanout |
| **Senior Transitions** | Guide: Assisted Living Move, Service: Senior Transitions | GEO: Tucson Senior Transition, GEO: Green Valley Senior |
| **Out-of-State Owners** | Service: Out-of-State Owners | GEO: Tucson Out-of-State, GEO: Green Valley Out-of-State |
| **Tucson-Specific** | GEO: Tucson Hub, All Tucson GEO Services | All Guides (Tucson-focused) |
| **Green Valley-Specific** | GEO: Green Valley Hub, Green Valley GEO Services | Service Pillars (link from GEO) |

---

## 4. Internal Linking Verification

### Guide Pages → Required Links

| Guide | Links to Service Pillar? | Links to GEO Service? | Links to Contact? |
|-------|-------------------------|----------------------|-------------------|
| Inherited House Tucson | ✅ `/services/inherited-and-probate-property` | ✅ `/az/tucson/estate-cleanout-and-home-sale` | ✅ `/contact` |
| Assisted Living Move | ✅ `/services/senior-transitions` | ✅ `/az/tucson/senior-transition-and-home-sale` | ✅ `/contact` |
| Pima County Probate | ✅ `/services/inherited-and-probate-property` | ✅ `/az/tucson/estate-cleanout-and-home-sale` | ✅ `/contact` |

### Service Pillar Pages → Required Links

| Service Pillar | Links to Guides? | Links to GEO? | Links to Contact? |
|----------------|-----------------|---------------|-------------------|
| Inherited & Probate Property | ⚠️ No explicit guide links in content | ⚠️ No explicit GEO links | ✅ `/contact` |
| Senior Transitions | ⚠️ No explicit guide links in content | ⚠️ No explicit GEO links | ✅ `/contact` |
| Out-of-State Owners | ⚠️ No explicit guide links in content | ⚠️ No explicit GEO links | ✅ `/contact` |
| Cleanout & Vendor Coordination | ⚠️ No explicit guide links in content | ⚠️ No explicit GEO links | ✅ `/contact` |
| Trustee Support | ⚠️ No explicit guide links in content | ⚠️ No explicit GEO links | ✅ `/contact` |

### GEO Service Pages → Required Links

| GEO Service | Links to Service Pillar? | Links to Guides? | Links to Contact? |
|-------------|-------------------------|-----------------|-------------------|
| Tucson Estate Cleanout | ✅ `/services/inherited-and-probate-property`, `/service-areas`, `/az`, `/az/tucson` | ⚠️ No explicit guide links | ✅ `/contact` |
| Tucson Senior Transition | ⚠️ No explicit service pillar links | ⚠️ No explicit guide links | ✅ `/contact` |
| Tucson Out-of-State | ⚠️ No explicit service pillar links | ⚠️ No explicit guide links | ✅ `/contact` |
| Green Valley Senior/Estate | ⚠️ No explicit service pillar links | ⚠️ No explicit guide links | ✅ `/contact` |
| Green Valley Out-of-State | ⚠️ No explicit service pillar links | ⚠️ No explicit guide links | ✅ `/contact` |

### Internal Linking Gap Summary

**Documented Gaps (Do Not Modify Without Authorization):**

1. **Service Pillar → Guide Links Missing**
   - Service pillars do not currently link to relevant guides
   - Example: `/services/inherited-and-probate-property` should link to `/guides/inherited-house-tucson-what-to-do`

2. **Service Pillar → GEO Service Links Missing**
   - Service pillars do not currently link to their GEO-specific implementations
   - Example: `/services/senior-transitions` should link to `/az/tucson/senior-transition-and-home-sale`

3. **GEO Service → Guide Links Missing (Partial)**
   - Tucson Estate Cleanout has strong internal links
   - Other GEO service pages lack explicit guide links

**Note:** These are documentation observations only. No links have been added or modified per task scope.

---

## 5. GSC Submission Checklist

### Pre-Submission Verification

| Task | Status | Notes |
|------|--------|-------|
| Site deployed to production domain | ⏳ Pending | Verify `https://cleanout2closing.com` is live |
| SSL certificate active | ⏳ Pending | Confirm HTTPS works without redirects |
| robots.txt accessible | ⏳ Pending | Verify at `https://cleanout2closing.com/robots.txt` |
| Sitemap accessible | ⏳ Pending | Verify at `https://cleanout2closing.com/sitemap-index.xml` |
| No blocking meta robots on canonical pages | ✅ Verified | All canonical pages have `index, follow` |

### Google Search Console Setup

1. **Property Setup**
   - Add property: `https://cleanout2closing.com`
   - Verify ownership via Netlify DNS or HTML file method
   - Also verify non-www and HTTP variants redirect correctly

2. **Sitemap Submission**
   - Navigate to: Sitemaps → Add a new sitemap
   - Submit: `sitemap-index.xml`
   - Expected: 28 URLs discovered

3. **URL Inspection Priority**
   
   Inspect these URLs first (high-priority canonical pages):
   
   | Priority | URL | Reason |
   |----------|-----|--------|
   | 1 | `/` | Homepage, primary entry point |
   | 2 | `/services/inherited-and-probate-property` | Core service pillar |
   | 3 | `/az/tucson` | Anchor GEO hub |
   | 4 | `/az/tucson/estate-cleanout-and-home-sale` | Primary GEO service |
   | 5 | `/guides/inherited-house-tucson-what-to-do` | Top guide for early intent |
   | 6 | `/contact` | Conversion page |
   | 7 | `/services/senior-transitions` | Secondary service pillar |
   | 8 | `/az/green-valley` | Secondary GEO hub |

4. **Request Indexing**
   - After URL inspection, click "Request Indexing" for each priority page
   - Note: Google limits requests; focus on top 10-15 pages initially

### Monitoring Cadence

| Timeframe | Actions |
|-----------|---------|
| **Week 1** | Check Index Coverage report daily; address any crawl errors; verify sitemap processing |
| **Week 2** | Review "Pages" report for indexed vs. not indexed; check for any unexpected exclusions |
| **Month 1** | First Performance report data; identify early ranking signals; note any pages stuck in "Discovered - currently not indexed" |
| **Month 2-3** | Establish baseline click/impression data; identify underperforming pages for future optimization |

### Expected Initial Behavior

- Sitemap processing: 24-48 hours
- First pages indexed: 3-7 days
- Full crawl of 28 pages: 1-2 weeks
- Performance data visible: 2-4 weeks

---

## 6. Deferred Optimizations (Explicit)

The following items were identified during this audit but are **explicitly out of scope** for Task 7.2.7. They should be addressed in future phases.

### Internal Linking Improvements (Future Task)

| Gap | Recommended Action | Priority |
|-----|-------------------|----------|
| Service Pillar → Guide links | Add contextual links from service pillars to relevant guides | Medium |
| Service Pillar → GEO Service links | Add links from service pillars to Tucson/Green Valley implementations | Medium |
| GEO Service → Guide links | Add contextual links from GEO pages to relevant guides | Low |

### Content Optimization (Future Task)

| Item | Notes |
|------|-------|
| Heading optimization | Some pages may benefit from H1/H2 restructuring (not assessed in this task) |
| Meta description tuning | Descriptions are functional but could be optimized for CTR |
| FAQ expansion | Additional FAQs could improve query coverage |

### Technical SEO (Future Task)

| Item | Notes |
|------|-------|
| Image alt text audit | Not assessed in this task |
| Core Web Vitals | Requires production deployment to measure |
| Mobile usability | Requires manual testing on deployed site |

### Known Content Issue (Pre-Existing)

| Item | Notes |
|------|-------|
| az-tucson.md page_type mismatch | File has `page_type: "guide"` but functions as geo_hub. Documented in Task 7.2.3. Does not affect indexation. |

---

## 7. Verification Checklist

| Requirement | Status |
|-------------|--------|
| No site files changed | ✅ Pass |
| No content modified | ✅ Pass |
| Sitemap unchanged | ✅ Pass |
| Build still passes | ✅ Pass (28 pages built successfully) |
| Document is complete and readable | ✅ Pass |

---

## 8. Summary

### Key Findings

1. **Indexation Configuration: Excellent**
   - All 28 pages correctly configured with canonical URLs and robots meta
   - Sitemap properly excludes admin paths
   - robots.txt allows all crawlers with appropriate exclusions

2. **Early Query Coverage: Strong**
   - Guides address "what do I do when..." queries effectively
   - GEO services target location-specific queries
   - Service pillars provide topical authority

3. **Internal Linking: Gaps Documented**
   - Guides link well to service pillars and GEO services
   - Service pillars lack links back to guides (documented, not modified)
   - GEO services have partial linking to pillars

4. **No Critical Issues Found**
   - No pages incorrectly blocked
   - No duplicate canonical conflicts
   - No sitemap errors

### Files Created

- `docs/Phase7_Task7_2_7_Indexation_and_Early_Query_Coverage.md` (this document)

### Files Modified

- None (original spec file replaced with completed audit)

### Next Steps (Post-Deployment)

1. Deploy site to production
2. Verify SSL and redirects
3. Submit sitemap to Google Search Console
4. Request indexing for priority pages
5. Monitor Index Coverage for 2-4 weeks
6. Address any crawl errors as they appear

---

*Task 7.2.7 Complete*
