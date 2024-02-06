import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mx-auto text-center w-70 flex flex-wrap flex-col justify-center items-center'>
      <AddTodo />
      <Todos />
    </div>  
  );
}

export default App
