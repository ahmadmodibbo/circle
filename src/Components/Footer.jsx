import React from 'react'
import NavLinks from './NavLinks'
import Socials from './Socials'

export default function Footer() {
  return (
   <footer className='flex flex-col md:flex-row  px-7 lg:px-20 py-8 bg-black gap-4'>
    <div className='flex-1 flex flex-col items-center lg:items-start gap-4 px-3'>
        <img className='h-10' src="/images/Logo.png" alt="" />
        <h1 className='text-white text-[16px] lg:text-[18px] leading-[24px] text-center lg:text-left '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, numquam reprehenderit at ducimus voluptatum similique asperiores debitis temporibus, pariatur dolor voluptate error dignissimos recusandae sunt, laudantium eveniet corporis ut dolores.</h1>
    </div>
    <div className='flex-1 items-center text-white px-4'>
        <ul className='text-center lg:text-left text-[20px] space-y-4'>
            <h1 className='text-[32px] leading-[43.2px] font-[700] font-Montserrat my-4 '>Quick Link</h1>
            <NavLinks/>
        </ul>
    </div>
    <div className='flex-1 items-center text-white px-4'>
        <h1 className='text-[32px] text-center leading-[43.2px] font-[700] font-Montserrat my-4 '>Social Media</h1>
        <ul className='flex justify-around'>
            <Socials/>
        </ul>
    </div>
   </footer>
  )
}
