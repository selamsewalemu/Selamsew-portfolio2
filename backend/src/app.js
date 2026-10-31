import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "http://localhost:3000",
      "https://selamsew211-2.onrender.com",
      "https://selamsewalemu.github.io",
    ],
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  if (req.accepts("html")) {
    return res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Selamsew Alemu Portfolio API</title>
  <meta http-equiv="refresh" content="3;url=https://selamsew211-2.onrender.com">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: #0b0f19;
      color: #f1f5f9;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 20px;
    }
    .card {
      background: #111827;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      padding: 36px 28px;
      max-width: 460px;
      width: 100%;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(16, 185, 129, 0.15);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: #10b981;
      padding: 5px 12px;
      border-radius: 999px;
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 18px;
    }
    .pulse { width: 8px; height: 8px; border-radius: 50%; background: #10b981; }
    h1 { font-size: 22px; font-weight: 700; margin-bottom: 12px; }
    p { color: #94a3b8; font-size: 14px; line-height: 1.6; margin-bottom: 24px; }
    .btn {
      display: inline-block;
      width: 100%;
      background: linear-gradient(135deg, #0284c7, #2563eb);
      color: #ffffff;
      text-decoration: none;
      font-weight: 600;
      font-size: 15px;
      padding: 13px 24px;
      border-radius: 10px;
      transition: all 0.2s ease;
      box-shadow: 0 4px 15px rgba(2, 132, 199, 0.4);
    }
    .btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(2, 132, 199, 0.6); }
    .timer-note { font-size: 12px; color: #64748b; margin-top: 14px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge"><span class="pulse"></span> Backend API Online</div>
    <h1>Selamsew Alemu Portfolio API</h1>
    <p>You have reached the backend API server. Redirecting you automatically to the live portfolio website...</p>
    <a href="https://selamsew211-2.onrender.com" class="btn">Open Portfolio Website &rarr;</a>
    <div class="timer-note">Auto-redirecting in 3 seconds...</div>
  </div>
</body>
</html>`);
  }
  res.json({
    service: "Selamsew Alemu Portfolio API",
    status: "online",
    frontend: "https://selamsew211-2.onrender.com",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend is operational" });
});

app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

export default app;
