"use client"
import React, { useState } from 'react'

const Login = ({handleLogin}) => {


    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const submitHandler=(e)=>{
        e.preventDefault();
        handleLogin(email,password)

        setemail("");
        setpassword("");
    }
  return (
    <div className='flex text-black items-center w-screen h-screen justify-center '>
      <div className='border-2 p-20 border-emerald-700 rounded-2xl'>
        <form onSubmit={(e)=>{
            {submitHandler(e)}
        }} className='flex flex-col items-center gap-6 justify-center'>

            <input value={email} onChange={(e)=>{
                setemail(e.target.value)
            }}required className='border-2 text-white border-emerald-700 px-5 py-[1vh] bg-transparent rounded-full placeholder:text-gray-400' type="email" placeholder='ENTER YOUR EMAIL'></input>

            <input value={password} onChange={(e)=>{
                setpassword(e.target.value)
            }} required className='border-2 text-white  border-emerald-700 px-5 py-[1vh] bg-transparent rounded-full placeholder:text-gray-400' type='password'  placeholder='ENTER YOUR PASSWORD'></input>
            <button id="login" className='text-gray-400 w-48 mt-5 border-none bg-emerald-700 px-4 py-[1vh] bg-transparent rounded-full hover:text-white hover:bg-emerald-400'>LOG IN</button>
        </form>
      </div>
    </div>
  )
}

export default Login
