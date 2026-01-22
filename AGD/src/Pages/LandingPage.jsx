import React from 'react'
import Header from '../Components/Header.jsx'
import HeroSection from '../Components/HeroSection.jsx'
import Product from '../Components/Product.jsx'

const LandingPage = () => {
  return (
    <div className='w-full  mx-auto overflow-x-hidden'>
      <section className=''>
        
      <Header/>
      </section>
      <section>
      <HeroSection/>
      </section>
      <section>
        <Product/>
      </section>
      
    </div>
  )
}

export default LandingPage
