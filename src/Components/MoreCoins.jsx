import React from 'react'
import Coins from './Coins'

export default function MoreCoins() {

  return (
    <div className='bg-black py-14 px-3'>
        <div className='mb-[60px] mt-[30px]'>
            <h1 className='text-white text-[30px] lg:text-[48px] leading-[32px] text-center lg:text-left font-Montserrat font-[700] '>Coins List</h1>
        </div>
        <div className='flex flex-col md:flex-row flex-wrap gap-6 items-center justify-center'>
            <Coins/>
        </div>
        
    </div>
  )
}
