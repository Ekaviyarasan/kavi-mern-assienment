import { useState,useMemo } from "react";
function Task1() {
  const createRandomArray = () => {
    const arr = [];
    for (let i = 0; i < 12; i++) {
      arr.push(Math.floor(Math.random() * 200));
    }
    return arr;
  };

  const [list, setList] = useState(createRandomArray());
  const [theme, setTheme] = useState("light");

  const sortedList = useMemo(() => {
    console.log("Task1 Sorting triggered");

    // Manual sorting (Bubble Sort for uniqueness)
    const temp = [...list];
    for (let i = 0; i < temp.length; i++) {
      for (let j = 0; j < temp.length - i - 1; j++) {
        if (temp[j] > temp[j + 1]) {
          let swap = temp[j];
          temp[j] = temp[j + 1];
          temp[j + 1] = swap;
        }
      }
    }

    return temp;
  }, [list]);

  return (
    <div style={{ padding: 15, background: theme === "dark" ? "#111" : "#eee" }}>
      <h3>Task 1 - Custom Sorting</h3>
      <p>Array: {list.join(" | ")}</p>
      <p>Sorted: {sortedList.join(" | ")}</p>

      <button onClick={() => setList(createRandomArray())}>New Numbers</button>
      <button onClick={() => setTheme(t => (t === "light" ? "dark" : "light"))}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Task1