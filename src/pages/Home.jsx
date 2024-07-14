import React from "react";
import CustomCarousel from "../components/custom/CustomCarousel";
import pocket_watch from "../assets/images/pocket-watch.avif";
import analog_watch from "../assets/images/analog-watch.jpg";
import wrist_watch from "../assets/images/wrist-watch.avif";
import { CustomCard } from "../components/custom/CustomCard";

const Home = () => {
  const images = [pocket_watch, analog_watch, wrist_watch];

  return (
    <>
      <CustomCarousel images={images} />

      {/* Popular product section */}

      <div className="grid grid-cols-2 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-2 px-4 py-6">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    </>
  );
};

export default Home;
