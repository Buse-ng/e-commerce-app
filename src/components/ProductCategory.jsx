import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const ProductCategory = ({ setFilterCategory }) => {
    const { products } = useContext(StoreContext);
  
    const firstLetterUpperCase=(str)=>{
      return str.split(" ").map(letter => letter.charAt(0).toUpperCase() + letter.slice(1)).join(" ");
    };

    const categories= ["All Products", ...new Set(products?.map((item) => (item.category)))];
    
  return (
    <div className="flex justify-center my-4">
    {categories.map((category) => (
      <button
        key={category}
        className="mx-2 p-2 bg-gray-300 rounded-md"
        onClick={() => setFilterCategory(category === "All Products" ? null : category)}
      >
        {firstLetterUpperCase(category)}
      </button>
    ))}
  </div>
  )
}

export default ProductCategory