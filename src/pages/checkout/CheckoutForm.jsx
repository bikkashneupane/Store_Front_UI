import {
  AddressElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";
import { setOrderIdInStore } from "../../features/order/orderSlice";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error("Stripe has not loaded yet.");
      return;
    }

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}`, // Replace with your confirmation page
      },
      redirect: "if_required", // Use "if_required" to prevent redirection if no further action is needed
    });

    if (!error) {
      console.log("Payment successful!", paymentIntent);
      // Optionally, you can update the frontend with order confirmation details here
      // removeorderId from redux store
      dispatch(setOrderIdInStore(""));
      navigate("/order-confirmation");
    } else {
      console.error(error.message);
    }
  };

  return (
    <div className="bg-light dark:bg-dark">
      <form className="pt-6 pb-12" onSubmit={handleCheckout}>
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
            Use a permanent address where you can receive mail.
          </p>
          <hr className="border-gray-300 dark:border-gray-400" />

          <div className="mt-8">
            <div className="space-y-4">
              <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                Shipping Address
              </label>
              <div className="bg-gray-50 dark:bg-gray-800 dark:border dark:border-gray-600 p-4 lg:p-12 rounded-lg">
                <AddressElement options={{ mode: "shipping" }} />
              </div>
            </div>
            <div className="mt-10 space-y-4">
              <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                Payment
              </label>
              <div className="bg-gray-50 dark:bg-gray-800 dark:border dark:border-gray-600 p-4 lg:p-12 rounded-lg">
                <PaymentElement options={{ layout: "tabs" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 grid">
          <button
            type="submit"
            className="rounded-md bg-purple-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          >
            Pay and Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
