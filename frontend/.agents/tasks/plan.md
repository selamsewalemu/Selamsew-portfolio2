# Implementation Plan — Selamsew Portfolio Modern UI Overhaul

> **Worktree:** `c:\Users\HP\.gemini\antigravity\scratch\Selamsew-portfolio2\frontend`
> **Build command:** `npm run build` (Vite 8, must exit 0 after every phase)
> **Constraint:** No new npm packages. Do not touch backend/. Tailwind v4 syntax only.

---

## Key Discoveries From Codebase Exploration

- **Tailwind v4 is installed** (`tailwindcss@^4.3.0`, `@tailwindcss/vite@^4.3.0`) but `vite.config.js` does NOT import the `@tailwindcss/vite` plugin — it must be added.
- **All styling is in `global.css`** using custom CSS class names. Zero Tailwind utility classes currently in JSX — the new design may add them, but the existing classes must be preserved to avoid breaking pages.
- **`src/index.css`** has a `body { font-family: "Times New Roman" }` and `#root { width: 1126px; border-inline }` that must be removed (these break the dark design).
- **`src/App.css`** has conflicting overrides (Times New Roman fonts, blue border-left on cards) — must be cleared.
- **`src/layouts/MainLayout.jsx`** exists but is empty. `src/hooks/useAuth.js` is empty. Both need content.
- **`src/sections/`** directory does NOT exist yet — must be created.
- **`AppRoutes.jsx` imports `pages/About.jsx` and `pages/Contact.jsx`** — these are wrapper pages that import from components/. Must remain importable.
- **`Services.jsx` imports `../components/Skills`** — `Skills.jsx` must stay in `src/components/`.
- **`App.jsx` imports sections from `src/components/`** — after moving to `src/sections/`, App.jsx imports must update.
- **Dark theme:** ThemeContext adds `.dark` class to `<html>` — CSS uses `html.dark` selectors. This must be preserved.
- **Tailwind v4 CSS syntax:** Use `@import 'tailwindcss';` NOT `@tailwind base/components/utilities;`

---

## Files to CREATE

| File | Purpose |
|------|---------|
| `src/sections/Hero.jsx` | Restyled Hero section (moved from components/) |
| `src/sections/About.jsx` | Restyled About section (moved from components/) |
| `src/sections/Skills.jsx` | Restyled Skills section (was TechStack.jsx in components/) |
| `src/sections/Experience.jsx` | Restyled Experience section (moved from components/) |
| `src/sections/Education.jsx` | Restyled Education section (moved from components/) |
| `src/sections/Projects.jsx` | Restyled Projects section with grid+filter (moved from components/) |
| `src/sections/Contact.jsx` | Restyled Contact section (moved from components/) |
| `src/sections/ProjectModal.jsx` | Restyled modal (moved from components/) |
| `src/components/Button.jsx` | Reusable button primitive with gradient variant |
| `src/components/Card.jsx` | Glassmorphism card wrapper |
| `src/components/Badge.jsx` | Accent-colored pill badge |
| `src/components/SectionHeader.jsx` | Badge + title + subtitle pattern |
| `src/components/AnimatedSection.jsx` | IntersectionObserver fade-in wrapper |
| `src/hooks/useIntersectionObserver.js` | Custom hook for scroll-triggered visibility |
| `src/hooks/useScrollSpy.js` | Custom hook for active nav section |

---

## Files to MODIFY

| File | Changes |
|------|---------|
| `vite.config.js` | Add `import tailwindcss from '@tailwindcss/vite'` and `tailwindcss()` to plugins array |
| `src/styles/global.css` | Complete rewrite: `@import 'tailwindcss'` + new CSS vars (indigo/purple palette) + glassmorphism + @keyframes + preserve all existing class names updated to new vars |
| `src/index.css` | Remove Times New Roman body font, remove `#root` width/border-inline constraints, remove light background override |
| `src/App.css` | Clear entirely (or keep only empty placeholder) |
| `src/App.jsx` | Update imports from `components/Hero` etc → `sections/Hero` etc. TechStack import → `sections/Skills` |
| `src/layouts/MainLayout.jsx` | Fill in: wraps children between Navbar and Footer |
| `src/hooks/useAuth.js` | Fill in: basic auth context hook (can be a stub that returns null) |
| `src/components/Navbar.jsx` | Restyle: gradient logo text, gradient scroll-progress bar, glass background, new active state styling. Keep all logic intact. |
| `src/components/Footer.jsx` | Restyle: glass minimal design with gradient brand text |
| `index.html` | Update title and add meta description |
| `src/pages/Login.jsx` | Update auth-card to use glass styling via CSS class updates |
| `src/pages/Dashboard.jsx` | Update metric cards to use glass CSS class |
| `src/pages/Services.jsx` | Update service cards to use glass CSS class. Keep `import SkillsSection from '../components/Skills'` |

