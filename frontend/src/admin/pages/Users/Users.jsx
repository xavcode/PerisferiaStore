import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import UsersTable from '../../components/UsersTable/UsersTable'


const Users = () => {
  return (
    <div className='flex justify-center items-center' >
      <div>
        <UsersTable />
      </div>
      <div className='flex justify-center items-center'>
        <Sidebar />
      </div>
    </div>
  )
}
export default Users