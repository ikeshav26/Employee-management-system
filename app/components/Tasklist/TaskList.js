import React from 'react'
import Accepttask from './Accepttask'
import Newtask from './Newtask'
import CompleteTask from './CompleteTask'
import Failedtask from './Failedtask'

const TaskLst = ({data}) => {
  return (
    <div id="tasklist" className='h-[50%] w-full overflow-auto p-5 flex gap-5 items-center justify-start mt-14 flex-nowrap'>
      {(data?.tasks ?? []).map((e, index) => {
        if (e.active) {
          return <div key={index}><Accepttask data={e} /></div>
        }
        if (e.newtask) {
          return <div key={index}><Newtask data={e} /></div>
        }
        if (e.completed) {
          return <div key={index}><CompleteTask data={e} /></div>
        }
        if (e.failed) {
          return <div key={index}><Failedtask data={e} /></div>
        }
        return null
      })}
    </div>
  )
}

export default TaskLst
