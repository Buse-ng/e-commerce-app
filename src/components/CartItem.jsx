import React, { useEffect, useReducer } from "react";
import { IoMdAdd, IoMdRemove, IoMdClose } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const { id, title, price, amount, image } = item;

  const amountCounter = (state, action) => {
    switch (action.type) {
      case "+":
        return { amount: state.amount + 1 };
      case "-":
        return { amount: state.amount - 1 };
      case "set_amount":
        return { amount: action.amount };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(amountCounter, { amount });

  
  useEffect(() => {
    dispatch({ type: "set_amount", amount });
  }, [amount]);
  
  return (
    <div className="text-gray-600 mt-2 text-sm">
      <div className="relative flex">
        {/* remove button */}
        <button className="absolute top-0 right-0 text-md hover:text-red-500">
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
          <div className="flex justify-between mb-2 mx-4">
            <Link
              to={`/product/${id}`}
              className="text-sm max-w-[240px] overflow-hidden whitespace-nowrap overflow-ellipsis"
            >
              {title}
            </Link>
          </div>

          {/* amount, price, item total price */}
          <div className="flex flex-row justify-between">
            {/* amount counter */}
            <div className="mx-4 border-2 border-solid rounded-xl text-lg border-slate-300 flex items-center justify-center">
              <button onClick={() => dispatch({ type: "-" })} className="hover:text-gray-800">
                <IoMdRemove />
              </button>
              <input
                type="text"
                placeholder={state.amount}
                className="w-3 text-center text-sm"
              />
              <button onClick={() => dispatch({ type: "+" })} className="hover:text-gray-800">
                <IoMdAdd />
              </button>
            </div>

            {/* price */}
            <div>
              <p className="text-gray-500">
                ${`${price}`}
                </p>
            </div>

            {/* item total price */}
            <div>
                <p className="text-gray-900">
                ${`${state.amount * price}`}
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
