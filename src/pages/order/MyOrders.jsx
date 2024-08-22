import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrdersAction } from "../../features/order/orderAction";
import { Link, useNavigate } from "react-router-dom";
import ReviewForm from "../../components/product/ReviewForm";
import { CustomModal } from "../../components/custom/CustomModal";

const MyOrders = () => {
  const [showReviewModal, toggleReviewModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { myOrders } = useSelector((state) => state.orders);
  const { user } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchAllOrdersAction());
  }, [dispatch]);

  const handleReview = (productId, orderId) => {
    setSelectedProduct({ productId, orderId });
    toggleReviewModal(!showReviewModal);
  };
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
      {showReviewModal && (
        <CustomModal title="Leave your Review.." onHide={toggleReviewModal}>
          <ReviewForm selectedProduct={selectedProduct} />
        </CustomModal>
      )}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-center mb-10 font-bold text-lg">My Orders</h1>

        {/* Order History */}
        <div className="space-y-4">
          {myOrders?.map((order) => (
            <div
              key={order?._id}
              className="border border-gray-300 dark:border-gray-700 rounded-md flex justify-center flex-col max-w-4xl mx-auto"
            >
              <div className="bg-gray-100 dark:bg-gray-700 border-b dark:border-b-0 border-b-gray-300 py-4 rounded-t px-10 flex justify-between">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Order Number</span>
                  <span className="text-xs">{order?.orderId}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Order Placed</span>
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
                  <h1 className="text-xs text-green-700">
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
                      <div
                        key={item?._id}
                        className="pb-4 mb-4 flex justify-between items-start"
                      >
                        <div className="flex gap-4">
                          <div className="relative">
                            <span className="absolute bottom-0 right-0 bg-teal-600 text-white rounded-full border z-10 w-6 h-6 flex justify-center items-center">
                              {item?.quantity}
                            </span>
                            <img
                              src={
                                products?.find((itm) => itm?._id === item?._id)
                                  ?.thumbnail
                              }
                              alt={item?.name}
                              className="relative h-24 w-24 object-cover rounded-md"
                            />
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-teal-600">{item?.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              Amount: ${item?.price}
                            </p>

                            <Link
                              to={`/product/${item?._id}`}
                              className="px-6 py-2  rounded-2xl border border-gray-300 dark:border-gray-700 hover:bg-teal-500 hover:text-white text-sm"
                            >
                              View Product
                            </Link>

                            <button className="ml-1 px-9 py-2 rounded-2xl border border-gray-300 dark:border-gray-700 hover:bg-teal-500 hover:text-white text-sm">
                              Buy Again
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            handleReview(item?._id, order?.orderId)
                          }
                          className="px-6 py-2 rounded-2xl border border-gray-300 dark:border-gray-700 hover:bg-teal-500 hover:text-white "
                        >
                          Leave Product Review
                        </button>
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
