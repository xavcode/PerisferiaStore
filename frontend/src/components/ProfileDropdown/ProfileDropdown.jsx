import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { MdPerson, MdEdit } from 'react-icons/md';
import avatar from '../../assets/images/profile-default-image.png';
import LoginButton from '../Login/Login';
import LogoutButton from '../Logout/Logout';

const ProfileDropdown = () => {
  const { user, isAuthenticated } = useAuth0(); //Aca es donde le llega los datos del user
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => { 
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderProfileMenu = () => {
    if (isAuthenticated) {
      return (
        <div className="relative" ref={dropdownRef}>
          <div className="profile-button-container cursor-pointer" onClick={toggleMenu}>
            <img className="w-11 h-11 mt-[2px] rounded-full" src={user.picture || avatar} alt="Profile" />
          </div>
          {isMenuOpen && (
            <ul className="absolute top-full right-0 mt-2 py-2 bg-slate-300 shadow-lg rounded">
              <li>
              <Link to="/profile" className="block px-4 py-2 text-xl text-gray-800 hover:bg-gray-200">Perfil</Link>
              </li>
              <li>
                <Link to="/profile/edit" className="block px-4 py-2  text-xl text-gray-800 hover:bg-gray-200">Editar Perfil</Link>
              </li>
              <li>
                <LogoutButton />
              </li>
            </ul>
          )}
        </div>
      );
    } else {
      return <LoginButton />;
    }
  };

  return <div>{renderProfileMenu()}</div>;
};

export default ProfileDropdown;
