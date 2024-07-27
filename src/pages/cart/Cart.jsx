import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
  updateCart,
} from "../../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="mt-10">
      <div className="mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <h1 className="mb-2 text-2xl font-bold text-center">Cart</h1>
        <hr />
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {cart?.map((item, index) => (
              <li key={item._id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    alt=""
                    src={item?.thumbnail}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <Link to={`/products/${item?._id}`}>{item?.title}</Link>
                      </h3>
                      <p className="ml-4">
                        $
                        {item.quantity *
                          (item?.sales?.salesPrice || item?.price)}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{item?.brand}</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex items-center">
                      <p className="text-gray-500 inline mr-2">Qty</p>
                      <div className="flex gap-2 items-center font-bold">
                        <button
                          className="px-4 py-1 border"
                          onClick={() => {
                            dispatch(
                              updateCart({
                                ...item,
                                quantity: item.quantity - 1,
                              })
                            );
                          }}
                        >
                          -
                        </button>
                        {item?.quantity}
                        <button
                          className="px-4 py-1 border"
                          onClick={() => {
                            dispatch(
                              updateCart({
                                ...item,
                                quantity: item.quantity + 1,
                              })
                            );
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-teal-600 hover:text-teal-500"
                        onClick={() => {
                          dispatch(removeFromCart(item));
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>
              $
              {cart?.reduce((acc, curr) => {
                return curr.sales.isSales
                  ? acc + curr.quantity * curr.sales.salesPrice
                  : acc + curr.quantity * curr.price;
              }, 0)}
            </p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <Link
              to={"/checkout"}
              className="flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-700"
            >
              Checkout
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or{" "}
              <Link
                to={"/items"}
                className="font-medium text-teal-600 hover:text-teal-500"
              >
                Continue Shopping
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
