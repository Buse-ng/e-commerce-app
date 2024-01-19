import React from 'react'
import ProductCards from '../components/ProductCards'
// import ProductCategory from '../components/ProductCategory'
import SliderData from '../components/SliderData'

function Home() {
  return (
    <div className='mx-auto bg-purple-100'>
      <SliderData/>
      <ProductCards/>
    </div>
  )
}

export default Home