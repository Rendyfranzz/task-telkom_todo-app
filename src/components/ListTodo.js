import React from 'react'
import UncompleteCard from './UncompleteCard'

const ListTodo = ({ todos,setTodos }) => {
    let filtered = todos?.filter((data) => {
        return !data.isComplete
    })
    return (
        <div className='flex flex-col space-y-2 layout'>
             <span className='m-auto font-semibold'>Yang Belum dilakukan</span>
            {
                filtered?.map((data) => {
                    return <UncompleteCard key={data.id} data={data} all={todos} setTodos={setTodos} />
                })
            }
        </div>
    )
}

export default ListTodo