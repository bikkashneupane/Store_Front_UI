import React, { useEffect } from "react";

const ProductLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-20">
            <div className="flex justify-center">
              <img
                src="https://watchdirect.com.au/cdn/shop/files/WAT_241996_S1-tif_433x650.jpg?v=1713864579"
                alt=""
                id="image"
                className=""
              />
            </div>

            <div className="tracking-widest flex flex-col justify-center px-10 md:px-20">
              <h1 className="text-gray-700">BRAND NAME</h1>
              <h1 className="font-semibold text-2xl text-gray-700 tracking-widest">
                Watch Title
              </h1>
              <p className="text-gray-400">SKU: RA54</p>

              <div className="pt-4 flex gap-2 ">
                <span className="text-yellow-600 font-extrabold text-3xl">
                  *****
                </span>
                <span>5 Review</span>
              </div>

              <div className="py-4 font-semibold text-lg">
                <span className="line-through text-gray-500">$200.00 AUD</span>{" "}
                <span className="text-gray-800 ">$ 180.00 AUD</span>
              </div>

              <div className="py-4 text-lg">
                <span className="font-bold">Some Description</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  numquam excepturi amet provident, aliquid ex distinctio ut
                  voluptatibus possimus earum, accusantium consequuntur! Quam
                  cupiditate rerum saepe quod ipsum voluptatum atque, animi esse
                  eos accusantium obcaecati cumque quae incidunt porro
                  perspiciatis, illo praesentium ad voluptas? Voluptatibus, ab!
                  Quae dolorum doloribus dolorem.
                </p>
              </div>

              <button className="w-full p-4 mt-4 bg-black shadow-lg text-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-gray-800 text-white mb-10 ">
        <div className="max-w-[1280px] mx-auto min-h-[70px] flex justify-center items-center gap-20">
          <a href="#image">
            <span>OVERVIEW</span>
          </a>
          <span>SPECIFICATION</span>
          <span>REVIEW</span>
        </div>
      </div>
      <div className="min-h-[800px]"></div>
    </div>
  );
};

export default ProductLanding;
