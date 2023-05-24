import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import ProductsTable from '../../components/ProductsTable/ProductsTable'

const Products = () => {
  return (
    <div className='flex justify-center items-center' >
      <div className='flex justify-center items-center'>
        <ProductsTable />
      </div>
      <div>
        <Sidebar />
      </div>
    </div>
  )
}

export default Products