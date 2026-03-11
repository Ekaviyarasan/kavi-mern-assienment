import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <nav>
        <Link to="/dashboard">Home</Link> |{" "}
        <Link to="/dashboard/profile">Profile</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default Dashboard;