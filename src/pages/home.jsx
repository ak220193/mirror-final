import React from 'react';
import HeroCarousel from '../components/Homepage/HeroCarousel';
import ProfileBody from '../components/Homepage/ProfileBody';
import Services from '../components/Homepage/Services';
import Portfolio from '../components/Homepage/Portfolio';
import Client from '../components/Homepage/Client';
import Review from '../components/Homepage/Review';
import GetInked from '../components/Homepage/GetInked';
import Footer from "../components/Homepage/Footer"

const Home = () => {
  return (
    <div className='space-y-20'>
      <section id="home">
        <HeroCarousel />
      </section>
      <section id="profile">
        <ProfileBody />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="client">
        <Client />
      </section>
      <section id="review">
        <Review />
      </section>
      <section id="get-inked">
        <GetInked />
      </section>
      <section>
      <Footer/>
      </section>
    </div>
  );
};

export default Home;
