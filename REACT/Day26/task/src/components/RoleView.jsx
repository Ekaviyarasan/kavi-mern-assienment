import { useApp } from "../context/AppContext";

const Admin = () => <h2>Dashboard</h2>;
const User = () => <h2>Profile</h2>;

export default function RoleView() {
  const { role } = useApp();

  return role === "admin" ? <Admin /> : <User />;
}