import { useState } from "react";


function Taggle() {
  const [dark, setDark] = useState(true)

  return (
    <div>
      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      <h2>{dark ? "Dark Mode Enabled" : "Light Mode Enabled"}</h2>
    </div>
  );
}
export default Taggle