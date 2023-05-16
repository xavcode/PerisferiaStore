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
    isAdmin: '',
    isActive: '',
    isAuthenticated: '',
    Adress: '',
    profileImage: '',
  })

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