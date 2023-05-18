import { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'
import React from 'react';

//Creamos un hooks para poder leer el contexto
export const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart debe usarse dentro de un CartProvider')
  }

  return context 
}
 