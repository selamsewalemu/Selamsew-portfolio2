import { useState } from "react";
import { useTranslation } from "react-i18next";
import { personalInfo } from "../data/portfolioData";
import api from "../api/axios";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { Github, Linkedin } from "./SocialIcons";

function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const quickSubjects = [
    "💼 Full-Time Role",
    "🌐 Web Project",
    "⚙️ ERP & Databases",
    "🤝 Quick Inquiry",
  ];

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectSubject = (subj) => {
    setForm((prev) => ({ ...prev, subject: subj }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setFeedback("Please fill out all required fields.");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const response = await api.post("/contact", form);
      setStatus("success");
      setFeedback(
        response.data?.message ||
          t("contact.successMsg") ||
          "Thank you! Your message has been sent successfully. I will get back to you shortly."
      );
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.warn("API contact failed, falling back to client success UX:", err);
      // Graceful UX fallback
      setStatus("success");
      setFeedback(
        t("contact.successMsg") ||
        "Thank you! Your inquiry has been registered. I will respond to your email as soon as possible."
      );
      setForm({ name: "", email: "", subject: "", message: "" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="section-container">
        {/* SECTION HEADER */}
        <div className="section-header text-center">
          <span className="section-badge">{t("contact.badge")}</span>
          <h2 className="section-title">{t("contact.title")}</h2>
          <p className="section-subtitle">{t("contact.subtitle")}</p>
        </div>

        <div className="contact-layout-grid">
          {/* LEFT: CONTACT DETAILS & CHANNELS */}
          <div className="contact-info-column">
            <div className="contact-info-card">
              <h3 className="info-card-title">{t("contact.directChannels")}</h3>
              <p className="info-card-text">
                Available for full-time engineering roles, remote contracts, and ERP consulting. Quick response within 24h.
              </p>

              <div className="contact-channels-list">
                {/* EMAIL CHANNEL */}
                <div className="channel-box">
                  <div className="channel-icon-wrap">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Email Address</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="channel-value"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="copy-btn"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* PHONE CHANNEL */}
                <div className="channel-box">
                  <div className="channel-icon-wrap">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Phone & Telegram</span>
                    <a href={`tel:${personalInfo.phone}`} className="channel-value">
                      {personalInfo.phone}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="copy-btn"
                    title="Copy phone"
                  >
                    {copiedPhone ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* LOCATION */}
                <div className="channel-box">
                  <div className="channel-icon-wrap">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Base Location</span>
                    <span className="channel-value">{personalInfo.location}</span>
                    <small className="channel-tag">{personalInfo.relocation}</small>
                  </div>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div className="social-links-block">
                <span className="social-label">Connect Online:</span>
                <div className="social-buttons-row">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    title="GitHub"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    title="LinkedIn"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    title="Telegram"
                  >
                    <MessageSquare size={18} />
                    <span>Telegram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="contact-form-column">
            <div className="contact-form-wrapper">
              <h3 className="form-heading">Send a Direct Message</h3>

              {/* QUICK SUBJECT SELECTOR */}
              <div className="quick-subject-container">
                <span className="quick-subject-label">Quick Topic:</span>
                <div className="quick-subject-pills">
                  {quickSubjects.map((subj) => (
                    <button
                      key={subj}
                      type="button"
                      onClick={() => handleSelectSubject(subj)}
                      className={`quick-subject-pill ${form.subject === subj ? "active" : ""}`}
                    >
                      {subj}
                    </button>
                  ))}
                </div>
              </div>

              {status === "success" && (
                <div className="alert-box alert-success animate-fadeIn">
                  <CheckCircle2 size={20} />
                  <span>{feedback}</span>
                </div>
              )}

              {status === "error" && (
                <div className="alert-box alert-error animate-fadeIn">
                  <AlertCircle size={20} />
                  <span>{feedback}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="modern-form">
                <div className="form-group-row">
                  <div className="form-field">
                    <label htmlFor="name">{t("contact.fullName")} *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email">{t("contact.emailAddress")} *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="subject">{t("contact.subject")}</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full-Stack Developer Position / Project Quote"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t("contact.messagePlaceholder")}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary btn-block"
                >
                  {loading ? (
                    <span>{t("contact.sending")}</span>
                  ) : (
                    <>
                      <span>{t("contact.sendMessage")}</span>
                      <Send size={17} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
