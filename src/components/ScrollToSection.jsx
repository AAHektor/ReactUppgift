import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// med hjälp av chatGPT

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        
        window.scrollTo({
          top: section.offsetTop - 50, 
          behavior: 'smooth',
        });
      }
    }
  }, [location]); 

  return null;
};

export default ScrollToSection;
