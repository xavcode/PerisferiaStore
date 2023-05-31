import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { cartReducer, cartInitialState } from "../reducer/cart";

export const CartContext = createContext();

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const decreaseQuantity = (product) =>
    dispatch({ type: "DECREASE_QUANTITY", payload: product });

  return {
    state,
    addToCart,
    removeFromCart,
    clearCart,
    decreaseQuantity,
  };
}

export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart, decreaseQuantity } =
    useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
