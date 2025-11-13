import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import HomePage from './pages/HomePage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ServicesPage from './pages/ServicesPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import FAQPage from './pages/FAQPage.tsx';
import Analytics from './components/Analytics.tsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    // SEO Management: Update title and meta description based on the current page
    let title = 'CH Trading - Premium Automotive & Sourcing Solutions';
    let description = 'Your trusted partner for auto parts, mining equipment spares, aluminium products, sourcing and logistics.';

    switch (location.pathname) {
      case '/about':
        title = 'About Us | CH Trading';
        description = 'Learn about CH Trading, our mission, vision, and the expert team dedicated to providing top-quality industrial solutions.';
        break;
      case '/services':
        title = 'Our Services | CH Trading';
        description = 'Explore the comprehensive services offered by CH Trading, including auto parts supply, global sourcing, and logistics.';
        break;
      case '/contact':
        title = 'Contact Us | CH Trading';
        description = 'Get in touch with CH Trading. Find our contact details, location, and send us a message for your industrial needs.';
        break;
      case '/faq':
        title = 'FAQ | CH Trading';
        description = 'Find answers to frequently asked questions about shipping, returns, product fitment, and more at CH Trading.';
        break;
    }

    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [location.pathname]);

  return (
    <>
      <Analytics />
      <Header />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;