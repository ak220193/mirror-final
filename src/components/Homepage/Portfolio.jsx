import React, { useEffect } from "react";
import gsap from "gsap";
import img1 from "../../assets/untitled folder/h2-masonry-img-3.jpg";
import img2 from "../../assets/untitled folder/h2-masonry-img-4-1.jpg";
import img3 from "../../assets/untitled folder/h2-masonry-img-7.jpg";
import img4 from "../../assets/untitled folder/h2-masonry-img-8-1.jpg";
import img5 from "../../assets/untitled folder/port-list-img-18-1.jpg";
import img6 from "../../assets/untitled folder/port-list-img-7-1.jpg";
import img7 from "../../assets/untitled folder/port-list-img-8.jpg";
import img8 from "../../assets/untitled folder/tattoogalleryimage1.jpg";
import img9 from "../../assets/gallery/1.png";
import img10 from "../../assets/gallery/2.png";
import img11 from "../../assets/gallery/3.png";
import img12 from "../../assets/gallery/4.png";
import img13 from "../../assets/gallery/5.png";
import img14 from "../../assets/gallery/6.png";
import img15 from "../../assets/gallery/7.png";
import img16 from "../../assets/gallery/8.png";
import img17 from "../../assets/untitled folder/port-list-img-14-1.jpg";
import img18 from "../../assets/untitled folder/port-list-img-13-1.jpg";

const Portfolio = () => {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16,img17,img18
  ];

  useEffect(() => {
    gsap.fromTo(
      ".portfolio-image",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".portfolio-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className=" text-white py-10">
      <div className="container mx-auto flex flex-col justify-center items-center text-center px-5">
        <h3 className="text-xl md:text-2xl font-light tracking-wide mb-2">
          Check out our
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold tracking-widest mb-4 font-poppins">
          Art Showcase
        </h1>
        <p className="text-sm md:text-base text-gray-400 mb-8 ">
        Immerse yourself in a vibrant collection of artworks that celebrate creativity in all its forms. From stunning digital illustrations to captivating photography and traditional paintings, our showcase brings together a variety of artistic voices. Each piece is an invitation to pause, reflect, and appreciate the depth of artistic expression.
        </p>
      </div>

      {/* Standard Responsive Grid for Images */}
      <div className="container mx-auto">
        <div className="portfolio-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`portfolio ${index + 1}`}
              className="portfolio-image w-60 h-80 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
