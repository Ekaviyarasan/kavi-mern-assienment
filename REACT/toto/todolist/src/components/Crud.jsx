import React, { useState } from "react";

const Crud = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Input Change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Add & Update
  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name === "" || form.email === "") return;

    if (editIndex === null) {
      // Add
      setList([...list, form]);
    } else {
      // Update
      const newList = [...list];
      newList[editIndex] = form;
      setList(newList);
      setEditIndex(null);
    }

    setForm({
      name: "",
      email: "",
    });
  };

  // Edit
  const handleEdit = (index) => {
    setForm(list[index]);
    setEditIndex(index);
  };

  // Delete
  const handleDelete = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>React CRUD</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        />

        <button type="submit">
          {editIndex === null ? "Add" : "Update"}
        </button>
      </form>

      <hr />

      {list.map((item, index) => (
        <div key={index}>
          <h3>Name : {item.name}</h3>
          <h4>Email : {item.email}</h4>

          <button onClick={() => handleEdit(index)}>
            Edit
          </button>

          <button onClick={() => handleDelete(index)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Crud;