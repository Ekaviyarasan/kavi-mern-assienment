import { useApp } from "./context/AppContext";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import LanguageToggle from "./components/LanguageToggle";
import Greeting from "./components/Greeting";
import Cart from "./components/Cart";
import RoleSwitcher from "./components/RoleSwitcher";
import RoleView from "./components/RoleView";
import Nav from "./components/Nav";

export default function App() {
  const { theme } = useApp();

  return (

    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        height: "100vh",
        padding: "20px",
      }}
    >

      
        



      
      <Navbar />
      <ThemeToggle />
      <LanguageToggle />
      <Greeting />
      <Cart />
      <RoleSwitcher />
      <RoleView />

      
      
    </div>
  );
}


