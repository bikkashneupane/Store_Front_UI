import { useDispatch, useSelector } from "react-redux";
import { setOrderIdInStore } from "../../features/order/orderSlice";
import {
  AtSymbolIcon,
  CalendarDateRangeIcon,
  CheckCircleIcon,
  MapPinIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { emptyCart } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { orderId } = useSelector((state) => state.order);
  const { cart } = useSelector((state) => state.cart);

  const [currentCart, setCurrentCart] = useState(cart || []);

  useEffect(() => {
    if (user?._id && cart?.length > 0) {
      dispatch(setOrderIdInStore(null));
      dispatch(emptyCart());
    }
  }, [dispatch, cart, user?._id]);

  if (!user?._id) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <Link
          to={"/login"}
          state={location.pathname}
          className="py-2 px-16 bg-purple-600 text-white rounded-md shadow-lg"
        >
          Login To Checkout
        </Link>
      </div>
    );
  }

  if (currentCart?.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-gray-600 dark:text-gray-400">
          Your cart is empty.{" "}
          <Link to="/products" className="text-purple-600">
            Shop now.
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-8">
        <div className="flex justify-center flex-col items-center">
          <h1 className="font-bold text-2xl mb-4">
            Thank you for your order, {user?.firstName}!
          </h1>
          <p className="font-sm">
            Your Order <span className="font-bold">{orderId}</span> is in works.
            We sent you an email to
            <span className="font-bold">{user?.email}</span> with your{" "}
            <span className="">order receipt</span>.
          </p>
          <CheckCircleIcon className="w-24 h-24 rounded-full text-green-500 object-cover object-center my-6" />
        </div>

        {/* Order Summary */}
        <div className="border border-gray-500 rounded-md pb-20 flex justify-center flex-col max-w-3xl mx-auto">
          <div className="bg-gray-800 text-white py-4 rounded-t px-4 text-end">
            <span>
              Total: $
              {currentCart?.reduce(
                (acc, curr) =>
                  acc + curr?.quantity * (curr?.salesPrice ?? curr?.price),
                0
              )}
            </span>
          </div>

          <div className="px-2 sm:px-4 md:px:8 lg:px-10">
            <div className="">
              <ul className="mt-4">
                {currentCart?.map((product) => (
                  <li
                    key={product?._id}
                    className="border-b border-gray-300 dark:border-gray-400 pb-4 mb-4"
                  >
                    <div className="flex items-end justify-between">
                      <div className="flex items-center">
                        <Link to={`/product/${product?._id}`}>
                          <img
                            src={product?.thumbnail}
                            alt={product?.name}
                            className="h-32 w-32 object-cover rounded-md mr-4"
                          />
                        </Link>
                        <div className="space-y-2">
                          <h3 className="font-semibold dark:text-gray-100">
                            {product?.name}
                          </h3>

                          <div className="space-y-1 text-sm">
                            <p className="text-gray-600 dark:text-gray-400">
                              Quantity: {product?.quantity}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                              Amount: $
                              {(product?.salesPrice || product?.price) *
                                product?.quantity || 0}
                            </p>
                          </div>
                          <button className="px-4 py-2 rounded-md bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold">
                            Buy Again
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 md:space-y-0 mx-auto mt-20">
              <div className="space-y-8">
                <div className="flex gap-2">
                  <CalendarDateRangeIcon className="h-7 w-7" />
                  <div className="space-y-2">
                    <h1 className="text-lg font-bold">Estimeted Arrival</h1>
                    <h2 className="text-sm font-semibold">
                      August 20 - August 25
                    </h2>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      To ensure prompt delivery some items may be shipped
                      seperately
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <MapPinIcon className="h-7 w-7" />
                  <div className="space-y-2">
                    <h1 className="text-lg font-bold">Shipping To</h1>
                    <div className="">
                      <p className="text-sm font-semibold">20 King St</p>
                      <p className="text-sm font-semibold">Sydney, 2000</p>
                      <p className="text-sm font-semibold">NSW Sydney</p>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      Tracking information will be available once your order is
                      ships
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-end gap-2 text-sm">
                <QuestionMarkCircleIcon className="h-7 w-7" />
                <div className="space-y-2">
                  <h1 className="text-lg font-bold">Have a Question?</h1>
                  <div className="grid grid-cols-1 border rounded-md">
                    <div className="flex gap-4 ps-3 py-2">
                      <PhoneIcon className="w-5 h-5" />
                      <p>(02) 9876 5432</p>
                    </div>
                    <div className="flex gap-4 ps-3 py-2 border-t">
                      <AtSymbolIcon className="w-5 h-5" />
                      <p>support@vikiamy.com</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-400 pt-4">
                    Need to return something? Print or show this image in store
                    to use as a receipt.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
