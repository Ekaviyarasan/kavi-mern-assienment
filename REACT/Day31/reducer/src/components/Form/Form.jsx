import React, { useReducer } from "react";
import { FormReducer, initialFormState } from "./Formreducer";

export default function Form() {
  const [form, dispatch] = useReducer(FormReducer, initialFormState);

  const handleChange = (e) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
      <input name="password" value={form.password} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}