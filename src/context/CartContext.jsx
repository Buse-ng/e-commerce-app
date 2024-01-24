import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider=({children})=>{
    
   const [openCartBar, setOpenCartBar]=useState(false);

   const handleCloseCartBar=()=>{
    setOpenCartBar(false);
   }

    return(
        <CartContext.Provider value={{openCartBar, setOpenCartBar, handleCloseCartBar}}>
            {children}
        </CartContext.Provider>
    );
}
export default CartProvider;