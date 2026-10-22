import { personalInfo } from "../data/portfolioData";
import profileImage from "../assets/selamsew.jpg";
import { ArrowUp, MessageSquare, Mail, Heart } from "lucide-react";
import { Github, Linkedin } from "./SocialIcons";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  return (
    <footer className="modern-footer">
      <div className="footer-top">
        <div className="footer-container">
          {/* BRAND COLUMN */}
          <div className="footer-brand-col">
            <div className="footer-brand" onClick={scrollToTop}>
              <img src={profileImage} alt="Selamsew Alemu" className="footer-avatar" />
              <div>
                <h3 className="footer-name">{personalInfo.name}</h3>
                <p className="footer-role">{personalInfo.title}</p>
              </div>
            </div>
            <p className="footer-tagline">{personalInfo.tagline}</p>
            <div className="footer-social-row">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                title="Telegram"
              >
                <MessageSquare size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-social-icon"
                title="Email"
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
                <button onClick={() => scrollToSection("languages")}>Programming Languages</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("skills")}>Technical Skills</button>
              </li>
            </ul>
          </div>

          {/* PORTFOLIO SECTIONS */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Portfolio</h4>
            <ul className="footer-nav-list">
              <li>
                <button onClick={() => scrollToSection("experience")}>Work Experience</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("projects")}>Featured Projects</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("education")}>Education & Degrees</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")}>Contact & Inquiries</button>
              </li>
            </ul>
          </div>

          {/* LOCATION & RELOCATION */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Engineering Base</h4>
            <p className="footer-text-info">{personalInfo.location}</p>
            <p className="footer-text-info text-emerald">
              🟢 {personalInfo.relocation}
            </p>
            <p className="footer-text-info">
              Alma Mater: Debre Markos University
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM BAR */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Selamsew Alemu. All rights reserved.
          </p>

          <p className="footer-built-with">
            Built with React 19, Tailwind CSS, Lucide Icons, Express & Node.js
          </p>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            title="Back to Top"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
