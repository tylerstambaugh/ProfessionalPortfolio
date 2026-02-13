# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal professional portfolio site for Tyler Stambaugh. Static single-page React application deployed to GitHub Pages.

## Tech Stack

- React 18 + TypeScript + Vite
- React Bootstrap / Bootstrap 5 for UI components and layout
- Font Awesome for icons
- No backend, no API calls — all content is static/hardcoded

## Commands

- `npm run dev` — Start Vite dev server (localhost:5173)
- `npm run build` — TypeScript check + Vite production build
- `npm run lint` — ESLint with zero warnings allowed
- `npm run deploy` — Build and deploy to GitHub Pages via gh-pages

No test framework is configured.

## Architecture

**Single-page app with no routing** (React Router is installed but unused). All components render in a single scrollable page via `App.tsx`.

**Component structure:**
- `App.tsx` — Root layout: Header → AboutMe → Projects → Footer
- `FullScreenSection` — Reusable wrapper that applies a colored background section
- `Projects` → `ProjectsRows` — Project data is a hardcoded array in `Projects.tsx`, passed as props to `ProjectsRows` which renders Bootstrap cards with expand/collapse
- `Header` and `AboutMe` — Use `useState` + window resize listeners for responsive breakpoints (manual, not media queries)

**Styling:** Bootstrap utility classes + `App.css` / `index.css`. Dark theme configured via `color-scheme` in `index.css`.

## Build Configuration

- `vite.config.ts` sets `base: "/ProfessionalPortfolio/"` for GitHub Pages subdirectory hosting
- TypeScript strict mode enabled; unused locals/parameters are errors
- ESLint treats all warnings as errors (`--max-warnings 0`)
