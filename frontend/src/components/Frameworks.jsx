import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { frameworksData } from "../data/portfolioData";
import {
  Layout,
  Server,
  Database,
  Zap,
  Cpu,
  Workflow,
  Search,
  X,
  CheckCircle2,
  Layers,
} from "lucide-react";

const iconMap = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  Zap: Zap,
  Cpu: Cpu,
  Workflow: Workflow,
};

function Frameworks() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Frontend", "Backend & .NET", "Database & Realtime", "DevOps & Tools"];

  const filteredFrameworks = useMemo(() => {
    return frameworksData.filter((fw) => {
      const matchesCategory =
        activeCategory === "All" || fw.category === activeCategory;

      const matchesSearch =
        !searchQuery.trim() ||
        fw.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fw.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fw.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fw.usedIn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fw.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="frameworks" className="section-padding frameworks-section">
      <div className="section-container">
        {/* SECTION HEADER */}
        <div className="section-header text-center">
          <span className="section-badge">{t("frameworks.badge") || "Production Stacks"}</span>
          <h2 className="section-title">{t("frameworks.title") || "Frameworks & Libraries"}</h2>
          <p className="section-subtitle">
            {t("frameworks.subtitle") ||
              "Production-grade web frameworks, enterprise ORMs, real-time engines, and database systems engineered for high performance."}
          </p>
        </div>

        {/* INTERACTIVE SEARCH & CATEGORY CONTROLS */}
        <div className="interactive-controls-row">
          {/* SEARCH BAR */}
          <div className="interactive-search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("frameworks.searchPlaceholder") || "Search frameworks (e.g. React, .NET, PostgreSQL)..."}
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

          {/* CATEGORY TABS WITH LIVE COUNTERS */}
          <div className="filter-tabs-wrap">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? frameworksData.length
                  : frameworksData.filter((fw) => fw.category === cat).length;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`filter-tab-btn ${activeCategory === cat ? "active" : ""}`}
                >
                  <span>{cat === "All" ? t("frameworks.all") || "All Frameworks" : cat}</span>
                  <span className="tab-count-pill">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FRAMEWORKS GRID */}
        {filteredFrameworks.length === 0 ? (
          <div className="empty-results-box">
            <p>No frameworks matched your search "{searchQuery}".</p>
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
          <div className="frameworks-grid">
            {filteredFrameworks.map((fw, idx) => {
              const IconComponent = iconMap[fw.icon] || Layers;
              return (
                <div
                  key={idx}
                  className="framework-card"
                  style={{ "--fw-color": fw.color }}
                >
                  {/* CARD HEADER */}
                  <div className="framework-card-header">
                    <div
                      className="framework-icon-box"
                      style={{
                        borderColor: `${fw.color}55`,
                        backgroundColor: `${fw.color}15`,
                        boxShadow: `0 4px 15px ${fw.color}25`,
                      }}
                    >
                      <IconComponent size={24} style={{ color: fw.color }} />
                    </div>

                    <div className="framework-title-meta">
                      <div className="fw-name-row">
                        <h3 className="framework-name">{fw.name}</h3>
                        <span className="fw-version-badge">{fw.version}</span>
                      </div>
                      <div className="fw-tags-row">
                        <span className="fw-category-tag">{fw.category}</span>
                        <span
                          className={`skill-tag-badge ${
                            fw.level === "Expert"
                              ? "badge-expert"
                              : "badge-advanced"
                          }`}
                        >
                          {fw.level}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CARD DESCRIPTION */}
                  <p className="framework-desc">{fw.description}</p>

                  {/* HIGHLIGHT PILLS */}
                  <div className="framework-highlights">
                    {fw.highlights.map((h, hIdx) => (
                      <span key={hIdx} className="fw-highlight-pill">
                        <CheckCircle2 size={12} style={{ color: fw.color }} />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>

                  {/* PRODUCTION DEPLOYMENT NOTE */}
                  <div className="framework-footer">
                    <small className="fw-used-label">Deployed in:</small>
                    <p className="fw-used-project">{fw.usedIn}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default Frameworks;
