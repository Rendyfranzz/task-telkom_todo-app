import React from 'react'
import CompleteCard from './CompleteCard'

const ListTodoComplete = ({todos,setTodos}) => {
    let filtered = todos?.filter((data)=>{
        return data.isComplete
    })
    
  return (
    <div>
        <span>Yang sudah dilakukan</span>
          {
        filtered?.map((data)=>{
            return <CompleteCard key={data.id} data={data} all={todos} setTodos={setTodos}/>
        })
    }</div>
  )
}

export default ListTodoComplete