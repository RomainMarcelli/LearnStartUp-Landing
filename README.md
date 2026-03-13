# HoopSphere Landing Page

## Project Overview
HoopSphere Landing Page is a React single-page marketing website for the HoopSphere basketball platform.

The site presents the product value proposition for players, clubs, and coaches, provides app download entry points, captures leads (newsletter + Android beta testers), and exposes legal/privacy pages.

The application uses path-based rendering (without React Router):
- `/` renders the main landing page.
- `/mentions-legales` and `/mentions-legales.html` render legal notices.
- `/politique-confidentialite` and `/politique-confidentialite.html` render the privacy policy.

## Features
- Responsive marketing landing page with multiple sections:
- Sticky top navigation and animated CTA button.
- Hero section with layered gradients and download buttons.
- Persona cards for player, club, and coach contexts.
- Product presentation section with animated floating phone visual.
- Download CTA banner section.
- Newsletter subscription form.
- FAQ accordion section with animated expand/collapse.
- Footer with legal links and social links.
- Download button modal behavior:
- Google Play button opens a beta registration modal.
- Beta modal includes first name, last name, and email fields.
- Beta form sends an email via EmailJS.
- App Store button opens an iOS availability information modal.
- Lead collection and messaging:
- Newsletter form sends data via EmailJS.
- Beta tester form sends data via EmailJS (same service/public key, dedicated template override supported).
- Legal and privacy content pages implemented as React components.
- Cookie consent and preferences integration:
- Axeptio SDK initialized in `public/index.html`.
- Footer "Gestion cookies" trigger calls `window._axcb?.showSettings?.()`.
- Analytics and SEO:
- Google Analytics 4 (`gtag`) with consent default denied.
- Canonical, Open Graph, Twitter metadata, and JSON-LD schema in `public/index.html`.
- `robots.txt` and `sitemap.xml` present.

## Tech Stack
- React 18 (Create React App)
- Tailwind CSS 3 + PostCSS + Autoprefixer
- EmailJS (`emailjs-com`)
- React Icons
- Google Analytics (`gtag.js`)
- Axeptio cookie consent SDK
- Docker / Docker Compose
- Prometheus + Grafana + cAdvisor + node-exporter + blackbox-exporter (monitoring stack in `docker-compose.yml`)

## Installation
Prerequisites:
- Node.js 18+ recommended
- npm

Install dependencies:
```bash
npm install
```

Run the app in development:
```bash
npm start
```

Open `http://localhost:3000`.

Optional environment variable:
- `REACT_APP_EMAILJS_BETA_TEMPLATE_ID`:
- If set, this template ID is used for beta tester emails.
- If not set, beta emails fallback to the newsletter template ID already used in the project.

## Development
Main scripts:
- `npm start`: run development server.
- `npm test -- --watchAll=false`: run tests once.
- `npm run build`: production build.

Development notes:
- The app does not use React Router. Route selection is done in `src/index.js` using `window.location.pathname`.
- Tailwind utility classes are used directly in JSX.
- `src/App.test.js` contains a basic UI presence test.
- During tests, React 18 may log a known `act(...)` deprecation warning from testing-library internals.

## Deployment
Production build:
```bash
npm run build
```

Repository deployment script:
- `deploy.sh` builds the app, backs up current server files via SSH, uploads `build/`, then restarts Nginx.
- The script currently contains hardcoded server settings (`SERVER_USER`, `SERVER_IP`, `SERVER_PATH`).

Containerized stack:
- `docker-compose.yml` defines:
- `learnstartup` (React app)
- monitoring services (`cadvisor`, `node-exporter`, `blackbox-exporter`, `prometheus`, `grafana`)
- Prometheus targets are defined in `prometheus.yml`.

## Project Structure
```text
.
├── public/
│   ├── index.html                  # SEO, GA4, Axeptio, root mount
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.json
│   └── img/                        # landing visuals and brand assets
├── src/
│   ├── App.js                      # main landing page and modal behaviors
│   ├── components/
│   │   └── Modal.js                # reusable modal component
│   ├── MentionsLegales.js          # legal notices page
│   ├── PolitiqueConfidentialite.js # privacy policy page
│   ├── index.js                    # pathname-based page switch
│   ├── index.css                   # tailwind directives + global custom CSS
│   ├── App.test.js                 # UI smoke test
│   └── reportWebVitals.js
├── Dockerfile
├── docker-compose.yml
├── deploy.sh
├── prometheus.yml
├── tailwind.config.js
├── postcss.config.js
└── package.json
```
