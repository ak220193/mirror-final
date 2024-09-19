import React from 'react';
import HeroCarousel from '../components/Homepage/HeroCarousel';
import Navbar from '../components/Homepage/Navbar';
import ProfileBody from '../components/Homepage/ProfileBody';
import Services from '../components/Homepage/Services';
import Portfolio from '../components/Homepage/Portfolio';




const Home = () => {
  return (
    <div className='space-y-20'>
      <HeroCarousel/>
      <ProfileBody/>
      <Services/>
      <Portfolio/>
    </div>
  );
};

export default Home;
