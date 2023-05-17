import React from 'react'
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

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

  useEffect(() => {

    const fetchData = async () => {
      const response = await axios('http://localhost:3001/users/')
      setUserData(response.data)
    }    

    fetchData()
  }, [])

  return (
    <UserContext.Provider value={{
      userData,
      setUserData
    }}>
      {children}
    </UserContext.Provider>
  )
}