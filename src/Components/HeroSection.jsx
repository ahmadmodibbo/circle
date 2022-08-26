import React from 'react'
import ColoredButton from './ColoredButton'
import WhiteButton from './WhiteButton'

export default function HeroSection() {
  return (
    <div className='flex flex-col items-center justify-center lg:flex-row py-7'>
        <div className='flex-1 items-center py-4'>
            <div className='w-4/5 mx-auto'>
                <h1 className='text-[22px] lg:text-[54px] font-[700] text-center lg:text-left leading-[39.01px] lg:leading-[91.43px] font-Montserrat text-white '>Save, Buy and Sell Your blockchain asset</h1>
                <p className='text-[20px] lg:-[36px] text-center lg:text-left  font-[500] lg:w-4/5 font-Montserrat text-white '>The easy to manage and trade your cryptocurency asset</p>
                <div className='my-6 lg:my-10 text-center lg:text-left flex flex-col lg:flex-row gap-5'>
                    <ColoredButton>Connect Wallet</ColoredButton>
                    <WhiteButton>Start Trading</WhiteButton>
                </div>
            </div>
        </div>
        <div className='flex-1'>
            <img className=' object-cover ' src="/images/heroimg.png" alt="" />
        </div>
    </div>
  )
}
