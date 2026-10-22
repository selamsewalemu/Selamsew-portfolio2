import { useTranslation } from "react-i18next";
import { personalInfo } from "../data/portfolioData";
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
} from "lucide-react";

function About() {
  const { t } = useTranslation();

  const coreStrengths = [
    {
      icon: <Workflow className="strength-icon text-blue" />,
      title: "ERP & Workflow Automation",
      desc: "Deep experience configuring enterprise modules, bridging ERP databases with frontend tools, and automating administrative workflows.",
    },
    {
      icon: <Zap className="strength-icon text-cyan" />,
      title: "Full-Stack Web Engineering",
      desc: "Designing responsive, component-driven client applications with React 19 backed by modular Node.js/Express REST microservices.",
    },
    {
      icon: <ShieldCheck className="strength-icon text-emerald" />,
      title: "Database Integrity & Uptime",
      desc: "Implementing automated backups, strict schema validations, indexing, and high-availability operations for enterprise data.",
    },
    {
      icon: <Cpu className="strength-icon text-purple" />,
      title: "Hardware & Network Topologies",
      desc: "Grounded in electrical and computer engineering fundamentals: TCP/IP subnets, hardware diagnostics, Linux servers, and embedded prototypes.",
    },
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="section-container">
        {/* SECTION HEADER */}
        <div className="section-header text-center">
          <span className="section-badge">Engineering Profile</span>
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
          </div>

          {/* QUICK FACTS & INFO */}
          <div className="about-facts-card">
            <h3 className="card-headline">{t("about.quickFacts")}</h3>

            <div className="facts-list">
              <div className="fact-item">
                <GraduationCap className="fact-icon" />
                <div>
                  <strong>Degree & Specialization</strong>
                  <p>B.Sc. in Electrical and Computer Engineering</p>
                  <small className="fact-tag">Computer Engineering Major (DMU '24)</small>
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
                  <small className="fact-tag">Multilingual Communication</small>
                </div>
              </div>

              <div className="fact-item">
                <Code2 className="fact-icon" />
                <div>
                  <strong>Primary Tech Stacks</strong>
                  <p>MERN (React 19, Node.js, Express, MongoDB), ERP, MySQL, C++, Python</p>
                </div>
              </div>
            </div>

            <div className="status-banner">
              <CheckCircle size={18} className="text-emerald" />
              <span>Available for Full-time Roles, Remote Contracts & Technical Consultancy</span>
            </div>
          </div>
        </div>

        {/* 4 CORE ENGINEERING PILLARS */}
        <div className="core-strengths-grid">
          {coreStrengths.map((item, idx) => (
            <div key={idx} className="strength-card">
              <div className="strength-icon-wrap">{item.icon}</div>
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
