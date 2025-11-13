import React from 'react';
import PageHeader from '../components/PageHeader.tsx';
import ContactForm from '../components/ContactForm.tsx';

const ContactPage: React.FC = () => {
  return (
    <>
      <PageHeader title="Contact Us" breadcrumb="Contact" />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-poppins font-bold text-primary mb-4">Contact Information</h2>
              <ul className="space-y-4 text-gray text-lg">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt text-accent mt-1 mr-4 w-6 text-center"></i>
                  <div>
                    <h3 className="font-semibold text-primary">Our Location</h3>
                    <a href="https://www.google.com/maps/search/?api=1&query=Wenzhou,Zhejiang,China" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                      Wenzhou, Zhejiang, China
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-phone text-accent mt-1 mr-4 w-6 text-center"></i>
                  <div>
                    <h3 className="font-semibold text-primary">Phone Number</h3>
                    <p>+86 130 2502 8570</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-envelope text-accent mt-1 mr-4 w-6 text-center"></i>
                  <div>
                    <h3 className="font-semibold text-primary">Email Address</h3>
                    <a href="mailto:wenzhouchtrading@gmail.com" className="hover:text-accent transition-colors">
                      wenzhouchtrading@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-clock text-accent mt-1 mr-4 w-6 text-center"></i>
                  <div>
                    <h3 className="font-semibold text-primary">Business Hours</h3>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p>Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <h3 className="text-2xl font-poppins font-bold text-primary mb-4">Connect With Us</h3>
                <p className="text-gray mb-4">For quick questions, feel free to reach out on your favorite platform.</p>
                <div className="flex items-center space-x-6">
                  <a href="https://wa.me/263715833796" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="text-gray-600 hover:text-accent transition-colors">
                    <i className="fab fa-whatsapp text-4xl"></i>
                  </a>
                  <a href="https://facebook.com/wenzhouchtrading" target="_blank" rel="noopener noreferrer" aria-label="Find us on Facebook" className="text-gray-600 hover:text-accent transition-colors">
                    <i className="fab fa-facebook-f text-4xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219507.0256860163!2d120.5283833215578!3d27.99684179313263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3443477a353d67f7%3A0x436d3932b704d9d1!2sWenzhou%2C%20Zhejiang%2C%20China!5e0!3m2!1sen!2sus!4v1689882939682!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map of Wenzhou, Zhejiang, China"
        ></iframe>
      </div>
    </>
  );
};

export default ContactPage;