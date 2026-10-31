import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { skillCategories } from "../data/portfolioData";
import {
  Layout,
  Server,
  Database,
  Layers,
  Network,
  GitBranch,
  Search,
  X,
} from "lucide-react";

const domainIconMap = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  Layers: Layers,
  Network: Network,
  GitBranch: GitBranch,
};

function Skills() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("all");
  const [skillSearch, setSkillSearch] = useState("");

  const filteredCategories = useMemo(() => {
    return skillCategories
      .map((cat) => {
        const matchesCategory = activeTab === "all" || cat.id === activeTab;
        if (!matchesCategory) return null;

        if (!skillSearch.trim()) return cat;

        const matchingSkills = cat.skills.filter(
          (s) =>
            s.name.toLowerCase().includes(skillSearch.toLowerCase()) ||
            s.tag.toLowerCase().includes(skillSearch.toLowerCase()) ||
            s.level.toLowerCase().includes(skillSearch.toLowerCase())
        );

        if (matchingSkills.length === 0) return null;

        return {
          ...cat,
          skills: matchingSkills,
        };
      })
      .filter(Boolean);
  }, [activeTab, skillSearch]);

  const totalSkillCount = useMemo(() => {
    return skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="section-container">
        {/* SECTION HEADER */}
        <div className="section-header text-center">
          <span className="section-badge">{t("skills.badge")}</span>
          <h2 className="section-title">{t("skills.title")}</h2>
          <p className="section-subtitle">{t("skills.subtitle")}</p>
        </div>

        {/* INTERACTIVE CONTROLS */}
        <div className="interactive-controls-row">
          {/* SEARCH BAR */}
          <div className="interactive-search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              value={skillSearch}
              onChange={(e) => setSkillSearch(e.target.value)}
              placeholder={t("skills.searchPlaceholder") || "Search skills (e.g. React, PostgreSQL, Docker)..."}
              className="interactive-search-input"
            />
            {skillSearch && (
              <button
                type="button"
                onClick={() => setSkillSearch("")}
                className="clear-search-btn"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* DOMAIN TABS */}
          <div className="filter-tabs-wrap">
            <button
              onClick={() => setActiveTab("all")}
              className={`filter-tab-btn ${activeTab === "all" ? "active" : ""}`}
            >
              <span>{t("skills.allDisciplines")}</span>
              <span className="tab-count-pill">{totalSkillCount}</span>
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`filter-tab-btn ${activeTab === cat.id ? "active" : ""}`}
              >
                <span>{cat.title}</span>
                <span className="tab-count-pill">{cat.skills.length}</span>
              </button>
            ))}
          </div>
        </div>

        {/* DOMAIN CATEGORY CARDS */}
        {filteredCategories.length === 0 ? (
          <div className="empty-results-box">
            <p>No technical skills matched your search "{skillSearch}".</p>
            <button
              type="button"
              onClick={() => {
                setActiveTab("all");
                setSkillSearch("");
              }}
              className="btn btn-secondary"
            >
              Reset Skill Filter
            </button>
          </div>
        ) : (
          <div className="skills-domains-grid">
            {filteredCategories.map((category) => {
              const Icon = domainIconMap[category.icon] || Layout;
              return (
                <div key={category.id} className="domain-card">
                  <div className="domain-header">
                    <div className="domain-icon-wrapper">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="domain-title">{category.title}</h3>
                      <small className="domain-sub-count">{category.skills.length} core competencies</small>
                    </div>
                  </div>

                  <div className="skills-pill-grid">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="skill-pill-card">
                        <div className="skill-meta-row">
                          <span className="skill-name">{skill.name}</span>
                          <span
                            className={`skill-tag-badge ${
                              skill.level === "Expert"
                                ? "badge-expert"
                                : skill.level === "Advanced"
                                ? "badge-advanced"
                                : "badge-proficient"
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                        <span className="skill-sub-tag">{skill.tag}</span>
                      </div>
                    ))}
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

export default Skills;
