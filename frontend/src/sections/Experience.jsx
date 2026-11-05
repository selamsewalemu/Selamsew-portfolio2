import { useTranslation } from "react-i18next";
import { experience } from "../data/portfolioData";
import { Briefcase, MapPin, CheckCircle2 } from "lucide-react";

function Experience() {
  const { t } = useTranslation();

  // Split into pairs so two cards sit side-by-side on each row
  const rows = [];
  for (let i = 0; i < experience.length; i += 2) {
    rows.push([experience[i], experience[i + 1] || null]);
  }

  return (
    <section id="experience" className="section-padding experience-section">
      <div className="section-container">
        {/* HEADER */}
        <div className="section-header text-center">
          <span className="section-badge">{t("experience.badge")}</span>
          <h2 className="section-title gradient-text">{t("experience.title")}</h2>
          <span className="section-title-underline" aria-hidden="true" />
          <p className="section-subtitle">{t("experience.subtitle")}</p>
        </div>

        {/* TIMELINE */}
        <div className="exp-timeline">
          {/* Vertical center line */}
          <div className="exp-timeline-line" aria-hidden="true" />

          {rows.map((pair, rowIdx) => (
            <div key={rowIdx} className="exp-pair-row">

              {/* LEFT CARD */}
              <div className="exp-card-wrap exp-card-wrap--left">
                <ExperienceCard item={pair[0]} />
              </div>

              {/* CENTER DOT */}
              <div className="exp-center-node">
                <div className="exp-dot">
                  <Briefcase size={14} />
                </div>
              </div>

              {/* RIGHT CARD */}
              <div className="exp-card-wrap exp-card-wrap--right">
                {pair[1] && <ExperienceCard item={pair[1]} />}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ item }) {
  return (
    <div className="exp-card">
      {/* Period + badge on top */}
      <div className="exp-card-period">
        <span className="exp-date-text">{item.period}</span>
        {item.badge && <span className="exp-type-label">{item.badge}</span>}
      </div>

      {/* Role & company */}
      <h3 className="exp-role">{item.role}</h3>
      <div className="exp-meta">
        <span className="exp-company">{item.company}</span>
        <span className="exp-location">
          <MapPin size={12} />
          {item.location}
        </span>
        <span className="exp-type">{item.type}</span>
      </div>

      {/* Highlights */}
      <ul className="exp-highlights">
        {item.highlights.map((point, i) => (
          <li key={i} className="exp-highlight-item">
            <CheckCircle2 size={14} className="exp-check-icon" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      <div className="exp-tags">
        {item.tech.map((tag, i) => (
          <span key={i} className="exp-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default Experience;
