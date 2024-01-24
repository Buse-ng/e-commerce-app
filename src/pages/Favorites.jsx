import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import ProductData from "../components/ProductData";
import { StoreContext } from "../context/StoreContext";

const Favorites = () => {
  const {products}=useContext(StoreContext);
  const { favorites } = useContext(FavoritesContext);
  const favoriteProducts = products.filter(product => favorites.includes(product.id));

  return (
    <div className="container mx-auto overflow-hidden">
      <h2 className="text-2xl font-bold my-4 mx-auto text-purple-950">Favorites</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-sm md:max-w-none mx-auto md:mx-0">
        {favoriteProducts.map((product) => (
          <ProductData key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
