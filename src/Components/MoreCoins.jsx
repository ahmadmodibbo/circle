import React from 'react'
import { useState } from 'react'
import Coins from './Coins'

export default function MoreCoins() {
  const [pop, setPop]=useState(true)
  return (
    <div className='bg-black py-14 px-3'>
        <div className='mb-[60px] mt-[30px]'>
            <h1 className='text-white text-[30px] lg:text-[48px] leading-[32px] text-center lg:text-left font-Montserrat font-[700] '>Coins List</h1>
        </div>
        <div className='flex flex-col md:flex-row flex-wrap gap-6 items-center justify-center'>
            <Coins/>
        </div>
        <div className={` bg-yellow-400 z-50  ${pop?'fixed -inset-28':'hidden'}`}>
          <div className='text-white absolute bg-red-500/90  w-[260px] h-fit text-center my-auto mx-auto z-50 grid inset-0'>
            <div className='py-2'>
              <h1 className='text-4xl font-Montserrat font-[900]'>Note:</h1>
              <p className='font-Montserrat text-xl '>Note all icons display</p>
            </div>
            <button className='bg-green-600 py-2' onClick={()=>(setPop(!pop))}>OK</button>
          </div>
        </div>
    </div>
  )
}
