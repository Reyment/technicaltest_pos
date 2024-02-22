import React from 'react';
import FaqComponent from '../components/FaqComponent';
import HeroHome from '../components/HeroHome';
import ProductHome from '../components/ProductHome';
import Benefit from '../components/Benefit';
import State from '../components/State';
import Testimony from '../components/Testimony.jsx';
import CTA from '../components/CTAComponent.jsx';

const Home = () => {


  return (
    <>
      <HeroHome />
      <ProductHome />
      <Benefit/>
      <State/>
      <CTA/>
      <Testimony/>
      <FaqComponent />

    </>
  );
};

export default Home;
