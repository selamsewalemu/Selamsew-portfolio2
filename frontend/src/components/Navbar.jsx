import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import profileImage from "../assets/selamsew.jpg";
import LanguageSwitcher from "./LanguageSwitcher";
import { Sun, Moon, Menu, X, Briefcase, Volume2, VolumeX } from "lucide-react";
import { sound } from "../utils/sound";

function Navbar() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [soundActive, setSoundActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll spy & reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(progress);

      setScrolled(totalScroll > 30);

      // Scroll spy for sections
      const sections = ["home", "about", "languages", "frameworks", "skills", "experience", "projects", "education", "contact"];
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
    if (soundActive) sound.playClick();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const navHeight = 76;
          const pos = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({ top: pos, behavior: "smooth" });
        }
      }, 150);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const navHeight = 76;
        const pos = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: pos, behavior: "smooth" });
      }
    }
  };

  const handleToggleTheme = () => {
    if (soundActive) sound.playClick();
    toggleTheme();
  };

  const handleToggleSound = () => {
    const newState = sound.toggle();
    setSoundActive(newState);
  };

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "about", label: t("nav.about") },
    { id: "languages", label: t("nav.languages") },
    { id: "frameworks", label: t("nav.frameworks") || "Frameworks" },
    { id: "skills", label: t("nav.skills") },
    { id: "experience", label: t("nav.experience") },
    { id: "projects", label: t("nav.projects") },
    { id: "education", label: t("nav.education") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <header className={`modern-navbar ${scrolled ? "scrolled" : ""}`}>
      {/* READING PROGRESS BAR AT TOP */}
      <div
        className="scroll-progress-line"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="nav-container">
        {/* BRAND LOGO */}
        <div className="nav-logo" onClick={() => scrollToSection("home")}>
          <div className="logo-avatar-wrap">
            <img src={profileImage} alt="Selamsew Alemu" className="logo-avatar" />
            <span className="online-indicator" title="Available for Work"></span>
          </div>
          <div className="logo-meta">
            <span className="logo-name">Selamsew Alemu</span>
            <span className="logo-role">Electrical & Computer Eng.</span>
          </div>
        </div>

        {/* DESKTOP NAV LINKS WITH ACTIVE SPY INDICATOR */}
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
          <Link
            to="/services"
            className={`nav-link-btn ${location.pathname === "/services" ? "active" : ""}`}
          >
            {t("nav.services")}
          </Link>
          <Link
            to="/dashboard"
            className={`nav-link-btn ${location.pathname === "/dashboard" ? "active" : ""}`}
          >
            {t("nav.dashboard")}
          </Link>
        </nav>

        {/* RIGHT CONTROLS: LANGUAGE SWITCHER, SOUND, THEME, HIRE ME */}
        <div className="nav-actions">
          {/* MULTI-LANGUAGE SWITCHER */}
          <LanguageSwitcher />

          {/* AUDIO FEEDBACK TOGGLE */}
          <button
            type="button"
            onClick={handleToggleSound}
            className={`sound-toggle-btn ${soundActive ? "active" : ""}`}
            title={soundActive ? "Mute interactive audio feedback" : "Enable futuristic UI audio feedback"}
            aria-label="Toggle UI Audio feedback"
          >
            {soundActive ? <Volume2 size={17} className="text-primary" /> : <VolumeX size={17} />}
          </button>

          {/* THEME TOGGLE */}
          <button
            type="button"
            onClick={handleToggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={19} className="sun-icon" /> : <Moon size={19} className="moon-icon" />}
          </button>

          {/* HIRE ME BUTTON */}
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="hire-me-btn"
          >
            <Briefcase size={15} />
            <span className="hire-text">{t("nav.hireMe")}</span>
          </button>

          {/* MOBILE MENU TOGGLE */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileOpen((prev) => !prev)}
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
              </button>
            ))}
            <Link
              to="/services"
              onClick={() => setMobileOpen(false)}
              className="mobile-link-item"
            >
              Services Showcase
            </Link>
            <Link
              to="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="mobile-link-item"
            >
              Operations Dashboard
            </Link>

            <div className="mobile-extra">
              <button
                onClick={() => scrollToSection("contact")}
                className="mobile-cta-btn"
              >
                <Briefcase size={17} />
                <span>Contact Selamsew Directly</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
