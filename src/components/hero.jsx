import React, { useState, useEffect } from 'react';
import img1 from '../assets/image.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image7.jpg';
import img4 from '../assets/image5.jpg';
import img5 from '../assets/image3.jpg';
const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    img1,img2,img3,img4,img5
     ];

  // Change automatiquement d'image toutes les 5 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  // Fonction pour aller à une image spécifique
  const goToImage = (index) => {
    setCurrentImage(index);
  };

  // Fonction pour image précédente
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Fonction pour image suivante
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        {/* Images */}
        <div className="images-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className={`carousel-image ${index === currentImage ? 'active' : ''}`}
            />
          ))}
        </div>

        {/* Boutons navigation */}
        <button className="nav-btn prev-btn" onClick={prevImage}>
          ❮
        </button>
        <button className="nav-btn next-btn" onClick={nextImage}>
          ❯
        </button>

        {/* Points indicateurs */}
        <div className="dots-container">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentImage ? 'active' : ''}`}
              onClick={() => goToImage(index)}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .carousel {
          width: 100%;
          max-width: 1400px;
          margin: 20px auto;
        }

        .carousel-container {
          position: relative;
          width: 100%;
          height: 800px;
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .images-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .carousel-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }

        .carousel-image.active {
          opacity: 1;
        }

        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 15px 20px;
          font-size: 18px;
          cursor: pointer;
          border-radius: 5px;
          transition: background 0.3s;
        }

        .nav-btn:hover {
          background: rgba(0, 0, 0, 0.8);
        }

        .prev-btn {
          left: 10px;
        }

        .next-btn {
          right: 10px;
        }

        .dots-container {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: background 0.3s;
        }

        .dot.active {
          background: white;
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.8);
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .carousel-container {
            height: 250px;
          }

          .nav-btn {
            padding: 10px 15px;
            font-size: 16px;
          }

          .prev-btn {
            left: 5px;
          }

          .next-btn {
            right: 5px;
          }

          .dots-container {
            bottom: 10px;
          }

          .dot {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Carousel;