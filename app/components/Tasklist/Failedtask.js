import React from 'react'

const Failedtask = ({data}) => {
  return (
    <div className='h-full flex-shrink-0 p-5 w-[300px] bg-green-400 rounded-xl'>
    <div className='flex items-center mt-3 justify-between'>
      <h3 className='bg-red-800 px-3 py-1 text-sm rounded'>{data.task_title}</h3>
      <h4>{data.task_date}</h4>
    </div>
    <h2 className='mt-10 text-xl font-semibold'>{data.category}</h2>
    <p className='text-sm mt-2'>
    {data.task_description}
    </p>
    <div className='flex justify-center mt-10'>
        <button className='bg-red-800 py-1 px-2 w-full rounded text-sm'>Failed</button>
    </div>
  </div>
  )
}

export default Failedtask
