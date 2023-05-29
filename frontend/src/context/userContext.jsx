import React, { createContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth0();

  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    userName: '',
    phone: '',
    mail: '',
    address: '',
    password: '',
    profileImage: '',
  });

  useEffect(() => {
    if (isAuthenticated && user) {
      setUserData((prevUserData) => ({
        ...prevUserData,
        password: 'hola',
        name: user.given_name,
        lastName: user.family_name,
        userName: user.nickname,
        phone: user.phone,
        mail: user.email,
        address: user.address,
        profileImage: user.picture,
      }));
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    const createUser = async () => {
      try {
        const response = await axios.post('http://localhost:3001/user', userData);
        console.log('User created successfully:', response.data);
      } catch (error) {
        console.error('Error creating user:', error);
      }
    };

    if (isAuthenticated && user) {
      createUser();
    }
  }, [isAuthenticated, user, userData]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};