"use client"
import React, { useContext, useState } from 'react'
import Header from './Header'
import { AuthContext } from '@/app/context/Authprovider'

const Createtask = () => {

  const [userData,setuserData]=useContext(AuthContext)

  const [taskTitle, settaskTitle] = useState('');
  const [taskDescription, settaskDescription] = useState('');
  const [assignTo, setassignTo] = useState('');
  const [date, setdate] = useState('');
  const [category, setcategory] = useState('');

  const [newTask, setnewTask] = useState({});

const submitHandler=(e)=>{
  e.preventDefault()

  setnewTask({taskTitle,taskDescription,assignTo,category,date,active:false,newTask:true,failed:false,completed:false});
  const data=userData.employeedata;
 

data.forEach(function(elem) {
  if(assignTo==elem.FirstName){
 elem.tasks.push(newTask)
 elem.taskCounts.newTask=elem.taskCounts.newTask + 1;
  }
});

   localStorage.setItem("employees",JSON.stringify(data))
   
  settaskDescription("");
  settaskTitle("");
  setdate("");
  setassignTo("");
  setcategory("");
}


  return (
    <div>
    <form onSubmit={(e)=>{
      submitHandler(e)
    }} className='flex w-full h-[55vh] rounded-xl bg-zinc-900  mt-5 px-20 py-5'>
       <div className='w-1/2 flex flex-col gap-7'>
        <div>
           <h3 className=''>Task Title</h3>
           <input value={taskTitle} onChange={(e)=>{
            settaskTitle(e.target.value)
           }} className='bg-transparent w-[80%] border-2 border-gray-500 rounded-lg py-2 px-2' type="text" placeholder='Make a UI design'></input>
       </div>
       <div>
        <h3>Date</h3>
        <input type='date' value={date}  onChange={(e)=>{
            setdate(e.target.value)
           }} className='text-gray-500 w-[80%] border-2 border-gray-500 py-2 px-3 rounded-lg bg-transparent' placeholder=''></input>
       </div>
       <div>
        <h3>Assign To</h3>
        <input   value={assignTo}  onChange={(e)=>{
            setassignTo(e.target.value)
           }} className='text-gray-500 w-[80%] border-2 border-gray-500 py-2 px-3 rounded-lg bg-transparent' type='text'></input>
       </div> 
       <div>
        <h3>Category</h3>
        <input   value={category}  onChange={(e)=>{
            setcategory(e.target.value)
           }} className='text-gray-500 w-[80%] border-2 border-gray-500 py-2 px-3 rounded-lg bg-transparent' type="text" placeholder='Design, Development, etc...'></input>
       </div> 
       </div>

       <div className='flex flex-col w-1/2 h-full ml-32 gap-8'>
       <div>
       <h3>Description</h3>
       <textarea   value={taskDescription}  onChange={(e)=>{
            settaskDescription(e.target.value)
           }} className='text-gray-500 h-[33vh] w-[80%] border-2 border-gray-500 py-2 px-3 rounded-lg bg-transparent' maxLength={500} placeholder='Detailed description of the task (Max 500 word)'></textarea>
       </div>
       <div>
          <button className='block w-[80%] bg-green-300 px-3 py-2 rounded-lg'>Create Task</button>
        </div>
        </div>
      
       
    </form>
  </div>
  )
}

export default Createtask
