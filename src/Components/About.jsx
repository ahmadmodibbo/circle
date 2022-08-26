import React from 'react'


export default function About() {
  return (
    <>
    <section className='bg-black py-7'>
        <div className='w-4/5 lg:w-2/3 mx-auto'>
            <h1 className='text-white my-2 text-center text-[18px] lg:text-[48px] font-[700] leading-[19.5px] lg:leading-[58.71px] '>Global Decentralize currency based on blockchain technology</h1>
            <p className='text-primary my-2 text-center text-[14px] lg:text-[20px] '>Web3 is the latest efficient technology</p>
        </div>
        <div className='text-white flex flex-col md:flex-row items-center py-3 px-2 lg:px-12 '>
          <div className='flex-1'>
            <img className='object-cover' src="/images/aboutImg.png" alt="" />
          </div>
          <div className='flex-1 flex flex-col gap-5 py-4'>
            <div className='h-[71px] w-[290px] mx-auto lg:w-[100%] lg:h-[131px] bg-gradient-to-r from-[#C4C4C4]/5 to-[#73FDAA] py-auto grid rounded-[10px] justify-items-end '>
              <div className=' py-2 mx-2 '>
                <h1 className='text-center text-[14px] lg:text-[30px] font-[700] font-Montserrat '>Access Token Market</h1>
                <p className=' text-center text-[12px] lg:text-[18px] font-[500] font-Montserrat text-black '>Buy and sell token anytime <br/> and anywhere</p>
              </div>
            </div>
            <div className='h-[71px] lg:h-[131px] w-[290px] mx-auto lg:w-[100%] bg-gradient-to-r from-[#C4C4C4]/5 to-[#73FDAA] py-auto grid rounded-[10px] justify-items-end '>
              <div className=' py-2 mx-2 '>
                <h1 className='text-center text-[14px] lg:text-[30px] font-[700] font-Montserrat '>User Friendly Interface</h1>
                <p className='text-center text-[12px] lg:text-[18px] font-[500] font-Montserrat text-black '>Easy to navigate</p>
              </div>
            </div>
            <div className='h-[71px] lg:h-[131px] w-[290px] mx-auto lg:w-[100%] bg-gradient-to-r from-[#C4C4C4]/5 to-[#73FDAA] py-auto grid rounded-[10px] justify-items-end '>
              <div className='py-2 mx-2 '>
                <h1 className='text-center text-[14px] lg:text-[30px] font-[700] font-Montserrat '>Ownership Token control</h1>
                <p className='text-center text-[12px] lg:text-[18px] font-[500] font-Montserrat text-black '>Be in control and own as many <br/> asset as possible</p>
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}
