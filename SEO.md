# SEO Implementation Guide - HoopSphere

Last update: 2026-03-17

## Implemented In Code
- Homepage title updated to `Application suivi basket & statistiques | HoopSphere`.
- Homepage meta description updated with primary basketball tracking keywords.
- Canonical and favicon links set with root-relative paths.
- `SoftwareApplication` JSON-LD updated in `public/index.html`.
- Visible SEO content block added in `src/App.js` (not hidden, no interaction required).
- Heading structure adjusted on landing to keep one unique `H1`.
- Dedicated page created: `/application-suivi-basket` (`src/ApplicationSuiviBasket.js`).
- Route mapping added in `src/index.js`.
- Sitemap updated with `https://hoopsphere.fr/application-suivi-basket`.
- Non-critical images set to lazy/async decoding where appropriate.

## Target Keywords
- hoopsphere
- application suivi basket
- application statistique basket
- application basket
- statistiques basket app
- suivi performance basket

## Manual Actions Required (Off-Page + Indexing)
1. Submit `https://hoopsphere.fr/sitemap.xml` in Google Search Console.
2. Request indexing for:
   - `https://hoopsphere.fr/`
   - `https://hoopsphere.fr/application-suivi-basket`
3. Publish backlinks on:
   - basketball forums
   - Reddit communities (basketball + sports performance)
   - LinkedIn posts and company page
   - Facebook basketball groups
   - startup directories
4. Track ranking progress weekly on the target keyword list.

## Validation Checklist
1. Rich Results Test: https://search.google.com/test/rich-results
2. PageSpeed Insights: https://pagespeed.web.dev/
3. Google index check: `site:hoopsphere.fr`
4. Mobile performance goal: PageSpeed score > 80

## Notes
- SEO impact is progressive: expect indexation in 1-2 weeks, ranking improvements over 1-3 months.
- Keep publishing fresh basketball-focused content and links to strengthen authority.

