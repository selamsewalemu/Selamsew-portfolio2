const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Ensure your React frontend can communicate with this API

// Configure the email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use 'gmail', 'outlook', or SMTP settings from SendGrid/Resend
  auth: {
    user: 'selamsewdmu@gmail.com', // Your professional email address
    pass: 'Selam@!sew1234' // NOT your login password, see security note below
  }
});

// Contact Form API Route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // 1. Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // 2. Setup email details
  const mailOptions = {
    from: email, 
    to: 'selamsewdmu@gmail.com', // Where you want to receive the alerts
    subject: `New Portfolio Message from ${name}`,
    text: `You have received a new message from your portfolio website:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h3>New Portfolio Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  // 3. Send the email
  try {
    await transporter.sendMail(mailOptions);
    
    // Optional: Save to MongoDB here if you want a backup database record!
    
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email backend-side." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));