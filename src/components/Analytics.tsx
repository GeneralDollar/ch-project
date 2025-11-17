import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = "G-0V7RWCMV4S"; 

const Analytics: React.FC = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Initialize GA4. ReactGA will inject the GA script.
    // This runs only once on component mount.
    ReactGA.initialize(GA_MEASUREMENT_ID, {
      gaOptions: {
        send_page_view: false, // We'll manually send pageviews on route changes.
      },
    });
    setInitialized(true);
  }, []);

  useEffect(() => {
    // This effect runs on initialization and whenever the route changes.
    if (initialized) {
      ReactGA.send({ 
        hitType: "pageview", 
        page: location.pathname + location.search, 
        title: document.title 
      });
    }
  }, [initialized, location]);

  return null; // This component does not render anything
};

export default Analytics;