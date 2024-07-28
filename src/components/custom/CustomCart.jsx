import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, updateCart } from "../../features/cart/cartSlice";

const CustomCart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const handleQuantityChange = (e, product) => {
    const newQuantity = Number(e.target.value);
    dispatch(updateCart({ ...product, quantity: newQuantity }));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  return (
    <div className="mx-auto max-w-2xl pt-4 pb-10 sm:px-6 lg:px-10 lg:pt-10 lg:pb-20 border-2 rounded-lg shadow-2xl border-gray-400 dark:border-gray-400">
      <h1 className="text-3xl font-semibold mb-6 dark:text-gray-100 text-center">
        CART
      </h1>
      <hr className="border-gray-600 dark:border-gray-400" />
      <div className="">
        <ul className="space-y-4 mt-4">
          {cart.map((product) => (
            <li
              key={product._id}
              className="border-b border-gray-600 dark:border-gray-400 pb-4 mb-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-20 w-20 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h3 className="font-semibold dark:text-gray-100">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Price: ${product.price}
                    </p>
                    <div className="flex items-center mt-2">
                      <label
                        htmlFor={`quantity-${product._id}`}
                        className="mr-2 dark:text-gray-100"
                      >
                        Qty:
                      </label>
                      <input
                        type="number"
                        id={`quantity-${product._id}`}
                        min="1"
                        value={product.quantity}
                        onChange={(e) => handleQuantityChange(e, product)}
                        className="w-16 p-1 border rounded-md dark:bg-gray-700 dark:text-gray-100 text-center"
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(product)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-600 dark:border-gray-400">
        <h2 className="text-xl font-semibold mb-4 dark:text-gray-100">
          Order Summary
        </h2>
        <ul className="space-y-2">
          {cart.map((product) => (
            <li key={product._id} className="flex justify-between">
              <span className="dark:text-gray-100">
                {product.title} x {product.quantity}
              </span>
              <span className="dark:text-gray-100">
                ${product.price * product.quantity}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-4">
          <span className="font-semibold dark:text-gray-100">Total</span>
          <span className="font-semibold dark:text-gray-100">
            $
            {cart.reduce(
              (total, product) => total + product.price * product.quantity,
              0
            )}
          </span>
        </div>
        <Link
          to="/checkout"
          className="mt-4 block w-full text-center py-2 bg-purple-600 text-white rounded-md shadow hover:bg-purple-500"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default CustomCart;
