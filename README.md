# Selamsew Alemu — Portfolio

[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite 8](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat&logo=mongodb)](https://mongodb.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

Personal portfolio website for **Selamsew Alemu** — Computer Engineer, System Administrator, and Full-Stack Developer based in Addis Ababa, Ethiopia.

🔗 **Live site**: [https://selamsewalemu.github.io/Selamsew211](https://selamsewalemu.github.io/Selamsew211)

---

## About

B.Sc. Electrical & Computer Engineering graduate (Debre Markos University, 2024) currently working as System Administrator & User Support Officer at Tibeb Design and Build PLC. Certified Full-Stack Developer through Addis Ababa University (AAU) training program (2026).

**Contact**
- Email: [selamsewdmu@gmail.com](mailto:selamsewdmu@gmail.com)
- Phone: +251 091 550 4626
- GitHub: [github.com/selamsewalemu](https://github.com/selamsewalemu)
- LinkedIn: [linkedin.com/in/selamsew-alemu](https://linkedin.com/in/selamsew-alemu)
- Telegram: [@selamsewalemu](https://t.me/selamsewalemu)

---

## Tech Stack

| Layer     | Technology                                      |
|-----------|-------------------------------------------------|
| Frontend  | React 19, Vite 8, Tailwind CSS v4, Lucide React |
| Routing   | React Router v7                                 |
| i18n      | i18next (English)                               |
| Backend   | Node.js, Express.js                             |
| Database  | MongoDB + Mongoose                              |
| Email     | Brevo (Sendinblue) API                          |
| Auth      | JWT + bcrypt                                    |

---

## Project Structure

```
Selamsew-portfolio2/
├── frontend/               # React + Vite client
│   ├── src/
│   │   ├── sections/       # Page sections (Hero, About, Skills, Education, Projects, Experience, Contact)
│   │   ├── components/     # Reusable UI (Navbar, Footer, SectionHeader, LanguageSwitcher…)
│   │   ├── data/           # portfolioData.js — all content in one place
│   │   ├── styles/         # global.css — design system & CSS variables
│   │   ├── context/        # ThemeContext (dark/light mode)
│   │   ├── hooks/          # useIntersectionObserver, useScrollSpy
│   │   ├── i18n/           # i18n.js (English)
│   │   ├── api/            # axios.js — API client
│   │   ├── routes/         # AppRoutes.jsx
│   │   └── App.jsx         # Root layout
│   └── package.json
│
├── backend/                # Node.js + Express API
│   ├── src/
│   │   ├── controllers/    # contactController, authController, userController
│   │   ├── models/         # Contact.js, User.js (Mongoose)
│   │   ├── routes/         # contactRoutes, authRoutes, userRoutes
│   │   ├── middleware/     # auth, error, upload middleware
│   │   ├── config/         # db.js, jwt.js
│   │   └── server.js
│   └── package.json
│
└── README.md
```

---

## Sections

| Order | Section    | Description                                      |
|-------|------------|--------------------------------------------------|
| 1     | Home       | Hero with photo, name, role, CTA buttons, social links |
| 2     | About      | Bio, facts, strengths                            |
| 3     | Skills     | Tabbed chip grid — Frontend, Backend, Database, Tools |
| 4     | Education  | Degree, AAU training, certifications             |
| 5     | Projects   | Featured projects with tech tags and links       |
| 6     | Experience | Two-column timeline with experience cards        |
| 7     | Contact    | Form + direct contact info                       |

---

## Local Development

### Frontend
```bash
cd frontend
npm install
npm run dev
# Opens at http://localhost:5173
```

### Backend
```bash
cd backend
npm install
npm start
# Runs at http://localhost:5000
```

### Backend `.env`
```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/portfolio
BREVO_API_KEY=your_brevo_key
EMAIL_FROM=no-reply@yourdomain.com
EMAIL_TO=selamsewdmu@gmail.com
JWT_SECRET=your_jwt_secret
```

### Production Build
```bash
cd frontend
npm run build   # outputs to frontend/dist/
```

---

## Features

- **Dark / Light theme** — persisted in localStorage
- **Responsive** — mobile (320px+), tablet, desktop (1440px+)
- **Smooth scroll navigation** with active section spy
- **Contact form** — sends email via Brevo API
- **CV download** — generates and downloads a text CV
- **Skills accordion** — collapsed by default, opens on click
- **Experience timeline** — two cards side-by-side per row

---

## License

ISC © [Selamsew Alemu](https://github.com/selamsewalemu)
