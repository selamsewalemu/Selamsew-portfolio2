# 🎨 Frontend — Selamsew Alemu Portfolio

[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4.3-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat&logo=vite)](https://vitejs.dev/)

Modern, component-driven client architecture for **Selamsew Alemu's Engineering Portfolio & Showcase**, engineered with React 19, Tailwind CSS v4, Lucide React icons, and Vite.

---

## 🚀 Quick Start

### Installation
```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the Vite development server
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### Production Build
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 📁 Component Structure

```
frontend/src/
├── api/
│   └── axios.js               # Central Axios client with base URL & dev proxy
├── assets/
│   ├── selamsew.jpg           # Profile photography
│   └── aau-logo.png           # Addis Ababa University official emblem
├── components/
│   ├── Navbar.jsx             # Sticky blurred glass navigation header
│   ├── Hero.jsx               # Hero banner with role ticker & CV download
│   ├── About.jsx              # Bio, engineering pillars & quick facts
│   ├── Languages.jsx          # Dedicated C#, .NET, JS, Python, SQL language cards
│   ├── Skills.jsx             # Categorized skill discipline cards (.NET, MERN, ERP)
│   ├── Experience.jsx         # Vertical career timeline with active track
│   ├── Projects.jsx           # Filterable projects showcase
│   ├── ProjectModal.jsx       # Interactive case-study dialog
│   ├── Education.jsx          # Degree details & certification badges
│   ├── Contact.jsx            # Direct contact cards with copy-buttons & form
│   ├── Footer.jsx             # Footer navigation & back-to-top button
│   └── SocialIcons.jsx        # SVG GitHub & LinkedIn icons
├── context/
│   └── ThemeContext.jsx       # Dark / Light theme provider (localStorage)
├── data/
│   └── portfolioData.js       # Central data store (languages, skills, projects)
├── i18n/
│   └── i18n.js                # i18next configuration (English exclusive)
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Contact.jsx
│   ├── Dashboard.jsx
│   └── Login.jsx
├── routes/
│   └── AppRoutes.jsx          # React Router v7 routes
├── styles/
│   └── global.css             # Comprehensive design system & CSS variables
├── App.jsx                    # Master portfolio landing layout
└── main.jsx                   # Application entry point
```

---

## 🎨 Design System Highlights
- **Theme Support**: Seamless toggle between Cyber-Slate Dark Mode and Executive Light Mode.
- **Glassmorphism**: Backdrop blur with translucent borders.
- **Micro-Animations**: Pulsing online availability indicator, spinning glow rings, and smooth hover elevations.
- **Accessibility & Responsive**: Full keyboard navigation, standard ARIA labels, and responsive layout scaling.
