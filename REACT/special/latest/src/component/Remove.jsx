import { useState } from "react";

function Remove() {
  const [items, setItems] = useState(["A", "B", "C"]);

  const removeLast = () => {
    setItems(items.slice(0, -1));
  };

  return (
    <div>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <button onClick={removeLast}>Remove Last</button>
    </div>
  );
}

export default Remove