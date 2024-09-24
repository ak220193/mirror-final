import React from 'react';
import Logo from '../../assets/mirrorlogo.jpg'; 
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'; 
import { FaWhatsapp } from "react-icons/fa";
import payment2 from '../../assets/payment/paytm-etonline.webp';
import payment4 from '../../assets/payment/5232468.png';

const Footer = () => {
  return (
    <footer className=" text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Column 1: Company Logo and Description */}
        <div className="flex flex-col items-center">
          <img src={Logo} alt="Tattoo Studio Logo" className="h-16 w-auto mb-4" />
          <p className="text-sm text-center">
            Welcome to our Tattoo Studio, where art meets skin. Our skilled artists are ready to create the perfect tattoo for you!
          </p>
          
        </div>

        {/* Column 2: Working Hours */}
        <div className="flex flex-col justify-center items-center">
          <h4 className="font-semibold text-2xl mb-2">Working Hours</h4>
          <p className="text-sm">Monday - Friday: 10 AM - 8 PM</p>
          <p className="text-sm">Saturday: 11 AM - 6 PM</p>
          <p className="text-sm">Sunday: 11 AM - 7 PM</p>
        </div>

        {/* Column 3: Payment Modes */}
        <div className="flex flex-col justify-center items-center">
          <h4 className="font-semibold text-lg mb-2 ml-5 text-center">Payment Modes</h4>
          <div className="flex items-center justify-center space-x-4">
            <img src={payment2} alt="Paytm" className="h-12 w-12 rounded-full  p-1" />
            <img src={payment4} alt="QR Code" className="h-12 w-12 rounded-full  p-1" />
          </div>
        </div>

        {/* Column 4: Social Handles */}
        <div className="flex flex-col justify-center items-center">
          <h4 className="font-semibold text-lg mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook"><FaFacebook className="text-2xl hover:text-blue-300" /></a>
            <a href="#" aria-label="Instagram"><FaInstagram className="text-2xl hover:text-red-600" /></a>
            <a href="#" aria-label="Whatsapp"><FaWhatsapp className="text-2xl hover:text-green-600" /></a>
            <a href="#" aria-label="YouTube"><FaYoutube className="text-2xl hover:text-red-600" /></a>
          </div>
        </div>

      </div>
      <div className="text-center mt-8 text-xs font-poppins italic tracking-wider">
        © {new Date().getFullYear()} AK DESIGN STUDIO | All rights reserved. | Designed with ❤️ by AK 
      </div>
    </footer>
  );
};

export default Footer;
