import { useState } from "react";

function Event() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <h3>{count % 2 === 0 ? "Even" : "Odd"}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Event