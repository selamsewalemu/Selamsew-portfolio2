import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import profileImage from "../assets/selamsew.jpg";
import { Sun, Moon, Menu, X, Briefcase, Activity, Shield } from "lucide-react";

function Navbar() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const navHeight = 80;
          const pos = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({ top: pos, behavior: "smooth" });
        }
      }, 150);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const navHeight = 80;
        const pos = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: pos, behavior: "smooth" });
      }
    }
  };

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "about", label: t("nav.about") },
    { id: "languages", label: t("nav.languages") },
    { id: "skills", label: t("nav.skills") },
    { id: "experience", label: t("nav.experience") },
    { id: "projects", label: t("nav.projects") },
    { id: "education", label: t("nav.education") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <header className={`modern-navbar ${scrolled ? "scrolled" : ""}`}>
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

        {/* DESKTOP NAV LINKS */}
        <nav className="desktop-links" aria-label="Main Navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="nav-link-btn"
            >
              {item.label}
            </button>
          ))}
          <Link to="/services" className="nav-link-btn">
            Services
          </Link>
        </nav>

        {/* RIGHT CONTROLS */}
        <div className="nav-actions">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={19} className="sun-icon" /> : <Moon size={19} className="moon-icon" />}
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="hire-me-btn"
          >
            <Briefcase size={16} />
            <span className="hire-text">Hire Me</span>
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
                className="mobile-link-item"
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
                <span>Contact Directly</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
