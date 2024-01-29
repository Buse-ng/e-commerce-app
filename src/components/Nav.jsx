import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import { MdFavorite } from "react-icons/md";
import { CartContext } from "../context/CartContext";
import CartBar from "./CartBar";
import { StoreContext } from "../context/StoreContext";
import { FaShoppingBag } from "react-icons/fa";
 
function Nav() {
  const { 
    openCartBar, 
    setOpenCartBar,
    totalAmount, 
    setTotalAmount 
} = useContext(CartContext);

const { searchTerm, setSearchTerm } = useContext(StoreContext);

const [openMenu, setOpenMenu] = useState(false);

  const menuClicked = () => {
    setOpenMenu(!openMenu);
  };
  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleShoppingBagClick = () => {
    setOpenCartBar(!openCartBar);
  };

  // Close the menu if clicked outside of it while the menu is open
  useEffect(() => {
    const closeMenuOnOutsideClick = (e) => {
      if (openMenu && !e.target.closest(".navbar-container")) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("click", closeMenuOnOutsideClick);
    //unmount
    return () => {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, [openMenu]);

  return (
    <>
      <nav className="navbar-container border-gray-200 dark:bg-gray-900 overflow-hidden">
        <CartBar />
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-12 rounded-full" alt="Logo" />
            <span className="self-center md:text-2xl font-semibold whitespace-nowrap dark:text-white">
              Lorem<span className="text-purple-500">store</span>
            </span>
          </Link>
          <button
            onClick={menuClicked}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg 
            md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
            <SearchInput
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
            />
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
                  className="block py-2 px-3 md:p-0 text-white bg-purple-700  
                  md:bg-transparent md:text-purple-500 rounded"
                  aria-current="home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/favorites"
                  className="block text-white text-xl bg-purple-700  md:text-purple-500 
                  py-2 px-3 md:p-0 md:bg-transparent rounded"
                >
                  <MdFavorite />
                </Link>
              </li>
              <li>
                <div
                  onClick={handleShoppingBagClick}
                  className="flex relative py-2 px-3 md:p-0 text-white text-xl bg-purple-700 
                  md:bg-transparent md:text-purple-500  cursor-pointer rounded"
                >
                  <FaShoppingBag />
                  <div
                    className={`absolute -bottom-2 -right-1 flex items-center bg-gray-500 
                    justify-center text-white text-xs w-4 h-4 rounded-full`}
                  >
                    {totalAmount}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
