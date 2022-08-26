import React from 'react'

export default function ColoredButton({children}) {
  return (
    <button className='text-[16px] leading-[19.5px] px-[45px] py-[14px] bg-[#BBFFFF] rounded-lg text-black font-[700] hover:scale-110 '>
        {children}
    </button>
  )
}
