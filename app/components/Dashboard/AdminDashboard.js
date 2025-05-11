import React from 'react'
import Header from '../others/Header'
import Createtask from '../others/Createtask'
import Alltask from '../others/Alltask'

const AdminDashboard = (props) => {
  return (
    <div className='text-white h-screen w-full p-10 '>
    <Header changeUser={props.changeUser}/>
    <Createtask/>
    <Alltask/>
  </div>
  )
}

export default AdminDashboard
