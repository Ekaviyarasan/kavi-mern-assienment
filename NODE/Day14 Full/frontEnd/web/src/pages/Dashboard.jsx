import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/dashboard")
      .then(res => setData(res.data.data));
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-xl p-4">Dashboard</h1>

      {data.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}