import EmployeeProfile from "./EmployeeProfile";

function EmployeeContainer() {
  const employee = {
    name: "John Doe",
    role: "Frontend Developer",
    location: "Chennai"
  };

  return <EmployeeProfile employee={employee} />;
}

export default EmployeeContainer;