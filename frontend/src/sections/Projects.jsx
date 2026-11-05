import { useState } from "react";
import { useTranslation } from "react-i18next";
import { projects } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";
import { ExternalLink, Eye, Sparkles, GitBranch } from "lucide-react";

// Derive filter categories from projects data
const ALL_FILTER = "All";

function getCategories(projectList) {
  const cats = new Set(projectList.map((p) => p.category));
  return [ALL_FILTER, ...Array.from(cats)];
}

function Projects() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = getCategories(projects);

  const filtered =
    activeFilter === ALL_FILTER
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="section-container">
        {/* SECTION HEADER */}
        <div className="section-header text-center">
          <span className="section-badge">
            <Sparkles size={14} className="inline mr-1" />
            {t("projects.badge") || "Portfolio Showcase"}
          </span>
          <h2 className="section-title gradient-text">
            {t("projects.title") || "Featured Projects"}
          </h2>
          <span className="section-title-underline" aria-hidden="true" />
          <p className="section-subtitle">
            {t("projects.subtitle") ||
              "A curated selection of engineering, ERP, and full-stack software projects."}
          </p>
        </div>

        {/* FILTER TAB BAR */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`projects-filter-btn ${activeFilter === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-COLUMN PROJECT CARD GRID */}
        <div className="projects-grid-new">
          {filtered.map((project) => (
            <div key={project.id} className="project-card-glass">
              {/* IMAGE with hover overlay */}
              <div
                className="project-img-box"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-img-overlay">
                  <span className="project-overlay-pill">
                    <Eye size={15} />
                    <span>View Details</span>
                  </span>
                </div>
                {/* category pill on image */}
                <span className="project-cat-chip">{project.category}</span>
              </div>

              {/* CARD BODY */}
              <div className="project-card-body-new">
                <h3
                  className="project-card-title"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.title.split("—")[0].trim()}
                </h3>
                <p className="project-card-sub">{project.subtitle}</p>

                {/* TECH BADGES */}
                <div className="project-tech-row">
                  {project.tech.slice(0, 4).map((tech, ti) => (
                    <span key={ti} className="project-tech-pill">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="project-tech-pill project-tech-more">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* ACTION BUTTONS */}
                <div className="project-card-actions-new">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-btn card-btn-primary"
                    title="Live Demo"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-btn card-btn-ghost"
                    title="Source Code"
                  >
                    <GitBranch size={14} />
                    <span>Source</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="card-btn card-btn-icon"
                    title="Case Study"
                    aria-label="Open case study"
                  >
                    <Eye size={14} />
                    <span>Case Study</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

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
