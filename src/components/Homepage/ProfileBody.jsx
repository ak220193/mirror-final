import React, { useState, useEffect, useRef } from "react";
import Profile from "../../assets/others/profile1.avif";
import Profile1 from "../../assets/others/profile2.avif";
import Profile2 from "../../assets/others/profile3.avif";
import Profile3 from "../../assets/others/profile4.avif";
import { gsap } from "gsap";

const images = [Profile, Profile1, Profile2, Profile3];

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
    <div className="w-full h-screen">
      <div className="w-full">
        <h1 className="text-3xl text-white font-semibold uppercase text-center px-4 py-8">
          {" "}
          关于 Guānyú{" "}
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
        {/* First Grid */}
        <div className="w-full mt-2 lg:w-auto lg:ml-5 lg:mt-5 2xl:ml-10 2xl:mt-5">
          <img
            src={images[currentIndex]}
            alt={`Profile ${currentIndex + 1}`}
            className="w-full h-[40rem] border rounded-md object-cover"
          />
        </div>
        {/* Second Grid */}
        <div
          ref={gridRef}
          className="w-full lg:w-[90%] xl:w-[80%] 2xl:w-[90%] h-auto border rounded-md ml-0 lg:ml-10 mt-2 px-4 md:px-0"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          <div className="flex flex-col justify-start items-start p-5">
            <h1 className="text-2xl font-semibold text-white mb-5">
              欢迎 Huānyíng Mirror
            </h1>
            <p className="text-base sm:text-xl font-light text-white mb-5">
              Artistic Designs: We specialize in unique, personalized tattoos
              that reflect your individuality.
            </p>
            <p className="text-base sm:text-xl font-light text-white mb-5">
              Your Vision, Our Creation: We work closely with you to turn your
              ideas into beautiful designs.
            </p>
            <p className="text-base sm:text-xl font-light text-white mb-5">
              100% Safe and Satisfied: Your safety and satisfaction are our top
              priorities. We adhere to strict hygiene protocols to ensure a
              clean and safe environment.
            </p>
            <p className="text-base sm:text-xl font-light text-white mb-5">
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
