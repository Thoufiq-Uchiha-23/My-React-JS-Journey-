import { React, useState } from 'react'
import { ReactDOM } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {  
  const [color, setColor] = useState('olive');

  // function changeColor(color){
  //   setColor(color)
  // }

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <h2 className='text-6xl font-extrabold text-center pt-10 text-slate-200'>Background Changer</h2>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className='outline=none text-slate-200 text-2xl font-bold px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: 'red'}} onClick={()=> setColor('red')}>Red</button>
          <button className='outline=none text-slate-200 text-xl font-bold px-4 py-1 rounded-full text-black shadow-lg' onClick={()=> setColor('green')} style={{backgroundColor: 'green'}}>Green</button>
          <button className='outline=none text-slate-200 text-2xl font-bold px-4 py-1 rounded-full text-black shadow-lg' onClick={()=> setColor('blue')} style={{backgroundColor: 'blue'}}>Blue</button>
          <button className='outline=none text-slate-200 text-2xl font-bold px-4 py-1 rounded-full text-black shadow-lg' onClick={()=> setColor('purple')} style={{backgroundColor: 'purple'}}>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
