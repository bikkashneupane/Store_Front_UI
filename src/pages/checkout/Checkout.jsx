import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CustomCart from "../../components/custom/CustomCart";
import CheckoutForm from "./CheckoutForm";
import axios from "axios";
import { Link } from "react-router-dom";

const orderEP =
  import.meta.env.VITE_SERVER_API + "/orders/create-payment-intent";

const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_PK}`);

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const totalAmount = cart?.reduce((acc, curr) => {
    return acc + curr?.quantity * (curr?.sales?.salesPrice || curr?.price);
  }, 0);

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const { data } = await axios.post(orderEP, {
          amount: totalAmount,
          currency: "AUD",
          userId: user?._id,
          userName: `${user?.firstName} ${user?.lastName}`,
          items: cart?.map((item) => ({
            _id: item?._id,
            name: item?.name,
            quantity: item?.quantity,
            price: item?.sales?.salesPrice || item?.price,
          })),
        });
        const { clientSecret } = data;
        setClientSecret(clientSecret);
      } catch (error) {
        console.log(error);
      }
    };

    fetchClientSecret();
  }, [cart, totalAmount, user?._id, user?.firstName, user?.lastName]);

  const options = {
    clientSecret,
    appearance: {
      theme: isDarkMode ? "night" : "stripe", // choices: 'stripe', 'flat', 'night', 'none'
    },
  };

  return (
    <div className="">
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
        ) : clientSecret ? (
          <Elements stripe={stripePromise} options={options}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-4 gap-y-8">
              {/* Checkout Form */}
              <div className="lg:col-span-3 rounded-xl shadow-2xl px-2 lg:px-16 py-4  dark:bg-gray-800">
                <CheckoutForm clientSecret={clientSecret} />
              </div>

              <div className="lg:col-span-2">
                {/* Integrate Cart component here */}
                <div className="mx-auto max-w-5xl pt-6 pb-12 px-4 lg:px-10 lg:pt-10 lg:pb-16 rounded-xl shadow-lg dark:bg-gray-800">
                  <CustomCart buttonTitle="Checkout" buttonLink={"/checkout"} />
                  <Link
                    to={"/products"}
                    className="mt-8 py-2 block w-full text-center text-sm font-semibold bg-purple-600 text-white rounded-md shadow hover:bg-purple-500"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </Elements>
        ) : (
          <div>Loading...</div> // Show a loading message or spinner while clientSecret is being fetched
        )}
      </div>
    </div>
  );
};

export default Checkout;
