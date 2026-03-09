function EmployeeProfile({ employee }) {
  return (
    <div style={{ border: "1px solid black", padding: 20, width: 250 }}>
      <h3>{employee.name}</h3>
      <p>Role: {employee.role}</p>
      <p>Location: {employee.location}</p>
    </div>
  );
}

export default EmployeeProfile;