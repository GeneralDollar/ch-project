import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

// IMPORTANT: Replace with your Google Analytics Measurement ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; 

const Analytics: React.FC = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Avoid initializing with the placeholder or if it's already initialized.
    if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== "G-XXXXXXXXXX") {
      ReactGA.initialize(GA_MEASUREMENT_ID);
      setInitialized(true);
      console.log("Google Analytics initialized.");
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
      console.log(`GA Pageview: ${location.pathname + location.search}`);
    }
  }, [initialized, location]);

  return null; // This component does not render anything
};

export default Analytics;
