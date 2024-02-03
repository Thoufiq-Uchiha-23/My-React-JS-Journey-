import React from 'react'

function Footer() {
  return (
    <div className='flex justify-evenly  flex-wrap items-center font-extrabold p-7 h-100 w-full mt-4 flex items-center justify-center md:text-4xl text-2xl bg-gray-700 text-yellow-500 relative bottom-0'>
        <img src="https://avatars.githubusercontent.com/u/143873191?v=4" className='w-[100px] rounded-full' alt="" />
        <h2>Made By <span className='hover:text-emerald-500'>Thoufiq</span></h2>
    </div>
  )
}

export default Footer
