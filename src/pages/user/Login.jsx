import { CustomForm } from "./../../components/custom/CustomForm";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bg_url from "./../../assets/images/login-signup-wallpaper.jpg";
import { useRef } from "react";
import { loginUserAction } from "../../features/user/userAction";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      return toast.error("Email and Password must be provided.");
    }
    dispatch(loginUserAction({ email, password }, navigate));
  };

  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      inputRef: emailRef,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      inputRef: passwordRef,
    },
  ];

  return (
    <div className="relative" style={{ backgroundImage: `url(${bg_url})` }}>
      <div className="absolute bg-black bg-opacity-40 w-full h-full"></div>

      <div className="relative flex min-h-screen flex-col px-6 lg:px-8 items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-20 md:mt-32">
          {/* <img className="mx-auto w-44" src="../src/assets/vikiasmy.png" /> */}
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Login
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto w-full p-4 md:max-w-md flex justify-center">
          <form
            className="space-y-3 w-full md:min-w-[500px]"
            onSubmit={handleOnLogin}
          >
            {inputs.map((item, i) => (
              <CustomForm key={i} {...item} />
            ))}

            <div className="">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-purple-600 mt-3 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                Login
              </button>
            </div>
            <div className="flex justify-end gap-2">
              <span className="text-white">Don't have an account?</span>
              <Link to={"/signup"} className="font-bold text-purple-500">
                Register Now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
