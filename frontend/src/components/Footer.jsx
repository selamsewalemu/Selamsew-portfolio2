import { personalInfo } from "../data/portfolioData";
import { ArrowUp, MessageSquare, Mail, GitBranch, Globe } from "lucide-react";

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
            href={personalInfo.GitBranch}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-circle"
            title="GitBranch"
            aria-label="GitBranch profile"
          >
            <GitBranch size={18} />
          </a>
          <a
            href={personalInfo.Globe}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-circle"
            title="Globe"
            aria-label="Globe profile"
          >
            <Globe size={18} />
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
