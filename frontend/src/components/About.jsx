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
      icon: <Workflow className="strength-icon text-cyan" size={26} />,
      title: "ERP & Workflow Automation",
      desc: "Deep experience configuring enterprise modules, bridging ERP databases with frontend tools, and automating administrative workflows.",
      stat: "99.8% Uptime",
    },
    {
      icon: <Zap className="strength-icon text-primary" size={26} />,
      title: "Full-Stack Web Engineering",
      desc: "Designing responsive, component-driven client applications with React 19 backed by modular Node.js/Express and PostgreSQL REST services.",
      stat: "Sub-second APIs",
    },
    {
      icon: <ShieldCheck className="strength-icon text-emerald" size={26} />,
      title: "Database Integrity & Uptime",
      desc: "Implementing automated backups, strict schema validations, indexing, and high-availability operations in PostgreSQL, MySQL, and MongoDB.",
      stat: "Zero Data-Loss",
    },
    {
      icon: <Cpu className="strength-icon text-purple" size={26} />,
      title: "Hardware & Network Topologies",
      desc: "Grounded in electrical and computer engineering fundamentals: TCP/IP subnets, hardware diagnostics, Linux servers, and embedded prototypes.",
      stat: "Cisco & Linux",
    },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 76;
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
                  <strong>Field of Study & Degree</strong>
                  <p>B.Sc. in Electrical and Computer Engineering</p>
                  <small className="fact-tag">Computer stream (DMU '24)</small>
                </div>
              </div>

              <div className="fact-item">
                <Workflow className="fact-icon" />
                <div>
                  <strong>Professional Enterprise Track</strong>
                  <p>System Admin & User Support Officer (Present)</p>
                  <small className="fact-tag">Database Associate (6 Mos) • Active since Mar 05, 2025</small>
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
                  <strong>AAU Full-Stack Training</strong>
                  <p>Addis Ababa University (AAU)</p>
                  <small className="fact-tag">March 2026 – Present • Project Lead: Ekub Circle (PostgreSQL)</small>
                </div>
              </div>

              <div className="fact-item">
                <MapPin className="fact-icon" />
                <div>
                  <strong>Location & Relocation</strong>
                  <p>{personalInfo.location}</p>
                  <small className="fact-tag">{personalInfo.relocation}</small>
                </div>
              </div>

              <div className="fact-item">
                <Globe2 className="fact-icon" />
                <div>
                  <strong>Spoken Languages</strong>
                  <p>{t("about.languagesSpoken")}</p>
                  <small className="fact-tag">English & Amharic</small>
                </div>
              </div>

              <div className="fact-item">
                <Code2 className="fact-icon" />
                <div>
                  <strong>Primary Tech Stacks</strong>
                  <p>C# / .NET Core, React 19, Node.js, Express, PostgreSQL, MySQL, MongoDB, ERP, Python, C++</p>
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
