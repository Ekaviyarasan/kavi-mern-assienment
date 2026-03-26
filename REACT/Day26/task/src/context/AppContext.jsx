import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("en");
  const [cartCount, setCartCount] = useState(0);
  const [role, setRole] = useState("user");

  return (
    <AppContext.Provider
      value={{ theme, setTheme, lang, setLang, cartCount, setCartCount, role, setRole }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);