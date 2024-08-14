import { StarIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addToCartAction,
  updateCartAction,
} from "../../features/cart/cartAction";
import "./ProductLanding.css";

const reviews = { href: "#product-reviews", average: 4, totalCount: 117 };

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
    setCurrentImage(selectedProduct?.thumbnail);

    // Set itemCount based on the cart item if it exists
    const cartItem = cart?.find((item) => item._id === _id);
    setItemCount(cartItem?.quantity || 0);
  }, [selectedProduct?.thumbnail, cart, _id]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (cart?.find((item) => item._id === _id)) {
      dispatch(updateCartAction({ ...selectedProduct, quantity: itemCount }));
    } else {
      dispatch(addToCartAction({ ...selectedProduct, quantity: itemCount }));
    }
  };

  return (
    <div className="dark:bg-gray-900 text-gray-900 dark:text-white relative">
      <div className="mx-auto mt-10 md:mt-20 max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-x-8">
          {/* Image gallery */}
          <div className="lg:w-4/5 lg:flex lg:items-start lg:gap-x-4">
            {/* Image gallery for larger screens */}
            <div className="hidden lg:flex lg:flex-col lg:gap-y-2 lg:mb-4 h-full ">
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
                        : "w-full h-full rounded-md cursor-pointer hover:opacity-100 opacity-30"
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
                className="w-full lg:min-w-[580px] h-[520px] object-cover object-center rounded-lg shadow-xl shadow-b dark:shadow-gray-400 shadow-gray-500"
              />
            </div>

            {/* Image gallery for smaller screens */}
            <div className="flex lg:hidden space-x-2 mt-6 overflow-x-auto scrollbar-hidden">
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
          <div className="my-10 lg:my-0 p-4 lg:w-1/2 lg:p-12 lg:pb-4 dark:border-2 dark:border-gray-700 rounded-lg shadow-xl max-h-[520px] dark:shadow-gray-600 shadow-gray-500">
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
                  className="ml-3 text-sm font-medium scroll-smooth text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300"
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
                <span className="font-bold text-lg">{itemCount}</span>
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
                {selectedProduct?.description?.slice(0, 250)} ....
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Product Description and Review  */}
      <div className="bg-black text-white py-4 flex justify-center gap-10 mt-16 cursor-pointer sticky top-0">
        <a href="#porduct-description">Description</a>
        <a href="#product-reviews">Reviews</a>
      </div>

      <div
        className="my-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
        id="product-description"
      >
        {/* Description */}
        <div className="py-4 mb-4">
          <h1 className="text-2xl font-bold mb-8 italic tracking-wider font-mono underline">
            Description
          </h1>
          <p>{selectedProduct?.description}</p>
        </div>
        {/* Review */}

        <div className="mt-10 py-4">
          <h1 className="text-xl font-bold mb-8 tracking-wider font-mono underline">
            Reviews
          </h1>
          <div className="mt-8 flex flex-col gap-6" id="product-reviews">
            <div className="flex gap-8">
              <div className="w-8 h-8 border rounded-full flex items-center justify-center">
                <span>BN</span>
              </div>
              <div>
                <h1>Good Product</h1>
                <h2>5 stars</h2>
                <p>Amazing Product, A little Expensive though.</p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="w-8 h-8 border rounded-full flex items-center justify-center">
                <span>BN</span>
              </div>
              <div>
                <h1>Good Product</h1>
                <h2>5 stars</h2>
                <p>Amazing Product, A little Expensive though.</p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="w-8 h-8 border rounded-full flex items-center justify-center">
                <span>BN</span>
              </div>
              <div>
                <h1>Good Product</h1>
                <h2>5 stars</h2>
                <p>Amazing Product, A little Expensive though.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLanding;
