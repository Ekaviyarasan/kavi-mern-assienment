import { Routes, Route } from "react-router-dom";
import Authlayout from "./layout/Authlayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>

      {/* Parent Route */}
      <Route path="/" element={<Authlayout />}>

        {/* Child Routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

      </Route>

      {/* Main Page */}
      <Route path="/home" element={<Home />} />

    </Routes>
  );
}

export default App;