import { useTranslation } from "react-i18next";
import { personalInfo } from "../data/portfolioData";
import aauLogo from "../assets/aau-logo.png";
import {
  GraduationCap,
  MapPin,
  Globe2,
  Code2,
  ShieldCheck,
  Zap,
  Cpu,
  Workflow,
  CheckCircle,
  ArrowRight,
  Award,
} from "lucide-react";

function About() {
  const { t } = useTranslation();

  const coreStrengths = [
    {
      icon: <Workflow className="strength-icon text-cyan" size={24} />,
      title: "ERP & Workflows",
      desc: "Enterprise modules, ERP uptime & automated admin workflows.",
      stat: "High Uptime",
    },
    {
      icon: <Zap className="strength-icon text-primary" size={24} />,
      title: "Full-Stack Web",
      desc: "Responsive React 19 apps with Node.js & PostgreSQL APIs.",
      stat: "Sub-second APIs",
    },
    {
      icon: <ShieldCheck className="strength-icon text-emerald" size={24} />,
      title: "Database Ops",
      desc: "Schema design, query tuning & automated daily backups.",
      stat: "Zero Data-Loss",
    },
    {
      icon: <Cpu className="strength-icon text-purple" size={24} />,
      title: "Networks & Systems",
      desc: "TCP/IP subnets, hardware diagnostics & Linux servers.",
      stat: "Cisco & Linux",
    },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 62;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="section-padding about-section">
      <div className="section-container">
        {/* SECTION HEADER */}
        <div className="section-header text-center">
          <span className="section-badge">{t("about.badge")}</span>
          <h2 className="section-title">{t("about.title")}</h2>
          <p className="section-subtitle">{t("about.subtitle")}</p>
        </div>

        {/* TWO-COLUMN BIO */}
        <div className="about-grid">
          <div className="about-bio-card">
            <h3 className="card-headline">{t("about.summaryTitle")}</h3>
            <p className="paragraph">{t("about.summaryText1")}</p>
            <p className="paragraph">{t("about.summaryText2")}</p>

            <div className="objective-box">
              <h4 className="objective-title">{t("about.objectiveTitle")}</h4>
              <p className="objective-text">{t("about.objectiveText")}</p>
            </div>

            <div className="about-quick-actions" style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={() => scrollToSection("experience")}
                className="btn btn-primary"
              >
                <span>View Career Track</span>
                <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("education")}
                className="btn btn-secondary"
              >
                <Award size={16} />
                <span>Degrees & Credentials</span>
              </button>
            </div>
          </div>

          {/* QUICK FACTS & INFO */}
          <div className="about-facts-card">
            <h3 className="card-headline">{t("about.quickFacts")}</h3>

            <div className="facts-list">
              <div className="fact-item">
                <GraduationCap className="fact-icon" />
                <div>
                  <strong>Degree & University</strong>
                  <p>B.Sc. Computer Engineering</p>
                  <small className="fact-tag">Debre Markos Univ. ('24)</small>
                </div>
              </div>

              <div className="fact-item">
                <Workflow className="fact-icon" />
                <div>
                  <strong>Enterprise Role</strong>
                  <p>SysAdmin @ Tibeb Design & Build</p>
                  <small className="fact-tag">Active (Mar 2025–Present) • Continuous Uptime</small>
                </div>
              </div>

              <div className="fact-item">
                <div className="fact-aau-logo-wrap">
                  <img
                    src={aauLogo}
                    alt="Addis Ababa University (AAU)"
                    className="fact-aau-logo"
                  />
                </div>
                <div>
                  <strong>Full-Stack Graduate</strong>
                  <p>Addis Ababa University (AAU)</p>
                  <small className="fact-tag">Certified ('26) • Lead: Ekub Circle</small>
                </div>
              </div>

              <div className="fact-item">
                <MapPin className="fact-icon" />
                <div>
                  <strong>Location</strong>
                  <p>{personalInfo.location}</p>
                  <small className="fact-tag">{personalInfo.relocation}</small>
                </div>
              </div>

              <div className="fact-item">
                <Globe2 className="fact-icon" />
                <div>
                  <strong>Languages</strong>
                  <p>English & Amharic</p>
                  <small className="fact-tag">Professional Working Proficiency</small>
                </div>
              </div>

              <div className="fact-item">
                <Code2 className="fact-icon" />
                <div>
                  <strong>Core Stacks</strong>
                  <p>React 19, Node.js, PostgreSQL, .NET Core & ERP</p>
                </div>
              </div>
            </div>

            <div className="status-banner">
              <CheckCircle size={18} className="text-emerald flex-shrink-0" />
              <span>{t("about.statusAvailable")}</span>
            </div>
          </div>
        </div>

        {/* 4 CORE ENGINEERING PILLARS */}
        <div className="core-strengths-grid">
          {coreStrengths.map((item, idx) => (
            <div key={idx} className="strength-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                <div className="strength-icon-wrap" style={{ margin: 0 }}>{item.icon}</div>
                <span className="section-badge" style={{ margin: 0, fontSize: "0.72rem", padding: "4px 8px" }}>
                  {item.stat}
                </span>
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
