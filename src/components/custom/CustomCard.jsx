import React from "react";
import { Link } from "react-router-dom";

const testImg =
  "https://cdn.shopify.com/s/files/1/0550/0272/6575/products/XB.3749-S90-1080x1080px-_2019_720x__19866.1614562524.1280.1280_600x.png?v=1617950149";

export const CustomCard = () => {
  return (
    <div className="max-h-min">
      <div className="bg-gray-200 overflow-hidden group">
        <Link to="/product/1234" className="relative flex justify-center">
          <div className="absolute bottom-0 w-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <button className="w-full py-4 bg-white text-gray-500 tracking-widest hover:bg-gray-800 hover:text-gray-200 transition duration-300">
              ADD TO CART
            </button>
          </div>
          <img className="object-cover" src={testImg} alt="Product" />
        </Link>
      </div>
      <div className="p-5">
        <h1 className="tracking-widest text-gray-600">Brand Name</h1>
        <h4 className="mb-2 font-semibold tracking-tight text-gray-700">
          Lorem ipsum dolor sit amet
        </h4>
        <div className="pt-1 text-md flex gap-3">
          <span className="line-through text-gray-500">$200.00 AUD</span>
          <span className="text-gray-800">$180.00 AUD</span>
        </div>
      </div>
    </div>
  );
};
