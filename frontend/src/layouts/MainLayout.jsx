import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * MainLayout — wraps page content between Navbar and Footer.
 */
function MainLayout({ children }) {
  return (
    <div className="portfolio-app-root">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
