import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductRoute from "../components/ProductRoute";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Dashboard = lazy(() => import("../pages/Dashboard"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/dashboard"
            element={
              <ProductRoute>
                <Dashboard />
              </ProductRoute>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}