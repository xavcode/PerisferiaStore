import React, { useState, useEffect } from 'react'
import { createContext } from "react";
import axios from 'axios';

// create context for get the categories for filters.

export const FiltersContext = createContext()

export const FilterProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [filters, setFilters] = useState({
    searched: '',
    minPrice: 10,
    maxPrice: 1000,
    catSelected:'all',
    orderBy:'from_lower',
    sortBy:'price'
  })

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/categories/')
      setCategories(response.data)
    }
    fetchData()
  }, [])

  

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

