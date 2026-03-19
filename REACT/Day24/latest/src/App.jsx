import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/docs/products")
      .then(res => res.json())
      .then(data => setData(data.products));
  }, [data]);

  return <h1>{JSON.stringify(data.products)}</h1>
}
export default App



// useEffect (React Hook)

// useEffect is a hook in React used to run side effects in your component.

// What is a “side effect”?

// Anything that happens outside rendering UI, like:

// Fetching data from an API

// Updating the DOM manually

// Setting up timers

// Subscribing to events

// Example:
// import { useEffect } from "react";

// useEffect(() => {
//   console.log("Component rendered!");
// });



// 2. Dependency Array

// The dependency array is the second argument of useEffect.

// useEffect(() => {
//   console.log("Runs when count changes");
// }, [count]);
// What it does:

// Controls when the effect runs

// React watches the values inside the array

// Behavior:

// [count] → runs when count changes

// [a, b] → runs when a or b changes





// 3. Without Dependency Array

// If you don’t pass a dependency array:

// useEffect(() => {
//   console.log("Runs every time");
// });
// Result:

// Runs after every render

// Can cause performance issues

// Can create infinite loops if you update state inside it




// 4. Empty Dependency Array ([])
// useEffect(() => {
//   console.log("Runs only once");
// }, []);
// Result:

// Runs only once (when component mounts)

// Similar to componentDidMount in class components





// 5. What is fetch?

// fetch is a JavaScript API used to make HTTP requests (get data from servers).

// Example:
// fetch("https://api.example.com/data")
//   .then(response => response.json())
//   .then(data => console.log(data));