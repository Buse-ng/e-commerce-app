import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaShoppingBasket } from "react-icons/fa";

const ProductDetail = () => {
  let { id } = useParams();

  const { products } = useContext(StoreContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  if (!product) {
    return <section>Loading...</section>;
  }
  const { title, image, description, price } = product;

  return (
    <>
      <div className="flex container mx-auto p-4 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-x-4">
          
          {/* image */}
          <div className="flex flex-1 items-center justify-center bg-white">
            <img src={image} alt={title} className="max-w-44 lg:max-w-64" />
          </div>

          {/* title, descrition, price, add button */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl font-bold md:text-2xl mx-auto">{title}</h2>
            <p className="my-4 text-wrap overflow-ellipsis overflow-hidden tracking-tight lg:text-xl">{description}</p>
            <p className="text-base lg:text-2xl text-slate-700 font-bold mb-2">${price}</p>

            <button
              onClick={() => addToCart(product, product.id)}
              className="rounded-xl px-2 py-1 lg:p-4 bg-slate-700 hover:bg-slate-800 text-slate-300 font-semibold"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
