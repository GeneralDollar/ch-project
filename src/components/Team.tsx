import React from 'react';
import SectionTitle from './SectionTitle.tsx';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const teamData: TeamMember[] = [
  {
    name: 'John Carter',
    role: 'Head of Sales',
    bio: "With a passion for building partnerships, John connects our clients with the solutions they need to succeed. He's the driving force behind our customer-focused approach.",
    imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
  },
  {
    name: 'Maria Garcia',
    role: 'Lead Sourcing Officer',
    bio: "Maria's expertise is in navigating the global market to find the highest quality products at the best value. She ensures our inventory meets our rigorous standards.",
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
  },
  {
    name: 'Kevin Lee',
    role: 'Logistics Specialist',
    bio: "Kevin masterfully manages our supply chain, ensuring that every order, big or small, is delivered efficiently and on time, no matter the destination.",
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
  }
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="bg-white rounded-lg shadow-md text-center overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
    <img src={member.imageUrl} alt={`Photo of ${member.name}, ${member.role}`} className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300" loading="lazy" />
    <div className="p-6">
      <h3 className="text-xl font-poppins font-semibold text-primary">{member.name}</h3>
      <p className="text-accent font-medium mb-3">{member.role}</p>
      <p className="text-gray text-sm">{member.bio}</p>
    </div>
  </div>
);

const Team: React.FC = () => {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <SectionTitle>Meet Our Experts</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;