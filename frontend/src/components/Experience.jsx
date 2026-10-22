import { useTranslation } from "react-i18next";
import { experience } from "../data/portfolioData";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building,
  Terminal,
} from "lucide-react";

function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="section-padding experience-section">
      <div className="section-container">
        {/* SECTION HEADER */}
        <div className="section-header text-center">
          <span className="section-badge">Career Track</span>
          <h2 className="section-title">{t("experience.title")}</h2>
          <p className="section-subtitle">{t("experience.subtitle")}</p>
        </div>

        {/* TIMELINE */}
        <div className="experience-timeline">
          {experience.map((item, idx) => (
            <div key={idx} className="timeline-item">
              {/* TIMELINE CONNECTOR */}
              <div className="timeline-node">
                <div className="timeline-pin">
                  <Briefcase size={18} className="text-white" />
                </div>
                {idx !== experience.length - 1 && <div className="timeline-connector-line"></div>}
              </div>

              {/* TIMELINE CONTENT CARD */}
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="role-title">{item.role}</h3>
                    <div className="company-row">
                      <span className="company-name">
                        <Building size={16} />
                        {item.company}
                      </span>
                      <span className="location-name">
                        <MapPin size={15} />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="period-badge-wrap">
                    {item.badge && <span className="exp-highlight-badge">{item.badge}</span>}
                    <span className="period-badge">
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
                      <CheckCircle2 size={17} className="bullet-check" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* TECH STACK BADGES */}
                <div className="exp-tech-tags">
                  {item.tech.map((tItem, tIdx) => (
                    <span key={tIdx} className="exp-tech-badge">
                      {tItem}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
