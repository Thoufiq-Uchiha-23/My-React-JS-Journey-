import { useState, useEffect, useCallback, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // setting the states for the objects
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  // passing ref in default as null
  const passwordRef = useRef(null)

  // to store some cache and change acc to loading 
  const generatePassword = useCallback(()=>{
    let pass = ""
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    // if true add nos to str
    if(numberAllowed) str += "0123456789"
    // if true add char to string
    if(charAllowed) str += "!@#$%^&*()_+"

    for (let i = 1; i < length; i++) {
      // generating random with str
      const char = Math.floor(Math.random() * str.length + 1)
      // adding the password of str by incrementing
      pass +=  str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copPasswordToClipboard = ()=>{
    // to copy to clipboard
    window.navigator.clipboard.writeText(password)
    //to select the text with blue feedback
    passwordRef.current?.select()
  }

  // changes screen everytime it loads
  useEffect(()=>{
    generatePassword()
  },[length, numberAllowed, charAllowed])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>
      <div
      className='flex text-sm gap-x-2'
      >
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=> setLength(e.target.value)}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={numberAllowed}
          onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }}
          name="" 
          id=""
           />
           <label htmlFor="number">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={charAllowed}
          onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }}
          name="" 
          id=""
           />
           <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
