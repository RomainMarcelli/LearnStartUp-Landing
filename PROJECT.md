# PROJECT

## Project Purpose
HoopSphere Landing Page is the public marketing front for the HoopSphere basketball ecosystem.

Its goals are:
- present the product value proposition to players, clubs, and coaches,
- capture leads (newsletter + Android beta applications),
- drive future app adoption,
- expose legal/privacy information and cookie controls.

## Current Features
- Landing page sections:
- sticky navigation with animated primary CTA,
- hero messaging and app store badges,
- three audience cards (player, club, coach),
- product explanation section with visual animation,
- download CTA banner,
- newsletter section,
- FAQ accordion,
- footer with legal and social entries.
- Download behavior:
- Google Play opens a beta registration modal (first name, last name, email).
- App Store opens an availability modal (iOS under development message).
- Contact and lead capture:
- newsletter email submission via EmailJS,
- beta candidate submission via EmailJS.
- SEO page:
- `/application-suivi-basket` and `/application-suivi-basket.html`,
- Legal pages:
- `/mentions-legales` and `/mentions-legales.html`,
- `/politique-confidentialite` and `/politique-confidentialite.html`.
- Cookie consent and settings action via Axeptio.
- GA4 analytics setup with consent mode defaults.
- SEO metadata, social metadata, canonical URL, JSON-LD, robots, sitemap.
- One visible SEO section on landing with unique `H1` and keyword-rich copy.
- Dedicated SEO content page (`/application-suivi-basket`) with long-form text and indexable metadata.

## Application Behavior
- Entry point is `src/index.js`.
- The app selects which page to render based on `window.location.pathname`.
- Main behavior in `src/App.js`:
- newsletter submission uses EmailJS,
- FAQ uses accordion state (`openFaqIndex`),
- Android button opens beta modal,
- iOS button opens info modal,
- footer cookie action opens Axeptio settings if available,
- visible SEO section is rendered directly on the landing page with basketball-focused terms.
- `src/ApplicationSuiviBasket.js` sets page-specific SEO tags (title, description, canonical, robots, JSON-LD).
- Legal pages (`MentionsLegales`, `PolitiqueConfidentialite`) set:
- page title,
- temporary `meta[name="robots"]="noindex"` while mounted.

## Architecture
- Frontend:
- React 18 app bootstrapped with Create React App.
- Tailwind utility classes are applied directly in JSX.
- `src/components/Modal.js` provides reusable modal infrastructure (overlay, close button, ESC close, body scroll lock).
- Routing strategy:
- no `react-router-dom`, simple pathname switch in `index.js`.
- Assets:
- static media in `public/img`.
- Build and runtime:
- CRA scripts for `start`, `build`, `test`.

## Integrations
- EmailJS (`emailjs-com`):
- newsletter email flow,
- beta candidate flow.
- Existing service/public key are reused.
- Optional env override exists for beta template ID: `REACT_APP_EMAILJS_BETA_TEMPLATE_ID`.
- Axeptio:
- cookie consent SDK loaded in `public/index.html`,
- settings dialog callable from footer (`window._axcb?.showSettings?.()`).
- Google Analytics:
- `gtag.js` loaded in `public/index.html` with GA4 measurement ID,
- consent mode default values set to denied.
- Monitoring stack (ops/dev context):
- `docker-compose.yml` includes Prometheus, Grafana, cAdvisor, node-exporter, blackbox-exporter.

## Future Evolution
Logical next steps based on current implementation:
- replace hardcoded EmailJS IDs/keys with environment variables for all environments,
- add a dedicated cookies information page (`/gestion-cookies`) or align all links to the Axeptio settings flow,
- move from pathname switch to router-based navigation for maintainability,
- add stronger automated tests for modal flows, forms, and legal-page rendering,
- connect real App Store / Google Play publication flows when app releases are available,
- split large `App.js` into section components for easier maintenance.
