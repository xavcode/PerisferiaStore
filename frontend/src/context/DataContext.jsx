import React, { useReducer } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import { createContext, useState } from "react";
import { lowerCase } from 'lodash';

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [updateFlag, setUpdateFlag] = useState(false); // agregar el cambio de estado para detonar el useEffect

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://perisferiastore-production.up.railway.app/store');
      const prods = response.data;

      const lowerCaseProducts = prods.map((product) => {
        const lcProd = {
          ...product,
          name: product.name.toLowerCase(),
          category: product.category.toLowerCase(),
        };

        return lcProd;
      });

      setProducts(lowerCaseProducts);
    };

    fetchData();
  }, [updateFlag]);
  
  return (
    <DataContext.Provider value={{
      products,
      setProducts,
      setUpdateFlag

    }} >
      {children}
    </DataContext.Provider>
  )
}