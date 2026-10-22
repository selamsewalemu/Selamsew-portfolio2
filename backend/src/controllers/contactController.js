import Contact from "../models/Contact.js";

export const handleContactMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  try {
    // 1. Try to save to database if MongoDB is connected
    try {
      const newContact = new Contact({
        name,
        email,
        subject: subject || "Portfolio Inquiry",
        message,
      });
      await newContact.save();
    } catch (dbErr) {
      console.warn("Could not save to MongoDB (db offline or disconnected):", dbErr.message);
    }

    // 2. If BREVO_API_KEY is configured, dispatch transactional email
    if (process.env.BREVO_API_KEY && process.env.EMAIL_TO) {
      try {
        const response = await fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "api-key": process.env.BREVO_API_KEY,
          },
          body: JSON.stringify({
            sender: {
              name: `${name} (Portfolio Inquiry)`,
              email: process.env.EMAIL_FROM || "no-reply@selamsew-portfolio.com",
            },
            replyTo: { email, name },
            to: [{ email: process.env.EMAIL_TO, name: "Selamsew Alemu" }],
            subject: `[Portfolio] ${subject || "New Message"} from ${name}`,
            textContent: `New message received from your portfolio:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || "N/A"}\nMessage:\n${message}`,
            htmlContent: `
              <div style="font-family: sans-serif; padding: 20px; line-height: 1.6; color: #1e293b;">
                <h2 style="color: #2563eb;">New Portfolio Message Received</h2>
                <p><strong>Sender Name:</strong> ${name}</p>
                <p><strong>Email Address:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Subject:</strong> ${subject || "Portfolio Contact"}</p>
                <div style="background: #f1f5f9; padding: 15px; border-left: 4px solid #2563eb; border-radius: 4px;">
                  <p><strong>Message:</strong></p>
                  <p>${message}</p>
                </div>
              </div>
            `,
          }),
        });

        if (!response.ok) {
          const errData = await response.json();
          console.error("Brevo API error:", errData);
        }
      } catch (emailErr) {
        console.error("Brevo API network exception:", emailErr.message);
      }
    }

    return res.status(200).json({
      success: true,
      message: "Thank you! Your message has been received successfully.",
    });
  } catch (error) {
    console.error("Contact handler error:", error.message);
    return res.status(500).json({ error: "Failed to process message." });
  }
};
