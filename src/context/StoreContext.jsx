import React, { createContext, useState, useEffect, useContext } from "react";
import FakeStoreApi from "../axios/FakeStoreApi";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await FakeStoreApi.get("/products");
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <StoreContext.Provider value={{ products, searchTerm, setSearchTerm }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
