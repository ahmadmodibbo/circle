import React from 'react'
import ColoredButton from './ColoredButton'

export default function SubscribeSection() {
  return (
    <div className='bg-black pt-[40px] py-10 '>
        <div className='lg:w-2/3 mx-2 my-2 lg:mx-auto py-3 px-4 h-[240px] flex flex-col justify-around  shadow-lg shadow-[#73FDAA] rounded-md'>
            <div className='py-4'>
                <h1 className='text-[16px] lg:text-[36px] text-center font-[700] font-Montserrat text-white '>Want to be aware of all update</h1>
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-5'>
                <input className='flex-1 h-10 outline-none p-2 font-Montserrat ' type="text" placeholder='Enter email address' />
                <ColoredButton>Subscribe</ColoredButton>
            </div>
        </div>
    </div>
  )
}
