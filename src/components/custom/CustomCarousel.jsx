import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const CustomCarousel = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const startAutoSlide = () => {
    timeoutRef.current = setTimeout(nextSlide, 4000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="relative flex w-full h-64 md:h-96 transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex flex-shrink-0 justify-center items-center"
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="object-cover w-full h-full absolute"
            />
            <div className="absolute bg-black bg-opacity-30 w-full h-full"></div>
            <div className="relative text-center">
              <h1 className="text-2xl lg:text-3xl text-white tracking-widest font-semibold">
                PREMIUM & LUXURY WATCHES
              </h1>
              <Link to="/products" className="inline-block mt-4">
                <button className="border border-white text-white py-3 px-4 rounded-full shadow-lg hover:bg-white hover:text-black transition duration-300">
                  Browse Shop
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 dark:bg-gray-800/30 text-white rounded-full p-2"
      >
        &#10094;
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 dark:bg-gray-800/30 text-white rounded-full p-2"
      >
        &#10095;
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
