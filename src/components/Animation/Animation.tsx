import React, { useState } from 'react';
import './Animation.css';

const Animation: React.FC = () => {
  const [topLightOn, setTopLightOn] = useState(true);
  const [bottomLightOn, setBottomLightOn] = useState(true);

  return (
    <div className="animation-container">
      <div className="house-image-container">
          <img
            src="https://framerusercontent.com/images/Z2Kx80EVEG41L6wWc4s5kqLxNt0.png?scale-down-to=1024"
            alt="House with top floor lights off"
            className={`house-overlay top-overlay`}
            style={{ opacity: topLightOn ? 0 : 1 }}
            onError={(e) => console.error('Failed to load image:', e)}
          />

          <img
            src="https://framerusercontent.com/images/LRoemHp7hM5FO2iosD1gStCco.png?scale-down-to=1024"
            alt="House with bottom floor lights off"
            className={`house-overlay bottom-overlay`}
            style={{ opacity: bottomLightOn ? 0 : 1 }}
            onError={(e) => console.error('Failed to load image:', e)}
          />
          <img 
            src="https://framerusercontent.com/images/TrAS0LUJs0315Yc7Yg5oC3w7ko.jpg" 
            alt="House with all lights on" 
            className="house-base"
            onError={(e) => console.error('Failed to load image:', e)} 
          />
          
          <button
            className={`light-button top-button ${topLightOn ? 'on' : 'off'}`}
            onClick={() => setTopLightOn(!topLightOn)}
            aria-label={`Turn ${topLightOn ? 'off' : 'on'} top floor lights`}
          >
            {topLightOn ? 'on' : 'off'}
          </button>
          
          <button
            className={`light-button bottom-button ${bottomLightOn ? 'on' : 'off'}`}
            onClick={() => setBottomLightOn(!bottomLightOn)}
            aria-label={`Turn ${bottomLightOn ? 'off' : 'on'} bottom floor lights`}
          >
            {bottomLightOn ? 'on' : 'off'}
          </button>
          
          <div className="title-container">
            <h1 className="main-title">Light On/Off Tutorial</h1>
            <p className="subtitle">in React</p>
          </div>
      </div>
    </div>
  );
};

export default Animation;