import { StarIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCartAction } from "../../features/cart/cartAction";

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductLanding = () => {
  const [currentImage, setCurrentImage] = useState("");
  const [itemCount, setItemCount] = useState(0);

  const { _id } = useParams();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.products);
  const selectedProduct = products?.find((item) => item._id === _id);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImage(selectedProduct?.thumbnail);
  }, [selectedProduct?.thumbnail]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addToCartAction({ ...selectedProduct, quantity: itemCount }));
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-3 min-h-screen">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mt-10">
          <div className="lg:flex lg:gap-x-8">
            {/* Image gallery */}
            <div className="lg:w-1/2 lg:flex lg:gap-x-4 lg:items-start ">
              {/* Thumbnail gallery for larger screens */}
              <div className="hidden lg:flex lg:flex-col lg:gap-y-2 lg:mb-4 h-full">
                {selectedProduct?.images.map((img, index) => (
                  <div
                    key={index}
                    className={
                      img === currentImage
                        ? "relative w-24 h-24 p-0.5 border-2 rounded-md shadow-md border-purple-500"
                        : "relative w-24 h-24 p-0.5 border-2 rounded-md shadow-md border-gray-500 hover:border-purple-500"
                    }
                  >
                    <img
                      alt={`Thumbnail ${index}`}
                      src={img}
                      className={
                        img === currentImage
                          ? "w-full h-full rounded-md cursor-pointer"
                          : "w-full h-full rounded-md cursor-pointer hover:opacity-100 opacity-70"
                      }
                      onClick={() => setCurrentImage(img)}
                    />
                  </div>
                ))}
              </div>
              {/* Main image */}
              <div className="md:px-4 w-full lg:w-auto md:ml-4">
                <img
                  alt={selectedProduct?.title}
                  src={currentImage}
                  className="w-full h-[500px] object-cover object-center rounded-lg"
                />
              </div>
              {/* Thumbnail gallery for smaller screens */}
              <div className="flex lg:hidden space-x-2 mt-6 overflow-x-auto scrollbar-hidden ">
                {selectedProduct?.images.map((img, index) => (
                  <div
                    key={index}
                    className={
                      img === currentImage
                        ? "relative w-24 h-24 p-0.5 border-2 rounded-md shadow-md border-purple-500"
                        : "relative w-24 h-24 p-0.5 border-2 rounded-md shadow-md border-gray-500 hover:border-purple-500"
                    }
                  >
                    <img
                      alt={`Thumbnail ${index}`}
                      src={img}
                      className={
                        img === currentImage
                          ? "w-full h-full rounded-md cursor-pointer"
                          : "w-full h-full rounded-md cursor-pointer hover:opacity-100 opacity-70"
                      }
                      onClick={() => setCurrentImage(img)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product details */}
            <div className="lg:w-1/2 lg:p-12 my-10 lg:my-0 border-2 border-gray-300 rounded-lg shadow-md p-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                {selectedProduct?.title}
              </h1>

              <div className="font-semibold text-xl mt-2">
                {selectedProduct?.sales?.isSales ? (
                  <>
                    <span className="line-through text-gray-500 dark:text-gray-400">
                      ${selectedProduct?.price} AUD
                    </span>
                    &nbsp;&nbsp;
                    <span className="text-gray-800 dark:text-gray-200">
                      ${selectedProduct?.sales.salesPrice} AUD
                    </span>
                  </>
                ) : (
                  <span className="text-gray-800 dark:text-gray-200">
                    ${selectedProduct?.price} AUD
                  </span>
                )}
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          reviews.average > rating
                            ? "text-gray-900 dark:text-gray-200"
                            : "text-gray-200 dark:text-gray-600",
                          "h-5 w-5 flex-shrink-0"
                        )}
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a
                    href={reviews.href}
                    className="ml-3 text-sm font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>

              <form
                className="flex flex-col mt-10 gap-4"
                onSubmit={handleOnSubmit}
              >
                <div className="flex gap-4 items-center">
                  <button
                    type="button"
                    className="px-3 py-1 border font-extrabold"
                    onClick={() => {
                      if (itemCount > 0) {
                        setItemCount(itemCount - 1);
                      }
                    }}
                  >
                    -
                  </button>
                  <span className="font-bold text-lg">
                    {cart?.find((item) => item._id === _id)?.quantity ??
                      itemCount}
                  </span>
                  <button
                    type="button"
                    className="px-3 py-1 border font-extrabold"
                    onClick={() => setItemCount(itemCount + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-purple-600 px-8 py-3 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  disabled={itemCount < 1}
                >
                  Add to bag
                </button>
              </form>

              {/* Description */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold">Description</h3>
                <p className="mt-2 text-base text-gray-900 dark:text-gray-300">
                  {selectedProduct?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLanding;
