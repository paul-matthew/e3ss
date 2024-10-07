import React, { useEffect, useState } from 'react';
import '../App.css';


const LoadingScreen = ({ hidden }) => {
  const [showHeart, setShowHeart] = useState(false);

  useEffect(() => {
    // Show the pulsing heart 2 seconds after the component mounts
    const heartTimer = setTimeout(() => setShowHeart(true), 200);
    
    // Hide the loading screen 6 seconds after the component mounts
    const hideTimer = setTimeout(() => {
      document.querySelector('.loading-screen').classList.add('fade-out');
    }, 50); // Start fade-out after 5 seconds
    
    // Clean up timers on unmount
    return () => {
      clearTimeout(heartTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className={`loading-screen ${hidden ? 'hidden' : ''}`}>
      {showHeart && (
        <>
          <div className="pulsing-heart"></div>
          <div className="logo-container">
          <img src="./logo-new3.png" alt="Logo" className="logo" />
          </div>
        </>
      )}
    </div>
  );
  };

export default LoadingScreen;