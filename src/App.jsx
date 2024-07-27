import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "swiper/swiper-bundle.css";
import { ToastContainer } from "react-toastify";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Signup from "./pages/user/Signup";
import Login from "./pages/user/Login";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import ErrorElement from "./components/layout/ErrorElement";
import ProductLanding from "./pages/product/ProductLanding";
import Products from "./pages/product/Products";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/cart/Checkout";
import Payment from "./pages/payment/Payment";
import Profile from "./pages/user/Profile";
import VerifyAccount from "./pages/user/VerifyAccount";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsAction } from "./features/product/productAction";

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
        path: "/payment",
        element: <Payment />,
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/verify-account",
        element: <VerifyAccount />,
      },
    ],
  },
]);

function DefaultLayout() {
  return (
    <>
      <Header />
      {/* pt-[80px] */}
      <div className="min-h-[75vh] ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, [dispatch]);
  return (
    <>
      <RouterProvider router={appRouter} />
      <ToastContainer />
    </>
  );
}

export default App;
