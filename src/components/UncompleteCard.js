import React from 'react'
import { FindTodo, FindTodoIndex } from '../utils/Todos'
import { Container, SuccessNotification } from '../utils/Toasify';


const UncompleteCard = ({ data, all, setTodos }) => {

    const handleCompleteChange = (id,todos) => {
        const todoTarget = FindTodo(id, todos);
        if (todoTarget == null) return;
        todoTarget.isComplete = true;
        setTodos([...todos],todos)
        SuccessNotification("Berhasil Mengganti Status")
    }

    const handleDelete = (id ,todos) =>{
        const todoTarget = FindTodoIndex(id, todos);
        todos.splice(todoTarget, 1)
        setTodos([...todos],todos)
        SuccessNotification("Berhasil Dihapus")
    }
    return (
        <div>
            <span>Yang belum dilakukan</span>
            <div>
                <div>
                    <p>{data.todo}</p>
                    <p>{data.date}</p>
                </div>
                <div>
                    <button onClick={(e) => handleDelete(data.id, all)}>
                        Delete
                    </button>
                    <button onClick={(e) => handleCompleteChange(data.id, all)}>
                        Complete
                    </button>
                </div>
            </div>
            <Container/>
        </div>
    )
}

export default UncompleteCard