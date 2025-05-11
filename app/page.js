"use client"
import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/Authprovider'

const page = () => {
  
  const [user, setuser] = useState()
  const [LoggedInUserdata, setLoggedInUserdata] = useState(null)
  const [userData,setuserData]=useContext(AuthContext)


useEffect(() => {

  if(userData){
    const LoggedInUser=localStorage.getItem("LoggedInUser")
      if(LoggedInUser){
        const userData=JSON.parse(LoggedInUser)
        setuser(userData.role)
        setLoggedInUserdata(userData.data)
      }
    
  }
}, [userData])




  const handleLogin=(email,password)=>{

    if(userData && userData.admindata.find((e)=>email==e.email && password==e.password)){
      setuser('admin')
      setLoggedInUserdata(userData.admindata);
      localStorage.setItem('LoggedInUser',JSON.stringify({role:'admin',data:'admin'}))
 }
    else if(userData ){
      const employees= userData.employeedata.find((e)=>email==e.email && password==e.password)
      if(employees){
      setuser('employee')
      setLoggedInUserdata(employees)
      localStorage.setItem('LoggedInUser',JSON.stringify({role:'employee',data:'employee'}))}
    }
    else{
      alert("Invalid credentials")
    }
  }


  return (
    <>
   {!user ? <Login handleLogin={handleLogin}/> : ""}
   {user=='admin'?<AdminDashboard changeUser={setuser}/> :(user=='employee' ? <EmployeeDashboard data={LoggedInUserdata} changeUser={setuser}/>:null)}
    </>
  )
}

export default page
