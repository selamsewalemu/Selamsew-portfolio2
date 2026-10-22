import { useState } from "react";
import { useTranslation } from "react-i18next";
import { skillCategories } from "../data/portfolioData";
import {
  Layout,
  Server,
  Database,
  Layers,
  Network,
  GitBranch,
  CheckCircle2,
  Sparkles,
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

  const displayedCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="section-container">
        {/* SECTION HEADER */}
        <div className="section-header text-center">
          <span className="section-badge">Technical Competency</span>
          <h2 className="section-title">{t("skills.title")}</h2>
          <p className="section-subtitle">{t("skills.subtitle")}</p>
        </div>

        {/* DOMAIN TABS */}
        <div className="filter-tabs-wrap">
          <button
            onClick={() => setActiveTab("all")}
            className={`filter-tab-btn ${activeTab === "all" ? "active" : ""}`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`filter-tab-btn ${activeTab === cat.id ? "active" : ""}`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* DOMAIN CATEGORY CARDS */}
        <div className="skills-domains-grid">
          {displayedCategories.map((category) => {
            const Icon = domainIconMap[category.icon] || Layout;
            return (
              <div key={category.id} className="domain-card">
                <div className="domain-header">
                  <div className="domain-icon-wrapper">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="domain-title">{category.title}</h3>
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
      </div>
    </section>
  );
}

export default Skills;
