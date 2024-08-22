import { Link } from "react-router-dom";

const CategoryCard = ({ title, to, image }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      <Link to={to} className="relative w-full h-full flex justify-center">
        <div className="absolute bottom-6 w-full p-2 flex flex-col justify-center items-center">
          <button className="py-4 px-8 w-[200px] bg-white dark:text-black hover:text-white dark:hover:text-white hover:bg-yellow-600 tracking-wider text-xl font-bold transition duration-300">
            {title}
          </button>
        </div>
        <img
          className="object-cover object-center w-full"
          src={image}
          alt="Product"
        />
      </Link>
    </div>
  );
};

export default CategoryCard;
