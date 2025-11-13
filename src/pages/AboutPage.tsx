import React from 'react';
import PageHeader from '../components/PageHeader.tsx';
import About from '../components/About.tsx';
import Testimonials from '../components/Testimonials.tsx';
import OurMission from '../components/OurMission.tsx';
import Team from '../components/Team.tsx';

const AboutPage: React.FC = () => {
  return (
    <>
      <PageHeader title="About Us" breadcrumb="About" />
      <About />
      <OurMission />
      <Team />
      <Testimonials />
    </>
  );
};

export default AboutPage;