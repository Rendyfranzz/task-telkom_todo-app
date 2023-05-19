import React from 'react'
import UncompleteCard from './UncompleteCard'

const ListTodo = ({ todos,setTodos }) => {
    let filtered = todos?.filter((data) => {
        return !data.isComplete
    })
    return (
        <div>
            {
                filtered?.map((data) => {
                    return <UncompleteCard key={data.id} data={data} all={todos} setTodos={setTodos} />
                })
            }
        </div>
    )
}

export default ListTodo