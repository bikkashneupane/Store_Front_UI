import "./ProductLanding.css";

import {
  addToCartAction,
  updateCartAction,
} from "../../features/cart/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Stars from "../../components/custom/Star";
import profile_alt from "../../assets/images/profile_alt.jpeg";

const ProductLanding = () => {
  const [currentImage, setCurrentImage] = useState("");
  const [itemCount, setItemCount] = useState(0);

  const { _id } = useParams();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.carts);
  const { products } = useSelector((state) => state.products);
  const { reviews } = useSelector((state) => state.reviews);
  const { brands, materials } = useSelector((state) => state.categories);
  const selectedProduct = products?.find((item) => item._id === _id);

  const productReviews = reviews?.filter(
    (review) => review?.productId === selectedProduct?._id
  );
  const totalReviews = productReviews?.length;
  const averageRating =
    productReviews?.reduce((acc, curr) => acc + curr?.ratings, 0) /
    totalReviews;

  const navigate = useNavigate();

  useEffect(() => {
    setCurrentImage(selectedProduct?.thumbnail);

    // Set itemCount based on the cart item if it exists
    const cartItem = cart?.find((item) => item._id === _id);

    setItemCount(cartItem?.quantity || 0);
  }, [selectedProduct?.thumbnail, cart, _id]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (cart?.find((item) => item._id === _id)) {
      dispatch(updateCartAction({ ...selectedProduct, quantity: itemCount }));
    } else {
      dispatch(addToCartAction({ ...selectedProduct, quantity: itemCount }));
    }
  };

  const handleOnBuyNow = (e) => {
    e.preventDefault();
    dispatch(addToCartAction({ ...selectedProduct, quantity: itemCount }));
    navigate("/checkout");
  };

  return (
    <div className="dark:bg-gray-900 text-gray-900 dark:text-white relative">
      <div className="mx-auto mt-10 md:mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-5 gap-y-10">
          {/* Image gallery */}
          <div className="md:flex md:gap-8 lg:col-span-3 w-full">
            {/* Image gallery for larger screens */}
            <div className="hidden md:flex md:flex-col gap-2 mb-4 h-full">
              {selectedProduct?.images?.length > 1 &&
                selectedProduct?.images.map((img, index) => (
                  <div
                    key={index}
                    onMouseOver={() => setCurrentImage(img)}
                    className={`relative w-16 h-16 border-2 rounded-md shadow-md ${
                      img === currentImage
                        ? "border-purple-500"
                        : "border-gray-500 hover:border-purple-500"
                    } `}
                  >
                    <img
                      alt="product_images"
                      src={img}
                      className={`w-full h-full rounded-md cursor-pointer ${
                        img === currentImage
                          ? "opacity-100"
                          : "hover:opacity-100 opacity-30"
                      }`}
                    />
                  </div>
                ))}
            </div>

            {/* Main image */}
            <div className="lg:px-4">
              <img
                alt={selectedProduct?.title}
                src={currentImage}
                className="w-full max-h-[650px] object-cover object-center rounded-lg"
              />
            </div>
            {/* Image gallery for smaller screens */}
            <div className="flex justify-center md:hidden space-x-2 mt-6 overflow-x-auto scrollbar-hidden">
              {selectedProduct?.images?.length > 1 &&
                selectedProduct?.images.map((img, index) => (
                  <div
                    key={index}
                    onMouseOver={() => setCurrentImage(img)}
                    className={`relative w-16 h-16 border-2 rounded-md shadow-md ${
                      img === currentImage
                        ? "border-purple-500"
                        : "border-gray-500 hover:border-purple-500"
                    } `}
                  >
                    <img
                      alt={`Thumbnail ${index}`}
                      src={img}
                      className={`w-full h-full rounded-md cursor-pointer ${
                        img === currentImage
                          ? "opacity-100"
                          : "hover:opacity-100 opacity-30"
                      }`}
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* Product details */}
          <div className="relative overflow-hidden mt-10 lg:my-0 lg:col-span-2 px-6">
            <h1 className="font-semibold text-lg text-gray-900 dark:text-white">
              {selectedProduct?.name}
            </h1>
            <span className="font-semibold text-sm">
              {
                brands?.find((brand) => brand._id === selectedProduct?.brandId)
                  ?.name
              }
            </span>

            <div className="font-semibold text-lg mt-2">
              {selectedProduct?.salesPrice ? (
                <>
                  <span className="line-through text-gray-500 dark:text-gray-400">
                    ${new Intl.NumberFormat().format(selectedProduct?.price)}{" "}
                    AUD
                  </span>
                  &nbsp;&nbsp;
                  <span className="text-gray-800 dark:text-gray-200">
                    $
                    {new Intl.NumberFormat().format(
                      selectedProduct?.salesPrice
                    )}{" "}
                    AUD
                  </span>
                </>
              ) : (
                <span className="text-gray-800 dark:text-gray-200">
                  ${new Intl.NumberFormat().format(selectedProduct?.price)} AUD
                </span>
              )}
            </div>

            {/* Reviews */}
            <div className="mt-2">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex gap-1 items-center">
                <Stars stars={averageRating} />{" "}
                <span className="text-sm">
                  {" "}
                  {totalReviews > 0
                    ? `${averageRating}(${totalReviews})`
                    : "Be the first"}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <a href="#product-description">
                <h1 className="font-semibold">Overview</h1>
                <p className="my-2 text-gray-900 dark:text-gray-300 text-[15px] break-words whitespace-normal">
                  {selectedProduct?.description?.slice(0, 500)} ...
                  <span className="underline text-purple-600 dark:text-purple-400">
                    {" "}
                    read more
                  </span>
                </p>
              </a>
            </div>

            <form
              className="flex flex-col mt-10 gap-4"
              onSubmit={handleAddToCart}
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
              <div className="relative grid grid-cols-1 gap-3">
                <button
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-purple-600 px-8 py-2 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  disabled={itemCount < 1}
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleOnBuyNow}
                  className="w-full rounded-md flex justify-center border border-transparent bg-teal-600 px-8 py-2 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  disabled={itemCount < 1}
                >
                  Buy Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Product Description and Review  */}
      <div className="bg-black text-white py-4 flex justify-center gap-10 mt-16 cursor-pointer sticky top-0 px-4">
        <a href="#porduct-description">Description</a>
        <a href="#product-specs">Specifications</a>
        <a href="#product-reviews">Reviews</a>
      </div>

      <div className="my-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Description */}
        <div className="py-4 mb-4" id="product-description">
          <h1 className="text-2xl font-bold mb-8 italic tracking-wider font-mono underline">
            Description
          </h1>
          <p className="whitespace-pre-wrap">{selectedProduct?.description}</p>
        </div>

        {/* Specifications */}
        <div className="py-4 mb-4" id="product-specs">
          <h1 className="text-2xl font-bold mb-8 italic tracking-wider font-mono underline">
            Specifications
          </h1>
          <table className="border-gray-200 rounded-lg shadow-md">
            <tbody>
              <tr>
                <td className="py-2 px-8 border dark:border-gray-500">SKU</td>
                <td className="py-2 px-8 border dark:border-gray-500">
                  {selectedProduct?.sku}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-8 border dark:border-gray-500">Brand</td>
                <td className="py-2 px-8 border dark:border-gray-500">
                  {
                    brands?.find(
                      (brand) => brand._id === selectedProduct?.brandId
                    )?.name
                  }
                </td>
              </tr>
              <tr>
                <td className="py-2 px-8 border dark:border-gray-500">
                  Material
                </td>
                <td className="py-2 px-8 border dark:border-gray-500">
                  {
                    materials?.find(
                      (material) => material._id === selectedProduct?.materialId
                    )?.name
                  }
                </td>
              </tr>

              <tr>
                <td className="py-2 px-8 border dark:border-gray-500">
                  Orientation
                </td>
                <td className="py-2 px-8 border dark:border-gray-500">
                  {selectedProduct?.gender}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-8 border dark:border-gray-500">Price</td>
                <td className="py-2 px-8 border dark:border-gray-500">
                  ${selectedProduct?.price} AUD
                </td>
              </tr>
              {selectedProduct?.salesPrice && (
                <tr>
                  <td className="py-2 px-8 border dark:border-gray-500">
                    Sales Price
                  </td>
                  <td className="py-2 px-8 border dark:border-gray-500">
                    ${selectedProduct?.salesPrice} AUD
                  </td>
                </tr>
              )}
              <tr>
                <td className="py-2 px-8 border dark:border-gray-500">Stock</td>
                <td className="py-2 px-8 border dark:border-gray-500">
                  {selectedProduct?.quantity}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Review */}
        {totalReviews > 0 && (
          <div className="mt-10 py-4">
            <h1 className="text-xl font-bold mb-8 tracking-wider font-mono underline">
              Reviews
            </h1>
            <div
              className="mt-8 flex flex-col gap-6 text-sm"
              id="product-reviews"
            >
              {reviews
                ?.filter((item) => item.productId === _id)
                ?.map((review) => (
                  <div key={review?._id}>
                    <div className="flex items-center gap-3">
                      <img
                        src={review?.userImage ?? profile_alt}
                        alt=""
                        className="w-8 h-8 rounded-full"
                      />
                      <h1>{reviews[0]?.userName?.split(" ")[0]}</h1>
                    </div>
                    <div className="ps-11 space-y-2">
                      <h1>Reviewed on {review?.createdAt?.slice(0, 10)}</h1>
                      <div className="flex gap-1 mb-2">
                        <Stars stars={review?.ratings} />
                        <h1 className="font-semibold">{review?.title}</h1>
                      </div>
                      <p>{review?.message}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Images */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-10">
          {selectedProduct?.images?.map((item) => (
            <img
              key={`${Date.now()}-${item}`}
              src={item}
              alt=""
              className="w-full h-ful border dark:border-0 rounded-md "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductLanding;
