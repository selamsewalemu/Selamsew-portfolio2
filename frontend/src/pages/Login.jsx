import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Navbar />

      <section className="page-section">
        <div className="container">

          <h1>User Login</h1>

          <form className="login-form">

            <input
              type="email"
              placeholder="Enter Email"
            />

            <input
              type="password"
              placeholder="Enter Password"
            />

            <button type="submit">
              Login
            </button>

          </form>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Login;