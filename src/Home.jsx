import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import MarketTrend from './Components/MarketTrend'
import SubscribeSection from './Components/SubscribeSection'
import Footer from './Components/Footer'

export default function Home() {
  return (
    <div>
        <Header />
        <About />
        <MarketTrend />
        <SubscribeSection />
    </div>
  )
}
