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
  const [currentImage, setCurrentImage] = useState({});
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
    <div className="">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="pt-6">
          {/* Grid layout for medium screens and larger */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            {/* Image gallery */}
            <div className="lg:col-span-1">
              {/* Main image */}
              <div className="md:p-4">
                <img
                  alt=""
                  src={currentImage}
                  className="w-full h-[500px] object-cover object-center"
                />
              </div>
              <hr />
              {/* Thumbnail gallery */}
              <div className="mt-4 overflow-x-auto scrollbar-hidden">
                <div className="flex space-x-2">
                  {selectedProduct?.images.map((img, index) => (
                    <div key={index} className="relative w-24 h-24 p-1">
                      <img
                        alt={`Thumbnail ${index}`}
                        src={img}
                        className="w-full h-full rounded-md cursor-pointer hover:scale-105"
                        onMouseMoveCapture={() => setCurrentImage(img)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product details */}
            <div className="lg:col-span-1 lg:pl-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {selectedProduct?.title}
              </h1>

              <div className="font-semibold text-lg mt-2">
                <span className="line-through text-gray-500">
                  ${selectedProduct?.price} AUD
                </span>{" "}
                {selectedProduct?.sales?.salesPrice && (
                  <span className="text-gray-800">
                    &nbsp;&nbsp;${selectedProduct?.sales.salesPrice} AUD
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
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a
                    href={reviews.href}
                    className="ml-3 text-sm font-medium text-teal-600 hover:text-teal-500"
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
                  <span
                    className="px-4 py-2 border font-extrabold"
                    onClick={() => {
                      if (itemCount > 0) {
                        setItemCount(itemCount - 1);
                      }
                    }}
                  >
                    -
                  </span>
                  <span className="font-bold text-lg">
                    {cart?.find((item) => item._id === _id)?.quantity ??
                      itemCount}
                  </span>
                  <span
                    className="px-4 py-2 border font-extrabold"
                    onClick={() => setItemCount(itemCount + 1)}
                  >
                    +
                  </span>
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-teal-600 px-8 py-3 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  disabled={itemCount < 1}
                >
                  Add to bag
                </button>
              </form>

              {/* Description */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold">Description</h3>
                <p className="mt-2 text-base text-gray-900">
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
