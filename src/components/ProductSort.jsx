import React, { useContext, useState } from "react";
import { PiArrowsDownUpBold } from "react-icons/pi";
import { StoreContext } from "../context/StoreContext";


const ProductSort = ( { onSort } ) => {

  const { products } = useContext(StoreContext);

  const [openMenu, setOpenMenu] = useState(false);
  const sortMenu = () => {
    setOpenMenu(!openMenu);
  };
  
  const sortBy=(sorted)=>{

    let product=[...products];

    switch(sorted){
      case "LowtoHigh":
        product.sort((a,b)=>{ return (a.price) - (b.price)});    
        break;
      case "HightoLow":
        product.sort((a,b)=>{return (b.price) - (a.price)});
        break;
      case "HighestRating":
        product.sort((a,b)=>{return (b.rating.rate) - (a.rating.rate)});
        break;
      default:
        break;
    }

    setOpenMenu(false);
    onSort(sorted, product);
  }

  return (
    <div className="relative mb-6 flex flex-col items-end mr-auto">
      <button 
        className="bg-white p-3 rounded-full font-semibold text-[#9170a7]" 
        onClick={sortMenu}>
        <PiArrowsDownUpBold />
      </button>

      {openMenu && (
        <div className="absolute right-0 mt-10 w-40 rounded-md border border-gray-200 bg-gray-50 flex flex-col text-gray-800 z-50">
          <button 
            className="w-full p-3 border-b border-gray-200 text-left"
            onClick={()=>sortBy("LowtoHigh")}
            >
            Price Low to High
          </button>

          <button className="w-full p-3 border-b border-gray-200 text-left"
          onClick={()=>sortBy("HightoLow")}
          >
            Price High to Low
          </button>

          <button
          className="w-full p-3 text-left"
          onClick={()=>sortBy("HighestRating")}
          >
            Highest Ratings
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductSort;
