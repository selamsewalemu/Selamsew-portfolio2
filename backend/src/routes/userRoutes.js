import express from "express";

const router = express.Router();

router.get("/profile", (req, res) => {
  res.json({
    name: "Selamsew Alemu",
    role: "Electrical & Computer Engineer",
    status: "active",
  });
});

export default router;
