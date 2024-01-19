// import Button from "@mui/material/Button";
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
    dots: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  return (
    <div className="bg-purple-200">
      <Slider {...sliderSettings}>
        {categories.map((category) => (
          <div
            key={category}
            className="relative w-full"
          >
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              {/* <img
                className="h-16 w-16 object-cover"
                src={randomImgForSlider(category)}
                alt="img-slider"
              /> */}
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div>
                  <h2 className="text-4xl font-semibold">{`${
                    category.split(" ")[0]
                  } colleciton`}</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                  SHOP NOW
                </button>
                {/* <Button variant="contained" color="secondary">
                  SHOP NOW
                </Button> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderData;
