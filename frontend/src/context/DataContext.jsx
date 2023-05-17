import React, { useReducer } from 'react'
import { useEffect } from 'react';
import axios from 'axios'

import { createContext, useState } from "react";

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      const response = await axios.get('http://localhost:3001/store')
      setProducts(response.data)
    }

  fetchData()
    
  }, [])
  

  return (
    <DataContext.Provider value={{
      products,
      setProducts,

    }} >
      {children}
    </DataContext.Provider>
  )
}

