import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        type="email"
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <p>Name: {form.name}</p>
      <p>Email: {form.email}</p>
    </div>
  );
}
export default Form