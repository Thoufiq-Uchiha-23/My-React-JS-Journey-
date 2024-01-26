import React from 'react'

function Card({charactername, characterimage, intro}) {
  return (
    <figure className=" rounded-md p-4 gap-10 bg-slate-800 flex flex-wrap justify-evenly md:flex-nowrap my-5">
        <img className="w-30 mx-auto" src={characterimage} alt="" width="384" height="512"/>
        <div className="pt-2 space-y-4">
            <figcaption className="font-medium leading-10 w-30 flex-col items-start">
                <div className="text-sky-500 text-5xl pb-5 font-bold dark:text-sky-400">
                    {charactername}
                </div>
                <div className="text-white text-2xl">
                    {intro}
                </div>
            </figcaption>
        </div>
    </figure>
  )
}

export default Card
