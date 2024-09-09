import { Bars3Icon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Disclosure, DisclosureButton } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import CategoriesDropDown from "./CategoriesDropDown";
import DarkMode from "../../custom/DarkMode";
import MobileMenu from "./MobileMenu";
import NavbarMenu from "./NavBarMenu";
import PorfileMenu from "./PorfileMenu";
import { setUser } from "../../../features/user/UserSlice";
import watch_logo from "../../../assets/images/watch_logo.png";
import { toast } from "react-toastify";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showCat, setShowCat] = useState(false);
  const [currentBrand, setCurrentBrand] = useState([]);
  const [currentMaterial, setCurrentMaterial] = useState([]);
  const [currentCatId, setCurrentCatId] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.carts);
  const { categories, brands, materials } = useSelector(
    (state) => state.categories
  );

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOnLogout = () => {
    dispatch(setUser({}));
    localStorage.removeItem("refreshJWT");
    sessionStorage.removeItem("accessJWT");
    navigate("/");
    toast.success("User Logged Out");
  };

  const navigation = [
    ...(categories || []).map((cat) => ({
      _id: cat?._id,
      name: cat?.title,
      to: `/products?category=${cat?._id}`,
      catBrands: (brands || []).filter((item) =>
        cat.brand?.includes(item?._id)
      ),
      catMaterials: (materials || []).filter((item) =>
        cat.material?.includes(item?._id)
      ),
    })),
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
    { name: "Cart", to: "/cart", mobile: true },
    { name: "My Orders", to: "/my-orders", mobile: true },
    { name: "Profile", to: "/profile", mobile: true },
  ];

  return (
    <div className="w-full shadow-lg sticky top-0 z-50">
      <Disclosure
        as="nav"
        className={`${
          scrollY > 0 && "bg-gray-900 text-white"
        } transition-colors duration-300 dark:bg-gray-900 dark:border-b dark:border-b-gray-700`}
      >
        <div className="mx-auto max-w-7xl ps-2 pe-4 md:px-6">
          <div className="relative flex items-center justify-between py-6">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              <DisclosureButton
                onClick={() => setMobileOpen(true)}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <Bars3Icon aria-hidden="true" className="block h-6 w-6" />
              </DisclosureButton>
            </div>
            <div className="mx-auto flex flex-1 items-center justify-center md:justify-start">
              <Link
                to={"/"}
                className="flex items-center gap-1 text-gray-700 dark:text-gray-200 font-semibold text-xl"
              >
                <img
                  alt="Vikiasmy"
                  src={watch_logo}
                  className="h-[30px] w-[30px]"
                />
                <h1 className={scrollY > 0 ? "text-gray-200" : ""}>
                  vikiasmy's
                </h1>
              </Link>

              {/* Navigations */}

              <NavbarMenu
                navigation={navigation}
                setCurrentCatId={setCurrentCatId}
                setCurrentBrand={setCurrentBrand}
                setCurrentMaterial={setCurrentMaterial}
                setShowCat={setShowCat}
              />
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 gap-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <PorfileMenu handleOnLogout={handleOnLogout} />

              <DarkMode />

              <Link to={"/cart"}>
                <div className="relative flex">
                  <ShoppingBagIcon
                    className={`${
                      scrollY > 0 ? "text-gray-200" : "text-gray-800"
                    } dark:text-gray-300 w-6 h-6`}
                  />
                  <span className="absolute -top-2 left-4 bg-red-500 text-white rounded-full text-xs font-semibold px-[7px]">
                    {cart?.reduce((acc, curr) => acc + curr?.quantity, 0)}
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <MobileMenu
            navigation={navigation}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
            setCurrentCatId={setCurrentCatId}
            setCurrentBrand={setCurrentBrand}
            setCurrentMaterial={setCurrentMaterial}
            currentCatId={currentCatId}
          />
        </div>

        <CategoriesDropDown
          showCat={showCat}
          setShowCat={setShowCat}
          currentBrand={currentBrand}
          currentCatId={currentCatId}
          currentMaterial={currentMaterial}
        />
      </Disclosure>
    </div>
  );
};

export default Header;
