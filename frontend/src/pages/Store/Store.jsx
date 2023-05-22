import React from 'react'
import Cards from '../../components/Cards/Cards'
import Footer from '../../components/Footer/Footer'
import Filters from '../../components/FiltersBar/FiltersBar'
import { useAuth0 } from '@auth0/auth0-react'

const Store = () => {
  
  const user = useAuth0();

  return (
    <div>
      {user?<div >
      <div className='flex flex-col w-screen'>
        <Filters />
      </div>
      <Cards />
      <Footer />
    </div>: <h1>logeate!</h1>}
    
    </div>
  )
}

export default Store