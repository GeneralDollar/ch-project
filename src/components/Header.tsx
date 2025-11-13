import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-poppins font-bold text-accent">
            CH Trading
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} className="hover:text-accent transition-colors">{link.label}</Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://wa.me/263715833796" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="WhatsApp">
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
            <a href="https://facebook.com/wenzhouchtrading" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Facebook">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <button className="hover:text-accent transition-colors" aria-label="Search">
              <i className="fas fa-search"></i>
            </button>
            <button className="hover:text-accent transition-colors relative" aria-label="View shopping cart">
              <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
          <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden bg-primary overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 py-4' : 'max-h-0'}`}>
        <nav className="flex flex-col items-center space-y-4">
           {navLinks.map(link => (
            <Link key={link.to} to={link.to} className="hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>{link.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;