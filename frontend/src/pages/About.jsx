import Navbar from "../components/Navbar";
import AboutSection from "../components/About";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="portfolio-app-root">
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default About;
