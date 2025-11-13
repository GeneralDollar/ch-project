
import React from 'react';
import PageHeader from '../components/PageHeader.tsx';
import SectionTitle from '../components/SectionTitle.tsx';

const services = [
  {
    icon: 'fa-car',
    title: 'Automotive Parts Supply',
    description: 'We supply a comprehensive range of OEM and aftermarket auto parts for cars, trucks, and commercial vehicles. Our inventory includes everything from engine parts to electrical components.'
  },
  {
    icon: 'fa-tools',
    title: 'Mining Equipment Parts',
    description: 'We provide robust and high-performance spare parts for various mining equipment, helping to keep your operations running smoothly with minimal interruption.'
  },
  {
    icon: 'fa-industry',
    title: 'Aluminium Sourcing',
    description: 'We source and supply high-grade aluminium products, including custom extrusions, sheets, and coils, tailored to your specific industrial requirements.'
  },
  {
    icon: 'fa-globe-asia',
    title: 'Global Sourcing',
    description: 'Leverage our extensive network to source any industrial product from global markets. We handle everything from supplier vetting to quality control.'
  },
  {
    icon: 'fa-shipping-fast',
    title: 'Logistics & Shipping',
    description: 'Our end-to-end logistics solutions ensure your products are delivered safely and on time, anywhere in the world. We manage all shipping, customs, and documentation.'
  },
  {
    icon: 'fa-headset',
    title: 'Technical Consultation',
    description: 'Our team of experts is available to provide technical advice and support, helping you choose the right parts and solutions for your specific needs.'
  }
];

const ServiceCard: React.FC<{ service: typeof services[0] }> = ({ service }) => (
  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
    <div className="text-4xl text-accent mb-4">
      <i className={`fas ${service.icon}`}></i>
    </div>
    <h3 className="text-xl font-poppins font-semibold text-primary mb-3">{service.title}</h3>
    <p className="text-gray">{service.description}</p>
  </div>
);


const ServicesPage: React.FC = () => {
  return (
    <>
      <PageHeader title="Our Services" breadcrumb="Services" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <SectionTitle>What We Offer</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
