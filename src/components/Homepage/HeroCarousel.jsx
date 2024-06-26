import React, { useState, useEffect } from 'react';
import img1 from "../../assets/photo-1558430373-5ff2b47eb71d.avif";
import img2 from "../../assets/free-photo-of-close-up-of-tattooing.jpeg";
import img3 from "../../assets/others/banner image.jpeg"
import img4 from "../../assets/img2.avif";
import img5 from "../../assets/kristian-angelo-xyJZvUL4_TY-unsplash.jpg";
import img6 from "../../assets/pexels-photo-2768618.webp";
import img7 from "../../assets/pexels-photo-3163994.webp";
import img8 from "../../assets/photo-1558430373-5ff2b47eb71d.avif";
import Navbar from './Navbar';

const HeroCarousel = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Navbar inside the carousel */}
      <Navbar />

      <div className="w-full h-[40rem] sm:h-[10rem] md:h-[25rem] lg:h-[50rem] xl:h-[50rem]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500"
            style={{
              opacity: index === currentIndex ? 1 : 0,
              zIndex: index === currentIndex ? 1 : 0
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
