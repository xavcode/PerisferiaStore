import React from 'react'
import { Link } from 'react-router-dom'
import { MdShoppingCart } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import Search from '../Search/Search';

const Header = () => {

  return (
    <div className=' h-[150px] flex justify-around px-3 fixed top-0 left-0 md:h-[60px] w-full items-center font-bold bg-header rounded-b-lg z-50 '>
      <ul className=' justify-around md:flex  text-2xl md:m-8 md:gap-6  '>
        <li><Link to='/'> Inicio </Link></li>
        <li><Link to='/store/'> Tienda </Link></li>
        <li><Link to='/about'> Nosotros </Link></li>
        <li><Link to='/contact'> Contacto</Link></li>
      </ul>
      <div className='flex w-auto items-start'>
        <ul className='md:flex justify-around items-center gap-4 m-8 md:gap-8 text-3xl w-52 '>
          <li> <Search /></li>
          <div className='flex justify-end gap-2 px-1'>
            <li> <button> <MdShoppingCart /> </button></li>
            <li> <Link> <MdFavorite> </MdFavorite> </Link> </li>
            <li> <Link to='/profile'> <RxAvatar /></Link> </li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Header