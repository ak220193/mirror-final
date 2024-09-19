import React, { useState, useEffect, useRef } from "react";
import Profile1 from "../../assets/others/profile2.avif";
import Profile2 from "../../assets/others/profile3.avif";
import Profile3 from "../../assets/others/profile4.avif";
import { gsap } from "gsap";

const images = [Profile1, Profile2, Profile3];

const ProfileBody = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const gridRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const pElements = gridRef.current.querySelectorAll("p");

    gsap.fromTo(
      gridRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "circ.in", stagger: 0.5 }
    );

    gsap.fromTo(
      pElements,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "circ.in", stagger: 0.5 }
    );
  }, [currentIndex]);

  return (
    <div className="w-full h-full">
      <div className="w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold uppercase text-center px-4 py-10">
          关于 Guānyú
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center w-full h-auto lg:h-full px-4 md:px-10 lg:px-16 ">
        {/* First Section (Image) */}
        <div className="flex justify-center items-center w-full lg:w-1/2  h-full p-4">
          <img
            src={images[currentIndex]}
            alt={`Profile ${currentIndex + 1}`}
            className="w-full lg:w-[80%] xl:w-[70%] 2xl:w-[60%] h-auto object-cover rounded-md"
          />
        </div>

        {/* Second Section (Content) */}
        <div
          ref={gridRef}
          className="w-full lg:w-1/2  h-full border border-gray-700 rounded-md p-5 lg:p-10 lg:ml-5 mt-5 lg:mt-0"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          <div className="flex flex-col justify-start text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 text-center">
              欢迎 Huānyíng Mirror
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl font-light mb-5">
              Artistic Designs: We specialize in unique, personalized tattoos
              that reflect your individuality.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl font-light mb-5">
              Your Vision, Our Creation: We work closely with you to turn your
              ideas into beautiful designs.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl font-light mb-5">
              100% Safe and Satisfied: Your safety and satisfaction are our top
              priorities. We adhere to strict hygiene protocols to ensure a
              clean and safe environment.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl font-light mb-5">
              Visit Mirror Tattoo Studio and experience the perfect blend of
              artistry and professionalism. We look forward to making your
              tattoo dreams a reality!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
