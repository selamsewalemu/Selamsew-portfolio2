import { useState } from "react";
import { useTranslation } from "react-i18next";
import { projects } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";
import aauLogo from "../assets/aau-logo.png";
import { ExternalLink, Eye, Layers } from "lucide-react";
import { Github } from "./SocialIcons";

function Projects() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Full Stack", "ERP & Systems"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="section-container">
        {/* SECTION HEADER */}
        <div className="section-header text-center">
          <span className="section-badge">Featured Work</span>
          <h2 className="section-title">{t("projects.title")}</h2>
          <p className="section-subtitle">{t("projects.subtitle")}</p>
        </div>

        {/* CATEGORY TABS */}
        <div className="filter-tabs-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-tab-btn ${activeCategory === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card-modern">
              <div
                className="project-image-box"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-cover-image"
                  loading="lazy"
                />
                <div className="project-image-overlay">
                  <span className="overlay-btn">
                    <Eye size={18} />
                    <span>View Case Study</span>
                  </span>
                </div>
                <span className="project-card-cat">{project.category}</span>
              </div>

              <div className="project-card-body">
                {project.subtitle.includes("Addis Ababa") && (
                  <div>
                    <span className="project-aau-badge">
                      <img src={aauLogo} alt="AAU" className="project-aau-logo-mini" />
                      <span>AAU Capstone</span>
                    </span>
                  </div>
                )}
                <h3
                  className="project-title"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.title}
                </h3>
                <p className="project-subtitle-text">{project.subtitle}</p>
                <p className="project-excerpt">{project.overview}</p>

                {/* TECH TAGS */}
                <div className="project-tech-list">
                  {project.tech.slice(0, 4).map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag-sm">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="tech-tag-sm tag-more">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* CARD ACTIONS */}
                <div className="project-card-actions">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="card-btn card-btn-primary"
                  >
                    <Eye size={15} />
                    <span>{t("projects.caseStudy")}</span>
                  </button>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-btn card-btn-ghost"
                    title="Live Demo"
                  >
                    <ExternalLink size={15} />
                    <span>{t("projects.viewLive")}</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-btn card-btn-icon"
                    title="GitHub Repository"
                  >
                    <Github size={16} />
                  </a>
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
