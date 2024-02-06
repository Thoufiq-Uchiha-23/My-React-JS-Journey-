import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()

    dispatch(addTodo(input))
    setInput('')
  }
  return (
    <form onSubmit={addTodoHandler} className='w-[80%] md:w-[50%] px-3 mt-12'>
      <h1 className='font-extrabold text-4xl mb-4'>🔥Redux-Do</h1>
      <div className='flex flex-col gap-3 flex-wrap'>
        <input 
        type="text"
        className='field w-full border border-black/10 rounded-full px-3 outline-none duration-500 text-blue-500 text-2xl tracking-widest font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 py-3 hover:py-4 cursor-pointer'
        placeholder='Enter a Todo...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button 
        type="submit"
        className='text-white text-2xl bg-gradient-to-r from-red-500 to-yellow-500 rounded-full border-0 p-2 focus:outline-none hover:bg-indigo-600 font-extrabold'
        >
          +
        </button>
      </div>
      
    </form>
  )
}

export default AddTodo
