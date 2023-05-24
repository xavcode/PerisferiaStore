import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Stats from '../Stats/Stats'

const Main = () => {
  return (
    <div className='flex w-screen h-screen '>
      <div className='flex w-screen justify-center fixed mt-20 '>
        <Stats />
      </div>
      <div>
        <Sidebar />
      </div>
    </div>
  )
}

export default Main