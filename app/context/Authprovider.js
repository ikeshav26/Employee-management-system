import React, { createContext, useEffect, useState } from 'react'
import { getLocalstorage, setLocalstorage } from '../utils/Localstorage'

export const AuthContext=createContext()

const Authprovider = ({children}) => {
  const [userData, setuserData] = useState([])

 useEffect(() => {
  setLocalstorage();

  const{employeedata,admindata}=getLocalstorage()
  setuserData({employeedata,admindata})
 }, [])
  return (
    <div>
      <AuthContext.Provider value={[userData,setuserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default Authprovider
