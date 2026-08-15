import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../api/axios";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // "success" | "error"
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setFeedback("All fields are required.");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const { data } = await api.post("/contact", form);
      setStatus("success");
      setFeedback(data.message || "Your message has been sent successfully.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setFeedback(
        err.response?.data?.error ||
          "Failed to send your message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />

      <section className="page-section">
        <div className="container">
          <h1>Contact Me</h1>

          {status === "success" && (
            <p className="form-success">{feedback}</p>
          )}
          {status === "error" && (
            <p className="form-error">{feedback}</p>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Write your message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
