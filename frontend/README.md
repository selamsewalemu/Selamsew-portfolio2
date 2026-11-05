# Frontend — Selamsew Portfolio

[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite 8](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite)](https://vitejs.dev/)

React 19 + Vite 8 + Tailwind CSS v4 portfolio frontend.

---

## Quick Start

```bash
npm install
npm run dev       # dev server → http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build
```

---

## Structure

```
src/
├── sections/           # Page sections rendered in order:
│   ├── Hero.jsx        #  1. Home
│   ├── About.jsx       #  2. About
│   ├── Skills.jsx      #  3. Skills (tabbed chips)
│   ├── Education.jsx   #  4. Education
│   ├── Projects.jsx    #  5. Projects
│   ├── Experience.jsx  #  6. Experience (two-col timeline)
│   └── Contact.jsx     #  7. Contact
├── components/
│   ├── Navbar.jsx          # Sticky nav with scroll spy + hamburger
│   ├── Footer.jsx          # Simple footer
│   ├── SectionHeader.jsx   # Reusable section title + badge + underline
│   ├── LanguageSwitcher.jsx# EN only
│   └── ProjectModal.jsx    # Project detail modal
├── data/
│   └── portfolioData.js    # All content — personalInfo, experience, projects, skills
├── styles/
│   └── global.css          # Design system — CSS variables, components, responsive rules
├── context/
│   └── ThemeContext.jsx    # Dark / Light mode
├── hooks/
│   ├── useIntersectionObserver.js
│   └── useScrollSpy.js
├── i18n/
│   └── i18n.js             # English translations
├── api/
│   └── axios.js            # Axios client
├── routes/
│   └── AppRoutes.jsx       # React Router v7
├── App.jsx                 # Root layout
└── main.jsx                # Entry point
```

---

## Design System

All design tokens live in `src/styles/global.css`:

| Token | Value |
|---|---|
| Primary accent | `#6366f1` (indigo) |
| Secondary accent | `#8b5cf6` (purple) |
| Cyan accent | `#06b6d4` |
| Emerald (badges) | `#10b981` |
| Background | `#0a0a0f` (dark) |
| Font | Plus Jakarta Sans, Inter |

**Section badges** — emerald green pill with glow  
**Section title underline** — green gradient bar  
**Cards** — subtle border, `border-radius: 16px`, hover lift  

---

## Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `< 480px` | Single column, compact buttons |
| `480–768px` | Single column, 2-col stats/skills |
| `768–900px` | Hero stacks, projects 2-col |
| `900–1100px` | Full desktop layout |
| `> 1100px` | Max-width 1100px centered |

---

## Key Dependencies

```json
"react": "^19.2.6",
"react-router-dom": "^7.15.1",
"tailwindcss": "^4.3.0",
"@tailwindcss/vite": "^4.3.0",
"lucide-react": "^1.61.0",
"i18next": "^26.2.0",
"react-i18next": "^17.0.8",
"axios": "^1.16.1"
```
