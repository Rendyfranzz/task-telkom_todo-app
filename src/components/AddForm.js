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
    <div className=' layout'>
        <form className='p-2 mt-4 rounded-md shadow-md layout dark:bg-cdark' onSubmit={handleSubmit}>
            <div className='flex flex-col space-y-2'>
                <label>Masukkan hal yang akan dilakukan</label>
                <input className='block w-full px-0 pb-2 mt-0 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-black' onChange={(e)=>setTodo(e.target.value)} value={todo} type='text' placeholder='Masukan todo' required  />
            </div>
            <div>
                <label>Masukkan tanggal harus selesai</label>
                <input className='bg-transparent' onChange={(e)=>setDate(e.target.value)} value={date} type='date' placeholder='Masukan todo' required  />
            </div>

            <div className='flex justify-center'>
                    <input className='cursor-pointer hover:scale-125 hover:transition-all' type='submit'/>
            </div>
        </form>
    <Container/>
    </div>
  )
}

export default AddForm