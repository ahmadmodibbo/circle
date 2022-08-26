import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';

export default function Coins() {
    const [pop, setPop]=useState(true)
    const [coins, setCoins]=useState(null)
    const url ="https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=150&page=1&sparkline=false";

    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            setCoins(res.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[])
    if(!coins) return (null);
  return (
    <>
        {
          coins.map((coin,i)=>(
            <div className='w-[297px] h-[160px] shadow-lg shadow-[#73FDAA] flex flex-col justify-between p-3 ' key={i}>
                <div className='flex justify-between items-center px-2 py-4'>
                    <div className='flex items-center gap-3'>
                        <img className='h-[40px] w-[40px] object-cover ' src={`/icons/coins/${coin.symbol}.svg`} alt={coin.symbol} />
                        <h1 className='text-[18px] text-white uppercase leading-[21.13px] font-Raleway font-[600] '>{coin.symbol}</h1>
                        <span className='text-[10px] leading-[11.74px] text-white font-Raleway font-[600] '>{coin.name}</span>
                    </div>
                    <div className={` text-3xl ${coin.price_change_percentage_24h>0?'text-green-600':'text-red-600'}`}>
                        <ion-icon name={`${coin.price_change_percentage_24h>0?'trending-up-outline':'trending-down-outline'}`}></ion-icon>
                    </div>
                </div>
                <div className='flex justify-between px-2'>
                    <div>
                            <h1 className='text-white text-[24px] leading-[28.13px] font-[500] my-1 font-Roboto '><span className='mx-[3px]'>#</span>{(coin.current_price).toLocaleString(undefined, { maximumFractionDigits: 2 })}</h1>
                        <span className={`text-white text-[18px] leading-[28.8px] font-[500] my-1 font-Roboto ${coin.price_change_percentage_24h>0?'text-green-600':'text-red-600'}`}>{(coin.price_change_percentage_24h).toFixed(3)}</span>
                    </div>
                    <div className={` text-6xl  ${coin.price_change_percentage_24h>0?'text-green-600':'text-red-600'}`}>
                        <ion-icon name="analytics-outline"></ion-icon>
                    </div>
                </div>
            </div>
          ))
        }
        
    </>
  )
}
