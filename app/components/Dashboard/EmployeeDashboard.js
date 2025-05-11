import React from 'react'
import Header from '../others/Header'
import TaskNumberlist from '../others/TaskNumberlist'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = (props) => {

  return (
    <div className='text-white p-10 bg-[#111] h-screen'>
      <Header data={props.data} changeUser={props.changeUser}/>
      <TaskNumberlist data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
