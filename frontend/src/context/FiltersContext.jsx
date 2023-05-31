import React, { useState, useEffect } from 'react'
import { createContext, useContext } from "react";
import { DataContext } from './DataContext';
import axios from 'axios';

// create context for get the categories for filters.

export const FiltersContext = createContext()


export const FilterProvider = ({ children }) => {
  const { products } = useContext(DataContext)
  
  const categoriesFiltered = new Set(products.map(product=>product.category)) 
  const categories = [...categoriesFiltered]

  const [filters, setFilters] = useState({
    searched: '',
    minPrice: 10,
    maxPrice: 1000000,
    catSelected: 'all',
    orderBy: 'from_lower',
    sortBy: 'price',
    categories: [],
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters,
      categories
    }}>
      {children}
    </FiltersContext.Provider>
  )
}

 