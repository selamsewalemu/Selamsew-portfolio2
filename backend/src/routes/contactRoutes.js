import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: `${name} via Portfolio`,
          email: process.env.EMAIL_FROM,
        },
        replyTo: { email, name },
        to: [{ email: process.env.EMAIL_TO }],
        subject: `New Portfolio Message from ${name}`,
        textContent: `You received a new message from your portfolio.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        htmlContent: `
          <h3>New Portfolio Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      console.error("Brevo API error:", err);
      return res.status(500).json({ error: "Failed to send email." });
    }

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error.message);
    res.status(500).json({ error: "Failed to send email." });
  }
});

export default router;
