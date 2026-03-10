import { Link } from "react-router-dom";

function Navber() {
  return (
    <div className="bg-blue-500 text-white p-4 flex gap-4">
        
      <Link to="/" >Home</Link>
      <Link to="/Content">Content</Link>
      <Link to="/About">About</Link>
    </div>
  );
}

export default Navber;