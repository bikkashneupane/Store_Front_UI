import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomCart from "../../components/custom/CustomCart";

const Checkout = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {!cart.length ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <p className="text-gray-600 dark:text-gray-400">
              Your cart is empty.{" "}
              <Link to="/products" className="text-purple-600">
                Shop now.
              </Link>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-4 gap-y-8">
            {/* Checkout Form */}
            <div className="lg:col-span-3 dark:border-2 rounded-lg shadow-lg border-gray-500 lg:px-16 border">
              <form className="p-6 py-12">
                <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12 dark:border-gray-600">
                    <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                      Personal Information
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      Use a permanent address where you can receive mail.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                          First name
                        </label>
                        <div className="mt-2">
                          <input
                            name="firstName"
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 dark:bg-500 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                          Last name
                        </label>
                        <div className="mt-2">
                          <input
                            name="lastName"
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 dark:bg-500 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-4">
                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            name="email"
                            type="email"
                            className="block w-full rounded-md border-0 py-1.5 dark:bg-500 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                          Country
                        </label>
                        <div className="mt-2">
                          <select
                            name="country"
                            className="block w-full rounded-md border-0 py-1.5 dark:bg-500 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:max-w-xs sm:text-sm sm:leading-6 px-1"
                          >
                            <option>Australia</option>
                            <option>New Zealand</option>
                            <option>USA</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-span-full">
                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                          Street address
                        </label>
                        <div className="mt-2">
                          <input
                            name="street-address"
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 dark:bg-500 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2 sm:col-start-1">
                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                          City
                        </label>
                        <div className="mt-2">
                          <input
                            name="city"
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 dark:bg-500 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                          State / Province
                        </label>
                        <div className="mt-2">
                          <input
                            name="region"
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 dark:bg-500 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                          ZIP / Postal code
                        </label>
                        <div className="mt-2">
                          <input
                            name="postal-code"
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 dark:bg-500 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gray-900/10 pb-12 dark:border-gray-600">
                    <div className="mt-10 space-y-10">
                      <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                          Payment Method
                        </legend>
                        <div className="mt-6 space-y-6">
                          <div className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                              <input
                                name="payment-method"
                                type="radio"
                                className="h-4 w-4 rounded dark:bg-500 border-gray-300 text-purple-600 focus:ring-purple-600"
                              />
                            </div>
                            <div className="text-sm leading-6">
                              <label className="font-medium text-gray-900 dark:text-gray-100">
                                Mastercard
                              </label>
                            </div>
                          </div>

                          <div className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                              <input
                                name="payment-method"
                                type="radio"
                                className="h-4 w-4 rounded dark:bg-500 border-gray-300 text-purple-600 focus:ring-purple-600"
                              />
                            </div>
                            <div className="text-sm leading-6">
                              <label className="font-medium dark:bg-500 text-gray-900 dark:text-gray-100">
                                Visa
                              </label>
                            </div>
                          </div>
                          <div className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                              <input
                                name="payment-method"
                                type="radio"
                                className="h-4 w-4 rounded dark:bg-500 border-gray-300 text-purple-600 focus:ring-purple-600"
                              />
                            </div>
                            <div className="text-sm leading-6">
                              <label className="font-medium text-gray-900 dark:text-gray-100">
                                Paypal
                              </label>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <Link
                    to="/cart"
                    className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
                  >
                    Back
                  </Link>
                  <button
                    type="submit"
                    className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:col-span-2">
              {/* Integrate Cart component here */}
              <CustomCart buttonTitle="Order Now" buttonLink={"/payment"} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