---

## Files to KEEP UNCHANGED

- `src/data/portfolioData.js` — all content preserved
- `src/utils/sound.js` — unchanged
- `src/i18n/i18n.js` — unchanged
- `src/api/axios.js` — unchanged
- `src/context/ThemeContext.jsx` — unchanged
- `src/routes/AppRoutes.jsx` — unchanged (but imports still work since pages/About, pages/Contact still exist)
- `src/assets/selamsew.jpg`, `src/assets/aau-logo.png` — unchanged
- `src/components/LanguageSwitcher.jsx` — unchanged
- `src/components/SocialIcons.jsx` — unchanged
- `src/components/Skills.jsx` — keep in components/ (Services.jsx imports it)
- `src/components/TechStack.jsx` — keep in components/ (can stay as reference, section moved to sections/Skills.jsx)
- `src/components/Hero.jsx` through `src/components/Contact.jsx` — keep in components/ (pages still import from here). The section versions in `src/sections/` are the new restyled versions.
- `src/pages/Home.jsx` — unchanged (imports App which imports sections/)
- `src/pages/About.jsx` — unchanged (imports components/About which stays)
- `src/pages/Contact.jsx` — unchanged (imports components/Contact which stays)
- `src/main.jsx` — unchanged

> **Note:** The sections in `src/components/` are kept as-is (they are the "old" versions). The new restyled versions live in `src/sections/`. `App.jsx` is updated to import from `src/sections/`. Pages that import from `src/components/` continue to work unchanged.

---

## Order of Operations

- [ ] 1. **Fix Tailwind v4 wiring in vite.config.js**
      Add `@tailwindcss/vite` plugin so Tailwind utility classes compile.
      Files: `vite.config.js`
      Verify: `npm run build` — must not error on missing tailwind plugin.

