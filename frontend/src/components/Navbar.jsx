import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Selamsew Alemu
      </div>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/services">Services</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/login">Login</Link>

      </div>

      <LanguageSwitcher />

    </nav>
  );
}

export default Navbar;