import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";
import { useTheme } from "../hooks/useTheme";

export default function Dashboard() {
  const { dispatch: authDispatch } = useAuth();
  const { dispatch, state, total, count } = useCart();
  const { toggleTheme } = useTheme();

  const addItem = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: { id: Date.now(), name: "Item", price: 100 }
    });
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={addItem}>Add Item</button>
      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Clear Cart
      </button>
      <button onClick={() => authDispatch({ type: "LOGOUT" })}>
        Logout
      </button>

      <h3>Cart Count: {count}</h3>
      <h3>Total: {total}</h3>

      {state.items.map(item => (
        <div key={item.id}>
          {item.name} - {item.price}
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: item.id })
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}