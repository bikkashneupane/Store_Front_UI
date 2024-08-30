import "react-toastify/dist/ReactToastify.css";
import "swiper/swiper-bundle.css";
import "./App.css";

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  fetchCategoriesAction,
  fetchSubCatAction,
} from "./features/category/categoryAction";
import { useEffect, useState } from "react";

import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Contact from "./pages/contact/Contact";
import ErrorElement from "./components/layout/ErrorElement";
import Footer from "./components/layout/Footer";
import { ForgetPassword } from "./pages/user/ForgetPassword";
import Header from "./components/layout/Header/Header";
import Home from "./pages/home/Home";
import LoadingScreen from "./components/layout/LoadingScreen";
import Login from "./pages/user/Login";
import MyOrders from "./pages/order/MyOrders";
import OrderConfirmation from "./pages/order/OrderConfirmation";
import ProductLanding from "./pages/product/ProductLanding";
import Products from "./pages/product/Products";
import Profile from "./pages/user/Profile";
import Signup from "./pages/user/Signup";
import { ToastContainer } from "react-toastify";
import VerifyAccount from "./pages/user/VerifyAccount";
import { autoLoginAction } from "./features/user/userAction";
import { fetchProductsAction } from "./features/product/productAction";
import { fetchReviewAction } from "./features/review/reviewAction";
import { useDispatch } from "react-redux";
import useScrollToTop from "./hooks/useScrollToTop";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:_id",
        element: <ProductLanding />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/order-confirmation",
        element: <OrderConfirmation />,
      },
      {
        path: "/my-orders",
        element: <MyOrders />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/verify-account",
    element: <VerifyAccount />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
]);

function DefaultLayout() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // custom hook, scroll to top when navigating
  useScrollToTop();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative">
      <Header />
      <div className="min-h-[75vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAction());
    dispatch(fetchCategoriesAction());
    dispatch(fetchSubCatAction());
    dispatch(autoLoginAction());
    dispatch(fetchReviewAction());
  }, [dispatch]);
  return (
    <>
      <RouterProvider router={appRouter} />
      <ToastContainer
        position="top-right"
        stacked
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        newestOnTop={true}
      />
    </>
  );
}

export default App;
