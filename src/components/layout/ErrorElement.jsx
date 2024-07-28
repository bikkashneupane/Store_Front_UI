import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const ErrorElement = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <div className="mx-auto max-w-7xl min-h-[50vh] justify-center flex items-center text-2xl font-bold text-purple-500">
          404 Path Not Found
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorElement;
