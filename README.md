# VeraUI Component Library ✦

Welcome to the **VeraUI** monorepo! This repository houses the core React component library and interactive documentation site for the Veramind mental wellbeing ecosystem. 

Built with modern web standards, VeraUI delivers a premium, accessible, and beautifully animated design system tailored for mindfulness platforms.

---

## 🏗️ Architecture

This project is structured as an npm monorepo (workspaces), containing the following packages:

*   **`packages/react`** (`@veraui/react`): The core UI library. Built using React 19, Tailwind CSS, and Vite in Library Mode. It exports fully typed, tree-shakable ESM and CJS modules.
*   **`apps/docs`** (`docs`): A Next.js App Router application that serves as the interactive documentation, showcasing components, installation guides, and full-page templates.

---

## ✨ Features

*   **Premium Aesthetics:** Smooth mesh gradients, glassmorphism, precise typography, and micro-animations designed for tranquility.
*   **Type-Safe:** 100% written in TypeScript with comprehensive component interfaces.
*   **Tailwind Integrated:** Fully compatible with Tailwind CSS via an exported `styles.css` file and custom design tokens.
*   **Accessible:** Utilizes ARIA roles and standard semantic HTML.
*   **Zero-Config Components:** Complex stateful components (like Modals and Accordions) work out of the box.

---

## 🚀 Getting Started

### Prerequisites
*   Node.js (v18+)
*   npm (v9+)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/1mystic/VeraUI.git
   cd veraui/ui-library
   ```

2. **Install dependencies:**
   Due to strict peer dependency requirements across React 19 and Next.js, use the legacy peer deps flag:
   ```bash
   npm install --legacy-peer-deps
   ```

---

## 💻 Development Commands

The workspace is configured so you can run commands from the root or within specific packages.

### Start Documentation Site (Next.js)
```bash
cd apps/docs
npm run dev
```
*The docs site automatically watches for changes in the workspace packages.*

### Build the Core Library
If you are developing components and want to build the production `.js`, `.cjs`, and `.d.ts` files:
```bash
cd packages/react
npm run build
```

---

## 🎨 Using VeraUI in your projects

To consume VeraUI in a separate React application:

1. Install the package via npm.
2. Import the global CSS stylesheet at the root of your application:
   ```tsx
   import '@veraui/react/styles.css';
   ```
3. Load the **Urbanist** font and **Google Material Icons** in your `index.html` or `layout.tsx`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
   ```
4. Start using components!
   ```tsx
   import { Button, Card, Badge } from '@veraui/react';

   export function MyComponent() {
     return <Button variant="primary" pill>Start Session</Button>;
   }
   ```

---

## 📜 License

Internal use only. Copyright © Veramind 2026. All rights reserved.
