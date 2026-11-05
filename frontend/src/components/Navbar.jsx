import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import profileImage from "../assets/selamsew.jpg";
import LanguageSwitcher from "./LanguageSwitcher";
import { Sun, Moon, Menu, X, Briefcase } from "lucide-react";

function Navbar() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll spy & reading progress
  useEffect(() => {
    const sections = ["home", "about", "skills", "education", "projects", "experience", "contact"];

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(progress);
      setScrolled(totalScroll > 30);

      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 62, behavior: "smooth" });
        }
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 62, behavior: "smooth" });
      }
    }
  };

  // New order: Home, About, Education, Projects, Experience, Contact
  const navItems = [
    { id: "home",       label: t("nav.home") },
    { id: "about",      label: t("nav.about") },
    { id: "skills",     label: "Skills" },
    { id: "education",  label: t("nav.education") },
    { id: "projects",   label: t("nav.projects") },
    { id: "experience", label: t("nav.experience") },
    { id: "contact",    label: t("nav.contact") },
  ];

  return (
    <header className={`modern-navbar ${scrolled ? "scrolled" : ""}`}>
      {/* READING PROGRESS BAR */}
      <div
        className="scroll-progress-line"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="nav-container">
        {/* BRAND */}
        <div className="nav-logo nav-logo-glow" onClick={() => scrollToSection("home")} style={{ cursor: "pointer" }}>
          <div className="logo-avatar-wrap">
            <img src={profileImage} alt="Selamsew Alemu" className="logo-avatar" />
            <span className="online-indicator" title="Available for Work" />
          </div>
          <div className="logo-meta">
            <span className="logo-name gradient-text">Selamsew Alemu</span>
            <span className="logo-role">Computer Engineer</span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="desktop-links" aria-label="Main Navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-link-btn ${activeSection === item.id && location.pathname === "/" ? "active" : ""}`}
            >
              {item.label}
              {activeSection === item.id && location.pathname === "/" && (
                <span className="active-nav-dot" />
              )}
            </button>
          ))}
        </nav>

        {/* RIGHT CONTROLS */}
        <div className="nav-actions">
          <LanguageSwitcher />

          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn theme-toggle-glass"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={19} className="sun-icon" /> : <Moon size={19} className="moon-icon" />}
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="hire-me-btn"
          >
            <Briefcase size={15} />
            <span className="hire-text">{t("nav.hireMe")}</span>
          </button>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="mobile-drawer animate-fadeIn">
          <div className="mobile-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`mobile-link-item ${activeSection === item.id ? "active" : ""}`}
              >
                {item.label}
                {activeSection === item.id && <span className="mobile-active-dot" />}
              </button>
            ))}
            <div className="mobile-extra">
              <button
                onClick={() => scrollToSection("contact")}
                className="mobile-cta-btn"
              >
                <Briefcase size={17} />
                <span>Hire Selamsew</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
