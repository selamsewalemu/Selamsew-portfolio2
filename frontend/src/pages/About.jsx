import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section className="page-section">
        <div className="container">

          <h1>About Me</h1>

          <p>
            Hello, my name is Selamsew Alemu.
          </p>

          <p>
            I graduated from Debre Markos University
            in Electrical and Computer Engineering
            with specialization in Computer Engineering.
          </p>

          <p>
            I have experience in:
          </p>

          <ul>
            <li>Frontend Development using React</li>
            <li>Backend Development using Node.js and Express</li>
            <li>MongoDB Database Management</li>
            <li>ERP System Support and User Assistance</li>
            <li>International Website Development</li>
            <li>REST API Development</li>
            <li>Responsive Web Design</li>
            <li>Authentication and Security Systems</li>
          </ul>

          <p>
            My goal is to build professional,
            secure, scalable, and international
            web applications for modern businesses.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;