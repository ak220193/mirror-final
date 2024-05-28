import React from 'react';
import HeroCarousel from '../components/Homepage/HeroCarousel';
import Navbar from '../components/Homepage/Navbar';
import ProfileBody from '../components/Homepage/ProfileBody';
import Services from '../components/Homepage/Services';



const Home = () => {
  return (
    <div>
      <HeroCarousel/>
      <ProfileBody/>
      <Services/>
     
    
      
    </div>
  );
};

export default Home;
