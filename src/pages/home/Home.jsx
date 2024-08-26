import CustomCarousel from "./../../components/custom/CustomCarousel";
import pocket_watch from "./../../assets/images/pocket-watch.avif";
import analog_watch from "./../../assets/images/analog-watch.jpg";
import wrist_watch from "./../../assets/images/wrist-watch.avif";
import carousel_1 from "./../../assets/images/carousel_1.webp";
import carousel_2 from "./../../assets/images/carousel_2.jpg";
import carousel_3 from "./../../assets/images/carousel_3.jpg";
import mens from "./../../assets/images/mens.webp";
import womens from "./../../assets/images/womens.jpg";
import accessories from "./../../assets/images/accessories.jpg";
import { CustomCard } from "../../components/custom/CustomCard";
import CategoryCard from "../../components/custom/CategoryCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
  const watch_Id = categories?.find((item) => item?.slug === "watches")?._id;
  const accessories_Id = categories?.find(
    (item) => item?.slug === "accessories"
  )?._id;

  const { reviews } = useSelector((state) => state.reviews);
  const { products } = useSelector((state) => state.products);

  const topProducts = reviews
    ?.filter((review) => review?.ratings >= 4)
    ?.map((item) => item?.productId);

  const uniqueProductIds = new Set(topProducts);
  console.log(uniqueProductIds);

  const popularProducts = products
    ?.filter(
      (item) =>
        uniqueProductIds?.has(item?._id) && item?.categoryId === watch_Id
    )
    ?.slice(0, 10);

  const mensProducts = products
    ?.filter((item) => item?.gender === "men" && item?.categoryId === watch_Id)
    ?.slice(0, 10);

  const womensProducts = products
    ?.filter(
      (item) => item?.gender === "women" && item?.categoryId === watch_Id
    )
    ?.slice(0, 10);

  const homeCatInput = [
    {
      title: "Men",
      to: `/products?category=${watch_Id}&gender=men`,
      image: mens,
    },
    {
      title: "Women",
      to: `/products?category=${watch_Id}&gender=women`,
      image: womens,
    },
    {
      title: "Accessories",
      to: `/products?category=${accessories_Id}`,
      image: accessories,
    },
  ];

  return (
    <div className="">
      <CustomCarousel images={images} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-8">
          {/* Category */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {homeCatInput?.map((item) => (
                <div key={`${Date.now}-${item?.title}`} className="px-4">
                  <CategoryCard {...item} />
                </div>
              ))}
            </div>
          </div>

          {/* POPULAR */}
          <div className="mt-20 mb-6">
            <h2 className="px-4 pt-4 text-xl tracking-wider text-center font-bold">
              MOST POPULAR
            </h2>
            <div className="relative flex items-center">
              <div className="flex gap-2 px-4 py-6 overflow-x-scroll scrollbar-hide w-full">
                {popularProducts.map((product) => (
                  <div
                    key={product?._id}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4"
                  >
                    <CustomCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Female */}
          <div className="my-6">
            <h2 className="px-4 pt-4 text-xl tracking-wider text-center">
              NEW ARRIVALS AND FAVOURITES
            </h2>
            <Link to={`/products?category=${watch_Id}&gender=women`}>
              <h1 className="px-4 pt-4 text-xl tracking-wider text-center hover:text-purple-500 hover:underline font-bold">
                WOMEN
              </h1>
            </Link>
            <div className="relative flex items-center">
              <div className="flex gap-2 px-4 py-6 overflow-x-scroll scrollbar-hide w-full">
                {womensProducts.map((product) => (
                  <div
                    key={product?._id}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4"
                  >
                    <CustomCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mens */}
          <div className="my-6">
            <h2 className="px-4 pt-4 text-xl tracking-wider text-center">
              NEW ARRIVALS AND FAVOURITES
            </h2>
            <Link to={`/products?category=${watch_Id}&gender=men`}>
              <h1 className="px-4 pt-4 text-xl tracking-wider text-center hover:text-purple-500 hover:underline font-bold">
                MEN
              </h1>
            </Link>
            <div className="relative flex items-center">
              <div className="flex gap-2 px-4 py-6 overflow-x-scroll scrollbar-hide w-full">
                {mensProducts.map((product) => (
                  <div
                    key={product?._id}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4"
                  >
                    <CustomCard product={product} />
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
