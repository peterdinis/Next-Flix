"use client";

import { useAuth } from "@/hooks/useAuth";
import { FC, useState } from "react";
import Cookies from "js-cookie";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const ProfileInfo: FC = () => {
  const router = useRouter();
  const { currentUser, logout } = useAuth();

  const profileCookie = Cookies.get("userCredentials");
  let userPassword = "";

  if (profileCookie) {
    userPassword = JSON.parse(profileCookie).password;
  }

  const [password, setPassword] = useState(userPassword);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const logoutUser = () => {
    logout();
    Cookies.remove("userCredentials");
    toast.success("Logout successfull");
    router.push("/login");
  };

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0">
      <div className="space-y-2 py-4">
        <h4 className="text-lg text-[gray]">Account Info</h4>
      </div>
      <div className="col-span-3">
        <div className="border-b border-white/10 py-4 md:flex-row">
          <p className="font-medium text-blue-50">
            Email: {currentUser?.email}
          </p>{" "}
          <br />
          <p className="font-medium text-blue-50 mt-4">
            Account Created at: {currentUser?.metadata.creationTime}
          </p>{" "}
          <br />
          <p className="font-medium text-blue-50 mt-4">
            Last Login at: {currentUser?.metadata.lastSignInTime}
          </p>{" "}
          <br />
          <p className="font-medium text-blue-50 mt-4">
            Your Password:{" "}
            <input
              className="bg-transparent border-none"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={togglePasswordVisibility}>
              {showPassword ? <VisibilityOff /> : <Visibility />} Show Password
            </span>
          </p>{" "}
          <br />
        </div>
        <div className="mt-8">
          <button
            onClick={logoutUser}
            className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
