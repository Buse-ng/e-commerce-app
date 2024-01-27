import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Favorites from "./pages/Favorites";
import ProductDetail from "./pages/ProductDetail";
import NotFoundPage from "./pages/NotFoundPage";

function SiteRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/product/:id" element={<ProductDetail/>}/>
        
        <Route path="*" element={<NotFoundPage/>} /> {/* must always be on the last line */} {/* like switch case default */}
      </Routes>
    </>
  );
}

export default SiteRoute;
