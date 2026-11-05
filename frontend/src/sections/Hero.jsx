import profileImage from "../assets/selamsew.jpg";
import { personalInfo } from "../data/portfolioData";
import {
  ArrowRight,
  Download,
  GitBranch,
  Globe2,
  Send,
} from "lucide-react";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 62;
      const pos =
        element.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
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
    • Ensuring continuous enterprise ERP platform stability, server availability, and LAN uptime.
    • Delivering fast-tier technical user support across administrative departments.
    • Managing local network switches/routers, enforcing backup schedules and access security.

[2] Database Associate / Administrator
    Tibeb Design and Build PLC | Ethiopia
    Period: March 05, 2025 – September 2025 (6 Months Specialization)
    • Administered MySQL relational schemas and MongoDB collections for enterprise ERP modules.
    • Authored automated daily backup scripts and tuned indexing, eliminating duplicate records.
    • Accelerated departmental reporting queries with optimized database indexing.

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
      <div className="hero-background-glow" aria-hidden="true"></div>
      <div className="hero-grid-pattern" aria-hidden="true"></div>

      <div className="hero-container">
        {/* LEFT COLUMN: TEXT CONTENT */}
        <div className="hero-content">
          {/* AVAILABILITY PILL */}
          <div className="availability-pill">
            <span className="pulse-dot"></span>
            <span>{t("hero.badge")}</span>
          </div>

          <h3 className="greeting-text">{t("hero.greeting")}</h3>
          <h1 className="hero-name">{t("hero.title")}</h1>

          <p className="hero-role-subtitle">
            Computer Engineer &amp; Full-Stack Developer
          </p>

          <p className="hero-description">{t("hero.description")}</p>

          {/* CTA BUTTONS */}
          <div className="hero-actions">
            <button
              onClick={() => scrollToSection("projects")}
              className="btn btn-primary"
            >
              <span>View Projects</span>
              <ArrowRight size={18} />
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

          {/* SOCIAL ICONS ROW */}
          <div className="hero-social-row">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-icon"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GitBranch size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-icon"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Globe2 size={18} />
            </a>
            <a
              href={personalInfo.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-icon"
              aria-label="Telegram"
              title="Telegram"
            >
              <Send size={18} />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: CIRCULAR PHOTO + TECH PILLS */}
        <div className="hero-photo-col">
          <div className="hero-photo-ring">
            <img
              src={profileImage}
              alt="Selamsew Alemu - Computer Engineer"
              className="hero-photo-img"
            />
          </div>

          <div className="hero-tech-pills">
            <span className="tech-pill">React</span>
            <span className="tech-pill">Node.js</span>
            <span className="tech-pill">PostgreSQL</span>
            <span className="tech-pill">C# / .NET</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
