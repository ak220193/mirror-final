import React, { useState } from 'react';
import Logo from "../../assets/mirrorlogo.jpg";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 p-4 z-10">
      <div className="flex items-center justify-between">
        {/* Logo for all screens */}
        <div className="md:hidden">
          <img src={Logo} alt="Logo" className="h-10 sm:h-12 lg:h-14" />
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
          <div className="fixed inset-0 bg-white z-20 flex flex-col items-center justify-center space-y-8">
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-black focus:outline-none">
              <IoCloseSharp className="w-8 h-8" />
            </button>
            <a href="#home" className="text-black font-semibold text-2xl hover:text-red-600">Home</a>
            <a href="#profile" className="text-black font-semibold text-2xl hover:text-red-600">About</a>
            <a href="#services" className="text-black font-semibold text-2xl hover:text-red-600">Services</a>
            <a href="#portfolio" className="text-black font-semibold text-2xl hover:text-red-600">Portfolio</a>
            <a href="#get-inked" className="text-black font-semibold text-2xl hover:text-red-600">Get Inked</a>
          </div>
        )}

        {/* Navbar for large screens */}
        <div className="hidden md:flex items-center justify-center w-full gap-10 lg:gap-10 xl:gap-20 4xl:gap-30 my-5 text-white">
          <a href="#home" className="hover:text-red-600 font-semibold text-lg lg:text-xl">Home</a>
          <a href="#profile" className="hover:text-red-600 font-semibold text-lg lg:text-xl">About</a>
          <a href="#services" className="hover:text-red-600 font-semibold text-lg lg:text-xl">Services</a>

          {/* Logo in the center for large screens */}
          <a href="#home" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-10 lg:h-12 mx-4" />
          </a>

          <a href="#portfolio" className="hover:text-red-600 font-semibold text-lg lg:text-xl">Portfolio</a>
          <a href="#client" className="hover:text-red-600 font-semibold text-lg lg:text-xl">Our Designs</a>
          <a href="#get-inked" className="hover:text-red-600 font-semibold text-lg lg:text-xl">Get Inked</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
