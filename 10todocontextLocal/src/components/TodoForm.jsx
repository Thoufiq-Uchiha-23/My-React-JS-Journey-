import React, { useState } from 'react'
import { useTodo } from '../contexts'

function TodoForm() {
  const [todo, setTodo] = useState("")
  const {addTodo} = useTodo()
  
  const add = (e) => {
    e.preventDefault()
    if(!todo) return
    addTodo({todo, completed: false})
    setTodo("")
  }
  return (
    <form onSubmit={add} className='flex flex-col flex-wrap gap-3'>
        <input type="text"
        placeholder='Write Todo...'
        className='field w-full border border-black/10 rounded-full px-3 outline-none duration-500 text-blue-500 text-2xl tracking-widest font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 py-3 hover:py-4 cursor-pointer'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className='rounded-full text-[2rem] p-3 mx-auto bg-gradient-to-r from-green-500 to-blue-500 font-extrabold text-white w-20 hover:bg-green-700 hover:scale-[1.3] transition-all duration-500'>+</button>
    </form>
  )
}

export default TodoForm
