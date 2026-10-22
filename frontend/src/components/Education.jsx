import { useTranslation } from "react-i18next";
import { educationData } from "../data/portfolioData";
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

function Education() {
  const { t } = useTranslation();

  return (
    <section id="education" className="section-padding education-section">
      <div className="section-container">
        {/* SECTION HEADER */}
        <div className="section-header text-center">
          <span className="section-badge">Academic & Accreditations</span>
          <h2 className="section-title">{t("education.title")}</h2>
          <p className="section-subtitle">{t("education.subtitle")}</p>
        </div>

        {/* DEGREE HIGHLIGHT CARD */}
        <div className="education-main-card">
          <div className="edu-card-header">
            <div className="edu-icon-box">
              <GraduationCap size={32} className="text-primary" />
            </div>
            <div className="edu-header-meta">
              <span className="edu-badge">{educationData.degree}</span>
              <h3 className="edu-school-name">{educationData.university}</h3>
              <p className="edu-college-name">{educationData.college}</p>
              <div className="edu-dates-row">
                <span className="edu-spec">{educationData.specialization}</span>
                <span className="edu-grad-date">
                  <Calendar size={15} />
                  Graduation: {educationData.graduationDate}
                </span>
              </div>
            </div>
          </div>

          <p className="edu-description">{educationData.description}</p>

          {/* COURSEWORK TAGS */}
          <div className="coursework-container">
            <h4 className="coursework-heading">
              <BookOpen size={18} />
              <span>Core Coursework & Specialized Curriculum:</span>
            </h4>
            <div className="coursework-tags-grid">
              {educationData.coursework.map((course, idx) => (
                <span key={idx} className="coursework-tag">
                  <CheckCircle2 size={13} className="text-emerald" />
                  <span>{course}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CERTIFICATIONS & ACCREDITATIONS GRID */}
        <div className="certifications-block">
          <h3 className="certifications-heading">
            <Award size={22} className="text-primary" />
            <span>Professional Certifications & Accreditations</span>
          </h3>

          <div className="certifications-grid">
            {educationData.certifications.map((cert, idx) => (
              <div key={idx} className="cert-card">
                <div className="cert-card-top">
                  <div className="cert-icon-wrap">
                    <Award size={20} className="text-primary" />
                  </div>
                  <span className="cert-year-badge">{cert.date}</span>
                </div>
                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <div className="cert-skills-wrap">
                  <small className="cert-skills-label">Core Competencies:</small>
                  <p className="cert-skills-text">{cert.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
