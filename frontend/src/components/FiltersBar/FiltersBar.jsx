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
    <div className='bg-black h-36 w-full fixed top-0 z-20'>
      <div className='flex fixed top-16 w-full gap-36 font-bold accent-text_filters_bar text-text_filters_bar justify-evenly bg-bg_card rounded-lg px-10 z-10 border-2 border-gray-400'>
        <div className='flex w-full justify-around '>

          <div className='flex flex-col justify-center' >
            <div className='flex justify-between'>
              <label className='bg-inputs' htmlFor="valueMinPrice"> $USD</label>
              <input id='valueMinPrice' className='bg-inputs text-center' type="number" max={1000} onChange={handleInputText} value={minPrice} />
            </div>
            <span>Desde<input className='bg-inputs mx-3' type="range" id="minPrice" min={0} max={1000} onChange={handleChangePrice} value={minPrice} /></span>
          </div>

          <div className='flex flex-col justify-center' >
            <div className='flex justify-between'>
              <label className='bg-inputs' htmlFor="valueMaxPrice"> $USD</label>
              <input id='valueMaxPrice' className=' bg-inputs accent-red-600 text-center' type="number" max={1000} onChange={handleInputText} value={maxPrice} />
            </div >
            <span>Hasta<input className='bg-inputs mx-3' type="range" id="maxPrice" min={0} max={1000} onChange={handleChangePrice} value={maxPrice} /></span>
          </div>

          <div className='flex flex-col items-center justify-center '>
            <label htmlFor="category">CATEGORIA</label>
            <select className='bg-inputs text-md text-center ' name="category" id="category" defaultValue='all' onChange={handleSelectCat} >
              <option value="all">Todos</option>
              {categories.map(cat => {
                return (
                  <option key={cat.id} value={cat.name} >{cat.name}</option>
                )
              })}
            </select>
          </div>
          <div className='flex flex-col items-center justify-center '>
            <label htmlFor="brand">MARCA</label>
            <select className='text-md text-center bg-inputs' name="brand" id="brand">
              <option value="all">Todos</option>
              <option value="asus">Asus</option>
              <option value="Nvidia">Nvidia</option>
              <option value="Razer">Razer</option>
            </select>
          </div>


          {/* group checkbox*/}
          <div className='flex flex-col items-center justify-around m-2' >
            {/* individual checkbox*/}
            <span>Ordenar por</span>
            <div>
              <div className='flex flex-col items-center justify-center'>
                <select className='bg-inputs' name="order" id="order">
                  <option value="from_greater_price">De mayor a menor</option>
                  <option value="from_lower_price">De menor a mayor</option>
                </select>
                <select className='bg-inputs' name="sort" id="sort">
                  <option value="from_greater_rate">De mayor a menor</option>
                  <option value="from_lower_rate">De menor a mayor</option>
                </select>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );


}

export default Filters