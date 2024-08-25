import { Link, useNavigate } from "react-router-dom";
import bg_url from "./../../assets/images/wrist-watch.avif";
import watch_logo from "../../assets/images/watch_logo.png";
import { useForm } from "../../hooks/useForm";
import { toast } from "react-toastify";
import { signupUserAction } from "../../features/user/userAction";
import { CustomInputForNonChangingBg } from "../../components/custom/CustomInput";

const Signup = () => {
  const { form, handleOnChange } = useForm([]);
  const navigate = useNavigate();

  const handleOnSignup = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return toast.error("Password Must Match");
    }
    console.log(rest);
    const status = await signupUserAction(rest);
    if (status === "success") {
      navigate("/login");
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
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-16 flex flex-col justify-center items-center mb-4 gap-4">
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Join Now! <br />
            <span className="text-center text-sm">
              Please fill the information below
            </span>
          </h2>
          <Link to={"/"}>
            <img src={watch_logo} className="w-20 h-20" alt="" />
          </Link>
        </div>

        <div className="mt-2 sm:mx-auto md:min-w-[550px] p-10 md:max-w-md flex justify-center rounded-lg shadow-lg border border-gray-300">
          <form className="space-y-3 w-full " onSubmit={handleOnSignup}>
            {inputs.map((item, i) => (
              <CustomInputForNonChangingBg
                key={i}
                {...item}
                onChange={handleOnChange}
              />
            ))}

            <div className="pt-2">
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
