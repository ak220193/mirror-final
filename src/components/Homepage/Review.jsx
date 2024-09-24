import React from "react";
import Marquee from "react-fast-marquee";
import { IoStarSharp } from "react-icons/io5";
import user1 from "../../assets/testimonial/1.jpg";
import user2 from "../../assets/testimonial/untitled folder/user6.jpg";
import user3 from "../../assets/testimonial/students/7.jpg";
import user4 from "../../assets/testimonial/untitled folder/user7.jpg";
import user5 from "../../assets/testimonial/4.jpg";
import user6 from "../../assets/testimonial/7.jpg";
import user7 from "../../assets/testimonial/untitled folder/user9.jpg";
import user8 from "../../assets/testimonial/untitled folder/user5.jpg";
import user9 from "../../assets/testimonial/6.jpg";
import user10 from "../../assets/testimonial/8.jpg";
import user11 from "../../assets/testimonial/students/6.jpg";
import user12 from "../../assets/testimonial/students/2.jpg";

const reviews = [
  {
    name: "Rajesh Kumar",
    review: "Got my first tattoo here, and I’m beyond thrilled with the design! The attention to detail is insane.",
    image: user1,
    rating: 5,
  },
  {
    name: "Priya Sharma",
    review: "Absolutely in love with my new tattoo! The artist was professional, and the hygiene was top-notch.",
    image: user2,
    rating: 5,
  },
  {
    name: "Aman Gupta",
    review: "This place is amazing! The artists are incredibly talented, and they bring your vision to life.",
    image: user3,
    rating: 5,
  },
  {
    name: "Neha Reddy",
    review: "The studio has such a cool vibe, and my tattoo came out better than I imagined. Highly recommend!",
    image: user4,
    rating: 4,
  },
  {
    name: "Vikram Singh",
    review: "Professional, clean, and artistic. This is the go-to place for anyone serious about tattoos.",
    image: user5,
    rating: 5,
  },
  {
    name: "Sneha Patel",
    review: "I can’t stop looking at my tattoo! The artist was so patient and listened to every little detail I wanted.",
    image: user6,
    rating: 5,
  },
  {
    name: "Rohit Verma",
    review: "Amazing artistry! The tattoo exceeded my expectations, and the service was exceptional.",
    image: user7,
    rating: 4,
  },
  {
    name: "Anjali Mehta",
    review: "The entire process was smooth, and the result was a masterpiece. I’ll definitely be back for more ink!",
    image: user8,
    rating: 5,
  },
  {
    name: "Arjun Desai",
    review: "Incredible experience! The artist took my concept and turned it into something truly unique.",
    image: user9,
    rating: 5,
  },
  {
    name: "Kiran Joshi",
    review: "From the consultation to the final result, everything was perfect. A must-visit for tattoo enthusiasts!",
    image: user10,
    rating: 4,
  },
  {
    name: "Tanya Iyer",
    review: "Hands down the best tattoo studio I’ve been to. The artists here are incredibly skilled and professional.",
    image: user12,
    rating: 5,
  },
  {
    name: "Suresh Rao",
    review: "The quality and artistry here are unmatched! I couldn’t be happier with my tattoo.",
    image: user11,
    rating: 5,
  },
];

const ReviewCard = ({ review }) => (
  <div className="p-6 bg-gray-900 text-center rounded-lg shadow-lg w-80 mx-auto">
    <img
      src={review.image}
      alt={review.name}
      className="w-24 h-24 object-cover mb-4 rounded-full mx-auto border-4 border-gray-100 shadow-md"
    />
    <h3 className="text-xl font-semibold mb-2 text-white">{review.name}</h3>
    <p className="text-sm mb-3 text-gray-300">{review.review}</p>
    <div className="flex justify-center mb-2">
      {[...Array(review.rating)].map((_, i) => (
        <IoStarSharp key={i} className="text-yellow-400" />
      ))}
    </div>
  </div>
);

const Review = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto text-white text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 font-poppins italic tracking-wider">Success Stories</h1>
        <p className="text-gray-400 mb-10">
          Hear what our happy customers have to say about us!
        </p>
      </div>

      <div className="container mx-auto">
        <Marquee pauseOnHover={true} speed={40} gradient={false} delay={5}>
          <div className="flex gap-10">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
            <div className="w-2" />
          </div> 
        </Marquee>
      </div>
    </div>
  );
};

export default Review;
