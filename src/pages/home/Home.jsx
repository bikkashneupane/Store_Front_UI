import React from "react";
import CustomCarousel from "../../components/custom/CustomCarousel";
import { Link } from "react-router-dom";
import pocket_watch from "../../assets/images/pocket-watch.avif";
import analog_watch from "../../assets/images/analog-watch.jpg";
import wrist_watch from "../../assets/images/wrist-watch.avif";

const Home = () => {
  const images = [pocket_watch, analog_watch, wrist_watch];

  return (
    <div className="flex justify-center  object-cover text-white items-center">
      <CustomCarousel images={images} />
    </div>
  );
};

export default Home;
