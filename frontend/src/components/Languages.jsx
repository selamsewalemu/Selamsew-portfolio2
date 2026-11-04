import { useState, useMemo } from "react";
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
  Search,
  X,
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
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", ".NET & C#", "Full Stack", "Backend & Systems", "Database", "Systems & Engineering"];

  const filteredLanguages = useMemo(() => {
    return programmingLanguages.filter((l) => {
      const matchesCategory =
        filter === "All" ||
        l.category.toLowerCase().includes(filter.toLowerCase()) ||
        (filter === ".NET & C#" && (l.name.includes("C#") || l.name.includes(".NET")));

      const matchesSearch =
        !searchTerm.trim() ||
        l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        l.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        l.category.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [filter, searchTerm]);

  return (
    <section id="languages" className="section-padding languages-section">
      <div className="section-container">
        {/* SECTION HEADER */}
        <div className="section-header text-center">
          <span className="section-badge">{t("languages.badge")}</span>
          <h2 className="section-title">{t("languages.title")}</h2>
          <p className="section-subtitle">{t("languages.subtitle")}</p>
        </div>

        {/* SEARCH & FILTER CONTROLS */}
        <div className="interactive-controls-row">
          {/* SEARCH INPUT */}
          <div className="interactive-search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t("languages.searchPlaceholder") || "Search programming languages..."}
              className="interactive-search-input"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
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
                  ? programmingLanguages.length
                  : programmingLanguages.filter(
                      (l) =>
                        l.category.toLowerCase().includes(cat.toLowerCase()) ||
                        (cat === ".NET & C#" && (l.name.includes("C#") || l.name.includes(".NET")))
                    ).length;

              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`filter-tab-btn ${filter === cat ? "active" : ""}`}
                >
                  <span>{cat}</span>
                  <span className="tab-count-pill">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* LANGUAGES GRID */}
        {filteredLanguages.length === 0 ? (
          <div className="empty-results-box">
            <p>No languages matched your filter "{searchTerm}".</p>
            <button
              type="button"
              onClick={() => {
                setFilter("All");
                setSearchTerm("");
              }}
              className="btn btn-secondary"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="languages-grid">
            {filteredLanguages.map((lang, idx) => {
              const IconComponent = iconMap[lang.icon] || Code2;
              return (
                <div
                  key={idx}
                  className="language-card"
                  style={{ "--lang-accent": lang.color }}
                >
                  <div className="lang-header">
                    <div
                      className="lang-icon-box"
                      style={{
                        borderColor: `${lang.color}55`,
                        backgroundColor: `${lang.color}15`,
                        boxShadow: `0 4px 14px ${lang.color}25`,
                      }}
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
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default Languages;
