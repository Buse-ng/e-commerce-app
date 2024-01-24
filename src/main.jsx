import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./reset.css";
import StoreProvider from "./context/StoreContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import FavoritesProvider from "./context/FavoritesContext.jsx";
import CartProvider from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <CartProvider>
      <StoreProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </StoreProvider>
    </CartProvider>
  </Router>
);
