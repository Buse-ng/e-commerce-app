import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MdAddShoppingCart, MdFavorite, MdOutlineShoppingCart } from "react-icons/md";
import { FavoritesContext } from "../context/FavoritesContext";

const ProductData = ({ product }) => {
  const { id, title, image, price, rating } = product;

  const { favorites, toggleFavorites } = useContext(FavoritesContext);

  const isFavorite = favorites.includes(id);

  const favoriteBtnClicked = () => {
    toggleFavorites(id);
    // console.log("favoriteBtnClicked");
  };


  return (
    <div className="w-full max-w-md bg-[#F3EEEA] border border-gray-200 rounded-lg shadow h-96 overflow-hidden">
      {/* card img and favorites button */}
      <div className="h-1/2 overflow-hidden">
        <div className="block relative">
          <Link to={`/product/${id}`}>
            <div className="bg-white overflow-hidden">
              <img
                src={image}
                alt={title}
                className="rounded-t-lg object-contain w-full h-44 hover:h-40"
              />
            </div>
          </Link>
          
          {/* favorites button */}
          <div className="absolute top-2 right-2">
            <button
              onClick={favoriteBtnClicked}
              className={`${isFavorite ? "text-red-600" : "text-gray-400" } bg-gray-50 text-xl p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300`}
            >
              <MdFavorite />
            </button>
          </div>
          {/* -p-8  */}
        </div>
      </div>
      {/* card content */}
      <div className="p-4">
        {/* title */}
        <div>
          <Link to={`/product/${id}`} className="block">
            <h5 className="sm:text-md md:text-xl font-semibold tracking-tight text-gray-900 overflow-hidden overflow-ellipsis whitespace-nowrap">
              {title}
            </h5>
          </Link>
        </div>
        {/* rating system */}
        <div className="flex items-center mt-2.5 mb-4">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-4 h-4 ${
                  star <= rating.rate ? "text-yellow-300" : "text-gray-300"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
            {rating.rate.toFixed(1)}
          </span>
        </div>
        {/* price */}
        <div className="flex items-center justify-between mb-4">
          <span className="sm:text-xl md:text-2xl font-bold text-gray-900">
            ${price}
          </span>
        </div>
        {/* add to cart butons */}
        <div
          className="border border-gray-800 bg-gray-300 rounded-2xl hover:bg-gray-200 cursor-pointer 
        focus:outline-none focus:ring"
        >
          <button className="bg-transparent text-gray-500 text-xl p-3 ml-4">
            <MdAddShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductData;
