import React, { useContext } from 'react'

import { FiltersContext } from '../../context/FiltersContext.jsx'

const Filters = () => {

  const { filters, setFilters, categories } = useContext(FiltersContext)
  const minPrice = filters.minPrice
  const maxPrice = filters.maxPrice

  //get data from FilterContext, for render it in cards jsx. at the while.

  //------------------------Handlers---------------------------//

  const handleChangePrice = (evt) => {
    const value = evt.target.value
    const valueId = evt.target.id
    if (valueId === 'minPrice') setFilters({ ...filters, minPrice: value })
    else if (valueId === 'maxPrice') setFilters({ ...filters, maxPrice: value })
  }

  const handleInputText = (evt) => {
    const value = evt.target.value
    const valueId = evt.target.id
    if (valueId === 'valueMinPrice') setFilters({ ...filters, minPrice: value })
    else if (valueId === 'valueMaxPrice') setFilters({ ...filters, maxPrice: value })
  }

  const handleSelectCat = (evt) => {
    const category = evt.target.value
    setFilters({ ...filters, catSelected: category })
  }

  return (
    <div className='flex h-20 sm:mt-[154px] md:mt-16 accent-orange-800 text-orange-800 items-center justify-around  bg-white rounded-lg font-semibold  '>
      <ul className='flex '>
        <div className='flex m-3 gap-3'>
          <div className='flex flex-col justify-center' >
            <div className='flex justify-between'>
              <label htmlFor="valueMinPrice"> $USD</label>
              <input id='valueMinPrice' className='text-center' type="number" onChange={handleInputText} value={minPrice} />
            </div>
            <li>Desde<input className='mx-3' type="range" id="minPrice" min={0} max={1000} onChange={handleChangePrice} value={minPrice} /></li>
          </div>
          
          <div className='flex flex-col justify-center' >
            <div className='flex justify-between'>
              <label htmlFor="valueMaxPrice"> $USD</label>
              <input id='valueMaxPrice' className='text-center' type="number" onChange={handleInputText} value={maxPrice} />
            </div >
            <li>Hasta<input className='mx-3' type="range" id="maxPrice" min={0} max={1000} onChange={handleChangePrice} value={maxPrice} /></li>
          </div>
        </div>

        <div className='flex items-center'>
          <span>
            <select className='text-xl' name="category" id="category" defaultValue='all' onChange={handleSelectCat} >
              <option value="all">Todos</option>
              {categories.map(cat => {
                return (
                  <option key={cat.id} value={cat.title} >{cat.title}</option>
                )
              })}
            </select>
          </span>
          <span>
            <select name="rating" id="rating">
              <option value="fiveStar"> ⭐⭐⭐⭐⭐</option>
              <option value="fourStar"> ⭐⭐⭐⭐</option>
              <option value="threeStar"> ⭐⭐⭐</option>
              <option value="twoStar"> ⭐⭐</option>
              <option value="oneStar"> ⭐</option>
            </select>
          </span>
        </div>
      </ul>
    </div>
  )
}

export default Filters