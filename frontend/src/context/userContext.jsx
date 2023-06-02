import React from 'react'
import { createContext, useEffect, useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';

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
    password: '',
    Adress: '',
    profileImage: '',
    theme: 'dark',
    isAdmin: '',
    isActive: '',
    isAuthenticated: '',
  })
  // const userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // console.log(userTheme)
  // if(userTheme===true) setUserData({...userData, theme:userTheme})

  // useEffect(() => {

  //   const fetchData = async () => {
  //     const response = await axios('https://perisferiastore-production.up.railway.app/users/')
  //     setUserData(response.data)
  //   }    

  //   fetchData()
  // }, [])

  return (
    <UserContext.Provider value={{
      userData,
      setUserData
    }}>
      {children}
    </UserContext.Provider>
  )
}