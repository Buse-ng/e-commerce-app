import React, { useReducer } from "react";
import { IoMdAdd, IoMdRemove, IoMdClose } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const { id, title, price, amount, image } = item;

  const amountCounter = (state, action) => {
    switch (action.type) {
      case "+":
        return { count: state.count + 1 };
      case "-":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(amountCounter, { count: 1 });

  return (
    <div className="text-gray-600 mt-2 text-sm">
      <div className="relative flex">
        {/* remove button */}
        <button className="absolute top-0 right-0 text-md text-red-500">
          <FaTrashAlt />
        </button>

        {/* image */}
        <div className="w-1/4 overflow-hidden">
          <Link to={`/product/${id}`}>
            <div className="bg-white overflow-hidden">
              <img
                src={image}
                alt={title}
                className="rounded-t-lg object-contain w-full h-16"
              />
            </div>
          </Link>
        </div>

        {/* title, amount, price */}
        <div className="w-full flex flex-col">
          {/* title */}
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm max-w-[240px] text-primary"
            >
              {title}
            </Link>
          </div>
        </div>
      </div>
      <hr className="border-b-1 border-gray-200 mt-2" />
    </div>
  );
};

export default CartItem;
