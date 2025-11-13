import React from 'react';

const StatItem: React.FC<{ icon: string, number: string, label: string }> = ({ icon, number, label }) => (
  <div className="flex items-center">
    <i className={`fas ${icon} text-3xl text-accent w-12 text-center`}></i>
    <div className="ml-4">
      <div className="text-2xl font-poppins font-bold text-primary">{number}</div>
      <p className="text-gray">{label}</p>
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="h-80 lg:h-full rounded-lg min-h-[300px] shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1504222404539-7c617c4a164e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" 
              alt="Interior of a modern and clean auto parts warehouse"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-poppins text-primary font-bold mb-5">Driven by Passion, Defined by Quality.</h2>
            <p className="mb-4 text-gray text-lg">Finding the right auto part can be a maze of confusing options and questionable quality. At CH Trading, we cut through the noise. We're not just parts sellers; we're automotive enthusiasts with over 25 years of hands-on experience.</p>
            <p className="mb-8 text-gray text-lg">We hand-pick every product, ensuring it meets or exceeds OEM specifications, so you can install with confidence and drive with peace of mind. Our certified technicians are here to give you expert advice, not a sales pitch. With same-day shipping and a rock-solid 30-day money-back guarantee, you'll be back on the road faster, risk-free.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <StatItem icon="fa-box-open" number="50,000+" label="Products Available" />
              <StatItem icon="fa-users" number="15K+" label="Satisfied Customers" />
              <StatItem icon="fa-shipping-fast" number="99.8%" label="On-Time Delivery" />
              <StatItem icon="fa-award" number="25+" label="Years of Experience" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;