- [ ] 2. **Overhaul global.css with new design system**
      Replace entire file: `@import 'tailwindcss'` at top. New CSS custom properties (indigo #6366f1, purple #8b5cf6, cyan #06b6d4, near-black #0a0a0f). @keyframes: fadeInUp, slideDown, pulseGlow, gradientShift. .glass-card, .gradient-text utility classes. ALL existing class names retained but color values updated to new variables. Both dark (default) and light theme defined.
      Files: `src/styles/global.css`
      Verify: `npm run build`

- [ ] 3. **Clean up index.css and App.css conflicts**
      `index.css`: Remove Times New Roman body font override and `#root` width/border constraint.
      `App.css`: Clear all content (conflicting overrides).
      Files: `src/index.css`, `src/App.css`
      Verify: `npm run build`

- [ ] 4. **Create reusable primitive components**
      Create `Button.jsx`, `Card.jsx`, `Badge.jsx`, `SectionHeader.jsx`, `AnimatedSection.jsx` in `src/components/`.
      Files: 5 new files in `src/components/`
      Verify: `npm run build`

- [ ] 5. **Create custom hooks and fill MainLayout**
      Create `useIntersectionObserver.js`, `useScrollSpy.js` in `src/hooks/`.
      Fill `src/layouts/MainLayout.jsx` with Navbar + children + Footer wrapper.
      Files: `src/hooks/useIntersectionObserver.js`, `src/hooks/useScrollSpy.js`, `src/layouts/MainLayout.jsx`
      Verify: `npm run build`

- [ ] 6. **Create src/sections/ with restyled Navbar-dependent sections**
      Create `src/sections/Hero.jsx`, `src/sections/About.jsx`, `src/sections/Skills.jsx` with new indigo/glassmorphism design. Update `src/App.jsx` imports.
      Files: 3 new section files, `src/App.jsx`
      Verify: `npm run build`

- [ ] 7. **Create remaining restyled sections**
      Create `src/sections/Experience.jsx` (alternating timeline), `src/sections/Education.jsx` (glass cards), `src/sections/Projects.jsx` (grid + filter tabs), `src/sections/Contact.jsx` (gradient focus, API preserved), `src/sections/ProjectModal.jsx` (glass modal). Update `src/App.jsx` to include all.
      Files: 5 new section files, updated `src/App.jsx`
      Verify: `npm run build`

- [ ] 8. **Restyle Navbar and Footer in src/components/**
      Navbar: gradient logo text, gradient scroll-progress bar, glass bg. Footer: minimal glass design.
      Files: `src/components/Navbar.jsx`, `src/components/Footer.jsx`
      Verify: `npm run build`

- [ ] 9. **Update page-level files and index.html**
      Login, Dashboard, Services: glass card CSS class updates. index.html: title + meta.
      Files: `src/pages/Login.jsx`, `src/pages/Dashboard.jsx`, `src/pages/Services.jsx`, `index.html`
      Verify: `npm run build`

---

## New global.css Color Variable System

```css
@import 'tailwindcss';

:root {
  /* === DARK-FIRST DESIGN SYSTEM (DEFAULT) === */
  --bg-main: #0a0a0f;
  --bg-surface: #0f0f1a;
  --bg-surface-elevated: #141425;
  --bg-glass: rgba(20, 20, 37, 0.70);
  --bg-subtle: #1a1a2e;
  --bg-input: #0f0f1a;

  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --text-subtle: #64748b;

  --border-glass: rgba(99, 102, 241, 0.15);
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-focus: #6366f1;

  --accent-primary: #6366f1;
  --accent-secondary: #8b5cf6;
  --accent-cyan: #06b6d4;
  --accent-gradient: linear-gradient(135deg, #6366f1, #8b5cf6);
  --accent-gradient-hover: linear-gradient(135deg, #4f46e5, #7c3aed);

  --primary: #6366f1;           /* alias for backward compat */
  --primary-hover: #4f46e5;
  --primary-glow: rgba(99, 102, 241, 0.25);
  --cyan: #06b6d4;
  --emerald: #10b981;
  --purple: #8b5cf6;
  --rose: #fb7185;
  --amber: #fbbf24;

  --nav-bg: rgba(10, 10, 15, 0.85);
  --card-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 1px rgba(255,255,255,0.05);
  --card-shadow-hover: 0 20px 40px rgba(99, 102, 241, 0.2), 0 0 1px rgba(99,102,241,0.4);
  --modal-bg: #0f0f1a;
}

/* LIGHT THEME OVERRIDE */
:root[data-theme="light"], html:not(.dark) {
  --bg-main: #f8fafc;
  --bg-surface: #ffffff;
  --bg-surface-elevated: #f1f5f9;
  --bg-glass: rgba(255, 255, 255, 0.80);
  --bg-subtle: #e2e8f0;
  --bg-input: #ffffff;
  --text-main: #0f172a;
  --text-muted: #475569;
  --text-subtle: #64748b;
  --border-glass: rgba(99, 102, 241, 0.2);
  --border-subtle: rgba(0, 0, 0, 0.08);
  --nav-bg: rgba(248, 250, 252, 0.90);
  --card-shadow: 0 4px 20px rgba(0,0,0,0.08);
  --card-shadow-hover: 0 16px 32px rgba(99,102,241,0.15);
  --modal-bg: #ffffff;
}

/* html.dark aliases (ThemeContext adds .dark class) */
html.dark {
  color-scheme: dark;
}
```

## @keyframes to Define

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6); }
  50%       { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
}

@keyframes gradientShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

@keyframes blobFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(30px, -20px) scale(1.05); }
  66%       { transform: translate(-20px, 10px) scale(0.97); }
}
```

## Glassmorphism Utility Classes

```css
.glass-card {
  background: var(--bg-glass);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border-glass);
  border-radius: 16px;
}

.gradient-text {
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-bg {
  background: var(--accent-gradient);
}

.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
}
```

---

## Tailwind v4 Gotchas

1. **Import syntax:** `@import 'tailwindcss'` not `@tailwind base/components/utilities`. The old directives cause a build error in v4.
2. **Plugin wiring:** `@tailwindcss/vite` must be in `vite.config.js` plugins. Without it, Tailwind utility classes do not compile.
3. **No `tailwind.config.js` needed** for v4 — configuration is done via CSS `@theme` blocks if needed.
4. **`@tailwindcss/vite` vs `postcss`:** The project uses Vite directly (no postcss config), so the Vite plugin approach is the correct one.
5. **Class conflicts with custom CSS:** Since the project uses custom class names (`.btn`, `.section-container`, etc.), adding Tailwind utilities should not conflict — but watch for Tailwind's preflight (CSS reset) potentially overriding existing styles. The glass-card approach keeps most styling in CSS vars to minimize conflicts.
6. **`-webkit-text-fill-color`** for gradient text must be paired with `-webkit-background-clip: text` for cross-browser gradient text support.
7. **`backdrop-filter`** requires `-webkit-backdrop-filter` prefix for Safari compatibility.

---

## FEAT Artifact Location

The full FEAT artifacts for the automated coder agents are at:
`c:\Users\HP\.gemini\antigravity\scratch\Selamsew-portfolio2\frontend\.agents\tasks\task-selamsew-ui-overhaul\`

- `task.json` — task metadata and feature order
- `context.json` — project context for coder orientation
- `features/FEAT-001.json` — Foundation (Tailwind wiring, global.css, primitives, hooks, sections/ structure)
- `features/FEAT-002.json` — Restyle Navbar, Hero, About, Skills
- `features/FEAT-003.json` — Restyle Experience, Education, Projects, Contact, Footer, pages

Each coder must read `context.json` and its FEAT file FIRST before touching any code.
