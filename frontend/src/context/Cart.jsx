import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { cartReducer, cartInitialState } from "../reducer/cart";

export const CartContext = createContext();

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);//El estado y la accion | Estado inicial
  const addToCart = (Product) => dispatch({
  type: "ADD_TO_CART",
  payload: Product,
})

  const removeFromCart = (Product) => dispatch({
      type: "REMOVE_FROM_CART",
      payload: Product,
    });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return { state, addToCart, removeFromCart, clearCart}
}

export function CartProvider({ children }) {
  const {  state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
