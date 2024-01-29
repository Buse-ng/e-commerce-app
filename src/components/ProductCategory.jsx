import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const ProductCategory = ({ setFilterCategory, resetSort }) => {
  const { products } = useContext(StoreContext);
  
  const firstLetterUpperCase=(str)=>{
    return str.split(" ").map(letter => letter.charAt(0).toUpperCase() + letter.slice(1)).join(" ");
  };

  const categories= ["All Products", ...new Set(products?.map((item) => (item.category)))];
    
  return (
    <div className="flex flex-wrap justify-center my-16">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => { setFilterCategory(category === "All Products" ? null : category);
        resetSort();}}

        className={`flex items-center justify-center bg-white rounded-lg
        w-44 mx-2 my-2 p-2 md:mx-4 md:p-3 lg:mx-6 lg:p-4 font-semibold
        text-[#AC87C5] hover:text-purple-600 hover:bg-[#E5D4FF] 
        shadow-md shadow-violet-400 transition ease-in duration-150`}
      >
        {firstLetterUpperCase(category)}
      </button>
    ))}
  </div>
  )
}

export default ProductCategory