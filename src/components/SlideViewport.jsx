import React from 'react';
import './SlideViewport.css';

// SlideViewport component - enforces 16:9 aspect ratio with letterboxing
const SlideViewport = ({ children }) => {
  return (
    <div className="slide-viewport-container">
      <div className="slide-viewport-stage">
        {children}
      </div>
    </div>
  );
};

export default SlideViewport;