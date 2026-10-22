import { X, ExternalLink, CheckCircle2, TrendingUp, Layers } from "lucide-react";
import { Github } from "./SocialIcons";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* MODAL HEADER */}
        <div className="modal-header">
          <div>
            <span className="modal-category-badge">{project.category}</span>
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

          <div className="modal-section">
            <h4 className="modal-section-title">Overview</h4>
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

          <div className="modal-section">
            <h4 className="modal-section-title">Key System Features</h4>
            <ul className="modal-features-list">
              {project.features.map((f, i) => (
                <li key={i} className="modal-feature-item">
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.metrics && (
            <div className="modal-metrics-card">
              <TrendingUp size={20} className="text-emerald" />
              <div>
                <strong>Demonstrated Impact:</strong>
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
