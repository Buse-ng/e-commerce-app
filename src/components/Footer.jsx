import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"
function Footer() {
  return (
    <>
      <footer className="mt-24 bg-gray-900 rounded-t-sm shadow overflow-x-auto">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-16">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3">
              <img
                src={logo}
                className="h-8 rounded-full"
                alt="Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Lorem<span className="text-purple-500">store™</span>
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
              <li>
                <Link to="/" className="hover:underline me-4 md:me-6">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center">
            © 2024
            <Link to="/" className="hover:underline">
              LoremStore™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
