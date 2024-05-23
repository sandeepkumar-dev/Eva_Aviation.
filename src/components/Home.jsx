/* eslint-disable */
import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Home = () => {
  const photosRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const photos = photosRef.current;
      if (photos[currentIndex]) {
        photos[currentIndex].style.transform = 'translateX(-100%)';
      }
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
      if (photos[currentIndex]) {
        photos[currentIndex].style.transform = 'translateX(0)';
      }
    }, 2000);

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, [currentIndex]);

  const images = [
    './images/slider-1.jpg',
    './images/slider-2.jpg',
    './images/slider-3.jpg',
    './images/slider-4.jpg',
    './images/slider-5.jpg',
    './images/slider-6.jpg',
  ];
  const img = [
    './images/slider-1-box-2.jpg',
    './images/slider-2-box-2.jpg',
    './images/slider-3-box-2.jpg',
    './images/slider-4-box-2.jpg',
    './images/slider-5-box-2.jpg',
    './images/slider-6-box-2.jpg',
  ];

  return (
    <div className="body-section">
      {/* <h1>Welcome to my Website</h1> */}
      <p>Click On Image</p>
      <div className="main-container">
        <div className="container-part">
          <div className="photo-container">
            {images.map((image, index) => (
              <a
                onClick={() => {
                  navigate('/academyhome');
                }}
              >
                <img
                  key={index}
                  ref={(el) => (photosRef.current[index] = el)}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  style={{
                    transform:
                      index === currentIndex
                        ? 'translateX(0)'
                        : 'translateX(-100%)',
                  }}
                />
              </a>
            ))}
            <div className="photo-name">
              <button type="button">
                <h2>
                  <a
                    onClick={() => {
                      navigate('/academyhome');
                    }}
                  >
                    Eva Aviation Academy
                  </a>
                </h2>
              </button>
            </div>
          </div>
        </div>
        <div className="container-part">
          <div className="photo-container">
            {img.map((image, index) => (
              <a
                onClick={() => {
                  navigate('/import&exporthome');
                }}
              >
                <img
                  key={index}
                  ref={(el) => (photosRef.current[index] = el)}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  style={{
                    transform:
                      index === currentIndex
                        ? 'translateX(0)'
                        : 'translateX(-100%)',
                  }}
                />
              </a>
            ))}
            <div className="photo-name">
              <h2>
                <a
                  onClick={() => {
                    navigate('/import&exporthome');
                  }}
                >
                  Eva Aviation Import & Export
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
