import { CustomInput } from "../../components/custom/CustomInput";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useEffect, useState } from "react";
import { editProfileDetail } from "../../features/user/userAction";
import { Link, useNavigate } from "react-router-dom";
import { CustomModal } from "../../components/custom/CustomModal";

const detailInput = [
  {
    placeholder: "First Name",
    name: "firstName",
    type: "text",
    required: true,
  },
  {
    placeholder: "Last Name",
    name: "lastName",
    type: "text",
    required: true,
  },
  {
    placeholder: "Phone",
    name: "phone",
    type: "number",
    required: true,
  },
];

const emailInput = [
  {
    placeholder: "Email",
    name: "email",
    type: "email",
    required: true,
  },
  {
    placeholder: "Password",
    name: "password",
    type: "password",
    required: true,
  },
];

const passwordInput = [
  {
    placeholder: "Current Password",
    name: "currentPassword",
    type: "password",
    required: true,
  },
  {
    placeholder: "New Password",
    name: "newPassword",
    type: "password",
    required: true,
  },
  {
    placeholder: "Confirm New Password",
    name: "confirmPassword",
    type: "password",
    required: true,
  },
];

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useSelector((state) => state.user);
  const { form, setForm, handleOnChange } = useForm({ ...user } || {});
  const [profileImage, setProfileImage] = useState(user?.profileImage || null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?._id) {
      navigate("/login");
      return;
    }
    setForm({ ...user });
  }, [setForm, user, navigate]);

  const hideModal = () => {
    setShowModal(false);
  };

  // handle form submit
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const { name } = e.target;

    let updateObj = {};
    const {
      firstName,
      lastName,
      phone,
      email,
      password,
      currentPassword,
      newPassword,
      confirmPassword,
    } = form;

    switch (name) {
      case "details":
        updateObj = { firstName, lastName, phone, password };
        break;
      case "email":
        updateObj = { email, password };
        break;
      case "password":
        if (newPassword !== confirmPassword) {
          return alert("New Password Must Match");
        }
        updateObj = { currentPassword, newPassword };
        break;
      default:
        updateObj = {};
    }

    dispatch(editProfileDetail(updateObj, name));
  };

  // handle Image Change
  const handleOnImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0)
      setProfileImage(e.target.files[0]);
  };

  // handle Image Update Submit
  const handleUpdateImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImage", profileImage);

    dispatch(editProfileDetail(formData, "profile-image"));
  };

  // handle form reset
  const resetForm = () => {
    setForm({ ...user } || {});
  };

  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
        {showModal && (
          <CustomModal title="Update Profile Image" onHide={hideModal}>
            <form
              className="flex flex-col gap-2 text-sm"
              onSubmit={handleUpdateImage}
            >
              <input
                name="profile-image"
                type="file"
                accept="image/png,image/jpeg, image/gif, image/webp"
                onChange={handleOnImageChange}
              />

              {profileImage !== null && (
                <div className="flex justify-center">
                  <img
                    src={URL.createObjectURL(profileImage)}
                    alt=""
                    className="w-24 h-24 object-cover rounded-full"
                  />
                </div>
              )}
              <button
                type="submit"
                className="rounded-md bg-purple-600 py-2 px-4 text-sm text-white data-[hover]:bg-pruple-500 data-[active]:bg-purple-700"
              >
                Edit Profile Image
              </button>
            </form>
          </CustomModal>
        )}
        <div className="text-lg font-semibold flex text-purple-600 gap-10">
          <h1>Profile</h1>
          <Link to={"/my-orders"}>My Orders</Link>
        </div>
        {/* Desktop View */}
        {/* Tabs Option */}
        <div className="flex justify-center gap-4 mt-16">
          <div className=" px-2">
            <div className="group relative w-28 h-28 border border-gray-500 rounded-full shadow-md flex justify-center items-center font-bold overflow-hidden">
              <button
                onClick={() => setShowModal(!showModal)}
                className="absolute hidden group-hover:inline bottom-0 left-0 w-full px-2 py-2 bg-teal-500 rounded-md z-10 text-white text-sm"
              >
                Edit
              </button>

              {profileImage ? (
                <img
                  src={URL.createObjectURL(profileImage)}
                  alt="Profile"
                  className="relative w-full h-full object-cover object-center"
                />
              ) : (
                <span className="relative">
                  {user?.firstName?.slice(0, 1)?.toUpperCase()}
                  {user?.lastName?.slice(0, 1)?.toUpperCase()}
                </span>
              )}
            </div>
          </div>
          <div className="w-3/5 px-6 py-4 border rounded-lg mb-10">
            <TabGroup as="div" className="py-10 px-6">
              {/* Tabs */}
              <TabList className="flex gap-10 justify-center border-b border-gray-200 dark:border-gray-700 py-4 rounded-md bg-gray-600 text-white text-sm font-semibold ">
                <Tab onClick={resetForm}>Details</Tab>
                <Tab onClick={resetForm}>Email</Tab>
                <Tab as="button" onClick={resetForm}>
                  Password
                </Tab>
              </TabList>

              {/* Tab Panels */}
              <TabPanels>
                {/* Details Panel */}
                <TabPanel className="pt-6">
                  <form
                    className="space-y-4"
                    onSubmit={handleProfileUpdate}
                    name="details"
                  >
                    {detailInput?.map((item, i) => (
                      <CustomInput
                        key={i}
                        {...item}
                        onChange={handleOnChange}
                        value={form[item?.name] || ""}
                      />
                    ))}
                    <button
                      type="submit"
                      className="mt-10 flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                    >
                      Update Profile
                    </button>
                  </form>
                </TabPanel>

                {/* Email Panel */}
                <TabPanel className="pt-6">
                  <form
                    className="space-y-4"
                    onSubmit={handleProfileUpdate}
                    name="email"
                  >
                    {emailInput?.map((item, i) => (
                      <CustomInput
                        key={i}
                        {...item}
                        onChange={handleOnChange}
                        value={form[item?.name] || ""}
                      />
                    ))}
                    <button
                      type="submit"
                      className="mt-10 flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                    >
                      Update Email
                    </button>
                  </form>
                </TabPanel>

                {/* Password Panel */}
                <TabPanel className="pt-6">
                  <form
                    className="space-y-4"
                    onSubmit={handleProfileUpdate}
                    name="password"
                  >
                    {passwordInput?.map((item, i) => (
                      <CustomInput
                        key={i}
                        {...item}
                        onChange={handleOnChange}
                        value={form[item?.name] || ""}
                      />
                    ))}
                    <button
                      type="submit"
                      className="mt-10 flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                    >
                      Update Password
                    </button>
                  </form>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
