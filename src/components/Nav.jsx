import React, { useContext, useState } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import { MdFavorite, MdOutlineShoppingBag } from "react-icons/md";
import { CartContext } from "../context/CartContext";
import CartBar from "./CartBar";
import { StoreContext } from "../context/StoreContext";

function Nav() {
  const {openCartBar, setOpenCartBar}=useContext(CartContext);
  const [openMenu, setOpenMenu] = useState(false);
  const { searchTerm, setSearchTerm } = useContext(StoreContext);
  const menuClicked = () => {
    setOpenMenu(!openMenu);
  };
  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 overflow-hidden">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-12 rounded-full"
              alt="Logo"
            />
            <span className="self-center md:text-2xl font-semibold whitespace-nowrap dark:text-white">
              Lorem<span className="text-purple-500">store</span>
            </span>
          </Link>
          <button
            onClick={menuClicked}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden md:block">
            <SearchInput searchTerm={searchTerm} onSearchChange={handleSearchChange} />
          </div>        

          <div
            className={`${
              openMenu ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 items-center">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 md:p-0 text-white bg-purple-700 rounded md:text-purple-500 md:bg-transparent"
                  aria-current="home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/favorites"
                  className="block py-2 px-3 md:p-0 text-white text-xl bg-purple-700 rounded md:text-purple-500 md:bg-transparent"
                >
                  <MdFavorite/>
                </Link>
              </li>
              <li>
                <button 
                  onClick={()=> setOpenCartBar(!openCartBar)}
                  className="flex relative py-2 px-3 md:p-0 text-white text-xl bg-purple-700 rounded
                   md:text-purple-500 md:bg-transparent"
                >
                  <CartBar/> 
                  <MdOutlineShoppingBag  />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
