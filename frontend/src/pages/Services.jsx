import Navbar from "../components/Navbar";
import SkillsSection from "../components/Skills";
import Footer from "../components/Footer";
import { Layers, Server, Globe2, ShieldCheck, Database, Wrench } from "lucide-react";

function Services() {
  const serviceOfferings = [
    {
      icon: <Layers size={28} className="text-primary" />,
      title: "ERP Platform Implementation & Administration",
      desc: "End-to-end deployment, user management, database cross-mapping, troubleshooting, and enterprise workflow optimization.",
    },
    {
      icon: <Server size={28} className="text-cyan" />,
      title: "Full-Stack Web Development (MERN)",
      desc: "Custom high-speed web applications engineered using React 19, Node.js, Express, and MongoDB with secure REST APIs.",
    },
    {
      icon: <Database size={28} className="text-emerald" />,
      title: "Database Administration & Optimization",
      desc: "Schema modeling, query performance tuning, automated backup schedules, data normalization, and integrity audits in MySQL and MongoDB.",
    },
    {
      icon: <Globe2 size={28} className="text-purple" />,
      title: "Internationalization (i18n) & UI/UX Design",
      desc: "Multilingual websites (English, Amharic, French), mobile-responsive architecture, dark/light themes, and accessibility compliance.",
    },
    {
      icon: <ShieldCheck size={28} className="text-amber" />,
      title: "IT Infrastructure & Technical User Support",
      desc: "Network topology configuration, router/switch diagnostics, hardware maintenance, and 1st/2nd-tier enterprise support.",
    },
    {
      icon: <Wrench size={28} className="text-rose" />,
      title: "Systems Automation & API Integration",
      desc: "Automated bash/Python scripts, third-party service connections (Brevo/Stripe), and transactional notification pipelines.",
    },
  ];

  return (
    <div className="portfolio-app-root">
      <Navbar />
      <main style={{ paddingTop: "100px" }}>
        <section className="section-padding">
          <div className="section-container">
            <div className="section-header text-center">
              <span className="section-badge">Professional Capabilities</span>
              <h1 className="section-title">Engineering Services & Solutions</h1>
              <p className="section-subtitle">
                High-impact software development, ERP administration, and IT infrastructure services tailored for modern enterprises.
              </p>
            </div>

            <div className="services-showcase-grid">
              {serviceOfferings.map((service, idx) => (
                <div key={idx} className="service-feature-card">
                  <div className="service-feature-icon">{service.icon}</div>
                  <h3 className="service-feature-title">{service.title}</h3>
                  <p className="service-feature-desc">{service.desc}</p>
                </div>
              ))}
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
