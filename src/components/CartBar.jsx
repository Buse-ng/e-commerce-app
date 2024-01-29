import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { FaTrashAlt, FaWindowClose } from "react-icons/fa";

function CartBar() {
  const {
    openCartBar,
    handleCloseCartBar,
    cart,
    removeAllItemsFromCart,
    totalPrice,
  } = useContext(CartContext);
    
  return (
    <div
      className={`${openCartBar ? "right-0" : "-right-full"} 
        w-full bg-white fixed top-0 h-full shadow-2xl 
        md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-50 px-4 lg:px-[35px]`}
    >
      <div className="flex justify-between items-center">
        <h2 className="my-2 text-purple-900 font-semibold">Shopping Cart</h2>
        <button onClick={() => handleCloseCartBar()}>
          <FaWindowClose />
        </button>
      </div>

      <hr className="border-b-2 border-gray-200" />

      <div className="flex flex-col gap-y-2 h-[75vh] lg:h-[75vh] mt-2 overflow-y-auto overflow-x-hidden">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      
 
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center bg-purple-100 p-2">
          <div className="font-semibold">
            Total: <span> ${(parseFloat(totalPrice).toFixed(2))} </span>
          </div>
          <div
            onClick={removeAllItemsFromCart}
            className="flex items-center justify-center text-white bg-red-600 
            cursor-pointer w-8 h-8 py-2 rounded-lg"
          >
            <FaTrashAlt />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartBar;
