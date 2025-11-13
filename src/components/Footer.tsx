import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [newsletterStatus, setNewsletterStatus] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewsletterStatus("Subscribing...");

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch("https://formspree.io/f/myzlzglk", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setNewsletterStatus("Thank you for subscribing!");
        (e.target as HTMLFormElement).reset();
      } else {
        setNewsletterStatus("Subscription failed. Please try again.");
      }
    } catch (error) {
      setNewsletterStatus("Network error. Please try again later.");
    }
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4 text-accent">CH Trading</h3>
            <p className="text-gray-400">Your one-stop shop for high-quality auto parts and accessories. We are committed to providing the best products and customer service.</p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-poppins font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">Shipping & Returns</Link></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-poppins font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start"><i className="fas fa-map-marker-alt mt-1 mr-3"></i><span>Wenzhou, Zhejiang, China</span></li>
              <li className="flex items-start"><i className="fas fa-phone mt-1 mr-3"></i><span>+86 130 2502 8570</span></li>
              <li className="flex items-start"><i className="fas fa-envelope mt-1 mr-3"></i><span>wenzhouchtrading@gmail.com</span></li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-poppins font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form onSubmit={handleNewsletterSubmit}>
              <div className="flex">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  className="w-full px-4 py-2 rounded-l-md text-gray-800 focus:outline-none" 
                  aria-label="Email for newsletter"
                  required
                />
                <button type="submit" className="bg-accent text-primary font-bold px-4 py-2 rounded-r-md hover:bg-amber-600 transition-colors">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
            {newsletterStatus && <p className="text-gray-400 text-sm mt-2">{newsletterStatus}</p>}
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row md:relative justify-center md:justify-end items-center">
          <p className="text-gray-500 order-2 md:order-1 mb-4 md:mb-0 md:absolute md:left-1/2 md:-translate-x-1/2">&copy; {new Date().getFullYear()} CH Trading. All Rights Reserved.</p>
          <div className="flex space-x-4 order-1 md:order-2 mb-4 md:mb-0">
            <a href="https://facebook.com/wenzhouchtrading" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://wa.me/263715833796" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;