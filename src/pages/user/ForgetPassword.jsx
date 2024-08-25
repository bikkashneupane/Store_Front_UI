import { useState } from "react";
import { RequestOTP } from "../../components/password-reset/RequestOTP";
import { ResetPassword } from "../../components/password-reset/ResetPassword";
import { requestOTP, resetPasswordAxios } from "../../features/user/userAxios";
import bg_url from "./../../assets/images/wrist-watch.avif";

export const ForgetPassword = () => {
  const [showForm, setShowForm] = useState("otp");
  const [response, setResponse] = useState({});
  const [email, setEmail] = useState("");
  const [timer, setTimer] = useState(0);

  const handleOnOTPRequest = async (email) => {
    setTimer(60);
    setEmail(email);

    const res = await requestOTP({ email });
    setResponse(res);

    if (res?.status === "success") {
      setShowForm("reset");
      countDown();
    }
  };

  const handleOnPasswordReset = async (otp, password) => {
    const res = await resetPasswordAxios({ otp, email, password });
    setResponse(res);
  };

  const countDown = () => {
    const cd = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) clearInterval(cd);
        return prevTimer - 1;
      });
    }, 1000);
  };

  const forms = {
    otp: <RequestOTP handleOnOTPRequest={handleOnOTPRequest} />,
    reset: <ResetPassword handleOnPasswordReset={handleOnPasswordReset} />,
  };

  return (
    <div
      className="relative"
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
        <div className="mt-32 sm:mx-auto md:min-w-[550px] p-10 md:max-w-md flex justify-center rounded-lg shadow-lg border border-gray-300">
          <div className="p-6 rounded shadow-md w-full max-w-md">
            {response?.message && (
              <div className="border p-2 rounded-lg mb-10">
                <div
                  className={`p-4 mb-4 rounded ${
                    response?.status === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {response?.message}
                </div>

                <div className="mt-3 text-center">
                  OTP Not Received? Request OTP again
                  <button
                    className={`w-full mt-2 mb-4 px-4 py-2 rounded ${
                      timer > 0
                        ? "bg-yellow-500 text-white"
                        : "bg-teal-500 text-white"
                    }`}
                    disabled={timer > 0}
                    onClick={() => handleOnOTPRequest(email)}
                  >
                    {timer > 0 ? `Request In ${timer}s` : `Request Again`}
                  </button>
                </div>
              </div>
            )}

            {forms[showForm]}

            <div className="text-right mt-3 pe-1">
              <a href="/login" className="text-teal-600 hover:underline">
                Login Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
