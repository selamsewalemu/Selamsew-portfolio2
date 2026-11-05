import { personalInfo } from "../data/portfolioData";
import { ArrowUp, MessageSquare, Mail } from "lucide-react";
import { Github, Linkedin } from "./SocialIcons";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="simple-footer">
      <div className="simple-footer-inner">
        <span className="footer-copyright">
          &copy; {new Date().getFullYear()}{" "}
          <strong className="gradient-text">{personalInfo.name}</strong>. All
          rights reserved.
        </span>

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
    </footer>
  );
}

export default Footer;
