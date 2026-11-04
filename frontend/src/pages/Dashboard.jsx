import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Activity,
  Layers,
  CheckCircle2,
  Server,
  Database,
  RefreshCw,
} from "lucide-react";

function Dashboard() {
  const [lastRefreshed, setLastRefreshed] = useState("Just now");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const metrics = [
    {
      label: "ERP System Availability",
      val: "Continuous",
      change: "Optimal",
      sub: "Active High-Availability",
      icon: <Server size={22} className="text-cyan" />,
    },
    {
      label: "Technical Support CSAT",
      val: "Top Tier",
      change: "4.9 / 5.0",
      sub: "Tier-1/2 User Support",
      icon: <CheckCircle2 size={22} className="text-emerald" />,
    },
    {
      label: "Database Integrity & Backups",
      val: "Verified",
      change: "Daily Verified",
      sub: "PostgreSQL & MySQL",
      icon: <Database size={22} className="text-amber" />,
    },
    {
      label: "Production Web Applications",
      val: "14+",
      change: "Active Stacks",
      sub: "Ekub Circle, ERP & Web",
      icon: <Layers size={22} className="text-purple" />,
    },
  ];

  const serverTelemetry = [
    { name: "Node.js API Microservice (Ekub Circle)", status: "Operational", uptime: "Online", latency: "24ms", load: "Optimal" },
    { name: "PostgreSQL Production Cluster", status: "Operational", uptime: "Online", latency: "12ms", load: "Normal" },
    { name: "Enterprise ERP Application Server", status: "Operational", uptime: "Online", latency: "42ms", load: "Normal" },
    { name: "MySQL Relational Datastore", status: "Operational", uptime: "Online", latency: "15ms", load: "Optimal" },
    { name: "Automated Daily Backup Pipeline", status: "Completed", uptime: "Active", latency: "--", load: "Idle" },
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastRefreshed("Just now");
    }, 700);
  };

  return (
    <div className="portfolio-app-root">
      <Navbar />
      <main style={{ paddingTop: "76px", minHeight: "85vh" }}>
        <div className="section-container">
          {/* HEADER ROW WITH LIVE BADGE & REFRESH */}
          <div className="dashboard-top-row">
            <div>
              <span className="section-badge">Live Operations Telemetry</span>
              <h1 className="section-title">Engineering Operations Dashboard</h1>
              <p className="section-subtitle">
                Real-time monitoring of enterprise ERP platforms, database integrity, and full-stack software health.
              </p>
            </div>
            <div className="dashboard-refresh-wrap">
              <span className="live-indicator-pill">
                <span className="pulse-dot"></span>
                <span>Systems Healthy ({lastRefreshed})</span>
              </span>
              <button
                type="button"
                onClick={handleRefresh}
                className={`btn btn-secondary ${isRefreshing ? "refreshing" : ""}`}
                title="Refresh system telemetry"
              >
                <RefreshCw size={16} className={isRefreshing ? "spin-icon" : ""} />
                <span>{isRefreshing ? "Refreshing..." : "Refresh Status"}</span>
              </button>
            </div>
          </div>

          {/* METRIC CARDS */}
          <div className="dashboard-metrics-grid">
            {metrics.map((m, i) => (
              <div key={i} className="dashboard-metric-card glass-card">
                <div className="metric-header-row">
                  <span className="metric-icon-wrap">{m.icon}</span>
                  <span className="metric-change-badge">{m.change}</span>
                </div>
                <h3 className="metric-value">{m.val}</h3>
                <p className="metric-label">{m.label}</p>
                <small className="metric-sub-text">{m.sub}</small>
              </div>
            ))}
          </div>

          {/* TELEMETRY TABLE */}
          <div className="dashboard-panel glass-card" style={{ marginBottom: "30px" }}>
            <div className="panel-header">
              <Server size={20} className="text-primary" />
              <h3 className="text-primary">Core Infrastructure &amp; Application Telemetry</h3>
            </div>
            <div className="table-responsive">
              <table className="telemetry-table">
                <thead>
                  <tr>
                    <th>Service Component</th>
                    <th>Status</th>
                    <th>Uptime</th>
                    <th>Avg Latency</th>
                    <th>CPU / IO Load</th>
                  </tr>
                </thead>
                <tbody>
                  {serverTelemetry.map((s, idx) => (
                    <tr key={idx}>
                      <td>
                        <strong>{s.name}</strong>
                      </td>
                      <td>
                        <span className="status-badge status-healthy">
                          <span className="status-bullet"></span>
                          {s.status}
                        </span>
                      </td>
                      <td>{s.uptime}</td>
                      <td>{s.latency}</td>
                      <td>{s.load}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ACTIVITY FEED */}
          <div className="dashboard-panel glass-card">
            <div className="panel-header">
              <Activity size={20} className="text-primary" />
              <h3>Recent System & Maintenance Log</h3>
            </div>
            <ul className="activity-feed">
              <li className="activity-item">
                <span className="activity-dot bg-emerald"></span>
                <div>
                  <strong>ERP platform database maintenance routine executed</strong>
                  <p>Database backup verified, query cache purged, zero downtime observed.</p>
                </div>
                <small className="activity-time">Today, 08:30 AM</small>
              </li>
              <li className="activity-item">
                <span className="activity-dot bg-cyan"></span>
                <div>
                  <strong>Ekub Circle PostgreSQL relational ledger verified</strong>
                  <p>Automated lottery round completed with Socket.io real-time broadcast integrity.</p>
                </div>
                <small className="activity-time">Yesterday, 14:15 PM</small>
              </li>
              <li className="activity-item">
                <span className="activity-dot bg-purple"></span>
                <div>
                  <strong>Addis Ababa University Software Initiative sprint review</strong>
                  <p>Presented modular REST architecture and responsive Tailwind CSS v4 components.</p>
                </div>
                <small className="activity-time">2 days ago</small>
              </li>
              <li className="activity-item">
                <span className="activity-dot bg-amber"></span>
                <div>
                  <strong>Network topology configuration & switch audit</strong>
                  <p>Configured department VLANs and verified DHCP failover routing.</p>
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
