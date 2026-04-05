import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "./context/TheamContext";
import { AuthProvider } from "./context/AuthContex";
import { CartProvider } from "./context/CardContex";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}