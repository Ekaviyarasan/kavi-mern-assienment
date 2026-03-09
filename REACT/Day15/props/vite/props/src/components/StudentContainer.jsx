import StudentMarks from "./StudentMarks";

function StudentContainer() {
  const students = [
    { name: "John", marks: 75 },
    { name: "Sara", marks: 35 },
    { name: "Mike", marks: 60 }
  ];

  return <StudentMarks students={students} />;
}

export default StudentContainer;