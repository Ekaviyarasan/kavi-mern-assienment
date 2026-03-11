import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import DashboardHome from "./Components/DashboardHome";
import Profile from "./Components/Profile";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          
        </Route>
<Route>
  <Route path="/product" element={<Product />} />
      
        <Route path="/product/:id" element={<ProductDetail />} />

</Route>
  
      </Routes>
  
  );
}

export default App;