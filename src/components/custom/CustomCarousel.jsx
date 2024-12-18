import { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

const CustomCarousel = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // const prevSlide = () => {
  //   setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  // };

  useEffect(() => {
    const length = images?.length;

    const nextSlide = () => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    };

    const startAutoSlide = () => {
      timeoutRef.current = setInterval(nextSlide, 4000);
    };

    startAutoSlide();

    return () => clearInterval(timeoutRef.current);
  }, [images]);

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="relative flex w-full h-[70vh] transition-transform duration-300 ease-in-out"
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

      <div className="absolute bottom-4 right-1/2 transform translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
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
