import React, { useReducer } from 'react'
import { useEffect } from 'react';
import axios from 'axios'

import { createContext, useState } from "react";
import { lowerCase } from 'lodash';

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [products2, setProducts2] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/store')
      //for change the whole array to lowercase
      const prods = response.data
      const lowercaseProducts = prods.map((product) => {
        return { ...product, name: product.name.toLowerCase() };
      });      
      setProducts(lowercaseProducts)

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

