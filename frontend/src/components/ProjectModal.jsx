import { useState, useEffect } from "react";
import { X, ExternalLink, CheckCircle2, TrendingUp } from "lucide-react";
import { Github } from "./SocialIcons";
import aauLogo from "../assets/aau-logo.png";

function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* MODAL HEADER */}
        <div className="modal-header">
          <div>
            <div className="modal-header-tags">
              <span className="modal-category-badge">{project.category}</span>
              {project.subtitle?.includes("Addis Ababa") && (
                <div className="modal-aau-badge">
                  <img src={aauLogo} alt="AAU Logo" className="modal-aau-logo-mini" />
                  <span>Official Addis Ababa University Project</span>
                </div>
              )}
              {project.id === "tms-core" && (
                <div className="modal-tms-badge">
                  <span className="pulse-dot-sm"></span>
                  <span>Enterprise Training Platform • ASP.NET Core 10 & Angular 22</span>
                </div>
              )}
              {project.id === "talenthub" && (
                <div className="modal-talenthub-badge">
                  <span className="pulse-dot-emerald"></span>
                  <span>Role-Based Job Platform • React, TypeScript, Node.js & MongoDB</span>
                </div>
              )}
              {project.id === "online-exam" && (
                <div className="modal-exam-badge">
                  <span className="pulse-dot-cyan"></span>
                  <span>Online Examination Engine • Timed Testing & Automated Evaluation</span>
                </div>
              )}
            </div>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={22} />
          </button>
        </div>

        {/* MODAL BODY */}
        <div className="modal-body">
          <div className="modal-image-wrap">
            <img src={project.image} alt={project.title} className="modal-image" />
          </div>

          {/* TABS */}
          <div className="modal-tabs-row">
            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={`modal-tab-btn ${activeTab === "overview" ? "active" : ""}`}
            >
              Overview & Solution
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("features")}
              className={`modal-tab-btn ${activeTab === "features" ? "active" : ""}`}
            >
              System Features
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("tech")}
              className={`modal-tab-btn ${activeTab === "tech" ? "active" : ""}`}
            >
              Stack & Metrics
            </button>
          </div>

          {/* TAB 1: OVERVIEW & ARCHITECTURE */}
          {activeTab === "overview" && (
            <div className="modal-tab-content animate-fadeIn">
              <div className="modal-section">
                <h4 className="modal-section-title">Project Summary</h4>
                <p className="modal-text">{project.overview}</p>
              </div>

              <div className="modal-grid-two">
                <div className="modal-challenge-card">
                  <h4 className="modal-section-title text-rose">Engineering Challenge</h4>
                  <p className="modal-text">{project.challenge}</p>
                </div>
                <div className="modal-solution-card">
                  <h4 className="modal-section-title text-cyan">Architectural Solution</h4>
                  <p className="modal-text">{project.solution}</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SYSTEM FEATURES */}
          {activeTab === "features" && (
            <div className="modal-tab-content animate-fadeIn">
              <div className="modal-section">
                <h4 className="modal-section-title">Core Implemented Capabilities</h4>
                <ul className="modal-features-list">
                  {project.features.map((f, i) => (
                    <li key={i} className="modal-feature-item">
                      <CheckCircle2 size={16} className="text-emerald flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 3: TECH & IMPACT */}
          {activeTab === "tech" && (
            <div className="modal-tab-content animate-fadeIn">
              {project.metrics && (
                <div className="modal-metrics-card">
                  <TrendingUp size={22} className="text-emerald" />
                  <div>
                    <strong>Demonstrated Impact & Results:</strong>
                    <p>{project.metrics}</p>
                  </div>
                </div>
              )}

              <div className="modal-section">
                <h4 className="modal-section-title">Technologies Deployed</h4>
                <div className="modal-tech-pills">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* MODAL FOOTER */}
        <div className="modal-footer">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <ExternalLink size={17} />
            <span>Visit Live Application</span>
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <Github size={17} />
            <span>Review Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
