import CustomCart from "../../components/custom/CustomCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state.carts);

  return (
    <div className="">
      {!cart.length ? (
        <div className="flex justify-center min-h-[50vh] items-center">
          <p className="text-gray-600 dark:text-gray-400">
            Your cart is empty.{" "}
            <Link to="/products" className="text-purple-600">
              Shop now.
            </Link>
          </p>
        </div>
      ) : (
        <div className="mt-20">
          <div className="mx-auto max-w-3xl pt-4 pb-10 px-4 lg:px-10 lg:pt-10 lg:pb-16 rounded-xl shadow-lg dark:bg-gray-900">
            <CustomCart buttonTitle="Checkout" buttonLink={"/checkout"} />
            <Link
              to={"/checkout"}
              className="mt-4 block w-full text-center py-2 bg-purple-600 text-white rounded-md shadow hover:bg-purple-500"
            >
              Checkout
            </Link>
            <h1 className="text-center block mt-4 font-semibold">OR</h1>
            <Link
              to={"/products"}
              className="mt-2 block text-center text-sm font-semibold text-purple-600 hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
