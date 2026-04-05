import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const login = () => {
    dispatch({ type: "LOGIN", payload: { name: "User" } });
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={login}>Login</button>
    </div>
  );
}