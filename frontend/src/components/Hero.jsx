import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import profileImage from "../assets/selamsew.jpg";
import { personalInfo } from "../data/portfolioData";
import {
  ArrowRight,
  Mail,
  Download,
  Terminal,
  Server,
  Layers,
  Database,
  Cpu,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

function Hero() {
  const { t } = useTranslation();
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const pos = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    // Generate clean text-based CV / download link
    const cvText = `SELAMSEW ALEMU - ELECTRICAL & COMPUTER ENGINEER\nFull-Stack Developer | ERP Administrator | System Engineer\nEmail: ${personalInfo.email}\nPhone: ${personalInfo.phone}\nLocation: ${personalInfo.location}\nLinkedIn: ${personalInfo.linkedin}\nGitHub: ${personalInfo.github}\n\nEDUCATION:\nDebre Markos University - B.Sc. in Electrical and Computer Engineering (Specialized in Computer Engineering), Graduated July 2024.\n\nEXPERIENCE:\n1. Systems Administrator, User Support Officer & Junior Full-Stack Developer (2024 - Present)\n2. Full-Stack Web Developer (Freelance / Contract) (2023 - 2024)\n3. Engineering IT Systems Assistant (Debre Markos University) (2022 - 2023)\n\nKEY SKILLS:\nJavaScript, TypeScript, Python, C++, Java, SQL, PHP, Bash, React.js, Node.js, Express, MongoDB, MySQL, ERP Platform Administration, TCP/IP, Linux.`;
    const blob = new Blob([cvText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Selamsew_Alemu_CV.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background-glow"></div>
      <div className="hero-grid-pattern"></div>

      <div className="hero-container">
        {/* LEFT COLUMN: HERO CONTENT */}
        <div className="hero-content">
          {/* AVAILABILITY PILL */}
          <div className="availability-pill">
            <span className="pulse-dot"></span>
            <Sparkles size={14} className="sparkle-icon" />
            <span>{t("hero.badge")}</span>
          </div>

          <h3 className="greeting-text">{t("hero.greeting")}</h3>
          <h1 className="hero-name">{t("hero.title")}</h1>

          <div className="hero-role-wrapper">
            <h2 className="hero-main-role">{t("hero.role")}</h2>
            <div className="dynamic-role-pill">
              <Terminal size={16} />
              <span>{personalInfo.roles[activeRoleIndex]}</span>
            </div>
          </div>

          <p className="hero-description">{t("hero.description")}</p>

          {/* ACTION BUTTONS */}
          <div className="hero-actions">
            <button
              onClick={() => scrollToSection("projects")}
              className="btn btn-primary"
            >
              <span>{t("hero.exploreProjects")}</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="btn btn-secondary"
            >
              <Mail size={18} />
              <span>{t("hero.getInTouch")}</span>
            </button>

            <button
              onClick={handleDownloadCV}
              className="btn btn-outline"
              title="Download Full Curriculum Vitae"
            >
              <Download size={18} />
              <span>{t("hero.downloadCV")}</span>
            </button>
          </div>

          {/* KEY STATS COUNTER GRID */}
          <div className="hero-stats-grid">
            {personalInfo.stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <span className="stat-number">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-sub">{stat.subtitle}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: HERO PROFILE IMAGE & FLOATING BADGES */}
        <div className="hero-visual">
          <div className="avatar-frame-wrapper">
            <div className="avatar-glow-ring"></div>
            <div className="avatar-frame">
              <img
                src={profileImage}
                alt="Selamsew Alemu - Electrical & Computer Engineer"
                className="profile-photo"
              />
            </div>

            {/* FLOATING BADGE 1: REACT & NODE */}
            <div className="floating-badge badge-top-left">
              <Server size={18} className="badge-icon icon-node" />
              <div>
                <strong>MERN Full-Stack</strong>
                <small>React 19 & Node.js</small>
              </div>
            </div>

            {/* FLOATING BADGE 2: ERP SYSTEMS */}
            <div className="floating-badge badge-top-right">
              <Layers size={18} className="badge-icon icon-erp" />
              <div>
                <strong>ERP Administration</strong>
                <small>Enterprise & DB</small>
              </div>
            </div>

            {/* FLOATING BADGE 3: DATABASE */}
            <div className="floating-badge badge-bottom-left">
              <Database size={18} className="badge-icon icon-db" />
              <div>
                <strong>Databases</strong>
                <small>MongoDB & MySQL</small>
              </div>
            </div>

            {/* FLOATING BADGE 4: COMPUTER ENG */}
            <div className="floating-badge badge-bottom-right">
              <Cpu size={18} className="badge-icon icon-eng" />
              <div>
                <strong>Computer Eng.</strong>
                <small>Systems & Networks</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
