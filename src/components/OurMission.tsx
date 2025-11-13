import React from 'react';

const OurMission: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-poppins text-primary font-bold mb-3">Our Mission</h3>
            <p className="text-gray mb-6 text-lg">
              To empower every vehicle owner with access to premium, reliable auto parts and expert knowledge, making car maintenance simple, transparent, and affordable.
            </p>
            <h3 className="text-2xl font-poppins text-primary font-bold mb-3">Our Vision</h3>
            <p className="text-gray text-lg">
              To be the most trusted and customer-centric online destination for auto parts, fostering a community of confident and capable car enthusiasts.
            </p>
          </div>
          <div
            className="h-80 lg:h-96 rounded-lg min-h-[300px] shadow-lg overflow-hidden"
          >
             <img 
              src="https://images.unsplash.com/photo-1581092921440-4c3040a1dd50?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" 
              alt="Engineer working on advanced industrial machinery, representing vision and precision"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;