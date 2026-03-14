import { useState } from "react";

function Login() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        Toggle Login
      </button>

      {loggedIn ? <h2>Welcome User</h2> : <h2>Please Login</h2>}
    </div>
  );
}
export default Login