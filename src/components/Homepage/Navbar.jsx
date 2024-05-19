import React, { useState } from "react";
import Logo from "../../assets/mirrorlogo.jpg";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 p-2 flex items-center justify-between z-10">
      {/* Logo for small and medium screens */}
      <div className="md:hidden">
        <img src={Logo} alt="Logo" className="h-8" />
      </div>
      {/* Hamburger menu for small and medium screens */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? (
            <IoCloseSharp className="w-8 h-8" />
          ) : (
            <RxHamburgerMenu className="w-8 h-8" />
          )}
        </button>
      </div>
      {/* Fullscreen menu for small and medium screens */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-20 flex flex-col items-center justify-center space-y-4">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-black focus:outline-none"
          >
            <IoCloseSharp className="w-8 h-8" />
          </button>
          <a href="/" className="text-black hover:text-gray-600">
            Home
          </a>
          <a href="/about" className="text-black hover:text-gray-600">
            About
          </a>
          <a href="/services" className="text-black hover:text-gray-600">
            Services
          </a>
          <a href="/portfolio" className="text-black hover:text-gray-600">
            Portfolio
          </a>
          <a href="/getinked" className="text-black hover:text-gray-600">
            Get Inked
          </a>
          <a href="/aftercare" className="text-black hover:text-gray-600">
            After Care
          </a>
        </div>
      )}
      {/* Navbar for large screens */}
      <div className="hidden  md:flex w-full space-x-8 items-center justify-around text-white">
        <a href="/" className="hover:text-gray-300">
          Home
        </a>
        <a href="/about" className="hover:text-gray-300">
          About
        </a>
        <a href="/services" className="hover:text-gray-300">
          Services
        </a>
        <a href="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 mx-5" />
        </a>
        <a href="/portfolio" className="hover:text-gray-300">
          Portfolio
        </a>
        <a href="/getinked" className="hover:text-gray-300">
          Get Inked
        </a>
        <a href="/aftercare" className="hover:text-gray-300">
          After Care
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
