import { useSelector } from "react-redux";
import CustomCart from "../../components/custom/CustomCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <div className="min-h-screen ">
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
          <CustomCart buttonTitle="Checkout" buttonLink={"/checkout"} />
        </div>
      )}
    </div>
  );
};

export default Cart;
