import { personalInfo } from "../data/portfolioData";
import profileImage from "../assets/selamsew.jpg";
import { ArrowUp, MessageSquare, Mail } from "lucide-react";
import { Github, Linkedin } from "./SocialIcons";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 62;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  return (
    <footer className="modern-footer footer-glass">
      <div className="footer-top">
        <div className="footer-container">
          {/* BRAND COLUMN */}
          <div className="footer-brand-col">
            <div className="footer-brand" onClick={scrollToTop}>
              <img
                src={profileImage}
                alt="Selamsew Alemu"
                className="footer-avatar"
              />
              <div>
                <h3 className="footer-name gradient-text">{personalInfo.name}</h3>
                <p className="footer-role">{personalInfo.title}</p>
              </div>
            </div>
            <p className="footer-tagline">{personalInfo.tagline}</p>

            <div className="footer-status-pill">
              <span className="footer-pulse-dot" />
              <span>All systems operational • Continuous ERP Availability</span>
            </div>

            {/* SOCIAL ICON CIRCLES — glass with hover gradient fill */}
            <div className="footer-social-row">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-circle"
                title="GitHub"
                aria-label="GitHub profile"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-circle"
                title="LinkedIn"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-circle"
                title="Telegram"
                aria-label="Telegram contact"
              >
                <MessageSquare size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-social-circle"
                title="Email"
                aria-label="Send email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* QUICK NAVIGATION */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li>
                <button onClick={() => scrollToSection("home")}>Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")}>About Me</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("skills")}>
                  Tech Stack
                </button>
              </li>
            </ul>
          </div>

          {/* WORK & CREDENTIALS */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Work &amp; Credentials</h4>
            <ul className="footer-nav-list">
              <li>
                <button onClick={() => scrollToSection("experience")}>
                  Work Experience
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("projects")}>
                  Featured Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("education")}>
                  Education &amp; Degrees
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")}>
                  Contact &amp; Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* LOCATION */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Engineering Base</h4>
            <p className="footer-text-info">{personalInfo.location}</p>
            <p className="footer-text-info text-emerald">
              🟢 {personalInfo.relocation}
            </p>
            <p className="footer-text-info">
              Alma Mater: Debre Markos University
            </p>
            <p className="footer-text-info">
              Active: Addis Ababa University (AAU)
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM BAR */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <p className="footer-built-with">
            Built with React 19, Tailwind CSS v4, Lucide Icons &amp; Node.js
          </p>

          {/* BACK-TO-TOP: glass pill */}
          <button
            onClick={scrollToTop}
            className="back-to-top-pill"
            title="Back to Top"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
