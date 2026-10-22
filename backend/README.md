# ⚙️ Backend — Selamsew Alemu Portfolio API

[![Node.js](https://img.shields.io/badge/Node.js-v22+-339933?style=flat&logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.2-000000?style=flat&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat&logo=mongodb)](https://mongodb.com/)

RESTful API backend for **Selamsew Alemu's Portfolio**, providing contact inquiry processing, automated Brevo email dispatching, database persistence, and administrative health monitoring.

---

## 🚀 Quick Start

### Installation
```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Start the server
npm start
```
The API server will run at **`http://localhost:5000`**.

For development with hot reload:
```bash
npm run server
```

---

## 🔑 Environment Configuration

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
BREVO_API_KEY=your_brevo_api_key_here
EMAIL_FROM=no-reply@yourdomain.com
EMAIL_TO=selamsewalemu1@gmail.com
```

*Note: The server runs safely in standalone memory mode if `MONGO_URI` is not provided.*

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | API status and timestamp |
| `GET` | `/api/health` | Service health check |
| `POST` | `/api/contact` | Receives contact message & dispatches Brevo email |
| `GET` | `/api/auth/status` | Authentication service status |
| `GET` | `/api/user/profile` | Public engineer profile endpoint |

---

## 📁 Architecture

```
backend/src/
├── config/
│   └── db.js                  # Safe MongoDB connection handler (does not crash if DB offline)
├── controllers/
│   └── contactController.js   # Message validation, DB persistence & Brevo email dispatch
├── middleware/                # Auth, upload, and error middleware
├── models/
│   ├── Contact.js             # Mongoose contact inquiry schema
│   └── User.js                # Mongoose user admin schema
├── routes/
│   ├── contactRoutes.js       # Contact router
│   ├── authRoutes.js          # Auth router
│   └── userRoutes.js          # User router
├── app.js                     # Express setup & CORS policies
└── server.js                  # Entry point
```
