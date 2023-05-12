import React from 'react'
import Cards from '../../components/Cards/Cards'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Filters from '../../components/FiltersBar/FiltersBar'

const Store = () => {
  return (
    <div >
      <Header />
      <Filters />
      <Cards />
      <Footer />
    </div>
  )
}

export default Store
