import React from 'react'

export default function Socials() {
    const socials=[
        {name:"Facebook", link:"/", icon:"fb.svg"},
        {name:"Instagram", link:"/", icon:"ig.svg"},
        {name:"Linkedln", link:"/", icon:"ln.svg"},
        {name:"Discord", link:"/", icon:"ds.svg"},
        {name:"Telegram", link:"/", icon:"tl.svg"},
    ]
  return (
    <>
        {
            socials.map((social,i)=>(
                <li key={i} >
                    <a className='flex space-x-3 items-center font-Montserrat ' href={social.link}><img className='h-[28px]' src={`icons/${social.icon}`} alt="" /></a>
                </li>
            ))
        }
    </>
  )
}
