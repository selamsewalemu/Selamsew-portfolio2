import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <section className="page-section">
        <div className="container">

          <h1>Dashboard</h1>

          <p>
            Welcome to the admin dashboard.
          </p>

          <div className="dashboard-card">
            <h2>Total Users</h2>
            <p>120</p>
          </div>

          <div className="dashboard-card">
            <h2>Total Services</h2>
            <p>15</p>
          </div>

          <div className="dashboard-card">
            <h2>Total Messages</h2>
            <p>40</p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Dashboard;