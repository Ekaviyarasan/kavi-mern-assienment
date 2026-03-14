import { useState } from "react";

function Student() {
  const [student, setStudent] = useState({
    name: "Tom",
    marks: 70,
    result: ""
  });

  const checkResult = () => {
    const res = student.marks >= 50 ? "Pass" : "Fail";
    setStudent({ ...student, result: res });
  };

  return (
    <div>
      <p>{student.name}</p>
      <p>Marks: {student.marks}</p>
      <p>Result: {student.result}</p>

      <button onClick={checkResult}>Check Result</button>
    </div>
  );
}
export default Student