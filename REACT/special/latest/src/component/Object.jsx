import { useState } from "react";

function Object() {
  const [person, setPerson] = useState({
    name:"arasan",
    age:23
  })
  const updateAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  return (
    <div>
      <p>{person.name} - {person.age}</p>
      <button onClick={updateAge}>Increase Age</button>
    </div>
  );
}

export default Object