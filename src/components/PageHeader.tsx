
import React from 'react';

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumb }) => {
  return (
    <section 
      className="bg-cover bg-center text-white py-20 text-center relative"
      style={{backgroundImage: "url('https://images.unsplash.com/photo-1534279328409-77b395b1f3a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')"}}
    >
      <div className="absolute inset-0 bg-primary bg-opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-3">{title}</h1>
        <p className="text-lg opacity-80">Home / {breadcrumb}</p>
      </div>
    </section>
  );
};

export default PageHeader;