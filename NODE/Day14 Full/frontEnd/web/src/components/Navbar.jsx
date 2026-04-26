import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="flex justify-between p-4 bg-gray-200">
      <h2>My App</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}