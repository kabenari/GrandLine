import React from 'react'
import Hero from '../../components/Hero'
import Popular from '../../components/Popular'
import Offers from '../../components/Offers'
import RecentDrops from '../../components/RecentDrops'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <RecentDrops/>
      <Footer/>
    </div>
  )
}

export default Home
