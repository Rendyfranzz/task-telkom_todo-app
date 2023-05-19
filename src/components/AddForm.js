import React, { useState } from 'react'
import { Container, SuccessNotification } from '../utils/Toasify'

const AddForm = ({todos,setTodos}) => {
    const [todo,setTodo] = useState("")
    const [date,setDate] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault()
        let temp={
            id:+new Date(),
            todo:todo,
            date:date,
            isComplete:false
        }
        setTodos([...todos,temp])
        SuccessNotification("Berhasil ditambahkan")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col space-y-2'>
                <label>Masukkan hal yang akan dilakukan</label>
                <input onChange={(e)=>setTodo(e.target.value)} value={todo} type='text' placeholder='Masukan todo' required  />
            </div>
            <div>
                <label>Masukkan tanggal harus selesai</label>
                <input onChange={(e)=>setDate(e.target.value)} value={date} type='date' placeholder='Masukan todo' required  />
            </div>

            <div>
                    <input className='cursor-pointer' type='submit'/>
            </div>
        </form>
    <Container/>
    </div>
  )
}

export default AddForm