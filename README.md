# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Vite, Tailwind CSS, Material UI, and Framer Motion.

## App Analysis (Current Architecture)

### High-Level Flow

- `src/main.tsx` initializes i18n and renders the app.
- `src/App.tsx` wraps routes with:
  - `BrowserRouter` using `basename={import.meta.env.BASE_URL}`
  - `LanguageProvider`
  - custom `ThemeProvider`
  - MUI `ThemeProvider` + `CssBaseline`
- Main route (`/`) renders section-based portfolio components:
  - `Header`, `Hero`, `About`, `Skills`, `Projects`, `Contact`, `Footer`
- Secondary route (`/dulyplan`) renders the `DulyPlan` page.

### Core Features

- Responsive layout and sticky navigation
- Dark/light theme toggle with local persistence
- Multi-language support via i18next
- Animated sections using Framer Motion
- Resume download from the `public` folder

### Internationalization and Theme

- i18n setup: `src/i18n/index.ts`
- locale files: `src/i18n/locales/*.json`
- language state and switching: `src/contexts/LanguageContext.tsx`
- theme state and persistence: `src/contexts/ThemeContext.tsx`
- global theme styles: `src/index.css`

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Material UI
- Framer Motion
- i18next / react-i18next

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open `http://localhost:5173`.

## Project Structure

- `src/components` - UI sections and route components
- `src/contexts` - theme/language global state
- `src/i18n` - i18n config and translations
- `public` - static assets (including resume PDF)
- `vite.config.ts` - Vite build config and `base` path

## Deployment (GitHub Pages)

This repo is already configured for GitHub Pages deployment:

- `package.json` has:
  - `homepage: "https://abhishek1998-cpu.github.io/Portfolio-Site"`
  - `predeploy: "npm run build"`
  - `deploy: "gh-pages -d dist"`
- `vite.config.ts` has:
  - `base: "/Portfolio-Site/"`

### One-Time Setup

1. Ensure your GitHub repository is named `Portfolio-Site` (or update both `homepage` and `base` if different).
2. Ensure `gh-pages` dependency is installed (already present in this repo).
3. In GitHub repository settings:
   - Go to **Settings -> Pages**
   - Set source to **Deploy from a branch**
   - Use branch `gh-pages` and folder `/ (root)` after first deploy

### Deploy Steps

1. Install dependencies (if needed):
   ```bash
   npm install
   ```
2. Build production bundle:
   ```bash
   npm run build
   ```
3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```
4. Open:
   `https://abhishek1998-cpu.github.io/Portfolio-Site`

### Update and Redeploy

After making changes, redeploy with:

```bash
npm run deploy
```

(`predeploy` automatically rebuilds first.)

### Common GitHub Pages Notes

- Because this app uses `BrowserRouter`, refreshing deep links like `/Portfolio-Site/dulyplan` can return a 404 on GitHub Pages.
- If needed, you can add a `404.html` fallback strategy or switch to `HashRouter` to avoid route-refresh issues.

## Customization

Update these files for your personal content:

- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/Skills.tsx`
- `src/components/Projects.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

## License

This project is available under the [MIT License](LICENSE).