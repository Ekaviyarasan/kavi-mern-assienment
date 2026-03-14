import { useState } from "react";

function Button() {
  const [name, setName] = useState("kavi")

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={() => setName("David")}>
        Change Name
      </button>
    </div>
  );
}
export default Button