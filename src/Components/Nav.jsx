import React, { useState } from 'react'
import NavLinks from './NavLinks'
import Socials from './Socials'

export default function Nav() {
    const [navOpen, setNavOpen]= useState(false)
    
  return (
    <nav className='bg-black py-2 px-2 lg:px-8 text-white flex items-center justify-between'>
        <img className='h-10' src="/images/logo.png" alt="" />
        <ul className='hidden lg:flex items-center gap-16 '>
           <NavLinks/>
        </ul>
        <ul className='hidden lg:flex items-center gap-4'>
            <Socials/>
        </ul>
        {/* Mobile Nav */}
            <ul className={`lg:hidden bg-black fixed w-2/3 top-0 z-50 h-screen p-7 pt-10 flex flex-col gap-6 duration-500 ${navOpen?'right-0':'right-[-100%]'} `} >
                <NavLinks />
                <ul className='flex flex-wrap gap-6 justify-center'>
                    <Socials/>
                </ul>
            </ul>
        {/* Mobile Nav */}
        <div className='lg:hidden text-4xl z-50 text-white' onClick={()=>(setNavOpen(!navOpen))}>
            <ion-icon name={navOpen?'close-circle-outline':'menu-outline'}></ion-icon>
        </div>
    </nav>
  )
}
