import React from 'react';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-primary text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
          Ready to Partner With Us?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
          Contact our team today to discuss your specific needs across any of our business divisions.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-accent text-primary font-bold py-3 px-8 rounded-md text-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          Start Your Inquiry
        </Link>
      </div>
    </section>
  );
};

export default CTA;