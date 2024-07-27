import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { verifyAccountAction } from "../../features/user/userAction";
import "./user-css/user.css";

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

  console.log(response);

  return (
    <div className="bg-teal-200 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              {console.log(response)}
              <span>{response?.message}</span>
              <button className="px-8 py-2 bg-teal-600 text-white rounded-md shadow-lg font-bold hover:bg-teal-500">
                Login Now
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-4 justify-center items-center min-h-[50vh]">
            <span className="font-bold tracking-wider text-xl text-red-500">
              {response?.message || "Verification failed. Please try again."}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyAccount;
