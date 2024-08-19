import { useDispatch } from "react-redux";
import { setOrderIdInStore } from "../../features/order/orderSlice";

const OrderConfirmation = () => {
  const dispatch = useDispatch();

  // removeorderId from redux store
  // dispatch(setOrderIdInStore(""));

  return (
    <div className="min-h-screen bg-light dark:bg-dark text-gray-700 dark:text-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col justify-center items-center mt-10">
        <h1>Thank you For Ordering</h1>
        <h1>Your Receit</h1>
        <p>Amount Paid: 1500</p>
        <p>Products: </p>
      </div>
    </div>
  );
};

export default OrderConfirmation;
