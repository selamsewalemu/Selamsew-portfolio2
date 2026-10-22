import { useState } from "react";
import { useTranslation } from "react-i18next";
import { programmingLanguages } from "../data/portfolioData";
import {
  Code2,
  FileCode,
  Terminal,
  Cpu,
  Coffee,
  Database,
  Server,
  TerminalSquare,
  Layout,
  CheckCircle2,
} from "lucide-react";

const iconMap = {
  Code2: Code2,
  FileCode: FileCode,
  Terminal: Terminal,
  Cpu: Cpu,
  Coffee: Coffee,
  Database: Database,
  Server: Server,
  TerminalSquare: TerminalSquare,
  Layout: Layout,
};

function Languages() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full Stack", "Backend & Systems", "Database", "Systems & Engineering"];

  const filteredLanguages =
    filter === "All"
      ? programmingLanguages
      : programmingLanguages.filter((l) =>
          l.category.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <section id="languages" className="section-padding languages-section">
      <div className="section-container">
        {/* SECTION HEADER */}
        <div className="section-header text-center">
          <span className="section-badge">Core Toolset</span>
          <h2 className="section-title">{t("languages.title")}</h2>
          <p className="section-subtitle">{t("languages.subtitle")}</p>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="filter-tabs-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-tab-btn ${filter === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* LANGUAGES GRID */}
        <div className="languages-grid">
          {filteredLanguages.map((lang, idx) => {
            const IconComponent = iconMap[lang.icon] || Code2;
            return (
              <div key={idx} className="language-card">
                <div className="lang-header">
                  <div
                    className="lang-icon-box"
                    style={{ borderColor: `${lang.color}55`, backgroundColor: `${lang.color}15` }}
                  >
                    <IconComponent size={24} style={{ color: lang.color }} />
                  </div>
                  <div className="lang-title-group">
                    <h3 className="lang-name">{lang.name}</h3>
                    <div className="lang-tags">
                      <span className="lang-level-badge">{lang.level}</span>
                      <span className="lang-cat-badge">{lang.category}</span>
                    </div>
                  </div>
                </div>

                <p className="lang-desc">{lang.description}</p>

                {/* PROGRESS BAR */}
                <div className="lang-progress-wrap">
                  <div className="progress-labels">
                    <span>Proficiency</span>
                    <span className="progress-value">{lang.percentage}%</span>
                  </div>
                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${lang.percentage}%`,
                        backgroundColor: lang.color,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Languages;
