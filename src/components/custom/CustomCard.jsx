import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCartAction } from "../../features/cart/cartAction";

export const CustomCard = ({ product }) => {
  const { _id, thumbnail, name, brand, price, salesPrice } = product;

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    console.log(item);
    dispatch(addToCartAction({ ...item, quantity: 1 }));
  };

  return (
    <div className="max-h-min shadow-lg text-sm">
      <div className="bg-gray-100 dark:bg-gray-800 overflow-hidden group rounded-t-md">
        <div className="relative flex justify-center">
          <div className="absolute bottom-0 w-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <button
              onClick={() => handleAddToCart(product)}
              className="w-full py-4 bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-300 tracking-widest hover:bg-purple-900 hover:text-white dark:hover:bg-yellow-600 transition duration-300 font-semibold"
            >
              ADD TO CART
            </button>
          </div>
          <Link to={`/product/${_id}`}>
            <img
              className="object-cover h-[300px] w-full"
              src={thumbnail}
              alt="Product-Image"
            />
          </Link>
        </div>
      </div>
      <div className="p-5 h-[120px]">
        <h1 className="tracking-widest text-gray-600 dark:text-gray-300">
          {brand}
        </h1>
        <h4 className="mb-2 font-semibold tracking-tight text-gray-700 dark:text-gray-200">
          {name}
        </h4>
        <div className="pt-1 text-md flex gap-3 font-semibold">
          {salesPrice ? (
            <>
              <span className="line-through text-gray-500 dark:text-gray-400">
                ${new Intl.NumberFormat().format(price)} AUD
              </span>
              <span className="text-gray-800 dark:text-gray-100">
                ${new Intl.NumberFormat().format(salesPrice)} AUD
              </span>
            </>
          ) : (
            <>
              <span className="text-gray-800 dark:text-gray-100">
                ${new Intl.NumberFormat().format(price)} AUD
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
