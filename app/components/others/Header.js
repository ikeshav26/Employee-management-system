import React from 'react'

const Header = (props) => {
  
const logOut=()=>{
  localStorage.setItem('LoggedInUser','')
  props.changeUser('')
}

  return (
    <div className='flex items-end justify-between '>
      <h1 className='text-2xl font-medium'>Hello <br/>
      <span className='text-3xl font-semibold'> {props.data ? props.data.FirstName : "Keshav"} &#x1F44B;
        </span></h1>
      <button onClick={logOut}  className='bg-red-500 font-lg font-medium text-white px-5 py-2 rounded-sm'>Log out</button>
    </div>
  )
}

export default Header
