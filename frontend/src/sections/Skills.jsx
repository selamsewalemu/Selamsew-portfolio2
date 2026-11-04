import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  programmingLanguages,
  frameworksData,
  skillCategories,
} from "../data/portfolioData";
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
  Layers,
  ShieldCheck,
  Zap,
  Workflow,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const langIconMap = {
  Code2,
  FileCode,
  Terminal,
  Cpu,
  Coffee,
  Database,
  Server,
  TerminalSquare,
  Layout,
};

function Skills() {
  const { t } = useTranslation();
  const [langCategory, setLangCategory] = useState("All");

  const langCategories = ["All", ".NET", "Web", "Systems", "Database"];

  const filteredLanguages = useMemo(() => {
    if (langCategory === "All") return programmingLanguages;
    return programmingLanguages.filter((l) => {
      const cat = l.category.toLowerCase();
      const name = l.name.toLowerCase();
      if (langCategory === ".NET") return name.includes("c#") || name.includes(".net");
      if (langCategory === "Web") return cat.includes("full stack") || cat.includes("frontend");
      if (langCategory === "Systems") return cat.includes("systems") || cat.includes("infrastructure");
      if (langCategory === "Database") return cat.includes("database");
      return true;
    });
  }, [langCategory]);

  return (
    <section id="skills" className="section-padding tech-stack-section">
      {/* HIDDEN ANCHORS FOR BACKWARD COMPATIBILITY */}
      <span id="languages" className="anchor-offset" aria-hidden="true" />
      <span id="frameworks" className="anchor-offset" aria-hidden="true" />
      <span id="stack" className="anchor-offset" aria-hidden="true" />

      <div className="section-container">
        {/* SECTION HEADER */}
        <div className="section-header text-center">
          <span className="section-badge">
            <Sparkles size={14} className="inline mr-1" />
            {t("skills.badge") || "Technical Arsenal"}
          </span>
          <h2 className="section-title gradient-text">
            {t("nav.techStack") || "Unified Tech Stack"}
          </h2>
          <p className="section-subtitle">
            Consolidated 4-card hub: Languages, Frontend, Backend, and Production Frameworks.
          </p>
        </div>

        {/* 4-CARD BENTO GRID */}
        <div className="tech-bento-grid">
          {/* CARD 1: PROGRAMMING LANGUAGES */}
          <div className="tech-bento-card card-languages" style={{ borderRadius: "24px" }}>
            <div className="bento-card-header">
              <div className="bento-icon-badge icon-lang" style={{ background: "var(--accent-gradient)", border: "none", color: "#fff" }}>
                <Code2 size={22} />
              </div>
              <div>
                <h3 className="bento-card-title">Programming Languages</h3>
                <p className="bento-card-subtitle">
                  {programmingLanguages.length} Core Languages • OOP, Web & Systems
                </p>
              </div>
            </div>

            {/* QUICK CATEGORY FILTER */}
            <div className="bento-filter-pills">
              {langCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setLangCategory(cat)}
                  className={`bento-filter-pill ${langCategory === cat ? "active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* LANGUAGES COMPACT LIST */}
            <div className="bento-lang-list">
              {filteredLanguages.map((lang, idx) => {
                const IconComponent = langIconMap[lang.icon] || Code2;
                const levelClass = lang.level.toLowerCase().includes("expert")
                  ? "level-expert"
                  : lang.level.toLowerCase().includes("advanced")
                  ? "level-advanced"
                  : "level-proficient";
                const dotColor = lang.level.toLowerCase().includes("expert")
                  ? "var(--accent-primary)"
                  : lang.level.toLowerCase().includes("advanced")
                  ? "var(--accent-cyan)"
                  : "var(--accent-secondary)";
                return (
                  <div key={idx} className="bento-lang-item">
                    <div className="bento-lang-left">
                      <div
                        className="bento-lang-icon-box"
                        style={{
                          backgroundColor: `${lang.color}15`,
                          borderColor: `${lang.color}40`,
                        }}
                      >
                        <IconComponent size={16} style={{ color: lang.color }} />
                      </div>
                      <span className="bento-lang-name">{lang.name}</span>
                    </div>
                    <div className="bento-lang-right">
                      <span className="bento-lang-cat-pill">{lang.category}</span>
                      <span
                        className={`bento-lang-level ${levelClass}`}
                        style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
                      >
                        <span
                          style={{
                            width: "7px",
                            height: "7px",
                            borderRadius: "50%",
                            background: dotColor,
                            boxShadow: `0 0 6px ${dotColor}`,
                            flexShrink: 0,
                          }}
                        />
                        {lang.level}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CARD 2: FRONTEND ENGINEERING */}
          <div className="tech-bento-card card-frontend" style={{ borderRadius: "24px" }}>
            <div className="bento-card-header">
              <div className="bento-icon-badge icon-front" style={{ background: "var(--accent-gradient)", border: "none", color: "#fff" }}>
                <Layout size={22} />
              </div>
              <div>
                <h3 className="bento-card-title">Frontend Engineering</h3>
                <p className="bento-card-subtitle">
                  Modern Reactive SPAs & High-Performance UI/UX
                </p>
              </div>
            </div>

            <div className="bento-chips-grid">
              {[
                { name: "React 19 & Hooks", level: "Expert", tag: "Primary" },
                { name: "Tailwind CSS v4", level: "Expert", tag: "Styling" },
                { name: "Next.js & Vite 8", level: "Advanced", tag: "Bundling" },
                { name: "Redux Toolkit / Context", level: "Advanced", tag: "State" },
                { name: "TypeScript (TS)", level: "Proficient", tag: "Type-Safe" },
                { name: "Responsive UI / Mobile First", level: "Expert", tag: "UX" },
                { name: "Axios & REST Client", level: "Expert", tag: "Network" },
                { name: "i18n Multi-Language", level: "Advanced", tag: "Localization" },
                { name: "Semantic HTML5 & Modern CSS3", level: "Expert", tag: "Design" },
                { name: "Modular Clean Code", level: "Advanced", tag: "Architecture" },
              ].map((item, idx) => (
                <div key={idx} className="bento-skill-chip">
                  <div className="bento-chip-meta">
                    <span className="bento-chip-name">{item.name}</span>
                    <span className={`bento-chip-badge ${item.level.toLowerCase()}`}>
                      {item.level}
                    </span>
                  </div>
                  <small className="bento-chip-tag">{item.tag}</small>
                </div>
              ))}
            </div>

            <div className="bento-card-footer">
              <span className="bento-footer-highlight">
                <Zap size={14} className="text-amber" />
                <span>Instant HMR • Sub-second Renders • WCAG Accessible</span>
              </span>
            </div>
          </div>

          {/* CARD 3: BACKEND & SYSTEMS */}
          <div className="tech-bento-card card-backend" style={{ borderRadius: "24px" }}>
            <div className="bento-card-header">
              <div className="bento-icon-badge icon-back" style={{ background: "var(--accent-gradient)", border: "none", color: "#fff" }}>
                <Server size={22} />
              </div>
              <div>
                <h3 className="bento-card-title">Backend & Systems</h3>
                <p className="bento-card-subtitle">
                  Enterprise APIs, Real-Time Hubs & SysAdmin
                </p>
              </div>
            </div>

            <div className="bento-chips-grid">
              {[
                { name: "ASP.NET Core 10 & C#", level: "Advanced", tag: "Enterprise" },
                { name: "Node.js & Express.js", level: "Advanced", tag: "APIs" },
                { name: "RESTful Web APIs", level: "Expert", tag: "OpenAPI/Swagger" },
                { name: "Socket.io & SignalR", level: "Advanced", tag: "Real-Time" },
                { name: "JWT & RBAC Security", level: "Expert", tag: "Auth" },
                { name: "ERP System Administration", level: "Enterprise", tag: "Tibeb" },
                { name: "TCP/IP & Cisco Networks", level: "Advanced", tag: "CCNA" },
                { name: "Linux & Ubuntu Server", level: "Expert", tag: "OS / CLI" },
                { name: "Asynchronous Pipelines", level: "Advanced", tag: "Microservices" },
                { name: "Hardware Diagnostics & Repair", level: "Expert", tag: "Eng" },
              ].map((item, idx) => (
                <div key={idx} className="bento-skill-chip">
                  <div className="bento-chip-meta">
                    <span className="bento-chip-name">{item.name}</span>
                    <span className={`bento-chip-badge ${item.level.toLowerCase()}`}>
                      {item.level}
                    </span>
                  </div>
                  <small className="bento-chip-tag">{item.tag}</small>
                </div>
              ))}
            </div>

            <div className="bento-card-footer">
              <span className="bento-footer-highlight">
                <ShieldCheck size={14} className="text-emerald" />
                <span>Continuous ERP Availability • High Availability • Zero Data-Loss</span>
              </span>
            </div>
          </div>

          {/* CARD 4: FRAMEWORKS, DATABASES & DEVOPS */}
          <div className="tech-bento-card card-frameworks" style={{ borderRadius: "24px" }}>
            <div className="bento-card-header">
              <div className="bento-icon-badge icon-data" style={{ background: "var(--accent-gradient)", border: "none", color: "#fff" }}>
                <Database size={22} />
              </div>
              <div>
                <h3 className="bento-card-title">Frameworks & Databases</h3>
                <p className="bento-card-subtitle">
                  Relational, Document Datastores & Cloud DevOps
                </p>
              </div>
            </div>

            <div className="bento-frameworks-split">
              {/* DATABASES COLUMN */}
              <div className="bento-split-col">
                <h4 className="bento-split-title">Databases & ORMs</h4>
                <div className="bento-fw-list">
                  {[
                    { name: "PostgreSQL", desc: "Relational Schemas & Indexing", level: "Expert" },
                    { name: "MySQL Datastore", desc: "Enterprise DB & Daily Backups", level: "Advanced" },
                    { name: "MongoDB & Atlas", desc: "Document Aggregations", level: "Advanced" },
                    { name: "Entity Framework Core", desc: ".NET ORM & LINQ Mapping", level: "Advanced" },
                  ].map((db, idx) => (
                    <div key={idx} className="bento-fw-row">
                      <CheckCircle2 size={15} className="text-primary flex-shrink-0" />
                      <div>
                        <div className="bento-fw-name-row">
                          <strong className="bento-fw-name">{db.name}</strong>
                          <span className="bento-fw-pill">{db.level}</span>
                        </div>
                        <small className="bento-fw-desc">{db.desc}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DEVOPS & TOOLS COLUMN */}
              <div className="bento-split-col">
                <h4 className="bento-split-title">DevOps & Tooling</h4>
                <div className="bento-fw-list">
                  {[
                    { name: "Docker Containers", desc: "Multi-Stage Containerization", level: "Proficient" },
                    { name: "Git & GitHub", desc: "Feature Branches & CI/CD", level: "Expert" },
                    { name: "Ubuntu / Linux", desc: "Daemons, Cron & Bash", level: "Expert" },
                    { name: "Nginx Reverse Proxy", desc: "SSL & Web Server Config", level: "Advanced" },
                  ].map((tool, idx) => (
                    <div key={idx} className="bento-fw-row">
                      <CheckCircle2 size={15} className="text-cyan flex-shrink-0" />
                      <div>
                        <div className="bento-fw-name-row">
                          <strong className="bento-fw-name">{tool.name}</strong>
                          <span className="bento-fw-pill">{tool.level}</span>
                        </div>
                        <small className="bento-fw-desc">{tool.desc}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bento-card-footer">
              <span className="bento-footer-highlight">
                <Workflow size={14} className="text-cyan" />
                <span>Automated Daily Backups • ACID Compliance • Docker Sandboxes</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
