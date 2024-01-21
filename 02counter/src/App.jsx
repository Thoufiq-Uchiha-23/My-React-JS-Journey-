import { useState } from 'react'
import './App.css'

function App() {

  // state is the unique thing in React which constantly monitored,
  // any change in the state will re-render the webpage
  const [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = ()=>{
    setCounter(counter + 1)
  }

  const removeValue = ()=>{
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>React course with Hitesh sir</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
