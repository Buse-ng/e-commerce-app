import React from 'react'
import Slider from '../components/Slider'
import ProductCards from '../components/ProductCards'
import ProductCategory from '../components/ProductCategory'

function Home() {
  return (
    <div className='mx-auto bg-purple-100'>
      <Slider/>
      <ProductCards/>
    </div>
  )
}

export default Home