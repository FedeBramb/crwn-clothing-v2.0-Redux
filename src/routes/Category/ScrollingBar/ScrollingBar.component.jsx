import React, { useState, useEffect } from 'react';
import './ScrollingBar.styles.css';

const ScrollingBar = () => {
  const messages = [
    "SPEDIZIONE GRATUITA SU TUTTI GLI ORDINI",
    "RESI GRATUITI ENTRO 30 GIORNI",
    "CONFEZIONE REGALO GRATUITA"
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="scrolling-bar" role="marquee">
      <div className="scrolling-bar-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`scrolling-bar-item ${index === activeIndex ? 'active' : ''}`}
            aria-hidden={index !== activeIndex}
          >
            {message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBar;
