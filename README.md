# akkraworkflow website

A bilingual (English / Thai) React + Vite business portfolio website with a dark premium cybersecurity visual direction.

## Requirements

- Windows 11
- Node.js LTS (recommended: Node.js 20 or 22)
- npm (included with Node.js)
- Git (optional, for GitHub deployment)

## Run locally on Windows 11

1. Install Node.js LTS from https://nodejs.org/
2. Extract the ZIP file.
3. Open the extracted `akkraworkflow` folder.
4. In File Explorer, click the address bar, type `cmd`, and press Enter.
5. Run:

```bash
npm install
npm run dev
```

6. Open the local URL shown in the terminal, normally `http://localhost:5173`.

To test the production build:

```bash
npm run build
npm run preview
```

The production files will be generated in the `dist` folder.

## Important: update contact details

Open `src/App.jsx` and find:

```js
const email = 'hello@akkraworkflow.com'
```

Replace it with an email address you control before publishing. The current address is a placeholder; do not publish it as a working contact until you own/configure it.

The social links are intentionally not fabricated. Add verified business profile URLs when they exist.

## Deploy to Cloudflare Pages (free plan)

### Option A — GitHub integration (recommended)

1. Create a GitHub account if you do not already have one: https://github.com/
2. Create a new repository, for example `akkraworkflow`.
3. Upload the project files to the repository. Do not upload `node_modules` or `dist`.
4. Sign in to Cloudflare Dashboard: https://dash.cloudflare.com/
5. Open **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
6. Authorize GitHub and select the `akkraworkflow` repository.
7. Set the build configuration:

   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/` (leave default)

8. Select **Save and Deploy**.
9. Cloudflare will provide a URL similar to `https://akkraworkflow.pages.dev`.

After this, each push to the connected branch triggers a new deployment.

### Option B — Direct upload

1. Run `npm install` and `npm run build` locally.
2. Sign in to Cloudflare Dashboard.
3. Open **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
4. Give the project a name such as `akkraworkflow`.
5. Upload the contents of the generated `dist` folder.
6. Deploy and use the generated `*.pages.dev` address.

For ongoing updates, Git integration is easier to maintain.

## Project structure

```text
akkraworkflow/
├── public/
│   ├── _redirects
│   └── favicon.svg
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Before accepting real customer work

- Replace the placeholder contact email.
- Publish only services you can currently deliver.
- Define scope, delivery time, revision count, and payment terms in writing.
- Do not collect customer passwords or API secrets in forms or spreadsheets.
- For Google integrations, use least-privilege OAuth permissions and explain what data is accessed.
- Add a privacy notice before collecting personal information.
- The Smart Workflow Tracker shown on the site is currently a product concept / preview, not a live SaaS application.
- The website does not currently include checkout, customer accounts, a backend, or a contact form. Contact uses the visitor's email application via `mailto:`.

## Notes

- Language toggle works locally in the browser state; no translation API is used.
- Google Fonts are loaded from Google Fonts. If a visitor blocks external fonts, system fallback fonts are used.
- Cloudflare Pages free-plan limits and product features can change. Check the current Cloudflare documentation before production deployment.
