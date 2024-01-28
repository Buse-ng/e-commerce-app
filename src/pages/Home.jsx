import React, { useContext } from 'react'
import ProductCards from '../components/ProductCards'
import SliderData from '../components/SliderData'
import SearchInput from '../components/SearchInput'
import { StoreContext } from '../context/StoreContext';

function Home() {
  const { searchTerm, setSearchTerm } = useContext(StoreContext);
  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };
  return (
    <div className='mx-auto'>
      <SliderData/>
      <div className='md:hidden'>
        <SearchInput searchTerm={searchTerm} onSearchChange={handleSearchChange}/>
      </div>
      <ProductCards/>
    </div>
  )
}

export default Home