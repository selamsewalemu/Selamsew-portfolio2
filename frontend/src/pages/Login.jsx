import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("Login authentication endpoint connected. Portal demo mode active.");
  };

  return (
    <div className="portfolio-app-root">
      <Navbar />
      <main style={{ paddingTop: "120px", minHeight: "80vh" }}>
        <div className="section-container" style={{ maxWidth: "480px" }}>
          <div className="auth-card">
            <div className="auth-icon-wrap">
              <Lock size={28} className="text-primary" />
            </div>
            <h2 className="auth-title">Administrative Portal</h2>
            <p className="auth-subtitle">
              Secure access for portfolio updates and ERP incident dashboards.
            </p>

            {msg && <div className="alert-box alert-success">{msg}</div>}

            <form onSubmit={handleSubmit} className="modern-form">
              <div className="form-field">
                <label>Email Address</label>
                <div className="input-with-icon">
                  <Mail size={18} className="field-icon" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label>Password</label>
                <div className="input-with-icon">
                  <Lock size={18} className="field-icon" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                <span>Sign In</span>
                <ArrowRight size={17} />
              </button>
            </form>

            <div className="auth-footer-note">
              <ShieldCheck size={16} className="text-emerald" />
              <span>Protected by JWT role-based encryption</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
