import React, { useState } from 'react'
import {useTodo} from '../contexts/TodoContext'

function TodoItem({todo}) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)  

  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }
  return (
    <div
    className={`flex border-none rounded-full px-3 py-1.5 gap-x-3 shadow-sm duration-300 text-black ${todo.completed ? "bg-gradient-to-r from-purple-300 to-yellow-300" : "bg-gradient-to-r from-purple-500 to-yellow-500"}`}
    >
      <input type="checkbox" 
      className='cursor-pointer'
      checked= {todo.completed}
      onChange={toggleCompleted}
      />
      <input type="text"
      className={`tasker border-none text-lg tracking-wide text-bold oultine-none w-full rounded-lg ${isTodoEditable ? "bg-gradient-to-r from-purple-300 to-yellow-300" : "bg-gradient-to-r from-purple-500 to-yellow-500"}`}
      value={todoMsg}
      onChange={(e) => setTodoMsg(e.target.value)}
      readOnly= {!isTodoEditable}
      />
      <button 
      className='inline-flex w-10 h-10 p-2 rounded-full text-sm border border-black justify-center items-center hover:scale-[1.5] duration-700 hover:rotate-[360deg] bg-gray-50 hover:bg-gray-100 disabled:opacity-50'
      onClick={() => {
        if(todo.completed) return
        if (isTodoEditable) {
            editTodo()
        }else setIsTodoEditable((prev) => !prev)
      }}
      disabled = {todo.completed}
      >{isTodoEditable ? "📁" : "✏️"}</button>
      <button
      className='inline-flex w-10 h-10 p-2 rounded-full hover:scale-[1.5] text-sm border border-black justify-center items-center hover:rotate-[360deg] duration-700 bg-gray-50 hover:bg-gray-100'
      onClick={() => deleteTodo(todo.id)}
      >❌</button>
    </div>
  )
}

export default TodoItem
