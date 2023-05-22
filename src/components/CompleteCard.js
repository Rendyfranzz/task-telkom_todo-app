import React, { useState, Fragment } from 'react'
import { FindTodo, FindTodoIndex } from '../utils/Todos';
import { SuccessNotification, Container } from '../utils/Toasify';
import { FaTrash, FaUndoAlt } from 'react-icons/fa';
import { Dialog, Transition } from '@headlessui/react'


const CompleteCard = ({ data, all, setTodos }) => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    const handleCompleteChange = (id, todos) => {
        const todoTarget = FindTodo(id, todos);
        if (todoTarget == null) return;
        todoTarget.isComplete = false;
        setTodos([...todos], todos)
        SuccessNotification("Berhasil Mengganti Status")
    }

    const handleDelete = (id, todos) => {
        const todoTarget = FindTodoIndex(id, todos);
        todos.splice(todoTarget, 1)
        setTodos([...todos], todos)
        SuccessNotification("Berhasil Dihapus")
    }
    return (
        <div className='p-2 rounded-md shadow-md dark:bg-cdark'>
            <div className='flex items-center justify-between'>
                <div>
                    <p>{data.todo}</p>
                    <p>{data.date}</p>
                </div>
                <div className='-mb-4 space-x-4'>
                    <button onClick={(e) => openModal()}>
                        <FaTrash className='hover:scale-125 hover:transition-all' />
                    </button>
                    <button onClick={(e) => handleCompleteChange(data.id, all)}>
                        <FaUndoAlt className='hover:scale-125 hover:transition-all' />
                    </button>
                </div>
            </div>
            <Container />
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="flex flex-col items-center justify-center w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Apakah Anda Yakin Ingin Mengapus?
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Item yang dipilih akan dihapus,apakah anda yakin?
                                        </p>
                                    </div>
                                    <div className='flex space-x-8'>
                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Tidak
                                            </button>
                                        </div>
                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={e=>{handleDelete(data.id, all)}}
                                            >
                                                Yakin
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default CompleteCard