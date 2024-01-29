import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderData = () => {
  const { products } = useContext(StoreContext);
  const categories = [...new Set(products?.map((item) => item.category))];

  const randomImgForSlider = (category) => {
    const categoryProducts = products.filter(
      (item) => item.category === category
    );
    const randomProduct =
      categoryProducts[Math.floor(Math.random() * categoryProducts.length)];
    return randomProduct?.image || "";
  };

  const sliderSettings = {
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  return (
    <div className="bg-[#fff] overflow-hidden">
      <Slider {...sliderSettings}>
        {categories.map((category) => (
          <div key={category} className="relative w-full">
            {/* Carousel wrapper */}
            <div className="relative h-56 rounded-lg md:h-96">
              <img
                className="md:p-8 flex items-center justify-center object-cover"
                src={randomImgForSlider(category)}
                alt="img-slider"
              />
              <div className="absolute inset-0 hidden md:flex items-center justify-end text-purple-400 font-semibold">
                <div>
                  <h2 
                    className="text-xl md:text-5xl transform -rotate-90 md:rotate-0 tracking-wide
                     text-gray-500 hover:text-gray-800"
                  >
                      {`${category.split(" ")[0]} colleciton`}
                  </h2>
                  <p className="py-2 hover:text-purple-500">
                    Explore the unique and stylish pieces in our {`${category.split(" ")[0]}`} collection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderData;
