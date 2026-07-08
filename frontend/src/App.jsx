import "./styles/global.css";
import profileImage from "./assets/selamsew.jpg";

function App() {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-links">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("education")}>Education</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("experience")}>Experience</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h3 className="welcome-text">Welcome to Selamsew Portfolio</h3>
            <h1>SELAMSEW ALEMU</h1>
            <h2>Electrical and Computer Engineer</h2>
            <p className="hero-description">
              Specializing in Computer Engineering to bridge the gap between low-level hardware architecture and scalable software systems. Expert in architecting full-stack web solutions, optimizing robust database environments, and managing enterprise-level ERP deployments designed for international reliability and high-performance automation.
            </p>
            <div className="hero-buttons">
              <button className="hero-btn" onClick={() => scrollToSection("projects")}>
                Explore Projects
              </button>
              <button className="hero-btn-secondary" onClick={() => scrollToSection("contact")}>
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img src={profileImage} alt="Selamsew Alemu" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <h1>About Me</h1>
        <div className="about-container">
          <div className="about-card">
            <h2>Professional Summary</h2>
            <p>
              I am a results-driven Computer Engineer with multifaceted expertise spanning Full-Stack Web Development, ERP System Administration, and IT Infrastructure Support. I bridge the gap between complex engineering hardware/software architectures and real-world business optimization.
            </p>
            <p>
              Leveraging modern frameworks like React, Node.js, Express, and MongoDB, I engineer responsive, high-performance web applications tailored for global scalability and seamless user experiences.
            </p>
          </div>
          <div className="about-card">
            <h2>Career Objective</h2>
            <p>
              Ambitious Software Engineer seeking to leverage a strong foundational background in computer systems, digital transformation, and ERP optimization within a dynamic, innovation-forward organization. Dedicated to driving engineering excellence, implementing scalable system architecture, and contributing to high-impact global applications.
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="education">
        <h1>Educational Background</h1>
        <div className="education-card">
          <h2>Debre Markos University</h2>
          <h3>Bachelor of Science in Electrical & Computer Engineering</h3>
          <p className="spec-tag"><strong>Specialization: Computer Engineering</strong></p>
          <p className="grad-tag"><strong>Graduation: 2024 G.C.</strong></p>
          <p>
            Completed a comprehensive curriculum focused on computer architectures, advanced system designs, software engineering principles, and data communications. Actively engaged in collaborative laboratory work, technical research initiatives, and end-to-end software prototyping.
          </p>
          <p className="coursework-text">
            Core Coursework: Object-Oriented Programming, Full-Stack Web Application Development, Database Management Systems (DBMS), Advanced Computer Networks, Embedded Systems, Operating Systems, Data Communication, and Systems Analysis & Design.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills">
        <h1>Technical Expertise</h1>
        <div className="skill-container">
          <div className="card">
            <h2>Frontend Engineering</h2>
            <p>Proficient in React.js, JavaScript (ES6+), HTML5, and CSS3. Specialized in building fluid, user-centric interfaces employing responsive design, modern UI/UX principles, and reusable components.</p>
          </div>
          <div className="card">
            <h2>Backend Engineering</h2>
            <p>Experienced in designing robust backend systems with Node.js and Express.js. Capable of architecting modular microservices and secure, structured RESTful API layers.</p>
          </div>
          <div className="card">
            <h2>Database Management</h2>
            <p>Skilled in structural schema design, relational and non-relational environments (MongoDB, MySQL), complex query optimization, and implementing strict data integrity constraints.</p>
          </div>
          <div className="card">
            <h2>ERP Systems Architecture</h2>
            <p>Demonstrated capability in technical ERP support, platform deployment, database cross-mapping, troubleshooting configurations, and optimizing data pipelines to streamline enterprise business workflows.</p>
          </div>
          <div className="card">
            <h2>Systems Programming</h2>
            <p>Comprehensive understanding of algorithmic logic and Object-Oriented Programming (OOP) architectures across JavaScript, C++, Java, and Python.</p>
          </div>
          <div className="card">
            <h2>Network & Infrastructure</h2>
            <p>Knowledgeable in local networking topographies, structural system configurations, technical troubleshooting diagnostics, and provisioning enterprise-level hardware/software technical solutions.</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <h1> Projects</h1>
        <div className="project-container">
          <div class="project-card">
  <h3>Budget Expense Management System (Final Graduation Project)</h3>
  <p><em>Debre Markos University</em></p>
  <p>Architected and developed an automated, end-to-end full-stack web application designed to streamline departmental fund allocations and track real-time institutional expenditures. Built using React.js, Node.js, Express, and MongoDB, featuring dynamic data visualization dashboards for analytical budget reporting and secure role-based authentication.</p>
</div>
          <div className="project-card">
            <h2>Enterprise Fuel Management System</h2>
            <p>Architected and developed an end-to-end full-stack software application for auditing fuel purchase lifecycles and tracking dynamic consumption metrics. Built using React.js, Node.js, Express, and MongoDB.</p>
          </div>
          <div className="project-card">
            <h2>Localized Global Portfolio System</h2>
            <p>Structured an international showcase engine utilizing state-based responsive routing mechanisms alongside dynamic multilingual translation engines to demonstrate absolute UI scalability.</p>
          </div>
          <div className="project-card">
            <h2>ERP Technical Support Pipeline</h2>
            <p>Orchestrated database administration hooks and user troubleshooting schemas to decrease application downtime and enforce enterprise software accessibility.</p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="experience">
        <h1>Experience</h1>
        <div className="experience-card">
          <h2>Systems Administrator, User support officer and Junior Full-Stack Developer</h2>
          <p style={{ marginBottom: "15px" }}>
            <strong>• Full-Stack Web Development:</strong> Architected and contributed to end-to-end web applications using modern stacks (React, Node.js, Express, MongoDB), focusing on building responsive user interfaces, modular backend services, and scalable database schemas.
          </p>
          <p style={{ marginBottom: "15px" }}>
            <strong>• ERP & Database Administration:</strong> Deployed, managed, and optimized corporate Enterprise Resource Planning (ERP) platform lifecycles. Authored and executed systematic database administration scripts to maximize system availability, ensure data integrity, and streamline cross-departmental operations.
          </p>
          <p style={{ marginBottom: "15px" }}>
            <strong>• Hardware, Software & Networking:</strong> Engineered and maintained robust IT infrastructure, provisioning hardware system configurations and troubleshooting local networking topographies to eliminate structural bottlenecks.
          </p>
          <p>
            <strong>• Technical User Support:</strong> Established high-tier technical support pipelines for internal end-users, quickly diagnosing complex platform anomalies and maintaining system logs to guarantee minimal downtime during high-impact migrations.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h1>Contact Me</h1>
        <form className="contact-form" onSubmit={handleFormSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea rows="4" placeholder="Type your message here..." required></textarea>
          <button type="submit">Submit Message</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h2>Selamsew Alemu</h2>
        <p><strong>Electrical & Computer Engineer</strong></p>
        <p>Full-Stack Developer | ERP Systems Administrator</p>
        <p>© 2026 All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;