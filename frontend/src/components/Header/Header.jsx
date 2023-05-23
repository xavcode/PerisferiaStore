import React from 'react'
import { Link } from 'react-router-dom'
import { MdFavorite } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
// import { MdOutlineLightMode } from 'react-icons/md'
// import { MdDarkMode } from 'react-icons/md'
import avatar from '../../assets/images/profile-default-image.png'
import Cart from '../Cart/Cart'
import logo from '../../../public/logo-dark.jpeg'
import { useAuth0 } from '@auth0/auth0-react';

import Search from '../Search/Search';
import LoginButton from '../Login/Login';
import LogoutButton from '../Logout/Logout';

const Header = () => {
  const {  user, isAuthenticated } = useAuth0();
  return (
    <div className='dark h-[150px] flex justify-around px-3 fixed top-0 left-0 md:h-[60px] w-full items-center font-bold bg-header dark:dark rounded-b-lg z-50 '>
      <Link to='/'>
        <img className='h-[60px] fixed top-0 left-1 opacity-90 rounded-full' src={logo} alt="logo" />
      </Link>
      <ul className='flex justify-around md:flex text-2xl md:m-8 md:gap-6'>
        <li><Link to='/'> Inicio </Link></li>
        <li><Link to='/store/'> Tienda </Link></li>
        <li><Link to='/about'> Nosotros </Link></li>
        <li><Link to='/contact'> Contacto</Link></li>
        <li><Link to='/admin'>Dashboard</Link></li>
      </ul>
      <div className='flex w-[500px] items-center justify-center'>
        <ul className='px-6 md:flex justify-around items-center gap-4 md:gap-8 text-3xl'>
          <li><Search /></li>
          <div className='flex justify-end gap-2 px-1'>
            <li><Cart /></li>
            <li  > {isAuthenticated ? <LogoutButton /> : <LoginButton />}  </li>
            <li><img className='w-[48px] h-[48px] rounded-full ' src={isAuthenticated ? user.picture : avatar} alt="nada" /></li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Header



// import React from 'react'
// import { Link } from 'react-router-dom'
// import { MdFavorite } from "react-icons/md";
// import { RxAvatar } from "react-icons/rx";
// // import { MdOutlineLightMode } from 'react-icons/md'
// // import { MdDarkMode } from 'react-icons/md'
// import avatar from '../../assets/images/profile-default-image.png'
// import Cart from '../Cart/Cart'
// import logo from '../../../public/logo-dark.jpeg'
// import { useAuth0 } from '@auth0/auth0-react';


// import Search from '../Search/Search';
// import LoginButton from '../Login/Login';
// import LogoutButton from '../Logout/Logout';

// const Header = () => {

//   const { loginWithRedirect, isAuthenticated, user } = useAuth0();

//   return (
//     <div className='dark h-[150px] flex justify-around px-3 fixed top-0 left-0 md:h-[60px] w-full items-center font-bold bg-header dark:dark rounded-b-lg z-50 '>
//       <Link to='/'>
//         <img className='h-[60px] fixed top-0 left-1 opacity-90 rounded-full' src={logo} alt="logo" />
//       </Link>
//       <ul className='flex justify-around md:flex text-2xl md:m-8 md:gap-6  '>
//         <li><Link to='/home'> Inicio </Link></li>
//         <li><Link to='/store/'> Tienda </Link></li>
//         <li><Link to='/about'> Nosotros </Link></li>
//         <li><Link to='/contact'> Contacto</Link></li>
//         <li><Link to='/admin'>Dashboard</Link></li>
//       </ul>
//       <div className='flex w-[500px] items-center justify-center'>
//         <ul className='px-6 md:flex justify-around items-center gap-4 md:gap-8 text-3xl '>
//           <li> <Search /></li>
//           <div className='flex justify-end gap-3 px-1 text-[1.4rem]'>
//             <li> <Cart /> </li>
//             {/* <li> <Link> <MdFavorite> </MdFavorite> </Link> </li> */}
//             <li  > {isAuthenticated ? <LogoutButton /> : <LoginButton />}  </li>
//             <li>
//               <img className='w-[48px] h-[48px] rounded-full '
//                 src={isAuthenticated? user.picture : avatar } alt="nada" /></li>
//           </div>
//         </ul>
//       </div>
//     </div>
//   )
// }



// export default Header


// <div className='flex w-[500px] items-center justify-center'>
//         <ul className='px-6 md:flex justify-around items-center gap-4 md:gap-8 text-3xl'>
//           <li><Search /></li>
//           <div className='flex justify-end gap-2 px-1'>
//             <li><span className="icon-container"><Cart /></span></li>
//             <li><Link><span className="icon-container"><MdFavorite /></span></Link></li>
//             <li><button><RxAvatar /></button></li>
//           </div>
//         </ul>
//       </div>