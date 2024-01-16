import React, { createContext, useState, useEffect } from "react";
import FakeStoreApi from "../axios/FakeStoreApi";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [products, SetProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try{

        const response = await FakeStoreApi.get("/products");
        const data = response.data;
        console.log(data);
        SetProducts(data);
      }catch(error){
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <StoreContext.Provider value={{ products }}>
      {children}
    </StoreContext.Provider>
  );
};
export default StoreProvider;
