import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/Cart";

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }

  return context;
};