import { CustomInput } from "../custom/CustomInput";
import { useRef } from "react";

export const RequestOTP = ({ handleOnOTPRequest }) => {
  const emailRef = useRef("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    email && handleOnOTPRequest(email);
  };

  const inputs = {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "user@email.com",
    required: true,
    inputRef: emailRef,
  };

  return (
    <form className="shadow-lg p-4" onSubmit={handleOnSubmit}>
      <h3 className="text-center mb-4 text-white font-bold">Request OTP</h3>
      <hr className="mb-4" />

      <CustomInput {...inputs} />

      <button
        className="w-full mt-4 bg-purple-600 text-white py-2 px-6 rounded-md shadow-lg"
        type="submit"
      >
        Request Now
      </button>
    </form>
  );
};
