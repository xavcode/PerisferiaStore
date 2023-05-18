import React from 'react'
import { createContext, useState } from "react";
import { FooterCart } from "../components/footerCart";
// import { Products } from "../components/Products";
// import { cartReducer, cartInitialState } from "../reducer/cart";

export const CartContext = createContext()

// function useCartReducer() {
//   const [state, dispatch] = useReducer(cartReducer, cartInitialState);//El estado y la accion | Estado inicial
//   const addToCart = (Product) =>{
// dispatch({
//   type: "ADD_TO_CART",
//   payload: Product,
// }

//   const removeFromCart = (Product) =>
//     dispatch({
//       type: "REMOVE_FROM_CART",
//       payload: Product,
//     });

//   const clearCart = () => dispatch({ type: "CLEAR_CART" });

//   return { state, addToCart, removeFromCart, clearCart}
// } 

export function CartProvider({ children }) {
  //   const {  state, addToCart, removeFromCart, clearCart } = useCartReducer()
  const [cart, setCart] = useState([])

  const addToCart = (Product) => {
  const productInCartIndex = cart.findIndex((i) => i.id === Product.id);

    if (productInCartIndex > 0) {//Si lo encuentra en el carrito
      const newCart = structuredClone(cart)//Hago un nuevo carrito
                                          //structuredClone: Hace copias profundas de los obj y array
      newCart[productInCartIndex].quantity += 1;//y icrementamos la cantidad
      return setCart(newCart)
    }
    
    //Si el producto no esta en el carrito
    setCart (prevState => ([
        ...prevState,
        { 
          ...Product,
          quantity: 1,
        },
      ]))

  };

  const clearCart = () => {(setCart([]))};

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
