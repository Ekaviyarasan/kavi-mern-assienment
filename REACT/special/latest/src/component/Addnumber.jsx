import { useState } from "react";

function Addnumber() {
  const [numbers, setNumbers] = useState([1, 2, 3]);

  const addNumber = () => {
    setNumbers([...numbers, numbers.length + 1]);
  };

  return (
    <div>
      {numbers.map((num, i) => (
        <p key={i}>{num}</p>
      ))}

      <button onClick={addNumber}>Add Number</button>
    </div>
  );
}

export default Addnumber