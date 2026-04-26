import { Navigate } from "react-router-dom";

export default function ProductedRoute({ children }) {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}