import React from 'react'
import Cards from '../../components/Cards/Cards'
import Footer from '../../components/Footer/Footer'
import Filters from '../../components/FiltersBar/FiltersBar'

const Store = () => {
  return (
    <div >
      <div className='flex flex-col w-screen'>
        <Filters />
      </div>
      <Cards />
      <Footer />
    </div>
  )
}

export default Store