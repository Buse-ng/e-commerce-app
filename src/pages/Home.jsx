import React from 'react'
import ProductCards from '../components/ProductCards'
import SliderData from '../components/SliderData'

function Home() {
  return (
    <div className='mx-auto'>
      <SliderData/>
      <ProductCards/>
    </div>
  )
}

export default Home