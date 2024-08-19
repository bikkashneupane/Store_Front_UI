import { CustomForm } from "../../components/custom/CustomForm";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useEffect } from "react";
import { editProfileDetail } from "../../features/user/userAction";

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
  {
    placeholder: "Password",
    name: "password",
    type: "password",
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
  const { user } = useSelector((state) => state.user);
  const { form, setForm, handleOnChange } = useForm({ ...user } || {});

  const dispatch = useDispatch();

  useEffect(() => {
    setForm({ ...user });
  }, [setForm, user]);

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
        // dispatch(editProfileDetail(updateObj));
        break;
      case "email":
        updateObj = { email, password };
        break;
      case "password":
        if (newPassword !== confirmPassword) {
          return alert("New Password Must Match");
        }
        updateObj = { currentPassword, newPassword };
        // dispatch(editProfileDetail(updateObj));

        break;
      default:
        updateObj = {};
    }

    dispatch(editProfileDetail(updateObj, name));
  };

  // handle form reset
  const resetForm = () => {
    setForm({ ...user } || {});
  };

  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1>Profile</h1>
        {/* Desktop View */}
        {/* Tabs Option */}
        <div className="flex gap-10 mt-10">
          <div className=" px-2 pt-8">
            <div className="group relative w-56 h-56 border rounded-full shadow-md flex justify-center items-center font-bold overflow-hidden">
              <button className="absolute hidden group-hover:inline bottom-0 left-0 w-full px-2 py-2 bg-gray-200 rounded-md z-10">
                Edit
              </button>

              {user?.profileImage ? (
                <img
                  src=""
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
          <div className="w-3/5 px-2">
            <TabGroup>
              {/* Tabs */}
              <TabList className="flex gap-16 border-b border-gray-200 dark:border-gray-700">
                <Tab
                  onClick={resetForm}
                  className="py-3 text-lg font-bold text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  Details
                </Tab>
                <Tab
                  onClick={resetForm}
                  className="py-3 text-lg font-bold text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  Email
                </Tab>
                <Tab
                  onClick={resetForm}
                  className="py-3 text-lg font-bold text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                >
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
                      <CustomForm
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
                      <CustomForm
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
                      <CustomForm
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
