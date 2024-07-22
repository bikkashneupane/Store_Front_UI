import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const ErrorElement = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[80vh] pt-[80px]">
        <h2>404 Path Not Found</h2>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorElement;
