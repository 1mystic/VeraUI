# VeraUI UI Library

A complete, production-grade React component library for the VeraUI design system. Built with **React 18/19**, **Vite**, **Tailwind CSS**, and **TypeScript**.

## Architecture

This is a monorepo setup utilizing standard npm workspaces:

- `packages/react`: The core React component library, built with Vite (Library Mode) for both ESM and CJS formats.
- `apps/docs`: A Next.js 16 (App Router) documentation and demonstration website, instantly deployable to Vercel.

## Quick Start

```bash
# 1. Install dependencies
npm install --legacy-peer-deps

# 2. Build the component library
cd packages/react
npm run build

# 3. Start the documentation site
cd ../../apps/docs
npm run dev
```

## Creating a release

The `packages/react` folder is configured with full NPM packaging semantics:
- `exports` for proper ESM / CJS resolution.
- Types generation (`.d.ts`) out of the box via `vite-plugin-dts`.
- Tailwind CSS bundles its utility layer cleanly into `dist/style.css`.

To publish, increment the version in `packages/react/package.json` and run `npm publish`.

## Design System

The underlying design system leverages atomic Tailwind classes, heavily customized via the internal `tailwind.config.js` to perfectly match the VeraUI tokens (Plum, Lavender gradients, dynamic border-radii).
