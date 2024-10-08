import React, { useEffect, useState } from 'react';
import img1 from "../../assets/wallpaperflare.com_wallpaper.jpg";
import gsap from 'gsap';

const Client = () => {
  // State for each of the numbers
  const [tattoos, setTattoos] = useState(0);
  const [clients, setClients] = useState(0);
  const [stencils, setStencils] = useState(0);
  const [piercings, setPiercings] = useState(0);

  // Animation for counting numbers
  useEffect(() => {
    const animateNumbers = (setter, endValue) => {
      let start = 0;
      const duration = 2000; // animation duration in ms
      const increment = endValue / (duration / 60); // how much to increment each frame

      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setter(endValue); // Set to final value
          clearInterval(timer);
        } else {
          setter(Math.floor(start)); // Update number incrementally
        }
      }, 60); // approx 60 fps
    };

    animateNumbers(setTattoos, 2500);
    animateNumbers(setClients, 1250);
    animateNumbers(setStencils, 1650);
    animateNumbers(setPiercings, 306);

    // GSAP pop-in effect
    gsap.fromTo(
      ".number",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, stagger: 0.2 }
    );
  }, []);

  return (
    <>
      <div className="relative py-16 text-white">
        {/* Background image */}
        <img src={img1} alt="Background" className="w-full h-full object-cover opacity-30 absolute top-0 left-0 z-0" />

        {/* Section Heading and Description */}
        <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
          <h3 className="text-4xl font-extrabold text-white mb-4 font-primary italic tracking-wider">Milestones of Mastery</h3>
          <p className="text-xl text-gray-300">
            We are proud to have transformed thousands of lives through our artistry and passion. Here are some of the milestones we have reached over the years, thanks to our clients' trust and support.
          </p>
        </div>

        {/* Flex container */}
        <div className="relative z-10 flex flex-wrap justify-around items-center max-w-7xl mx-auto p-10 gap-10">
          {/* Individual stat with pop-in effect */}
          <div className="relative flex flex-col items-center mb-10 gap-6">
            <div className="number text-6xl font-bold text-yellow-400">{tattoos}</div>
            <h3 className="text-2xl font-semibold">Tattoos</h3>
            
          </div>

          <div className="relative flex flex-col items-center mb-10 gap-6">
            <div className="number text-6xl font-bold text-yellow-400">{clients}</div>
            <h3 className="text-2xl font-semibold">Clients</h3>
           
          </div>

          <div className="relative flex flex-col items-center mb-10 gap-6">
            <div className="number text-6xl font-bold text-yellow-400">{stencils}</div>
            <h3 className="text-2xl font-semibold">Stencils</h3>
            
          </div>

          <div className="relative flex flex-col items-center mb-10 gap-6">
            <div className="number text-6xl font-bold text-yellow-400">{piercings}</div>
            <h3 className="text-2xl font-semibold">Piercings</h3>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
