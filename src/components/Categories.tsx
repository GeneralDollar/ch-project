import React from 'react';
import { divisionsData } from '../constants.ts';
import SectionTitle from './SectionTitle.tsx';
import type { Division } from '../types.ts';

const DivisionCard: React.FC<{ division: Division }> = ({ division }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center transform hover:-translate-y-1">
    <div className="text-4xl text-accent mb-4 inline-block">
      <i className={`fas ${division.icon}`}></i>
    </div>
    <h3 className="text-xl font-poppins font-semibold text-primary mb-2">{division.title}</h3>
    <p className="text-gray">{division.description}</p>
  </div>
);

const Categories: React.FC = () => {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <SectionTitle>Our Divisions</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {divisionsData.map((division, index) => (
            <DivisionCard key={index} division={division} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;