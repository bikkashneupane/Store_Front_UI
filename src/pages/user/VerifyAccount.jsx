import "./user-css/user.css";

import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import bg_url from "./../../assets/images/wrist-watch.avif";
import { verifyAccountAction } from "../../features/user/userAction";

const VerifyAccount = () => {
  const [searchParam] = useSearchParams();
  const uniqueKey = searchParam.get("uk");
  const email = searchParam.get("e");

  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(true);
  const shouldCall = useRef(true);

  useEffect(() => {
    const verifyAcc = async () => {
      try {
        const res = await verifyAccountAction({ uniqueKey, email });
        setResponse(res);
      } catch (error) {
        setResponse({ status: "error", message: error.message });
      } finally {
        setLoading(false);
      }
    };

    if (shouldCall.current && uniqueKey && email) {
      verifyAcc();
      shouldCall.current = false;
    }
  }, [uniqueKey, email]);

  return (
    <div
      className="relative text-white"
      style={{
        backgroundImage: `url(${bg_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="absolute bg-black bg-opacity-70 w-full h-full"></div>
      <div className="relative flex min-h-screen flex-col px-6 lg:px-8 items-center">
        {loading ? (
          <div className="flex flex-col gap-4 justify-center items-center min-h-[50vh]">
            <div className="animate-spin-slow w-12 h-12 border-4 border-dashed rounded-full border-yellow-500"></div>
            <span className="font-bold tracking-wider text-xl">
              Verifying Account...
            </span>
          </div>
        ) : response?.status === "success" ? (
          <div className="flex flex-col gap-4 justify-center items-center min-h-[50vh]">
            <Link to="/login" className="flex flex-col gap-2">
              <span>{response?.message}</span>
              <button className="px-8 py-2 bg-teal-600 text-white rounded-md shadow-lg font-bold hover:bg-teal-500">
                Login Now
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-4 justify-center items-center min-h-[50vh]">
            <span className="font-bold tracking-wider text-xl text-red-600">
              {response?.message || "Verification failed. Please try again."}
            </span>
            <Link
              to={"/forget-password"}
              className="px-6 py-2 bg-purple-600 text-white rounded-md mt-4"
            >
              Request New OPT
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyAccount;
