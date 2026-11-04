import { useState } from "react";
import Navbar from "../components/Navbar";
import SkillsSection from "../components/Skills";
import Footer from "../components/Footer";
import {
  Layers,
  Server,
  Globe2,
  ShieldCheck,
  Database,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Calculator,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

function Services() {
  const [selectedService, setSelectedService] = useState("web");
  const [selectedUrgency, setSelectedUrgency] = useState("standard");
  const [estimatedTime, setEstimatedTime] = useState("2 - 4 Weeks");

  const serviceOfferings = [
    {
      id: "erp",
      icon: <Layers size={28} className="text-primary" />,
      title: "ERP Administration",
      desc: "Enterprise module deployment, database mapping, and workflow optimization.",
      features: [
        "Continuous System Uptime",
        "Database Normalization",
        "Role-Based Access Control",
        "Disaster Recovery & Backups",
      ],
    },
    {
      id: "web",
      icon: <Server size={28} className="text-cyan" />,
      title: "Full-Stack Development",
      desc: "High-speed web apps with React 19, Node.js, Express, and PostgreSQL.",
      features: [
        "Sub-second API response times",
        "Modular REST architecture",
        "JWT & Bcrypt authorization",
        "Redux / Context state",
      ],
    },
    {
      id: "db",
      icon: <Database size={28} className="text-emerald" />,
      title: "Database Optimization",
      desc: "Relational schema design, query indexing, and automated backups.",
      features: [
        "Query execution tuning",
        "ACID compliant transactions",
        "Connection pooling tuning",
        "Zero data-loss automation",
      ],
    },
    {
      id: "i18n",
      icon: <Globe2 size={28} className="text-purple" />,
      title: "UI/UX & Localization",
      desc: "Multilingual sites, fluid responsive grids, and dark/light themes.",
      features: [
        "Instant multi-language (i18n)",
        "Dark / Light theme toggle",
        "Mobile-first fluid grids",
        "High Lighthouse performance",
      ],
    },
    {
      id: "infra",
      icon: <ShieldCheck size={28} className="text-amber" />,
      title: "IT Support & Networks",
      desc: "Hardware diagnostics, LAN/VLAN config, and user support.",
      features: [
        "Subnetting & VLAN config",
        "Hardware diagnostics",
        "Standard Operating Procedures",
        "Rapid issue resolution",
      ],
    },
    {
      id: "auto",
      icon: <Wrench size={28} className="text-rose" />,
      title: "Automation & APIs",
      desc: "Cron scripts, REST integrations, and real-time WebSockets.",
      features: [
        "Cron & daemon automation",
        "Socket.io real-time events",
        "Transactional email alerts",
        "Automated reporting",
      ],
    },
  ];

  const handleCalculate = (serviceId, urgency) => {
    setSelectedService(serviceId);
    setSelectedUrgency(urgency);

    if (serviceId === "web") {
      setEstimatedTime(urgency === "rush" ? "1 - 2 Weeks" : "3 - 5 Weeks");
    } else if (serviceId === "erp") {
      setEstimatedTime(urgency === "rush" ? "2 - 3 Weeks" : "4 - 8 Weeks");
    } else if (serviceId === "db") {
      setEstimatedTime(urgency === "rush" ? "3 - 5 Days" : "1 - 2 Weeks");
    } else {
      setEstimatedTime(urgency === "rush" ? "1 Week" : "2 - 3 Weeks");
    }
  };

  return (
    <div className="portfolio-app-root">
      <Navbar />
      <main style={{ paddingTop: "76px" }}>
        {/* HERO HEADER */}
        <section className="section-padding">
          <div className="section-container">
            <div className="section-header text-center">
              <span className="section-badge">Professional Capabilities</span>
              <h1 className="section-title">Engineering Services & Solutions</h1>
              <p className="section-subtitle">
                High-impact software engineering, ERP systems administration, database performance tuning, and technical infrastructure consulting.
              </p>
            </div>

            {/* SERVICES GRID */}
            <div className="services-showcase-grid">
              {serviceOfferings.map((service) => (
                <div key={service.id} className="service-feature-card glass-card">
                  <div className="service-feature-icon">{service.icon}</div>
                  <h3 className="service-feature-title">{service.title}</h3>
                  <p className="service-feature-desc">{service.desc}</p>

                  <div className="service-checklist">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="service-check-item">
                        <CheckCircle2 size={15} className="text-emerald" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/#contact"
                    className="service-cta-link"
                    onClick={() => {
                      setTimeout(() => {
                        const el = document.getElementById("contact");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }}
                  >
                    <span>Request Service Inquiry</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              ))}
            </div>

            {/* INTERACTIVE SCOPE & TIMELINE ESTIMATOR */}
            <div className="estimator-container">
              <div className="estimator-card glass-card">
                <div className="estimator-header">
                  <div className="estimator-icon-box">
                    <Calculator size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="estimator-title">Interactive Project Scope & Timeline Estimator</h3>
                    <p className="estimator-subtitle">
                      Select your project scope to get an estimated delivery timeframe.
                    </p>
                  </div>
                </div>

                <div className="estimator-body">
                  <div className="estimator-options">
                    <label className="estimator-label">Select Service Domain:</label>
                    <div className="estimator-pills-row">
                      {serviceOfferings.slice(0, 4).map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => handleCalculate(s.id, selectedUrgency)}
                          className={`estimator-pill ${selectedService === s.id ? "active" : ""}`}
                        >
                          {s.title.split(" ")[0]} {s.title.split(" ")[1]}
                        </button>
                      ))}
                    </div>

                    <label className="estimator-label" style={{ marginTop: "16px" }}>
                      Project Pace & Delivery Mode:
                    </label>
                    <div className="estimator-pills-row">
                      <button
                        type="button"
                        onClick={() => handleCalculate(selectedService, "standard")}
                        className={`estimator-pill ${selectedUrgency === "standard" ? "active" : ""}`}
                      >
                        Standard Production
                      </button>
                      <button
                        type="button"
                        onClick={() => handleCalculate(selectedService, "rush")}
                        className={`estimator-pill ${selectedUrgency === "rush" ? "active" : ""}`}
                      >
                        ⚡ Accelerated Sprint
                      </button>
                    </div>
                  </div>

                  <div className="estimator-result-box">
                    <span className="result-label">Estimated Completion:</span>
                    <div className="result-time-row">
                      <Clock size={20} className="text-primary" />
                      <span className="result-time">{estimatedTime}</span>
                    </div>
                    <p className="result-sub">
                      Includes comprehensive testing, responsive UI, database schema integration, and deployment support.
                    </p>
                    <Link
                      to="/#contact"
                      className="btn btn-primary btn-block"
                      onClick={() => {
                        setTimeout(() => {
                          const el = document.getElementById("contact");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                      }}
                    >
                      <span>Discuss This Project With Selamsew</span>
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}

export default Services;
