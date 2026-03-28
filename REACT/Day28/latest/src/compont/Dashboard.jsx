// Dashboard.js
import React, { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      window.location.href = "/";
    }
  }, []);

  return <h1>Welcome to Dashboard</h1>;
}

export default Dashboard;