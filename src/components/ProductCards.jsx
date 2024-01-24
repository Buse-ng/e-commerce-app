import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import ProductData from "./ProductData";
import ProductCategory from "./ProductCategory";
import ProductSort from "./ProductSort";

const ProductCards = () => {
  const { products } = useContext(StoreContext);
  
  const [filterCategory, setFilterCategory] = useState(null);
  const [sortedProducts, setSortedProducts] = useState(null);

  const applyFilterAndSort = () => {
    let filteredAndSortedProducts = [...products];
    // filter the products
    filteredAndSortedProducts = filteredAndSortedProducts.filter((item) => {
      return !filterCategory || item.category === filterCategory;
    });

    // sort the products
    if (sortedProducts) {
      filteredAndSortedProducts = [...sortedProducts];
    }
    return filteredAndSortedProducts;
  }

  const handleSort = (sorted, sortedProducts) => {
    setSortedProducts(sortedProducts);
    if (filterCategory) {
      const updatedFilteredProducts = sortedProducts.filter((item) => {
        return item.category === filterCategory;
      });
      setSortedProducts(updatedFilteredProducts);
    }
  };

  const resetSort = () => {
    setSortedProducts(null);
  };

  return (
    <>
      <div className="container mx-auto overflow-hidden">
      <ProductCategory setFilterCategory={setFilterCategory} resetSort={resetSort} />
      <ProductSort onSort={handleSort} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-sm md:max-w-none mx-auto md:mx-0">
          {applyFilterAndSort().map((product) => (
            <ProductData product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCards;
