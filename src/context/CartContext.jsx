import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider=({children})=>{

    const [openCartBar, setOpenCartBar]=useState(false);
    const [cart, setCart]=useState([]);

   const handleCloseCartBar=()=>{
    setOpenCartBar(false);
   }

   const addToCart=(product, id)=>{
    // console.log(`${product.title} added to cart`);
    const newItem={...product , amount:1};
    // console.log(newItem)
    
    // check if the item is already in the cart
    const cartItem = cart.find((item)=>{
        return item.id === id;
    });

    // if cart item is already in the cart
    if(cartItem){
        const newCart = [...cart].map(item =>{
            if(item.id === id){
                return {...item, amount: cartItem.amount + 1}
            }else{
                return item;
            }
        })
        setCart(newCart);
    }
    else{
        setCart([...cart, newItem]); // if the item isn't in the cart, so the item is added to the cart
    }
   }
   console.log(cart);

    return(
        <CartContext.Provider value={{openCartBar, setOpenCartBar, handleCloseCartBar, addToCart, cart}}>
            {children}
        </CartContext.Provider>
    );
}
export default CartProvider;