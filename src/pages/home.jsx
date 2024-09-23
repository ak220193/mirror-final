import React from 'react';
import HeroCarousel from '../components/Homepage/HeroCarousel';
import ProfileBody from '../components/Homepage/ProfileBody';
import Services from '../components/Homepage/Services';
import Portfolio from '../components/Homepage/Portfolio';
import Client from '../components/Homepage/Client';
import GetInked from '../components/Homepage/GetInked';




const Home = () => {
  return (
    <div className='space-y-20'>
      <HeroCarousel/>
      <ProfileBody/>
      <Services/>
      <Portfolio/>
      <Client/>
      <GetInked/>
    </div>
  );
};

export default Home;
