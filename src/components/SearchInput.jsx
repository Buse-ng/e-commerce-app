import React, { useContext, useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { StoreContext } from '../context/StoreContext';

function SearchInput() {
  const { products, searchTerm, setSearchTerm } = useContext(StoreContext);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filteredResults = products.filter(product =>
      product?.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [searchTerm, products]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className='mt-4 md:mt-0'>
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search Products
          </label>

          <div className="relative">
            <input
              value={searchTerm}
              onChange={handleSearchChange}
              type="search"
              id="default-search"
              className={`block w-full p-3 ps-10 text-sm rounded-2xl text-gray-700  
              border bg-gray-100 border-gray-50 placeholder-gray-400 
            md:text-white md:border-gray-600 md:bg-gray-700`}
              placeholder="Search Products"
              required=""
            />
            <button
              type="button"
              className="absolute end-2.5 bottom-2 text-sm p-2 rounded-xl
              bg-gray-500 hover:bg-gray-600 font-medium text-white"
            >
              <span className='text-gray-200'>
                <FaSearch/>
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchInput;
