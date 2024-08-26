import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "swiper/swiper-bundle.css";
import { ToastContainer } from "react-toastify";
import Footer from "./components/layout/Footer";
import Signup from "./pages/user/Signup";
import Login from "./pages/user/Login";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import ErrorElement from "./components/layout/ErrorElement";
import ProductLanding from "./pages/product/ProductLanding";
import Products from "./pages/product/Products";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/user/Profile";
import VerifyAccount from "./pages/user/VerifyAccount";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsAction } from "./features/product/productAction";
import {
  fetchCategoriesAction,
  fetchSubCatAction,
} from "./features/category/categoryAction";
import "./App.css";
import Checkout from "./pages/checkout/Checkout";
import { autoLoginAction } from "./features/user/userAction";
import OrderConfirmation from "./pages/order/OrderConfirmation";
import MyOrders from "./pages/order/MyOrders";
import useScrollToTop from "./hooks/useScrollToTop";
import Header from "./components/layout/Header";
import { fetchReviewAction } from "./features/review/reviewAction";
import { ForgetPassword } from "./pages/user/ForgetPassword";
import LoadingScreen from "./components/layout/LoadingScreen";

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
