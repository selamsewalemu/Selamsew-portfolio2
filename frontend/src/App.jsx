import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Languages from "./components/Languages";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="portfolio-app-root">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Languages />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
