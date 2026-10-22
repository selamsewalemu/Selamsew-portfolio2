import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { personalInfo } from "../data/portfolioData";
import {
  Activity,
  Layers,
  CheckCircle2,
  Users,
  Server,
  Database,
  ArrowUpRight,
} from "lucide-react";

function Dashboard() {
  const metrics = [
    { label: "ERP Uptime", val: "99.8%", change: "+0.2%", icon: <Server size={22} className="text-cyan" /> },
    { label: "Support Tickets Resolved", val: "150+/mo", change: "98% CSAT", icon: <CheckCircle2 size={22} className="text-emerald" /> },
    { label: "Active Web Projects", val: "12 Systems", change: "Production", icon: <Layers size={22} className="text-purple" /> },
    { label: "Database Transactions", val: "100% Intact", change: "Daily Backup", icon: <Database size={22} className="text-amber" /> },
  ];

  return (
    <div className="portfolio-app-root">
      <Navbar />
      <main style={{ paddingTop: "120px", minHeight: "80vh" }}>
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">Live System Metrics</span>
            <h1 className="section-title">Engineering Operations Dashboard</h1>
            <p className="section-subtitle">
              Real-time monitoring of ERP services, application health, and support velocity.
            </p>
          </div>

          <div className="dashboard-metrics-grid">
            {metrics.map((m, i) => (
              <div key={i} className="dashboard-metric-card">
                <div className="metric-header-row">
                  <span className="metric-icon-wrap">{m.icon}</span>
                  <span className="metric-change-badge">{m.change}</span>
                </div>
                <h3 className="metric-value">{m.val}</h3>
                <p className="metric-label">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="dashboard-panel">
            <div className="panel-header">
              <Activity size={20} className="text-primary" />
              <h3>Recent System & Support Activity</h3>
            </div>
            <ul className="activity-feed">
              <li className="activity-item">
                <span className="activity-dot bg-emerald"></span>
                <div>
                  <strong>ERP platform database maintenance routine executed</strong>
                  <p>Database backup verified, query cache purged, zero downtime observed.</p>
                </div>
                <small className="activity-time">Today</small>
              </li>
              <li className="activity-item">
                <span className="activity-dot bg-cyan"></span>
                <div>
                  <strong>Portfolio multi-language engine updated</strong>
                  <p>English, Amharic, and French localizations verified with React 19.</p>
                </div>
                <small className="activity-time">Yesterday</small>
              </li>
              <li className="activity-item">
                <span className="activity-dot bg-purple"></span>
                <div>
                  <strong>Institutional budget expense module demo deployed</strong>
                  <p>MongoDB aggregation pipelines verified for departmental rollups.</p>
                </div>
                <small className="activity-time">3 days ago</small>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;
