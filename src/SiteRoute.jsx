import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Favorites from "./pages/Favorites";

function SiteRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>
    </>
  );
}

export default SiteRoute;
