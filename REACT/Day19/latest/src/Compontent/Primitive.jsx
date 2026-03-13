import { useState } from "react";

function Primitive() {
  const [user, setUser] = useState({
    name: "John",
    age: 25
  });

  const updateName = () => {
    setUser({
      ...user,
      name: "Sudhan"
    });
  };

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>

      <button onClick={updateName}>Update Name</button>
    </div>
  );
}

export default Primitive