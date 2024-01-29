import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [openCartBar, setOpenCartBar] = useState(false); // cart sidebar 
  const [cart, setCart] = useState([]);  // cart content
  const [totalAmount, setTotalAmount] = useState(0); // for shopping bag symbols
  const [totalPrice, setTotalPrice] = useState(0); //total price for cart bar
  
  // total price for CartBar
  useEffect(() =>{
    const totalPrice = cart.reduce((total, item)=>{
      return total + item.price * item.amount;
    }, 0);
    setTotalPrice(totalPrice);
  });
  
  //total amount for shopping bag symbols (navbar)
  useEffect(() =>{
    const totalAmount = cart.reduce((total, item)=>{
      return total + item.amount;
    }, 0);
    setTotalAmount(totalAmount);
  });

  //cart sidebar open-close
  const handleCloseCartBar = () => {
    setOpenCartBar(false);
  };

  // add a product to the cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    // if the cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]); // if the item isn't in the cart, add the new item to the cart
    }
  };

  // specific item
  const removeItemFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // all items
  const removeAllItemsFromCart = () => {
    setCart([]);
  };

  // amount button increase for CartItem 
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  //amount button decrease for CartItem 
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCartItem = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCartItem);
    }
    if (cartItem.amount < 2) {
      removeItemFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        openCartBar,
        setOpenCartBar,
        handleCloseCartBar,
        addToCart,
        cart,
        setCart,
        removeItemFromCart,
        removeAllItemsFromCart,
        increaseAmount,
        decreaseAmount,
        totalAmount,
        setTotalAmount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
