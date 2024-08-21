import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrdersAction } from "../../features/order/orderAction";
import { Link, useNavigate } from "react-router-dom";

const MyOrders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { myOrders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchAllOrdersAction());
  }, [dispatch]);

  console.log(myOrders);

  if (!user?._id) {
    navigate("/login");
  }

  if (myOrders?.length === 0) {
    return (
      <div className="flex justify-center min-h-[50vh] items-center">
        <p className="text-gray-600 dark:text-gray-400">
          No orders found.{" "}
          <Link to="/products" className="text-purple-600">
            Shop now.
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-8">
        <h1 className="text-center mb-10 font-bold text-lg">My Orders</h1>
        {/* Order History */}
        <div className="space-y-4">
          {myOrders?.map((order) => (
            <div
              key={order?._id}
              className="border border-gray-300 dark:border-gray-700 rounded-md flex justify-center flex-col max-w-3xl mx-auto"
            >
              <div className="bg-gray-100 dark:bg-gray-700 border-b dark:border-b-0 border-b-gray-300 py-4 rounded-t px-10 flex justify-between">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Order Number</span>
                  <span className="text-xs">{order?.orderId}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Date Places</span>
                  <span className="text-xs">
                    {new Date(order?.createdAt?.slice(0, 10))
                      ?.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })
                      .replace(",", "")}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Status</span>
                  <h1
                    className={`text-xs ${
                      order?.status === "processing"
                        ? "text-yellow-500"
                        : "text-green-500"
                    }`}
                  >
                    {order?.status?.toUpperCase()}
                  </h1>
                </div>
                <div className="flex flex-col gap-1 font-semibold">
                  <span>Total Amount</span>
                  <span>${order?.amount}</span>
                </div>
              </div>

              <div className="px-2 sm:px-4 md:px-8 lg:px-10 w-full ">
                <div className="">
                  <div className="mt-4">
                    {order?.items?.map((item) => (
                      <div key={item?._id} className="pb-4 mb-4 w-full">
                        <div className="flex w-full">
                          <img
                            src={
                              products?.find((itm) => itm?._id === item?._id)
                                ?.thumbnail
                            }
                            alt={item?.name}
                            className="h-32 w-32 object-cover rounded-md mr-4"
                          />
                          <div className="space-y-2 flex w-full">
                            <div className="space-y-1">
                              <h3 className="font-semibold dark:text-gray-100">
                                {item?.name}
                                <div className="space-y-1 text-sm">
                                  <p className="text-gray-600 dark:text-gray-400">
                                    Quantity: {item?.quantity}
                                  </p>
                                  <p className="text-gray-600 dark:text-gray-400">
                                    Amount: ${item?.price * item?.quantity}
                                  </p>
                                </div>
                              </h3>
                            </div>

                            <div className="flex items-end w-full justify-end gap-1">
                              <Link
                                to={`/product/${item?._id}`}
                                className="px-6 py-2 rounded-md bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold"
                              >
                                View Product
                              </Link>

                              <button className="px-9 py-2 rounded-md bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold">
                                Buy Again
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
