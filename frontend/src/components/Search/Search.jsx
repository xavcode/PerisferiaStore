import React from 'react'
import {MdSearch} from 'react-icons/md'

const Search = () => {
  return (
    <div className='flex items-center'>
        <input type="search"  className='w-[180px] h-8 rounded-lg text-base text-black p-3'/>
        <button> <MdSearch/> </button>
    </div>
  )
}

export default Search
