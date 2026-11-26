# akkraworkflow website v2

A React + Vite bilingual landing page focused on Google Sheets workflow automation.

## Current launch scope

- Google Sheets workflow systems
- Google Apps Script automation
- Gmail notifications and reminders
- Simple dashboards and reports
- Workflow discovery, setup, and handover

Cybersecurity services and other products are intentionally marked as not yet available. Portfolio cards and dashboard numbers are illustrative demo concepts, not completed client projects.

## Run locally

Requirements: Node.js LTS (18+ recommended) and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

The static production output is written to `dist/`.

## Deploy to Cloudflare Pages

Connect this repository to Cloudflare Pages and use:

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

Every push to `main` triggers a new deployment when Git integration is enabled.

## Before public launch — important

1. In `src/App.jsx`, replace `hello@akkraworkflow.com` in `emailAddress` with the real inbox you want to receive inquiries at. The current value is retained from v1 and must be verified by the site owner.
2. Check the quote form by filling it in. It opens the visitor's default email application with a prefilled draft; it does not save submissions to a database or send mail silently.
3. Replace demo concepts and sample dashboard numbers only after you have real portfolio work or a finished product. Until then, keep the DEMO labels visible.
4. If you use a custom domain later, update the canonical URL and Open Graph URL in `index.html`.
5. The page includes basic metadata and JSON-LD structured data. Search indexing and ranking are not guaranteed; add a sitemap and Google Search Console property after choosing a final domain.

## Notes

- No backend, user accounts, checkout, or database is included.
- The quote form uses `mailto:` so the visitor reviews and sends the email from their own email client.
- The initial language is Thai; visitors can switch to English from the header.
