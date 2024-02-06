import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <>
      {/* <div className='w-full justify-center items-center flex flex-col flex-wrap'>Todos</div> */}
        <ul className='list-none mx-auto py-2 w-[70%] md:w-[40%]'>
          {todos.map((todo) =>(
            <li
            className='mt-4 flex justify-between text-xl w-full text-black font-bold items-center bg-gradient-to-r from-purple-500 to-yellow-500 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-purple-500 duration-300 px-7 py-[4px] rounded-full'
            key={todo.id}
            >
              <div>{todo.text}</div>
              <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-white border-[1px] py-3 px-3 focus:outline-none hover:bg-yellow-300 hover:rotate-[360deg] duration-500 rounded-full border-black text-md"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
        <div className='font-bold text-lg'>Redux-Do By Thoufiq</div>
    </>
    
  );
}

export default Todos;
