import React from 'react';
import Hero from '../components/Hero.tsx';
import Categories from '../components/Categories.tsx';
import FeaturedProducts from '../components/FeaturedProducts.tsx';
import About from '../components/About.tsx';
import Testimonials from '../components/Testimonials.tsx';
import CTA from '../components/CTA.tsx';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <About />
      <Testimonials />
      <CTA />
    </>
  );
};

export default HomePage;
