import { useState,useCallback } from "react";
const OptimizedChild = React.memo(({ compute }) => {
  console.log("Child Rendered - Task3");

  return (
    <div>
      <h4>Child Result</h4>
      <p>Square of 7: {compute(7)}</p>
    </div>
  );
});

function Task3() {
  const [theme, setTheme] = useState("light");

  const heavySquare = useCallback((n) => {
    let total = 0;

    // Artificial heavy loop
    for (let i = 0; i < 1000000; i++) {
      total = n * n;
    }

    return total;
  }, []);

  return (
    <div style={{ padding: 15, background: theme === "dark" ? "#000" : "#ddd" }}>
      <h3>Task 3 - useCallback Optimization</h3>

      <button onClick={() => setTheme(t => (t === "light" ? "dark" : "light"))}>
        Toggle Theme
      </button>

      <OptimizedChild compute={heavySquare} />
    </div>
  );
}
export default Task3