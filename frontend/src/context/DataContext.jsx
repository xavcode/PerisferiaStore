import React, { useReducer } from 'react'
import { useEffect } from 'react';
import axios from 'axios'

import { createContext, useState } from "react";
import { lowerCase } from 'lodash';

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () =>{      
      const response = await axios.get('https://perisferiastore-production.up.railway.app//store')
      //for change the whole array to lowercase
      const prods = response.data
      const lowerCaseNameProducts = prods.map((product) => {
        return { ...product, name: product.name.toLowerCase()
        };
      });      
      setProducts(lowerCaseNameProducts)      
      const lowerCaseCategoryProducts = prods.map((product) => {
        return { ...product, category: product.category.toLowerCase()
        };
      });      
      setProducts(lowerCaseCategoryProducts)

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

