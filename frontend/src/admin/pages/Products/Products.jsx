import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import ProductsTable from '../../components/ProductsTable/ProductsTable'

const Products = () => {
  return (
    <div className='flex justify-center items-center' >
      <div>
        <Sidebar />
      </div>
      <div className='flex justify-center items-center'>
        <ProductsTable/>
      </div>
    </div>
  )
}

export default Products