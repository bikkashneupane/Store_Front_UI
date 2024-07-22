import React from "react";
import { Link } from "react-router-dom";

const testImg =
  "https://cdn.shopify.com/s/files/1/0550/0272/6575/products/XB.3749-S90-1080x1080px-_2019_720x__19866.1614562524.1280.1280_600x.png?v=1617950149";

export const HomeCard = () => {
  return (
    <div
      className="relative bg-gray-800 overflow-hidden group shadow-2xl"
      // style={{ height: "550px" }}
    >
      <Link
        to="/product/1234"
        className="relative w-full h-full flex justify-center"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute bottom-6 w-full p-2 flex flex-col justify-center items-center gap-8 z-10">
          <h1 className="text-gray-200 text-3xl tracking-widest">CATEGORY</h1>
          <button className="py-4 px-8 bg-white text-gray-500 tracking-widest hover:bg-gray-800 hover:text-gray-200 transition duration-300">
            SHOP NOW
          </button>
        </div>
        <img className="object-cover h-full" src={testImg} alt="Product" />
      </Link>
    </div>
  );
};
