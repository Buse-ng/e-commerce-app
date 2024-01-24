import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartBar() {
  const { openCartBar, handleCloseCartBar } = useContext(CartContext);

  return (
    <div
      className={`${openCartBar ? "right-0" : "-right-full"} 
        w-full bg-white fixed top-0 h-full shadow-2xl 
        md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-50 px-4 lg:px-[35px]`}
    >
      <h2 className="my-2 text-purple-900 ">
        Shopping Cart
      </h2>
      <hr className="border-b-2 border-gray-200" />
    </div>
  );
}
export default CartBar;
