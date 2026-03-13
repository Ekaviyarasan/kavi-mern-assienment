import { useState } from "react";

function Nonpri() {
  const [user, setUser] = useState({
    name: "Ravi",
    age: 22,
    city: "Chennai"
  });

  const increaseAge = () => {
    setUser({
      ...user,
      age: user.age + 1
    });
  };

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
      <h2>City: {user.city}</h2>

      <button onClick={increaseAge}>
        Increase Age
      </button>
    </div>
  );
}

export default Nonpri;