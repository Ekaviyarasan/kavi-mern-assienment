 import { useState,useMemo } from "react";
function Task2() {
  const generateUsers = () => {
    const arr = [];
    for (let i = 1; i <= 5000; i++) {
      arr.push(`User_${i}`);
    }
    return arr;
  };

  const [users] = useState(generateUsers());
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("light");

  const results = useMemo(() => {
    console.log("Task2 Filtering triggered");

    if (!query) return users;

    return users.filter(u => {
      return u.toLowerCase().startsWith(query.toLowerCase());
    });
  }, [query, users]);

  return (
    <div style={{ padding: 15, background: theme === "dark" ? "#222" : "#fafafa" }}>
      <h3>Task 2 - Optimized Search</h3>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search users"
      />

      <button onClick={() => setTheme(t => (t === "light" ? "dark" : "light"))}>
        Toggle Theme
      </button>

      <p>Matched Users: {results.length}</p>
    </div>
  );
}
export default Task2