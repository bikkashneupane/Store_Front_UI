import CustomCarousel from "./../../components/custom/CustomCarousel";
import pocket_watch from "./../../assets/images/pocket-watch.avif";
import analog_watch from "./../../assets/images/analog-watch.jpg";
import wrist_watch from "./../../assets/images/wrist-watch.avif";
import carousel_1 from "./../../assets/images/carousel_1.webp";
import carousel_2 from "./../../assets/images/carousel_2.jpg";
import carousel_3 from "./../../assets/images/carousel_3.jpg";
import { CustomCard } from "../../components/custom/CustomCard";
import CategoryCard from "../../components/custom/CategoryCard";
import { useSelector } from "react-redux";

const images = [
  wrist_watch,
  carousel_1,
  analog_watch,
  carousel_2,
  pocket_watch,
  carousel_3,
];

const Home = () => {
  const { categories } = useSelector((state) => state.categories);

  const cards = Array(10).fill(<CustomCard />); // Array of CustomCard components

  return (
    <div className="min-h-screen">
      <CustomCarousel images={images} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          {/* Category */}
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-8">
              <div className="flex-grow w-full md:w-1/2 lg:w-1/4 px-4">
                <CategoryCard title={"Men"} link={"/men"} />
              </div>
              <div className="flex-grow w-full md:w-1/2 lg:w-1/4 px-4">
                <CategoryCard title={"Women"} link={"/women"} />
              </div>
              <div className="flex-grow w-full md:w-1/2 lg:w-1/4 px-4">
                <CategoryCard title={"Accessories"} link={"/accessories"} />
              </div>
              <div className="flex-grow w-full md:w-1/2 lg:w-1/4 px-4">
                <CategoryCard title={"Watches"} link={"/watches"} />
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
    </div>
  );
};

export default Home;
