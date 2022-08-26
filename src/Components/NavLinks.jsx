import React from 'react'

export default function NavLinks() {
    const links = [
        {name:"How it Works", link:"/"},
        {name:"Blog", link:"/"},
        {name:"Support", link:"/"},
    ]
  return (
    <>
        {
            links.map((link,i)=>(
               <li key={i} className='font-[24px] font-[500] leading-[29.26px] text-white hover:text-primary  '>
                    <a href={link.link}>{link.name}</a>
               </li>
            ))
        }
    </>
  )
}
