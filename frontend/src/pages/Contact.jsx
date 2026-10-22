import Navbar from "../components/Navbar";
import ContactSection from "../components/Contact";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="portfolio-app-root">
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
