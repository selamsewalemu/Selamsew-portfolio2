import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="page-section">
        <div className="container">

          <h1>Contact Me</h1>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Enter your name"
            />

            <input
              type="email"
              placeholder="Enter your email"
            />

            <textarea
              placeholder="Write your message"
              rows="4"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;