import React, { useReducer, useState } from "react";
import { todoReducer, initialTodoState } from "./todoreducer";

export default function Todo() {
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  return (
    <div>
      <h2>Todo App</h2>

      {/* Add Todo */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>Add</button>

      {/* Todo List */}
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>
            {state.editIndex === index ? (
              <>
                <input
                  value={state.editValue}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_EDIT_VALUE",
                      payload: e.target.value,
                    })
                  }
                />

                <button
                  onClick={() =>
                    dispatch({ type: "UPDATE_TODO" })
                  }
                >
                  Update
                </button>

                <button
                  onClick={() =>
                    dispatch({ type: "CANCEL_EDIT" })
                  }
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                {todo}

                <button
                  onClick={() =>
                    dispatch({
                      type: "DELETE_TODO",
                      payload: index,
                    })
                  }
                >
                  Delete
                </button>

                <button
                  onClick={() =>
                    dispatch({
                      type: "EDIT_TODO",
                      payload: index,
                    })
                  }
                >
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}