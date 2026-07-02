import "./styles/global.css";
import profileImage from "./assets/selamsew.jpg";


function App() {

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      .scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="nav-links">

          <button onClick={() => scrollToSection("home")}>
            Home
          </button>

          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          <button onClick={() => scrollToSection("education")}>
            Education
          </button>

          <button onClick={() => scrollToSection("skills")}>
            Skills
          </button>

          <button onClick={() => scrollToSection("projects")}>
            Projects
          </button>

          <button onClick={() => scrollToSection("experience")}>
            Experience
          </button>

          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>

        </div>

      </nav>

      {/* HERO SECTION */}

<section id="home" className="hero">

  <div className="hero-container">

    {/* LEFT SIDE */}

    <div className="hero-content">

      <h3 className="welcome-text">
        Welcome To Selamsew Portfolio
      </h3>

      <h1>
        SELAMSEW ALEMU
      </h1>

      <h2>
        Electrical and Computer Engineer
      </h2>

      <p>
        Full Stack Web Developer, ERP System Support Specialist,
        Database Administrator, and Computer Engineering Graduate
        from Debre Markos University specialized in
        Computer Engineering.
      </p>

      <div className="hero-buttons">

        <button
          className="hero-btn"
          onClick={() => scrollToSection("projects")}
        >
          View Projects
        </button>

        <button
          className="hero-btn-secondary"
          onClick={() => scrollToSection("contact")}
        >
          Contact Me
        </button>

      </div>

    </div>

    {/* RIGHT SIDE IMAGE */}

    <div className="hero-image">

      <img
        src={profileImage}
        alt="Selamsew Alemu"
      />

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
              I am a motivated and passionate Computer Engineer
              with strong experience in Full Stack Web Development,
              ERP System Support, Database Administration,
              and IT Technical Support.
            </p>

            <p>
              I develop modern international websites using
              React JS, Node.js, Express.js, MongoDB,
              and responsive UI technologies.
            </p>

          </div>

         <div className="about-card">

  <h2>Career Objective</h2>

  <p>
    Motivated Software Developer with a solid background in computer engineering 
    and a strong passion for software development, ERP systems, 
    and digital transformation. Seeking to contribute innovative ideas, 
    technical expertise, and collaborative skills to organizations focused 
    on technology-driven solutions, system improvement, 
    and modern application development in competitive global environments.
  </p>

</div>

        </div>

      </section>

     {/* EDUCATION */}
<section id="education" className="education">

  <h1>Educational Background</h1>

  <div className="education-card">

    <h2>
      Debre Markos University
    </h2>

    <h3>
      Bachelor Degree in Electrical and Computer Engineering
    </h3>

    <p>
      Specialization: Computer Engineering
    </p>

    <p>
      Graduation Year: 2024 G.C
    </p>

    <p>
      Completed undergraduate studies in Computer Engineering with comprehensive knowledge of computer systems, software development, networking technologies, and digital system design. Gained practical experience through academic projects, technical research, and hands-on laboratory work.
    </p>

    <p>
      Academic coursework included Programming, Web Application Development, Database Management Systems, Computer Networks, Embedded Systems, Software Engineering, Operating Systems, Computer Architecture, Data Communication, and System Analysis & Design.
    </p>

  </div>

</section>

      {/* SKILLS */}
      <section id="skills" className="skills">

        <h1>Technical Skills</h1>

        <div className="skill-container">

          <div className="card">
            <h2>Frontend Development</h2>
            <p>
              Skilled in React JS, HTML5, CSS3, JavaScript, and Responsive Design with expertise in building dynamic, mobile-friendly,
               and scalable frontend applications using modern UI/UX principles and reusable components.
            </p>
          </div>

          <div className="card">
            <h2>Backend Development</h2>
            <p>
               Skilled in Node.js, Express.js, and REST API development with experience in backend systems,
                database management, authentication, and scalable web application development.
            </p>
          </div>

          <div className="card">
            <h2>Database Systems</h2>
            <p>
              Skilled in MongoDB and MySQL with experience in database design, data management, 
              query optimization, and maintaining secure and efficient database systems for web applications.
            </p>
          </div>

          <div className="card">
            <h2>ERP Systems</h2>
            <p>
              Skilled in ERP systems support and administration,
               including user support, technical troubleshooting, 
              system maintenance, data handling, report management, 
              and assisting users to ensure smooth and efficient business operations.
            </p>
          </div>

          <div className="card">
            <h2>Programming</h2>
            <p>
              Skilled in programming languages including JavaScript, C++, Java, 
              and Basic Python with experience in software development,
               problem-solving, debugging, object-oriented programming, 
               and building efficient applications for web and system-based projects.
            </p>
          </div>

          <div className="card">
            <h2>Networking</h2>
            <p>
              Skilled in Computer Networking, 
              System Troubleshooting, and Technical Support with experience in network configuration, 
              diagnosing hardware and software issues, maintaining system performance, 
              and providing effective technical solutions for users and organizations.
            </p>
          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">

        <h1>Projects</h1>

        <div className="project-container">

          <div className="project-card">

            <h2>Fuel Management System</h2>

            <p>
              Developed a complete full stack Fuel Purchase
              and Consumption Management System
              using React JS and Node.js.
            </p>

          </div>

          <div className="project-card">

            <h2>International Portfolio Website</h2>

            <p>
              Created responsive international portfolio website
              with multilingual support and modern UI design.
            </p>

          </div>

          <div className="project-card">

            <h2>ERP User Support System</h2>

            <p>
              Worked on ERP support,
              database management,
              and user troubleshooting systems.
            </p>

          </div>

        </div>

      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="experience">

        <h1>Work Experience</h1>

        <div className="experience-card">

          <h2>
            ERP integrate/implemtation and User Support
          </h2>

          <p>
            Experience in ERP System support,
            database administration,
            troubleshooting,
            and technical user assistance.
          </p>

          <p>
            Assisted users in solving ERP related issues,
            managing records,
            and improving system operations.
          </p>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">

        <h1>Contact Me</h1>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="4"
            placeholder="Write your message..."
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <h2>
          Selamsew Alemu
        </h2>

        <p>
          Electrical and Computer Engineer
        </p>

        <p>
         Junior Full Stack Developer | ERP system administrator and user support.
        </p>

        <p>
          © 2026 All Rights Reserved
        </p>

      </footer>

    </div>
  );
}

export default App;