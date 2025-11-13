import React from 'react';
import { testimonialsData } from '../constants.ts';
import SectionTitle from './SectionTitle.tsx';
import type { Testimonial } from '../types.ts';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <div className="text-5xl text-accent mb-4 opacity-20">
      <i className="fas fa-quote-left"></i>
    </div>
    <p className="text-gray mb-6 italic">"{testimonial.text}"</p>
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mr-4">
        {testimonial.initials}
      </div>
      <div>
        <h4 className="font-poppins font-semibold text-primary">{testimonial.author}</h4>
        <p className="text-sm text-gray">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <SectionTitle>What Our Customers Say</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;