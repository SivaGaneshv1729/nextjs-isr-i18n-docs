# Next.js Multi-Language Documentation Site with ISR and i18n

![Next.js](https://img.shields.io/badge/Next.js-16-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Docker](https://img.shields.io/badge/Docker-Ready-2496ED) ![License](https://img.shields.io/badge/License-MIT-green)

A high-performance, production-ready documentation platform built to scale. This project combines the speed of Static Site Generation (SSG) with the flexibility of Server-Side Rendering (SSR) using **Incremental Static Regeneration (ISR)**, ensuring your content is always fast and up-to-date globally.

---

## 🚀 Key Features

### 1. 🌍 Global Reach (Advanced i18n)

Built from the ground up to support a global audience.

- **Languages**: Full support for **English (en)**, **Spanish (es)**, **French (fr)**, **German (de)**, and **Japanese (ja)**.
- **Smart Routing**: URL-based routing (e.g., `/ja/docs/...`) ensures SEO optimization for every language.
- **Middleware Redirection**: Intelligent detection and routing logic.

### 2. ⚡ Instant Updates (ISR)

The "Magic Photocopier" of web architecture.

- **Performance**: Pages are served as static HTML (blazing fast).
- **Freshness**: Content updates are regenerated in the background (every 60s) without a full site rebuild.
- **Scale**: Handles thousands of pages without bloating build times.

### 3. 🛡️ Type Safety (TypeScript/TSX)

Built entirely in **TypeScript** for robustness and maintainability.

- **"Spellcheck for Code"**: Catches errors (like missing props or broken links) at build time, not runtime.
- **Reliability**: Ensures a crash-free experience for users.

### 4. 🎨 Modern Glassmorphic UI

A stunning, professional user interface designed for readability.

- **Glassmorphism**: Translucent sidebars and search modals with backdrop blur.
- **Tailwind CSS**: A fully custom design system using semantic tokens (`--primary`, `--background`).
- **Dark Mode**: Fully responsive theme switching (Light/Dark/System).

### 5. 🔍 Intelligent Search

- **Fuse.js Engine**: Powerful fuzzy search that tolerates typos.
- **Command Palette**: Professional `Cmd+K` style search experience.
- **Instant Results**: Floating popover with fade-in animations.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript (TSX)
- **Styling**: Tailwind CSS + Tailwind Animate
- **Icons**: Lucide React
- **Search**: Fuse.js
- **Containerization**: Docker + Docker Compose

---

## 🏃‍♂️ Getting Started

### Option 1: Docker (Recommended)

Run the entire stack without installing Node.js dependencies locally.

```bash
# Start the application
docker-compose up --build
```

Access the site at: `http://localhost:3000`

### Option 2: Local Development

If you prefer running directly on your machine.

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

---

## 📂 Project Structure

├── \_docs/ # Documentation Content
│ ├── v1/en/ # English Markdown files
│ ├── v1/es/ # Spanish Translations
│ ├── v1/ja/ # Japanese Translations
│ └── ...
├── public/
│ └── locales/ # UI Strings (Translation JSONs)
├── src/
│ ├── app/ # Next.js App Router (Pages & Layouts)
│ ├── components/ # React Components (Sidebar, Search, etc.)
│ ├── i18n/ # Dictionary Loading Logic
│ └── lib/ # Utility Functions
├── middleware.ts # Routing & Language Detection
├── tailwind.config.ts # Design System Configuration
└── Dockerfile # Production-ready Docker Image

---

## 🌟 Why This Architecture?

| Feature         | Traditional Static Site      | This Project (Next.js ISR)                     |
| :-------------- | :--------------------------- | :--------------------------------------------- |
| **Speed**       | Fast                         | **Fast**                                       |
| **Updates**     | Slow (Full Rebuild required) | **Instant** (Background Revalidation)          |
| **Translation** | Hard (Duplicate sites)       | **Native** (Single codebase, multiple locales) |
| **Safety**      | Low (JS)                     | **High** (TypeScript)                          |

---
