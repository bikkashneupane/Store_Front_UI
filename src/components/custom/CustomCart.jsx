import { removeFromCart, updateCart } from "../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CustomCart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.carts);

  const handleQuantityChange = (e, product) => {
    const newQuantity = parseInt(e.target.value);
    dispatch(updateCart({ ...product, quantity: newQuantity }));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-5 dark:text-gray-100 text-center">
        CART
      </h1>
      <hr className="border-gray-300 dark:border-gray-400" />
      <div>
        <ul className="space-y-4 mt-4">
          {cart?.map(
            ({ _id, thumbnail, name, salesPrice, price, quantity }) => (
              <li
                key={_id}
                className="border-b border-gray-300 dark:border-gray-400 pb-4 mb-4"
              >
                <div className="flex items-end justify-between">
                  <div className="flex items-center">
                    <img
                      src={thumbnail}
                      alt={name}
                      className="h-20 w-20 object-cover rounded-md mr-4"
                    />
                    <div>
                      <h3 className="font-semibold dark:text-gray-100">
                        {name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Price: ${(salesPrice || price) * quantity || 0}
                      </p>
                      <div className="flex items-center mt-2">
                        <label
                          htmlFor={`quantity-${_id}`}
                          className="mr-2 dark:text-gray-100"
                        >
                          Qty:
                        </label>
                        <input
                          type="number"
                          id={`quantity-${_id}`}
                          min="1"
                          value={quantity}
                          onChange={(e) =>
                            handleQuantityChange(e, {
                              _id,
                              thumbnail,
                              name,
                              salesPrice,
                              price,
                              quantity,
                            })
                          }
                          className="w-16 p-1 border rounded-md dark:bg-gray-700 dark:text-gray-100 text-center"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      handleRemoveFromCart({
                        _id,
                        thumbnail,
                        name,
                        salesPrice,
                        price,
                        quantity,
                      })
                    }
                    className="text-white hover:text-red-70 bg-red-500 px-4 py-2 text-sm rounded-md"
                  >
                    Remove
                  </button>
                </div>
              </li>
            )
          )}
        </ul>
      </div>

      <div className="mt-16 pt-4">
        <h2 className="text-xl font-semibold mb-4 dark:text-gray-100 text-center">
          <hr className="mb-2 border-gray-300 dark:border-gray-400" />
          Order Summary
          <hr className="mt-2 border-gray-300 dark:border-gray-400" />
        </h2>
        <ul className="space-y-2">
          {cart.map(({ _id, name, quantity, salesPrice, price }) => (
            <li key={_id} className="flex justify-between gap-4 text-sm">
              <span className="dark:text-gray-100">
                {quantity} x {name}
              </span>
              <span className="dark:text-gray-100">
                ${(salesPrice || price) * quantity || 0}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-4 border-t py-2">
          <span className="font-semibold dark:text-gray-100">Total</span>
          <span className="dark:text-gray-100">
            $
            {cart.reduce(
              (acc, curr) =>
                acc + (curr?.salesPrice || curr?.price) * curr?.quantity,
              0
            ) || 0}
          </span>
        </div>
      </div>
    </>
  );
};

export default CustomCart;
