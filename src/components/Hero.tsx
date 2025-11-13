import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section 
      className="bg-cover bg-center text-white py-24 md:py-32 text-center relative" 
      style={{backgroundImage: "url('https://images.unsplash.com/photo-1517524206127-48bbd363f369?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')"}}
    >
      <div className="absolute inset-0 bg-primary bg-opacity-85"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-5 drop-shadow-lg">Comprehensive Industrial Solutions</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">Your trusted partner for auto parts, mining equipment spares, aluminium products, sourcing and logistics.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/contact" className="inline-block py-3 px-7 rounded font-medium no-underline transition-all duration-300 cursor-pointer text-base text-center w-full sm:w-auto bg-accent text-primary font-bold hover:bg-amber-600 hover:-translate-y-0.5 hover:shadow-lg">Request a Quote</Link>
          <Link to="/services" className="inline-block py-3 px-7 rounded font-medium no-underline transition-all duration-300 cursor-pointer text-base text-center w-full sm:w-auto bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary hover:-translate-y-0.5 hover:shadow-lg">Explore Services</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;