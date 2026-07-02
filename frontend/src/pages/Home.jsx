import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="home-section">
        <div className="container">
          <h2>Welcome To My International Website</h2>

          <p>
            My name is Selamsew Alemu. I am a junior Full Stack Developer,
            ERP System Support Specialist, and Computer Engineer.
          </p>

          <p>
            I graduated from Debre Markos University in Electrical
            and Computer Engineering with specialization in
            Computer Engineering.
          </p>

          <p>
            I am passionate about software development,
            international web applications, database systems,
            ERP support systems, and modern technologies.
          </p>

          <p>
            This international website supports multiple languages
            and provides professional digital services for clients
            worldwide.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;