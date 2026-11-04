import { useTranslation } from "react-i18next";
import { experience } from "../data/portfolioData";
import aauLogo from "../assets/aau-logo.png";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building,
} from "lucide-react";

function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="section-padding experience-section">
      <div className="section-container">
        {/* SECTION HEADER */}
        <div className="section-header text-center">
          <span className="section-badge">{t("experience.badge")}</span>
          <h2 className="section-title gradient-text">{t("experience.title")}</h2>
          <p className="section-subtitle">{t("experience.subtitle")}</p>
        </div>

        {/* ALTERNATING TIMELINE */}
        <div className="experience-timeline-alt">
          {experience.map((item, idx) => (
            <div
              key={idx}
              className={`timeline-alt-item ${idx % 2 === 0 ? "timeline-alt-left" : "timeline-alt-right"}`}
            >
              {/* CENTER LINE & DOT */}
              <div className="timeline-alt-node">
                <div className="timeline-alt-pin">
                  <Briefcase size={16} className="text-white" />
                </div>
              </div>

              {/* CARD */}
              <div className="timeline-alt-card glass-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="role-title">{item.role}</h3>
                    <div className="company-row">
                      <span className="company-name">
                        {item.company.includes("Addis Ababa") ? (
                          <img
                            src={aauLogo}
                            alt="AAU Logo"
                            className="company-aau-logo"
                          />
                        ) : (
                          <Building size={16} />
                        )}
                        {item.company}
                      </span>
                      <span className="location-name">
                        <MapPin size={15} />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="period-badge-wrap">
                    {item.badge && (
                      <span className="exp-highlight-badge">{item.badge}</span>
                    )}
                    <span className="period-badge-gradient">
                      <Calendar size={14} />
                      {item.period}
                    </span>
                    <span className="job-type-badge">{item.type}</span>
                  </div>
                </div>

                {/* HIGHLIGHT BULLET POINTS */}
                <ul className="highlights-list">
                  {item.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="highlight-point">
                      <CheckCircle2
                        size={17}
                        className="flex-shrink-0"
                        style={{ color: "var(--accent-cyan)" }}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* TECH STACK BADGES */}
                <div className="exp-tech-tags">
                  {item.tech.map((tItem, tIdx) => (
                    <span key={tIdx} className="exp-tech-badge-glass">
                      {tItem}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* VERTICAL GRADIENT LINE (behind dots) */}
          <div className="timeline-alt-line" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default Experience;
