import { useApp } from "../context/AppContext";

export default function RoleSwitcher() {
  const { role, setRole } = useApp();

  return (
    <button onClick={() => setRole(role === "admin" ? "user" : "admin")}>
      Switch Role
    </button>
  );
}