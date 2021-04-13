import React from 'react';
import { FeaturedProducts, Hero, Services, Contact } from '../components';

// ------------------ PAGE ------------------
const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

// ------------------ EXPORT ------------------
export default HomePage;
