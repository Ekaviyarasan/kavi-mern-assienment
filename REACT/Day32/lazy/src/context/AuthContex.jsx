import React, { createContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducer/authReducer";

export const AuthContex = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isLoggedIn: !!localStorage.getItem("user")
  });

  useEffect(() => {
    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
    } else {
      localStorage.removeItem("user");
    }
  }, [state.user]);

  return (
    <AuthContex.Provider value={{ state, dispatch }}>
      {children}
    </AuthContex.Provider>
  );
};