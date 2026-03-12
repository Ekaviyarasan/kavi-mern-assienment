import { Link, Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div>
      <h1>Auth Page</h1>

      <nav>
        <Link to="/login">Login</Link> | 
        <Link to="/register">Register</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default AuthLayout;