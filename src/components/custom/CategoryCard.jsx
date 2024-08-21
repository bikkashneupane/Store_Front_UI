import { Link } from "react-router-dom";

const testImg =
  "https://cdn.shopify.com/s/files/1/0550/0272/6575/products/XB.3749-S90-1080x1080px-_2019_720x__19866.1614562524.1280.1280_600x.png?v=1617950149";

const CategoryCard = ({ title, to, image }) => {
  return (
    <div className="relative overflow-hidden group">
      {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
      <Link to={to} className="relative w-full h-full flex justify-center">
        <div className="absolute bottom-6 w-full p-2 flex flex-col justify-center items-center z-100">
          <button className="py-4 px-8 w-[200px] bg-white dark:text-black hover:text-white dark:hover:text-white hover:bg-yellow-600 tracking-wider text-xl font-bold transition duration-300">
            {title}
          </button>
        </div>
        <img
          className="object-cover object-center"
          src={image ?? testImg}
          alt="Product"
        />
      </Link>
    </div>
  );
};

export default CategoryCard;
