import React, { createContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth0();

  const [userData, setUserData] = useState({
    id: '',
    name: '',
    lastName: '',
    userName: '',
    phone: '',
    mail: '',
    address: '',
    password: '',
    profileImage: '',
    theme: 'dark',
    isAdmin: '',
    isActive: '',
    isAuthenticated: false,
  });

  useEffect(() => {
    if (isAuthenticated && user) {
      setUserData({
        name: user.given_name,
        lastName: user.family_name,
        userName: user.nickname,
        phone: user.phone,
        mail: user.email,
        address: user.address,
        profileImage: user.picture,
        theme: 'dark',
        isAdmin: user.isAdmin,
        isActive: user.isActive,
        isAuthenticated: isAuthenticated,
        
      });
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/user/');
        setUserData((prevUserData) => ({
          ...prevUserData,
          ...response.data,
        }));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};