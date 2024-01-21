import { useState } from 'react'
import './App.css'
import Youtube from './Youtube'

function App() {
  const username = "thoufiq"

  return (
    <>
      <h1>Vite React App {2+2}</h1>
      <h1>Vite React App {username}</h1>
      <Youtube />
    </>
  )
}

export default App
