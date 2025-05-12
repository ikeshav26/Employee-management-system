import React from 'react'

const Accepttask = ({data}) => {

  return (
    <div className='h-full flex-shrink-0 p-5 w-[300px] bg-yellow-300 rounded-xl'>
        <div className='flex items-center mt-3 justify-between'>
          <h3 className='bg-red-800 px-3 py-1 text-sm rounded'>{data.task_title}</h3>
          <h4>{data.task_date}</h4>
        </div>
        <h2 className='mt-10 text-xl font-semibold'>{data.category}</h2>
        <p className='text-sm mt-2'>
        {data.task_description}
        </p>
        <div className='flex justify-between mt-10'>
            <button className='bg-green-600 py-1 px-2 rounded text-sm'>mark as completed</button>
            <button className='bg-red-800 py-1 px-2 rounded text-sm'>mark as failed</button>
        </div>
      </div>
  )
}

export default Accepttask
