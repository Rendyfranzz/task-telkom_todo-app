import React from 'react'
import CompleteCard from './CompleteCard'

const ListTodoComplete = ({todos,setTodos}) => {
    let filtered = todos?.filter((data)=>{
        return data.isComplete
    })
    
  return (
    <div className='flex flex-col space-y-2 layout'>
        <span className='m-auto font-semibold'>Yang sudah dilakukan</span>
          {
        filtered?.map((data)=>{
            return <CompleteCard key={data.id} data={data} all={todos} setTodos={setTodos}/>
        })
    }</div>
  )
}

export default ListTodoComplete