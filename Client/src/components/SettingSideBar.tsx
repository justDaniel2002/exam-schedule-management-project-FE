import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LockIcon from "@mui/icons-material/Lock";
import EditProfile from "../page/EditProfile/EditProfile";
import ChangePassword from "../page/ChangePassword";
import ReportPage from "../page/ReportPage";
import OrderHistory from "../page/OrderHistory/OrderHistory";

const options = [
  {
    label: "Edit Profile",
    Icon: EditIcon,
    Link: "/Profile",
  },
  {
    label: "Order History",
    Icon: ShoppingBagIcon,
    Link: "/Profile",
  },
  {
    label: "Change Password",
    Icon: LockIcon,
    Link: "/Profile/ChangePassword",
  },
];

const SettingSideBar = () => {
  const [selectedOption, setSelectedOption] = useState("Edit Profile");

  const prop = () => {
    switch (selectedOption) {
      case "Edit Profile":
        return <EditProfile />;
      case "Change Password":
        return <ChangePassword />;
      case "Report":
        return <ReportPage />;
      case "Order History":
        return <OrderHistory />;
      default:
        return <EditProfile />;
    }
  };

  return (
    <>
        <div className="flex h-full">
          <div className="w-3/12 pt-36 px-5 flex flex-col items-center h-full">
            <div className="text-2xl font-bold mb-10"> Settings</div>
            <div className="flex flex-col justify-between font-medium text-neutral-600">
              {options.map((option) => (
                <>
                  {option.label !== selectedOption ? (
                    <div
                      onClick={() => setSelectedOption(option.label)}
                      className="hover:bg-neutral-300 p-3 rounded-full"
                    >
                      <option.Icon /> {option.label}
                    </div>
                  ) : (
                    <div
                      onClick={() => setSelectedOption(option.label)}
                      className="bg-neutral-300 p-3 rounded-full"
                    >
                      <option.Icon /> {option.label}
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
          <div className="w-9/12">{prop()}</div>
        </div>
    </>
  );
};

export default SettingSideBar;
