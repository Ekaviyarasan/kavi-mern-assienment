import { useState } from "react";

function Update() {
  const [user, setUser] = useState({
    name: "Sam",
    role: "Developer",
    city: "Delhi"
  });

  const changeCity = () => {
    setUser({ ...user, city: "Chennai" });
  };

  return (
    <div>
      <p>{user.name} - {user.role} - {user.city}</p>
      <button onClick={changeCity}>Change City</button>
    </div>
  );
}

export default Update