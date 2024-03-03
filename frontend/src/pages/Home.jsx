import React from 'react';
import FaqComponent from '../components/FaqComponent';
import HeroHome from '../components/HeroHome';
import ProductHome from '../components/ProductHome';
import Benefit from '../components/Benefit';
import State from '../components/State';
import Testimony from '../components/Testimony.jsx';
import CTA from '../components/CTAComponent.jsx';
import NavbarComponent from '../components/NavbarComponent.jsx';
import FooterComponent from '../components/FooterComponent.jsx';


const Home = () => {


  return (
    <>
      <NavbarComponent />
      <HeroHome />
      <ProductHome />
      <Benefit />
      <State />
      <CTA />
      <Testimony />
      <FaqComponent />
      <FooterComponent />
    </>
  );
};

export default Home;
