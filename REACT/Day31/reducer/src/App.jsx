import Counter from "./components/counter/Counter";
import Form from "./components/Form/Form";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>My Reducer Practice App</h1>

      <section>
        <h3>Counter</h3>
        <Counter/>
      </section>

      <section>
        <h3>Form</h3>
        <Form/>
      </section>

      <section>
        <h3>Todo</h3>
        <Todo/>
      </section>
    </div>
  );
} 
export default App