import { useState } from "react";

function Taggle() {
  const [status, setStatus] = useState(true);

  const toggleStatus = () => {
    setStatus(!status);
  };

  return (
    <div>
      <h2>{status ? "Online" : "Offline"}</h2>

      <button onClick={toggleStatus}>
        Toggle Status
      </button>
    </div>
  );
}

export default Taggle;