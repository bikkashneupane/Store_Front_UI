import React from "react";
import { CustomForm } from "../components/custom/CustomForm";
import { Link } from "react-router-dom";

const Login = () => {
  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
    },
  ];
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 lg:px-8 mt-10 items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img className="mx-auto w-44" src="../src/assets/vikiasmy.png" /> */}
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-600">
            Login
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto w-full p-4 md:max-w-md flex justify-center">
          <form className="space-y-3 w-full md:min-w-[500px]">
            {inputs.map((item, i) => (
              <CustomForm key={i} {...item} />
            ))}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-purple-600 mt-3 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                Login
              </button>
            </div>
            <div className="flex justify-end gap-2">
              <span>Don't have an account?</span>
              <Link to={"/signup"} className="font-bold text-purple-500">
                Register Now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
