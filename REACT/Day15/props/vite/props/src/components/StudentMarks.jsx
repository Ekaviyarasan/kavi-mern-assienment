function StudentMarks({ students }) {
  return (
    <div>
      <h2>Student Results</h2>
      {students.map((student, index) => {
        const result = student.marks >= 40 ? "Pass" : "Fail";

        return (
          <p key={index}>
            {student.name} - {student.marks} - {result}
          </p>
        );
      })}
    </div>
  );
}

export default StudentMarks;