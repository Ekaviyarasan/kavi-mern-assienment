import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtuctRoute({ children }) {
  const { state } = useAuth();
  return state.isLoggedIn ? children : <Navigate to="/" />;
}