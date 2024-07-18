import CustomCarousel from "../components/custom/CustomCarousel";
import pocket_watch from "../assets/images/pocket-watch.avif";
import analog_watch from "../assets/images/analog-watch.jpg";
import wrist_watch from "../assets/images/wrist-watch.avif";
import { CustomCard } from "../components/custom/CustomCard";
import { HomeCard } from "../components/custom/HomeCard";

const Home = () => {
  const images = [pocket_watch, analog_watch, wrist_watch];

  const cards = Array(10).fill(<CustomCard />); // Array of CustomCard components

  return (
    <div>
      <CustomCarousel images={images} />

      <div className="mx-auto max-w-[1200px] px-2 sm:px-6 lg:px-8 py-6">
        {/* Category */}
        <div className="flex justify-center px-4">
          <div className="flex flex-wrap gap-8">
            <div className="flex-grow w-full md:w-1/2 lg:w-1/4">
              <HomeCard />
            </div>
            <div className="flex-grow w-full md:w-1/2 lg:w-1/4">
              <HomeCard />
            </div>
            <div className="flex-grow w-full md:w-1/2 lg:w-1/4">
              <HomeCard />
            </div>
            <div className="flex-grow w-full md:w-1/2 lg:w-1/4">
              <HomeCard />
            </div>
          </div>
        </div>

        {/* POPULAR */}
        <div className="my-6">
          <h2 className="px-4 pt-4 text-2xl font-semibold text-center tracking-widest">
            MOST POPULAR
          </h2>
          <div className="relative flex items-center">
            <div className="flex gap-2 px-4 py-6 overflow-x-scroll scrollbar-hide w-full">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4"
                >
                  {card}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Female */}
        <div className="my-6">
          <h2 className="px-4 pt-4 text-2xl tracking-widest text-center">
            NEW ARRIVALS AND FAVOURITES
          </h2>
          <h2 className="px-4 pt-4 text-2xl font-semibold text-center tracking-widest">
            FEMALE
          </h2>
          <div className="relative flex items-center">
            <div className="flex gap-2 px-4 py-6 overflow-x-scroll scrollbar-hide w-full">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4"
                >
                  {card}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mens */}
        <div className="my-6">
          <h2 className="px-4 pt-4 text-2xl tracking-widest text-center">
            NEW ARRIVALS AND FAVOURITES
          </h2>
          <h2 className="px-4 pt-4 text-2xl font-semibold text-center tracking-widest">
            MEN
          </h2>
          <div className="relative flex items-center">
            <div className="flex gap-2 px-4 py-6 overflow-x-scroll scrollbar-hide w-full">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4"
                >
                  {card}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
