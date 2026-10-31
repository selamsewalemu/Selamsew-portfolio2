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
  Check,
  Copy,
  Clock,
} from "lucide-react";

function Hero() {
  const { t } = useTranslation();
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [localTime, setLocalTime] = useState("");

  // Cycle through titles
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Live Addis Ababa Time (UTC+3)
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options = {
          timeZone: "Africa/Addis_Ababa",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        };
        setLocalTime(new Intl.DateTimeFormat("en-US", options).format(now));
      } catch {
        setLocalTime(new Date().toLocaleTimeString());
      }
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const pos = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDownloadCV = () => {
    const cvText = `================================================================================
                    SELAMSEW ALEMU - CURRICULUM VITAE
================================================================================
Title: Electrical and Computer Engineer (Computer Stream)
Roles: System Administrator & User Support Officer | Full-Stack Developer | Database Associate
Email: ${personalInfo.email}
Phone: ${personalInfo.phone}
Location: ${personalInfo.location}
Status: ${personalInfo.relocation}
LinkedIn: ${personalInfo.linkedin}
GitHub: ${personalInfo.github}

--------------------------------------------------------------------------------
1. PROFESSIONAL PROFILE & SUMMARY
--------------------------------------------------------------------------------
B.Sc. graduate in Electrical and Computer Engineering, specializing in Computer Engineering,
from Debre Markos University (July 2024). Currently serving as a System Administrator and
User Support Officer at Tibeb Design and Build PLC, a position I have held since March 2025.

Successfully completed intensive Full-Stack Software Development training at Addis Ababa
University (AAU), further strengthening my knowledge and practical skills in modern software
development and full-stack application development.

--------------------------------------------------------------------------------
2. PROFESSIONAL EXPERIENCE
--------------------------------------------------------------------------------
[1] System Administrator & User Support Officer
    Tibeb Design and Build PLC | Ethiopia
    Period: September 2025 – Present (Still Active)
    • Ensuring 99.8% enterprise ERP platform stability, server availability, and LAN uptime.
    • Delivering fast-tier technical user support across administrative departments.
    • Managing local network switches/routers, enforcing backup schedules and access security.

[2] Database Associate / Administrator
    Tibeb Design and Build PLC | Ethiopia
    Period: March 05, 2025 – September 2025 (6 Months Specialization)
    • Administered MySQL relational schemas and MongoDB collections for enterprise ERP modules.
    • Authored automated daily backup scripts and tuned indexing, eliminating duplicate records.
    • Accelerated departmental reporting queries by 40%.

[3] Full-Stack Software Development Graduate & Ekub Circle Project Lead
    Addis Ababa University (AAU) — Software Training Initiative
    Period: Completed (2026)
    • Architected and developed "Ekub Circle" rotating savings platform.
    • Tech stack: JavaScript (ES6+), Node.js, Express, PostgreSQL, Tailwind CSS, Socket.io.

[4] Full-Stack Web Developer (Freelance / Contract)
    Period: 2024 – 2025
    • Developed responsive web platforms, JWT authentication, and transactional email integrations.
    • Architected TMS Core: Training Management System (ASP.NET Core 10, Angular 22, SignalR, EF Core).
    • Architected TalentHub: Role-based mini job portal (React, TypeScript, Node.js, Express, MongoDB).
    • Engineered Online Examination Portal: Timed testing & automated grading (React, Node.js, MongoDB).
    • Developed Budget & Institutional Expense Management System (React, Node.js, MongoDB).

--------------------------------------------------------------------------------
3. EDUCATION & ACCREDITATIONS
--------------------------------------------------------------------------------
• Debre Markos University — College of Technology
  Degree: Bachelor of Science in Electrical and Computer Engineering
  Field of Study: Electrical and Computer Engineering (Computer stream)
  Graduation Date: July 05, 2024 G.C.

• Addis Ababa University (AAU)
  Full-Stack Software Development Intensive Training (Completed 2026)

--------------------------------------------------------------------------------
4. TECHNICAL SKILLS & PROGRAMMING LANGUAGES
--------------------------------------------------------------------------------
• Languages: C#, .NET 10 / ASP.NET Core, JavaScript (ES6+), TypeScript, Python, C++, Java,
             SQL (PostgreSQL / MySQL / SQL Server), PHP, Bash / Shell Scripting, HTML5 & CSS3.
• Frameworks & Stacks: ASP.NET Core 10, Angular 22, React 19, Node.js, Express.js, SignalR,
                       Entity Framework Core, Tailwind CSS v4, Mongoose ODM, Redux Toolkit, Socket.io.
• Systems & Infrastructure: Linux Server, Windows Server, ERP Platforms, TCP/IP, CCNA,
                            Docker, Git & GitHub, Postman, Relational Schemas.
================================================================================`;

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
          {/* AVAILABILITY PILL & LIVE TIME */}
          <div className="hero-top-badges">
            <div className="availability-pill">
              <span className="pulse-dot"></span>
              <Sparkles size={14} className="sparkle-icon" />
              <span>{t("hero.badge")}</span>
            </div>

            <div className="live-clock-pill" title="Current time in Addis Ababa (EAT)">
              <Clock size={13} className="text-cyan" />
              <span>Addis Ababa: <strong>{localTime || "09:30 AM"}</strong></span>
            </div>
          </div>

          <h3 className="greeting-text">{t("hero.greeting")}</h3>
          <h1 className="hero-name">{t("hero.title")}</h1>

          <div className="hero-role-wrapper">
            <h2 className="hero-main-role">{t("hero.role")}</h2>
            <div className="dynamic-role-pill">
              <Terminal size={16} />
              <span className="role-typed-text">{personalInfo.roles[activeRoleIndex]}</span>
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

            <button
              onClick={handleCopyEmail}
              className={`btn btn-copy-email ${copiedEmail ? "copied" : ""}`}
              title="Click to copy email address"
            >
              {copiedEmail ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
              <span>{copiedEmail ? t("hero.emailCopied") : t("hero.copyEmail")}</span>
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
                <strong>React 19 & Node.js</strong>
                <small>Full-Stack Web Dev</small>
              </div>
            </div>

            {/* FLOATING BADGE 2: ERP SYSTEMS */}
            <div className="floating-badge badge-top-right">
              <Layers size={18} className="badge-icon icon-erp" />
              <div>
                <strong>ERP Administration</strong>
                <small>99.8% Uptime & Support</small>
              </div>
            </div>

            {/* FLOATING BADGE 3: DATABASE */}
            <div className="floating-badge badge-bottom-left">
              <Database size={18} className="badge-icon icon-db" />
              <div>
                <strong>PostgreSQL & MySQL</strong>
                <small>DB Administration</small>
              </div>
            </div>

            {/* FLOATING BADGE 4: COMPUTER ENG */}
            <div className="floating-badge badge-bottom-right">
              <Cpu size={18} className="badge-icon icon-eng" />
              <div>
                <strong>Computer Stream</strong>
                <small>DMU '24 Engineering</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
