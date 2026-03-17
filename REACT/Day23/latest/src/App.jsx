import { useState } from "react";

export default function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save data to display
    setSubmittedData(formData);

    // Still logs to console (optional)
    console.log(formData);
  };

  return (
    <div>
      <h2>User Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label><br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br /><br />

        <label>Email:</label><br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br /><br />

        <label>Age:</label><br />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        /><br /><br />

        <button type="submit">Submit</button>
      </form>

      {/* Display submitted data */}
      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Age:</strong> {submittedData.age}</p>
        </div>
      )}
    </div>
  );
}
































