import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import ProductData from "./ProductData";
import ProductCategory from "./ProductCategory";

const ProductCards = () => {
  const { products } = useContext(StoreContext);

    const [filterCategory, setFilterCategory] = useState(null);

    const filteredProducts = products?.filter((item) => {
    return !filterCategory || item.category === filterCategory;
    });

  return (
    <>
        <ProductCategory 
          setFilterCategory={setFilterCategory} 
        />

        <div className="container mx-auto mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
            <ProductData product={product} key={product.id} />
            ))}
        </div>
        </div>
    </>
  );
};

export default ProductCards;
