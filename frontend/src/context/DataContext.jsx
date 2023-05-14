import React from 'react'
import { useEffect } from 'react';
import axios from 'axios'

import { createContext, useState } from "react";

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState({
    products: []
  })

  return (
    <DataContext.Provider value={{
      products,
      setProducts,

    }} >
      {children}
    </DataContext.Provider>
  )
}

