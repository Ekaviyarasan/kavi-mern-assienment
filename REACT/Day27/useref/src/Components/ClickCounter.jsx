import React, { useRef } from "react";

function ClickCounter() {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1;
    console.log("Count:", countRef.current);
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default ClickCounter;