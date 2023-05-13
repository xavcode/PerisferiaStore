import React, { useState } from 'react'

import { createContext } from "react";

export const FiltersContext = createContext()

export const FilterProvider = ({ children }) => {
  const searchFunction = (searched) => {
    setFilters({ ...filters, searched: searched })
  }
  const [filters, setFilters] = useState({
    searched: '',
    category: "all",
    minPrice: 10,
    maxPrice: 1000,
  })
  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters,
      // searchFunction: (searched) => {
      //   return
      //   {
      //     console.log(searched)
      //     searchFunction(searched)
      //   }
      // }
    }}>
      {children}
    </FiltersContext.Provider>
  )
}

