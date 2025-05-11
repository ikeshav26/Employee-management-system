import { AuthContext } from '@/app/context/Authprovider'
import React, { useContext } from 'react'

const Alltask = () => {

  const [userData,setuserData]=useContext(AuthContext);
  return (
    <div id="alltask" className='bg-zinc-900  flex gap-3 flex-col w-full mt-7 p-5 rounded-lg '>
      <div className='flex items-center justify-around bg-red-300 py-2 rounded'>
        <h2 className='w-1/5 flex items-center justify-center text-lg font-medium '>Employee Name</h2>
        <h3 className='w-1/5 flex items-center justify-center text-lg font-medium '>Active Task</h3>
        <h4 className='w-1/5 flex items-center justify-center text-lg font-medium '>New Task</h4>
        <h4 className='w-1/5 flex items-center justify-center text-lg font-medium '>Completed </h4>
        <h4 className='w-1/5 flex items-center justify-center text-lg font-medium '>Failed</h4>
      </div>
      <div>
      {userData.employeedata.map((e,index)=>(
        <div key={index} className='flex items-center justify-around gap-2 border-2 border-emerald-300 mb-2 py-2 text-xl rounded'>
        <h2 className='w-1/5 flex items-center justify-center text-lg font-medium '>{e.FirstName}</h2>
        <h3 className='w-1/5 flex items-center justify-center text-lg font-medium  text-blue-400 '>{e.taskCounts.active}</h3>
        <h4 className='w-1/5 flex items-center justify-center  text-lg font-medium  text-yellow-300'>{e.taskCounts.newTask}</h4>
        <h4 className='w-1/5 flex items-center justify-center text-lg font-medium  text-green-400 '>{e.taskCounts.completed}</h4>
        <h4 className='w-1/5 flex items-center justify-center text-lg font-medium text-red-400 '>{e.taskCounts.failed}</h4>
      </div>
      ))}
      </div>
    </div>
  )
}

export default Alltask
