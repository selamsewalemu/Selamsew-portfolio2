# ⚡ Selamsew Alemu — Engineering Portfolio & International Showcase

[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4.3-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-v22+-339933?style=flat&logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.2-000000?style=flat&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat&logo=mongodb)](https://mongodb.com/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![i18n](https://img.shields.io/badge/i18n-EN%20%7C%20AM%20%7C%20FR-blue)](https://react.i18next.com/)

An international, responsive, modern portfolio and engineering showcase platform built for **Selamsew Alemu** — Electrical & Computer Engineer, Full-Stack Web Developer, and Enterprise ERP Systems Administrator.

---

## 🌟 Key Features & UI Enhancements

### 🎨 Modern Glassmorphism & Cyber-Tech UI
- **Dual Themes (Dark & Light Mode)**: Sleek cyber-slate with glowing cyan/electric blue accents and a clean executive light mode with persistent local storage.
- **Micro-Animations & Visuals**: Floating skill cards, pulsating live availability indicators, and interactive cards.
- **Responsive Mobile Drawer**: Off-canvas menu navigation for mobile, tablet, and widescreen desktop.

### 💻 Comprehensive Programming Languages
Dedicated showcase section featuring proficiency metrics, usage context, and categorized filters:
- **JavaScript (ES6+)** — React ecosystem, Node.js microservices, asynchronous architectures.
- **TypeScript** — Strongly typed enterprise components and contract safety.
- **Python** — System automation, data manipulation, backend logic.
- **C++** — Algorithmic design, memory management, microcontrollers & embedded systems.
- **Java** — Object-Oriented Software Engineering and design patterns.
- **SQL (MySQL / PostgreSQL)** — Schema modeling, complex queries, transactions, and indexing.
- **PHP** — Backend web services and legacy ERP database integration.
- **Bash / Shell Scripting** — Automated Linux server administration, cron schedules, backups.
- **HTML5 & CSS3 / Modern Web** — Semantic layouts, CSS Grid, Flexbox, Tailwind CSS v4.

### 🛠️ Technical Competency Domains
Categorized into interactive disciplines:
1. **Frontend Architecture**: React 19, Vite, Tailwind CSS v4, Redux Toolkit, Context API, responsive UI/UX.
2. **Backend & API Engineering**: Node.js, Express.js, RESTful APIs, JWT Auth, Multer, Brevo email services.
3. **Database Management**: MongoDB & Mongoose, MySQL, PostgreSQL, query optimization, automated backups.
4. **Enterprise ERP & Operations**: ERP deployment, cross-department database mapping, user support, reporting engines.
5. **Computer Engineering & Networking**: TCP/IP, subnetting, Cisco CCNA switching concepts, hardware diagnostics.
6. **DevOps & Tooling**: Git, GitHub, Docker, Postman, Linux Bash, Render/Vercel deployment.

### 💼 In-Depth Work Experience Timeline
- **Systems Administrator, User Support Officer & Junior Full-Stack Developer** (2024 – Present)
  - 99.8% ERP platform availability maintained across organizational departments.
  - Built custom internal dashboards (React/Node.js) cutting manual paperwork by 45%.
  - 150+ monthly user support queries resolved with 98% satisfaction rate.
- **Full-Stack Web Developer (Freelance / Contract)** (2023 – 2024)
  - Full-stack MERN client platforms with secure JWT authentication and REST APIs.
  - Multilingual localization and Google Lighthouse 90+ performance ratings.
- **Engineering IT Systems Assistant & Academic Laboratory Researcher** (2022 – 2023)
  - Debre Markos University — College of Technology.
  - Lab network maintenance, hardware diagnostics, and tutoring 60+ junior students.

### 🚀 Interactive Featured Projects & Case Studies
Interactive popup case-study modals with problem descriptions, architectural solutions, feature checkmarks, tech tags, and live demo / code links:
1. **Budget Expense Management System** (Debre Markos University Final Graduation Project)
2. **Enterprise Fuel & Fleet Inventory System** (Full-Stack Auditing Platform)
3. **Localized International Portfolio Platform** (Trilingual showcase with i18n)
4. **Corporate ERP User Support & Incident Pipeline** (Ticketing & database patch tracker)
5. **Smart Hardware Health & Sensor Monitor** (IoT / Microcontroller telemetry)
6. **Real-Time Team Collaboration & Task Hub** (Agile Kanban sync engine)

### 🎓 Academic Background & Credentials
- **Debre Markos University (DMU)** — Bachelor of Science in Electrical and Computer Engineering (Specialization: Computer Engineering) | July 2024.
- Core Coursework: OOP, Data Structures, Computer Architecture, Embedded Systems, Computer Networks, Operating Systems, DBMS, Software Engineering.
- Accreditations: MERN Stack Specialist, ERP System Administration, Cisco CCNA Networking, JavaScript Architecture, Python for Systems.

### 🌐 Trilingual Localization (i18n)
- **English (EN)**
- **Amharic (አማርኛ - AM)**
- **French (Français - FR)**

### 📬 Direct Contact & Communication
- Direct email and phone channels with **1-click clipboard copy** feedback.
- Interactive contact form with Brevo HTTP API integration and fallback notification.

---

## 📂 Project Architecture

```
Selamsew-portfolio2/
├── frontend/
│   ├── public/
│   │   └── Locales/
│   │       ├── en/translation.json
│   │       ├── am/translation.json
│   │       └── fr/translation.json
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js               # Axios client with proxy & Render fallback
│   │   ├── assets/
│   │   │   └── selamsew.jpg           # Profile photography
│   │   ├── components/
│   │   │   ├── Navbar.jsx             # Glassmorphic header with drawer & theme toggle
│   │   │   ├── Hero.jsx               # Hero banner with role ticker & metrics
│   │   │   ├── About.jsx              # Bio, pillars & career objectives
│   │   │   ├── Languages.jsx          # Dedicated programming languages section
│   │   │   ├── Skills.jsx             # Categorized skill discipline cards
│   │   │   ├── Experience.jsx         # Vertical career timeline
│   │   │   ├── Projects.jsx           # Filterable projects showcase
│   │   │   ├── ProjectModal.jsx       # Deep-dive case study dialog
│   │   │   ├── Education.jsx          # Degree details & certification badges
│   │   │   ├── Contact.jsx            # Direct contact cards & message form
│   │   │   ├── Footer.jsx             # Footer navigation & back-to-top button
│   │   │   ├── LanguageSwitcher.jsx   # EN / AM / FR language switcher
│   │   │   └── SocialIcons.jsx        # SVG GitHub & LinkedIn icons
│   │   ├── context/
│   │   │   └── ThemeContext.jsx       # Dark / Light theme provider
│   │   ├── data/
│   │   │   └── portfolioData.js       # Central data store (languages, skills, projects)
│   │   ├── i18n/
│   │   │   └── i18n.js                # i18next configuration with bundled dictionaries
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Login.jsx
│   │   ├── routes/
│   │   │   └── AppRoutes.jsx          # React Router configuration
│   │   ├── styles/
│   │   │   └── global.css             # Comprehensive design system & CSS variables
│   │   ├── App.jsx                    # Master portfolio landing layout
│   │   └── main.jsx                   # Application entry point
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js                  # Safe MongoDB connection handler
│   │   ├── controllers/
│   │   │   └── contactController.js   # Message processor & Brevo email dispatch
│   │   ├── models/
│   │   │   ├── Contact.js             # Mongoose contact inquiry schema
│   │   │   └── User.js                # Mongoose user admin schema
│   │   ├── routes/
│   │   │   ├── contactRoutes.js       # Contact endpoint router
│   │   │   ├── authRoutes.js          # Authentication router
│   │   │   └── userRoutes.js          # User profile router
│   │   ├── app.js                     # Express app setup & CORS policies
│   │   └── server.js                  # Server entry point
│   ├── package.json
│   └── nodemon.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### 1. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The application will launch locally at `http://localhost:5173`.

To build for production:
```bash
npm run build
```

### 2. Backend Setup
```bash
cd backend
npm install
npm start
```
The Express API will run at `http://localhost:5000`.

#### Environment Configuration (`backend/.env`):
```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
BREVO_API_KEY=your_brevo_api_key_here
EMAIL_FROM=no-reply@yourdomain.com
EMAIL_TO=selamsewalemu1@gmail.com
```

---

## 👤 Author

**Selamsew Alemu**  
- **Title**: Electrical & Computer Engineer  
- **Specialization**: Computer Engineering (Debre Markos University '24)  
- **Email**: [selamsewalemu1@gmail.com](mailto:selamsewalemu1@gmail.com)  
- **GitHub**: [github.com/selamsewalemu](https://github.com/selamsewalemu)  
- **LinkedIn**: [linkedin.com/in/selamsew-alemu](https://linkedin.com/in/selamsew-alemu)  
- **Location**: Addis Ababa & Debre Markos, Ethiopia  

---

## 📄 License
This project is open-source and available under the [ISC License](LICENSE).
