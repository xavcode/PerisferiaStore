import React, { useContext } from 'react'

import {FiltersContext} from '../../context/FiltersContext.jsx'

const Filters = () => {

  const { filters, setFilters } = useContext(FiltersContext)
  const minPrice = filters.minPrice
  const maxPrice = filters.maxPrice

  const handleChangePrice = (evt) => {
    const value = evt.target.value
    const valueId = evt.target.id
    if (valueId === 'minPrice') setFilters({...filters, minPrice: value})
    else if (valueId === 'maxPrice') setFilters({...filters, maxPrice:value})
  }

  const handleInputText = (evt) => {
    const value = evt.target.value
    const valueId = evt.target.id
    if (valueId === 'valueMinPrice') setFilters({...filters, minPrice:value})
    else if (valueId === 'valueMaxPrice')  setFilters({...filters, maxPrice:value})
  }

  return (
    <div className='flex h-20 mt-16 mx-4 accent-orange-800 text-orange-800 items-center justify-around  bg-white rounded-lg font-semibold '>
      <ul className='flex '>
        <div className='flex m-3 '>
          <div className='flex flex-col items-center justify-center' >
            <input id='valueMinPrice' className='text-center' type="number" onChange={handleInputText} value={minPrice}  />
            <li>Desde<input className='mx-3' type="range" id="minPrice" min={0} max={1000} onChange={handleChangePrice} value={minPrice} /></li>
          </div>
          <div className='flex flex-col items-center justify-center' >
            <input id='valueMaxPrice' className='text-center' type="number" onChange={handleInputText} value={maxPrice} />
            <li>Hasta<input className='mx-3' type="range" id="maxPrice" min={0} max={1000} onChange={handleChangePrice} value={maxPrice} /></li>
          </div>
        </div>

        <div className='flex items-center'>
          <span>
            <select name="category" id="category" defaultValue='all' >
              <option value="all">Todos</option>
              <option value="electronic">Electronica</option>
              <option value="mensClothing">Ropa hombre</option>
              <option value="womensClothing">Ropa Mujer</option>
              <option value="jewelry">Joyeria</option>
            </select>
          </span>
          <span>
            <select name="rating" id="rating">
              <option value="oneStar"> ⭐</option>
              <option value="twoStar"> ⭐⭐</option>
              <option value="threeStar"> ⭐⭐⭐</option>
              <option value="fourStar"> ⭐⭐⭐⭐</option>
              <option value="fiveStar"> ⭐⭐⭐⭐⭐</option>
            </select>
          </span>
        </div>
      </ul>
    </div>
  )
}

export default Filters
