import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Services() {
  return (
    <>
      <Navbar />

      <section className="page-section">
        <div className="container">

          <h1>Our Services</h1>

          <div className="service-card">
            <h2>Frontend Development</h2>

            <p>
              Modern React.js websites with responsive
              and professional user interfaces.
            </p>
          </div>

          <div className="service-card">
            <h2>Backend Development</h2>

            <p>
              Secure backend systems using
              Node.js, Express, and MongoDB.
            </p>
          </div>

          <div className="service-card">
            <h2>International Websites</h2>

            <p>
              Multi-language websites with
              global accessibility support.
            </p>
          </div>

          <div className="service-card">
            <h2>ERP System Support</h2>

            <p>
              ERP user support, troubleshooting,
              and database management services.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Services;