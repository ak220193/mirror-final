import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import img1 from "../../assets/about/about/logo1.png";
import img2 from "../../assets/about/about/log2.png";
import img3 from "../../assets/about/about/log3.png";
import img4 from "../../assets/about/about/log4.png";
import img5 from "../../assets/about/about/logo5.png";
import img6 from "../../assets/about/about/logo6.png";

const Services = () => {
  const imagesRef = useRef([]);

  const servicesData = [
    {
      img: img1,
      title: "Full Sleeve Tattoo",
      description: "Explore the Artistry of Full-Body Tattoos",
    },
    {
      img: img2,
      title: "Tattoo Stories",
      description: "Share Your Stories Behind Full-Body Tattoos",
    },
    {
      img: img3,
      title: "Mandala Design",
      description: "Best in class Mandala Design",
    },
    {
      img: img4,
      title: "Ear & Nose Piercing",
      description: "Elevate Your Aesthetic with Ear and Nose Piercings",
    },
    {
      img: img5,
      title: "Iconic Design",
      description: "Elevate Your Visuals with Striking Icon Patterns",
    },
    {
      img: img6,
      title: "Multi-color Design",
      description: "Celebrate Diversity with Multi-color Masterpieces",
    },
  ];

  useEffect(() => {
    imagesRef.current.forEach((img, index) => {
      gsap.fromTo(
        img,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          delay: index * 0.2,
          duration: 1,
          ease: "circ.inOut",
        }
      );
    });
  }, []);

  return (
    <div className="w-full h-full bg-white flex justify-center rounded-md mt-5">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center items-start mb-5">
        {servicesData.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={service.img}
              alt={`logo${index + 1}`}
              className="max-w-full max-h-full"
              ref={(el) => (imagesRef.current[index] = el)}
            />
            <h1 className="text-black text-xl uppercase font-semibold mt-4 flex justify-center items-center text-center sm:mt-0">
              {service.title}
            </h1>
            <h4 className="text-black text-l font-normal mt-2 flex justify-center items-center text-center sm:mt-1">
              {service.description}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
