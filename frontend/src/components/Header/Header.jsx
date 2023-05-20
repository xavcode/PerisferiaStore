import React from 'react'
import { Link } from 'react-router-dom'
import { MdShoppingCart } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineLightMode } from 'react-icons/md'
import { MdDarkMode } from 'react-icons/md'

import Search from '../Search/Search';

const Header = () => {

  return (
    <div className=' dark h-[150px] flex justify-around px-3 fixed top-0 left-0 md:h-[60px] w-full items-center font-bold bg-header dark:dark rounded-b-lg z-50 '>
      <ul className='flex justify-around md:flex text-2xl md:m-8 md:gap-6  '>
        <li><Link to='/'> Inicio </Link></li>
        <li><Link to='/store/'> Tienda </Link></li>
        <li><Link to='/about'> Nosotros </Link></li>
        <li><Link to='/contact'> Contacto</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
      <div className='flex w-[500px] items-center justify-center'>
        <ul className='px-6 md:flex justify-around items-center gap-4 md:gap-8 text-3xl '>
          <li> <Search /></li>
          <div className='flex justify-end gap-2 px-1'>
            <li> <button> <MdShoppingCart /> </button></li>
            <li> <Link> <MdFavorite> </MdFavorite> </Link> </li>
            <li> <button> <RxAvatar /> </button> </li>
          </div>
          <div className='flex border-2 '>
            <li> <button> <MdOutlineLightMode /> </button> </li>
            <li> <button> <MdDarkMode /> </button> </li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Header