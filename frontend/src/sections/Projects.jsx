import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { projects } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";
import aauLogo from "../assets/aau-logo.png";
import {
  ExternalLink,
  Eye,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  LayoutGrid,
  Sparkles,
} from "lucide-react";
import { Github } from "../components/SocialIcons";

function Projects() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showThumbnailGrid, setShowThumbnailGrid] = useState(false);

  const activeProject = projects[currentIndex] || projects[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="section-container">
        {/* SECTION HEADER */}
        <div className="section-header text-center">
          <span className="section-badge">
            <Sparkles size={14} className="inline mr-1" />
            {t("projects.badge") || "Portfolio Showcase"}
          </span>
          <h2 className="section-title">{t("projects.title") || "Featured Projects"}</h2>
          <p className="section-subtitle">
            Interactive single-card showcase: select a project below or navigate with controls.
          </p>
        </div>

        {/* PROJECT SELECTOR TABS (ONE-CLICK SWITCHER) */}
        <div className="project-selector-strip">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`project-strip-btn ${currentIndex === idx ? "active" : ""}`}
            >
              <span className="strip-idx">0{idx + 1}</span>
              <span className="strip-title">{proj.title.split("—")[0].trim()}</span>
              {currentIndex === idx && <span className="strip-dot" />}
            </button>
          ))}
        </div>

        {/* SINGLE MASTER PROJECT CARD */}
        <div className="single-project-master-card animate-fadeIn">
          {/* TOP CARD CONTROLS */}
          <div className="project-card-topbar">
            <div className="project-topbar-left">
              <span className="project-cat-pill">{activeProject.category}</span>
              {activeProject.subtitle.includes("Addis Ababa") && (
                <span className="project-top-aau">
                  <img src={aauLogo} alt="AAU" className="project-aau-logo-mini" />
                  <span>AAU Capstone</span>
                </span>
              )}
              {activeProject.id === "tms-core" && (
                <span className="project-top-dotnet">
                  <span className="pulse-dot-sm" />
                  <span>Enterprise .NET 10 & Angular 22</span>
                </span>
              )}
              {activeProject.id === "talenthub" && (
                <span className="project-top-emerald">
                  <span className="pulse-dot-emerald" />
                  <span>Job Portal • RBAC</span>
                </span>
              )}
              {activeProject.id === "online-exam" && (
                <span className="project-top-cyan">
                  <span className="pulse-dot-cyan" />
                  <span>Assessment Engine</span>
                </span>
              )}
            </div>

            <div className="project-topbar-nav">
              <span className="project-counter">
                <strong>{currentIndex + 1}</strong> / {projects.length}
              </span>
              <button
                type="button"
                onClick={handlePrev}
                className="project-nav-arrow"
                title="Previous project"
                aria-label="Previous project"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="project-nav-arrow"
                title="Next project"
                aria-label="Next project"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* MASTER CARD SPLIT BODY */}
          <div className="project-master-body">
            {/* LEFT / VISUAL COLUMN */}
            <div
              className="project-master-visual"
              onClick={() => setSelectedProject(activeProject)}
            >
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="project-master-img"
              />
              <div className="project-master-overlay">
                <span className="overlay-pill">
                  <Eye size={16} />
                  <span>Click for Deep Dive Case Study</span>
                </span>
              </div>
            </div>

            {/* RIGHT / SPECS & DETAILS COLUMN */}
            <div className="project-master-info">
              <h3 className="project-master-title">{activeProject.title}</h3>
              <p className="project-master-subtitle">{activeProject.subtitle}</p>

              {/* IMPACT METRIC BANNER */}
              {activeProject.metrics && (
                <div className="project-metric-banner">
                  <TrendingUp size={16} className="text-emerald flex-shrink-0" />
                  <span>{activeProject.metrics}</span>
                </div>
              )}

              {/* OVERVIEW */}
              <p className="project-master-overview">{activeProject.overview}</p>

              {/* KEY HIGHLIGHTS CHECKLIST */}
              <div className="project-master-features">
                <h4 className="features-heading">Core Capabilities:</h4>
                <ul className="features-list">
                  {activeProject.features.slice(0, 3).map((feat, fIdx) => (
                    <li key={fIdx} className="feature-item">
                      <CheckCircle2 size={15} className="text-emerald flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* TECH STACK BADGES */}
              <div className="project-master-tech">
                {activeProject.tech.map((t, tIdx) => (
                  <span key={tIdx} className="tech-badge-clean">
                    {t}
                  </span>
                ))}
              </div>

              {/* ACTION BUTTONS */}
              <div className="project-master-actions">
                <a
                  href={activeProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <ExternalLink size={15} />
                  <span>Live Demo</span>
                </a>

                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <Github size={15} />
                  <span>Source Code</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(activeProject)}
                  className="btn btn-ghost btn-sm"
                >
                  <Eye size={15} />
                  <span>Case Study</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* THUMBNAIL QUICK-SWITCHER TOGGLE */}
        <div className="project-quick-toggle-row">
          <button
            type="button"
            onClick={() => setShowThumbnailGrid((prev) => !prev)}
            className="toggle-grid-btn"
          >
            <LayoutGrid size={15} />
            <span>
              {showThumbnailGrid ? "Hide Thumbnail Matrix" : "View All 5 Projects Matrix"}
            </span>
          </button>
        </div>

        {/* OPTIONAL QUICK THUMBNAIL MATRIX */}
        {showThumbnailGrid && (
          <div className="project-thumbnails-matrix animate-fadeIn">
            {projects.map((p, idx) => (
              <div
                key={p.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  window.scrollTo({
                    top: document.getElementById("projects").offsetTop - 70,
                    behavior: "smooth",
                  });
                }}
                className={`matrix-thumb-card ${currentIndex === idx ? "active" : ""}`}
              >
                <img src={p.image} alt={p.title} className="matrix-thumb-img" />
                <div className="matrix-thumb-info">
                  <span className="matrix-idx">0{idx + 1}</span>
                  <strong className="matrix-title">{p.title.split("—")[0]}</strong>
                  <small className="matrix-cat">{p.category}</small>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* MODAL DIALOG */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}

export default Projects;
