import { useState } from "react";

function Update() {
  const [user, setUser] = useState({
    name: "John",
    age: 25
  });

  const increaseAge = () => {
    setUser(prev => ({
      ...prev,
      age: prev.age + 1,
       name:"kavi"
    }));
  };

  return (
    <div>
      <h3>{user.name}</h3>
      <p>Age: {user.age}</p>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}

export default Update;