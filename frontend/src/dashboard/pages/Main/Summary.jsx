import React from 'react'
import SideBar from '../../components/SideBar/Layout'
import Summarycontent from '../../components/SummaryContent/Summarycontent'

const Summary = () => {

  return (
    <div className='w-screen h-screen flex' >
      <aside className='w-[150px]'>
        <SideBar />
      </aside>

    </div>
  )
}

export default Summary