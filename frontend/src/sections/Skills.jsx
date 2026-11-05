import { useState } from "react";

const TABS = ["All", "Frontend", "Backend", "Database", "Tools"];

const SKILLS = [
  // Frontend
  { name: "React 19",       level: "Expert",    tab: "Frontend",  icon: "⚛️" },
  { name: "TypeScript",     level: "Advanced",  tab: "Frontend",  icon: "🔷" },
  { name: "Tailwind CSS",   level: "Expert",    tab: "Frontend",  icon: "🎨" },
  { name: "Next.js",        level: "Advanced",  tab: "Frontend",  icon: "▲" },
  { name: "JavaScript",     level: "Expert",    tab: "Frontend",  icon: "🟨" },
  { name: "HTML5 & CSS3",   level: "Expert",    tab: "Frontend",  icon: "🌐" },
  // Backend
  { name: "Node.js",        level: "Advanced",  tab: "Backend",   icon: "🟩" },
  { name: "Express.js",     level: "Advanced",  tab: "Backend",   icon: "🚂" },
  { name: "ASP.NET Core",   level: "Advanced",  tab: "Backend",   icon: "🔵" },
  { name: "C#",             level: "Advanced",  tab: "Backend",   icon: "🟣" },
  { name: "REST APIs",      level: "Expert",    tab: "Backend",   icon: "🔗" },
  { name: "JWT Auth",       level: "Expert",    tab: "Backend",   icon: "🔐" },
  { name: "Python",         level: "Advanced",  tab: "Backend",   icon: "🐍" },
  // Database
  { name: "PostgreSQL",     level: "Expert",    tab: "Database",  icon: "🐘" },
  { name: "MySQL",          level: "Advanced",  tab: "Database",  icon: "🐬" },
  { name: "MongoDB",        level: "Advanced",  tab: "Database",  icon: "🍃" },
  { name: "EF Core",        level: "Advanced",  tab: "Database",  icon: "🗃️" },
  // Tools
  { name: "Git & GitHub",   level: "Expert",    tab: "Tools",     icon: "🔀" },
  { name: "Docker",         level: "Proficient",tab: "Tools",     icon: "🐳" },
  { name: "Linux Server",   level: "Expert",    tab: "Tools",     icon: "🐧" },
  { name: "Nginx",          level: "Advanced",  tab: "Tools",     icon: "⚙️" },
  { name: "ERP Systems",    level: "Expert",    tab: "Tools",     icon: "🏢" },
];

const LEVEL_COLOR = {
  Expert:     { bg: "rgba(16,185,129,0.12)",  border: "rgba(16,185,129,0.35)",  text: "#10b981" },
  Advanced:   { bg: "rgba(99,102,241,0.12)",  border: "rgba(99,102,241,0.35)",  text: "#6366f1" },
  Proficient: { bg: "rgba(245,158,11,0.12)",  border: "rgba(245,158,11,0.35)",  text: "#f59e0b" },
};

function Skills() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? SKILLS : SKILLS.filter((s) => s.tab === active);

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">

        {/* Header */}
        <div className="section-header text-center">
          <span className="section-badge">Tech Stack</span>
          <h2 className="section-title gradient-text">Skills</h2>
          <span className="section-title-underline" aria-hidden="true" />
          <p className="section-subtitle">Core technologies I build with every day.</p>
        </div>

        {/* Tabs */}
        <div className="skills-tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`skills-tab-btn ${active === tab ? "active" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="skills-grid">
          {filtered.map((skill, i) => {
            const c = LEVEL_COLOR[skill.level] || LEVEL_COLOR.Proficient;
            return (
              <div key={i} className="skill-chip">
                <span className="skill-chip-icon">{skill.icon}</span>
                <span className="skill-chip-name">{skill.name}</span>
                <span
                  className="skill-chip-level"
                  style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
                >
                  {skill.level}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Skills;
