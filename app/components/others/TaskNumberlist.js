import React from 'react'

const TaskNumberlist = ({ data }) => {
  return (
    <div className='flex mt-10 justify-between gap-5'>
      <div className='w-1/4 px-9 py-6 rounded-xl bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{data?.taskCounts?.newTask ?? 0}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-1/4 px-9 py-6 rounded-xl bg-red-400'>
        <h2 className='text-3xl font-semibold'>{data?.taskCounts?.completed ?? 0}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='w-1/4 px-9 py-6 rounded-xl bg-yellow-300'>
        <h2 className='text-3xl font-semibold'>{data?.taskCounts?.active ?? 0}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>
      <div className='w-1/4 px-9 py-6 rounded-xl bg-green-400'>
        <h2 className='text-3xl font-semibold'>{data?.taskCounts?.failed ?? 0}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskNumberlist
