import React from 'react'
import Market from './Market'

export default function MarketTrend() {
  return (
    <div className='bg-black py-14 px-3'>
        <div className='mb-[60px] mt-[30px]'>
            <h1 className='text-white text-[30px] lg:text-[48px] leading-[32px] text-center lg:text-left font-Montserrat font-[700] '>Market Trend</h1>
        </div>
        <div className='flex flex-col md:flex-row flex-wrap gap-6 items-center justify-center'>
            <Market/>
        </div>
        <div className='text-white flex justify-end  mt-8 px-4'>
          <a className='flex text-2xl font-Montserrat items-center gap-3 hover:text-primary hover:scale-x-110' href="/coinsList"><h1 className=''>Load More Coins</h1><ion-icon name="arrow-forward-circle-outline"></ion-icon></a>
        </div>
    </div>
  )
}
