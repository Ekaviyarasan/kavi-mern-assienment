import React, { createContext, useReducer } from "react";
import { cartReducer } from "../reducer/cardReducer";

export const CardContex = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const total = state.items.reduce((sum, item) => sum + item.price, 0);

  return (
    <CardContex.Provider
      value={{ state, dispatch, total, count: state.items.length }}
    >
      {children}
    </CardContex.Provider>
  );
};