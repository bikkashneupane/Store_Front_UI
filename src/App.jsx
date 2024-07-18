import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorElement from "./components/layout/ErrorElement";
import ProductLanding from "./pages/ProductLanding";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

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
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
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
        path: "/product/:_id",
        element: <ProductLanding />,
      },
    ],
  },
]);

function DefaultLayout() {
  return (
    <>
      <Header />
      {/* change the pt to 150 when top nav is used */}
      <div className="mx-auto min-h-[75vh] pt-[100px] bg-gray-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
