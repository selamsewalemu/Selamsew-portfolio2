import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { projects } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";
import aauLogo from "../assets/aau-logo.png";
import { ExternalLink, Eye, Search, X } from "lucide-react";
import { Github } from "./SocialIcons";

function Projects() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Full Stack", "ERP & Systems"];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      const matchesSearch =
        !searchQuery.trim() ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="section-container">
        {/* SECTION HEADER */}
        <div className="section-header text-center">
          <span className="section-badge">{t("projects.badge")}</span>
          <h2 className="section-title">{t("projects.title")}</h2>
          <p className="section-subtitle">{t("projects.subtitle")}</p>
        </div>

        {/* INTERACTIVE CONTROLS */}
        <div className="interactive-controls-row">
          {/* SEARCH INPUT */}
          <div className="interactive-search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("projects.searchPlaceholder") || "Search projects by title, stack, or keyword..."}
              className="interactive-search-input"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="clear-search-btn"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* CATEGORY TABS */}
          <div className="filter-tabs-wrap">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`filter-tab-btn ${activeCategory === cat ? "active" : ""}`}
                >
                  <span>{cat === "All" ? t("projects.all") : cat}</span>
                  <span className="tab-count-pill">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* PROJECTS GRID */}
        {filteredProjects.length === 0 ? (
          <div className="empty-results-box">
            <p>No projects match your search query "{searchQuery}".</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="btn btn-secondary"
            >
              Reset Filters
            </button>
          </div>
        ) : (
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
                      <span>{t("projects.caseStudy")}</span>
                    </span>
                  </div>
                  <span className="project-card-cat">{project.category}</span>
                </div>

                <div className="project-card-body">
                  {project.subtitle.includes("Addis Ababa") && (
                    <div>
                      <span className="project-aau-badge">
                        <img src={aauLogo} alt="AAU" className="project-aau-logo-mini" />
                        <span>AAU Capstone Project</span>
                      </span>
                    </div>
                  )}
                  {project.id === "tms-core" && (
                    <div>
                      <span className="project-tms-badge">
                        <span className="pulse-dot-sm"></span>
                        <span>Enterprise .NET 10 & Angular 22</span>
                      </span>
                    </div>
                  )}
                  {project.id === "talenthub" && (
                    <div>
                      <span className="project-talenthub-badge">
                        <span className="pulse-dot-emerald"></span>
                        <span>Role-Based Job Platform • RBAC</span>
                      </span>
                    </div>
                  )}
                  {project.id === "online-exam" && (
                    <div>
                      <span className="project-exam-badge">
                        <span className="pulse-dot-cyan"></span>
                        <span>Full-Stack Assessment Engine</span>
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
