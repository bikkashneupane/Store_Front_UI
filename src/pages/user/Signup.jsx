import { CustomForm } from "./../../components/custom/CustomForm";
import { Link, useNavigate } from "react-router-dom";
import bg_url from "./../../assets/images/login-signup-wallpaper.jpg";
import { useForm } from "../../hooks/useForm";
import { toast } from "react-toastify";
import { signupUserAction } from "../../features/user/userAction";

const Signup = () => {
  const { form, handleOnChange } = useForm([]);
  const navigate = useNavigate();

  const handleOnSignup = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return toast.error("Password Must Match");
    }

    const status = signupUserAction(rest);
    if (status === "success") {
      navigate("/");
    }
  };

  const inputs = [
    {
      label: "First Name",
      name: "firstName",
      type: "text",
      required: true,
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      required: true,
    },
  ];

  return (
    <div className="relative" style={{ backgroundImage: `url(${bg_url})` }}>
      <div className="absolute bg-black bg-opacity-40 w-full h-full"></div>

      <div className="relative flex min-h-screen flex-col px-6 lg:px-8 items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-20 md:mt-32">
          {/* <img className="mx-auto w-44" src="../src/assets/vikiasmy.png" /> */}
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Join the Community!
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto w-full p-4 md:max-w-md flex justify-center">
          <form
            className="space-y-3 w-full md:min-w-[500px]"
            onSubmit={handleOnSignup}
          >
            {inputs.map((item, i) => (
              <CustomForm key={i} {...item} onChange={handleOnChange} />
            ))}

            <div className="">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-purple-600 mt-3 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                Register
              </button>
            </div>
            <div className="flex justify-end gap-2">
              <span className="text-white">Already have an account?</span>
              <Link to={"/login"} className="font-bold text-purple-500">
                Login Now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
