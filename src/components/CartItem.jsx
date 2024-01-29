import React, { useContext} from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { id, title, price, amount, image } = item;
  const { removeItemFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

  return (
    // item content
    <div className="text-gray-600 mt-2 text-sm">
      <div className="relative flex">
        {/* remove button */}
        <button
          onClick={() => removeItemFromCart(id)}
          className="absolute top-0 right-0 text-md hover:text-red-500"
        >
          <FaTrashAlt />
        </button>

        {/* image */}
        <div className="w-1/4 overflow-hidden">
          <Link to={`/product/${id}`}>
            <div className="bg-white overflow-hidden">
              <img
                src={image}
                alt={title}
                className="rounded-t-lg object-contain w-16 h-16"
              />
            </div>
          </Link>
        </div>

        {/* title, amount, price */}
        <div className="w-full flex flex-col">
          {/* title */}
          <div className="flex justify-between mb-2 mx-4">
            <Link
              to={`/product/${id}`}
              className="text-sm max-w-[240px] overflow-hidden whitespace-nowrap overflow-ellipsis"
            >
              {title}
            </Link>
          </div>

          <div className="flex flex-row justify-between">
            {/* amount counter */}
            <div 
              className="mx-4 border-2 border-solid rounded-xl text-lg border-slate-300 
              flex items-center justify-center"
            >
              <button
                onClick={() => decreaseAmount(id)}
                className="hover:text-gray-800"
              >
                <IoMdRemove />
              </button>
              <input
                type="text"
                placeholder={amount}
                onChange={(e) => handleAmountChange(e)}
                className="w-5 text-center text-sm"
              />
              <button
                onClick={() => increaseAmount(id)}
                className="hover:text-gray-800"
              >
                <IoMdAdd />
              </button>
            </div>

            {/* price */}
            <div>
              <p className="text-gray-500">${`${price}`}</p>
            </div>

            {/* item total price */}
            <div>
              <p className="text-gray-900">
                ${`${(amount * price).toFixed(2)}`}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-b-1 border-gray-200 mt-2" />
    </div>
  );
};

export default CartItem;
