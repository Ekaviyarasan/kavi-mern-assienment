import React, { useReducer } from "react";
import { counterReducer, initialState } from "./Counterreducer";

export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h2>Counter: {state.count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button onClick={() => dispatch({ type: "INCREMENT_BY_VALUE", payload: 5 })}>
        +5
      </button>
    </div>
  );
}